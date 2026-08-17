# `18-client-instance-bootstrap.md`

# Client Instance Bootstrap Procedure

**Document:** 18-client-instance-bootstrap.md
**Version:** 1.0
**Status:** Agency Template Standard
**Purpose:** Defines the repeatable 15-step procedure for creating a new Business Growth client website instance from the reusable package.

---

# 1. Scope

This document governs **client instance creation** — building a specific client
website from the reusable Business Growth template.

It must not be confused with **package development** (building/improving the
reusable template itself). The two workflows are kept separate:

```text
PACKAGE DEVELOPMENT      → improves the reusable template (this package)
CLIENT IMPLEMENTATION    → uses the template to build one client's website
```

Phase 8 (client implementation) starts only when all Phase 8 preconditions are
met (see §17 below). Until then, no client work is performed on this package.

---

# 2. The 15-Step Procedure

The procedure below is the sequence used to bootstrap a new client instance.
It assumes the reusable package is the verified Phase 6/7 baseline.

---

## Step 1 — Confirm Phase 8 Preconditions

Before anything else, verify all Phase 8 preconditions exist (see §17). If any
is missing, STOP. Do not invent the missing input.

---

## Step 2 — Create the Client Instance Folder

Copy the reusable package into a new client folder:

```text
client-project/
```

The client instance is an independent copy of the template — it must remain
independently deployable and maintainable.

---

## Step 3 — Client Discovery (Project Brief)

Complete a `CLIENT-PROJECT-BRIEF.md` for the client using:

```text
Business package md/CLIENT-PROJECT-BRIEF.md
```

Collect: business information, goals, target customers, products, services,
projects, locations, contact information, social media, brand assets, content,
required features, integrations.

Record everything in the brief. Do not invent missing business information.

---

## Step 4 — Scope Confirmation

Confirm scope using:

```text
Business package md/SCOPE-AND-CHANGE-CONTROL.md
```

Classify every requirement as:

```text
Included
Optional
Custom
Out of Scope
```

Scope growth is controlled by the change-control process.

---

## Step 5 — Client Design (Approved UI)

The client's approved UI design is created externally (Stitch, Figma, or another
approved tool). The final approved references are placed into:

```text
client-project/design/
```

per the `design/README.md` standard (see `Business package md/design/README.md`).

Designs are `APPROVED` only when the responsible project authority explicitly
accepts them. Only `APPROVED` references are implementation authority.

---

## Step 6 — Page Design Manuals

For each selected template, create a page-specific design manual that translates
the visual design into explicit implementation instructions:

```text
design/pages/
├── home/
│   ├── homedesignmanuel.md
│   ├── desktop.png
│   └── mobile.png
├── about/
├── services/
├── contact/
└── ... (depends on the client)
```

The manuals are client-specific translation documents. They do **not** replace the
reusable `02-design-system.md` or `04-component-system.md` standards.

---

## Step 7 — Project Configuration

Configure the client instance by editing the dedicated configuration files:

```text
configuration/
├── project.config.json      ← project record + integrations (see SCHEMA-ALIGNMENT §7)
├── business.config.json     ← business information
├── features.config.json     ← enabled capabilities
├── navigation.config.json   ← navigation structure
├── contact.config.json      ← contact/RFQ
├── seo.config.json          ← SEO
└── analytics.config.json    ← analytics
```

Configuration determines which capabilities are active. Values must be real
client values — no invented or placeholder production values.

---

## Step 8 — Content & Assets

Populate:

```text
content/    ← structured client content (see content/README.md)
assets/     ← approved client media (see assets/README.md)
```

with verified client information only. Do not invent missing business information.

---

## Step 9 — Environment Configuration

Provision a `.env` file from `.env.example`:

```text
cp .env.example .env
```

Only public `VITE_*` values are used client-side. Never commit `.env` files.
See §13 (Environment) for the exact variable contract.

---

## Step 10 — Feature & Navigation Mapping

Map content into the configured content contracts:

- Each enabled feature (products, services, projects, blog, testimonials, FAQ,
  locations, certifications, partners) must have its content populated in `content/`.
- Navigation must reference only enabled pages (see
  `configuration/navigation.config.json` and the consistency rules in `src/config/`).
- Templates render from content/configuration via the `CollectionSource` /
  `DetailSource` abstraction (`src/content/`).

---

## Step 11 — Design Token & Style Application

Apply the client design system:

- Map the approved design tokens (colors, typography, spacing) to the styling
  layer (Tailwind config / design tokens) for this instance.
- Do **not** hardcode one client's visual identity into the reusable core.

The client design manual defines how the selected templates visually appear.

---

## Step 12 — Page Composition

Compose each page from the reusable templates and components:

```text
Home, About, Listing, Detail, Project, Article, Contact, RFQ
```

according to the page design manual, using the existing `src/templates/` and
`src/components/` system. Do not redesign the architecture.

---

## Step 13 — QA

Run the full quality gate:

```text
npx tsc --noEmit
npx eslint . --ext .ts,.tsx
npx vitest run
npm run build
```

Verify: functionality, visual fidelity vs the approved design, responsive
behavior, accessibility, SEO, analytics, performance, security, lead generation.
Follow `12-testing-and-qa.md`.

---

## Step 14 — Deployment

Deploy the client instance per `13-deployment-and-release.md`. Deployment must
be controlled and traceable. Production must never contain placeholder content
or placeholder visuals.

---

## Step 15 — Handover & Maintenance

Follow `15-client-handover-and-documentation.md` and
`16-project-acceptance-and-final-delivery-checklist.md`, then hand over to
`14-maintenance-and-monitoring.md`.

---

# 3. Core vs Client Instance

The agency must keep these clearly separated:

```text
CORE                    → architecture, components, templates, standards, reusable logic
CLIENT INSTANCE         → brand, content, design, configuration, assets, integrations
```

Never copy client content or client design into the reusable core. The core
template must remain client-neutral.

---

# 4. Environment Contract

The client instance uses the same public-variable contract as the package:

| Variable | Purpose | Example |
|---|---|---|
| `VITE_SITE_URL` | Public site URL | `https://example.com` |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 property | `G-XXXXXXXXXX` |
| `VITE_FORM_ENDPOINT` | Contact/RFQ form endpoint | provider-provided URL |

Rules:

- Only `VITE_*` variables are exposed to the client bundle.
- Never commit real `.env` values; keep them out of git (`.gitignore` covers `.env`, `.env.*`).
- `.env.example` ships with empty placeholders only.

---

# 5. Verification Checklist (before delivery)

```text
[ ] All Phase 8 preconditions confirmed (§17)
[ ] Client project brief completed
[ ] Scope confirmed
[ ] Approved design references in design/
[ ] Page design manuals written
[ ] Configuration populated with real client values
[ ] Content populated (no placeholders in production)
[ ] Assets populated (optimized, named, verified)
[ ] Environment provisioned (public VITE_* only)
[ ] Quality gate green (tsc, eslint, vitest, build)
[ ] No client data/design copied into the reusable core
[ ] Deployment controlled and traceable
[ ] Handover documentation delivered
```

---

# 6. STOP Conditions

Stop and escalate (do not invent) when any of the following is missing:

- Real client business information
- Approved design references
- The ability to write page design manuals
- Real content
- Real assets
- Configuration values
- Environment/integration information

---

# END OF DOCUMENT