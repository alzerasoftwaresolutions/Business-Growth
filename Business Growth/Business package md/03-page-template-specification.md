# `03-page-template-specification.md`

````md
# Business Growth
# Page Template Specification

**Document:** 03-page-template-specification.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines the reusable page templates that make up the Business Growth website system.

This is one of the most important documents in the package.

The purpose is to ensure that the agency does not design and code every client website from scratch.

Instead, Business Growth provides a collection of professionally designed page templates that can be configured and populated according to each client's business.

The architecture is:

```text
BUSINESS GROWTH TEMPLATE SYSTEM
            ↓
     Select Templates
            ↓
     Select Modules
            ↓
     Apply Client Branding
            ↓
     Apply Approved Client UI
            ↓
     Populate Client Content
            ↓
     Configure Lead Flows
            ↓
     Test
            ↓
     Deploy
````

The template system must support different industries without requiring a completely different application architecture.

---

# 2. Critical Design Rule

Page templates define the **structural and functional pattern**.

The approved client UI defines the **actual visual implementation**.

Therefore:

```text
Page Template
     +
Design System
     +
Approved Client UI
     =
Final Page
```

The AI coding agent must never interpret this document as permission to invent a visual design.

The AI must implement the approved design reference associated with the selected template.

---

# 3. Template Philosophy

A template is not a fixed page with fixed text.

A template is:

> **A reusable structural pattern that defines what information, functionality, and relationships a page type supports.**

For example:

```text
Product Detail Template
```

is not:

```text
One specific product page
```

It is:

```text
A reusable structure capable of presenting
many different products.
```

---

# 4. Template vs Content

This distinction is mandatory.

## Template

Defines:

* Structure
* Section order
* Component positions
* Supported fields
* Interaction patterns
* CTA locations
* Responsive behavior

## Content

Defines:

* Product name
* Product image
* Product description
* Specifications
* Project title
* Service information
* Article content

Example:

```text
PRODUCT DETAIL TEMPLATE
        ↓
Product A
        ↓
Product B
        ↓
Product C
```

All entries may use the same template while displaying different content.

---

# 5. Page Categories

Business Growth templates are divided into five groups.

## Group A — Core Pages

* Home
* About
* Contact

## Group B — Business Offering

* Services
* Service Detail
* Products
* Product Category
* Product Detail

## Group C — Proof & Experience

* Projects
* Project Detail
* Testimonials
* Certifications
* Team
* Locations

## Group D — Marketing Content

* Blog / News
* Article Detail
* Resources

## Group E — Lead Generation

* RFQ
* Contact Inquiry
* Service Inquiry
* Product Inquiry

Not every project requires every template.

---

# 6. Template Selection Rules

Before implementation, determine:

```text
Business Type
      ↓
Business Objectives
      ↓
Required Content
      ↓
Required Modules
      ↓
Required Templates
      ↓
Navigation
      ↓
UI References
```

Do not enable templates merely because they exist.

---

# 7. Template Inventory

The Business Growth system should support the following reusable templates:

```text
01. Home
02. About
03. Services Listing
04. Service Category
05. Service Detail
06. Products Listing
07. Product Category
08. Product Detail
09. Projects Listing
10. Project Detail
11. Testimonials
12. Certifications
13. Team Listing
14. Team Member Detail
15. Locations Listing
16. Location Detail
17. Blog / News Listing
18. Article Detail
19. Resources Listing
20. Resource Detail
21. RFQ
22. Contact
23. Search Results
24. 404
```

The actual project may use only a subset.

---

# 8. Home Template

## Purpose

The Home template is the primary entry point.

It should:

* Establish the company's value proposition.
* Introduce major offerings.
* Build trust.
* Provide proof.
* Direct visitors toward important content.
* Generate leads.

## Possible Structure

```text
Header
    ↓
Hero
    ↓
Trust / Credibility
    ↓
Company Introduction
    ↓
Featured Services / Products
    ↓
Why Choose Us
    ↓
