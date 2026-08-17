# `02-design-system.md`

````md
# Business Growth
# Design System Specification

**Document:** 02-design-system.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines the design-system requirements for the Business Growth package.

Business Growth is a richer and more content-driven package than Starter Presence.

The design system must therefore support:

- Larger information architecture
- Product and service catalogs
- Detail pages
- Project portfolios
- Blog/news
- Lead-generation workflows
- RFQ forms
- Downloadable resources
- Testimonials
- Certifications
- Multiple locations
- Rich media
- Stronger conversion paths

However:

> **Business Growth remains a professional business website, not a SaaS application, e-commerce platform, dashboard, or enterprise web application.**

---

# 2. Design Source-of-Truth Rule

The Business Growth design system defines the reusable visual foundation.

The **approved client/project UI reference** defines the actual appearance of that client's website.

Therefore:

```text
Business Growth Design System
          ↓
Client Branding
          ↓
Approved Client UI/UX
          ↓
Implementation
````

The AI coding agent must implement the approved UI.

It must not independently redesign the project.

---

# 3. AI Visual Authority

Before creating or modifying visual components, the AI coding agent must:

1. Read this design system.
2. Read the project requirements.
3. Read the information architecture.
4. Inspect the approved UI references.
5. Identify existing reusable components.
6. Implement the approved visual design.

The AI must not:

* Invent a different design direction.
* Replace the approved typography.
* Change the approved colors.
* Change the approved layout.
* Add generic sections.
* Add decorative effects without approval.
* Introduce SaaS-style UI.
* Introduce e-commerce-style UI.
* Introduce dashboard-style UI.
* Merge sections that are intentionally separate.

---

# 4. Design Philosophy

Business Growth should communicate:

> **Capability + Credibility + Depth + Growth + Action**

The visual experience should feel:

* Professional
* Established
* Structured
* Content-rich
* Confident
* Clear
* Trustworthy
* Modern
* Conversion-oriented

It should not feel:

* Like a SaaS product
* Like an admin dashboard
* Like an online marketplace
* Like a shopping website
* Like a generic startup landing page
* Like an overly experimental design system

---

# 5. Difference From Starter Presence

Starter Presence primarily communicates:

> **"We are a credible business."**

Business Growth communicates:

> **"We are a credible business, here is what we offer, here is proof of our work, here is more information, and here is how you can take the next step."**

Therefore Business Growth requires stronger support for:

* Content discovery
* Comparison
* Detail
* Navigation
* Lead generation
* Trust
* Marketing content

The visual system should reflect this additional depth.

---

# 6. Visual Hierarchy

The Business Growth hierarchy is:

```text
Primary Message
      ↓
Business Offering
      ↓
Supporting Information
      ↓
Proof / Trust
      ↓
Related Content
      ↓
Lead Action
```

Every major page should have a clear visual path through these layers where relevant.

---

# 7. Layout Philosophy

The layout system must support both:

### Marketing composition

Strong:

* Hero sections
* Editorial layouts
* Large photography
* CTA sections
* Trust sections

### Content composition

Structured:

* Product grids
* Service grids
* Project grids
* Tables
* Specifications
* Categories
* Filters
* Articles
* Downloads

The system must transition between these modes without feeling like two unrelated websites.

---

# 8. Grid System

The default desktop layout uses a structured grid.

Recommended base:

```text
12-column grid
```

The exact gutter and container values come from the approved project design system.

The grid must support:

```text
2-column
3-column
4-column
5/7
6/6
7/5
8/4
```

layouts where appropriate.

Do not force every section into the same column structure.

---

# 9. Content Container

The website should use a consistent maximum content width.

Recommended range:

```text
1200px–1400px
```

The exact value is determined by the approved client UI.

Wide screens should receive increasing outer whitespace rather than indefinitely expanding content.

---

# 10. Section Spacing

Business Growth contains more content than Starter Presence.

Spacing should therefore create clear grouping.

Recommended desktop range:

```text
96px–144px
```

between major sections.

Recommended mobile range:

```text
64px–96px
```

The actual values must follow the approved client UI.

---

# 11. Dense vs Spacious Content

Not every section should have the same density.

### Marketing sections

Use:

* Large whitespace
* Strong typography
* Large imagery

### Content sections

Use:

* More compact spacing
* Clear grouping
* Structured cards
* Scannable metadata

This allows content-heavy pages to remain usable without feeling overcrowded.

---

# 12. Color System

Business Growth inherits the general agency principle of using a restrained professional palette.

Each client project may define its own actual colors.

The design system should establish:

```text
Primary
Secondary
Accent
Surface
Background
Text
Muted Text
Border
Success
Warning
Error
Information
```

The exact color values belong to the project-specific design system.

---

# 13. Color Usage

Color should communicate hierarchy.

Recommended relationship:

```text
Primary color
    ↓
