# `SCHEMA-ALIGNMENT.md`

# Business Growth — Configuration Schema Alignment Manifest

**Status:** Phase 4 complete — all seven schemas are ALIGNED with the configuration files and pass Ajv runtime validation (see §4, §5).
**Decision:** `configuration/*.config.json` files are the **authoritative implementation contract** because they were created directly from the Business Growth package documentation. Schemas are the machine-readable mirror of that contract and are enforced at runtime by Ajv.

---

## 1. Resolution Rules (approved)

1. Treat the existing `configuration/*.config.json` files as the current authoritative implementation contract.
2. Do NOT rewrite the configuration files merely to satisfy the currently existing schemas.
3. Do NOT silently ignore the schemas.
4. Phase 3 creates the typed configuration access layer and structural invariant checks against the ACTUAL configuration structures.
5. Every schema/config mismatch is documented below: configuration file, mismatched schema, actual structure, expected schema structure, affected functionality, recommended correction.
6. Do NOT add Ajv runtime validation yet while the existing schemas do not accurately describe the actual configuration.
7. Phase 4 task: **"Align all configuration schemas with the authoritative configuration files, then introduce Ajv schema validation."**
8. Do not make architectural assumptions based solely on the existing schemas.
9. Preserve structures explicitly required by the package documentation (seo `urls.rules`, analytics `leadGeneration` events, feature configuration, navigation configuration, contact/RFQ configuration).
10. Phase 4 process order:

    ```
    Documentation
        ↓
    Authoritative configuration
        ↓
    Updated JSON schemas
        ↓
    Schema validation
        ↓
    TypeScript types
        ↓
    Application
    ```

11. Final goal: `configuration/*.config.json` and `configuration/schemas/*.schema.json` describe exactly the same contract.
12. Structural invariant checks in `src/config/` are a **temporary** Phase 3 safety mechanism, not a permanent replacement for JSON Schema validation.
13. Do not generate fake/default client values merely to make validation pass.

---

## 2. Shared Root Cause

Every schema declares `"additionalProperties": false` at root and at nested levels, and lists only a subset of the keys present in the actual configuration files. The actual configs contain richer, documented structures. Validation against the current schemas therefore fails for every shipped config file (except `navigation`, which partially matches but still fails on `mobile`/`secondary`).

The schemas appear to be an earlier draft; the config files were generated directly from the Business Growth package documentation (docs 01, 05, 06, 07, 17, etc.).

---

## 3. Mismatch Register

### 3.1 `project.config.json` vs `project.config.schema.json`

- **Configuration file:** `configuration/project.config.json`
- **Mismatched schema:** `configuration/schemas/project.config.schema.json`
- **Actual structure (authoritative):**
  - Root: `$schema`, `project`, `client`, `brand`, `website`, `features`, `navigation`, `contact`, `seo`, `analytics`, `integrations`, `content`, `design`, `performance`, `security`, `deployment`, `maintenance`, `warranty`, `development`, `projectRules`.
  - `project`: `id`, `name`, `slug`, `version`, `status`, `package`, `packageVersion`, `createdAt`, `updatedAt`.
  - `website.environment` holds the environment value (`development|staging|production`).
- **Expected schema structure (current schema):**
  - Root allows only `$schema` + `project` (`additionalProperties: false`).
  - `project` requires `name`, `slug`, `package` (`const: "business-growth"`), `environment` — and does not list `id`, `version`, `status`, `packageVersion`, `createdAt`, `updatedAt`.
  - No `client`, `brand`, `website`, `features`, etc.
- **Affected functionality:** Project identity, client metadata, brand paths, page feature flags, environment detection, deployment/maintenance defaults, development stack record.
- **Recommended correction:** Rewrite `project.config.schema.json` to mirror the actual 20-section root object and the actual `project` block; move `environment` under `website` (or accept both) and update the enum/`const` values to match (`package: "business-growth"`, `packageVersion`, `status` enum).

### 3.2 `business.config.json` vs `business.config.schema.json`

