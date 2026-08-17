
# `01-information-architecture-and-routing.md`

````md
# Business Growth
# Information Architecture & Routing Specification

**Document:** 01-information-architecture-and-routing.md  
**Version:** 1.0  
**Status:** Approved Agency Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines the information architecture, routing model, navigation structure, content hierarchy, page relationships, and user journeys for the Business Growth package.

Business Growth is a modular website template.

Therefore, the architecture must support different business models while preserving a consistent technical structure.

Possible client types include:

- Automotive dealerships
- Manufacturing companies
- Construction companies
- Engineering firms
- Import/export businesses
- Hotels and resorts
- Educational institutions
- Healthcare providers
- Travel agencies
- Real estate companies
- Consulting firms

The architecture must allow the agency to enable only the modules required by each client.

---

# 2. Inherited Standards

Basic website standards from Starter Presence remain applicable unless superseded by a Business Growth-specific requirement.

These include:

- Semantic navigation
- Responsive architecture
- Clean URLs
- Accessible navigation
- Approved UI as visual source of truth
- Client-specific content
- No invented business information

Reference:

`Starter Presence / 02-information-architecture-and-routing.md`

Business Growth should **reference inherited rules rather than duplicate them**.

This document focuses on what is new or materially expanded in Business Growth.

---

# 3. Core Architectural Difference

Starter Presence primarily follows:

```text
Page
  ↓
Content
  ↓
Contact
````

Business Growth follows:

```text
Page
  ↓
Content Structure
  ↓
Category / Listing
  ↓
Detail Content
  ↓
Related Content
  ↓
Lead Action
```

Example:

```text
Products
   ↓
Product Category
   ↓
Product Detail
   ↓
Related Products
   ↓
Request Quote
```

This hierarchy is one of the defining differences between the two packages.

---

# 4. Template-First Architecture

Business Growth must be treated as a collection of reusable page templates.

The architecture should distinguish between:

## Page Templates

Reusable layouts:

```text
Home
About
Services
Service Detail
Products
Product Category
Product Detail
Projects
Project Detail
Blog
Article
Contact
RFQ
```

## Content Entries

Actual client records:

```text
Service A
Service B
Product A
Product B
Project A
Project B
Article A
Article B
```

The AI must not create a completely new page architecture for every content item.

---

# 5. Core Architecture Model

The Business Growth website can be understood as:

```text
                  WEBSITE
                     │
        ┌────────────┼────────────┐
        │            │            │
      CORE        CONTENT       GROWTH
      PAGES       MODULES       MODULES
        │            │            │
        │        ┌───┼────┐       │
        │        │   │    │       │
      Home     Services Products Projects
      About    Blog     Team      Testimonials
      Contact  FAQs     Locations Certifications
        │            │            │
        └────────────┼────────────┘
                     │
                Lead Actions
                     │
        ┌────────────┼────────────┐
        │            │            │
       Form        RFQ         Contact
        │            │            │
        └────────────┼────────────┘
                     ↓
                    LEAD
```

---

# 6. Module Selection

Each client project must explicitly select its enabled modules.

Example:

```js
const modules = {
  services: true,
  products: true,
  projects: true,
  blog: true,
  testimonials: true,
  locations: false,
  rfq: true,
  team: false
};
```

The actual implementation may use a different configuration strategy.

The principle is:

> **Only required modules should be enabled.**

Do not ship unnecessary modules simply because they exist in the template.

---

# 7. Core Navigation

The primary navigation should expose the most important customer-facing areas.

Possible navigation:

```text
Home
About
Services
Products
Projects
Insights
Contact
Primary CTA
```

The exact navigation depends on enabled modules.

For example:

### Manufacturing

```text
Home
Company
Products
Industries
Projects
Resources
Contact
Request Quote
```

### Hotel

```text
Home
About
Rooms / Services
Facilities
Gallery
Offers / News
Contact
```

### Consulting

```text
Home
About
Services
Industries
Case Studies
Insights
Contact
```

The AI must not force one universal navigation on every client.

---

# 8. Navigation Generation

Navigation should be generated from the client's approved information architecture.

Conceptually:

```text
Enabled Modules
       ↓
Navigation Configuration
       ↓
Desktop Navigation
       +