Brand identity

Accent
    ↓
Attention / conversion

Neutral colors
    ↓
Content structure

Semantic colors
    ↓
System feedback
```

Avoid using many bright colors simply because the package contains more components.

---

# 14. Accent Color

The accent color should primarily support:

* Primary CTAs
* Important links
* Active navigation
* Key metrics
* Selected filters
* Highlights

Accent colors should not dominate the entire interface.

---

# 15. Typography

Typography must support both marketing content and information-heavy content.

Recommended type hierarchy:

```text
Display
H1
H2
H3
H4
Lead / Intro
Body
Small
Metadata
Technical
```

The actual font families are determined by the approved project UI.

Do not automatically use Inter or another generic default.

---

# 16. Typography for Detail Pages

Detail pages require stronger differentiation between:

```text
Title
Metadata
Description
Subheading
Specifications
Supporting information
CTA
```

Example:

```text
PRODUCT NAME

Category / Reference

Short introduction.

FEATURES
...

SPECIFICATIONS
...

REQUEST A QUOTE
```

Do not present every text block at the same visual weight.

---

# 17. Technical / Metadata Typography

Use a secondary visual treatment for:

* Product codes
* Project numbers
* Dates
* Categories
* Locations
* Technical specifications
* Metadata

The exact treatment should follow the approved client UI.

A mono or technical typeface may be used when appropriate.

---

# 18. Button System

Business Growth requires a broader CTA hierarchy than Starter Presence.

Possible levels:

### Primary CTA

Used for the most important conversion.

Examples:

* Request Quote
* Contact Sales
* Request Consultation

### Secondary CTA

Used for supporting actions.

Examples:

* Learn More
* View Projects
* Explore Services

### Tertiary/Text CTA

Used for lightweight navigation.

Examples:

* View Details →
* Read More →
* Download PDF →

The exact appearance must follow the approved UI.

---

# 19. CTA Hierarchy Rule

A page should normally have:

```text
1 Primary Action
+
Supporting Secondary Actions
+
Tertiary Navigation
```

Avoid presenting every button as equally important.

---

# 20. Product Card

The product card may contain:

```text
Image
Category
Product Name
Short Description
Key Metadata
CTA
```

Example conceptual structure:

```text
[ IMAGE ]

INDUSTRIAL EQUIPMENT

Hydraulic Press

High-capacity hydraulic pressing
solution for industrial applications.

[ VIEW PRODUCT → ]
```

The actual visual treatment is defined by the approved UI.

---

# 21. Service Card

The Service Card may contain:

```text
Icon / Image
Category
Service Name
Description
CTA
```

Use a consistent visual hierarchy across all services.

---

# 22. Project Card

The Project Card may contain:

```text
Image
Project Category
Project Name
Location / Year
Short Description
CTA
```

Project imagery should remain the visual priority.

---

# 23. Article Card

Blog/news cards may contain:

```text
Featured Image
Category
Date
Title
Excerpt
Read More
```

The card should allow quick content scanning.

---

# 24. Testimonial Card

Possible structure:

```text
Quote
Customer Name
Role
Company
Optional Image
```

Do not overload testimonial cards with unnecessary metadata.

---

# 25. Trust / Certification Card

Possible structure:

```text
Certification Logo
Certification Name
Issuing Organization
Optional Verification
```

Only verified information may be displayed.

---

# 26. Download Card

Downloadable resources may use:

```text
Document Type
Document Title
Description
File Size
Format
Download CTA
```

Example:

```text
PDF
Product Catalog 2026
Complete industrial equipment catalog

