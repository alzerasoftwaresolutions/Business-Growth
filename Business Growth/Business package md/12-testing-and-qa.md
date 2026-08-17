# `12-testing-and-qa.md`

````md
# Business Growth
# Testing & Quality Assurance Standards

**Document:** 12-testing-and-qa.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines the testing and Quality Assurance (QA) standards for the Business Growth package.

Business Growth introduces substantially more functionality than Starter Presence, including:

- Multiple page templates
- Structured content
- Product catalogs
- Service catalogs
- Project portfolios
- Detail pages
- Blog/news
- Resources and downloads
- Search
- Filtering
- Rich media
- Multiple locations
- Lead-generation forms
- RFQ
- Product/service inquiries
- Industry-specific inquiry flows
- Analytics
- Dynamic content
- Optional backend APIs
- Optional databases
- Optional third-party integrations

Because of this increased complexity, testing must verify not only whether individual pages work, but whether the entire template system behaves correctly across different clients, modules, content types, devices, and business workflows.

The objective is:

> **Deliver a website that works correctly, matches the approved design, handles realistic content, supports the client's business goals, and can be safely maintained after launch.**

---

# 2. Relationship to Starter Presence

The foundational QA standards from Starter Presence remain applicable.

These include testing of:

- Navigation
- Links
- Forms
- Responsive design
- Content
- Performance
- Security
- Browser compatibility
- Production deployment

Reference:

`Starter Presence / 08-testing-and-qa.md`

Business Growth does not repeat those requirements unnecessarily.

This document adds the expanded testing required for:

- Reusable templates
- Configurable modules
- Dynamic content
- Lead-generation workflows
- RFQ
- Search
- Filtering
- Structured content
- Detail pages
- File uploads
- Third-party integrations
- Larger content sets
- Industry-specific workflows

---

# 3. QA Philosophy

Testing must answer four questions:

```text
1. Does it work?

2. Does it work as designed?

3. Does it work with real client content?

4. Does it continue to work when the system changes?
````

A feature is not complete merely because it works under ideal developer conditions.

---

# 4. Definition of Quality

A Business Growth project is considered high quality when:

```text
Functionality
      +
Visual Fidelity
      +
Content Accuracy
      +
Responsive Behavior
      +
Accessibility
      +
Performance
      +
Security
      +
SEO
      +
Lead Generation
      +
Production Reliability
```

meet the agreed project requirements.

---

# 5. QA Layers

Testing should occur at multiple levels:

```text
Unit / Component
       ↓
Feature
       ↓
Template
       ↓
Integration
       ↓
Content
       ↓
Responsive
       ↓
Browser
       ↓
Performance
       ↓
Security
       ↓
End-to-End
       ↓
Production
       ↓
Client Acceptance
```

Not every project needs a large automated test suite, but every relevant layer must be considered.

---

# 6. Test Scope

Before testing begins, define the actual enabled scope.

Example:

```text
Enabled:
✓ Services
✓ Service Detail
✓ Products
✓ Product Detail
✓ Projects
✓ Blog
✓ RFQ
✓ Contact

Disabled:
✗ Properties
✗ Vehicles
✗ Locations
✗ Team
```

Only enabled functionality needs to be included in the project's final test scope.

---

# 7. Test Matrix

Each project should maintain a test matrix.

Example:

| Area     | Required | Tested | Result | Notes |
| -------- | -------: | -----: | ------ | ----- |
| Home     |        ✓ |    [ ] | —      |       |
| Services |        ✓ |    [ ] | —      |       |
| Products |        ✓ |    [ ] | —      |       |
| Projects |        ✓ |    [ ] | —      |       |
| Blog     |        ✓ |    [ ] | —      |       |
| RFQ      |        ✓ |    [ ] | —      |       |
| Contact  |        ✓ |    [ ] | —      |       |

---

# 8. Test Severity

Issues should be classified.

## Critical

Prevents the primary website or business flow from working.

Examples:

* Website does not load
* RFQ cannot submit
* Production API unavailable
* Major data leak
* Broken deployment
* Mobile site unusable

## High

Major functionality is significantly broken.

Examples:

* Product detail pages fail
* Navigation breaks
* Search fails completely
* Most images are missing

## Medium

Important but non-blocking issue.

Examples:

* Filter state incorrectly persists
* Minor form validation problem
* Incorrect responsive spacing

## Low

Minor issue with limited impact.

Examples:

* Small spacing difference
* Minor icon alignment
* Non-critical visual inconsistency

---

# 9. Severity vs Priority

Severity describes impact.

Priority describes urgency.

Example:

```text
Low Severity
High Priority
```

may occur if a client specifically requires a visual issue to be fixed before launch.

---

# 10. Defect Lifecycle

Use:

```text
Open
  ↓
Assigned
  ↓
In Progress
  ↓
Fixed
  ↓
Retest
  ↓
Passed
```

If the issue remains:

```text
Retest
  ↓
Failed
  ↓