Featured Projects
    ↓
Testimonials
    ↓
Certifications / Partners
    ↓
Featured Content / News
    ↓
Lead CTA
    ↓
Footer
```

This is a template capability, not a mandatory section list.

The actual client's approved UI determines which sections appear.

---

# 9. Home Template Configuration

Possible configurable modules:

```text
Hero
Trust Metrics
About Preview
Services Preview
Products Preview
Projects Preview
Testimonials
Clients
Partners
Certifications
Blog Preview
Featured Resource
Lead CTA
```

A project may enable or disable each module.

---

# 10. Home Hero

The Hero must clearly communicate:

```text
What the business does
Why it matters
Primary action
```

Possible content:

```text
Eyebrow
Headline
Supporting copy
Primary CTA
Secondary CTA
Image / Video
Trust indicator
```

The exact visual layout is defined by the approved UI.

---

# 11. Home Trust Section

Optional trust content may include:

* Years of experience
* Projects completed
* Clients served
* Locations
* Certifications
* Industry experience

All statistics must be client-approved.

Never generate statistics to make the template appear complete.

---

# 12. Home Offering Preview

The Home template may display:

```text
Featured Services
```

or:

```text
Featured Products
```

or both.

The section should link to the corresponding listing or detail pages.

---

# 13. Home Proof Section

Possible proof sources:

* Projects
* Case studies
* Testimonials
* Client logos
* Certifications
* Results

The selected proof must reflect the client's actual business.

---

# 14. Home Content Section

Where Blog/News is enabled:

```text
Featured Article
+
Latest Articles
```

may appear on the homepage.

Only show recent content when the client actually maintains a content library.

Do not create an empty "Latest News" section.

---

# 15. Home Lead CTA

The homepage should have a clear primary business action.

Examples:

```text
Request a Quote
Contact Sales
Request Consultation
Make an Inquiry
Talk to Our Team
```

The CTA should lead to the appropriate lead pathway.

---

# 16. About Template

## Purpose

The About template communicates:

* Company identity
* History
* Values
* Leadership
* Capabilities
* Credibility

## Possible Structure

```text
Page Hero
    ↓
Company Introduction
    ↓
History / Story
    ↓
Mission / Vision / Values
    ↓
Leadership Message
    ↓
Timeline
    ↓
Team Preview
    ↓
Certifications
    ↓
Partners / Clients
    ↓
CTA
    ↓
Footer
```

Only approved sections should be enabled.

---

# 17. Leadership Message

Optional section.

May contain:

```text
Portrait
Name
Position
Message
Signature
```

Do not fabricate leadership statements.

---

# 18. Company Timeline

Optional section.

Example:

```text
2005
Founded

2010
Expanded Operations

2015
Entered New Market

2020
Opened New Facility
```

Timeline data must be client-provided.

---

# 19. Team Listing Template

## Purpose

Display important team members.

Possible fields:

```text
Photo
Name
Position
Short Biography
Department
```

Optional CTA:

```text
View Profile
```

Individual detail pages should only be created when there is enough meaningful content.

---

# 20. Team Member Detail Template

Possible structure:

```text
Profile Header
    ↓
Biography
    ↓
Experience
    ↓
Responsibilities
    ↓
Credentials
    ↓
Related Content
    ↓
CTA
```

This template is optional.

Do not create individual pages simply because the client has several employees.

---

# 21. Services Listing Template

## Purpose

Display all major services in a structured way.

Possible structure:

```text
Page Hero
    ↓
Introduction
    ↓
Service Categories
    ↓
Service Grid
    ↓
Process / Approach
    ↓
Proof / Projects
    ↓
Lead CTA
    ↓
Footer
```

---

# 22. Service Category Template

Use when the business has a meaningful service hierarchy.

Example:

```text
Services
├── Construction
│   ├── Commercial
│   ├── Industrial
│   └── Civil
│
└── Consulting
    ├── Engineering
    └── Project Management