[ DOWNLOAD PDF ]
```

---

# 27. Specification Table

Product and technical pages may require structured specifications.

The table should prioritize readability.

Example:

| Specification | Value          |
| ------------- | -------------- |
| Capacity      | 500 tons       |
| Dimensions    | 2000 × 1200 mm |
| Material      | Steel          |
| Model         | HP-500         |

The table must remain usable on mobile.

---

# 28. Mobile Specification Tables

If a table is too wide for mobile:

Use an approved responsive pattern such as:

* Horizontal scroll container
* Stacked key/value rows
* Condensed specification cards

Do not simply shrink the table until the content becomes unreadable.

---

# 29. Category Navigation

Category navigation should help users quickly understand available content.

Possible patterns:

```text
All
Category A
Category B
Category C
```

or:

```text
Sidebar
Category list
```

or:

```text
Dropdown / sheet
```

The exact pattern must follow the approved UI.

---

# 30. Filters

Filters are useful for larger content collections.

Possible filtering attributes:

* Category
* Industry
* Location
* Product type
* Service type
* Project type
* Date

Only implement filters that correspond to real data.

---

# 31. Filter Interaction

A filter must clearly show:

```text
Available filters
Active filter
Result count where useful
Reset option
```

On mobile, filters should use an appropriate interaction pattern such as a sheet or full-screen panel if specified by the approved UI.

---

# 32. Search Interface

If search is included, it should support:

```text
Search input
Submit action
Results
No-results state
Clear/reset
```

Search should not introduce unnecessary complexity.

---

# 33. Breadcrumbs

Breadcrumbs should visually communicate hierarchy.

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

Breadcrumb styling must remain subtle.

They should support navigation rather than compete with the primary page heading.

---

# 34. Related Content

Related content sections should visually appear subordinate to the main content.

Examples:

```text
Related Products
Related Services
Related Projects
Related Articles
```

They should not be confused with the primary content.

---

# 35. Lead Generation Components

Business Growth requires stronger lead-oriented components.

Possible components:

* Lead CTA banner
* Sticky inquiry CTA
* RFQ panel
* Product inquiry CTA
* Service inquiry CTA
* Contact card
* WhatsApp CTA
* Phone CTA

The visual system must make the action obvious without becoming aggressive.

---

# 36. RFQ Form Design

RFQ forms should feel more substantial than a basic contact form.

Possible groups:

```text
Contact Information
    ↓
Request Details
    ↓
Product / Service
    ↓
Additional Information
    ↓
Submit
```

Use grouping to reduce perceived complexity.

---

# 37. RFQ Form Field Density

Do not display a large wall of inputs.

Use progressive organization.

Example:

```text
CONTACT
Name
Company
Email
Phone

REQUEST
Product / Service
Quantity
Location
Timeline

DETAILS
Message
Attachments where approved
```

Only fields required for the client's sales process should exist.

---

# 38. Form States

All forms should support:

```text
Default
Focused
Invalid
Submitting
Success
Error
```

The design for these states must be defined in the approved UI where possible.

---

# 39. Sticky Navigation

Business Growth may use sticky navigation because content depth is greater.

Possible behavior:

```text
Page Load
    ↓
Normal Header
    ↓
Scroll
    ↓
Compact / Sticky Header
```

Only implement this if it exists in the approved UI or is explicitly approved.

---

# 40. Sticky CTA

Some detail pages may use a persistent CTA.

Examples:

```text
Request Quote
Contact Sales
Enquire Now
```

A sticky CTA must not cover important content or interfere with mobile navigation.

---

# 41. Modal / Sheet / Lightbox

Business Growth may use:

* Modal
* Sheet
* Lightbox
* Gallery viewer

These components must have:

* Focus management
* Keyboard support
* Clear close control
* Accessible labels
* Correct scrolling behavior

The actual visual treatment follows the approved UI.

---

# 42. Image Lightbox

For galleries:

```text
Thumbnail
   ↓
Lightbox
   ↓
Large Image
   ↓
Previous / Next
   ↓