Mobile Navigation
```

This prevents different components from containing conflicting navigation structures.

---

# 9. Navigation Priority

Navigation should prioritize the customer's most important discovery paths.

Recommended priority:

```text
1. Primary business offering
2. Products / Services
3. Proof / Projects
4. Supporting information
5. Contact / Lead action
```

Do not expose every available page in the main navigation simply because the page exists.

---

# 10. Header CTA

Business Growth should normally provide a stronger primary conversion action than Starter Presence.

Possible CTAs:

* Request a Quote
* Request Consultation
* Get Started
* Contact Sales
* Inquire Now
* Request Information

The CTA must reflect the client's actual sales process.

Example:

```text
Manufacturer
→ Request Quote

Consulting Firm
→ Book Consultation

Construction Company
→ Request a Project Consultation

Hotel
→ Make an Inquiry
```

Do not automatically use "Request Consultation" for every business.

---

# 11. Information Hierarchy

The website should move visitors through a logical hierarchy:

```text
Discovery
   ↓
Understanding
   ↓
Evaluation
   ↓
Trust
   ↓
Action
```

Typical implementation:

```text
Homepage
   ↓
Services / Products
   ↓
Detail
   ↓
Projects / Testimonials
   ↓
RFQ / Contact
```

---

# 12. Services Architecture

The Services module may use:

```text
/services
```

with optional detail pages:

```text
/services/:serviceSlug
```

Example:

```text
/services
/services/commercial-construction
/services/project-management
/services/engineering-consulting
```

The exact route names must follow the client's terminology.

---

# 13. Service Category Architecture

For businesses with many services:

```text
/services
   ↓
Category
   ↓
Service
```

Example:

```text
/services
/services/construction
/services/construction/commercial
```

Deep nesting should only be used when it materially improves information architecture.

Avoid unnecessarily deep URLs.

---

# 14. Service Detail Page

A Service Detail page should provide enough information for a visitor to evaluate the offering.

Possible navigation:

```text
Services
   ↓
Service Detail
   ├── Overview
   ├── Benefits
   ├── Capabilities
   ├── Process
   ├── Related Services
   └── Lead CTA
```

The exact sections are determined by the approved UI and client requirements.

---

# 15. Product Architecture

The Products module may use:

```text
/products
```

with optional categories:

```text
/products/category/:categorySlug
```

and product detail:

```text
/products/:productSlug
```

Example:

```text
/products
/products/industrial-equipment
/products/industrial-equipment/product-x
```

Keep URLs simple wherever possible.

---

# 16. Product Category Architecture

Categories should help customers discover products.

Example:

```text
Products
├── Construction Equipment
├── Industrial Equipment
└── Safety Equipment
```

The category page may contain:

```text
Category introduction
Product listing
Filters where necessary
Related categories
Inquiry CTA
```

---

# 17. Product Detail Architecture

A Product Detail page may contain:

```text
Product
├── Overview
├── Images
├── Features
├── Specifications
├── Applications
├── Downloads
├── Related Products
└── Request Quote
```

This is a presentation and inquiry system.

It is **not** an e-commerce product page.

There is no:

* Shopping cart
* Checkout
* Payment
* Customer account

unless separately approved.

---

# 18. Product Filters

Filtering may be supported where product volume justifies it.

Possible filters:

* Category
* Brand
* Type
* Industry
* Specification
* Application

Filters must be based on actual client data.

Do not create filters for attributes that do not exist.

---

# 19. Search

Internal search may be introduced if the content volume makes category navigation insufficient.

Potential searchable content:

* Products
* Services
* Projects
* Articles

Search should not be introduced simply because the package technically supports it.

---

# 20. Projects Architecture

Projects should be structured as a portfolio content type.

Routes:

```text
/projects
/projects/:projectSlug
```

Possible project listing:

```text
All Projects
Commercial
Industrial
Infrastructure
Healthcare
Education
```

Categories depend on the business.

---

# 21. Project Detail Architecture

Possible project structure:

```text
Project Detail
├── Hero
├── Overview
├── Client
├── Location
├── Category
├── Scope
├── Challenge
├── Approach
├── Results
├── Gallery
├── Related Projects
└── Lead CTA
```

Only information supported by the client's actual project documentation may be published.

---

# 22. Case Study Boundary

Project detail pages may become case studies when the client provides sufficient information.

A true case study may include:

```text
Problem
Solution
Implementation
Outcome
Results
```

Do not invent business results simply because the template provides a results section.

---

# 23. Blog / News Architecture

Where Blog/News is enabled:

```text
/blog
/blog/:articleSlug
```

Possible categories:

```text
News
Insights
Projects
Company Updates
Industry
```

Only categories needed by the client should be enabled.

---

# 24. Blog Listing

The Blog page may contain:

```text
Featured Article
Categories
Article Grid
Pagination
Related Content
CTA
```

Pagination is only required when the number of articles makes it useful.

---

# 25. Blog Article Architecture

An article may contain:

```text
Title
Author
Published Date
Category
Featured Image
Content
Related Articles
CTA
```

The article layout must remain consistent with the approved UI.

---

# 26. Article URLs

Article URLs should be readable.

Preferred:

```text
/blog/how-to-select-industrial-equipment
```

Avoid:

```text
/blog?id=193
```

---

# 27. Testimonials Architecture

Testimonials may be shown:

* On homepage
* On service pages
* On project pages
* On dedicated testimonial page

Where appropriate, individual testimonials should remain structured data rather than manually duplicated throughout the codebase.

---

# 28. Client / Partner Architecture

Client and partner logos may be organized into:

```text
Trusted Clients
Partners
Suppliers
Associations
```

These should remain conceptually distinct if the client's business requires the distinction.

Do not combine unrelated trust entities merely to fill a section.

---

# 29. Certification Architecture

Certifications may be displayed:

```text
/certifications
```

or as sections within:

* About
* Services
* Projects

depending on the client.

A dedicated page is appropriate only when the certification content is substantial.

---

# 30. Team Architecture

Optional Team structure:

```text
/team
/team/:memberSlug
```

The package does not require individual team detail pages.

A simple team directory may be sufficient.

---

# 31. Locations Architecture

For multi-location businesses:

```text
/locations
/locations/:locationSlug
```

Each location may contain:

```text
Name
Address
Phone
Email
Hours
Map
Directions
Services
```

Only include individual location pages when the number of locations justifies them.

---

# 32. Resource / Download Architecture

Resources may use:

```text
/resources
```

or be integrated into content pages.

Possible resources:

* Brochures
* Catalogs
* PDFs
* Technical specifications
* Company profiles
* Case studies

Downloads should not become a full document-management system.

---

# 33. Breadcrumb Architecture

Business Growth may use breadcrumbs more frequently than Starter Presence because content depth is greater.

Example:

```text
Home
/
Products
/
Industrial Equipment
/
Hydraulic Press
```

Breadcrumbs must correspond to actual routing hierarchy.

Do not create breadcrumb levels that do not exist.

---

# 34. Related Content

Business Growth should support contextual discovery.

Examples:

```text
Service
  ↓
