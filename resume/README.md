# Resume Generator

Semi-automated resume generation system with transparency reporting.

## Structure

```
resume/
├── data/                    # Structured resume data (JSON)
│   ├── experiences.json     # Work history with tagged achievements
│   ├── skills.json         # Skills with proficiency levels
│   ├── projects.json       # Side projects
│   ├── education.json      # Education details
│   └── personal.json       # Contact info & summary
├── templates/              # Typst templates
│   └── professional.typ    # Main professional template
├── generated/              # Generated resumes (organized by date/company)
│   └── YYYY-MM-DD-company/
│       ├── resume.typ      # Editable Typst source
│       ├── resume.pdf      # Compiled PDF (if typst installed)
│       ├── transparency.md # What was done, embellishments flagged
│       └── job-posting.txt # Original job posting
├── scripts/               # Generation scripts
│   └── generate.py        # Main generator
└── old-resume/            # Your original resume files
```

## How to Use

### 1. Generate a Resume

```bash
cd /home/user/git/dev-notes/resume
python3 scripts/generate.py
```

**The script will:**
1. Ask you to paste a job posting
2. Analyze it for keywords
3. Suggest relevant achievements from your data
4. Let you select which to include
5. Generate a Typst file, PDF (if typst installed), and transparency report

### 2. Review the Transparency Report

Always read `transparency.md` in the output directory. It shows:
- Which achievements were selected and why
- Relevance scores
- Flags for leadership claims and metrics
- Recommendations for verification

### 3. Edit if Needed

The generated `.typ` file is editable. Make changes and recompile:

```bash
typst compile resume.typ resume.pdf
```

## Installing Typst

### Option 1: Using cargo (Rust package manager)
```bash
cargo install typst-cli
```

### Option 2: Download binary
Visit: https://github.com/typst/typst/releases

### Option 3: Use online
Upload the `.typ` file to https://typst.app/

## Updating Your Data

Edit the JSON files in `data/` to:
- Add new achievements
- Update skills
- Add projects
- Change wording

**Tags are important!** They help match achievements to job postings:
- `leadership`, `mentorship`, `architecture`, `scalability`
- `distributed-systems`, `event-driven`, `microservices`
- `cost-savings`, `performance`, `security`, `testing`

## Transparency Levels

The generator flags items with:
- ✅ **ACCURATE/QUANTIFIED**: Has verifiable metrics
- ⚠️ **EDITORIAL NOTE**: Check for spin (e.g., "led" vs "contributed")
- 🚨 **STRETCH**: Slight exaggeration or rounding

## Tips

1. **Keep data updated**: After each achievement, add it to `experiences.json`
2. **Tag everything**: More tags = better matching
3. **Quantify when possible**: Metrics are powerful
4. **Review transparency report**: It's your ethics checker
5. **Save job postings**: Helpful for interview prep

## Example Workflow

```bash
# 1. Copy job posting to clipboard

# 2. Generate resume
cd /home/user/git/dev-notes/resume
python3 scripts/generate.py
# Paste job posting, select achievements

# 3. Review output
cd generated/2026-02-04-companyname/
cat transparency.md  # Check for issues
open resume.pdf      # View result

# 4. Edit if needed
vim resume.typ
typst compile resume.typ resume.pdf
```

## Future Enhancements

- [ ] AI-assisted achievement selection (Claude/GPT integration)
- [ ] Skills section auto-generation
- [ ] Multiple template styles
- [ ] Cover letter generation
- [ ] LinkedIn profile sync