Reopened
```

---

# 11. Test Environment

Test in environments appropriate to the project:

```text
Local
Preview / Staging
Production
```

Do not use production as the primary development testing environment.

---

# 12. Environment Verification

Before testing:

```text
[ ] Correct environment
[ ] Correct API
[ ] Correct database where applicable
[ ] Correct assets
[ ] Correct environment variables
[ ] Correct analytics configuration
[ ] Correct domain where applicable
```

---

# 13. Test Data Strategy

Testing should use realistic but safe data.

Use:

```text
Synthetic Test Data
Client-Approved Sample Data
Approved Production Content for final verification
```

Do not use real sensitive customer information unnecessarily.

---

# 14. Test Data by Sector

The test dataset should reflect the client.

Examples:

### Automotive

* Multiple vehicle models
* Different specifications
* Different availability states

### Manufacturing

* Multiple products
* Multiple categories
* Technical specifications
* Downloads

### Construction

* Multiple projects
* Different categories
* Project metadata
* Galleries

### Healthcare

* Multiple services
* Departments
* Specialists
* Appointment request

### Education

* Multiple programs
* Departments
* Events
* Information request

The objective is to test the template using realistic structures, not artificial placeholder data alone.

---

# 15. Component Testing

Reusable components should be tested independently where practical.

Examples:

```text
Button
ProductCard
ServiceCard
ProjectCard
TestimonialCard
LocationCard
RFQForm
Search
Filter
Gallery
DownloadCard
```

---

# 16. Component Test States

Test components with:

```text
Default
Hover
Focus
Active
Disabled
Loading
Error
Success
```

where applicable.

---

# 17. Component Data Testing

Every reusable component should be tested with:

```text
Complete data
Partial data
Missing optional data
Long content
Short content
Unexpected but valid values
```

Example:

```text
ProductCard
→ short title

ProductCard
→ very long title
```

Verify that the layout remains stable.

---

# 18. Component Variant Testing

Where a component has variants:

```text
ProductCard
  → standard
  → featured
  → compact
```

test every enabled variant.

Do not assume a variant works because the base component works.

---

# 19. Conditional Rendering Tests

For optional content:

```text
Testimonials enabled
```

verify:

```text
Testimonials appear correctly.
```

Then test:

```text
Testimonials disabled
```

verify:

```text
No empty testimonial section remains.
```

---

# 20. Module Testing

Every enabled module should be tested both independently and in combination with related modules.

Example:

```text
Products
+
Product Detail
+
RFQ
+
Related Services
```

must work together.

---

# 21. Template Testing

Every selected page template must be tested.

Examples:

```text
Home
About
Services
Service Detail
Products
Product Detail
Projects
Project Detail
Blog
Article
RFQ
Contact
```

Only templates used by the project require full production acceptance testing.

---

# 22. Template Data Testing

Each template must be tested with:

```text
Minimum content
Normal content
Large content
Missing optional content
Long content
Multiple entries
```

---

# 23. Product Template Testing

Verify:

```text
[ ] Product listing loads
[ ] Category works
[ ] Product detail loads
[ ] Images load
[ ] Specifications render
[ ] Downloads work
[ ] Related products work
[ ] Inquiry works
[ ] Invalid product URL handled
```

---

# 24. Service Template Testing

Verify:

```text
[ ] Service listing works
[ ] Categories work where enabled
[ ] Service detail works
[ ] Process renders
[ ] Capabilities render
[ ] Related projects work
[ ] Inquiry works
```

---

# 25. Project Template Testing

Verify:

```text
[ ] Project listing works
[ ] Categories/filters work
[ ] Project detail loads
[ ] Metadata correct
[ ] Gallery works
[ ] Challenge/solution works where included
[ ] Results display correctly
[ ] Related content works
[ ] Inquiry CTA works
```

---

# 26. Article Template Testing

Verify:

```text
[ ] Article listing works
[ ] Categories work
[ ] Article page loads
[ ] Author displays correctly
[ ] Date displays correctly
[ ] Images work
[ ] Rich text renders correctly
[ ] Related articles work
[ ] CTA works
```

---

# 27. Location Template Testing

Where enabled:

```text
[ ] Location listing
[ ] Location detail
[ ] Address
[ ] Phone
[ ] Hours
[ ] Map
[ ] Directions
[ ] Branch CTA
```

---

# 28. Industry-Specific Template Testing

Where a sector-specific template is enabled, test all relevant specialized components.

Examples:

### Automotive

```text
Vehicle Grid
Vehicle Detail
Vehicle Specifications
Test Drive Request
```

### Hotel

```text
Accommodation
Facilities
Amenities
Inquiry
```

### Healthcare

```text
Medical Services
Specialists
Departments
Appointment Request
```

### Education

```text
Programs
Departments
Faculty
Information Request
```

### Real Estate

```text
Property Grid
Property Detail
Specifications
Property Inquiry
```

The actual tests must follow the selected project scope.

---

# 29. Content Testing

Verify:

```text
[ ] Correct company name
[ ] Correct descriptions
[ ] Correct services
[ ] Correct products
[ ] Correct projects
[ ] Correct contact information
[ ] Correct dates
[ ] Correct statistics
[ ] Correct certifications
[ ] Correct testimonials
```

---

# 30. No Placeholder Content

Search the final website for:

```text
Lorem ipsum
Placeholder
Coming soon
Example text
Test
Sample
John Doe
Product Name
Company Name
```

unless intentionally approved content.

---

# 31. Content Length Testing

Test long content.

Examples:

```text
Long product title
Long service description
Long project title
Long certification name
Long article title
Long location name
```

Verify:

```text
[ ] No clipping
[ ] No overflow
[ ] No broken cards
[ ] No accidental horizontal scrolling
```

---

# 32. Content Relationship Testing

Verify relationships.

Example:

```text
Product
 ↓