```

The category template may contain:

```text
Category Hero
Category Description
Service Listing
Related Projects
Related Articles
CTA
```

Do not create categories with only one item unless there is a clear organizational reason.

---

# 23. Service Detail Template

## Purpose

Provide enough information for a potential customer to understand and evaluate a service.

Possible structure:

```text
Service Hero
    ↓
Overview
    ↓
Capabilities
    ↓
Benefits
    ↓
Process
    ↓
Applications / Industries
    ↓
Supporting Images
    ↓
Related Projects
    ↓
Testimonials
    ↓
Related Services
    ↓
Lead CTA
    ↓
Footer
```

---

# 24. Service Detail Fields

Possible data:

```text
Title
Slug
Category
Short Description
Long Description
Hero Image
Gallery
Benefits
Capabilities
Process
Industries
Related Projects
Related Services
CTA
```

Only required fields should be populated.

---

# 25. Product Listing Template

## Purpose

Provide structured product discovery.

Possible structure:

```text
Page Hero
    ↓
Introduction
    ↓
Category Navigation
    ↓
Filters where required
    ↓
Product Grid
    ↓
Featured Product / CTA
```

---

# 26. Product Category Template

Possible structure:

```text
Category Hero
    ↓
Category Introduction
    ↓
Products
    ↓
Supporting Information
    ↓
Related Products
    ↓
Inquiry CTA
```

---

# 27. Product Detail Template

## Purpose

Provide detailed product information while guiding the user toward an inquiry.

Possible structure:

```text
Product Hero
    ↓
Product Overview
    ↓
Gallery
    ↓
Key Features
    ↓
Technical Specifications
    ↓
Applications
    ↓
Downloads
    ↓
Related Products
    ↓
Product Inquiry / RFQ
    ↓
Footer
```

---

# 28. Product Detail Data

Possible fields:

```text
Product Name
Category
Product Code
Short Description
Full Description
Images
Features
Specifications
Applications
Downloads
Related Products
Related Services
Inquiry CTA
```

Do not require every product to use every field.

---

# 29. Product Specification Rules

Specifications should be structured rather than written as arbitrary paragraphs where possible.

Example:

```text
Capacity: 500 tons
Power: 50 kW
Model: HP-500
Dimensions: 2000 × 1200 mm
```

The exact presentation follows the approved UI.

---

# 30. Product Download Section

Possible downloads:

* Product catalog
* Brochure
* Technical specification
* User guide
* Certification
* Data sheet

Only client-provided or properly licensed documents may be published.

---

# 31. Product Inquiry

The Product Detail template should provide a contextual action:

```text
Request Quote
```

or:

```text
Inquire About This Product
```

Where technically supported, the product being viewed should be pre-associated with the inquiry.

---

# 32. Projects Listing Template

## Purpose

Showcase company experience and completed work.

Possible structure:

```text
Page Hero
    ↓
Introduction
    ↓
Categories / Filters
    ↓
Project Grid
    ↓
CTA
```

---

# 33. Project Category Template

Possible structure:

```text
Category Hero
    ↓
Category Description
    ↓
Project Grid
    ↓
Related Services
    ↓
CTA
```

---

# 34. Project Detail Template

## Purpose

Provide evidence of capability and experience.

Possible structure:

```text
Project Hero
    ↓
Project Metadata
    ↓
Overview
    ↓
Scope
    ↓
Challenge
    ↓
Approach / Solution
    ↓
Results where verified
    ↓
Gallery
    ↓
Related Services
    ↓
Related Projects
    ↓
Lead CTA
```

---

# 35. Project Metadata

Possible fields:

```text
Project Name
Category
Client
Location
Year
Duration
Scope
Sector
Services Used
```

Only verified values may be displayed.

---

# 36. Project Results

Results may include:

* Completion date
* Measurable improvements
* Delivered outcomes
* Performance metrics

Only publish measurable claims when supported by the client.

Do not generate impressive-looking numbers.

---

# 37. Testimonials Template

A dedicated testimonial page is optional.

Possible structure:

```text
Hero
    ↓
