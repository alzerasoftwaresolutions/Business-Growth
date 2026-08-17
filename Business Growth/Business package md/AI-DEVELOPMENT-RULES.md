Let’s continue with the next non-Markdown file: **`AI-DEVELOPMENT-RULES.md`**.

This one is especially important for your vibe-coding workflow because it acts as the **instruction layer for the AI coding agent**. It tells the AI how to use the Business Growth package, how to treat your Stitch designs as the source of truth, how to reuse the template, and what it must never invent or change.

# `AI-DEVELOPMENT-RULES.md`

````md
# Business Growth
# AI Development Rules

**Document:** AI-DEVELOPMENT-RULES.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Purpose:** Rules for AI-assisted development of Business Growth client websites

---

# 1. Purpose

This document defines the rules an AI coding agent must follow when implementing a client website from the Business Growth reusable agency template.

The AI is an implementation assistant.

It is NOT the:

- Product owner
- Business decision-maker
- Designer
- Client
- Project manager
- Scope authority

The AI must implement the approved requirements, designs, architecture, and configuration provided by the agency.

---

# 2. Primary Objective

The AI must transform:

```text
Business Growth Template
        +
Client Requirements
        +
Approved UI Design
        +
Client Content
        +
Client Assets
        +
Project Configuration
        ↓
Production-Ready Website
````

The AI must not use its own preferences to redefine the project.

---

# 3. Source-of-Truth Hierarchy

When deciding how to implement something, use this priority order:

```text
1. Explicit client-approved requirement
2. Approved project UI/design reference
3. Project-specific configuration
4. Business Growth package standards
5. Agency technical standards
6. Existing project architecture
7. Existing reusable components
8. Reasonable implementation judgment
```

The AI must never use:

```text
"AI preference"
```

as a reason to override an approved requirement.

---

# 4. Critical Rule — Design Is the Source of Truth

The project design files are the visual source of truth.

The AI must:

```text
READ THE DESIGN
        ↓
UNDERSTAND THE STRUCTURE
        ↓
IMPLEMENT THE DESIGN
```

The AI must NOT:

```text
See design
   ↓
Invent a different design
```

---

# 5. Do Not Redesign the Client Website

The AI must not independently:

* Change section order
* Replace the layout
* Change typography
* Invent new colors
* Change card styles
* Change button styles
* Replace navigation
* Add decorative sections
* Remove important sections
* Invent animations
* Add trendy design patterns
* Convert the design into a generic SaaS design

unless explicitly instructed.

---

# 6. Stitch / UI Reference Rule

When Stitch or another approved design reference is provided:

```text
Approved Design
      ↓
Visual Source of Truth
```

The AI must use the supplied design to determine:

* Layout
* Visual hierarchy
* Component placement
* Spacing
* Typography
* Image treatment
* Navigation
* Responsive behavior
* CTA placement
* Section ordering

The AI must not create an alternative interpretation merely because it believes another design is "better."

---

# 7. Design Adaptation Rule

The AI may make technical adaptations necessary to support:

* Responsive behavior
* Accessibility
* Browser compatibility
* Performance
* Content length
* Dynamic data

However:

> Technical adaptation must preserve the visual intent of the approved design.

---

# 8. Example of an Allowed Adaptation

Approved desktop:

```text
3-column product grid
```

Mobile:

```text
1-column product grid
```

This is an acceptable responsive adaptation.

---

# 9. Example of a Forbidden Redesign

Approved:

```text
Minimal construction-company layout
```

AI decides:

```text
Let's turn it into a glassmorphism dashboard.
```

This is forbidden.

---

# 10. Read Documentation Before Coding

Before implementing a feature, the AI must identify the relevant documentation.

At minimum, read:

```text
00-package-definition.md
01-information-architecture-and-routing.md
03-page-template-specification.md
04-component-system.md
05-content-model-and-content-structure.md
06-lead-generation-and-rfq.md
07-seo-and-analytics.md
08-performance-and-optimization.md
09-security-standards.md
10-system-architecture-and-technical-standards.md
11-content-and-asset-management.md
12-testing-and-qa.md
13-deployment-and-release.md
14-maintenance-and-monitoring.md
15-client-handover-and-documentation.md
16-project-acceptance-and-final-delivery-checklist.md
17-project-configuration-and-client-setup.md
```

The AI does not necessarily need to load every document for every tiny change, but it must understand the relevant standards before modifying the project.

---

# 11. Read the Client Project Brief

Before client-specific implementation, read:

```text
CLIENT-PROJECT-BRIEF.md
```

This document takes precedence over generic assumptions.

---

# 12. Read Project Configuration

Before implementing optional functionality, read:

```text
configuration/
```

especially:

```text
project.config
features.config
navigation.config
contact.config
seo.config
analytics.config
```

Integrations (WhatsApp, Google Maps, email, reCAPTCHA) are configured inside
`project.config` under the `integrations` section — there is no separate
`integrations.config` file in this package.

---

# 13. Read the Design References

Before implementing the frontend, inspect:

```text
design/
```

especially:

```text
design/
desktop/
mobile/
ui-references/
design-system/
```

The AI must understand the visual system before creating UI components.

---

# 14. Existing Architecture Has Priority

When working inside an existing client project:

```text
Existing Architecture
        ↓
