# Client Onboarding Runbook — Starter Presence

**For:** Agency teammates spinning up a new client site from this template.
**Demo brand shipped in the template:** Stonebridge Construction.
**Est. time:** 1–2 hours per new client after the client content is gathered.

This runbook is the step-by-step path from cloned template to a deployed,
client-branded site. It references the phase docs in this folder (QA, SEO,
security, deployment) at the point where each applies.

---

## 0. Prerequisites

- [ ] Node 18+ and npm installed
- [ ] A repo clone: `git clone <template-repo> my-client-site`
- [ ] `.env.local` created from `.env.example` (see Step 3)
- [ ] Client content gathered: company name, tagline, contact, real location,
      testimonials, project list, photos, social URLs, GA4 property

---

## 1. Rename the global site identity

All brand naming lives in one config. Edit `src/data/site.ts`:

| Field            | Stonebridge demo value      | Replace with                 |
| ---------------- | --------------------------- | ---------------------------- |
| `companyName`    | `Stonebridge Construction`  | Client legal/trade name      |
| `logoText`       | `STONEBRIDGE`               | Client short brand          |
| `tagline`        | `Engineering Excellence`    | Client tagline               |
| `industrySuffix` | `Construction`              | Client industry              |
| `foundingYear`   | `1978`                      | Client founding year         |
| `phone` / `phoneHref` | `1-800-BUILD-IT` / `tel:+18885550199` | Client real phone |
| `email` / `emailHref` | `inquiries@stonebridge.com` | Client real email |
| `whatsapp`       | `+1 (888) 555-0199` | Client WhatsApp (or remove)  |
| `address`        | `150 Heritage Plaza, Chicago, IL 60601` | Client real address |
| `siteUrl`        | (from `.env`, see Step 3)   | Production domain            |

Example: `logoText` must be short — it renders in the header and mobile menu.
Keep it ≤ ~10 characters.

---

## 2. Theme swap (Phase 2)

The site uses CSS-custom-property theming. A full rebrand is one block swap:

1. Open `src/styles/globals.css` → `:root`.
2. Replace the `--color-*`, `--font-*`, `--radius-*`, `--shadow-*`,
   `--container-width` values with the client palette.
   (Colors are RGB triplets — `196 154 108`, not `#C49A6C`.)
3. If fonts change, also update the Google Fonts `<link>` in `index.html`.

Optional: move the `:root` block into `themes/client-a.css` and change one
`<link>` to keep multiple client themes side-by-side. See `docs/runbook.md`.

---

## 3. Environment variables

Copy `.env.example` → `.env.local` (never commit it):

```bash
VITE_SITE_URL=https://client-domain.com   # canonical production domain (no trailing slash)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX       # real GA4 property; empty = analytics disabled
VITE_FORM_ENDPOINT=https://...            # contact-form delivery endpoint; empty = simulated submissions
```

- `VITE_SITE_URL` feeds the static canonical, all JSON-LD `item`/`url` values,
  OG/Twitter image URLs, and the sitemap output. It must be the final domain.
- `VITE_FORM_ENDPOINT` is the JSON POST target for the contact form. The form
  adapter in `src/pages/Contact.tsx` sends the payload and navigates to
  `/thank-you` on success; when the variable is empty the submission is
  simulated so the demo flow still works pre-launch.
- Set the same variables in the hosting provider (e.g. Vercel Project
  Environment Variables) so production builds are correct.

---

## 4. Update content in `src/data/`

Work through every file. Replace demo content with client content — do **not**
rename data keys or the camelCase field names.

| File                  | Contains                                            |
| --------------------- | --------------------------------------------------- |
| `siteContent.ts`      | Services preview, industries, testimonials, values, process, metrics |
| `services.ts`         | Full service catalog (services page + footer)       |
| `projects.ts`         | Project portfolio + categories                       |
| `about.ts`            | Leadership, timeline, certifications                 |
| `faqs.ts`             | FAQ accordion content                                |
| `legal.ts`            | Privacy policy + terms — client-appropriate copy     |
| `navigation.ts`       | Nav labels/paths (rarely changes)                    |
| `images.ts`           | Image URL registry (see Step 6)                      |

The **page copy** in `src/pages/*.tsx` ships with generic draft copy that
interpolates `siteConfig.companyName` — review it and confirm with the client
(no `[COMPANY *]`/`[APPROACH]`/`[PARKING]` placeholders remain in the template).
Confirm accuracy of sample metrics, testimonial names, and certification/license
numbers with the client.

---

## 5. Static SEO files + security headers

