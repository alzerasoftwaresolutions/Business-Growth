# `02-information-architecture-and-routing.md`

````md
# Stonebridge Construction
# Starter Presence — Information Architecture & Routing Specification

**Version:** 1.0  
**Status:** Approved for Development  
**Package:** Starter Presence

---

## 1. Purpose

This document defines the information architecture, page structure, navigation, routing, user flows, and UI-reference rules for Starter Presence websites.

The most important rule is:

> **The approved UI/UX design created for the specific client project is the visual source of truth.**

The AI coding agent must implement the approved design. It must not independently redesign the website, invent a different visual language, or replace the approved layout with a generic "modern" website.

---

# 2. Project Design Source of Truth

Every client project must contain its approved UI references inside the project.

Recommended structure:

```text
project-root/
├── docs/
│   ├── 01-project-requirements.md
│   ├── 02-information-architecture-and-routing.md
│   ├── complete-stonebridge-design-system.md
│   └── ...
│
├── design/
│   ├── README.md
│   ├── desktop/
│   ├── tablet/
│   ├── mobile/
│   ├── components/
│   └── assets/
│
└── src/
````

The exact folder structure may vary, but the approved visual references must be available to the coding agent.

---

# 3. UI Reference Requirements

Before implementing a page, the coding agent must:

1. Locate the `design/` directory.
2. Read `design/README.md` if present.
3. Inspect the approved UI reference for that page.
4. Inspect the corresponding mobile/tablet reference where available.
5. Read `complete-stonebridge-design-system.md`.
6. Read the project requirements.
7. Identify the page sections and their order.
8. Implement the approved design using reusable production components.

The agent must not begin implementation by inventing a new layout.

---

# 4. What the AI Must NOT Change

Unless explicitly instructed by the project owner, the AI must not:

* Redesign the page.
* Change the approved section order.
* Invent new sections.
* Remove approved sections.
* Merge separate approved sections.
* Replace the approved navigation.
* Replace typography.
* Replace colors.
* Replace button styles.
* Replace card styles.
* Add generic gradients.
* Add glassmorphism, neumorphism, brutalism, or other styles not present in the approved design.
* Add unnecessary animations.
* Add generic dashboard patterns.
* Add generic SaaS/startup sections.
* Replace the approved footer.
* Substitute its own aesthetic preferences.

If the design looks unusual, assume it is intentional unless the project owner requests a change.

---

# 5. Responsibility Separation

## Design Determines

* Visual layout
* Section order
* Typography
* Colors
* Spacing
* Grid
* Components
* Buttons
* Cards
* Navigation appearance
* Image placement
* Responsive visual behavior where specified
* Animation style

## Engineering Determines

* React component architecture
* Routing implementation
* State management where necessary
* Data handling
* API integration
* Performance implementation
* Accessibility implementation
* Security implementation
* Deployment implementation

Engineering decisions must preserve the approved visual intent.

---

# 6. Starter Presence Page Limit

The package includes up to **6 core pages**.

Standard structure:

1. Home
2. About
3. Services / Products
4. Gallery / Projects
5. Contact
6. One additional page

The sixth page may be:

* Partners
* Careers
* Certifications
* FAQ
* Industries
* Team
* Company Profile

Only approved pages should be implemented.

---

# 7. Standard Route Structure

For service-oriented businesses:

```text
/
 /about
 /services
 /projects
 /contact
 /[additional-page]
```

For product-oriented businesses:

```text
/
 /about
 /products
 /projects
 /contact
 /[additional-page]