- **Configuration file:** `configuration/business.config.json`
- **Mismatched schema:** `configuration/schemas/business.config.schema.json`
- **Actual structure (authoritative):**
  - `business`: `legalName`, `displayName`, `shortName`, `tagline`, `description`, `industry`, `subIndustry`, `businessType`, `yearEstablished`, `mission`, `vision`, `values`, `companyStory`, `leadershipMessage`, `companyProfile` (`short|medium|long`).
  - Plus `branding`, `contact`, `businessHours` (`schedule.{monday..sunday}`), `socialMedia`, `locations`, `companyStructure`, `credentials`, `relationships`, `businessMetrics`, `legal`, `contentRules`.
- **Expected schema structure (current schema):**
  - `business` requires `identity` + `contact`; uses `identity.{name,...}`, `branding`, `address`, `leadership`, `statistics`, `certifications`, `awards`, `clientLogos`, `partnerLogos`, `serviceAreas`, `languages`, `legal`.
- **Affected functionality:** Business identity/description, branding paths, contact info, business hours, social media, locations, team, credentials, relationships, metrics, legal.
- **Recommended correction:** Rewrite `business.config.schema.json` to mirror the actual flat `business` block; align day model (`schedule` vs top-level days), `locations`, `credentials`, `relationships`, `businessMetrics`, `contentRules`.

### 3.3 `features.config.json` vs `features.config.schema.json`

- **Configuration file:** `configuration/features.config.json`
- **Mismatched schema:** `configuration/schemas/features.config.schema.json`
- **Actual structure (authoritative):**
  - `features`: `pages` (`home`, `about`, `services`, `products`, `projects`, `testimonials`, `blog`, `contact`, `rfq`, `faq`, `team`, `certifications`, `partners`, `locations`), `content`, `leadGeneration`, `media`, `navigation`, `search`, `filtering`, `marketing`, `trust`, `communication`, `seo`, `accessibility`.
  - Plus top-level `featureDependencies` and `featureRules`.
- **Expected schema structure (current schema):**
  - `features` allows only `company`, `about`, `leadershipMessage`, `team`, `companyTimeline`, `statistics`, `services`, `serviceDetails`, `products`, `productCategories`, `productDetails`, `productSpecifications`, `productBrochures`, `portfolio`, `projectDetails`, `caseStudies`, `testimonials`, `clientLogos`, `partnerLogos`, `certifications`, `awards`, `faqs`, `blog`, `blogCategories`, `blogDetails`, `promotionalVideos`, `imageLightbox`, `contact`, `contactForm`, `rfq`, `whatsapp`, `clickToCall`, `emailContact`, `googleMaps`, `officeLocations`, `businessHours`, `socialMedia`, `search`, `analytics`, `searchConsole`, `seo`, `multilingual`, `newsletter`, `liveChat` — with `$defs` per feature type.
- **Affected functionality:** Page enablement, content sections, lead-generation flags, media, navigation behavior, search/filtering, marketing, trust sections, communication channels, SEO, accessibility, dependency enforcement.
- **Recommended correction:** Rewrite `features.config.schema.json` to mirror the actual `features.pages|content|leadGeneration|media|navigation|search|filtering|marketing|trust|communication|seo|accessibility` object and add `featureDependencies` + `featureRules`.

### 3.4 `navigation.config.json` vs `navigation.config.schema.json`

- **Configuration file:** `configuration/navigation.config.json`
- **Mismatched schema:** `configuration/schemas/navigation.config.schema.json`
- **Actual structure (authoritative):**
  - `navigation`: `header` (`enabled`, `behavior`, `logo`, `primary`, `cta`), **`mobile`**, **`secondary`**, `dropdowns` (`services`, `products`, `projects`), `footer`, `breadcrumbs`, `utilityNavigation`, `navigationRules`, `externalLinks`, `redirects`, `accessibility`.
- **Expected schema structure (current schema):**
  - `navigation` allows only `header`, `dropdowns`, `footer`, `breadcrumbs`, `utilityNavigation`, `externalLinks`, `redirects`, `navigationRules`, `accessibility` — **no `mobile` or `secondary`**.
  - Header CTA requires `enabled`, `label`, `href` and allows `type`/`newTab`/`analyticsEvent`; actual config CTA has only `enabled`, `label`, `href`, `type`.