Related Services
```

Confirm that the related service actually exists.

Also verify:

```text
Project
 ↓
Related Service
```

and:

```text
Article
 ↓
Related Product
```

where applicable.

---

# 33. Broken Relationship Testing

Test what happens when:

```text
Referenced content is deleted
Referenced content is archived
Referenced content ID is invalid
```

The page should fail gracefully.

---

# 34. Navigation Testing

Verify:

```text
[ ] Logo
[ ] Main navigation
[ ] Mobile navigation
[ ] Dropdowns
[ ] Breadcrumbs
[ ] Footer links
[ ] CTA links
```

---

# 35. Navigation Configuration Testing

Disable a module.

Example:

```text
Blog = false
```

Verify:

```text
[ ] Blog removed from navigation
[ ] Blog removed from footer where applicable
[ ] Blog URLs handled correctly
[ ] No empty Blog links
```

---

# 36. Route Testing

Test every route.

For example:

```text
/
 /about
 /services
 /services/:slug
 /products
 /products/:slug
 /projects
 /projects/:slug
 /blog
 /blog/:slug
 /rfq
 /contact
```

---

# 37. Dynamic Route Testing

Test:

```text
Valid slug
Invalid slug
Missing slug
Uppercase input
Special characters
Archived content
```

Verify correct behavior.

---

# 38. 404 Testing

Test invalid routes.

Example:

```text
/random-invalid-page
```

Verify:

```text
[ ] 404 page appears
[ ] Useful navigation provided
[ ] No server stack trace
[ ] Correct status code where applicable
```

---

# 39. Redirect Testing

If content URLs were changed:

```text
Old URL
 ↓
Expected Redirect
 ↓
New URL
```

Verify:

```text
[ ] Correct destination
[ ] No redirect loop
[ ] No unnecessary chain
```

---

# 40. Breadcrumb Testing

Verify breadcrumbs match the actual route.

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

The breadcrumb must not reference nonexistent levels.

---

# 41. Search Testing

Where enabled, test:

```text
Exact term
Partial term
Uppercase/lowercase
No results
Special characters
Long query
Empty query
```

Verify:

```text
[ ] Results relevant
[ ] No crashes
[ ] No private content exposed
[ ] No duplicate results
[ ] Search analytics works if configured
```

---

# 42. Search Performance Testing

Test:

```text
Small content set
Large content set
Many simultaneous queries
Slow network
```

Where a backend exists, review API response time.

---

# 43. Filter Testing

For each filter:

```text
[ ] Apply
[ ] Remove
[ ] Reset
[ ] Multiple filters
[ ] No results
[ ] Mobile behavior
```

---

# 44. Filter Combination Testing

Test combinations.

Example:

```text
Category = Industrial
+
Application = Manufacturing
```

Verify that results satisfy both conditions.

---

# 45. Filter URL Testing

If filters modify the URL:

Verify:

```text
[ ] URL is stable
[ ] Refresh works
[ ] Back button works
[ ] Direct URL works
[ ] SEO behavior is correct
```

---

# 46. Product Inquiry Testing

From a Product Detail page:

```text
Product
 ↓
Request Quote
 ↓
RFQ
 ↓
Submit
```

Verify the product context is preserved correctly.

---

# 47. Service Inquiry Testing

From Service Detail:

```text
Service
 ↓
Request Consultation
 ↓
Form
 ↓
Submit
```

Verify:

```text
[ ] Service context
[ ] Correct destination
[ ] Correct analytics
```

---

# 48. Project Inquiry Testing

If enabled:

```text
Project
 ↓
Discuss Project
 ↓