Close
```

The lightbox should preserve:

* Image quality
* Caption where appropriate
* Keyboard controls
* Mobile usability

---

# 43. Video Component

Promotional video components may contain:

```text
Poster Image
Play Button
Duration where useful
Video
Caption
```

Videos should not autoplay with sound.

Autoplay behavior must follow the approved UI and accessibility requirements.

---

# 44. Multi-Location Component

For businesses with multiple locations:

```text
Location Selector
     ↓
Location Information
     ↓
Map
     ↓
Contact
```

The component may include:

* Location name
* Address
* Phone
* Hours
* Map
* Directions

The exact design should match the approved UI.

---

# 45. Blog / News Components

The system should support:

```text
Featured Article
Article Card
Article Grid
Category Navigation
Article Header
Article Body
Related Articles
```

The visual language must remain consistent across marketing and informational content.

---

# 46. Article Body

Article content should support:

* Headings
* Paragraphs
* Lists
* Images
* Quotes
* Links
* Tables where required
* Downloadable resources
* Embedded media where approved

The article body should have a readable maximum width.

---

# 47. Content Width

Long-form content should generally be narrower than full-width marketing sections.

Recommended reading width:

```text
600–760px
```

depending on typography and approved design.

Avoid extremely wide paragraphs.

---

# 48. Hero Variants

Business Growth may support several approved hero patterns.

Examples:

```text
Split hero
Image hero
Editorial hero
Product hero
Service hero
Project hero
Article hero
```

These are templates, not permission for the AI to choose whichever it prefers.

The specific client UI determines the actual variant.

---

# 49. Detail Page Hero

Detail-page heroes should clearly establish:

```text
Category
Title
Supporting information
Primary CTA
Image
```

Possible metadata:

```text
Location
Year
Product code
Service category
Project type
```

Only use fields relevant to the content type.

---

# 50. Section Labels

Small section labels may use:

* Uppercase typography
* Technical metadata
* Accent color
* Small type

Example:

```text
OUR SERVICES
```

They should support hierarchy rather than become decorative noise.

---

# 51. Cards Are Not the Entire Design

Business Growth is not a card-based dashboard.

Cards should be used where content needs separation.

Important content may instead use:

* Editorial layouts
* Full-width sections
* Image/text compositions
* Lists
* Tables
* Timelines
* Structured metadata

Do not put every piece of information inside a card.

---

# 52. Shadows

Use shadows sparingly.

The system should generally favor:

* Borders
* Contrast
* Spacing
* Background changes

over large shadows.

Elevated components may use subtle shadows where appropriate.

---

# 53. Border Radius

The radius system should remain consistent.

Recommended:

```text
Small: 4px
Medium: 6–8px
Large: 10–12px
```

The actual values are defined by the approved project UI.

Avoid excessive pill-shaped UI unless explicitly designed.

---

# 54. Borders

Borders should help define structure.

Use for:

* Cards
* Tables
* Inputs
* Dividers
* Filters
* Download resources

Do not add borders to every element.

---

# 55. Iconography

Icons should come from a consistent family.

Possible use:

* Service categories
* Product categories
* Features
* Contact information
* Trust indicators
* Downloads
* Navigation
* Filters

Do not mix unrelated illustration styles.

---

# 56. Icon Size Hierarchy

Typical:

```text
Small utility icon
16px

Navigation icon
18–20px

Feature icon
24–32px

Section icon
32–48px

Large decorative icon
Only where approved
```

Exact sizes depend on the approved UI.

---

# 57. Animation Philosophy

Animation should improve:

* Orientation
* Feedback
* Hierarchy
* Discovery

It should not exist simply because animation looks impressive.

Preferred properties:

```text
opacity
transform
```

Avoid excessive animation of layout properties.

---

# 58. Content-Heavy Page Animation

Do not animate every card individually.

Large content pages should feel stable and easy to scan.

Animation should support:

```text
Navigation
Hero
CTA
Image interactions
Important state changes
```

not distract from content.

---

# 59. Reduced Motion

Support:

```css
@media (prefers-reduced-motion: reduce)
```

where appropriate.

Non-essential animation should be reduced or removed.

---

# 60. Responsive Strategy

Business Growth uses:

```text
Mobile
    ↓
Tablet
    ↓
Desktop
    ↓
Large Desktop
```

The mobile experience must be deliberately designed.

It should not simply be a scaled-down desktop layout.

---

# 61. Mobile Content Hierarchy

On mobile, prioritize:

```text
Primary message
    ↓