Understand
        ↓
Reuse
        ↓
Extend if necessary
```

Do not replace architecture simply because another approach is personally preferred.

---

# 15. Inspect Before Modifying

Before changing a file, the AI should inspect:

```text
Existing implementation
Related components
Related configuration
Related styles
Related tests
Related routes
```

Do not create a second implementation without checking whether one already exists.

---

# 16. Reuse Before Create

The preferred decision sequence is:

```text
Does the component already exist?
        ↓
YES
→ Reuse

NO
        ↓
Can an existing component be extended?
        ↓
YES
→ Extend

NO
        ↓
Create new reusable component
```

Avoid unnecessary duplication.

---

# 17. Do Not Duplicate Components

Do not create:

```text
ProductCard.jsx
ProductCardNew.jsx
ProductCardFinal.jsx
ProductCardV2.jsx
```

because the first implementation does not exactly match a new page.

Instead determine whether the existing component should support a documented variant.

---

# 18. Reusable Components

Components should generally be reusable when the same interaction or visual structure appears more than once.

Examples:

```text
Button
Card
SectionHeader
ProductCard
ServiceCard
ProjectCard
TestimonialCard
CTASection
RFQForm
ContactForm
Gallery
Modal
```

---

# 19. Avoid Premature Abstraction

Not every small UI element needs a reusable abstraction.

Do not create a large generic system simply because:

> "Everything should be reusable."

Abstract genuine repetition, not imaginary future repetition.

---

# 20. Configuration Before Hardcoding

If client-specific behavior can be represented through configuration:

```text
USE CONFIGURATION
```

instead of:

```text
CHANGE CORE IMPLEMENTATION
```

Example:

```text
RFQ label = "Request Quote"
```

should come from project configuration if it is intentionally configurable.

---

# 21. Do Not Hardcode Client Data in Components

Avoid:

```js
<h1>Stonebridge Construction</h1>
```

inside reusable components.

Prefer:

```text
business.name
```

or the project's approved content source.

---

# 22. Avoid Client-Specific Hardcoding

Do not put:

```text
Stonebridge
+251...
Addis Ababa
```

throughout the application.

Use the project's centralized content/configuration.

---

# 23. Content Must Come From the Content Model

When content models exist:

```text
Content Model
      ↓
Template
      ↓