```

Route names must reflect the client's actual terminology and approved design.

For example, if the approved design calls the page `Capabilities`, use:

```text
/capabilities
```

rather than automatically using:

```text
/services
```

---

# 8. URL Rules

URLs must be:

* Lowercase
* Human-readable
* Descriptive
* Stable
* Search-friendly
* Free of unnecessary parameters

Preferred:

```text
/about
/services
/projects
/contact
```

Avoid:

```text
/page1
/page?id=4
/servicesPage
/AboutUs
```

---

# 9. Primary Navigation

The standard navigation may contain:

```text
Home
About
Services / Products
Projects / Gallery
Contact
Primary CTA
```

Exact labels must follow the approved UI and client's terminology.

For example:

`Services`

may become:

`Capabilities`

if that is what the approved design specifies.

---

# 10. Primary CTA

The header may contain one primary CTA.

Possible labels include:

* Contact Us
* Request Consultation
* Request a Quote
* Get Started
* Book a Consultation

The destination must be explicit.

For a standard company profile:

```text
Primary CTA → /contact
```

If the approved UI specifies another destination, follow the approved UI.

Do not create a CTA merely because it is common on corporate websites.

---

# 11. Desktop Navigation

Desktop navigation must follow the approved design reference.

Typical structure:

```text
Logo → Homepage
Primary Navigation → Core Pages
CTA → Contact / Inquiry
```

Do not replace an approved navigation style with a generic navigation pattern.

---

# 12. Mobile Navigation

Mobile navigation must follow the approved mobile design.

It must provide access to the appropriate primary pages:

* Home
* About
* Services / Products
* Projects / Gallery
* Contact
* Primary CTA where applicable

If the approved design uses a hamburger menu, implement it.

If it uses a different pattern, implement that pattern instead.

Do not automatically choose a hamburger menu merely because it is common.

---

# 13. Navigation State

The current page should be visually identifiable using the approved design.

Possible patterns include:

* Accent color
* Underline
* Highlight
* Active indicator
* Typography change

Do not invent a new active-state style.

Use the active-state behavior defined in the Design System or approved UI.

---

# 14. Home Page Architecture

The homepage is the primary entry point and conversion page.

A possible architecture is:

```text
Header
    ↓
Hero
    ↓
Trust / Credibility
    ↓
Company Introduction
    ↓
Why Choose Us
    ↓
Services / Products
    ↓
Process
    ↓
Industries
    ↓
Featured Work
    ↓
Project / Product Gallery
    ↓
Testimonials
    ↓
Trusted By
    ↓
Certifications
    ↓
Final CTA
    ↓
Footer
```

This is an architectural example only.

**Do not automatically implement every section above.**

The actual page must follow the approved client UI reference.

If the approved design has:

```text
Trusted By
```

and:

```text
Certifications
```

as separate sections, they must remain separate.

If:

```text
Featured Project
```

and:

```text
Project Gallery
```

are separate, they must remain separate.

The AI must preserve the exact conceptual separation represented in the approved UI.

---

# 15. About Page Architecture

Possible structure:

```text
Page Hero
    ↓
Company Overview
    ↓
History / Story
    ↓
Mission & Vision
    ↓
Values
    ↓
Leadership / Team
    ↓
Experience / Milestones
    ↓
Trust / Certifications
    ↓
CTA
    ↓
Footer
```

Only approved sections should be implemented.

The AI must not add:

* Team sections
* Company milestones
* Certifications
* Statistics
* Testimonials

unless they are part of the approved design or requirements.

---

# 16. Services / Products Page

The structure depends on the business.

## Service Business

Possible structure:

```text
Page Hero
    ↓
Introduction
    ↓
Service Categories
    ↓
Service Details
    ↓
Approach / Process
    ↓
CTA
    ↓
Footer
```

## Product Business

Possible structure:

```text
Page Hero
    ↓
Introduction
    ↓
Product Categories
    ↓
Product Items
    ↓
Product Details
    ↓
Inquiry CTA
    ↓
Footer
```

The package does not automatically include e-commerce.

Product presentation does not mean:

* Shopping cart
* Checkout
* Online payments
* Customer accounts
* Order management

unless explicitly added as a separate feature.

---

# 17. Projects / Gallery Page

Possible structure:

```text
Page Hero
    ↓
Introduction
    ↓
Category / Filter (only if approved)
    ↓
Project / Gallery Grid
    ↓
Project Information
    ↓
CTA
    ↓
Footer
```

Advanced functionality is not automatically included.

Examples of features outside the basic package:

* Advanced filtering
* Search
* Project database
* Complex case-study system
* Customer project portal
* Interactive project maps

These require explicit approval.

---

# 18. Contact Page

Possible structure:

```text
Page Hero
    ↓
Contact Information
    ↓
Contact Form
    ↓
Map / Location
    ↓
