# `08-performance-and-optimization.md`

````md
# Business Growth
# Performance & Optimization Standards

**Document:** 08-performance-and-optimization.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines the performance and optimization standards specifically required by the Business Growth package.

Business Growth introduces substantially more content and interaction than Starter Presence, including:

- Product catalogs
- Service catalogs
- Detail pages
- Project portfolios
- Blog/news
- Downloadable resources
- Galleries
- Videos
- Search
- Filtering
- Multiple locations
- Rich forms
- RFQ
- Analytics
- Third-party marketing integrations

These capabilities increase the potential performance cost of the website.

The purpose of this document is therefore to ensure that the richer Business Growth experience remains:

- Fast
- Responsive
- Stable
- Efficient
- Mobile-friendly
- Scalable within package scope
- Search-engine friendly
- Maintainable

without unnecessarily removing the features that create the package's additional business value.

---

# 2. Relationship to Starter Presence

The foundational performance requirements from Starter Presence remain applicable.

They cover:

- Image optimization
- Font optimization
- JavaScript control
- CSS optimization
- Lazy loading
- Efficient assets
- Caching
- Compression
- Core Web Vitals
- Responsive performance
- Production testing

Reference:

`Starter Presence / 05-performance-and-optimization.md`

This document focuses on the additional challenges introduced by Business Growth's richer architecture.

---

# 3. Business Growth Performance Principle

The goal is not:

```text
Maximum Features
````

or:

```text
Minimum Features
```

The goal is:

```text
Maximum Business Value
        ÷
Reasonable Technical Cost
        =
Efficient Website
```

A feature should be implemented efficiently rather than removed merely because it requires optimization.

---

# 4. Performance Priorities

Business Growth optimization priority:

```text
1. Critical rendering
2. Above-the-fold content
3. Primary CTA
4. Main images
5. Fonts
6. Page-specific JavaScript
7. Product/project/media content
8. Third-party services
9. Search/filter interactions
10. Analytics
11. Below-the-fold content
12. Optional enhancements
```

---

# 5. Performance Budget Philosophy

Because Business Growth can contain more content, performance should be controlled at the template and component levels.

Review budgets for:

```text
Page weight
Image weight
JavaScript
CSS
Fonts
Network requests
Third-party scripts
API responses
Media
```

Avoid allowing each new feature to add performance cost without review.

---

# 6. Page-Type Performance Budgets

Different pages have different performance characteristics.

Do not optimize every page using the same strategy.

Example:

```text
Homepage
→ High visual priority

Product Listing
→ Many images / repeated cards

Product Detail
→ Hero image + specifications + downloads

Project Detail
→ Large gallery / case-study content

Article
→ Long-form content

RFQ
→ Form interaction, low media weight

Contact
→ Communication functionality
```

Each template should be optimized according to its purpose.

---

# 7. Homepage Performance

The homepage should receive the highest performance priority.

Verify:

```text
[ ] Hero content renders quickly
[ ] Primary CTA becomes usable quickly
[ ] Hero image optimized
[ ] Above-the-fold assets prioritized
[ ] Non-critical sections deferred where appropriate
[ ] Promotional video does not block initial render
[ ] Analytics does not block rendering
```

---

# 8. Content-Rich Listing Performance

Product, service, project, property, vehicle, and article listings may contain many repeated cards.

Avoid:

```text
Load every large image immediately
+
Render hundreds of DOM nodes
+
Load every related resource
```

Instead use:

* Pagination where appropriate
* Load more where designed
* Lazy-loaded images
* Responsive image sizes
* Efficient data requests
* Virtualization only when genuinely necessary

---

# 9. Content Volume

The template must be capable of handling meaningful content volume.

Examples:

```text
10 products
50 products
100 products
```

or:

```text
10 projects
50 projects
```

The correct implementation strategy depends on the actual content volume.

Do not over-engineer a page containing 8 items.

Do not assume a page with 200 items can be rendered using the same approach without testing.

---

# 10. Listing Pagination

Pagination may be used when:

* Content volume is large.
* Page size becomes expensive.
* SEO requires controlled crawlable pages.
* User experience benefits from smaller result sets.

The pagination implementation must remain compatible with:

* Routing
* SEO
* Analytics
* Responsive design

---

# 11. Load More

A Load More interaction may be used when it improves the approved UI.

It should:

* Fetch only necessary additional content.
* Avoid duplicating content.
* Preserve scroll position appropriately.
* Maintain accessible focus behavior.
* Track useful analytics if required.

Do not use Load More simply because the AI prefers it over pagination.

---

# 12. Infinite Scroll

Infinite scrolling should not be the default.

Use only when:

* The approved UI requires it.
* It provides a clear UX benefit.
* SEO impact is understood.
* Navigation remains usable.
* Content remains accessible.

For many business websites, pagination or Load More is safer and easier to maintain.

---

# 13. Product Catalog Performance

Product-heavy websites can become image-heavy.

Required:

```text
[ ] Responsive product images
[ ] Lazy loading below the fold
[ ] Thumbnail variants
[ ] Correct image dimensions
[ ] Optimized product cards
[ ] Limited initial result count where appropriate
```

Do not send full-resolution product images to small product cards.

---

# 14. Product Detail Performance

A Product Detail page may contain:

* Large image gallery
* Specifications
* Downloads
* Related products
* Related services
* Videos
* Inquiry forms

Prioritize:

```text
Product title
Primary image
Primary information
Primary CTA
```

Then load supporting media and related content efficiently.

---

# 15. Product Gallery Performance

For large galleries:

```text
Primary Image
      ↓
