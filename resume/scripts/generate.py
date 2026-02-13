#!/usr/bin/env python3
"""
Resume Generator
Semi-automated resume generation with transparency reporting.
"""

import json
import os
import sys
import re
from datetime import datetime
from pathlib import Path
from collections import Counter
import subprocess

# Paths
SCRIPT_DIR = Path(__file__).parent
RESUME_DIR = SCRIPT_DIR.parent
DATA_DIR = RESUME_DIR / "data"
TEMPLATES_DIR = RESUME_DIR / "templates"
GENERATED_DIR = RESUME_DIR / "generated"


def load_json(filename):
    """Load a JSON file from the data directory"""
    with open(DATA_DIR / filename, 'r') as f:
        return json.load(f)


def extract_keywords(job_posting):
    """Extract keywords from job posting"""
    # Common tech keywords and skills to look for
    keywords = set()
    
    # Convert to lowercase for matching
    text = job_posting.lower()
    
    # Common tech terms
    tech_terms = [
        'node.js', 'nodejs', 'javascript', 'typescript', 'python', 'java',
        'mongodb', 'postgres', 'sql', 'dynamodb', 'redis',
        'aws', 'lambda', 'sqs', 's3', 'kubernetes', 'docker',
        'microservices', 'distributed systems', 'event-driven',
        'scalability', 'performance', 'architecture',
        'mentoring', 'leadership', 'team lead',
        'testing', 'ci/cd', 'devops',
        'react', 'angular', 'frontend', 'backend', 'fullstack'
    ]
    
    for term in tech_terms:
        if term in text:
            keywords.add(term)
    
    return keywords


def score_achievement(achievement, keywords):
    """Score an achievement based on keyword matching"""
    score = 0
    text = (
        achievement.get('title', '') + ' ' +
        achievement.get('description', '') + ' ' +
        ' '.join(achievement.get('details', [])) + ' ' +
        ' '.join(achievement.get('tags', [])) + ' ' +
        ' '.join(achievement.get('tech_stack', []))
    ).lower()
    
    for keyword in keywords:
        if keyword in text:
            score += 1
    
    return score


def suggest_achievements(experiences, keywords, max_achievements=8):
    """Suggest relevant achievements based on keywords"""
    all_achievements = []
    
    for exp in experiences['experiences']:
        for achievement in exp.get('achievements', []):
            score = score_achievement(achievement, keywords)
            if score > 0:
                all_achievements.append({
                    'achievement': achievement,
                    'experience': exp,
                    'score': score
                })
    
    # Sort by score
    all_achievements.sort(key=lambda x: x['score'], reverse=True)
    
    return all_achievements[:max_achievements * 2]  # Return more than needed for user selection


def display_suggestions(suggestions):
    """Display suggested achievements for user approval"""
    print("\n" + "="*80)
    print("SUGGESTED ACHIEVEMENTS (sorted by relevance)")
    print("="*80 + "\n")
    
    for i, item in enumerate(suggestions, 1):
        ach = item['achievement']
        exp = item['experience']
        score = item['score']
        
        print(f"{i}. [{exp['company']}] {ach['title']}")
        print(f"   Score: {score} | Tags: {', '.join(ach.get('tags', []))}")
        print(f"   {ach['description'][:100]}...")
        print()


def get_user_selection(suggestions, max_select=8):
    """Let user select which achievements to include"""
    print(f"Select up to {max_select} achievements to include (e.g., 1,2,5,7 or 1-5):")
    print("Or press Enter to accept top selections")
    
    selection = input("> ").strip()
    
    if not selection:
        # Default: take top ones
        return suggestions[:max_select]
    
    # Parse selection
    selected_indices = set()
    parts = selection.split(',')
    
    for part in parts:
        part = part.strip()
        if '-' in part:
            # Range like "1-5"
            start, end = map(int, part.split('-'))
            selected_indices.update(range(start, end + 1))
        else:
            # Single number
            selected_indices.add(int(part))
    
    # Convert 1-indexed to 0-indexed
    selected = [suggestions[i-1] for i in selected_indices if 0 < i <= len(suggestions)]
    
    return selected[:max_select]


def generate_typst(personal, selected_achievements, output_path):
    """Generate Typst resume file"""
    
    # Read template
    with open(TEMPLATES_DIR / "professional.typ", 'r') as f:
        template = f.read()
    
    # Build content
    content = []
    
    # Header
    p = personal['personal']
    content.append(f"#header(\"{p['name']}\", \"{p['title']}\", \"{p['location']}\", \"{p['phone']}\", \"{p['email']}\", \"{p['website']}\")")
    
    # Summary
    content.append("\n// Summary")
    content.append("*" + p['summary'] + "* " + p['highlights'][0])
    
    # Experience section
    content.append("\n#section(\"Experience\")")
    
    # Group achievements by company
    by_company = {}
    for item in selected_achievements:
        company_id = item['experience']['id']
        if company_id not in by_company:
            by_company[company_id] = {
                'experience': item['experience'],
                'achievements': []
            }
        by_company[company_id]['achievements'].append(item['achievement'])
    
    # Generate each company section
    for company_id, data in by_company.items():
        exp = data['experience']
        achievements = data['achievements']
        
        # Role header
        dates = f"{exp['start_date']} – {exp['end_date']}"
        content.append(f"#role(\"{exp['company']}\", \"{exp['location']}\", \"{exp['title']}\", \"{dates}\", description: \"{exp.get('role_description', '')}\")")
        
        # Achievements
        for ach in achievements:
            content.append(f"#achievement[*{ach['title']}* {ach['description']}]")
            
            if ach.get('tech_stack'):
                tech = '", "'.join(ach['tech_stack'])
                content.append(f"#tech-stack(\"{tech}\")")
            
            if ach.get('testimonial'):
                test = ach['testimonial']
                content.append(f"#quote-box(\"{test['text']}\", \"{test['author']}\")")
        
        content.append("")
    
    # Replace placeholder in template
    full_content = template.replace("{{content}}", "\n".join(content))
    full_content = full_content.replace("{{name}}", p['name'])
    
    # Write output
    with open(output_path, 'w') as f:
        f.write(full_content)
    
    print(f"\n✓ Generated Typst file: {output_path}")


