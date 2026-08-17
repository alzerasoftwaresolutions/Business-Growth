# `07-seo-and-analytics.md`

````md
# Business Growth
# SEO & Analytics Specification

**Document:** 07-seo-and-analytics.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines the SEO and analytics requirements specifically for the Business Growth package.

Business Growth requires a more advanced SEO and measurement structure than Starter Presence because it supports:

- Larger content structures
- Service detail pages
- Product categories
- Product detail pages
- Project portfolios
- Project detail pages
- Blog/news
- Resources
- Multiple locations
- Industry-specific content
- Structured internal linking
- Contextual lead generation
- RFQ
- Multiple inquiry types
- Analytics-driven marketing decisions

The goal is to make the website not only discoverable, but also measurable as a business and marketing asset.

---

# 2. Relationship to Starter Presence

The foundational SEO requirements established for Starter Presence remain applicable.

These include:

- Valid page titles
- Meta descriptions
- Heading hierarchy
- Search-friendly URLs
- XML sitemap
- robots.txt
- Image optimization
- Canonical URLs
- Open Graph metadata
- Basic structured data
- HTTPS
- Mobile SEO

Business Growth does not need to repeat those standards.

Instead, this document defines the **additional SEO and analytics capabilities required because Business Growth has a richer content and lead-generation architecture**.

Reference:

`Starter Presence / 04-seo-and-analytics.md`

---

# 3. Business Growth SEO Objective

The SEO objective changes from:

```text
Basic Business Discovery
````

to:

```text
Business Discovery
       +
Content Discovery
       +
Offering Discovery
       +
Detail Page Discovery
       +
Long-Term Content Growth
       +
Lead Generation
```

The website should be able to attract users through multiple entry points, not only the homepage.

---

# 4. Search Entry Point Architecture

A Business Growth website may receive visitors through:

```text
Search Engine
    ↓
Homepage

Search Engine
    ↓
Service Page

Search Engine
    ↓
Product Page

Search Engine
    ↓
Project Page

Search Engine
    ↓
Article

Search Engine
    ↓
Location Page
```

Every indexable content type therefore becomes part of the SEO strategy.

---

# 5. Content-Type SEO

The following content types may need their own SEO treatment:

```text
Company
Service
Service Category
Product
Product Category
Project
Project Category
Article
Resource
Location
Property
Vehicle
Tour
Accommodation
Program
Healthcare Service
Industry
```

Only enabled content types should generate public SEO pages.

---

# 6. Template-Level SEO

Each reusable page template should support its own SEO metadata.

Example:

```text
Service Template
    ↓
Dynamic SEO

Product Template
    ↓
Dynamic SEO

Project Template
    ↓
Dynamic SEO

Article Template
    ↓
Dynamic SEO
```

The template must not use the same title and description for every content entry.

---

# 7. Dynamic Metadata

Dynamic content should be able to generate metadata from the content model.

Example:

```text
Product:
Hydraulic Press

SEO Title:
Hydraulic Press | Company Name

SEO Description:
Explore the Hydraulic Press from Company Name,
including technical specifications and product applications.
```

Actual metadata should use approved client content.

The AI must not invent unsupported product claims.

---

# 8. Metadata Hierarchy

The SEO system should follow:

```text
Explicit Approved SEO Metadata
        ↓
Approved Content Fields
        ↓
Safe Generated Default
        ↓
Global Site Default
```

For example:

```text
seoTitle exists
    → use it

otherwise
    → derive from approved page title

otherwise
    → use safe site-level fallback
```

Do not use empty or generic metadata when meaningful approved content exists.

---

# 9. Product SEO

Product detail pages should be treated as important search landing pages when the product content is intended for public discovery.

Product SEO may include:

```text
Product Name
Category
Brand
Applications
Technical attributes
Industry relevance
Related services
Downloads
```

Only expose information intended for public use.

---

# 10. Product Category SEO

Category pages should not be treated as empty lists.

Where a category is intended to rank, it may contain:

```text
Category Name
Introduction
Supporting description
Relevant products
Related services
Relevant applications
```

Avoid creating thin category pages containing only a grid of products with no useful context.

---

# 11. Service SEO

Service detail pages should provide useful information about:

* What the service is
* Who it is for
* What the company provides
* Applications
* Capabilities
* Related work
* Inquiry path

Avoid creating multiple service pages whose content is almost identical.

---

# 12. Service Category SEO

Service category pages may help organize broader themes.

Example:

```text
Construction Services
    ↓