Inquiry
```

Verify the project context.

---

# 49. RFQ Testing

Test:

```text
[ ] Valid submission
[ ] Empty required fields
[ ] Invalid email
[ ] Invalid phone where validated
[ ] Long message
[ ] Optional fields
[ ] Conditional fields
[ ] File upload where enabled
[ ] Success state
[ ] Error state
```

---

# 50. RFQ Context Testing

Test RFQ entry points:

```text
Homepage
Product Detail
Service Detail
Project Detail
Contact
Dedicated RFQ
```

Verify each produces the correct context.

---

# 51. Duplicate RFQ Testing

Test:

```text
Double-click submit
Refresh after submit
Back and resubmit
Repeated requests
```

The system should avoid unintended duplicate lead creation where applicable.

---

# 52. Form Validation Testing

Client-side:

```text
[ ] Required fields
[ ] Email
[ ] Length
[ ] Format
```

Server-side where applicable:

```text
[ ] Same logical rules
[ ] Malicious payload
[ ] Oversized input
```

---

# 53. Form Error Testing

Verify errors:

* Are understandable.
* Appear near the relevant field.
* Do not expose technical information.
* Preserve entered values where appropriate.

---

# 54. Form Success Testing

Verify:

```text
[ ] Submission confirmed
[ ] User understands next step
[ ] Duplicate submission prevented
[ ] Analytics event triggered
[ ] Lead routed correctly
```

---

# 55. Lead Routing Testing

For every lead type:

```text
Form
 ↓
Backend / Service
 ↓
Destination
```

Verify the expected destination.

Examples:

```text
RFQ
→ Sales

Appointment
→ Appointments