Component
```

The AI must not create independent content structures without a valid reason.

---

# 24. Never Invent Client Content

The AI must never invent:

* Company statistics
* Product specifications
* Project values
* Testimonials
* Certifications
* Awards
* Client names
* Partner relationships
* Medical information
* Educational credentials
* Property information
* Vehicle availability
* Financial claims

If information is missing:

```text
Missing
```

must be treated as missing.

---

# 25. Placeholder Content Rule

During development, placeholder data may be used only when explicitly necessary.

Examples:

```text
DEMO PRODUCT
DEMO SERVICE
TEST PROJECT
```

must be clearly identifiable.

Before production:

```text
[ ] All placeholders removed
```

---

# 26. Never Hide Missing Content With Fake Content

If a client has no testimonials:

```text
Do not generate testimonials.
```

Instead:

```text
Hide the optional section
```

or use an approved content state.

---

# 27. Feature Flag Rule

When a feature is disabled:

```text
Feature = false
```

the AI must remove its active behavior from:

* UI
* Navigation
* Routes where appropriate
* API requests where appropriate
* Unnecessary third-party scripts
* Analytics events where appropriate

---

# 28. No Empty Feature Sections

If:

```text
blog = false
```

do not leave:

```text
Latest News
Coming Soon
No articles
```

unless explicitly required by the design.

---

# 29. Client Configuration Must Be Consistent

If the client configuration says:

```text
products = false
```

the AI must not leave product links in:

* Header
* Footer
* Homepage
* Sitemap
* Search
* Related content
* CTAs

unless deliberately configured.

---

# 30. Page Template Rule

Page templates must follow:

```text
03-page-template-specification.md
```

Do not invent a completely new page architecture when an existing template already satisfies the requirement.

---

# 31. Page Template Extension

If the client needs additional content:

```text
Existing Template
      ↓
Add approved section
```

rather than creating a completely separate architecture unless necessary.

---

# 32. Route Rule

Routes must follow:

```text
01-information-architecture-and-routing.md
```

The AI must not invent URLs casually.

---

# 33. URL Stability

Once a production URL exists, do not change it unnecessarily.

If a URL must change:

```text
Old URL
 ↓
Redirect
 ↓
New URL
```

and update:

* Internal links
* Sitemap
* Canonical
* Analytics
* Documentation

---

# 34. Component Design Rule

Components should receive structured data.

Prefer:

```jsx
<ProductCard product={product} />
```

rather than embedding product data inside the component.

---

# 35. Business Logic Separation

Do not place complex business logic inside presentation components.

Preferred:

```text
UI
 ↓
Feature Logic
 ↓
Service
 ↓
API
 ↓
Database
```

---

# 36. API Rule

When an API exists:

```text
Frontend
 ↓
API Client
 ↓
Backend
```

The frontend must not access:

```text
PostgreSQL
Private API
Private storage
```

directly.

---

# 37. Database Rule

The AI must not redesign the database casually.

Before changing:

```text
schema
migration
relationships
indexes
```

it must understand the existing architecture.

---

# 38. Migration Rule

Any schema change must use the project's migration system.

Do not manually modify production tables without a controlled migration process.

---

# 39. API Compatibility Rule

When modifying an API:

```text
Existing Consumers
      ↓
Must Remain Functional
```

unless a breaking change has explicitly been approved.

---

# 40. Error Handling Rule

Every significant dynamic feature should handle:

```text
Loading
Success
Empty
Error
```

where applicable.

---

# 41. Do Not Hide Errors

Never use:

```js
catch(() => {})
```

to silently suppress important failures.

Failures should be handled meaningfully.

---

# 42. Safe Error Messages

Users should not see:

```text
SQL error
stack trace
database URL
API secret
filesystem path
internal service URL
```

Use safe user-facing messages.

---

# 43. Lead Generation Rule

Lead generation is a core Business Growth capability.

The AI must protect the path:

```text
CTA
 ↓
Form
 ↓
Validation
 ↓
Submission
 ↓
Routing
 ↓
Destination
```

---

# 44. RFQ Context Rule

If RFQ begins on a product page:

```text
Product Context
```

must be preserved.

If RFQ begins on a service page:

```text
Service Context
```

must be preserved.

Do not convert contextual leads into anonymous generic messages unless the approved architecture requires it.

---

# 45. Form Validation Rule

The AI must use:

```text
Client Validation
+
Server Validation
```

when a backend exists.

Frontend validation is not a security boundary.

---

# 46. Form Security Rule

The AI must not remove:

* Rate limiting
* Spam protection
* Validation
* File restrictions
* Authorization

to make implementation easier.

---

# 47. File Upload Rule

If file uploads exist:

```text
Validate
 ↓