Commercial Construction
    ↓
Industrial Construction
```

Each layer should provide distinct value.

Do not create category pages only to create more URLs.

---

# 13. Project SEO

Project detail pages may be valuable search and trust assets.

Possible indexed information:

```text
Project Name
Industry
Location
Year
Services
Scope
Project Description
Case Study Content
```

Project pages should provide substantial unique information.

---

# 14. Project Case Study SEO

Where a project has a true case-study structure:

```text
Challenge
Solution
Implementation
Outcome
```

the page can target more specific search intent.

Do not manufacture case-study terminology where the client has only supplied a short project description.

---

# 15. Article / Blog SEO

Blog and News become significantly more important in Business Growth.

Each article should support:

```text
Unique title
Excerpt
Author
Publication date
Updated date
Category
Featured image
Article content
SEO metadata
Canonical URL
Open Graph metadata
```

---

# 16. Article Search Intent

Articles should have a clear purpose.

Possible purposes:

```text
Informational
Educational
Industry insight
Company announcement
Product education
Service education
Project update
Buying guidance
```

Do not publish articles solely to increase page count.

---

# 17. Article-to-Business Relationships

Marketing content should connect readers to relevant business offerings.

Example:

```text
Article
   ↓
Related Service
   ↓
Related Project
   ↓
Lead CTA
```

or:

```text
Article
   ↓
Related Product
   ↓
Product Detail
   ↓
Request Quote
```

This is a defining part of Business Growth SEO.

---

# 18. Internal Linking Architecture

Internal linking should support the content model.

Examples:

```text
Service
 ↔ Related Projects
 ↔ Related Articles
 ↔ Related Services
```

```text
Product
 ↔ Related Services
 ↔ Related Projects
 ↔ Related Articles
 ↔ Resources
```

```text
Project
 ↔ Services
 ↔ Products
 ↔ Articles
```

Links should be based on actual relationships.

---

# 19. Related Content Logic

Related content can be selected by:

```text
Explicit Relationship
       ↓
Category
       ↓
Industry
       ↓
Tag
       ↓
Approved fallback
```

Do not use completely random content simply to fill a section.

---

# 20. Breadcrumb SEO

Breadcrumbs are particularly useful in Business Growth because content structures are deeper.

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

Breadcrumb structure must reflect the actual information architecture.

---

# 21. Breadcrumb Structured Data

Where appropriate, implement `BreadcrumbList` structured data.

The structured data must reflect visible breadcrumb navigation.

Do not create breadcrumb schema for hierarchy that users cannot actually see or navigate.

---

# 22. Structured Data Strategy

Business Growth may require more structured data than Starter Presence.

Possible schema types include:

```text
Organization
LocalBusiness
WebSite
BreadcrumbList
Service
Product
Article
Person
Event
FAQPage where appropriate
```

Use only schema types appropriate to the actual page.

---

# 23. Product Structured Data

Product schema may be used where the page genuinely represents a public product.

Do not add misleading:

* Price
* Availability
* Ratings
* Reviews

unless the data is real and properly maintained.

A product catalog page is not automatically an e-commerce product page.

---

# 24. Service Structured Data

Service structured data may help describe:

```text
Service Name
Description
Provider
Service Area
```

Only include information represented accurately by the actual page.

---

# 25. Article Structured Data

Articles should support appropriate structured data where applicable.

Information may include:

```text
Headline
Image
Author
Publication Date
Modified Date
Publisher
```

These values should come from the article content model.

---

# 26. Person Structured Data

Person schema may be appropriate for:

* Executives
* Authors
* Doctors
* Consultants
* Experts
* Educators

Only use verified public information.

---

# 27. Event Structured Data

Educational institutions and businesses with event/news content may require event schema.

Only use it when the page actually describes an event.

Do not create event schema for generic announcements.

---

# 28. FAQ Structured Data

FAQ structured data must only be used where the page contains actual visible FAQs that satisfy the appropriate requirements.

Do not add FAQ schema merely to increase structured-data volume.

---

# 29. Local SEO Architecture

Business Growth supports stronger location-related SEO for businesses with:

* Multiple branches
* Clinics
* Hotels
* Dealerships
* Campuses
* Offices
* Real estate locations
* Service areas

The content model should provide reliable location information.

---

# 30. Location Page SEO

A dedicated location page may contain:

```text
Business Name
Location Name
Address
Phone
Business Hours
Services
Local Description
Map
Directions
```

Only create individual location pages when they provide meaningful unique value.

---

# 31. Multi-Location SEO

For multi-location businesses:

```text
Company
   ↓