- **Affected functionality:** Mobile navigation (drawer, mobile primary, mobile CTA), secondary navigation, header/footer, dropdowns, breadcrumbs, accessibility, broken-link prevention.
- **Recommended correction:** Add `mobile` and `secondary` blocks to the schema; align `cta` properties; keep the otherwise-close `header`/`footer`/`dropdowns` definitions.

### 3.5 `contact.config.json` vs `contact.config.schema.json`

- **Configuration file:** `configuration/contact.config.json`
- **Mismatched schema:** `configuration/schemas/contact.config.schema.json`
- **Actual structure (authoritative):**
  - `contact`: `enabled`, `primaryContact`, `channels` (`email`, `phone`, `whatsapp`, `googleMaps`, `socialMedia`), `contactPage`, `contactForm`, `rfq`, `leadRouting`, `leadTracking`, `callToAction`, `accessibility`, `rules`.
  - `contactForm` and `rfq` each define config-driven `fields` arrays (id/name/label/type/required/enabled/placeholder/autocomplete/options...), `spamProtection`, `validation`, `privacy`.
- **Expected schema structure (current schema):**
  - `contact` requires `channels`; allows `channels`, `contactForm`, `rfq`, `locations`, `businessHours`, `map`, `notifications`, `spamProtection`, `privacy`, `analytics`, `successBehavior`, `errorBehavior` — a different shape (`channels` = `{phone,email,whatsapp,website,address,socialMedia}` with `value/href/...`; forms keyed differently).
- **Affected functionality:** Contact page, contact form, RFQ, lead routing to email, lead tracking, CTA, accessibility, privacy/spam rules.
- **Recommended correction:** Rewrite `contact.config.schema.json` to mirror the actual structure, including config-driven form `fields`, `leadRouting`, `leadTracking`, `callToAction`, `accessibility`, and `rules`.

### 3.6 `seo.config.json` vs `seo.config.schema.json`

- **Configuration file:** `configuration/seo.config.json`
- **Mismatched schema:** `configuration/schemas/seo.config.schema.json`
- **Actual structure (authoritative):**
  - `seo`: `enabled`, `site` (`name`, `legalName`, `url`, `canonicalUrl`, `defaultLanguage`, `defaultTitle`, `titleTemplate`, `defaultDescription`, `defaultKeywords`, `defaultImage`, `favicon`, `themeColor`), `indexing`, `robots`, `sitemap`, `canonical`, `metadata` (`defaults` + `pages`), `openGraph`, `twitter`, `structuredData`, `breadcrumbs`, `images`, **`urls` (with `rules` — `services: "/services"`, `productDetails: "/products/{slug}"`, etc.)**, `pagination`, `redirects`, `searchEngineVerification`, `localSeo`, `internationalSeo`, `contentSeo`, `performanceSeo`, `analyticsIntegration`.
  - Plus top-level `pageSeoOverrides` and `seoRules`.
- **Expected schema structure (current schema):**
  - `seo` requires `site`; allows `enabled`, `site`, `defaults`, `pages`, `openGraph`, `twitter`, `canonical`, `robots`, `structuredData`, `localSeo`, `contentTypes`, `images`, `sitemap`, `hreflang`, `redirects` — no `urls.rules`, `metadata.pages`, `indexing`, `contentSeo`, `performanceSeo`, `seoRules`.
- **Affected functionality:** Per-route metadata, canonical URLs, sitemap, robots, structured data, URL format (`urls.rules` — explicitly required by docs 01/07), local/multilingual SEO, content/performance SEO, page SEO overrides.
- **Recommended correction:** Rewrite `seo.config.schema.json` to mirror the actual structure; **must preserve `urls.rules`**, `metadata.pages`, `indexing`, `contentSeo`, `performanceSeo`, `seoRules`, and top-level `pageSeoOverrides`.

### 3.7 `analytics.config.json` vs `analytics.config.schema.json`

- **Configuration file:** `configuration/analytics.config.json`
- **Mismatched schema:** `configuration/schemas/analytics.config.schema.json`
- **Actual structure (authoritative):**
  - `analytics`: `enabled`, `environment` (object: `development|staging|production`), `privacy`, `googleAnalytics`, `googleSearchConsole`, `tracking` (`pageViews`, `scrollDepth`, `outboundLinks`, `fileDownloads`, `videoEngagement`), **`leadGeneration`** (`contactForm`, `rfq`, `phone`, `email`, `whatsapp`, `map` events, `generate_lead`/`generate_quote`), `ctaTracking`, `contentEngagement`, `search`, `downloads`, `campaigns`, **`conversionEvents`**, `eventNaming`, `customEvents`, `customDimensions`, `customMetrics`, `dashboards`, `businessMetrics`, `reporting`, `debugging`, `rules`.