Related Services

Product
  ↓
Related Products

Project
  ↓
Related Projects

Article
  ↓
Related Articles
```

Related content must be genuinely relevant.

Do not display random items solely to fill space.

---

# 35. Cross-Module Linking

Modules should connect naturally.

Examples:

```text
Product
   ↓
Related Service
   ↓
Project
   ↓
RFQ
```

```text
Service
   ↓
Related Projects
   ↓
Testimonial
   ↓
Contact
```

This is one of the key ways the Business Growth website supports conversion.

---

# 36. Lead Flow Architecture

The primary growth-oriented flow is:

```text
Visitor
   ↓
Discover
   ↓
Explore
   ↓
Evaluate
   ↓
Trust
   ↓
Inquire
```

Possible inquiry destinations:

```text
Contact
RFQ
Product Inquiry
Service Inquiry
WhatsApp
Phone
Email
```

---

# 37. RFQ Routing

The RFQ form may be accessible from:

* Header CTA
* Product Detail
* Service Detail
* Project page
* Homepage CTA
* Contact page

The exact placements must follow the approved client UI.

The user should not need to return to the homepage simply to submit an RFQ.

---

# 38. Contextual Lead Capture

Where practical, a lead should retain context.

Example:

```text
User views:
Product X

User clicks:
Request Quote

Form:
Product = Product X
```

This should only be implemented when the chosen architecture supports it.

Do not collect contextual information that is unnecessary.

---

# 39. Contact Architecture

The Contact page remains a central communication hub:

```text
/contact
```

It may include:

```text
Contact information
Contact form
RFQ entry point
Office locations
Business hours
WhatsApp
Email
Phone
Maps
Social links
```

The exact structure follows the approved UI.

---

# 40. 404 Architecture

The 404 page must provide useful routes back into the site.

For a richer Business Growth website, useful recovery options may include:

```text
Home
Services
Products
Projects
Contact
Search
```

Only include options actually available in the project.

---

# 41. Redirect Architecture

When a content URL changes:

```text
Old URL
   ↓
301 Redirect
   ↓