Locations
   ├── Location A
   ├── Location B
   └── Location C
```

Each location page should have distinct:

* Title
* Description
* Address
* Contact information
* Content
* Canonical URL

Do not create duplicate location pages with only the city name changed.

---

# 32. Industry Landing Pages

Industry pages may be useful for businesses that serve multiple industries.

Example:

```text
Engineering Services
    ↓
Healthcare
Manufacturing
Energy
Government
Construction
```

An industry page should contain useful, industry-specific information.

Do not create dozens of near-identical industry pages solely for SEO.

---

# 33. Program SEO — Education

Educational institutions may have indexable program pages.

Possible SEO content:

```text
Program Name
Level
Duration
Department
Description
Requirements
Outcomes
```

Program pages must provide actual approved information.

---

# 34. Healthcare SEO

Healthcare pages require extra care.

Search content should focus on:

* Provider information
* Services
* Departments
* Facilities
* Public informational content

The website must not generate medical claims, diagnoses, treatment promises, or unsupported health information.

---

# 35. Travel SEO

Travel content may target:

* Destinations
* Tours
* Travel guides
* Activities
* Packages

Each public page should provide genuine useful information.

Do not create location pages that provide no meaningful unique content.

---

# 36. Real Estate SEO

Real estate pages may target:

* Property types
* Developments
* Locations
* Property listings

Property status and availability must remain accurate.

Do not let outdated listings remain indexed indefinitely without an appropriate update/redirect strategy.

---

# 37. Automotive SEO

Vehicle pages may target:

* Make
* Model
* Vehicle type
* Features
* Specifications

Vehicle availability must be handled carefully.

A sold/unavailable vehicle should not indefinitely appear as actively available.

---

# 38. Import / Export SEO

Import/export websites may support:

```text
Products
Markets
Countries
Industries
Capabilities
```

Geographic pages must reflect actual markets served.

Do not create pages for countries the business does not genuinely serve.

---

# 39. SEO Content Quality

Business Growth does not mean:

```text
More Pages = Better SEO
```

The correct principle is:

```text
Useful Content
+
Logical Architecture
+
Distinct Search Intent
+
Relevant Internal Links
+
Strong User Experience
```

---

# 40. Thin Content Prevention

Do not publish pages that contain:

```text
Only a title
One sentence
A generic image
A contact button
```

unless the page has a legitimate utility purpose.

This is particularly important for:

* Product categories
* Service categories
* Locations
* Industries
* Articles
* Project pages

---

# 41. Duplicate Content Prevention

The content model and routing architecture must avoid creating multiple URLs for substantially identical content.

Potential sources:

```text
Category combinations
Query parameters
Filters
Duplicate product routes
Duplicate location pages
Printer-friendly routes
```

Where duplicate URLs are technically necessary, use appropriate canonical/indexing controls.

---

# 42. Filter SEO

Filtered results generally should not automatically create unlimited indexable URLs.

Example:

```text
/products?category=industrial&capacity=500
```

may create a potentially large URL space.

The default strategy should carefully control whether such URLs are:

```text
Indexable
Canonicalized
Noindexed
Not crawlable
```

according to actual SEO requirements.

---

# 43. Search Results SEO

Internal search result pages should generally not become uncontrolled search-engine landing pages.

Avoid allowing search engines to index unlimited:

```text
/search?q=...
```

URLs unless there is a deliberate SEO strategy.

---

# 44. Pagination SEO

For large content collections:

* Maintain stable pagination.
* Ensure pages are crawlable where appropriate.
* Avoid duplicate canonical URLs.
* Ensure users can access later content.

Do not create infinite duplicate routes.

---

# 45. Faceted Navigation

If product/property/vehicle filtering is enabled, define a controlled strategy.

Possible approach:

```text
Core category
   ↓
Indexable

Filter combination
   ↓