Primary action
    ↓
Important content
    ↓
Supporting content
    ↓
Secondary actions
```

Long secondary content should not obscure the primary action.

---

# 62. Mobile Product Cards

Product cards should remain scannable.

Avoid:

* Tiny text
* Excessive metadata
* Very tall cards
* Too many buttons

Use:

```text
Image
Name
Short descriptor
Primary action
```

where possible.

---

# 63. Mobile Service Detail

Service detail pages should maintain:

```text
Title
Introduction
Primary CTA
Important information
Related content
```

Do not force desktop two-column layouts into tiny screens.

---

# 64. Mobile Project Detail

Project pages may stack:

```text
Hero image
Project metadata
Description
Gallery
Results
CTA
```

The approved mobile UI determines the exact order.

---

# 65. Mobile Tables

Tables must remain usable.

Possible approaches:

* Horizontal scrolling
* Key/value cards
* Collapsible specification sections

The choice must follow the approved UI.

---

# 66. Mobile Filters

Use mobile-friendly patterns:

* Sheet
* Drawer
* Modal
* Dropdown

The exact pattern is defined by the approved UI.

Avoid leaving a desktop sidebar visible beside content on a narrow viewport.

---

# 67. Mobile RFQ

RFQ forms should:

* Use clear grouping
* Avoid unnecessary fields
* Keep labels visible
* Provide obvious submit action
* Show validation clearly
* Avoid tiny controls

The submit button should remain easy to reach.

---

# 68. Accessibility

Business Growth components must remain accessible.

Required considerations:

```text
Semantic HTML
Keyboard navigation
Focus management
Visible focus
Accessible labels
Meaningful headings
Alt text
Color contrast
Screen-reader compatibility
Touch targets
```

---

# 69. Component States

Reusable components should define states where applicable.

Examples:

### Button

```text
Default
Hover
Focus
Active
Disabled
Loading
```

### Input

```text
Default
Focus
Filled
Error
Success
Disabled
```

### Filter

```text
Default
Active
Expanded
Applied
Disabled
```

### Card

```text
Default
Hover
Focus
```

---

# 70. Empty States

Dynamic content modules must define meaningful empty states.

Examples:

```text
No products available.
No projects available.
No articles available.
No results found.
```

The UI must not simply show a blank container.

---

# 71. Error States

Content or API failures should have clear states.

Example:

```text
We couldn't load this content.
Please try again later.
```

Do not expose technical errors to users.

---

# 72. Loading States

If content loads asynchronously, use an approved loading state.

Possible patterns:

* Skeleton
* Spinner
* Progressive content
* Reserved layout

Do not introduce a generic loading screen if the approved UI specifies another pattern.

---

# 73. No-Content Principle

The template must not force meaningless components into a client's website.

For example:

If the client has no testimonials:

```text
Do not display:
"Testimonials coming soon."
```

unless approved.

Instead:

```text
Disable testimonial module.
```

---

# 74. Component Reuse

The design system should encourage reuse.

Example:

```text
ProductCard
    ↓
ProductGrid
    ↓
ProductListing

ProductDetail
    ↓
RelatedProducts
    ↓