def generate_transparency_report(job_posting, keywords, selected_achievements, output_path):
    """Generate transparency report"""
    lines = []
    
    lines.append("# Resume Generation Transparency Report")
    lines.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    lines.append("")
    
    lines.append("## Job Posting Analysis")
    lines.append("### Keywords Detected:")
    for kw in sorted(keywords):
        lines.append(f"- {kw}")
    lines.append("")
    
    lines.append("## Selected Achievements")
    lines.append(f"Total achievements selected: {len(selected_achievements)}")
    lines.append("")
    
    for i, item in enumerate(selected_achievements, 1):
        ach = item['achievement']
        exp = item['experience']
        score = item['score']
        
        lines.append(f"### {i}. {ach['title']} ({exp['company']})")
        lines.append(f"**Relevance Score:** {score}")
        lines.append(f"**Tags:** {', '.join(ach.get('tags', []))}")
        lines.append("")
        lines.append(f"**Description:** {ach['description']}")
        lines.append("")
        
        # Check for potential embellishments
        if 'led' in ach['title'].lower() or 'led' in ach['description'].lower():
            lines.append("⚠️ **EDITORIAL NOTE:** Contains leadership claim - verify accuracy")
            lines.append("")
        
        if ach.get('metrics'):
            lines.append(f"**Metrics:** {json.dumps(ach['metrics'], indent=2)}")
            lines.append("✅ **QUANTIFIED:** Contains measurable metrics")
            lines.append("")
    
    lines.append("## Recommendations")
    lines.append("- Review all leadership claims for accuracy")
    lines.append("- Verify all metrics are traceable")
    lines.append("- Ensure technical skills mentioned are genuinely used in selected achievements")
    
    with open(output_path, 'w') as f:
        f.write('\n'.join(lines))
    
    print(f"✓ Generated transparency report: {output_path}")


def compile_typst(typst_file, pdf_file):
    """Compile Typst file to PDF"""
    try:
        result = subprocess.run(
            ['typst', 'compile', str(typst_file), str(pdf_file)],
            capture_output=True,
            text=True,
            check=True
        )
        print(f"✓ Compiled PDF: {pdf_file}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"✗ Error compiling Typst: {e.stderr}")
        return False
    except FileNotFoundError:
        print("✗ Typst not found. Please install it: https://github.com/typst/typst")
        print("  You can still use the .typ file and compile it manually or online.")
        return False


def main():
    print("\n" + "="*80)
    print("RESUME GENERATOR")
    print("="*80)
    
    # Get job posting
    print("\nPaste the job posting (press Ctrl+D or Ctrl+Z when done):")
    print("-" * 80)
    
    job_posting_lines = []
    try:
        while True:
            line = input()
            job_posting_lines.append(line)
    except EOFError:
        pass
    
    job_posting = '\n'.join(job_posting_lines)
    
    if not job_posting.strip():
        print("No job posting provided. Exiting.")
        sys.exit(1)
    
    # Extract keywords
    print("\nAnalyzing job posting...")
    keywords = extract_keywords(job_posting)
    print(f"Found {len(keywords)} relevant keywords: {', '.join(sorted(keywords))}")
    
    # Load data
    print("\nLoading resume data...")
    experiences = load_json('experiences.json')
    personal = load_json('personal.json')
    
    # Suggest achievements
    print("\nMatching achievements...")
    suggestions = suggest_achievements(experiences, keywords)
    
    # Display and get selection
    display_suggestions(suggestions)
    selected = get_user_selection(suggestions)
    
    print(f"\n✓ Selected {len(selected)} achievements")
    
    # Create output directory
    timestamp = datetime.now().strftime('%Y-%m-%d-%H%M%S')
    company_name = input("\nEnter company name for this application: ").strip().replace(' ', '-').lower()
    output_dir = GENERATED_DIR / f"{timestamp}-{company_name}"
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Save job posting
    with open(output_dir / "job-posting.txt", 'w') as f:
        f.write(job_posting)
    
    # Generate files
    print("\nGenerating resume files...")
    typst_file = output_dir / "resume.typ"
    pdf_file = output_dir / "resume.pdf"
    transparency_file = output_dir / "transparency.md"
    
    generate_typst(personal, selected, typst_file)
    generate_transparency_report(job_posting, keywords, selected, transparency_file)
    
    # Compile to PDF
    print("\nCompiling to PDF...")
    compile_typst(typst_file, pdf_file)
    
    print("\n" + "="*80)
    print("✓ DONE!")
    print("="*80)
    print(f"\nOutput directory: {output_dir}")
    print(f"  - resume.typ (editable)")
    print(f"  - resume.pdf (if typst is installed)")
    print(f"  - transparency.md (review this!)")
    print(f"  - job-posting.txt (for reference)")
    print()


if __name__ == '__main__':
    main()