Usually controlled
```

Only high-value filtered landing pages should be intentionally exposed to search engines.

---

# 46. Canonical Strategy

Every indexable detail page should have a canonical URL.

Examples:

```text
/products/hydraulic-press
/services/commercial-construction
/projects/apex-tower
/blog/how-to-select-industrial-equipment
```

Do not canonicalize every content page to its parent category.

A genuine unique page should generally canonicalize to itself.

---

# 47. Content Status and Indexing

The SEO system must respect content status.

Example:

```text
Draft
   ↓
No Index

Review
   ↓
No Index

Approved
   ↓
Ready for publishing

Published
   ↓
Indexable if configured

Archived
   ↓
Removed / Redirected / Noindex strategy
```

The actual implementation may use different rules.

---

# 48. Archived Content

When content is removed:

Determine whether to:

```text
Redirect
Return 404
Return 410
Noindex
Keep as archived
```

based on the content's replacement and SEO value.

Do not automatically redirect every removed page to the homepage.

---

# 49. Expired Content

Important for:

* Hotel offers
* Travel packages
* Events
* Properties
* Vehicle listings
* News

Expired content should have a defined lifecycle.

Example:

```text
Active
   ↓
Expired
   ↓
Review
   ↓
Archive / Replace / Redirect
```

---

# 50. Temporary Content

Temporary campaign pages may require different indexing rules.

Example:

```text
Campaign Page
    ↓
Active Campaign
    ↓
Campaign End
    ↓
Review indexing status
```

Do not leave expired promotional pages permanently indexable without purpose.

---

# 51. URL Architecture by Content Type

Recommended patterns:

```text
/services
/services/:slug

/products
/products/:slug

/projects
/projects/:slug

/blog
/blog/:slug

/locations
/locations/:slug

/resources
/resources/:slug
```

Category routes may be added when necessary.

---

# 52. Category URLs

Possible:

```text
/products/category/industrial-equipment
```

or:

```text
/products/industrial-equipment
```

Choose one consistent architecture.

Avoid excessively deep URL structures.

---

# 53. SEO-Friendly Slugs

Use:

```text
commercial-construction
hydraulic-press
industrial-pumps
addis-ababa-office
project-apex-tower
```

Avoid:

```text
item123
product-final-v2
service1
page?id=5
```

---

# 54. Metadata Templates

The system may provide defaults.

Example:

```text
Product:
{productName} | {companyName}

Service:
{serviceName} | {companyName}

Project:
{projectName} | {companyName}

Article:
{articleTitle} | {companyName}
```

These are fallbacks.

Approved explicit metadata takes priority.

---

# 55. Social Metadata

Every important public content type should support:

```text
og:title
og:description
og:image
og:url
```

Article pages may additionally use article-specific metadata.

---

# 56. Social Sharing by Content Type

Examples:

```text
Product
→ Product image

Project
→ Project hero image

Article
→ Featured image

Property
→ Property hero image

Vehicle
→ Vehicle image

Tour
→ Destination/tour image
```

Use appropriate approved imagery.

---

# 57. Image SEO by Content Model

Images should support:

```text
src
alt
width
height
caption
credit
```

where appropriate.

Alt text should describe actual visual content.

Do not use keyword-stuffed descriptions.

---

# 58. Content-Generated Alt Text

When appropriate, a system may provide a default alt text based on approved content.

Example:

```text
Product:
Hydraulic Press
```

Possible fallback:

```text
Hydraulic Press product
```

However, editorially important images should receive more descriptive approved alt text when needed.

---

# 59. Internal Link Recommendations

The content system may support explicit relationships such as:

```text
relatedServices
relatedProducts
relatedProjects
relatedArticles
relatedResources
```

This allows deliberate internal linking.

---

# 60. Orphan Page Detection

The system should identify published content that has no useful internal links.

Potential issue:

```text
Published Project
    ↓
No listing
No related content
No navigation
No internal links
```

Such content should be reviewed.

---

# 61. SEO Navigation Relationship

Important commercial content should be reachable from:

* Main navigation
* Relevant category
* Related content
* Homepage where appropriate

Not every page needs direct main-navigation placement.

---

# 62. SEO and Lead Generation

SEO landing pages should not end at information.

Where appropriate:

```text
Search Visitor
    ↓
Relevant Page
    ↓
Proof
    ↓
CTA
    ↓
Lead
```

This is especially important for:

* Services
* Products
* Projects
* Properties
* Vehicles
* Tours
* Consulting offerings

---

# 63. SEO CTA Alignment

CTA language should match search intent.

Example:

```text
Product search
→ Request Quote