Optimized Thumbnail
      ↓
Large Image Only When Needed
```

Do not load every full-resolution image into memory unnecessarily.

---

# 16. Project Gallery Performance

Project pages may be among the heaviest pages in Business Growth.

Requirements:

```text
[ ] Gallery images optimized
[ ] Responsive image variants
[ ] Lazy loading
[ ] Appropriate image dimensions
[ ] Lightbox images loaded when requested where practical
[ ] No duplicate image downloads
```

---

# 17. Lightbox Performance

A lightbox should not require all full-resolution images to load immediately.

Preferred behavior:

```text
Thumbnail
   ↓
User Opens Image
   ↓
Load Large Version
```

Where the approved UI allows this approach.

---

# 18. Image Preloading Strategy

Do not preload every gallery image.

Preload only assets likely to be required immediately.

Examples:

```text
Hero image
Primary product image
Primary project image
```

Avoid:

```text
Preload all 30 project images
```

---

# 19. Image Variants

The component architecture should support appropriate variants:

```text
thumbnail
small
medium
large
hero
```

The actual names may differ.

A product card should not necessarily use the same file as a full-screen project lightbox.

---

# 20. Image Focal Points

Where images are heavily cropped across layouts, support focal-point control where appropriate.

This prevents important subjects from being incorrectly positioned on:

* Mobile
* Desktop
* Cards
* Hero sections

---

# 21. Video Performance

Business Growth may include promotional videos.

Videos can significantly increase page weight.

Requirements:

```text
[ ] Poster image
[ ] Deferred loading where possible
[ ] Efficient encoding
[ ] No unnecessary autoplay
[ ] Muted autoplay if approved
[ ] External embed considered
[ ] Mobile behavior tested
```

---

# 22. Video Loading

Prefer:

```text
Poster
   ↓
User interaction
   ↓
Video load/play
```

where appropriate.

Do not automatically download large videos before the visitor requests them.

---

# 23. External Video Embeds

Third-party video embeds may add:

* JavaScript
* Network requests
* Cookies
* Tracking
* Large resources

Consider a lightweight facade:

```text
Poster Image
      ↓
User Click
      ↓
Load Embedded Player
```

where compatible with the approved UI.

---

# 24. Downloadable Resources

Large PDF/document resources should not block page rendering.

The webpage should load independently of the document download.

For example:

```text
Product Page
   ↓
Document Card
   ↓
User Clicks Download
   ↓