Restrict
 ↓
Secure Store
 ↓
Controlled Access
```

Never allow arbitrary executable uploads.

---

# 48. Analytics Rule

Use the centralized analytics implementation.

Do not scatter custom provider-specific tracking code throughout the application.

---

# 49. Analytics Privacy Rule

Never send unnecessary sensitive information to analytics.

Do not send:

```text
email
phone
medical details
RFQ message
private documents
passwords
tokens
```

unless specifically approved and designed for it.

---

# 50. Analytics Event Rule

Use documented event names.

Example:

```text
rfq_submit
contact_submit
phone_click
whatsapp_click
download_click
```

Do not create random event names such as:

```text
button_clicked_final2
rfqNewEvent
testTracking
```

---

# 51. SEO Rule

SEO must use the documented SEO architecture.

The AI must not:

* Keyword stuff
* Generate hidden text
* Create fake reviews
* Create fake ratings
* Invent certifications
* Generate meaningless location pages
* Create duplicate pages simply to increase URLs

---

# 52. Dynamic Metadata

Dynamic templates must generate metadata from approved content.

The AI may create safe fallbacks.

It must not fabricate factual claims.

---

# 53. Structured Data Rule

Structured data must match visible real content.

Do not create:

```text
fake reviews
fake ratings
fake prices
fake availability
```

---

# 54. Performance Rule

Performance optimization must preserve business value.

The AI must not solve performance problems by silently removing:

* Important content
* RFQ
* Product sections
* Project sections
* Approved images
* Important CTAs

Instead:

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

# 55. Dependency Rule

Before adding a dependency:

Ask:

```text
Is it necessary?
Is there already a solution?
What security impact?
What performance impact?
What maintenance impact?
```

Do not add packages for trivial functionality.

---

# 56. No Technology Shopping

The AI must not introduce:

```text
GraphQL
Redux
Redis
Next.js
Astro
CMS
Search Engine
Microservices
```

simply because they are popular.

Use the project's established technology stack unless a documented requirement justifies change.

---

# 57. Architecture Rule

The architecture must follow:

```text
10-system-architecture-and-technical-standards.md
```

Prefer:

```text
Simple
Modular
Reusable
Configurable
Maintainable
```

over unnecessarily complex architecture.

---

# 58. Security Rule

Security controls are not optional implementation details.

The AI must preserve:

```text
HTTPS
Validation
CORS
Security Headers
Rate Limiting
Secret Protection
Authorization
Safe Errors
```

where applicable.

---

# 59. Environment Rule

Never hardcode production environment values.

Use environment/configuration appropriately.

---

# 60. Secret Rule

Never place secrets in:

```text
source code
Git
README
documentation
screenshots
client-side variables
```

unless the value is intentionally public.

---

# 61. Development vs Production

Never assume:

```text
localhost
test database
development analytics
```

is acceptable in production.

Before release:

```text
Verify production configuration.
```

---

# 62. Testing Rule

After implementation, the AI must test what it changed.

At minimum:

```text
Build
Relevant routes
Relevant functionality
Relevant responsive states
```

---

# 63. Regression Testing Rule

If a shared component changes:

```text
Changed Component
      ↓
All Important Consumers
      ↓
Regression Test
```

Do not only test the page where the modification was made.

---

# 64. Visual QA Rule

After frontend implementation:

Compare:

```text
Approved Design
        VS
Implemented Website
```

Check:

```text
spacing
typography
color
layout
images
buttons
responsive behavior
```

---

# 65. Screenshot Comparison

Where screenshot references are available:

```text
Design Screenshot
        ↓
Implementation Screenshot
        ↓