New URL
```

This is particularly important for:

* Product URLs
* Service URLs
* Project URLs
* Article URLs

Do not unnecessarily break existing published URLs.

---

# 42. URL Stability

Once an important content URL has been published, treat it as stable.

Changes should require a deliberate migration decision.

Avoid changing:

```text
/products/product-a
```

to:

```text
/products/new-product-a-page
```

without a redirect.

---

# 43. Dynamic Content Routing

Where content entries generate routes:

```text
Content Data
     ↓
Slug
     ↓
Route
     ↓
Detail Template
```

Example:

```text
Product
title = "Hydraulic Press"
slug = "hydraulic-press"

→ /products/hydraulic-press
```

The slug should be stable and human-readable.

---

# 44. Slug Rules

Slugs should:

* Be lowercase
* Use hyphens
* Be readable
* Avoid unnecessary words
* Remain stable

Avoid:

```text
Hydraulic_Press_2026
product123
newProductFinal
```

Preferred:

```text
hydraulic-press
```

---

# 45. Navigation Depth

Although Business Growth supports deeper content, do not create excessive navigation depth.

Prefer:

```text
Home
 ↓
Products
 ↓
Product
```

rather than:

```text
Home
 ↓
Products
 ↓
Category
 ↓
Subcategory
 ↓
Brand
 ↓
Type
 ↓
Product
```

unless the client's actual information architecture demands it.

---

# 46. Mobile Information Architecture

Mobile must preserve discoverability despite limited screen space.

Possible pattern:

```text
Logo
Menu
   ↓
Primary Navigation
   ↓
Important CTA
```

For larger content systems, mobile may additionally require:

* Category navigation
* Filter controls
* Search
* Breadcrumbs

These must follow the approved mobile UI.

---

# 47. Mobile Filters

If filters exist:

* They must be easy to open.
* They must be easy to close.
* Applied filters should be visible.
* Reset should be available.
* Filtering must remain usable on touch screens.

Do not expose a desktop filter sidebar unchanged on mobile.

---

# 48. Mobile Search

If search exists:

```text
Search button
   ↓
Search interface
   ↓
Results
```

Search must remain accessible without overwhelming the primary navigation.

---

# 49. Page Template Selection

The project manager/designer should determine which templates a client actually needs.

Example:

### Manufacturing

```text
Home
About
Services
Products
Product Detail
Projects
Blog
RFQ
Contact
```

### Hotel

```text
Home
About
Accommodation
Facilities
Gallery
Offers/News
Testimonials
Contact
```

### Consulting

```text
Home
About
Services
Service Detail
Case Studies
Team
Insights
Contact
```

The template system should support all three without rebuilding the architecture.

---

# 50. Navigation Configuration Example

Conceptually:

```js
const navigation = [
  {
    label: "Products",
    path: "/products",
    enabled: true
  },
  {
    label: "Services",
    path: "/services",
    enabled: true
  },
  {
    label: "Projects",
    path: "/projects",
    enabled: true
  },
  {
    label: "Insights",
    path: "/blog",
    enabled: true
  }
];
```

The actual architecture may use a different data structure.

The key principle is centralized configuration.

---

# 51. Page Configuration

The selected page/template set should be configurable.

Conceptually:

```js
const siteModules = {
  products: true,
  productDetails: true,
  services: true,
  serviceDetails: true,
  projects: true,
  projectDetails: true,
  blog: true,
  testimonials: true,
  team: false,
  locations: false,
  rfq: true
};
```

Only enabled functionality should appear in navigation and page flows.

---

# 52. Navigation and Disabled Modules

Disabled modules must not leave:

* Broken links
* Empty pages
* Placeholder menus
* Dead CTA buttons
* Empty footer columns

Disabling a module should remove or appropriately replace its navigation references.

---

# 53. Sitemap Architecture

The sitemap should reflect enabled public content.

If products are enabled:

```text
/products
/products/product-a
/products/product-b
```

If blog is disabled:

```text
/blog
```

must not appear in the sitemap.

---

# 54. Internal Link Architecture

Internal links should reflect actual enabled modules.

Example:

If projects are disabled:

```text
Services
   ↓
