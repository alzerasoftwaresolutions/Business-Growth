# Runbook

Operational and maintenance guide for the Stonebridge Construction site.

## Rebrand / Client Theming

The site uses **Option B** theming: all design tokens are CSS custom properties
defined once in `:root`, mapped into Tailwind. A client theme is a single CSS
block swap — no Tailwind config or component edits required.

### The theme block (the one swap)

`src/styles/globals.css` → `:root` block. It defines every token:

- **Colors** — `--color-navy-*`, `--color-gold-*`, `--color-surface-*`,
  `--color-slate-*`, `--color-border-*` (RGB triplets so opacity modifiers work)
- **Fonts** — `--font-sans`, `--font-body`, `--font-mono`
- **Radii** — `--radius`, `--radius-sm`, `--radius-md`, `--radius-lg`
- **Shadows** — `--shadow-subtle`, `--shadow-card`
- **Layout** — `--container-width`

A new client theme = swap these values. Optionally keep them in a separate
stylesheet (e.g. `themes/client-a.css`) and change one `<link>`.

### Tailwind mapping

`tailwind.config.js` maps each token to its class (e.g.
`navy-950 → rgb(var(--color-navy-950) / <alpha-value>)`). It is **not** where
values are changed — it only wires variables to utilities.

### Secondary files that must also be updated

These are the known places outside the token block that carry brand color or
font values. Update them together to avoid a partially-rebranded site.

| File | What to update |
| ---- | -------------- |
| `index.html` | `<meta name="theme-color">` (currently `#0C1E38`) |
| `public/favicon.svg` | SVG fill/stroke colors |
| `public/og-image.png` | Raster brand image — regenerate at 1200×630 |
| Google Fonts `<link>` in `index.html` | Swap font families if fonts change, and keep in sync with `--font-*` in the theme block |

### Fonts

If a client font changes, update both places:

1. `src/styles/globals.css` → `--font-sans` / `--font-body` / `--font-mono`
2. `index.html` → the Google Fonts `<link>`

### Verification after a rebrand

```bash
npm run build
npm run lint
```

Walk the following to confirm no stragglers:

- [ ] Grep `src/` and `index.html` for legacy hex values:
      `#[0-9A-Fa-f]{6}` (expect only non-tokenized assets, e.g. box-shadows
      inside `--shadow-*` or images)
- [ ] Check `public/og-image.png`, `public/favicon.svg`, and `theme-color`
- [ ] Confirm no hard-coded Tailwind arbitrary values remain in `src/pages/**`
      (e.g. `text-[#...]`, `bg-[#...]`)

## Analytics / Tracking

- GA4 is enabled via the `VITE_GA_MEASUREMENT_ID` environment variable in
  `.env.local`. Analytics stays disabled until a real Measurement ID is set.
- **Consent:** GA never loads until the user clicks **Accept** on the cookie
  banner (`src/components/layout/CookieConsent.tsx`). The choice is stored in
  `localStorage` (`site-consent`) via `src/lib/consent.ts`; clicking **Decline**
  keeps analytics off for that visitor.
- Events: page views (`trackPageView`), `contact_form_submit`, `phone_click`,
  `email_click`, `whatsapp_click`, `consent_accepted`, `consent_declined`.

## Contact Form Delivery

- The form in `src/pages/Contact.tsx` POSTs JSON to `VITE_FORM_ENDPOINT`
  (`.env.local` / provider env). When unset, submissions are simulated
  (a `console.warn`, then the success path) so the demo flow works pre-launch.
- Before going live: set `VITE_FORM_ENDPOINT` to the approved endpoint and add
  its host to the `connect-src` directive in `vercel.json` (and `form-action`
  if the form is submitted via a same-origin redirect).
- The form is SPA client-side only; the deliverable `vercel.json` already ships
  an SPA rewrite so client routes deep-link on refresh.

## Placeholder / Client-Provided Content

**Draft status:** every project ships this template with demo content. Nothing in
`src/data/*`, the demo metrics, or the SEO statics is real until the client
confirms it. The demo brand (Stonebridge) is not owned by any real construction
company.

The following must be confirmed by the client before production:

- Company name / logo text / tagline / founding year in `src/data/site.ts`
- Phone number, email, WhatsApp, address, business hours, social URLs in
  `src/data/site.ts` (all current values are demo/fictional)
- Services, project types, industries, values, process steps, capabilities in
  `src/data/siteContent.ts`, `src/data/services.ts`, `src/data/projects.ts`
- Testimonials, "Trusted By" company names, stats/metrics, certifications and
  license numbers, leadership names, milestones in `src/data/siteContent.ts` and
  `src/data/about.ts` (all demo — verify accuracy or remove)
- FAQ answers in `src/data/faqs.ts`, legal copy in `src/data/legal.ts`
- Images in `public/images/` (demo Unsplash photos), `public/og-image.png`,
  `public/favicon.svg`
- Real GA4 Measurement ID (`VITE_GA_MEASUREMENT_ID` in `.env.local`)
- Contact-form delivery endpoint (`VITE_FORM_ENDPOINT` in `.env.local`), plus
  its host added to `vercel.json` `connect-src`
- Production domain in `.env.local` (`VITE_SITE_URL`). `npm run build` runs
  `scripts/sync-domain.mjs`, which rewrites the static
  `https://stonebridge.com` references in `dist/index.html`,
  `dist/sitemap.xml`, `dist/robots.txt`, `dist/llms.txt` with the configured
  domain — no manual find/replace needed. `src/data/site.ts` reads the same
  env var at build time.

## Content Editing

Client content lives centrally in `src/data/`:

- `site.ts` — company name, contact, social, hours
- `siteContent.ts` — services, industries, testimonials, values
- `projects.ts` — project portfolio
- `about.ts` — leadership, timeline, certifications
- `faqs.ts` — FAQ accordion content
- `legal.ts` — privacy policy and terms
- `images.ts` — image keys → local paths (`public/images/`)

## SEO

- `public/sitemap.xml` — update URLs if routes change
- `public/llms.txt` — LLM-facing summary (linked from `robots.txt`)
- `index.html` — `LocalBusiness` (GeneralContractor) JSON-LD, OG/Twitter meta,
  static canonical
- The demo domain is swapped for the client domain automatically at build —
  see `scripts/sync-domain.mjs` and `VITE_SITE_URL`
- Per-page JSON-LD is injected at runtime: `BreadcrumbList` (via `usePageMeta`),
  `FAQPage` (via `Faq` component)