Education Inquiry
→ Admissions
```

---

# 56. Email Delivery Testing

Where forms use email:

```text
[ ] Correct recipient
[ ] Correct subject
[ ] Correct content
[ ] No leaked technical information
[ ] No arbitrary recipient manipulation
```

---

# 57. CRM Integration Testing

If a CRM is included:

```text
[ ] Authentication
[ ] Lead creation
[ ] Field mapping
[ ] Context mapping
[ ] Error handling
[ ] Retry behavior where applicable
```

Test using a safe test account.

---

# 58. File Upload Testing

Where enabled:

Test:

```text
Valid file
Invalid extension
Oversized file
Malformed file
Filename attack
Multiple files
Empty file
```

Verify:

```text
[ ] Rejected appropriately
[ ] Safe storage
[ ] No execution
[ ] Correct lead association
```

---

# 59. Media Testing

Test:

```text
Images
Video
Gallery
Lightbox
Downloads
```

Verify:

```text
[ ] Correct asset
[ ] Correct size
[ ] Correct crop
[ ] Loading behavior
[ ] Mobile behavior
```

---

# 60. Gallery Testing

Test:

```text
[ ] Open
[ ] Close
[ ] Next
[ ] Previous
[ ] Mobile
[ ] Keyboard
[ ] Touch swipe where supported
```

---

# 61. Video Testing

Verify:

```text
[ ] Poster
[ ] Play
[ ] Pause
[ ] Mobile
[ ] No unwanted autoplay sound
[ ] Failure behavior
[ ] External embed where applicable
```

---

# 62. Download Testing

For each important resource:

```text
[ ] Link works
[ ] Correct file
[ ] Correct filename
[ ] Correct file version
[ ] Public/private access correct
```

---

# 63. Browser Testing

Test modern versions of:

```text
Chrome
Edge
Firefox
Safari
```

Test on both:

```text
Desktop
Mobile where appropriate
```

---

# 64. Responsive Testing

Required viewport categories:

```text
Desktop
Laptop
Tablet
Mobile
```

Test both:

```text
Portrait
Landscape
```

where appropriate.

---

# 65. Responsive Layout Checklist

Verify:

```text
[ ] No horizontal scrolling
[ ] No clipped content
[ ] No overlapping elements
[ ] No broken grids
[ ] Correct typography
[ ] Correct images
[ ] Correct forms
[ ] Correct CTAs
```

---

# 66. Mobile Navigation Testing

Verify:

```text
[ ] Menu opens
[ ] Menu closes
[ ] Current page indicated
[ ] CTA accessible
[ ] Focus behavior
[ ] Scroll behavior
[ ] No background interaction when modal/panel is open
```

---

# 67. Mobile Filter Testing

If filters exist:

```text
[ ] Open filter
[ ] Select
[ ] Apply
[ ] Reset
[ ] Close
[ ] Results update
```

---

# 68. Mobile Form Testing

Test:

```text
[ ] Labels visible
[ ] Inputs fit viewport
[ ] Keyboard behavior
[ ] Select controls
[ ] File input
[ ] Validation messages
[ ] Submit button
```

---

# 69. Mobile Sticky CTA Testing

If used:

```text
[ ] Does not cover content
[ ] Does not cover form fields
[ ] Easy to tap
[ ] Correct destination
[ ] Correct hide/show behavior
```

---

# 70. Accessibility Testing

Test:

```text
[ ] Keyboard navigation
[ ] Focus visibility
[ ] Heading hierarchy
[ ] Labels
[ ] Alt text
[ ] Color contrast
[ ] Links
[ ] Buttons
[ ] Dialogs
[ ] Accordions
[ ] Forms
```

---

# 71. Keyboard Testing

Navigate without a mouse:

```text
Tab
Shift + Tab
Enter
Space
Arrow keys where appropriate
Escape
```

Verify logical focus order.

---

# 72. Screen Reader Testing

Where practical, test major workflows using a screen reader.

Review:

```text
Navigation
Headings
Forms
Buttons
Dialog
Errors
Success messages
```

---

# 73. Focus Management

Test:

```text
Open mobile menu
Open modal
Open lightbox
Submit form
Show validation error
```

Verify focus moves appropriately.

---

# 74. Color Dependency Testing

Important information must not depend only on color.

Example:

Bad:

```text
Green = valid
Red = invalid
```

without text/icon/state indication.

---

# 75. Text Scaling

Test increased browser/system text size where practical.

Verify content remains usable.

---

# 76. Performance QA

Performance testing should include:

```text
[ ] Lighthouse
[ ] Network requests
[ ] Image sizes
[ ] JavaScript size
[ ] Core Web Vitals
[ ] API response times where applicable
```

---

# 77. Slow Network Testing

Test with simulated slower connections.

Verify:

```text
[ ] Critical content appears
[ ] Layout stable
[ ] Images progressively load
[ ] Forms remain usable
[ ] No endless loading state
```

---

# 78. Performance Regression Testing

Compare performance after:

* New component
* New module
* New images
* New video
* New integration
* New package
* Large content update

---

# 79. Security QA

Security testing should verify:

```text
[ ] No exposed secrets
[ ] Input validation
[ ] XSS protection
[ ] SQL injection protection where applicable
[ ] CORS
[ ] Rate limiting
[ ] File upload controls
[ ] Authorization
[ ] Safe errors
```

Reference:

`09-security-standards.md`

---

# 80. API Security Testing

Where an API exists:

```text
[ ] Unauthorized access
[ ] Invalid token
[ ] Expired token
[ ] Invalid IDs
[ ] Malformed request
[ ] Excessive request rate
[ ] Unexpected content
```

---

# 81. Database QA

Where a database exists:

```text
[ ] Migrations work
[ ] Queries return expected data
[ ] Relationships correct
[ ] No duplicate records
[ ] Constraints work
[ ] Pagination works
[ ] Error handling works
```

---

# 82. Content Integrity Testing

Verify:

```text
[ ] Product data correct
[ ] Service data correct
[ ] Project data correct
[ ] Article data correct
[ ] Location data correct
[ ] Contact data correct
[ ] Relationships correct
```

---

# 83. SEO QA

Verify:

```text
[ ] Titles
[ ] Meta descriptions
[ ] H1
[ ] Canonical
[ ] Sitemap
[ ] Robots.txt
[ ] Structured data
[ ] Open Graph
[ ] Breadcrumbs
[ ] Internal links
[ ] No accidental noindex
```

---

# 84. Dynamic SEO Testing

For multiple content entries:

```text
Product A
Product B
Product C
```

verify:

```text
Unique title
Unique description
Unique URL
Correct canonical
Correct structured data
```

---

# 85. Analytics QA

Verify:

```text
[ ] Page view
[ ] CTA click
[ ] Form start
[ ] Form submit
[ ] RFQ submit
[ ] Phone click
[ ] Email click
[ ] WhatsApp click
[ ] Downloads
```

Only enabled events require testing.

---

# 86. Analytics Duplicate Testing

Click once.

Verify one intended event.

Then click again.

Verify the expected number of events.

Do not allow one interaction to fire multiple duplicate events.

---

# 87. Privacy QA

Verify analytics and lead systems do not send:

```text
[ ] Passwords
[ ] Email addresses unnecessarily
[ ] Phone numbers unnecessarily
[ ] Medical information
[ ] Student records
[ ] Private messages
[ ] File contents
[ ] Authentication tokens
```

---

# 88. Third-Party Integration QA

For every enabled integration:

```text
[ ] Configuration
[ ] Connectivity
[ ] Correct data
[ ] Failure handling
[ ] Security
[ ] Performance
```

Examples:

```text
Google Maps
Google Analytics
Search Console
Email
WhatsApp
CRM
Video
Cloudinary
```

---

# 89. Offline / Failure Testing

Where practical, simulate:

```text
API unavailable
Image unavailable
Analytics unavailable
Map unavailable
Email service unavailable
```

Verify the rest of the website remains usable.

---

# 90. Error State Testing

Every important dynamic feature should have:

```text
Loading
Empty
Error
Success
```

where applicable.

Examples:

```text
Products
Search
RFQ
Contact
Related Content
```

---

# 91. Empty State Testing

Test:

```text
No products
No projects
No articles
No search results
No testimonials
No locations
```

The interface should display a deliberate empty state or omit the section as specified.

---

# 92. Data Corruption Testing

Use invalid or incomplete development data.

Example:

```text
Product without image
Project with missing category
Article with missing author
```

The application should fail gracefully.

---

# 93. Stress Testing

Stress testing should be proportional to the project.

For dynamic projects, consider:

```text
Concurrent page requests
Concurrent form submissions
Search requests
Filter requests
Large collections
Database load
```

Do not run destructive stress tests against production without authorization.

---

# 94. Load Testing vs Stress Testing

Load testing asks:

> Can the system handle expected traffic?

Stress testing asks:

> What happens when the system is pushed beyond expected conditions?

Both are different.

Business Growth should normally perform reasonable load validation on dynamic projects.

Stress testing depth depends on architecture and business criticality.

---

# 95. Content Volume Stress Testing

Where appropriate:

```text
100 products
100 projects
1000 articles
```

or realistic expected project volume.

Measure:

```text
Page response
API performance
Database response
Browser rendering
```

Do not test unrealistic volumes without a reason.

---

# 96. Form Stress Testing

Test controlled concurrent submissions.

Verify:

```text
[ ] No data corruption
[ ] No duplicate records
[ ] Rate limits work
[ ] Server remains stable
[ ] User receives appropriate response
```

---

# 97. API Stress Testing

Where applicable, test:

```text
GET content
Search
Filter
POST lead
```

under controlled concurrency.

Review:

```text
Response time
Error rate
CPU
Memory
Database connections
```

---

# 98. Recovery Testing

Where meaningful, test:

```text
API restart
Database restart
Deployment rollback
Third-party outage
```

Verify the website can recover according to the hosting architecture.

---

# 99. Deployment QA

Before release:

```text
[ ] Production build succeeds
[ ] Environment correct
[ ] Routes work
[ ] API works
[ ] Database works
[ ] Domain works
[ ] HTTPS works
[ ] Forms work
[ ] Analytics works
```

---

# 100. Production Smoke Test

Immediately after deployment:

```text
[ ] Homepage
[ ] Main navigation
[ ] Key service page
[ ] Key product page
[ ] Key project page
[ ] Contact
[ ] RFQ
[ ] One lead submission
[ ] Mobile
[ ] Console
[ ] Network
```

The exact set should follow project scope.

---

# 101. Production Data Verification

Where dynamic content is used:

Verify:

```text
[ ] Production content is correct
[ ] No development content
[ ] No test records
[ ] No placeholder entries
[ ] Correct environment configuration
```

---

# 102. Production Analytics Verification

Perform controlled production events.

Verify:

```text
Page view
CTA
Form
RFQ
```

Do not generate large volumes of fake analytics data.

---

# 103. Production Form Verification

A real controlled test submission should verify:

```text
Website
 ↓