Featured Testimonial
    ↓
Testimonial Grid
    ↓
Client Logos
    ↓
CTA
```

The homepage may also use testimonials without requiring a dedicated page.

---

# 38. Certifications Template

Use when certification information is substantial.

Possible structure:

```text
Hero
    ↓
Certification Introduction
    ↓
Certification Grid
    ↓
Details / Verification
    ↓
CTA
```

Do not create certificates that the client has not provided.

---

# 39. Locations Listing Template

For multi-location organizations:

```text
Locations
├── Location A
├── Location B
└── Location C
```

Possible layout:

```text
Location Selector
    ↓
Location Cards
    ↓
Map
    ↓
CTA
```

---

# 40. Location Detail Template

Possible structure:

```text
Location Header
    ↓
Address
    ↓
Phone
    ↓
Business Hours
    ↓
Map
    ↓
Directions
    ↓
Services Available
    ↓
CTA
```

Only create detail pages where the number of locations justifies them.

---

# 41. Blog / News Listing Template

Possible structure:

```text
Hero
    ↓
Featured Article
    ↓
Categories
    ↓
Article Grid
    ↓
Pagination
    ↓
CTA
```

Pagination should only exist when necessary.

---

# 42. Article Detail Template

Possible structure:

```text
Article Header
    ↓
Category / Date
    ↓
Featured Image
    ↓
Article Content
    ↓
Downloads / Media where applicable
    ↓
Related Articles
    ↓
Lead CTA
```

---

# 43. Article Content Requirements

The Article template should support:

* Headings
* Paragraphs
* Lists
* Images
* Quotes
* Links
* Tables
* Embedded media where approved
* Downloads where applicable

Do not create an overly complex editorial system.

---

# 44. Resource Listing Template

Possible structure:

```text
Resource Hero
    ↓
Categories
    ↓
Resource Grid
    ↓
Download CTA
```

Resources may include:

* Brochures
* Catalogs
* Technical documents
* Company profiles
* Case studies

---

# 45. Resource Detail Template

If resources require dedicated landing pages:

```text
Resource Header
    ↓
Description
    ↓
Preview
    ↓
Document Information
    ↓
Download
    ↓
Related Content
```

A dedicated resource detail page is optional.

---

# 46. RFQ Template

## Purpose

The RFQ template is a lead-generation page.

Possible structure:

```text
Page Hero
    ↓
Request Introduction
    ↓
Contact Information
    ↓
Request Details
    ↓
Product / Service Selection
    ↓
Additional Information
    ↓
File Upload where approved
    ↓
Consent / Privacy notice where applicable
    ↓
Submit
```

---

# 47. RFQ Form Fields

Fields may include:

```text
Name
Company
Email
Phone
Product / Service
Quantity
Project Location
Expected Timeline
Budget Range where appropriate
Message
Attachment where approved
```

The exact field set must be selected based on the client's sales process.

---

# 48. RFQ Form Rules

The RFQ must:

* Avoid unnecessary fields.
* Clearly identify required fields.
* Validate input.
* Provide useful errors.
* Show loading state.
* Show success state.
* Show failure state.
* Protect against abuse.
* Route the inquiry correctly.

---

# 49. Contact Template

Possible structure:

```text
Contact Hero
    ↓
Contact Information
    ↓
Primary Contact Form
    ↓
RFQ CTA
    ↓
Office Locations
    ↓
Business Hours
    ↓
Map
    ↓
Social Channels
    ↓
Footer
```

The Contact template should act as the primary communication hub.

---

# 50. Contact vs RFQ

These are not automatically the same thing.

## Contact

General inquiry.

Example:

> "I would like to know more about your services."

## RFQ

Commercial or project-specific request.

Example:

> "I need 50 units of this product and would like a quotation."

The UI should differentiate the two when both exist.

---

# 51. Search Results Template

If internal search is enabled:

```text
Search Header
    ↓
