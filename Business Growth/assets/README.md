# `assets/`

# Assets Directory — Purpose & Rules

**Document:** assets/README.md
**Version:** 1.0
**Status:** Reusable Package Bootstrap (empty until a client instance populates it)

---

# 1. Purpose

This directory stores the approved client media assets for a Business Growth
website instance.

`configuration/project.config.json` points here:

```text
content.directories.assets     → ./assets/
content.directories.documents  → ./assets/documents/
content.directories.images     → ./assets/images/
content.directories.videos     → ./assets/videos/
```

The package documentation requires media to come from `assets/` (or the approved
media storage system). See:

```text
11-content-and-asset-management.md
17-project-configuration-and-client-setup.md
AI-DEVELOPMENT-RULES.md (§71 Asset Management Rule)
```

---

# 2. Directory Structure

```text
assets/
├── README.md      ← this document
├── images/        ← photos, logos, gallery imagery
├── documents/     ← PDFs, brochures, downloadable resources
├── videos/        ← approved video files
└── logos/         ← approved logo files (primary, secondary, favicon)
```

Only create directories that are actually required.

---

# 3. Hard Rules

- No fictional assets are placed in this directory during package development.
- Assets are populated only with approved client material during a client instance.
- Do not download random replacement images from the internet without approval
  (see AI-DEVELOPMENT-RULES.md §72 Image Selection Rule).
- Files must have appropriate naming, be optimized, and be verified before use.