Document Requested
```

Do not preload large PDFs unnecessarily.

---

# 25. PDF / Resource Performance

Review:

```text
[ ] File size
[ ] Appropriate compression
[ ] Correct filename
[ ] Browser behavior
[ ] Mobile download
```

Do not attempt to render extremely large documents directly into the page unless required.

---

# 26. Rich Text Performance

Blog/article pages may contain:

* Images
* Tables
* Embeds
* Links
* Quotes

Long-form pages should avoid unnecessarily complex DOM structures.

Use semantic and efficient markup.

---

# 27. Article Image Loading

For articles:

* Featured image should be prioritized appropriately.
* Below-the-fold images should be lazy-loaded.
* Large images should have responsive variants.
* Images should reserve layout space.

---

# 28. Related Content Performance

Related content should load efficiently.

Avoid:

```text
Article
  ↓
Load 20 related products
  ↓
Load 20 related services
  ↓
Load 20 related projects
```

when only 3–6 items are shown.

Fetch only the required content.

---

# 29. Component-Level Performance

Every reusable component should have a performance cost that is understood.

High-cost components include:

```text
Video
Map
Gallery
Lightbox
Search
Filters
Rich Editor/Viewer
Third-party widgets
```

These require special review.

---

# 30. Conditional Component Loading

Only load functionality when it is needed.

Example:

```text
If RFQ enabled:
    Load RFQ functionality

If Blog enabled:
    Load Blog functionality

If Map enabled:
    Load Map functionality
```

Do not ship unnecessary heavy functionality to clients who do not use it.

---

# 31. Module-Based Code Splitting

Business Growth's modular architecture should support code splitting.

Conceptually:

```text
Core
  ↓
Home
About
Contact

Optional Modules
  ↓
Products
Blog
Projects
Search
RFQ
```

An automotive project that does not use Blog should not unnecessarily load the entire blog feature.

---

# 32. Route-Level Code Splitting

Where appropriate:

```text
Home
About
Services
Products
Projects
Blog
Contact
```

can be loaded independently.

This reduces the initial JavaScript requirement.

---

# 33. Component-Level Lazy Loading

Heavy components may be lazy-loaded.

Examples:

```text
Map
Video
Lightbox
Search
Large Gallery
```

Only use dynamic loading when it provides a meaningful benefit.

Do not lazy-load every small component.

---

# 34. Conditional Rendering vs Code Loading

These are different:

```text
Conditional Rendering
```

means:

```text
Do not display component.
```

while:

```text
Code Splitting
```

means:

```text
Do not necessarily download component code.
```

Business Growth should use the appropriate technique based on actual performance needs.

---

# 35. API Performance

If a backend/API is used, avoid unnecessarily large responses.

Example:

Do not request:

```text
All 100 products
+
All specifications
+
All images
+
All relationships
```

when the listing only needs:

```text
Product ID
Name
Thumbnail
Category
Short Description
```

---

# 36. Listing API Responses

Listing endpoints should return summary information.

Example:

```text
Product Listing
→ id
→ title
→ slug
→ thumbnail
→ category
→ short description
```

Detailed specifications can be loaded on the Product Detail page.

---

# 37. Detail API Responses

Detail endpoints may provide richer information:

```text
Product Detail
→ full description
→ gallery
→ specifications
→ downloads
→ related products
→ related services
```

This keeps listing pages efficient.

---

# 38. API Pagination

When content can grow significantly, APIs should support pagination.

Example:

```text
GET /api/products?page=1&limit=20
```

The exact API design may differ.

Do not build pagination solely for theoretical scale.

---

# 39. API Filtering

Filtering should preferably happen at the appropriate layer.

For large datasets:

```text
Server-side filtering
```

may be more efficient than:

```text
Download everything
+
Filter in browser
```

For small static datasets, client-side filtering may be sufficient.

---

# 40. API Search

If search exists:

```text
Search Input
   ↓
Debounced Request where appropriate
   ↓
Server Search
   ↓
Results
```

Avoid sending a request on every keystroke without controls.

---

# 41. Search Debouncing

Search input may use debouncing to reduce unnecessary requests.

Example behavior:

```text
User types
   ↓
Wait briefly
   ↓
Request
```

The exact timing should be appropriate to the UI.

---

# 42. Filter Request Optimization

Do not send unnecessary requests when the user changes several filters rapidly.

Where appropriate:

* Debounce
* Batch
* Apply on confirmation

The choice should follow the approved interaction design.

---

# 43. Caching Content

Business Growth content is often relatively stable.

Potential cache candidates:

```text
Products
Services
Projects
Articles
Locations
Resources
```

Caching should be used where beneficial.

---

# 44. Cache Invalidation

When client content changes:

```text
Update
   ↓