Projects
```

must not exist.

This helps prevent broken or irrelevant navigation.

---

# 55. SEO Architecture

The information architecture should support:

* Search-friendly URLs
* Canonical URLs
* Structured internal linking
* Detail pages
* Breadcrumbs
* Category hierarchy
* Structured data

Detailed SEO requirements belong in:

`07-seo-and-analytics.md`

---

# 56. Analytics Architecture

Important user actions should map to the information architecture.

Possible events:

```text
product_view
service_view
project_view
article_view
rfq_start
rfq_submit
contact_submit
phone_click
email_click
whatsapp_click
cta_click
```

The final event system is defined in the analytics specification.

---

# 57. UI Source-of-Truth Rule

Each Business Growth client project must contain approved UI references.

Recommended structure:

```text
project/
├── design/
│   ├── desktop/
│   ├── tablet/
│   ├── mobile/
│   ├── components/
│   └── notes/
│
├── docs/
└── src/
```

The exact folder naming may vary.

The approved UI reference must be accessible to the developer and AI coding agent.

---

# 58. AI Design Implementation Rule

Before implementing any page or component, the AI must:

1. Read the relevant project requirements.
2. Read this information architecture.
3. Read the Business Growth Design System.
4. Inspect the approved UI reference.
5. Identify the appropriate page template.
6. Identify reusable components.
7. Implement the approved design.

The AI must not independently invent the visual design.

---

# 59. AI Must Not Invent Page Structure

The AI must not decide:

> "A product page would look better with a pricing table, so I'll add one."

unless:

* The client requires it.
* The approved UI contains it.
* It is explicitly approved as a feature.

The AI should implement requirements, not expand them.

---

# 60. AI Must Not Add Generic SaaS Patterns

Business Growth is for established business websites.

The AI must not automatically introduce:

* SaaS pricing tables
* Dashboard sidebars
* App-style navigation
* User account menus
* Notification systems
* Subscription interfaces
* Product checkout flows

unless explicitly required.

---

# 61. Visual Fidelity

The objective is:

> **Implement the approved client UI accurately.**

Not:

> "Create a website inspired by the approved design."

Differences may be introduced only when required by:

* Responsiveness
* Accessibility
* Technical limitations
* Content constraints

Major visual differences require approval.

---

# 62. Ambiguous Routing

If the approved design does not clearly define a route:

1. Check project requirements.
2. Check the selected page templates.
3. Check existing route patterns.
4. Reuse an existing pattern.
5. Use the simplest sensible route.

Do not invent complex routing systems without justification.

---

# 63. Route Change Protocol

If routing needs to change:

```text
Existing Architecture
       ↓
Requested Change
       ↓
Impact Assessment
       ↓
Documentation Update
       ↓
Implementation
       ↓
Redirect/SEO Review
       ↓
QA
```

Content URL changes should receive special attention because they can affect SEO.

---

# 64. Primary Business Growth User Journeys

## Product Lead Journey

```text
Homepage
    ↓
Products
    ↓
Category
    ↓
Product Detail
    ↓
Specifications
    ↓
Request Quote
    ↓
RFQ
```

## Service Lead Journey

```text
Homepage
    ↓
Services
    ↓
Service Detail
    ↓
Projects / Proof
    ↓
Contact
```

## Project Trust Journey

```text
Homepage
    ↓
Projects
    ↓
Project Detail
    ↓
Related Services
    ↓
Testimonial
    ↓
Contact / RFQ
```

## Marketing Journey

```text
Search Engine
    ↓
Article
    ↓
Related Service/Product
    ↓
Trust Content
    ↓
Lead CTA
```

---

# 65. Information Architecture Acceptance Criteria

The information architecture is acceptable when:

```text
[ ] Enabled modules are clearly defined
[ ] Required templates are identified
[ ] Routes are documented
[ ] Navigation reflects enabled modules
[ ] Content hierarchy is logical
[ ] Detail pages have stable URLs
[ ] Lead flows are defined
[ ] Internal links are meaningful
[ ] Mobile hierarchy is defined
[ ] Disabled modules do not create broken links
[ ] Sitemap can be generated from public routes
[ ] UI references are available
[ ] AI implementation rules are documented
```

---

# 66. Final Source-of-Truth Hierarchy

When implementation decisions conflict, use:

1. Client-approved requirements
2. Approved client/project UI
3. Business Growth package definition
4. Business Growth Design System
5. Information Architecture
6. Page Template Specification
7. Component System
8. Specialized technical standards
9. Developer/AI preference

AI preference is the lowest priority.

---

# 67. Final Principle

Business Growth should have a richer information architecture than Starter Presence without becoming a complex application.

The target structure is:

```text
Discovery
    ↓
Category
    ↓
Detail
    ↓
Proof
    ↓
Related Content
    ↓
Lead Action
```

The architecture must allow the same agency template to support:

```text
Manufacturing
Construction
Automotive
Hotels
Healthcare
Education
Travel
Real Estate
Consulting
Engineering
```

without rebuilding the entire website architecture for every client.

The final principle is:

> **Build the architecture once, configure the modules per client, implement the client's approved UI, and keep the system simple enough to maintain.**

```
```