- **Expected schema structure (current schema):**
  - `analytics` requires `enabled`; `environment` is a **string** enum; allows `enabled`, `environment`, `googleAnalytics`, `googleTagManager`, `searchConsole`, `consent`, `events`, `conversions`, `forms`, `communication`, `content`, `media`, `downloads`, `scroll`, `outboundLinks`, `performance`, `debug` — no `leadGeneration`, `conversionEvents`, `ctaTracking`, `contentEngagement`, `businessMetrics`, `rules`.
- **Affected functionality:** GA4 loading, lead-generation tracking (`generate_lead`, `generate_quote` — explicitly required by doc 06/07), CTA tracking, conversions, privacy (no PII), reporting, debugging.
- **Recommended correction:** Rewrite `analytics.config.schema.json` to mirror the actual structure; **must preserve `leadGeneration`**, `conversionEvents`, `tracking`, `ctaTracking`, `businessMetrics`, `rules`, and change `environment` to the object shape.

---

## 4. Phase 4 Completion — Aligned Schemas + Ajv Runtime Validation

**All seven schemas were rewritten in Phase 4 to mirror the authoritative configuration files exactly** (same keys, same `required` lists, same `enum`/`const` values, `additionalProperties: false` everywhere, shared shapes via `$defs`). The Phase 3 mismatch register (§3) is resolved.

Runtime enforcement now lives in `src/config/`:

- **`src/config/schema.ts`** — Ajv 8 singleton (`allErrors: true`, `strict: true`). All seven schemas are **compiled exactly once per process** and cached; validators are reused, never recompiled in the browser. `validateWithSchema(key, data)` maps Ajv errors to structured issues (file, JSON path, keyword, message).
- **`src/config/validate.ts`** — `validateConfigs()` = schema validation (all seven files) + cross-configuration consistency checks + informational emptiness warnings. `checkConsistency()` keeps the invariant rules the schemas cannot express across files:
  - `featureDependencies` satisfaction (`featureRules.featureDependenciesMustBeSatisfied`).
  - Navigation/footer/dropdown links never target disabled pages (`doNotCreateNavigationForDisabledPages`, `doNotExposeDisabledFeaturesInProduction`).
  - Non-production environments must not be indexed (`seoRules.doNotIndexDevelopment/StagingEnvironment`).
- **`src/config/load.ts`** — `loadConfigs()` validates every file; any `error`-level issue throws `ConfigValidationError` (structured file/path/keyword/reason diagnostics, safe fail). Warn-level issues (empty client content) never block startup.
- **`src/config/errors.ts`** — `ConfigIssue`/`ConfigValidationError`/`formatConfigIssue`.

The Phase 3 structural checks were replaced by this schema-driven validation (they were explicitly temporary). Empty client strings/arrays remain valid template state and are reported as **informational** warnings — never fabricated into defaults.

## 5. Verification (Phase 4)

- `npm run test` — 29 Vitest tests green, including the configuration test matrix **A–L** (all seven configs pass; missing required property / wrong type / invalid enum / invalid nested object / invalid array item / unexpected property each fail; optional property omitted passes; empty template content valid; feature-disabled and feature-enabled configs valid; cross-config consistency checks).
- `npx tsc` — passes.
- `npm run lint` — 0 errors / 0 warnings.
- `npm run build` — passes.
- Runtime smoke test — `valid: true`, `errorCount: 0`, `warningCount: 75` (informational emptiness only), 19 feature-aware routes derived.
- `npm audit` decision — see Phase 4 report; `react-router-dom` updated to latest 6.x (6.30.4); the remaining advisories are dev-time tooling (vite/vitest/esbuild) requiring breaking major upgrades and are tracked as technical debt.

**Success criteria met:** `configuration/*.config.json` and `configuration/schemas/*.schema.json` describe exactly the same contract, and Ajv validation passes for all shipped configuration files.