Business Hours
    ↓
Social Links
    ↓
Footer
```

The actual arrangement must follow the approved UI.

The Starter Presence contact functionality may include:

* Contact form
* Phone link
* Email link
* WhatsApp
* Google Maps
* Social media links

Do not add advanced CRM functionality unless explicitly required.

---

# 19. Footer Architecture

The footer may contain:

* Company identity
* Important navigation
* Contact information
* Social links
* Legal information where applicable
* Copyright

Its layout must follow the approved UI and Design System.

Do not add newsletter functionality unless approved.

Do not automatically add:

* Large sitemap
* Newsletter
* Blog links
* Careers
* Multiple legal pages

unless the project actually requires them.

---

# 20. Primary User Flow

The main conversion flow is:

```text
Visitor
   ↓
Homepage
   ↓
Understand Business
   ↓
Evaluate Services / Products
   ↓
Build Trust
   ↓
View Projects / Evidence
   ↓
Contact
   ↓
Inquiry Submitted
```

Secondary flow:

```text
Search Engine
   ↓
Inner Page
   ↓
Company Information
   ↓
Services / Projects
   ↓
Contact
```

Important pages should provide a natural path toward contact.

---

# 21. CTA Mapping

Each CTA must have a clear purpose.

Example:

```text
View Projects
    → /projects

Explore Services
    → /services

Learn About Us
    → /about

Contact Us
    → /contact

Request Consultation
    → /contact
```

Do not create buttons that have no real destination or action.

Avoid fake interactions such as:

```text
Learn More
```

with no destination.

If a CTA is only decorative, it should not look like an interactive button.

---

# 22. Internal Linking

Recommended relationships:

```text
Home
 ├── About
 ├── Services
 ├── Projects
 └── Contact

About
 └── Contact

Services
 ├── Projects
 └── Contact

Projects
 └── Contact
```

Links should be useful and natural.

Do not duplicate entire sections simply to create internal links.

---

# 23. Page Metadata Mapping

Each public route should have its own metadata.

Example:

```text
/
    Company Name | Primary Value Proposition

/about
    About | Company Name

/services
    Services | Company Name

/projects
    Projects | Company Name

/contact
    Contact | Company Name
```

Actual titles and descriptions must use approved client content.

Do not generate exaggerated SEO titles such as:

```text
Best Construction Company in the World | #1 Construction Experts
```

unless supported by the client's actual marketing requirements.

---

# 24. Central Navigation Configuration

Where practical, navigation should be defined centrally.

Example:

```js
[
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" }
]
```

This reduces conflicting navigation definitions.

Do not hard-code the same navigation separately in every page.

---

# 25. Content-to-Route Mapping

Business information should have a clear home:

```text
Company Information
    → About

Services
    → Services

Products
    → Products

Completed Work
    → Projects

Contact Information
    → Contact