Invalidate / Revalidate
   ↓
New Content Available
```

The exact strategy depends on the architecture.

Avoid indefinite stale content.

---

# 45. Static Content Strategy

If the project does not require a backend/CMS, static data may be appropriate.

Advantages:

* Simple
* Fast
* Low infrastructure
* Easy deployment
* Low operational complexity

Do not add a database merely because Business Growth has structured content.

---

# 46. Dynamic Content Strategy

Use a backend/database when required by:

* Large content volume
* Frequent updates
* Structured storage requirements
* Lead storage
* Search
* Filtering
* Future integrations

Architecture decisions should follow:

`10-system-architecture-and-technical-standards.md`

---

# 47. Database Performance

Where PostgreSQL is used:

* Select only required fields.
* Use appropriate indexes.
* Avoid N+1 queries.
* Avoid unnecessary joins.
* Paginate large collections.
* Cache stable public content where appropriate.

---

# 48. N+1 Prevention

Example:

Bad:

```text
Load 20 products
   ↓
20 separate category queries
```

Better:

```text
Load products
+
Relevant category relationships efficiently
```

Use the ORM/data layer appropriately.

---

# 49. Related Content Query Performance

Related-content queries should remain bounded.

Example:

```text
Related Products
LIMIT 4
```

rather than:

```text
Load every related product
```

when the UI only displays four.

---

# 50. Database Connection Management

If a backend is used:

```text
[ ] Connection pooling configured appropriately
[ ] Connections closed/reused correctly
[ ] No connection leaks
```

This becomes especially important when multiple dynamic pages are accessed simultaneously.

---

# 51. Third-Party Services

Business Growth may use more third-party services than Starter Presence.

Examples:

```text
Analytics
Maps
Social
Video
Forms
Email
CRM
Monitoring
```

Every third-party service must be evaluated for:

```text
Performance
Privacy
Reliability
Business value
```

---

# 52. Third-Party Script Budget

Before adding a script ask:

```text
Does the business need it?
Does the design require it?
Can the functionality be implemented without it?
What performance cost does it introduce?
```

Avoid adding:

```text
Five tracking tools
Three chat widgets
Multiple social widgets
Unnecessary animation libraries
```

---

# 53. Analytics Performance

Analytics must not block the primary experience.

Preferred:

```text
Page Render
   ↓
Useful Interaction
   ↓
Analytics
```

where appropriate.

Analytics failure must not break the website.

---

# 54. Maps Performance

Maps can be expensive.

Where a simple link is sufficient:

```text
Address
   ↓
Open Google Maps
```

may be more performant than embedding an interactive map.

For multi-location businesses, consider:

```text
Location Card
   ↓
Map only when required
```

The approved UI determines the final presentation.

---

# 55. Search Performance

Search should not load unnecessarily on every page.

If the search interface is optional:

```text
User Opens Search
    ↓
Load Search Interface
```

may be appropriate.

---

# 56. Filter Performance

Filtering small static datasets:

```text
Client-side filtering
```

may be sufficient.

Filtering large datasets:

```text
Server-side filtering
```

may be more appropriate.

The architecture should be chosen according to actual content volume.

---

# 57. Form Performance

Forms should not depend on excessive third-party validation scripts.

Prefer:

```text
HTML validation
+
Small client-side validation
+
Server-side validation
```

where a backend exists.

---

# 58. Lead Generation Priority

Because lead generation is a core Business Growth capability:

```text
Performance optimization
must never
break lead submission.
```

If analytics, maps, social widgets, or animations fail:

```text
RFQ
Contact
Inquiry
Phone
Email
WhatsApp
```

must remain usable.

---

# 59. RFQ Performance

RFQ forms should:

* Load quickly.
* Use minimal JavaScript.
* Validate efficiently.
* Submit efficiently.
* Avoid unnecessary API calls.
* Provide fast feedback.

If dynamic context is required:

```text
Product Page
   ↓
