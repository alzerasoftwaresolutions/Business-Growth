# `content/`

# Content Directory — Purpose & Rules

**Document:** content/README.md
**Version:** 1.0
**Status:** Reusable Package Bootstrap (empty until a client instance populates it)

---

# 1. Purpose

This directory stores the structured, client-provided content for a Business
Growth website instance.

`configuration/project.config.json` points here:

```text
content.source                   → "client-provided"
content.directories.content      → ./content/
content.clientContentRequired    → true
content.placeholderContentAllowed → false
```

The package documentation requires client content to come from `content/` (or the
project's approved content source). See:

```text
05-content-model-and-content-structure.md
11-content-and-asset-management.md
AI-DEVELOPMENT-RULES.md (§70 Content Management Rule)
```

---

# 2. Directory Structure

```text
content/
├── README.md          ← this document
├── company/           ← company profile, story, mission, values
├── people/            ← team members, leadership
├── services/          ← service catalogue entries
├── products/          ← product catalogue entries
├── projects/          ← portfolio/projects
├── testimonials/      ← client testimonials
├── certifications/    ← certifications, awards, memberships
├── partners/          ← partners and clients
├── locations/         ← physical locations
├── articles/          ← blog/news articles
├── resources/         ← downloadable resources
└── faq/               ← frequently asked questions
```

Each subdirectory is populated only when the corresponding content type is used
by the client instance. Only create directories that are actually required.

---

# 3. Hard Rules

- No fictional content is placed in this directory during package development.
- Content is populated only with verified client information during a client instance.
- Missing business information must never be invented (see `business.config.json`
  `contentRules` and `project.config.json` `projectRules.doNotInventClientInformation`).
- This directory is for the client instance; it is not copied into the reusable core.