Search Input
    ↓
Filters
    ↓
Results
    ↓
Pagination
```

Search results should identify:

* Result title
* Content type
* Short excerpt
* Relevant category

---

# 52. Empty Search Results

Example:

```text
No results found for "industrial pump".

Try:
- Another search term
- Browse Products
- Browse Services
- Contact Us
```

The actual UI should follow the approved design.

---

# 53. 404 Template

The 404 page should provide useful recovery paths.

Possible actions:

```text
Return Home
Browse Products
Browse Services
View Projects
Contact Us
Search
```

Only show available actions.

---

# 54. Shared Template Elements

Every applicable template may share:

```text
Header
Navigation
Breadcrumbs
Page Container
Section Heading
CTA
Related Content
Footer
```

Shared components must be implemented once and reused.

---

# 55. Template Section Rules

A template should define:

```text
Required sections
Optional sections
Conditional sections
```

Example:

### Product Detail

Required:

```text
Product title
Product overview
Primary CTA
```

Optional:

```text
Specifications
Downloads
Related Products
Gallery
Applications
```

Conditional:

```text
RFQ
```

only if RFQ is enabled.

---

# 56. Conditional Sections

Conditional sections should appear only when the associated content exists.

Example:

```text
if certifications exist:
    display certifications

otherwise:
    omit certifications section
```

Do not display empty sections.

---

# 57. Template Configuration

Conceptually:

```js
const productTemplate = {
  showSpecifications: true,
  showDownloads: true,
  showRelatedProducts: true,
  showInquiry: true,
  showTestimonials: false
};
```

The implementation may use another mechanism.

The principle is configurable templates rather than duplicate templates.

---

# 58. Section Ordering

The template defines logical section relationships.

However, the **approved project UI** determines the actual final visual order.

For example:

```text
Product Detail Template
```

may support:

```text
Overview
Specifications
Downloads
Inquiry
```

but the client's approved UI may place:

```text
Overview
Inquiry
Specifications
Downloads
```

The implementation must follow the approved UI.

---

# 59. Desktop and Mobile Templates

A template is not simply a desktop structure.

Each template must define or reference:

```text
Desktop behavior
Tablet behavior
Mobile behavior
```

The mobile UI may:

* Stack sections
* Collapse filters
* Move CTAs
* Change navigation
* Reorganize metadata

Only approved responsive behavior should be implemented.

---

# 60. Template Reuse

When two pages have substantially similar structures:

Use:

```text
One template
+
Different content
```

rather than:

```text
Two separately coded page systems
```

Example:

```text
Product Detail
    ↓
Product A
Product B
Product C
```

---

# 61. Template Exceptions

A client may have a legitimate requirement that does not fit the standard template.

Process:

```text
Standard Template
      ↓
Identify Gap
      ↓
Evaluate Requirement
      ↓
Determine Whether Existing Template Can Adapt
      ↓
