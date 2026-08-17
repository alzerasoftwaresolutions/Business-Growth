# Starter Presence
# Builder Manual — Finish-the-Project Guide

**For:** Agency developers taking this template and finishing a live client site.
**Assumes already done:** the base build (tablet layouts, mobile menu, images system, animations).
**Company values come from:** YOUR personalized copy of `13-client-onboarding-runbook.md` — fill every slot there first, then use it as the single source of truth while working through this manual.
**Demo brand shipped in the template:** Stonebridge Construction. The demo content is **not** real client data — replace all of it.

> **How to use this file.** This is a finish-the-project checklist in the exact order the
> work should run. Each step lists the files involved, how to verify it, and which of the
> numbered package docs (`01`–`12`) govern it. If you have **not** done the things that doc
> asks for, stop and complete that doc first — then return to this manual. Do not skip.

---

## 0. Orientation

- Stack: Vite 5 + React 18 + TypeScript + Tailwind 3 + react-router-dom 6.
- All client content lives in `src/data/` (config, not presentation). All design tokens
  live in `src/styles/globals.css` → `:root`. All secrets/env live in `.env.local`.
- Route map: `/`, `/about`, `/expertise`, `/services`, `/projects`, `/contact`,
  `/thank-you`, `/privacy`, `/terms`, `*` (NotFound).

---

## 1. Remaining build steps (run in order)

### Step 1 — SEO stack: breadcrumbs, JSON-LD, llms.txt, canonical

**What:** every inner page shows a breadcrumb bar; `BreadcrumbList` JSON-LD is injected
automatically; the LLM-facing `llms.txt` exists; the homepage ships a static canonical URL
and a `LocalBusiness` schema in `index.html`.