Files 3–8 in this folder reference these; after Steps 1–4, sync the statics:

1. **`index.html`** — `theme-color`, `og:*`/`twitter:*` values, and the
   `GeneralContractor` (LocalBusiness) JSON-LD: `name`, `url`, `telephone`,
   `email`, `address`, `openingHours`, `sameAs`. Swap fonts here too if changed.
2. **`public/sitemap.xml`** — domain in every `<loc>`, plus route list.
   Remove `/thank-you` (noindex) — it should not be listed.
3. **`public/robots.txt`** — `Sitemap:` and `LLMs.txt:` URLs. Keep `/llms.txt`.
4. **`public/llms.txt`** — company summary, URL list, contact block.
5. **`vercel.json`** — security headers live here. When your `VITE_FORM_ENDPOINT`
   host is set, add it to `Content-Security-Policy` `connect-src` (the SPA
   rewrite for deep links is already configured). Confirm HSTS,
   `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`,
   `Permissions-Policy`, `frame-ancestors`, `base-uri` match the client's
   production needs.

---

## 6. Replace demo images / assets

1. **`src/data/images.ts`** — swap every demo key for client photos. Images are
   served from `public/images/` (the `imgUrl` helpers return local paths, so the
   CSP's `img-src 'self'` already allows them). Download + compress new photos
   with `npm run optimize:images` after editing `scripts/optimize-images.mjs`
   (`--force` re-downloads; a `key` value is `url` + `width`). Keep the existing
   key names so no component code changes. Verify each local file returns HTTP 200.
2. **`public/og-image.png`** — regenerate 1200×630 with the client brand/logos.
3. **`public/favicon.svg`** — replace with client mark or regenerate.
4. Confirm `og-image` dimensions stay 1200×630 (referenced by OG meta).

---

## 7. QA / security / SEO verification

Run the existing phase docs in order (they live in this folder as the numbered
files `03`–`12`):

1. **08 — Testing & QA** — component/route/form behavior, responsive
   (mobile/tablet/desktop), form validation, sticky-CTA and mobile menu.
2. **04 — SEO & Analytics** — one canonical per page, meta/OG present,
   `BreadcrumbList` + `FAQPage` JSON-LD on the right pages, sitemap/robots
   reachable, GA4 events firing with a real Measurement ID.
3. **03 — Security Standards** — header review, CSP matches form/analytics
   hosts, no secrets committed, `.env.local` untracked.
4. **05 — Performance & Optimization** — image sizes, bundle check.

Local checks before deploy:

```bash
npm ci
npm run build    # type-check + production build (must pass)
npm run lint     # no errors; the usePageMeta exhaustive-deps warning is pre-existing
npm run preview  # manual pass over every route at desktop/tablet/mobile
```

Search for stragglers: `[PLACEHOLDER]`, `[WHATSAPP`, `stonebridge`,
`150 Heritage`, `1-800-BUILD-IT` across `src/` and `public/`.

---

## 8. Deploy

Follow **09 — Deployment & Release** and **10 — Maintenance & Monitoring**,
then finish with signal:

1. Push to the hosting provider (Vercel recommended — `vercel.json` ships
   security headers and SPA rewrite*).
2. Set the environment variables in the provider dashboard.
3. Deploy, then verify production URLs, headers, sitemap, robots, og-image.
4. Continue with **11 — Client Handover** and **12 — Acceptance/Final Delivery**
   for sign-off.

> \* The SPA rewrite is already configured in `vercel.json` so client routes
> deep-link on refresh. It excludes `assets`, `og-image`, `favicon`, `sitemap`,
> `robots`, and `llms` from being rewritten to `/index.html`.

---

## Checklist shortcut

- [ ] `src/data/site.ts` rebranded
- [ ] Theme swap in `globals.css` `:root` (+ fonts in `index.html`)
- [ ] `.env.local` + provider env: `VITE_SITE_URL`, `VITE_GA_MEASUREMENT_ID`, `VITE_FORM_ENDPOINT`
- [ ] Contact form delivery verified; form host added to `connect-src` in `vercel.json`
- [ ] `src/data/*` rebranded; draft page copy reviewed/confirmed
- [ ] `index.html`, `sitemap.xml`, `robots.txt`, `llms.txt`, `vercel.json` synced
- [ ] `images.ts`, `og-image.png`, `favicon.svg` swapped
- [ ] Phase docs 8 → 4 → 3 → 5 executed
- [ ] `npm run build` + `npm run lint` clean (pre-existing warning OK)
- [ ] No `stonebridge` / placeholder strings remain
- [ ] Deployed, env set, production verified