If Not:
Create Controlled Extension
```

Do not immediately create a completely new page system.

---

# 62. Template Extension Rule

New template functionality should be added only when:

* Multiple clients may benefit from it, or
* The client's requirement is significant enough to justify a custom extension.

A one-off visual difference should not automatically become part of the global template.

---

# 63. Industry Template Examples

## Manufacturing

```text
Home
About
Services
Products
Product Category
Product Detail
Projects
Resources
RFQ
Contact
```

## Construction

```text
Home
About
Services
Service Detail
Projects
Project Detail
Certifications
Insights
RFQ
Contact
```

## Hotel

```text
Home
About
Accommodation
Facilities
Gallery
Offers / News
Testimonials
Locations
Contact
Inquiry
```

## Consulting

```text
Home
About
Services
Service Detail
Industries
Case Studies
Team
Insights
Contact
```

These examples demonstrate configuration, not mandatory page structures.

---

# 64. Template Selection Matrix

| Template       | Manufacturing | Construction |    Hotel | Consulting | Automotive |
| -------------- | ------------: | -----------: | -------: | ---------: | ---------: |
| Home           |             ✓ |            ✓ |        ✓ |          ✓ |          ✓ |
| About          |             ✓ |            ✓ |        ✓ |          ✓ |          ✓ |
| Services       |             ✓ |            ✓ |        ✓ |          ✓ |          ✓ |
| Service Detail |             ✓ |            ✓ |        ✓ |          ✓ |   Optional |
| Products       |             ✓ |     Optional | Optional |   Optional |          ✓ |
| Product Detail |             ✓ |     Optional | Optional |   Optional |          ✓ |
| Projects       |             ✓ |            ✓ | Optional |          ✓ |   Optional |
| Project Detail |             ✓ |            ✓ | Optional |          ✓ |   Optional |
| Blog / News    |             ✓ |            ✓ |        ✓ |          ✓ |          ✓ |
| Testimonials   |             ✓ |            ✓ |        ✓ |          ✓ |          ✓ |
| Certifications |             ✓ |            ✓ | Optional |   Optional |   Optional |
| Team           |      Optional |     Optional | Optional |          ✓ |   Optional |
| Locations      |      Optional |     Optional |        ✓ |   Optional |          ✓ |
| RFQ            |             ✓ |            ✓ | Optional |   Optional |          ✓ |
| Contact        |             ✓ |            ✓ |        ✓ |          ✓ |          ✓ |

This matrix is a planning aid, not a requirement to use every template.

---

# 65. Template Limit

The package supports up to approximately **10 core page/template areas** for a typical project.

However, content entries can be much larger.

Example:

```text
Core Templates:
10

Products:
50 entries

Services:
15 entries

Projects:
20 entries

Articles:
30 entries
```

The exact amount depends on the agreed project scope.

The template system should not confuse content volume with the number of unique page designs.

---

# 66. Core Template Approval

Before coding begins, the project team should record:

```text
Selected Templates
Enabled Modules
Routes
Content Types
Lead Flows
```

Example:

```text
Selected Templates:
✓ Home
✓ About
✓ Services
✓ Service Detail
✓ Products
✓ Product Detail
✓ Projects
✓ Project Detail
✓ Blog
✓ Contact

Disabled:
Team
Locations
Certifications
Resources
```

---

# 67. Page Template-to-Route Mapping

Maintain a route map.

Example:

```text
/                         → Home
/about                    → About
/services                → Services Listing
/services/:slug          → Service Detail
/products                → Products Listing
/products/:slug          → Product Detail
/projects                → Projects Listing
/projects/:slug          → Project Detail
/blog                     → Blog Listing
/blog/:slug               → Article
/rfq                      → RFQ
/contact                  → Contact
```

Only enabled templates should have public routes.

---

# 68. Template-to-Content Mapping

Example:

```text
services.js
      ↓
Services Listing Template
      ↓
services/:slug
      ↓
Service Detail Template
```

Example:

```text
products.js
      ↓
Products Listing Template
      ↓
products/:slug
      ↓
Product Detail Template
```

This separation should be preserved in the implementation.

---

# 69. Template SEO Requirements

Every indexable template must support:

```text
Unique title
Meta description
Canonical URL
H1
Open Graph metadata
Structured data where applicable
```

Detail templates must generate metadata from actual content.

Example:

```text
Product:
Hydraulic Press

