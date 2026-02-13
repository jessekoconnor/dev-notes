# Resume Generator - Quick Start

## 🎉 Your Resume System is Ready!

Everything is set up and ready to go.

## What Was Built

### ✅ Data Files (Structured JSON)
- `data/experiences.json` - 27 achievements across 4 companies (Meta, Kustomer, Meltwater, IOL)
- `data/skills.json` - Languages, databases, tools with proficiency levels
- `data/projects.json` - DashMobile side project
- `data/education.json` - UNH Computer Science degree
- `data/personal.json` - Contact info and professional summary

### ✅ Templates
- `templates/professional.typ` - Beautiful Typst template with accent colors and clean layout

### ✅ Generator Script
- `scripts/generate.py` - Semi-automated generator with keyword matching and transparency reporting
- `generate-resume.sh` - Quick wrapper script

## How to Use (3 Steps)

### Step 1: Run the Generator

```bash
cd /home/user/git/dev-notes/resume
./generate-resume.sh
```

### Step 2: Paste Job Posting

When prompted, paste the job description. Press **Ctrl+D** when done.

### Step 3: Review and Select

The script will:
1. Show you relevant achievements sorted by match score
2. Let you select which ones to include (or press Enter for top suggestions)
3. Generate your resume files

## Output

Creates a timestamped directory in `generated/`:

```
generated/2026-02-04-1430-company-name/
├── resume.typ          # Editable source
├── resume.pdf          # Final PDF (if typst installed)
├── transparency.md     # ⚠️ READ THIS! Shows what was embellished
└── job-posting.txt     # Saved for reference
```

## Installing Typst (For PDF Generation)

Choose one:

```bash
# Option 1: Using cargo
cargo install typst-cli

# Option 2: Download from
# https://github.com/typst/typst/releases

# Option 3: Use online compiler at
# https://typst.app/ (upload the .typ file)
```

## Example Run

```bash
$ cd /home/user/git/dev-notes/resume
$ ./generate-resume.sh

================================================================================
RESUME GENERATOR
================================================================================

Paste the job posting (press Ctrl+D when done):
--------------------------------------------------------------------------------
[paste your job description]
^D

Analyzing job posting...
Found 8 relevant keywords: aws, distributed systems, leadership, node.js, ...

Matching achievements...

================================================================================
SUGGESTED ACHIEVEMENTS (sorted by relevance)
================================================================================

1. [Meta] Saved $10k/mo and reduced bug count by 97%
   Score: 6 | Tags: cost-savings, bug-reduction, distributed-systems, leadership
   in the distributed routing system. Results derived from two projects...

2. [Meta] Resolved core product bottleneck
   Score: 5 | Tags: scalability, architecture, performance, rate-limiting
   by implementing a highly reliable and scalable solution architected...

[... more suggestions ...]

Select up to 8 achievements to include (e.g., 1,2,5,7 or 1-5):
Or press Enter to accept top selections
> 1,2,3,5,6,7

✓ Selected 6 achievements

Enter company name for this application: awesome-startup

Generating resume files...
✓ Generated Typst file: generated/2026-02-04-1430-awesome-startup/resume.typ
✓ Generated transparency report: generated/2026-02-04-1430-awesome-startup/transparency.md

Compiling to PDF...
✓ Compiled PDF: generated/2026-02-04-1430-awesome-startup/resume.pdf

================================================================================
✓ DONE!
================================================================================

Output directory: generated/2026-02-04-1430-awesome-startup
  - resume.typ (editable)
  - resume.pdf (if typst is installed)
  - transparency.md (review this!)
  - job-posting.txt (for reference)
```

## Updating Your Resume Data

When you accomplish something new:

1. Edit `data/experiences.json`
2. Add the achievement with tags
3. Include metrics if possible

**Tags help matching!** Use tags like:
- `leadership`, `mentorship`, `architecture`
- `cost-savings`, `performance`, `scalability`
- `distributed-systems`, `event-driven`, `microservices`

## The Transparency Report

**Always read this!** It shows:

✅ **QUANTIFIED** - Has verifiable metrics  
⚠️ **EDITORIAL NOTE** - Check for spin/exaggeration  
🚨 **STRETCH** - Rounding numbers or soft claims

Example:
```markdown
### 1. Saved $10k/mo and reduced bug count by 97% (Meta)
**Relevance Score:** 6
**Tags:** cost-savings, bug-reduction, distributed-systems, leadership

**Metrics:** {"cost_savings": "$10k/mo", "bug_reduction": "97%", ...}
✅ **QUANTIFIED:** Contains measurable metrics

⚠️ **EDITORIAL NOTE:** Contains leadership claim - verify accuracy
```

## Tips

1. **Save everything**: Job postings are useful for interview prep
2. **Review transparency**: Your ethical guardrail
3. **Customize after**: Edit the `.typ` file if you want to adjust anything
4. **Keep data fresh**: Add achievements as you do them

## Need Help?

- See `README.md` for detailed documentation
- Edit JSON files in `data/` to update your info
- Modify `templates/professional.typ` to change styling
- Check `examples/example-typst.typ` for Typst syntax reference

---

**Ready to generate your first tailored resume?**

```bash
cd /home/user/git/dev-notes/resume && ./generate-resume.sh
```