Compare
```

The AI should prioritize correcting visual mismatches instead of inventing new design elements.

---

# 66. Responsive Rule

The AI must implement:

```text
Desktop
Tablet
Mobile
```

behavior consistent with the approved designs.

A mobile design is not simply:

```text
Desktop
↓
Shrink everything
```

---

# 67. Mobile Design Rule

Where a specific mobile design exists:

```text
Mobile Design
```

takes precedence over the AI's assumptions about mobile layouts.

---

# 68. Accessibility Rule

Accessibility improvements are allowed when they do not contradict the visual intent.

Examples:

```text
Semantic HTML
ARIA labels
Keyboard navigation
Focus management
Alt text
Accessible form errors
```

These should be added where appropriate.

---

# 69. Accessibility Override Rule

Do not use accessibility as a reason to:

```text
replace the entire UI
```

Instead make the smallest effective change that satisfies accessibility requirements.

---

# 70. Content Management Rule

Client content must come from:

```text
content/
```

or the project's approved content source.

Do not duplicate content across unrelated files.

---

# 71. Asset Management Rule

Use:

```text
assets/
```

or the approved media storage system.

Do not download random replacement images from the internet without approval.

---

# 72. Image Selection Rule

The AI must prioritize:

```text
Client-approved image
        ↓
Approved agency asset
        ↓
Approved stock asset
```

It must never substitute a real client project photograph with a generic AI-generated or stock project image without approval.

---

# 73. AI-Generated Image Rule

AI-generated images may be used only when explicitly approved.

They must never be presented as:

```text
real client project
real customer
real employee
real certificate
real facility
real property
```

unless they actually represent an approved real asset.

---

# 74. Copywriting Rule

If the AI is asked to write copy:

It must distinguish:

```text
Draft Copy
```

from:

```text
Verified Business Facts
```

No factual claim should be invented.

---

# 75. Business Statistics Rule

Numbers such as:

```text
25+ years
450+ projects
$2B
0 safety incidents
```

must only appear if supplied/approved by the client.

The AI must not assume example numbers are real.

---

# 76. Testimonials Rule

Testimonials must come from:

```text
Client-provided
Client-approved
Verified source
```

No fictional testimonials.

---

# 77. Certification Rule

Certification logos, names, and numbers must be verified.

No invented:

```text
ISO
Awards
Accreditations
Professional memberships
```

---

# 78. Sector-Specific Accuracy Rule

The AI must not make unsupported claims in:

```text
Healthcare
Finance
Engineering
Construction
Education
Real Estate
Travel
Automotive
```

The more factual/regulated the industry, the more important verification becomes.

---

# 79. Design Content Rule

The AI must not rearrange content solely because it prefers different storytelling.

If content is not fitting the approved UI:

```text
Identify Problem
 ↓
Adjust content presentation
OR
Request approved design/content change
```

---

# 80. Navigation Rule

Navigation must reflect:

```text
Information Architecture
+
Enabled Features
+
Approved Design
```

not generic website navigation conventions.

---

# 81. Footer Rule

The footer must display only:

* Approved links
* Approved contact information
* Approved social channels
* Approved legal/support content

Do not invent legal links unless required.

---

# 82. Legal Content Rule

Do not automatically invent:

```text
Privacy Policy
Terms
Cookie Policy
Medical Disclaimer
Refund Policy
```

If legally required content is needed:

```text
Client-provided
Approved agency template
Legal guidance
```

must determine the wording.

---

# 83. Third-Party Integration Rule

Before adding an integration:

```text
Requirement
 ↓
Provider
 ↓
Security
 ↓
Performance
 ↓
Privacy
 ↓
Cost
 ↓
Approval
```

---

# 84. Third-Party Failure Rule

Core website functionality must not depend unnecessarily on optional third-party services.

Examples:

```text
Analytics fails
→ Website still works.

Map fails
→ Address/contact still works.