RFQ
```

the product context should be passed efficiently.

---

# 60. Performance of Conditional Fields

Conditional fields should ideally remain lightweight.

Do not load entire additional libraries when one field is selected.

Example:

```text
Select Product
   ↓
Show Product Selection
```

should not require a large application bundle if a simple component can handle it.

---

# 61. Mobile Performance Priority

Mobile receives special attention because Business Growth pages may include:

* Images
* Video
* Grids
* Forms
* Tables
* Sticky CTAs
* Filters

Verify:

```text
[ ] Fast first render
[ ] Responsive scrolling
[ ] No heavy main-thread work
[ ] Images optimized
[ ] Forms responsive
[ ] Sticky CTA does not cause jank
```

---

# 62. Mobile Network Considerations

Test under slower mobile conditions.

Focus on:

```text
Initial content
Hero image
Navigation
Primary CTA
Product/service content
Contact/RFQ
```

The user should not need to wait for every below-the-fold resource before interacting.

---

# 63. Responsive Image Strategy

Business Growth should support:

```text
Thumbnail
Mobile
Tablet
Desktop
Retina / high-density
```

where appropriate.

The browser should select an appropriate source rather than always downloading the largest asset.

---

# 64. Image Format Strategy

Preferred where supported:

```text
AVIF
WebP
```

Other formats may remain appropriate depending on:

* Transparency
* Browser requirements
* Asset type
* Source quality

---

# 65. Font Strategy

Business Growth may have more UI states and metadata, but it should not require many font families.

Recommended:

```text
Primary family
+
Optional secondary / technical family
```

Only approved families should be loaded.

---

# 66. Font Weight Strategy

Load only required weights.

Example:

```text
Regular
Medium
Semibold
Bold
```

Do not load every possible weight.

---

# 67. JavaScript Budget

The initial application should contain only what is necessary.

Avoid shipping:

```text
Product module
Blog module
Search module
Booking module
CRM module
```

to a project that only enables:

```text
Services
Projects
RFQ
```

where architectural code splitting makes this avoidable.

---

# 68. Feature Flag Performance

Module configuration should not only hide UI.

Where practical:

```text
Disabled Feature
    ↓
No unnecessary execution
    ↓
No unnecessary data requests
    ↓
No unnecessary third-party scripts
```

---

# 69. Client-Specific Build Optimization

For every client project:

```text
Select Modules
   ↓
Remove / Exclude Unused Features
   ↓
Build
   ↓
Test
```

Do not ship the full agency template blindly to every client.

---

# 70. Template Performance Regression

Changes to the agency template can affect multiple clients.

Before promoting a reusable template change:

```text
Change
  ↓
Test Component
  ↓
Test Template
  ↓
Test Representative Project
  ↓
Measure Performance
  ↓
Release
```

---

# 71. Component Performance Budget

High-cost components should be identified.

Example:

```text
Low cost:
Button
Card
Badge
Text

Medium:
Gallery
Filter
Accordion

High:
Video
Map
Search
Large table
Rich editor/viewer
Third-party widget
```

High-cost components require deliberate loading strategies.

---

# 72. DOM Complexity

Large content grids should avoid unnecessary nesting.

Prefer:

```text
Grid
 └── Card
      ├── Image
      ├── Content
      └── CTA
```

over deeply nested wrapper structures.

---

# 73. Rendering Efficiency

React components should avoid unnecessary rerendering.

Use appropriate techniques such as:

* Stable props
* Localized state
* Memoization where justified
* Efficient list keys
* Appropriate component boundaries

Do not add memoization everywhere without evidence.

---

# 74. List Rendering

Lists such as:

* Products
* Services
* Projects
* Articles
* Locations

should use stable keys.

Avoid using array indexes as keys when content can reorder or change.

---

# 75. State Management Performance

Avoid global state for data that belongs only to one component.

Example:

```text
RFQ form state
```

does not need to become global application state unless another part of the application genuinely depends on it.

---

# 76. Client-Side Filtering Performance

For small datasets:

```text
Client loads data
   ↓
Local filter
```

may be efficient.

For large datasets:

```text
User filters
   ↓
API request
   ↓
