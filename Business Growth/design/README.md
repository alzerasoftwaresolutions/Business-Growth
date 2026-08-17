# `design/`

# Design Directory — Purpose & Lifecycle

**Document:** design/README.md
**Version:** 1.0
**Status:** Reusable Package Bootstrap (empty until a client instance populates it)

---

# 1. Purpose

This directory is the **visual source of truth** for a Business Growth website
instance. It stores the approved client design references and the page-specific
design manuals that translate those references into implementation instructions.

It exists because `configuration/project.config.json` points here:

```text
brand.designManualDirectory      → ./design/pages/
brand.designReferenceDirectory   → ./design/reference/
design.directories.root          → ./design/
design.directories.pages         → ./design/pages/
design.directories.references    → ./design/reference/
```

> The `design/` directory must remain a first-class part of every client project,
> not an optional collection of screenshots.

---

# 2. Two Distinct Layers

| Layer | Content | Where it lives | Who owns it |
|---|---|---|---|
| Core design system (reusable) | Colors, typography, spacing, component behavior for the template itself | `src/`, `tailwind.config.js`, package docs `02-design-system.md`, `04-component-system.md` | Agency (reusable package) |
| Client design manual (instance) | Approved client UI references + page-by-page translation manuals | `design/reference/`, `design/pages/` | Client instance (per client) |

The reusable package ships an **empty** `design/` scaffold. Approved visual
references are placed here **only when a real client instance is created**.

---

# 3. Directory Structure

```text
design/
├── README.md            ← this document
├── pages/               ← page-specific design manuals (homedesignmanuel.md, etc.)
├── reference/           ← approved design references (desktop/mobile screenshots, exports)
├── design-system/       ← client-approved design-system decisions (colors, typography, etc.)
├── desktop/             ← desktop reference captures (alternative location, see standard)
├── mobile/              ← mobile reference captures (alternative location, see standard)
└── ui-references/       ← approved UI reference collection
```

The authoritative structural rules are defined in:

```text
Business package md/design/README.md
```

---

# 4. Lifecycle

1. **Discovery** — client-approved UI is created externally (Stitch, Figma, etc.).
2. **Approval** — the responsible project authority explicitly approves the design.
3. **Translation** — page-specific design manuals are written for selected templates.
4. **Implementation** — the AI/developer implements from the manuals + references.
5. **Archive** — superseded or rejected versions move to `design/archive/` (see standard).

Design files follow these status states (from the standard):

```text
DRAFT → IN REVIEW → APPROVED → SUPERSEDED → ARCHIVED
```

Only `APPROVED` references are implementation authority.

---

# 5. Hard Rules

- No fictional design is placed in this directory during package development.
- This directory is populated only with approved client input during a client instance.
- The AI must never redesign; it implements the approved design.
- Client design must never be copied back into the reusable package core.