**Files:**
- `src/data/meta.ts` — `breadcrumbLabels` + `heroBackgrounds` registries (add/remove routes here)
- `src/components/Breadcrumbs.tsx` — auto-derives from the current route; rendered once in `App.tsx`
- `src/lib/usePageMeta.ts` — auto-injects/updates the `BreadcrumbList` JSON-LD per page
- `public/llms.txt` — company summary + key pages + contact; must link from `public/robots.txt`
- `index.html` — static `<link rel="canonical">`, `LocalBusiness` JSON-LD (update to the client's industry type if not a general contractor)

**Verify:** open 3 inner pages → breadcrumb + schema match; fetch `/llms.txt` returns 200.

**Governed by doc:** `04` (SEO & Analytics). **If you have not** confirmed the sitemap,
robots, OG/Twitter meta, and `FAQPage` schema per `04`, complete `04` now.

---

### Step 2 — Privacy & Terms pages

**What:** `/privacy` and `/terms` exist and are reachable from the footer, with client-appropriate copy.

**Files:**
- `src/data/legal.ts` — the two documents' content
- `src/pages/LegalPage.tsx` — shared renderer for both routes

**Verify:** both routes return 200; links present in footer; content reflects the client (not the demo).

**Governed by doc:** `02` (Info Architecture) for placement, `07` (Content & Assets) for copy.
**If you have not** collected the client's legal copy per `07`, block on the client — do not ship demo legalese.

---

### Step 3 — Launch extras: OG image, thank-you page, sticky CTA, FAQ

**What:** the site has a 1200×630 OG image, a `/thank-you` page the contact form routes to,
a mobile sticky call-to-action, and an FAQ accordion (with `FAQPage` schema) on Services.

**Files:**
- `public/og-image.png` — regenerate at 1200×630 with the client brand
- `src/pages/ThankYouPage.tsx` — success landing (must stay `noindex`, excluded from sitemap)
- `src/components/layout/StickyCTA.tsx` — mobile-only, hidden on `/contact` and `/thank-you`
- `src/components/Faq.tsx` — accordion + `FAQPage` JSON-LD (used on `/services`)

**Verify:** share-crawl the homepage; submit a test form → lands on `/thank-you`; CTA appears after scroll on mobile.

**Governed by doc:** `04` (SEO — OG/noindex) and `08` (Testing & QA).
**If you have not** run the OG/noindex checks in `04`, complete them now.

---

### Step 4 — Theming (Option B: CSS custom properties)

**What:** the entire client look is one token block swap. **Do not** hard-code colors in
components or the Tailwind config.

**Files:**
- `src/styles/globals.css` → `:root` — colors, fonts, radii, shadows, container width.
  Colors are **RGB triplets** (e.g. `196 154 108`), not hex, so Tailwind opacity modifiers work.
- `index.html` — `theme-color` meta + Google Fonts `<link>` (fonts must match `--font-*` tokens)
- `tailwind.config.js` — only wires tokens to classes; no values here

**Verify:** `npm run build`; grep `src/` for stray hex values (`#[0-9A-Fa-f]{6}`) — only
non-tokenized assets (shadows, images) may remain.

**Governed by doc:** `06` (System Architecture & Technical Standards).
**If you have not** followed the theme/structure rules in `06`, complete them now.

---

### Step 5 — Verify + brand centralization

**What:** no client brand values live outside `src/data/` (alt text, titles, map labels, etc.
must reference `siteConfig`, not hard-coded strings).

**Files:** grep `src/pages/**` and `src/components/**` for the old demo name and its
address/phone strings; replace with `siteConfig.companyName` / `siteConfig.contact.*`.

**Verify:** `npm run build` + `npm run lint` pass.

**Governed by doc:** `07` (Content & Asset Management) and `06` (Technical Standards).

---

### Step 6 — Draft copy (placeholders → real copy)

**What:** every `[COMPANY ...]`, `[APPROACH]`, `[PARKING ...]`, `[WHATSAPP ...]` placeholder is
replaced with copy for the client. Page copy interpolates `siteConfig.companyName` so it
updates automatically.

**Files:** `src/pages/*.tsx` (review copy), `src/data/site.ts` (whatsapp/contact).

**Verify:** `grep -rn "\[COMPANY\|\[APPROACH\|\[PARKING\|\[WHATSAPP\|\[PLACEHOLDER" src/`
returns nothing.

**Governed by doc:** `07` (Content & Asset Management). **If you have not** confirmed the
sample metrics, testimonials, and certification/license numbers with the client per `07`,
block on the client — these must be real before production.

---

### Step 7 — Form + SPA wiring

**What:** the contact form posts JSON to `VITE_FORM_ENDPOINT`; deep links work on refresh via
an SPA rewrite; security headers stay strict.

**Files:**
- `.env.local` — `VITE_SITE_URL`, `VITE_GA_MEASUREMENT_ID`, `VITE_FORM_ENDPOINT` (see your personalized `13`)
- `src/pages/Contact.tsx` — the form adapter (empty endpoint = simulated submissions so the flow works pre-launch)
- `vercel.json` — SPA rewrite + CSP. When the form endpoint host is set, add it to
  `connect-src` **deliberately** (and `form-action` if a same-origin redirect is used)
- `src/vite-env.d.ts` — typed env vars

**Verify:** empty endpoint → simulated success; real endpoint → `POST` observed + redirect to `/thank-you`; deep-link any inner route on refresh → 200.

**Governed by doc:** `03` (Security Standards) and `09` (Deployment & Release).
**If you have not** reviewed CSP/secrets/`.env` rules in `03`, complete them now.

---

### Step 8 — QA / acceptance pass

**What:** prove the site is production-ready before deploy.

**Files:** none to change — verification only.

**Verify:**
- Route walk: every route + an unknown path returns 200 (404 is client-side via `*`)
- Statics: sitemap, robots, llms, og-image, favicon, JS/CSS bundles all 200
- JSON-LD: `dist/index.html` parses; canonical, OG, theme-color present
- Sitemap excludes `/thank-you`, includes `/privacy`
- Form validation: required fields, email regex, maxLength, honeypot
- A11y: no `<img>` missing `alt`; error states use `role="alert"`; groups have `aria-label`
- Security: `.env*` untracked, no secrets, CSP strict

**Governed by doc:** `08` (Testing & QA) — run the full `08` checklist here, then `05`
(Performance & Optimization).

---

## 2. Company-specific slots (fill from your personalized `13`)

For every row: the value comes from your `13-client-onboarding-runbook.md`. Replace the
demo content, **keep the data keys and field names** — renaming them breaks the code.

| Slot | Location | Notes |
| ---- | -------- | ----- |
| Company name, logo text, tagline, founding year, contact, WhatsApp, hours, social | `src/data/site.ts` | `logoText` must be short (renders in header/menu) |
| Theme (colors, fonts, radii, shadows) | `src/styles/globals.css` → `:root` | RGB triplets, not hex |
| Fonts | `index.html` Google Fonts `<link>` | Must match `--font-*` tokens |
| `theme-color` | `index.html` | Match the client brand |
| LocalBusiness JSON-LD, OG/Twitter meta | `index.html` | Domain via `VITE_SITE_URL` |
| Services, industries, testimonials, values, process, metrics | `src/data/siteContent.ts` | Confirm metrics with client |
| Service catalog | `src/data/services.ts` | Feeds services page + footer |
| Projects + categories | `src/data/projects.ts` | |
| Leadership, timeline, certifications | `src/data/about.ts` | Confirm names/licenses with client |
| FAQs | `src/data/faqs.ts` | |
| Privacy + terms copy | `src/data/legal.ts` | Client-approved copy |
| Nav labels/paths | `src/data/navigation.ts` | Rarely changes |
| Image keys → local files | `src/data/images.ts` | Keep key names; serve from `public/images/` |
| Sitemap / robots / llms | `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt` | Domain via `VITE_SITE_URL` |
| OG image / favicon | `public/og-image.png`, `public/favicon.svg` | OG must stay 1200×630 |
| Env vars | `.env.local` + hosting provider | `VITE_SITE_URL`, `VITE_GA_MEASUREMENT_ID`, `VITE_FORM_ENDPOINT` |
| CSP form host | `vercel.json` `connect-src` | Add the form endpoint host only |

---

## 3. Command cheat-sheet

```bash
npm ci            # clean install
npm run build     # type-check + production build (must pass)
npm run lint      # no errors (the usePageMeta exhaustive-deps warning is pre-existing)
npm run preview   # manual pass over every route at mobile/tablet/desktop
npm run optimize:images -- --force   # re-download + compress images after editing the script
```

`npm run build` runs `scripts/sync-domain.mjs`, which rewrites the static demo domain in
`dist/` with your `VITE_SITE_URL` — no manual find/replace.

---

## 4. Acceptance gates (condensed from `12`)

Mark COMPLETE only when **all** of these pass on the production domain:

- [ ] Every route returns 200, including deep links on refresh
- [ ] Statics (sitemap, robots, llms, og-image, favicon, bundles) return 200
- [ ] One canonical per page; meta/OG present; JSON-LD valid on the right pages
- [ ] Sitemap excludes `/thank-you`; robots + llms reachable
- [ ] Form submits end-to-end; validation + error states work; honeypot fires
- [ ] No `<img>` missing `alt`; a11y roles correct; focus/scroll behavior sane
- [ ] Responsive pass at mobile, tablet, desktop
- [ ] No placeholder tokens; no demo brand strings remain
- [ ] `.env*` untracked; no secrets committed; CSP strict and matches form/analytics hosts
- [ ] Performance per `05` acceptable (images sized, bundle sane)
- [ ] GA4 events fire with the real Measurement ID (or consent state documented)

**Governed by docs:** `08` (Testing & QA), then `09` (Deployment), `10` (Maintenance),
`11` (Handover), `12` (Acceptance). **If you have not** done `09`–`12`, they run after QA
in this order: deploy (`09`) → verify production → maintenance/monitoring handoff (`10`) →
client handover (`11`) → final acceptance (`12`).

---

## 5. Pitfalls (things that break silently — avoid these)

- **Hex in the theme block.** `:root` colors must stay RGB triplets or Tailwind opacity
  modifiers (`bg-navy-950/50`) break.
- **Fonts in one place only.** Changing a font means updating **both** `--font-*` in the
  theme block **and** the Google Fonts `<link>` in `index.html`.
- **Wrong `VITE_SITE_URL`.** It feeds the canonical, JSON-LD, OG URLs, and sitemap. It must
  be the final production domain, no trailing slash.
- **Empty form endpoint shipped live.** Empty = simulated submissions (fine pre-launch).
  Before go-live, set the real `VITE_FORM_ENDPOINT` and add its host to CSP `connect-src`.
- **Deleting data keys.** Replace **values**, never rename keys/fields — components depend on them.
- **Hard-coded nav/breadcrumbs.** They read from `src/data/navigation.ts` and `meta.ts`
  registries. Edit the registries, not the pages.
- **`/thank-you` indexed.** Keep it `noindex` and out of `sitemap.xml`.
- **Renaming image keys.** `images.ts` keys map 1:1 to components — keep names, swap files.
- **Brand strings outside `src/data/`.** Alt text, map titles, etc. must use
  `siteConfig` or the rebrand silently misses them.

---

## 6. Doc map

| # | File | Governs |
| - | ---- | ------- |
| 01 | `01-project-requirements.md` | Project scope / requirements spec |
| 02 | `02-information-architecture-and-routi.md` | IA, routing, UI source-of-truth rules |
| 03 | `03-security-standards.md` | Security, CSP, secrets, headers |
| 04 | `04-seo-and-analytics.md` | SEO, meta, schema, sitemap, GA4 |
| 05 | `05-performance-and-optimization.md` | Performance, images, bundle size |
| 06 | `06-system-architecture-and-technical-.md` | Architecture, project structure, standards |
| 07 | `07-content-and-asset-management.md` | Content collection, assets, placeholders |
| 08 | `08-testing-and-qa.md` | QA checklist before delivery |
| 09 | `09-deployment-and-release.md` | Deploy + production verification |
| 10 | `10-maintenance-and-monitoring.md` | Post-launch maintenance/support |
| 11 | `11-client-handover-and-documentation.md` | Formal client handover |
| 12 | `12-project-acceptance-and-final-delivery-checklist.md` | Final acceptance — project complete definition |
| 13 | `13-client-onboarding-runbook.md` | **YOUR company-specific values — personalize and follow** |

> Note: the phase-doc filenames above are the ones shipped in the template. They may be
> shortened. Keep the numbers and this map when renaming.