Filtered results
```

may be better.

Do not choose one strategy universally.

---

# 77. Search Index Performance

If internal search is implemented:

Small dataset:

```text
Client-side search
```

Large dataset:

```text
Server-side search
```

Very large/complex search may require:

```text
Dedicated search service
```

which is outside the default package scope unless explicitly approved.

---

# 78. Static Asset Caching

Static assets should use appropriate cache policies.

Potential candidates:

```text
Images
Fonts
JS
CSS
Icons
```

Hashed build assets should receive appropriate long-lived caching where supported.

---

# 79. API Caching

Public, relatively stable data may be cached.

Examples:

```text
Services
Products
Projects
Articles
Locations
```

Do not cache private or rapidly changing lead information incorrectly.

---

# 80. Prefetching

Prefetching may improve navigation speed where appropriate.

Use only for likely next actions.

Avoid prefetching huge resources that the user may never visit.

---

# 81. Route Prefetching

Possible strategy:

```text
User hovers / indicates intent
       ↓
Prefetch likely page
```

This should only be used if it does not meaningfully increase bandwidth usage.

---

# 82. Resource Priority

Prioritize:

```text
Critical HTML
Critical CSS
Hero content
Primary images
Fonts
Primary JavaScript
```

Then:

```text
Below-the-fold
Optional images
Videos
Third-party resources
```

---

# 83. Layout Stability

Business Growth pages frequently include:

* Product images
* Project images
* Logos
* Download cards
* Ads/promotions where applicable

All media should reserve appropriate space.

Target:

```text
Minimize CLS
```

---

# 84. Dynamic Content Layout Stability

When content arrives asynchronously:

```text
Reserve space
    ↓
Render content
```

Avoid:

```text
Blank
   ↓
Content suddenly appears
   ↓
Everything moves
```

---

# 85. Skeletons

Skeleton loading may be appropriate for:

* Product listing
* Project listing
* Search results
* Dynamic dashboards if they existed

But avoid overusing skeletons for simple static pages.

A static page does not need an elaborate loading screen.

---

# 86. Loading Strategy by Template

### Static Company Page

Prefer immediate rendering.

### Product Listing

Skeleton or progressive loading may be appropriate.

### Search

Loading indicator appropriate.

### RFQ

Submit loading state required.

### Blog Listing

Progressive rendering/pagination may be appropriate.

### Project Gallery

Lazy-loaded images preferred.

---

# 87. Error Resilience

Performance optimization must not create fragile behavior.

If an image fails:

```text
Page remains usable.
```

If analytics fails:

```text
Website remains usable.
```

If related content fails:

```text
Main content remains usable.
```

If a recommendation API fails:

```text
Do not block primary content.
```

---

# 88. Third-Party Failure Isolation

Third-party services should be isolated from core website functionality where possible.

Example:

```text
Analytics fails
    ↓
Lead form continues working

Map fails
    ↓
Address and Directions link remain available
```

---

# 89. Graceful Degradation

Business Growth should retain core usefulness when optional systems fail.

Core functionality:

```text
Navigation
Content
Contact
Lead generation
```

Optional functionality:

```text
Analytics
Video
Map
Social widgets
Related content
```

Optional failures must not destroy core functionality.

---

# 90. Performance Testing Tools

Use appropriate tools:

```text
Lighthouse
Chrome DevTools
PageSpeed Insights
WebPageTest
Network panel
Performance panel
```

For backend/API projects:

```text
Load testing tool
API performance tooling
Database query analysis
```

Only use tools appropriate to the architecture.

---

# 91. Core Web Vitals

Target:

```text
LCP < 2.5s
INP < 200ms
CLS < 0.1
```

These remain target goals, not absolute guarantees under all conditions.

---

# 92. Template-Level Performance Testing

Every enabled template should be tested.

Example:

```text
[ ] Home
[ ] Services
[ ] Service Detail
[ ] Products
[ ] Product Detail
[ ] Projects
[ ] Project Detail
[ ] Blog
[ ] Article
[ ] RFQ
[ ] Contact
```

Only test templates actually implemented in the project.

---

# 93. Content Volume Testing

Test representative content volume.

Example:

```text
10 products
50 products
100 products
```

where the project requires large collections.

Test:

```text
[ ] Rendering
[ ] Filtering
[ ] Search
[ ] Pagination
[ ] Image loading
[ ] API speed
```

---

# 94. RFQ Stress Testing

Where RFQ is implemented:

Test:

```text
[ ] Multiple users
[ ] Repeated submissions
[ ] Invalid submissions
[ ] Long messages
[ ] Large but permitted attachments
[ ] Rate limits
[ ] API response
[ ] Database behavior where applicable
```

Do not perform aggressive tests against production without authorization.

---

# 95. Lead System Performance Testing

The complete path:

```text
CTA
 ↓