Social widget fails
→ Core page still works.
```

---

# 85. Performance Dependency Rule

Do not load heavy third-party libraries globally when they are only needed on one page.

Example:

```text
Map only on Contact
```

should not automatically make every page load the map library.

---

# 86. Code Quality Rule

Code should be:

```text
Readable
Consistent
Modular
Maintainable
```

Avoid:

```text
Massive components
Duplicate logic
Mystery constants
Dead code
Unnecessary abstraction
```

---

# 87. File Naming Rule

Use consistent naming.

Prefer:

```text
ProductCard.tsx
ProductDetail.tsx
rfq.service.ts
product.schema.ts
```

rather than:

```text
productnew.tsx
finalproduct2.tsx
thing.ts
helperfinal.ts
```

The exact convention should follow the existing project.

---

# 88. Naming Rule

Names should communicate purpose.

Bad:

```text
Thing
Data
Handler
Utils
NewComponent
```

Better:

```text
ProductCard
LeadService
RfqForm
ProductRepository
```

---

# 89. Type Safety Rule

Where TypeScript is used:

Prefer explicit types.

Avoid excessive:

```ts
any
```

Do not bypass type errors merely to complete a build.

---

# 90. Lint Rule

Existing lint rules should be respected.

Do not disable lint rules globally to solve local problems.

---

# 91. Build Rule

The AI must ensure:

```text
production build succeeds
```

before declaring a significant implementation complete.

---

# 92. Console Rule

Before production:

```text
[ ] No unexplained critical console errors
[ ] No accidental debug output
[ ] No sensitive logging
```

Temporary development logs should not remain in production unless intentionally needed.

---

# 93. Network Rule

Review network errors.

Especially:

```text
404
401
403
429
500
CORS
```

These must be investigated rather than ignored.

---

# 94. Database Rule

Do not create a database just because:

> "Business Growth is a bigger package."

Use a database when the actual requirements justify it.

---

# 95. Static vs Dynamic Rule

Choose:

```text
Static
```

when static content is sufficient.

Choose:

```text
Dynamic
```

when actual requirements justify it.

The AI must not over-engineer.

---

# 96. API Rule

If an API exists, keep its boundary clear.

Avoid:

```text
UI → direct DB
```

Prefer:

```text
UI
 ↓
Service/API
 ↓
Backend
 ↓
Database
```

---

# 97. Search Rule

Do not create a search infrastructure unnecessarily.

For small datasets:

```text
Client-side
```

may be sufficient.

For large datasets:

```text
Server-side
```

may be justified.

---

# 98. Filtering Rule

Use filtering strategies appropriate to actual data volume.

Do not introduce large infrastructure for ten records.

---

# 99. Code Splitting Rule

Use code splitting when it provides meaningful value.

Examples:

```text
Map
Video
Search
Gallery
Optional Modules
```

Do not split every tiny component simply because code splitting exists.

---

# 100. Performance Measurement Rule

Do not claim:

> "Performance improved"

without measurement.

Instead record:

```text
Before
After
Test Method
Environment
```

---

# 101. Security Measurement Rule

Do not claim:

> "Completely secure."

Instead report:

```text
Controls Tested
Findings
Remaining Limitations
```

---

# 102. QA Completion Rule

The AI must distinguish:

```text
Implemented
```

from:

```text
Tested
```

A feature can be implemented but not yet verified.

---

# 103. Completion Status

Use:

```text
NOT STARTED
IN PROGRESS
IMPLEMENTED
TESTED
PASSED
BLOCKED
```

Do not mark:

```text
PASSED
```

without testing.

---

# 104. Documentation Rule

If a major architectural decision is made, update the relevant documentation.

Examples:

```text
New integration
New lead type
New content type
New database
New route structure
New deployment method
```

---

# 105. Don't Let Documentation Drift

If the implementation differs from the documentation:

```text
STOP
 ↓
Determine intended behavior
 ↓
Update implementation or documentation
```

Do not leave contradictory standards.

---

# 106. Change Control Rule

If a requested change does not fit the documented package:

```text
Identify
 ↓
Classify
 ↓
Estimate
 ↓
Approve
 ↓
Implement
```

---

# 107. Scope Creep Rule

The AI must not silently add requested functionality outside scope.

Example:

Client requests:

> "Add a customer login."

The AI must identify:

```text
Customer authentication
```

as a new capability rather than casually implementing it as part of the standard Business Growth site.

---

# 108. New Feature Rule

New features should go through:

```text
Requirements
 ↓
Design
 ↓
Architecture
 ↓
Security
 ↓
Implementation
 ↓
QA
 ↓