Service search
→ Request Consultation

Property search
→ Enquire

Education program search
→ Request Information
```

Do not use generic CTA wording when a more relevant action exists.

---

# 64. Search Landing Page Quality

A page designed to receive search traffic should answer:

```text
What is this?
Who is it for?
What does the company provide?
Why should the visitor trust the business?
What should the visitor do next?
```

---

# 65. Search Console

Business Growth should normally include Google Search Console integration as part of its marketing capabilities.

Verify:

```text
[ ] Property created
[ ] Ownership verified
[ ] Sitemap submitted
[ ] Important URLs discoverable
[ ] Indexing status monitored
```

---

# 66. Search Console Monitoring

Review:

* Indexing issues
* Sitemap status
* Search performance
* Core page indexing
* Important crawl errors
* Manual actions/security notifications where applicable

Search Console is a diagnostic and monitoring system.

It does not guarantee rankings.

---

# 67. Analytics

Analytics is a core Business Growth capability.

The analytics system should measure both:

```text
Content engagement
```

and:

```text
Business conversions
```

---

# 68. Analytics Objectives

Primary measurement areas:

```text
Traffic
Content
Engagement
Lead generation
CTA performance
RFQ
Contact
Campaign attribution
```

---

# 69. Core Events

Recommended Business Growth events:

```text
page_view
product_view
service_view
project_view
article_view
resource_view
cta_click
form_start
form_submit
form_error
rfq_start
rfq_submit
phone_click
email_click
whatsapp_click
download_click
```

Only enable events relevant to the project.

---

# 70. Content View Events

Where appropriate:

```text
product_view
service_view
project_view
article_view
property_view
vehicle_view
tour_view
```

A shared event structure can be used:

```text
content_view
```

with a content type parameter where appropriate.

The final implementation should favor consistency.

---

# 71. Event Parameters

Event parameters should provide useful context without exposing personal data.

Example:

```text
event:
rfq_submit

parameters:
content_type = product
content_id = product-001
source = product-detail
```

Do not send:

```text
user name
email
phone
message content
```

to analytics unless there is a specific lawful and approved implementation.

---

# 72. CTA Analytics

Track important CTAs.

Example:

```text
cta_click

cta_name:
request_quote

location:
product_detail

content_type:
product
```

This allows the business to compare CTA behavior.

---

# 73. Form Analytics

Recommended:

```text
form_start
form_submit
form_error
```

Parameters may include:

```text
form_type
page
source
content_type
```

Do not include form content.

---

# 74. RFQ Analytics

At minimum:

```text
rfq_start
rfq_submit
```

Optional:

```text
rfq_error
```

This can help measure the RFQ funnel.

---

# 75. Lead Funnel Analytics

The basic funnel is:

```text
Content View
     ↓
CTA Click
     ↓
Form Start
     ↓
Form Submit
```

Example:

```text
Product View
    ↓
Request Quote Click
    ↓
RFQ Start
    ↓
RFQ Submit
```

---

# 76. Attribution

Where appropriate, analytics should preserve campaign attribution.

Possible values:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
```

The project should only implement the tracking required by its marketing strategy.

---

# 77. Organic Search Measurement

Search Console may provide:

* Queries
* Impressions
* Clicks
* CTR
* Position

Analytics may provide:

* Sessions
* Engagement
* Conversions

These systems serve different purposes and should not be treated as interchangeable.

---

# 78. Campaign Measurement

Marketing campaigns should be capable of driving visitors to:

```text
Homepage
Service Page
Product Page
Landing Page
Article
Project
RFQ
```

UTM parameters should remain intact through the lead journey where technically practical.

---

# 79. Landing Page Measurement

Business Growth may use campaign-specific landing pages.

A landing page should support:

```text
Unique CTA
Relevant Content
Trust
Conversion
Analytics
```

Landing pages must follow the approved UI.

---

# 80. Marketing Content Measurement

For blog/news:

Track where useful:

```text
Article Views
CTA Clicks
Related Content Clicks
Downloads
Lead Actions
```

Do not create dozens of low-value events.

---

# 81. Download Tracking

Track important downloads where analytics is included.

Example:

```text
download_click
```

Possible parameters:

```text
resource_type
resource_name
resource_id
```

Do not send private document contents.

---

# 82. Video Analytics

If video measurement is required:

Possible events:

```text
video_start
video_progress
video_complete
```