Form
 ↓
Validation
 ↓
API
 ↓
Processing
 ↓
Delivery
```

should be tested.

Measure:

```text
Response time
Failure rate
Network requests
```

where appropriate.

---

# 96. Database Stress Testing

For projects with database-backed content or leads:

Test:

```text
Concurrent reads
Concurrent submissions
Large content lists
Search/filter operations
```

Check:

```text
CPU
Memory
Database connections
Query response
Error rate
```

---

# 97. Caching and Staleness Testing

If caching exists:

```text
Content Updated
    ↓
Cache Invalidation/Revalidation
    ↓
New Content Appears
```

Test that updated:

* Products
* Services
* Projects
* Articles

do not remain incorrectly stale.

---

# 98. Performance Regression Testing

Performance must be reviewed after:

* New module
* New dependency
* New image collection
* Video addition
* Search addition
* Filtering
* Analytics change
* Third-party integration
* Major design animation
* API change

---

# 99. Performance Checklist — Development

```text
[ ] Approved UI preserved
[ ] Images optimized
[ ] Responsive images implemented
[ ] Hero optimized
[ ] Fonts optimized
[ ] JavaScript reviewed
[ ] Dependencies reviewed
[ ] Code splitting considered
[ ] Third-party scripts reviewed
[ ] API responses reviewed
[ ] Database queries reviewed where applicable
[ ] Caching considered
[ ] Module loading reviewed
```

---

# 100. Performance Checklist — Content

```text
[ ] Product images optimized
[ ] Project images optimized
[ ] Property images optimized
[ ] Vehicle images optimized
[ ] Hotel images optimized
[ ] Tour images optimized
[ ] Article images optimized
[ ] Download files reviewed
[ ] Videos optimized
[ ] No unnecessary duplicate media
```

---

# 101. Performance Checklist — Lead Generation

```text
[ ] Contact form loads quickly
[ ] RFQ loads quickly
[ ] Validation is efficient
[ ] Submission is efficient
[ ] Third-party scripts do not block forms
[ ] Analytics does not block submission
[ ] Error states are lightweight
[ ] Success state is fast
```

---

# 102. Performance Checklist — QA

```text
[ ] Homepage tested
[ ] Listing pages tested
[ ] Detail pages tested
[ ] Blog tested
[ ] RFQ tested
[ ] Contact tested
[ ] Mobile tested
[ ] Desktop tested
[ ] Slow connection tested
[ ] Image loading tested
[ ] Search tested where applicable
[ ] Filters tested where applicable
[ ] Video tested where applicable
```

---

# 103. Production Performance Checklist

Before launch:

```text
[ ] Production build tested
[ ] Production assets reviewed
[ ] Large files identified
[ ] Hero verified
[ ] Images optimized
[ ] Third-party scripts reviewed
[ ] Analytics reviewed
[ ] Maps reviewed
[ ] Video reviewed
[ ] API reviewed
[ ] Database reviewed
[ ] Core Web Vitals reviewed
```

---

# 104. Performance Acceptance Criteria

A Business Growth project is performance-ready when:

```text
[✓] Approved design is preserved
[✓] Core pages load efficiently
[✓] Critical content is prioritized
[✓] Images are optimized
[✓] Rich media is controlled
[✓] Product/project listings are efficient
[✓] Detail pages do not load unnecessary content
[✓] Modules are loaded appropriately
[✓] Third-party scripts are controlled
[✓] Lead generation remains responsive
[✓] Mobile performance is usable
[✓] Performance has been tested on the production build
[✓] Major performance regressions are resolved
```

---

# 105. AI Performance Rules

The AI coding agent must:

```text
[ ] Read this document before optimizing
[ ] Preserve the approved UI
[ ] Optimize implementation, not redesign
[ ] Reuse existing components
[ ] Avoid unnecessary dependencies
[ ] Avoid unnecessary JavaScript
[ ] Optimize media
[ ] Avoid unnecessary API requests
[ ] Respect module configuration
[ ] Use appropriate lazy loading
[ ] Avoid lazy-loading critical content
[ ] Preserve lead-generation functionality
[ ] Test after optimization
```

---

# 106. AI Must Not Optimize by Removing Business Value

The AI must not solve a performance problem by silently:

```text
Removing products
Removing projects
Removing testimonials
Removing RFQ
Removing blog
Removing detail content
Removing important imagery
Removing approved animation
Removing mobile functionality
```

The correct approach is:

```text
Identify Bottleneck
      ↓