SEO title:
Hydraulic Press | Company Name
```

Do not create generic titles for every product.

---

# 70. Template Analytics Requirements

Templates should expose meaningful interaction points for analytics.

Examples:

### Product Detail

```text
product_view
download_click
rfq_start
rfq_submit
```

### Service Detail

```text
service_view
cta_click
contact_submit
```

### Article

```text
article_view
related_article_click
cta_click
```

### RFQ

```text
rfq_start
rfq_submit
rfq_error
```

The final event specification belongs in the SEO/Analytics document.

---

# 71. Template Accessibility Requirements

Each template must define accessibility requirements.

At minimum:

```text
Semantic structure
Heading hierarchy
Keyboard navigation
Accessible forms
Alt text
Focus management
Accessible dialogs
Accessible filters
Accessible tables
```

---

# 72. Template Performance Requirements

Every template must avoid unnecessary performance cost.

Examples:

### Product Listing

Avoid loading every full-resolution product image immediately.

### Product Detail

Prioritize the main product image.

### Project Gallery

Lazy-load images below the fold.

### Blog

Optimize article images.

### Video

Load video efficiently.

Detailed performance standards belong in:

`08-performance-and-optimization.md`

---

# 73. Template Security Requirements

Template-specific security considerations include:

```text
Forms
Downloads
Search
Dynamic routes
User input
File uploads where approved
API interactions
```

Do not treat dynamic templates as trusted simply because the content originates from the business.

Detailed standards belong in:

`09-security-standards.md`

---

# 74. Design Reference Mapping

Each selected template should have an approved design reference.

Example:

```text
design/
├── templates/
│   ├── home/
│   ├── services/
│   ├── service-detail/
│   ├── products/
│   ├── product-detail/
│   ├── projects/
│   ├── project-detail/
│   ├── blog/
│   ├── article/
│   ├── rfq/
│   └── contact/
```

Not every template directory needs to exist in every client project.

Only selected templates require references.

---

# 75. AI Implementation Sequence

For each selected template:

```text
1. Read template specification.
2. Identify required data.
3. Inspect approved UI reference.
4. Identify reusable components.
5. Build template structure.
6. Connect approved content.
7. Implement responsive behavior.
8. Implement interactions.
9. Implement SEO.
10. Test.
11. Compare against UI.
12. Fix differences.
```

---

# 76. AI Must Not Generate New Template Variants

If a template already exists:

```text
Product Detail
```

the AI should reuse it.

It should not create:

```text
ProductDetail2
ProductDetailModern
ProductDetailNew
ProductDetailFinal
```

unless the project requirements explicitly introduce a distinct approved template.

---

# 77. Template Component Hierarchy

A typical structure may be:

```text
Page Template
   ↓
Page Sections
   ↓
Reusable Components
   ↓
Design Tokens
```

Example:

```text
Product Detail
   ↓
ProductHero
   ↓
ProductGallery
ProductSummary
ProductSpecs
DownloadList
RelatedProducts
LeadCTA
```

---

# 78. Template Data Independence

Templates should not contain client-specific information directly.

Bad:

```jsx
<h1>Hydraulic Press HP-500</h1>
```

inside a reusable template.

Preferred:

```jsx
<h1>{product.title}</h1>
```

The same template can then support:

```text
Hydraulic Press
Excavator
Industrial Pump
Safety Equipment
```

---

# 79. Template Content Independence

Do not hardcode:

* Company name
* Product names
* Service names
* Client names
* Project names
* Statistics
* Contact details

into reusable templates.

Client-specific data belongs in the appropriate content/configuration layer.

---

# 80. Template Reusability Test

A template is sufficiently reusable when the team can change:

```text
Client A
```

to:

```text
Client B
```

by changing:

```text
Content
Branding
Configuration
Approved UI
```

without rewriting the fundamental page architecture.

---

# 81. Template Quality Test

Before adding a new template to the agency system, verify:

```text
[ ] It solves a recurring client need
[ ] It has a clear purpose
[ ] It can be reused
[ ] It has clear data requirements
[ ] It has clear responsive behavior
[ ] It has clear SEO requirements
[ ] It has clear accessibility requirements
[ ] It has an approved UI
[ ] It does not duplicate an existing template
```

---

# 82. Template Change Management

If an existing template changes:

```text
Existing Template
       ↓
Requested Change
       ↓
Determine:
- Client-specific?
- Agency-wide?
       ↓
Update Template if reusable
OR
Create controlled project-specific extension
       ↓
Update documentation
       ↓
Update UI reference
       ↓