Only implement when video is a meaningful marketing asset.

---

# 83. Search Analytics

If internal search exists:

Possible events:

```text
search
search_result_click
```

Do not store sensitive search terms unnecessarily.

---

# 84. Filter Analytics

Filter interactions may be measured when they are important to content discovery.

Possible:

```text
filter_apply
```

with safe parameters such as:

```text
content_type
filter_type
```

Do not track sensitive user information.

---

# 85. Location Analytics

For multi-location websites:

Possible events:

```text
location_view
directions_click
location_phone_click
```

This can help understand branch-level interest.

---

# 86. Analytics Naming Standard

Event names should be:

* Lowercase
* Consistent
* Descriptive
* Stable

Preferred:

```text
rfq_submit
product_view
phone_click
download_click
```

Avoid:

```text
ButtonClicked
newEvent123
clickProductNowFinal
```

---

# 87. Analytics Architecture

Analytics should be centralized.

Recommended conceptual structure:

```text
User Interaction
       ↓
Analytics Utility
       ↓
Approved Event
       ↓
Analytics Provider
```

Do not manually implement unrelated tracking logic throughout dozens of components.

---

# 88. Analytics Utility

Conceptually:

```js id="r0u7x9"
trackEvent({
  name: "rfq_submit",
  parameters: {
    contentType: "product"
  }
});
```

The actual implementation depends on the chosen analytics platform.

---

# 89. Analytics Failure Principle

If analytics fails:

```text
Website
    ↓
Must continue working
```

Analytics must never break:

* Navigation
* Forms
* RFQ
* Phone
* Email
* WhatsApp
* Product pages
* Service pages

---

# 90. Duplicate Analytics Prevention

Ensure that:

```text
One Interaction
    ↓
One Intended Event
```

Avoid:

```text
Click
 ↓
Component Event
 ↓
Parent Event
 ↓
Global Event
```

all firing duplicate conversions.

---

# 91. Analytics and Privacy

Never send sensitive information to analytics.

Examples:

```text
Passwords
Authentication tokens
Medical information
Student records
Private messages
RFQ message body
Phone number
Email address
Identity documents
```

unless explicitly designed and approved under appropriate privacy/legal requirements.

---

# 92. Consent Considerations

Where applicable, analytics and tracking should respect the project's privacy and consent requirements.

Do not assume the same privacy requirements apply identically in every jurisdiction.

The agency should implement the client's approved privacy/consent approach.

---

# 93. Client Analytics Access

Where analytics is included:

```text
[ ] Client account created/identified
[ ] Client access granted
[ ] Agency access granted where authorized
[ ] Correct property selected
[ ] Production traffic verified
```

---

# 94. Search Console Access

Similarly:

```text
[ ] Client ownership
[ ] Agency access where authorized
[ ] Production property
[ ] Sitemap submitted
```

---

# 95. SEO Dashboard / Reporting

Business Growth does not automatically include a custom analytics dashboard.

Reports may use:

* Google Analytics
* Search Console
* Hosting/monitoring tools

A custom reporting dashboard is an additional feature.

---

# 96. SEO Reporting

If reporting is included in maintenance, possible metrics include:

```text
Organic traffic
Top landing pages
Search impressions
Search clicks
Top queries
Lead conversions
RFQ submissions
CTA interactions
```

Only report measured information.

Do not promise search rankings.

---

# 97. SEO Maintenance

Ongoing SEO work may include:

```text
Metadata review
Broken link review
Indexing review
Sitemap verification
Internal link review
Content optimization
Search Console review
```

Advanced SEO campaign work remains outside the standard package.

---

# 98. SEO Content Expansion

Business Growth is structurally ready for ongoing content growth.

Possible expansion:

```text
New Article
     ↓
Related Service
     ↓
Related Product
     ↓
CTA
```

The architecture should allow content growth without redesigning the site.

---

# 99. SEO Content Calendar

The website may support a client content strategy such as:

```text
Weekly
Articles / News

Monthly
New Project / Case Study

Quarterly
Service / Product Update
```

The actual publishing schedule is not part of the standard package unless included in marketing/maintenance services.

---

# 100. Search Engine Discoverability

New content should be discoverable through:

```text
Listing
Navigation
Internal Links
Sitemap
Related Content
```

Do not publish content that can only be accessed through an obscure direct URL.

---

# 101. SEO and Archive Management

As content grows:

```text
Active
   ↓
Aging
   ↓
Review
   ↓
Update / Consolidate / Archive
```

This is particularly important for:

* News
* Offers
* Events
* Properties
* Vehicles
* Travel packages

---

# 102. Content Consolidation

If multiple pages serve nearly identical purposes, consider:

```text
Duplicate Pages
      ↓
Review
      ↓
Consolidate
      ↓
301 Redirect
```

Do not maintain duplicate SEO pages indefinitely.

---

# 103. SEO Quality Control

Before publishing any new content:

```text
[ ] Unique title
[ ] Useful content
[ ] Search intent understood
[ ] Correct URL
[ ] Metadata
[ ] Internal links
[ ] Image optimization
[ ] CTA
[ ] Structured data where appropriate
```

---

# 104. Dynamic Template SEO Testing

Every dynamic template must be tested with multiple content entries.

For example:

```text
Product A
Product B
Product C
```

Verify that each has:

```text
Unique title
Unique URL
Unique metadata
Unique canonical
Correct content
Correct structured data
```

---

# 105. Missing Content SEO Behavior

If a content item is missing required SEO information:

Use safe fallback generation from approved fields.

Never:

```text
Invent statistics
Invent descriptions
Invent claims
Invent keywords
```

---

# 106. SEO and Placeholder Content

Placeholder content must never be indexable.

Development content should be controlled through:

* Environment settings
* noindex
* robots controls where appropriate
* Preview/staging configuration

Production should contain only approved content.

---

# 107. Search Engine Preview QA

Before launch, review how important pages appear as search results.

Check:

```text
Title
Description
URL
```

for:

* Home
* Services
* Products
* Projects
* Articles
* Important detail pages

---

# 108. Social Preview QA

Test representative pages:

```text
Homepage
Product
Service
Project
Article
Property
Tour
```

depending on enabled modules.

Verify:

```text
Image
Title
Description
URL
```

---

# 109. SEO and Performance Relationship

Business Growth has more pages and richer content, so SEO must remain coordinated with performance.

Do not achieve SEO richness by:

* Loading unnecessary scripts
* Loading huge images
* Embedding excessive widgets
* Adding unnecessary content blocks

---

# 110. SEO and Accessibility Relationship

Search optimization must not compromise accessibility.

For example:

```text
SEO heading
    =
Real semantic heading
```

Do not add hidden headings solely for search engines.

---

# 111. SEO and Content Relationship

The content model is the foundation.

```text
Content Model
      ↓
Structured Content
      ↓
Page Template
      ↓
SEO Metadata
      ↓
Search Engine
```

The SEO system should consume the same approved content source used by the page.

---

# 112. AI SEO Rules

The AI coding agent must:

```text
[ ] Use the documented content model
[ ] Generate metadata from approved content
[ ] Preserve canonical URLs
[ ] Support dynamic metadata
[ ] Support structured data
[ ] Preserve internal relationships
[ ] Implement analytics events consistently
[ ] Never invent SEO claims
[ ] Never keyword stuff
[ ] Never add hidden SEO content
[ ] Never create fake reviews
[ ] Never fabricate ratings
```

---

# 113. AI Analytics Rules

The AI must:

```text
[ ] Reuse the central analytics utility
[ ] Use approved event names
[ ] Avoid duplicate events
[ ] Track real interactions
[ ] Avoid sensitive data
[ ] Preserve contextual metadata
[ ] Test conversion events
```

---

# 114. AI Must Not Create SEO Pages Automatically

The AI must not generate:

```text
100 city pages
50 industry pages
30 keyword pages
```

merely to increase the number of indexed URLs.

Every public page must have a legitimate business/content purpose.

---

# 115. AI Must Not Generate Fake Structured Data

The AI must not create:

```text
Fake reviews
Fake ratings
Fake prices
Fake availability
Fake certifications
Fake awards
```

Structured data must match real content.

---

# 116. SEO Launch Checklist

```text
TECHNICAL
[ ] URLs correct
[ ] Canonicals correct
[ ] Sitemap generated
[ ] Robots.txt correct
[ ] No accidental noindex
[ ] HTTPS

CONTENT
[ ] Titles
[ ] Meta descriptions
[ ] H1
[ ] Internal links
[ ] Alt text
[ ] Unique detail content

STRUCTURED DATA
[ ] Organization where appropriate
[ ] Product where appropriate
[ ] Service where appropriate
[ ] Article where appropriate
[ ] Breadcrumbs
[ ] Local business where appropriate

CONTENT TYPES
[ ] Products tested
[ ] Services tested
[ ] Projects tested
[ ] Articles tested
[ ] Locations tested
[ ] Industry pages tested where applicable
```