Backend
 ↓
Routing
 ↓
Destination
```

Then clean up test data if applicable.

---

# 104. Client Review QA

The client should review:

```text
Content
Images
Contact information
Product/service details
Projects
Team
Certifications
```

The client is the final authority on factual business content.

---

# 105. Design Fidelity QA

Compare implementation directly against the approved UI.

Review:

```text
[ ] Layout
[ ] Typography
[ ] Colors
[ ] Images
[ ] Spacing
[ ] Components
[ ] Navigation
[ ] Forms
[ ] CTAs
[ ] Mobile behavior
```

---

# 106. AI Design Fidelity QA

The AI implementation must be checked for unauthorized design changes.

Look specifically for:

```text
[ ] New colors
[ ] Different fonts
[ ] Different card styles
[ ] Different spacing
[ ] Different section order
[ ] Generic AI components
[ ] Unapproved animations
[ ] Unapproved navigation
```

---

# 107. Visual Regression Testing

Where feasible, capture representative screenshots for:

```text
Home
Listing
Detail
Blog
RFQ
Contact
Mobile
```

Compare against the approved references.

---

# 108. Browser Regression

After significant changes, retest:

```text
Chrome
Edge
Firefox
Safari
```

at least on key templates and flows.

---

# 109. Regression Testing

Regression testing is required after changes to shared:

* Components
* Templates
* Routing
* Content model
* Lead system
* Navigation
* Design tokens
* API
* Dependencies

---

# 110. Shared Component Regression

If `ProductCard` changes, test:

```text
Product Listing
Homepage Product Section
Related Products
Search Results
```

Do not test only the component in isolation.

---

# 111. Template Regression

If Product Detail changes, verify:

```text
Product A
Product B
Product C
RFQ
Related Products
SEO
Mobile
```

---

# 112. Navigation Regression

If the Header changes, verify:

```text
Desktop
Mobile
Dropdowns
CTA
Footer
Sticky behavior
```

---

# 113. Lead Regression

If the form system changes, verify all enabled lead types:

```text
Contact
RFQ
Product Inquiry
Service Inquiry
Appointment
Consultation
```

---

# 114. Content Regression

If content model fields change:

```text
[ ] Existing entries still render
[ ] New entries render
[ ] Optional fields behave correctly
[ ] Relationships remain valid
```

---

# 115. Regression Test Priority

Prioritize:

```text
1. Homepage
2. Navigation
3. Lead generation
4. Core detail pages
5. Mobile
6. Shared components
7. SEO
8. Analytics
9. Secondary content
```

---

# 116. QA Checklist Before Client Review

```text
FUNCTIONAL
[ ] All routes
[ ] Navigation
[ ] Forms
[ ] Lead flows
[ ] Search
[ ] Filters
[ ] Downloads
[ ] Media

CONTENT
[ ] No placeholders
[ ] Correct business data
[ ] Correct images
[ ] Correct documents