---

## 6. Phase 7 — Config-vs-Content Boundary Decision

### 6.1 Classification

Audit of `configuration/business.config.json` for Phase 7:

- **Category A (stays in config — authoritative business/instance configuration):** `business`, `branding`, `contact`, `businessHours`, `socialMedia`, `legal`, `contentRules`. These describe the business itself and the operating instance, not editorial content.
- **Category B (content-like collections that currently live in config):** `locations`, `companyStructure.teamMembers`, `credentials` (`certifications`, `awards`, `memberships`), `relationships` (`clients`, `partners`), `businessMetrics`. These are editorial/content-shaped data (collections of records), not instance settings.
- **Category C (kept as-is in Phase 7):** The collections stay in `business.config.json` for now. The empty template state is valid; `business.config.json` is the single source of truth for this data and every value passes Ajv validation.

### 6.2 Decision

**Keep the current architecture in Phase 7.** `business.config.json` remains authoritative for both business settings and content-like collections. The reusable content abstraction (`CollectionSource` / `DetailSource` in `src/content/`) is kept as the runtime boundary: templates read through these interfaces and never import configuration/content JSON directly.

No migration is performed in Phase 7 — the reusable package remains client-neutral and the empty template state is valid.

### 6.3 Phase 8 Migration Strategy (documented, deferred)

When a client instance needs `content/` as the live editorial source, the migration path is:

1. Move content-like collections (`locations`, `teamMembers`, `certifications`, `awards`, `memberships`, `clients`, `partners`, `businessMetrics`) into `content/` structured files per `05-content-model-and-content-structure.md`.
2. Implement `content/` adapters that satisfy `CollectionSource<T>` / `DetailSource<T>` (same contracts used today in `src/content/collection.ts`, `src/content/detail.ts`).
3. Update `business.config.json` to reference the `content/` source (via `content.source`) instead of holding the records inline.
4. Keep `business.config.json` settings (`business`, `branding`, `contact`, `businessHours`, `socialMedia`, `legal`, `contentRules`) unchanged.
5. Update schemas/`SCHEMA-ALIGNMENT.md` if the `business` contract changes.

This is explicitly a Phase 8 / client-instance task; it is not performed on the reusable package in Phase 7.

---

## 7. Phase 7 — `project.config.json` Authority Decision

### 7.1 Findings

`project.config.json` duplicates sections that also exist as dedicated files:

| Section in `project.config.json` | Dedicated authoritative file |
|---|---|
| `features` | `features.config.json` |
| `navigation` | `navigation.config.json` |
| `contact` | `contact.config.json` |
| `seo` | `seo.config.json` |
| `analytics` | `analytics.config.json` |
| `integrations` | **no dedicated file** — `integrations` lives only in `project.config.json` |

`src/config/load.ts` imports all seven files (`project`, `business`, `features`, `navigation`, `contact`, `seo`, `analytics`) and validates each against its aligned schema.

### 7.2 Decision

- The **seven dedicated `configuration/*.config.json` files remain the authoritative implementation contract**, as stated in the Phase 4 decision (header of this document) and enforced by `src/config/load.ts`.
- `project.config.json` is the **project overview/record** — it carries instance-level metadata (`project`, `client`, `brand`, `website`, `integrations`, `content`, `design`, `performance`, `security`, `deployment`, `maintenance`, `warranty`, `development`, `projectRules`) and mirrors feature/navigation/contact/seo/analytics for human readability.
- **No structural change is made in Phase 7.** The smallest safe change is documentation of the authority split; redesigning the config architecture is out of scope (per Phase 7 constraints).
- `integrations` has no dedicated file and is intentionally not created in Phase 7: integrations are configured under `project.config.json → integrations` and consumed from there. Any doc reference to a standalone `integrations.config` is obsolete (see the fix in `Business package md/AI-DEVELOPMENT-RULES.md` §12).

### 7.3 Consequences

- When editing configuration, change the dedicated file for its domain (e.g., `seo.config.json` for SEO), and update `project.config.json` only when the change also belongs in the project overview record.
- Schema alignment (§1 resolution rule 11) applies to the dedicated files; `project.config.json` is validated by `project.config.schema.json` for its own sections.