---

# 117. Analytics Launch Checklist

```text
[ ] Analytics property correct
[ ] Production tracking active
[ ] Page views working
[ ] CTA tracking working
[ ] Contact submission tracking
[ ] RFQ tracking
[ ] Phone click tracking
[ ] Email click tracking
[ ] WhatsApp tracking
[ ] Download tracking where applicable
[ ] Search tracking where applicable
[ ] No duplicate events
[ ] No sensitive data
```

---

# 118. Search Console Launch Checklist

```text
[ ] Property verified
[ ] Correct domain
[ ] Sitemap submitted
[ ] Important pages available
[ ] No accidental indexing block
```

---

# 119. Post-Launch SEO Review

After launch:

```text
[ ] Sitemap accepted
[ ] Important pages indexed/discoverable
[ ] No unexpected crawl errors
[ ] Canonicals behave correctly
[ ] Search Console reports normally
[ ] No major technical SEO issues
```

Indexing itself may take time and should not be represented as an immediate guarantee.

---

# 120. Post-Launch Analytics Review

Perform controlled interactions:

```text
Open Product
Click CTA
Start RFQ
Submit RFQ
Click Phone
Click Email
Click WhatsApp
Download Resource
```

Verify expected events.

---

# 121. Measurement Review

The business should eventually be able to answer:

```text
Which pages receive attention?

Which offerings are most viewed?

Which CTAs are clicked?

Which content generates inquiries?

Which products generate RFQs?

Which services generate consultations?

Which campaigns generate traffic?

Which content leads users toward conversion?
```

This is the core purpose of Business Growth analytics.

---

# 122. Business Growth SEO Architecture

The final SEO architecture should look like:

```text
                  SEARCH
                    │
          ┌─────────┼─────────┐
          ↓         ↓         ↓
       Services   Products  Projects
          ↓         ↓         ↓
       Details    Details   Details
          │         │         │
          └─────────┼─────────┘
                    ↓
                Related Content
                    ↓
                  Trust
                    ↓
                 CTA / RFQ
                    ↓
                   Lead
```

Marketing content expands this further:

```text
Search
  ↓
Article
  ↓
Service / Product
  ↓
Proof
  ↓
Lead
```

---

# 123. Definition of Done

The Business Growth SEO and analytics implementation is complete when:

```text
[✓] Dynamic content types support SEO metadata
[✓] Service pages support SEO
[✓] Product pages support SEO
[✓] Project pages support SEO
[✓] Article pages support SEO
[✓] Location pages support SEO where enabled
[✓] Industry pages support SEO where enabled
[✓] Internal linking is supported
[✓] Breadcrumbs are supported
[✓] Structured data is implemented where appropriate
[✓] Dynamic canonical URLs are correct
[✓] Sitemap includes enabled public content
[✓] Filtering/search does not create uncontrolled indexing
[✓] Analytics tracks key business interactions
[✓] RFQ conversion is measurable
[✓] Contact conversion is measurable
[✓] CTA interactions are measurable
[✓] Sensitive information is excluded from analytics
[✓] Search Console is configured where included
[✓] Production SEO has been verified
```

---

# 124. Final Principle

Business Growth SEO is not:

```text
More keywords
+
More pages
+
More metadata
```

It is:

```text
Structured Business Content
        +
Useful Search Landing Pages
        +
Strong Internal Relationships
        +
Relevant Lead Actions
        +
Measurement
```

The website should create a connected journey:

```text
SEARCH
  ↓
RELEVANT CONTENT
  ↓
DETAIL
  ↓
TRUST
  ↓
ACTION
  ↓
LEAD
```

The SEO architecture must therefore work together with:

```text
03-page-template-specification.md
04-component-system.md
05-content-model-and-content-structure.md
06-lead-generation-and-rfq.md
```

The same content model should feed the page, the components, the SEO metadata, the structured data, the internal links, and the lead context.

The final objective is:

> **Make the Business Growth website discoverable, understandable, measurable, and capable of converting relevant visitors into meaningful business inquiries without turning the website into an unnecessary marketing or analytics application.**

```
```