RESPONSIVE
[ ] Desktop
[ ] Tablet
[ ] Mobile

VISUAL
[ ] Matches approved UI

SEO
[ ] Metadata
[ ] Sitemap
[ ] Canonical
[ ] Structured data

SECURITY
[ ] No exposed secrets
[ ] Validation
[ ] Forms protected

PERFORMANCE
[ ] Images optimized
[ ] Production build tested
[ ] Core metrics reviewed
```

---

# 117. QA Checklist Before Production

```text
[ ] Client review completed
[ ] Corrections completed
[ ] Final content approved
[ ] Final UI approved
[ ] Production build passes
[ ] Security review passes
[ ] SEO review passes
[ ] Performance review passes
[ ] Analytics verified
[ ] Lead flows verified
[ ] Deployment configuration verified
```

---

# 118. Bug Fix Verification

For every bug:

```text
Bug
 ↓
Fix
 ↓
Reproduce Original Case
 ↓
Verify Fixed
 ↓
Regression Check
 ↓
Close
```

A bug is not considered fixed until the original failure can no longer be reproduced under the same conditions.

---

# 119. Bug Reports

A useful bug report contains:

```text
Title
Environment
Page
Steps to Reproduce
Expected Result
Actual Result
Severity
Screenshots/Video where useful
Console/Network information where appropriate
```

---

# 120. QA Evidence

For important acceptance checks, retain evidence where practical:

* Screenshots
* Test records
* Deployment logs
* Analytics verification
* Performance reports
* Test checklist

Do not retain sensitive personal information unnecessarily.

---

# 121. QA and Client Change Requests

When a client requests a change during QA:

Classify it as:

```text
Defect
Content Correction
Approved Minor Change
New Feature
Design Change
```

Do not treat every new request as a bug.

---

# 122. Scope Control

Example:

Client says:

> "The RFQ needs a second step with document upload."

This may be:

```text
New Feature
```

not:

```text
Bug
```

unless the original approved scope already required it.

---

# 123. QA Sign-Off

Internal QA should record:

```text
Tester:
Date:
Environment:
Version:
Result:
Open Issues:
```

---

# 124. Client Acceptance

Client acceptance should record:

```text
Client:
Project:
Version:
Review Date:
Approval:
Open Minor Issues:
```

---

# 125. Release Candidate

Before final production release:

```text
Development
   ↓
QA
   ↓
Release Candidate
   ↓
Final Review
   ↓
Production
```

Do not continue changing the release candidate without tracking changes.

---

# 126. Release Candidate Freeze

Once the release candidate is approved:

Only:

* Critical fixes
* High-priority corrections
* Approved final changes

should be added before launch.

---

# 127. Final Production QA

Immediately after deployment:

```text
[ ] URL
[ ] HTTPS
[ ] Homepage
[ ] Navigation
[ ] Main page templates
[ ] Lead forms
[ ] RFQ
[ ] Analytics
[ ] Sitemap
[ ] Robots
[ ] Mobile
[ ] Console
[ ] Network
```

---

# 128. Post-Launch QA

After launch, observe the site for unexpected issues.

Check:

```text
Availability
Errors
Forms
Lead delivery
Analytics
Mobile
Third-party integrations
```

---

# 129. Warranty QA

During the warranty period, reported issues should be reproduced and classified as:

```text
Defect
Scope Change
Third-Party Issue
Client-Caused Issue
```

Only applicable defects are covered by the warranty.

---

# 130. Maintenance QA

Content updates through maintenance should still receive appropriate QA.

Example:

```text
New Product
 ↓
Content Validation
 ↓
UI Check
 ↓
Mobile Check
 ↓
SEO Check
 ↓
Publish
```

Large changes should trigger broader regression testing.

---

# 131. AI QA Rules

AI coding agents must:

```text
[ ] Run appropriate tests after changes
[ ] Inspect console errors
[ ] Inspect network errors
[ ] Test relevant routes
[ ] Test changed components
[ ] Test responsive layouts
[ ] Test lead forms
[ ] Check build
[ ] Check lint/type errors
[ ] Avoid claiming tests passed without running them
```

---

# 132. AI Must Not Claim Untested Success

The AI must not say:

> "Everything is working."

unless it has actually verified the relevant behavior.

Preferred:

> "The production build completed successfully and the tested routes passed the specified checks."

Only make claims supported by actual testing.

---

# 133. AI Must Not Skip Existing Tests

If a project already contains tests:

```text
[ ] Read them
[ ] Preserve them
[ ] Run them where relevant
[ ] Update them if behavior intentionally changed
```

Do not delete tests simply because they fail after an implementation change.

---

# 134. AI Must Not Fix Tests by Weakening Them

If a test fails:

```text
Understand Failure
 ↓
Determine Whether Code or Test Is Wrong
 ↓