Optimize Implementation
      ↓
Measure
      ↓
Retest
```

---

# 107. AI Must Not Create Performance Architecture Without Need

The AI must not automatically introduce:

* CDN architecture
* Redis
* Complex caching layers
* Dedicated search infrastructure
* Microservices
* Serverless pipelines
* Multiple databases

just because the website contains more content.

Architecture must follow actual requirements and measurable need.

---

# 108. Template-Level Performance Reuse

The agency should optimize reusable components once so that multiple projects benefit.

Example:

```text
ProductCard Optimization
        ↓
All Product Projects Benefit
```

```text
Image Component Optimization
        ↓
Products
Projects
Properties
Vehicles
Hotels
Tours
Benefit
```

This is one of the major advantages of the Business Growth template architecture.

---

# 109. Performance Documentation

For significant performance decisions, document:

```text
Problem:
Observed Performance Issue:

Cause:
Identified Bottleneck:

Solution:
Implemented Optimization:

Result:
Observed Change:

Trade-off:
Any impact on UX or architecture:
```

Do not claim improvements without measuring them.

---

# 110. Performance Monitoring

Where maintenance includes monitoring, periodically review:

```text
Availability
Performance
Core Web Vitals
Asset weight
API response time
Error rate
```

Monitoring should focus on real business impact.

---

# 111. Performance Maintenance

Possible maintenance tasks:

* Image optimization
* Dependency review
* Bundle review
* Third-party script review
* Database optimization
* API optimization
* Cache review
* Video optimization
* Core Web Vitals review

---

# 112. Performance and Content Updates

When a client adds:

```text
100 new product images
20 project photos
5 videos
50 articles
```

performance should be reviewed.

Content growth is one of the primary reasons Business Growth requires ongoing maintenance.

---

# 113. Performance and Design Updates

If the approved UI changes to introduce:

* Larger images
* Background video
* More animations
* More complex filters
* More interactive galleries

perform a new performance review.

---

# 114. Final Business Growth Performance Architecture

The complete optimization model is:

```text
                 BUSINESS GROWTH
                       │
              ┌────────┴─────────┐
              │                  │
          CONTENT             FEATURES
              │                  │
     Products / Projects     RFQ / Search
     Services / Articles     Filters / Media
              │                  │
              └────────┬─────────┘
                       ↓
               PERFORMANCE LAYER
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
      Assets        JavaScript      Network
        │              │              │
    Images/Video    Code Splitting   API/Cache
        │              │              │
        └──────────────┼──────────────┘
                       ↓
                 USER EXPERIENCE
                       │
              Fast + Stable + Useful
```

---

# 115. Final Principle

Business Growth should be richer than Starter Presence without becoming unnecessarily heavy.

The objective is:

```text
More Content
+
More Capability
+
More Lead Generation
+
More Marketing
        ↓
WITHOUT
        ↓
Unnecessary Complexity
+
Unnecessary JavaScript
+
Unoptimized Media
+
Excessive Third Parties
```

The correct performance strategy is:

> **Build the richer experience efficiently, load only what the client needs, prioritize meaningful business interactions, and continuously verify that added content and features do not degrade the user experience.**

Performance is therefore not a reason to reduce the Business Growth package.

It is a requirement for implementing the package properly.

```
```