Retest affected projects
```

---

# 83. Backward Compatibility

Template changes should avoid unnecessarily breaking existing client projects.

For example:

```text
Existing:
Product Detail v1

New:
Product Detail v1.1
```

may preserve existing data and routes.

A major incompatible change may require:

```text
Product Detail v2
```

with an explicit migration process.

---

# 84. Template Versioning

Where the agency template is reused across multiple projects, track its version.

Example:

```text
Business Growth Template
Version 1.0
```

After a significant reusable improvement:

```text
Version 1.1
```

This helps identify which client projects use which template version.

---

# 85. Project-Level Overrides

Client projects may override certain template settings without modifying the global agency template.

Example:

```text
Global Template:
Product Detail

Client Configuration:
showSpecifications = true
showDownloads = false
showRelatedProducts = true
```

The goal is to avoid unnecessary forks of the entire template.

---

# 86. When to Fork a Template

A project-specific fork should only be considered when:

* The business requirement is materially different.
* The difference is not reusable across other clients.
* Configuration cannot reasonably support the requirement.
* The impact of maintaining the fork is understood.

Avoid creating forks merely because a client wants a slightly different spacing or color.

Those belong in the approved UI/design layer.

---

# 87. Template Acceptance Criteria

A page template is approved when:

```text
[ ] Purpose is defined
[ ] Data requirements are defined
[ ] Required sections are defined
[ ] Optional sections are defined
[ ] Route is defined
[ ] Responsive behavior is defined
[ ] Lead actions are defined
[ ] SEO requirements are supported
[ ] Accessibility requirements are supported
[ ] Performance requirements are supported
[ ] Approved UI exists
[ ] Template is reusable
```

---

# 88. Master Template Selection Checklist

Before coding a client project:

```text
BUSINESS
[ ] Business type identified
[ ] Primary business objectives identified
[ ] Primary customer journey identified

CONTENT
[ ] Services required?
[ ] Service details required?
[ ] Products required?
[ ] Product details required?
[ ] Projects required?
[ ] Project details required?
[ ] Blog required?
[ ] Team required?
[ ] Locations required?
[ ] Certifications required?
[ ] Resources required?

LEAD GENERATION
[ ] Contact required?
[ ] RFQ required?
[ ] Product inquiry required?
[ ] Service inquiry required?
[ ] WhatsApp required?
[ ] Phone CTA required?

TEMPLATES
[ ] Home selected
[ ] About selected
[ ] Required listing templates selected
[ ] Required detail templates selected
[ ] Marketing templates selected
[ ] Lead templates selected
[ ] 404 selected

DESIGN
[ ] Approved UI exists
[ ] Desktop references exist
[ ] Mobile references exist
[ ] Relevant component references exist
```

---

# 89. Final Template Architecture

The Business Growth template system should ultimately look like:

```text
                    BUSINESS GROWTH
                           │
                    TEMPLATE SYSTEM
                           │
          ┌────────────────┼─────────────────┐
          │                │                 │
        CORE           CONTENT            GROWTH
       TEMPLATES       TEMPLATES          TEMPLATES
          │                │                 │
       Home             Products            RFQ
       About            Services             Contact
       Contact          Projects             CTA
                        Blog
                        Team
                        Locations
                        Resources
                           │
                           ↓
                   CLIENT CONFIGURATION
                           │
                           ↓
                    APPROVED CLIENT UI
                           │
                           ↓
                     IMPLEMENTATION
```

---

# 90. Final Principle

The Business Growth package should not be built as:

```text
One fixed website
```

It should be built as:

```text
A reusable collection of page templates
+
A reusable component system
+
Structured content
+
Configurable modules
+
Lead-generation flows
+
Client-specific UI
```

The ultimate goal is:

> **Build the page architecture once, reuse it across clients, configure only what each business needs, and implement the exact approved UI for that client.**

The template system should provide structure.

The content should provide meaning.

The design should provide the visual experience.

The client requirements should determine what gets enabled.

The AI coding agent should implement all four faithfully without inventing a different product.

```
```