ProductCard
```

Avoid creating:

```text
ProductCard1
ProductCard2
ProductCardNew
ProductCardFinal
```

---

# 75. Component Variants

Use variants when multiple approved forms share the same underlying component.

Example:

```text
Card
├── Product
├── Service
├── Project
└── Article
```

Only create separate components when their behavior or structure is meaningfully different.

---

# 76. Design Tokens

The Business Growth system should centralize:

```text
Colors
Typography
Spacing
Radius
Borders
Shadows
Breakpoints
Transitions
Container widths
```

The actual values belong to the approved project design.

---

# 77. No Arbitrary Styling

The AI must not randomly introduce:

```text
New colors
New font families
New radius values
New shadows
New spacing scales
```

when an approved design token already exists.

Use the established system.

---

# 78. Branding

Each client project should support:

```text
Logo
Primary brand color
Secondary brand color
Accent
Typography
Imagery style
Iconography
```

Brand customization must not break the underlying Business Growth design logic.

---

# 79. Industry Adaptability

The design system must adapt to different industries.

### Manufacturing

More technical.

### Hotel

More visual.

### Healthcare

More reassuring and information-focused.

### Consulting

More editorial and credibility-focused.

### Construction

More project and capability focused.

### Automotive

More product and inventory-discovery focused.

The underlying design system remains consistent while visual emphasis can change.

---

# 80. Industry-Specific UI

Industry adaptation may affect:

* Imagery
* Content density
* Component selection
* CTA terminology
* Metadata
* Product/service hierarchy

It must not create an entirely new design system without approval.

---

# 81. E-Commerce Boundary

Product presentation must remain informational unless e-commerce is explicitly added.

The default Product UI must not include:

* Cart
* Checkout
* Payment
* Quantity purchasing
* Customer accounts
* Order status

A "Request Quote" or "Inquire" action is appropriate.

---

# 82. Dashboard Boundary

The Business Growth interface must not resemble an internal business dashboard.

Avoid:

* Sidebar application navigation
* Data tables as the primary page structure
* Dashboard widgets
* Admin panels
* User account menus

unless separately required.

---

# 83. SaaS Boundary

Avoid unnecessary SaaS patterns such as:

* Pricing comparison tables
* Free trial CTAs
* Login/register buttons
* Product onboarding
* App dashboards
* Subscription controls

unless the client's actual business requires them.

---

# 84. AI Design Protection

The AI coding agent must never say:

> "I improved the design by..."

and then replace an approved design.

It should instead:

> **Implement the approved design using reusable and maintainable code.**

---

# 85. UI Reference Structure

Each client project should contain approved UI references.

Recommended:

```text
design/
├── desktop/
├── tablet/
├── mobile/
├── components/
├── pages/
└── notes/
```

For example:

```text
design/pages/
├── home.png
├── about.png
├── services.png
├── service-detail.png
├── products.png
├── product-detail.png
├── projects.png
├── project-detail.png
├── blog.png
├── article.png
├── rfq.png
└── contact.png
```

Only files relevant to the project need to exist.

---

# 86. Design Comparison

During implementation:

```text
Approved UI Reference
        ↕
Actual Implementation
```

Review:

* Layout
* Typography
* Colors
* Spacing
* Image proportions
* Components
* Navigation
* Interactive states
* Responsive behavior

---

# 87. Design Change Protocol

If the client requests a visual change:

```text
Current Approved UI
       ↓
Requested Change
       ↓
Design Updated
       ↓
Documentation Updated if necessary
       ↓
Implementation Updated
       ↓
QA
```

Do not modify the code and leave the design reference outdated.

---

# 88. Design Fidelity Acceptance

A Business Growth project should not be approved visually until:

```text
[ ] Desktop matches approved design
[ ] Mobile matches approved design
[ ] Typography matches
[ ] Color system matches
[ ] Components match
[ ] Spacing matches
[ ] Navigation matches
[ ] CTAs match
[ ] Forms match
```

---

# 89. Design System Acceptance Criteria

The reusable Business Growth design system is considered valid when it supports:

```text
[ ] Marketing pages
[ ] Service listings
[ ] Service details
[ ] Product listings
[ ] Product categories
[ ] Product details
[ ] Project listings
[ ] Project details
[ ] Blog/news
[ ] Article pages
[ ] Testimonials
[ ] Certifications
[ ] Downloads
[ ] RFQ
[ ] Contact
[ ] Multiple locations
[ ] Responsive layouts
```

without requiring a completely different visual language for every module.

---

# 90. Final Design Principle

Business Growth should look like:

> **A professional business website that has grown into a useful marketing and lead-generation system.**

It should not look like:

> A dashboard.

It should not look like:

> An e-commerce platform.

It should not look like:

> A SaaS application.

It should not look like:

> A generic AI-generated corporate template.

The design hierarchy is:

```text
Brand
   ↓
Content
   ↓
Proof
   ↓
Discovery
   ↓
Lead Generation
```

The final visual system must remain:

**Professional. Structured. Content-rich. Trustworthy. Conversion-focused. Maintainable.**

And above all:

> **The approved client UI is the visual source of truth. The AI implements it; the AI does not redesign it.**

```
```