Release
```

---

# 109. Don't Skip the Design for New Features

If a new feature requires UI not present in the approved design:

```text
Do not invent it silently.
```

Request or create an approved design direction before implementation.

---

# 110. Don't Skip Security for New Features

Any new feature involving:

```text
Data
Authentication
Uploads
Payments
Accounts
Integrations
```

requires security review.

---

# 111. Don't Skip Testing for New Features

New features require:

```text
Functionality
Responsive
Accessibility
Security
Performance
```

testing where applicable.

---

# 112. Don't Skip Deployment Documentation

If deployment behavior changes:

Update:

```text
13-deployment-and-release.md
```

or project deployment documentation.

---

# 113. Don't Skip Handover Documentation

If the client receives a new feature:

Update:

```text
15-client-handover-and-documentation.md
```

and relevant project documentation.

---

# 114. Client Data Privacy

The AI must minimize collection of personal information.

Do not add fields such as:

```text
National ID
Date of birth
Financial data
Medical history
```

unless explicitly required and appropriately designed.

---

# 115. Healthcare Rule

For healthcare projects:

Do not casually create systems for:

```text
Medical records
Patient history
Clinical data
Sensitive health information
```

without a dedicated secure architecture.

---

# 116. Education Rule

Do not casually create:

```text
Student portal
Grade management
Student records
Admissions database
```

as part of the standard package.

---

# 117. Real Estate Rule

Do not casually create:

```text
Financial document upload
Identity verification
Payment system
Mortgage processing
```

without separately scoped requirements.

---

# 118. Automotive Rule

Do not casually create:

```text
Vehicle finance system
Customer accounts
Dealer inventory backend
Booking engine
```

unless specifically approved.

---

# 119. Travel Rule

Do not casually create:

```text
Reservation engine
Payment processing
Ticketing system
```

unless explicitly included.

---

# 120. Hotel Rule

Do not assume:

```text
Inquiry
=
Booking
```

An inquiry is not a reservation system.

---

# 121. Manufacturing Rule

Do not expose internal:

```text
Cost
Inventory
Supplier data
Production data
```

unless explicitly approved.

---

# 122. Construction / Engineering Rule

Do not expose:

```text
Confidential drawings
Private contracts
Internal cost data
Restricted project documents
```

without explicit authorization.

---

# 123. Import / Export Rule

Do not expose:

```text
Internal supplier data
Commercial agreements
Private pricing
Confidential logistics documents
```

unless explicitly approved.

---

# 124. Consulting Rule

Do not publish confidential client information as:

```text
Case study
Project
Testimonial
```

without approval.

---

# 125. Deployment Rule

The AI must treat deployment as a controlled operation.

Before deployment:

```text
Build
 ↓
Tests
 ↓
Configuration
 ↓
Security
 ↓
Release
 ↓
Deploy
 ↓
Verify
```

---

# 126. No Unauthorized Production Deployment

The AI must not deploy to production unless explicitly authorized.

---

# 127. Production Verification Rule

After an approved deployment:

```text
[ ] Homepage
[ ] Navigation
[ ] Critical pages
[ ] Contact
[ ] RFQ
[ ] Analytics
[ ] API where applicable
```

must be verified.

---

# 128. Rollback Rule

If a critical production issue occurs:

```text
Assess
 ↓
Rollback or Hotfix
 ↓
Verify
 ↓
Document
```

Do not make repeated random changes in production.

---

# 129. Monitoring Rule

Where monitoring exists, use it after deployment.

Review:

```text
Errors
Uptime
Lead flow
Performance
```

---

# 130. Handover Rule

At final delivery:

```text
Documentation
+
Ownership
+
Access
+
Training
+
Warranty
```

must be addressed.

---

# 131. Final Delivery Rule

The AI must not mark the project "complete" until the applicable final acceptance checklist has been satisfied.

Reference:

```text
16-project-acceptance-and-final-delivery-checklist.md
```

---

# 132. AI Work Sequence

The preferred sequence is:

```text
1. Understand Requirements
        ↓
2. Read Documentation
        ↓
3. Read Project Configuration
        ↓
4. Inspect Existing Code
        ↓
5. Inspect Design References
        ↓
6. Plan Changes
        ↓
