# Starter Presence — Construction Sector Template

A production-ready, brand-your-own **company profile website** built with the
**Starter Presence** package. It ships as a reusable template — the demo brand
is **Stonebridge Construction** (fictional) — so a new client site is spun up by
rebranding config, swapping the theme, wiring the form/analytics, replacing demo
images, and deploying.

> **What this is not:** an e-commerce, portal, SaaS, or admin app. It is a static,
> fast, SEO-ready profile site for companies that need a professional online presence
> with a working contact flow. See
> `starter package md/01-project-requirements.md` for the full scope.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start (developers)](#quick-start-developers)
- [Environment Variables](#environment-variables)
- [Routes](#routes)
- [Project Structure](#project-structure)
- [How It Works — Key Architecture](#how-it-works--key-architecture)
- [Working on This Project](#working-on-this-project)
- [Client Onboarding (using it as a template)](#client-onboarding-using-it-as-a-template)
- [Deployment](#deployment)
- [Design System](#design-system)
- [Documentation Map](#documentation-map)

---

## Project Overview

Every page is a client-facing profile page: Home, About, Expertise, Services,
Projects, Contact, plus legal, thank-you, and 404 pages. It is a
**frontend-only single-page app** — no backend, no database. External services
(Google Fonts, Google Maps embed, optional GA4, an optional form endpoint) are
wired through environment variables.

The whole site is configured from two places:

1. **Client content** — `src/data/` (company name, contact info, services,
   projects, testimonials, legal copy, images, nav, page meta).
2. **Design tokens** — `src/styles/globals.css` → `:root` (colors, fonts, radii,
   shadows) mapped into Tailwind in `tailwind.config.js`.

Never hardcode client content in components or pages — read it from `src/data/`
and `siteConfig` so a rebrand never touches component code.

---

## Tech Stack

- **React 18 + TypeScript** (strict mode)
- **Vite** (build tooling; `tsc && vite build && node scripts/sync-domain.mjs`)
- **Tailwind CSS 3** (PostCSS) themed via CSS custom properties in
  `src/styles/globals.css` → `:root`
- **React Router** (v6, SPA routing with a Vercel rewrite for deep links)
- **Lucide** icons
- **Sharp** (dev-only image pipeline in `scripts/optimize-images.mjs`)

Only four runtime dependencies — the bundle stays small on purpose.

---

## Prerequisites

- Node.js 18+ and npm
- Git
- A code editor with TypeScript support
- (Optional) a Vercel account + a client domain for deployment

---

## Quick Start (developers)

```bash
npm install
npm run dev
```

Create `.env.local` first (copy `.env.example`) if you need analytics, the
canonical domain, or form delivery — see [Environment Variables](#environment-variables).

| Command                  | Purpose                                          |
| ------------------------ | ------------------------------------------------ |
| `npm run dev`            | Start the Vite dev server                        |
| `npm run build`          | Type-check + production build + domain rewrite   |
| `npm run preview`        | Preview the production build                     |
| `npm run lint`           | ESLint (1 pre-existing warning in `usePageMeta`) |
| `npm run format`         | Prettier                                         |
| `npm run optimize:images`| Re-download/compress images via `sharp`          |

**Check your work before committing:**

```bash
npm run build
npm run lint
```

---

## Environment Variables

All variables are `VITE_*` (browser-safe, never secrets). Copy `.env.example`
to `.env.local` for local work; the same values go into the hosting provider for
production builds. `.env.local` is git-ignored.

| Variable                 | Purpose                                                                                                  | Empty value behavior         |
| ------------------------ | -------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `VITE_SITE_URL`          | Canonical production domain (no trailing slash). Drives runtime canonical/OG meta and the build-time rewrite of `index.html`, `sitemap.xml`, `robots.txt`, `llms.txt` via `scripts/sync-domain.mjs`. | Falls back to the demo domain |
| `VITE_GA_MEASUREMENT_ID` | Optional GA4 property ID.                                                                                | Analytics fully disabled     |
| `VITE_FORM_ENDPOINT`     | Contact-form JSON POST target.                                                                           | Submissions are simulated (works pre-launch; `console.warn`) |

> **Form delivery:** before going live, set a real `VITE_FORM_ENDPOINT` and add
> its host to `connect-src` in `vercel.json`. Otherwise the form only simulates
> submissions.

---

## Routes

| Path          | Page                        | Notes                            |
| ------------- | --------------------------- | -------------------------------- |
| `/`           | Home                        | Hero, metrics, services, projects, testimonials |
| `/about`      | About                       | History, leadership, certifications |
| `/expertise`  | Expertise                   | Capabilities / approach          |
| `/services`   | Services                    | Service catalog + FAQ            |
| `/projects`   | Projects                    | Portfolio with category filter   |
| `/contact`    | Contact                     | Inquiry form, map, hours         |
| `/thank-you`  | Thank You                   | Post-submit confirmation (`noindex`) |
| `/privacy`    | Privacy Policy              | Rendered from `src/data/legal.ts` |
| `/terms`      | Terms of Service            | Rendered from `src/data/legal.ts` |
| `*`           | 404 / Not Found             | Client-side catch-all            |

Routes are declared in `src/App.tsx`. Nav labels live in `src/data/navigation.ts`;
page meta (title/description/OG/breadcrumbs) lives in `src/data/meta.ts`. Add a
route to all three if you introduce a new page.

---

## Project Structure

```
.
├── public/
│   ├── images/            # Optimized photos (loaded via src/data/images.ts)
│   ├── og-image.png       # 1200×630 social sharing image
│   ├── favicon.svg
│   ├── sitemap.xml        # SEO statics (domain rewritten at build)
│   ├── robots.txt
│   └── llms.txt           # LLM-facing summary
├── scripts/
│   ├── sync-domain.mjs    # Rewrites demo domain → VITE_SITE_URL in dist/
│   └── optimize-images.mjs# sharp-based image download/compress pipeline
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer, StickyCTA, CookieConsent
│   │   ├── sections/      # PreFooter, Faq
│   │   └── ui/            # Button, AppIcon
│   ├── data/              # Centralized client content (site, navigation, meta,
│   │                      #   services, projects, about, faqs, legal, images, siteContent)
│   ├── lib/               # usePageMeta, analytics, consent, ScrollToTop
│   ├── pages/             # One component per route
│   ├── styles/            # globals.css — design tokens (:root) + component classes
│   ├── App.tsx            # Layout shell + route table
│   └── main.tsx
├── docs/                  # runbook.md (ops), design-deviations.md
├── design/                # Approved UI references (PNG + design manuals)
├── starter package md/    # Phase standards docs 01–14 + onboarding runbook
├── vercel.json            # Security headers + SPA rewrite
├── tailwind.config.js     # Token → utility wiring (no color values)
└── index.html             # Fonts, theme-color, LocalBusiness JSON-LD, OG meta
```

---

## How It Works — Key Architecture

- **Per-page SEO** — `src/lib/usePageMeta.ts` sets `document.title`, meta
  description, canonical, robots, OG/Twitter tags, and injects `BreadcrumbList`
  JSON-LD from `src/data/meta.ts` on every route change. `src/components/Breadcrumbs.tsx`
  derives the breadcrumb bar from the current URL.
- **Structured data** — `index.html` holds the `GeneralContractor` (LocalBusiness)
  JSON-LD; the FAQ section injects `FAQPage` JSON-LD; breadcrumbs inject
  `BreadcrumbList`. All runtime-schema `url`/`item` values come from `VITE_SITE_URL`.
- **Theming** — every design token is a CSS custom property in `globals.css`
  `:root`. Colors are RGB triplets (e.g. `196 154 108`) so Tailwind opacity
  modifiers like `bg-navy-950/50` keep working. A client theme is one block swap.
- **Contact form** — `src/pages/Contact.tsx` POSTs JSON to `VITE_FORM_ENDPOINT`
  with client-side validation, a honeypot, max-length limits, and
  submitting/success/error states. Empty endpoint = simulated submission so the
  flow works pre-launch.
- **Analytics** — `src/lib/analytics.ts` gates GA4 behind the cookie consent
  (`src/components/layout/CookieConsent.tsx`, choice stored in localStorage).
  Analytics never loads until the visitor accepts, and is disabled when
  `VITE_GA_MEASUREMENT_ID` is empty.
- **Contact tracking** — a global click handler in `src/App.tsx` fires
  `phone_click`, `email_click`, and `whatsapp_click` events for `tel:`,
  `mailto:`, and `wa.me` links.
- **Deep links** — `vercel.json` ships an SPA rewrite (routes → `/index.html`,
  static assets excluded) so client routes survive refresh; it also carries the
  security headers (CSP, HSTS, nosniff, etc.).

---

## Working on This Project

1. **Pull + install** — `npm install`, then `npm run dev`.
2. **Find the content** — everything client-facing is in `src/data/`; edit there,
   not in pages.
3. **Add a page** — create `src/pages/X.tsx`, add the route in `src/App.tsx`, and
   register label + meta in `src/data/navigation.ts` and `src/data/meta.ts`
   (add `breadcrumbLabels`/`heroBackgrounds` entries if it should show breadcrumbs).
4. **Style** — reuse existing tokens and `.btn*`/`.card*` classes; don't hardcode
   hex colors or brand strings.
5. **Verify** — `npm run build` and `npm run lint` must pass. The one
   `usePageMeta` exhaustive-deps warning is pre-existing and accepted.
6. **Commit** — follow conventional commit messages (`feat:`, `fix:`, `chore:`),
   keep `.env*` untracked, and never commit secrets.

---

## Client Onboarding (using it as a template)

To spin up a new client site from this repo:

1. **Rebrand** — edit `src/data/site.ts` (name, logo text, contact, address, social).
2. **Theme** — swap the `:root` tokens in `src/styles/globals.css` + the font link in `index.html`.
3. **Env** — set `VITE_SITE_URL` / `VITE_GA_MEASUREMENT_ID` / `VITE_FORM_ENDPOINT` in `.env.local` and the hosting provider.
4. **Content** — work through `src/data/`; the `src/pages/*.tsx` copy ships as draft (interpolates `siteConfig.companyName`) — review/confirm with the client.
5. **Wire the form** — set `VITE_FORM_ENDPOINT` and add its host to `connect-src` in `vercel.json`.
6. **SEO statics** — set `VITE_SITE_URL`; `npm run build` auto-rewrites the demo domain in `index.html`, `sitemap.xml`, `robots.txt`, `llms.txt` (see `scripts/sync-domain.mjs`). Update `index.html` JSON-LD details + `public/llms.txt` company info.
7. **Assets** — swap `src/data/images.ts`, `public/og-image.png`, `public/favicon.svg`.
8. **Verify + ship** — run `npm run build` and `npm run lint`, walk the QA/SEO/security docs, then deploy.

> Full detail and a shortcut checklist: `starter package md/13-client-onboarding-runbook.md`.
> The end-to-end finishing guide (with pointers into every phase doc) is
> `starter package md/14-builder-manual.md`.

---

## Deployment

Hosted on **Vercel** (the repo ships `vercel.json` with security headers + SPA
rewrite; Vite is auto-detected).

1. Connect the repo to Vercel; set the same env vars (`VITE_SITE_URL`,
   `VITE_GA_MEASUREMENT_ID`, `VITE_FORM_ENDPOINT`) in the project settings.
2. Add the production domain (Apex/`www` as needed).
3. Deploy, then verify on the real domain: every route returns 200 (incl. deep
   links on refresh), statics (`/sitemap.xml`, `/robots.txt`, `/llms.txt`,
   `/og-image.png`, `/favicon.svg`) return 200, security headers are present,
   the form submits end-to-end, and analytics events fire.

See `starter package md/09-deployment-and-release.md` for the full process.

---

## Design System

The implementation follows the **Heritage** design system (demo brand palette):

- Typography: Hanken Grotesk (headlines), Source Sans 3 (body), JetBrains Mono (labels/stats)
- Colors: Midnight Navy, Warm Copper/Gold accent, Cloud-White surfaces
  (all tokenized as CSS custom properties — see the `:root` block)
- Cards: white, 10px radius, 3px gold accent line
- Layout: max 1280px container, 8px spacing rhythm

> **Design deviations vs the approved UI references are tracked in
> [`docs/design-deviations.md`](./docs/design-deviations.md).** They are
> intentional and must be client-approved before delivery.

---

## Documentation Map

| Resource | Path | Purpose |
| -------- | ---- | ------- |
| **Builder manual** | `starter package md/14-builder-manual.md` | Finish-the-project guide with pointers into every phase doc |
| **Client onboarding runbook** | `starter package md/13-client-onboarding-runbook.md` | Step-by-step rebrand/deploy flow + checklist |
| **Runbook (ops)** | `docs/runbook.md` | Theming, analytics, form delivery, placeholders, SEO |
| **Phase standards** | `starter package md/01`–`12` | Requirements, IA, security, SEO, perf, system, content, QA, deploy, maintenance, handover, acceptance |
| **Design manuals** | `design/designmanuel/*.md` + `design/*.png` | Approved UI references (source of truth) |
| **Design deviations** | `docs/design-deviations.md` | Registered intentional deviations, pending client sign-off |