Fix Correctly
```

Do not change the expected result just to make the test pass unless the actual requirement changed.

---

# 135. Automated Testing Strategy

Automation should prioritize repeatable high-value tests.

Good candidates:

```text
Navigation
Routes
Forms
Lead submissions
Content rendering
API behavior
Component states
```

---

# 136. Manual Testing Strategy

Manual testing remains important for:

* Visual fidelity
* Responsive behavior
* Typography
* Content quality
* User experience
* Mobile interaction
* Real-device behavior

---

# 137. Automated vs Manual

Use:

```text
Automation
→ Repeatable behavior

Manual QA
→ Human experience and visual correctness
```

Neither completely replaces the other.

---

# 138. Real Device Testing

Where practical, verify on actual devices.

Especially:

```text
Mobile navigation
Forms
Sticky CTAs
Touch interactions
Gallery
Video
Maps
```

Emulators do not always reproduce all device behavior.

---

# 139. Touch Interaction Testing

Test:

```text
Tap
Swipe
Scroll
Pinch/zoom where applicable
Long press where applicable
```

Do not rely only on mouse interactions.

---

# 140. Browser Zoom Testing

Test reasonable browser zoom levels where practical.

Verify no major layout break occurs.

---

# 141. Reduced Motion Testing

If animations exist:

```text
prefers-reduced-motion
```

should be respected where appropriate.

---

# 142. Accessibility Regression

After changing shared components:

Retest:

```text
Navigation
Buttons
Forms
Dialogs
Accordions
Filters
```

especially keyboard/focus behavior.

---

# 143. Security Regression

After changing:

* Forms
* APIs
* Authentication
* File uploads
* CORS
* CSP
* Database access

repeat appropriate security tests.

---

# 144. Performance Regression

After changing:

* Images
* Video
* Dependencies
* APIs
* Search
* Filters
* Database queries

repeat performance checks.

---

# 145. SEO Regression

After changing:

* Routes
* Slugs
* Metadata
* Templates
* Content models
* Navigation

verify:

```text
Canonical
Sitemap
Metadata
Structured data
Internal links
Redirects
```

---

# 146. Analytics Regression

After changing:

* CTA components
* Forms
* RFQ
* Navigation
* Content detail pages

verify configured events still fire correctly.

---

# 147. Final QA Report

Before closure, the project may produce:

```text
QA Summary

Project:
Version:
Environment:

Tests:
Passed:
Failed:
Blocked:

Critical Issues:
High:
Medium:
Low:

Final Status:
PASS / PASS WITH MINOR ISSUES / FAIL
```

---

# 148. Final QA Status

Allowed final states:

```text
PASS

PASS WITH DOCUMENTED MINOR ISSUES

FAIL
```

A project must not be marked complete when critical unresolved issues remain.

---

# 149. Definition of Done

The Business Growth website passes QA when:

```text
[✓] Required functionality works
[✓] Selected templates work
[✓] Components work
[✓] Content is correct
[✓] No placeholder content remains
[✓] Responsive behavior works
[✓] Mobile behavior works
[✓] Accessibility requirements are addressed
[✓] Security requirements are addressed
[✓] SEO requirements are addressed
[✓] Analytics works where included
[✓] Lead generation works
[✓] RFQ works where included
[✓] Performance has been reviewed
[✓] Production build succeeds
[✓] Production smoke test passes
[✓] Client review is complete
[✓] Remaining issues are documented
```

---

# 150. Business Growth QA Architecture

The complete QA flow is:

```text
                    REQUIREMENTS
                         ↓
                    UI REFERENCES
                         ↓
                   CONTENT MODELS
                         ↓
                    COMPONENT TEST
                         ↓
                    TEMPLATE TEST
                         ↓
                    FEATURE TEST
                         ↓
                  INTEGRATION TEST
                         ↓
                RESPONSIVE TEST
                         ↓
                 ACCESSIBILITY
                         ↓
                    SECURITY
                         ↓
                   PERFORMANCE
                         ↓
                       SEO
                         ↓
                    ANALYTICS
                         ↓
                 END-TO-END FLOW
                         ↓
                  RELEASE CANDIDATE
                         ↓
                  CLIENT REVIEW
                         ↓
                    PRODUCTION
                         ↓
                POST-LAUNCH SMOKE TEST
```

---

# 151. Final Principle

Business Growth is a reusable system, so QA must test both:

```text
THE CLIENT WEBSITE
```

and:

```text
THE REUSABLE TEMPLATE SYSTEM
```

A component that works for one client but breaks when:

* content changes,
* a module is disabled,
* another sector uses it,
* a title becomes longer,
* a relationship is missing,
* a mobile layout is used,

is not truly production-ready.

The final standard is:

> **Test the component, test the template, test the business flow, test the real content, test the responsive experience, and test the production system.**

The goal is not simply:

```text
"The page loads."
```

The goal is:

```text
The correct content loads.
The correct design is implemented.
The correct business action works.
The correct data is handled safely.
The correct analytics event is measured.
The correct experience works across devices.
And the system remains reliable when the client actually uses it.
```

Business Growth should therefore leave QA with confidence that the website is not only visually finished, but **functionally, technically, and operationally ready for the client's business.**

```
```