```

Do not unnecessarily duplicate full content across pages.

---

# 26. Deep Linking

Every public page must be directly accessible.

Examples:

```text
example.com/about
example.com/services
example.com/projects
example.com/contact
```

Refreshing an inner route must work correctly in production.

The deployment configuration must support client-side routing where required.

---

# 27. External Links

External destinations may include:

* WhatsApp
* Google Maps
* Email
* Phone
* Social media
* Approved partner websites

Only approved URLs may be used.

Do not fabricate external accounts or links.

External links must be validated before deployment.

---

# 28. 404 Page

A 404 page should exist.

It should:

* Explain that the page was not found.
* Provide a Home link.
* Provide a useful navigation path.
* Follow the approved Design System.

Do not create an unrelated visual style.

The 404 page should remain simple unless a specific custom design exists.

---

# 29. Responsive Information Architecture

Responsive implementation must preserve content hierarchy.

Desktop may use:

```text
Multi-column layout
```

Mobile may use:

```text
Single-column / stacked layout
```

Do not arbitrarily reorder content.

If the approved mobile UI intentionally changes order, follow it.

The mobile design is not a separate redesign. It is the approved responsive version of the same visual system.

---

# 30. Design Reference Checklist

Before implementing each page:

```text
[ ] Correct UI reference located
[ ] Desktop reference inspected
[ ] Mobile reference inspected
[ ] Tablet reference inspected where available
[ ] Design System read
[ ] Section order identified
[ ] Navigation identified
[ ] CTA destinations identified
[ ] Images identified
[ ] Typography identified
[ ] Components identified
[ ] Responsive behavior identified
```

---

# 31. AI Coding Checklist

Before writing code:

```text
[ ] Read 01-project-requirements.md
[ ] Read this document
[ ] Read complete-stonebridge-design-system.md
[ ] Inspect /design
[ ] Inspect the page-specific UI reference
[ ] Inspect existing source code
[ ] Identify reusable components
[ ] Identify required routes
[ ] Identify required assets
[ ] Identify content dependencies
```

After implementation:

```text
[ ] Compare implementation against UI reference
[ ] Verify section order
[ ] Verify spacing
[ ] Verify typography
[ ] Verify colors
[ ] Verify buttons
[ ] Verify cards
[ ] Verify navigation
[ ] Verify mobile layout
[ ] Verify CTA destinations
[ ] Verify all links
```

---

# 32. Visual Fidelity Requirement

The objective is not:

> "Build something similar."

The objective is:

> **"Implement the approved UI accurately using production-quality code."**

Small differences caused by:

* Responsive constraints
* Browser rendering
* Accessibility
* Content length
* Technical limitations

are acceptable.

Unrequested aesthetic changes are not.

---

# 33. Handling Ambiguous Design

If the UI reference does not clearly specify an element:

1. Check the Design System.
2. Check project requirements.
3. Check other approved pages for an existing pattern.
4. Reuse an existing component/pattern.
5. Make the smallest reasonable decision.

Do not invent an entirely new visual pattern.

If the ambiguity materially affects the design, ask the project owner.

---

# 34. Design Change Protocol

If the project owner requests a design change:

```text
Approved UI
    ↓
Requested Change
    ↓
Update Design Reference
    ↓
Update Documentation if Necessary
    ↓
Implement Change
    ↓
Verify Affected Pages
```

Do not permanently change the UI only in code while leaving the approved reference outdated.

The design reference must remain synchronized with the implementation target.

---

# 35. Architecture vs Design

Do not confuse these two responsibilities.

## Architecture

The developer/AI decides how to structure:

* Components
* Routes
* Data
* APIs
* State
* Files
* Services
* Utilities

## Design

The approved UI decides:

* What the page looks like
* Where sections appear
* How elements are arranged
* How the interface communicates visually
* What components look like
* What visual hierarchy is used

The AI may improve code architecture without changing the approved visual design.

---

# 36. No Generic AI Design Rule

## Incorrect

```text
AI sees company website
        ↓
AI generates generic corporate website
        ↓
AI chooses its favorite cards/buttons/hero
        ↓
AI ignores approved UI
```

## Correct

```text
Approved UI Reference
        ↓
Design System
        ↓
Requirements
        ↓
Information Architecture
        ↓
Component Architecture
        ↓
Implementation
        ↓
Visual Comparison
        ↓
QA
```

The AI is responsible for implementation quality, not for replacing the approved design.

---

# 37. Final Source-of-Truth Hierarchy

When instructions appear to conflict, use this order:

1. **Client-approved UI/UX design**
2. **Explicit client-approved requirement**
3. **Project Requirements**
4. **Design System**
5. **Information Architecture**
6. **Specialized technical specifications**
7. **Developer/AI preference**

Developer preference is the lowest authority.

If a generic AI convention conflicts with the approved UI, the approved UI wins.

---

# 38. Final Principle

The Starter Presence workflow separates:

```text
DESIGN
   ↓
APPROVED UI REFERENCE
   ↓
DESIGN SYSTEM
   ↓
INFORMATION ARCHITECTURE
   ↓
CODE IMPLEMENTATION
   ↓
TESTING
   ↓
DEPLOYMENT
```

The AI coding agent is an **implementation engineer**, not the designer for the project.

Therefore:

**No self-invented UI.**

**No generic redesign.**

**No unnecessary sections.**

**No arbitrary visual substitutions.**

**No merging separate approved sections.**

**No visual changes without approval.**

The approved UI references stored in the project and the Design System are the visual source of truth.

```
```