7. Implement
        ↓
8. Test
        ↓
9. Review Design Fidelity
        ↓
10. Review Security
        ↓
11. Review Performance
        ↓
12. Review SEO
        ↓
13. Verify Deployment
        ↓
14. Update Documentation
```

---

# 133. Before Coding Checklist

```text
[ ] Requirements understood
[ ] Scope understood
[ ] Design references inspected
[ ] Page template identified
[ ] Content model identified
[ ] Existing components inspected
[ ] Existing route inspected
[ ] Configuration inspected
[ ] Relevant standards read
```

---

# 134. During Coding Checklist

```text
[ ] Existing components reused
[ ] Client data not hardcoded unnecessarily
[ ] Configuration used
[ ] Approved design followed
[ ] Security preserved
[ ] Accessibility considered
[ ] Performance considered
[ ] No unnecessary dependencies
```

---

# 135. After Coding Checklist

```text
[ ] Build
[ ] Tests
[ ] Console
[ ] Network
[ ] Responsive
[ ] Visual comparison
[ ] SEO
[ ] Analytics
[ ] Security
[ ] Performance
```

---

# 136. Before Commit

```text
[ ] No secrets
[ ] No debug code
[ ] No placeholder production data
[ ] No temporary files
[ ] No unnecessary dependencies
[ ] Code formatted
[ ] Tests pass
[ ] Build passes
```

---

# 137. Before Pull Request

```text
[ ] Requirements satisfied
[ ] Design matches
[ ] Architecture respected
[ ] Tests included/updated
[ ] Documentation updated if necessary
[ ] No scope creep
```

---

# 138. Before Production

```text
[ ] Release approved
[ ] Environment verified
[ ] Production configuration verified
[ ] Backup verified where applicable
[ ] Rollback known
[ ] Smoke tests prepared
```

---

# 139. After Production

```text
[ ] Homepage verified
[ ] Lead flow verified
[ ] Analytics verified
[ ] Errors checked
[ ] Monitoring checked
[ ] Client informed
```

---

# 140. AI Prohibited Behaviors

The AI must NOT:

```text
Invent client facts
Invent UI
Invent testimonials
Invent certifications
Invent statistics
Expose secrets
Disable security controls
Ignore tests
Ignore design references
Install unnecessary frameworks
Create unnecessary architecture
Modify production without authorization
Delete client data without approval
Change scope without approval
Claim verification without testing
```

---

# 141. AI Escalation Rule

When the AI encounters uncertainty involving:

```text
Scope
Design
Security
Client facts
Data privacy
Architecture
Production
```

it should not silently make a high-impact decision.

The appropriate action is to:

```text
Identify uncertainty
 ↓
Check project documentation
 ↓
Check configuration
 ↓
Use existing standard
 ↓
Escalate when ambiguity remains
```

---

# 142. Decision Rule

When several technically valid solutions exist:

Choose the one that best satisfies:

```text
1. Approved design
2. Existing architecture
3. Reusability
4. Simplicity
5. Security
6. Performance
7. Maintainability
```

---

# 143. Final AI Principle

The AI should behave like:

```text
Senior Implementation Engineer
```

not:

```text
Independent Product Designer
```

and not:

```text
Autonomous Business Decision Maker
```

---

# 144. Final Rule

The Business Growth AI workflow is:

```text
READ
 ↓
UNDERSTAND
 ↓
INSPECT
 ↓
CONFIGURE
 ↓
REUSE
 ↓
IMPLEMENT
 ↓
TEST
 ↓
COMPARE
 ↓
VERIFY
 ↓
DOCUMENT
```

Never:

```text
PROMPT
 ↓
GENERATE RANDOM WEBSITE
```

---

# 145. Final Standard

The AI succeeds when it produces a client website that is:

```text
Visually faithful
+
Functionally correct
+
Business appropriate
+
Content accurate
+
Reusable
+
Secure
+
Performant
+
Accessible
+
SEO-ready
+
Measurable
+
Maintainable
```

while preserving the Business Growth template as a reusable agency system.

---

# END OF DOCUMENT

```
```
