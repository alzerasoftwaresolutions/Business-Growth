# `10-system-architecture-and-technical-standards.md`

````md
# Business Growth
# System Architecture & Technical Standards

**Document:** 10-system-architecture-and-technical-standards.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines the technical architecture and development standards for the Business Growth package.

Business Growth is not a single fixed website.

It is a reusable agency template capable of supporting multiple business sectors through:

- Modular page templates
- Reusable components
- Structured content models
- Configurable lead-generation workflows
- Optional dynamic content
- Optional backend functionality
- Optional database usage
- Optional third-party integrations

The architecture must therefore prioritize:

- Reusability
- Maintainability
- Performance
- Security
- Clear separation of concerns
- Configurability
- Predictable development
- Safe reuse across clients
- AI-assisted implementation

---

# 2. Relationship to Starter Presence

The fundamental engineering standards established for Starter Presence remain applicable unless superseded by Business Growth requirements.

Starter Presence already defines:

- React
- Vite
- Tailwind CSS
- Node.js
- Express.js
- PostgreSQL where required
- Prisma where appropriate
- Git
- GitHub
- Vercel/Railway or equivalent
- Clean code
- Reusable components
- Production deployment

Reference:

`Starter Presence / 06-system-architecture-and-technical-standards.md`

This document focuses on the architectural requirements introduced by the richer Business Growth package.

---

# 3. Architecture Principle

The Business Growth architecture follows:

```text
Client Requirements
        ↓
Project Configuration
        ↓
Content Model
        ↓
Reusable Components
        ↓
Page Templates
        ↓
Application Logic
        ↓
Data / APIs
        ↓
Infrastructure
````

The architecture must allow each layer to evolve without unnecessarily rewriting the others.

---

# 4. Core Architecture Goal

The goal is:

> **Build the agency template once, configure it per client, and avoid rebuilding the underlying system for every project.**

The implementation should support:

```text
Same Architecture
      +
Different Client
      +
Different Content
      +
Different Enabled Modules
      +
Different Approved UI
      =
Different Website
```

---

# 5. Technology Baseline

The standard Business Growth stack is:

## Frontend

```text
React
Vite
Tailwind CSS
TypeScript where adopted by the agency/project
```

## Backend

When required:

```text
Node.js
Express.js
```

## Database

When required:

```text
PostgreSQL
Prisma
```

## Version Control

```text
Git
GitHub
```

## Deployment

Preferred:

```text
Vercel
Railway
Equivalent hosting provider where required
```

---

# 6. Technology Selection Principle

Do not add technology merely because the package supports it.

The rule is:

```text
Requirement
   ↓
Simplest Suitable Technology
```

not:

```text
Available Technology
   ↓
Find Something to Use It For
```

---

# 7. Complexity Budget

Business Growth must remain a business website architecture.

Do not introduce unnecessary:

* Microservices
* Message queues
* Multiple databases
* Redis
* Kubernetes
* GraphQL
* Dedicated search infrastructure
* Custom CMS platforms
* Event-driven infrastructure

unless actual project requirements justify them.

---

# 8. Architecture Levels

Business Growth may be implemented at three architectural levels.

## Level 1 — Static / Client-Rendered

Suitable for:

* Small content volume
* Infrequent content updates
* No persistent lead storage
* Simple forms
* Mostly public content

Architecture:

```text
Browser
  ↓
React / Vite
  ↓
Static Content
```

---

## Level 2 — Frontend + API

Suitable when:

* Forms require backend processing
* Dynamic content exists
* Lead handling requires server logic
* External integrations require protected credentials

Architecture:

```text
Browser
  ↓
React / Vite
  ↓
Express API
  ↓
External Services / Database
```

---

## Level 3 — Frontend + API + Database

Suitable when:

* Large structured content exists
* Leads need persistent storage
* Search/filtering requires server-side data
* Client content is frequently updated
* Additional integrations require persistent data

Architecture:

```text
Browser
  ↓
React / Vite
  ↓
Express API
  ↓
Prisma
  ↓
PostgreSQL
```

---

# 9. Architecture Selection Rule

Choose the lowest architectural level that comfortably satisfies the requirements.

Example:

If the client has:

```text
8 services
10 projects
No CMS
Email contact form
No persistent lead storage
```

a database may be unnecessary.

If the client has:

```text
100 products
50 projects
Blog
Search
RFQ storage
```

a backend/database may be justified.

---

# 10. Modular Architecture

Business Growth should be modular.

Conceptually:

```text
Core
├── Layout
├── Navigation
├── Routing
├── Design System
└── Shared UI

Business Modules
├── Services
├── Products
├── Projects
├── Blog
├── Locations
├── Team
└── Resources

Growth Modules
├── Contact
├── RFQ
├── Inquiry
├── Analytics
└── Conversion Tracking
```

Only required modules should be active in each project.

---

# 11. Feature Configuration

The project should use a central configuration mechanism where practical.

Conceptually:

```js
const siteFeatures = {
  services: true,
  products: true,
  productDetails: true,
  projects: true,
  blog: true,
  locations: false,
  team: false,
  rfq: true,
  resources: true
};
```

The actual implementation may differ.

The principle is centralized feature configuration.

---

# 12. Configuration vs Code Fork

Prefer:

```text
One Template
+
Configuration
```

over:

```text
One Template
+
Separate Fork for Every Client
```

A client-specific fork should only exist when configuration and controlled extensions cannot reasonably satisfy the requirement.

---

# 13. Module Independence

Modules should avoid unnecessary coupling.

For example:

```text
Blog
```

should not require:

```text
Products
```

to exist.

Similarly:

```text
Products
```

should not require:

```text
Blog
```

unless the approved architecture explicitly defines the relationship.

---

# 14. Core Module Dependency

Some dependencies are reasonable.

Example:

```text
Product Detail
    ↓
Product Content Model
    ↓
Product Components
```

But avoid:

```text
Product
    ↓
Blog
    ↓
Projects
    ↓
Locations
```

creating a chain that makes modules impossible to disable independently.

---

# 15. Frontend Architecture

Recommended conceptual structure:

```text
src/
├── app/
├── routes/
├── components/
├── features/
├── templates/
├── content/
├── services/
├── hooks/
├── lib/
├── styles/
├── assets/
└── types/
```

The exact directory names can vary.

The architectural separation should remain.

---

# 16. App Layer

The app layer is responsible for:

* Application initialization
* Providers
* Global configuration
* Routing setup
* Global error handling
* Global styles

It should not contain large amounts of business-specific rendering logic.

---

# 17. Route Layer

The route layer maps URLs to templates.

Example:

```text
/
→ HomeTemplate

/about
→ AboutTemplate

/services
→ ServicesTemplate

/services/:slug
→ ServiceDetailTemplate

/products
→ ProductsTemplate

/products/:slug
→ ProductDetailTemplate
```

Routes should not contain entire page implementations.

---

# 18. Template Layer

Templates compose components and content.

Example:

```text
ProductDetailTemplate
    ↓
ProductHero
ProductGallery
ProductSummary
ProductSpecifications
ProductDownloads
RelatedProducts
InquiryCTA
```

Templates should not contain raw database logic.

---

# 19. Component Layer

Components provide reusable interface behavior.

Examples:

```text
ProductCard
ServiceCard
ProjectCard
RFQForm
LocationCard
TestimonialCard
```

Components should receive structured data.

---

# 20. Feature Layer

Features combine related components and business logic.

Example:

```text
features/
├── products/
├── services/
├── projects/
├── leads/
├── search/
└── analytics/
```

A feature may contain:

```text
components
hooks
types
services
validation
configuration
```

This keeps business functionality grouped.

---

# 21. Content Layer

The content layer represents structured business information.

Examples:

```text
Company
Product
Service
Project
Article
Location
Person
Testimonial
Resource
```

Content models should follow:

`05-content-model-and-content-structure.md`

---

# 22. Data Layer

When dynamic data is used, separate data access from UI.

Example:

```text
Component
   ↓
Feature Hook / Service
   ↓
API Client
   ↓
Backend
```

Do not place raw API calls throughout presentation components.

---

# 23. API Client Layer

A shared API client should handle:

* Base URL
* Headers
* Error handling
* Request behavior
* Authentication where necessary
* Response normalization where appropriate

Do not duplicate fetch configuration throughout the application.

---

# 24. API Architecture

When a backend exists:

```text
Frontend
   ↓
API Client
   ↓
Express Route
   ↓
Controller / Handler
   ↓
Service
   ↓
Repository / Prisma
   ↓
Database
```

The exact internal layering may be simplified for small projects.

---

# 25. Controller Responsibility

Controllers should primarily handle:

* Request parsing
* Validation invocation
* Calling business services
* Response formatting

Controllers should not contain large amounts of business logic.

---

# 26. Service Layer

Business logic should reside in services where the complexity justifies it.

Example:

```text
Lead Service
Product Service
Search Service
Content Service
```

This makes logic reusable outside a particular HTTP route.

---

# 27. Repository / Data Access Layer

Where useful, isolate database operations.

Example:

```text
ProductRepository
LeadRepository
ProjectRepository
```

The repository should not know about UI presentation.

---

# 28. Prisma

When PostgreSQL is used with Prisma:

* Define explicit models.
* Use migrations.
* Avoid raw SQL unless required.
* Validate inputs.
* Select only required fields where practical.
* Avoid unbounded queries.

---

# 29. PostgreSQL

Use PostgreSQL when the project requires persistent structured data.

Potential entities:

```text
Products
Services
Projects
Articles
Locations
Leads
Resources
```

Do not create database tables for information that does not need persistence.

---

# 30. Database Schema Principle

The database schema should represent the content model.

Example:

```text
Product
  ↓
Category
  ↓
Related Content
  ↓
Lead Context
```

It should not be shaped around individual UI components.

---

# 31. Database Normalization

Avoid unnecessary duplication.

Example:

Do not store:

```text
Company Phone
```

inside every product record.

Use centralized company/location data where appropriate.

---

# 32. Database Indexing

Index fields used frequently for:

* Slugs
* IDs
* Foreign keys
* Searchable categories
* Status
* Dates
* Published content

Do not create indexes without considering actual query patterns.

---

# 33. Slug Uniqueness

Public content slugs must be unique within their content type.

Example:

```text
/products/hydraulic-press
```

should map to exactly one product.

---

# 34. Database Pagination

Large collections should use server-side pagination.

Examples:

```text
Products
Projects
Articles
Properties
Vehicles
Tours
Leads
```

Avoid loading thousands of records into the browser unnecessarily.

---

# 35. API Response Design

API responses should contain only what the client needs.

Example:

```text
Product List
{
  id,
  name,
  slug,
  thumbnail,
  category
}
```

Product Detail can contain:

```text
description
gallery
specifications
downloads
relations
```

---

# 36. API Error Structure

Errors should have a consistent shape where possible.

Example:

```json
{
  "success": false,
  "message": "Unable to process your request.",
  "code": "VALIDATION_ERROR"
}
```

Do not expose internal stack traces.

---

# 37. HTTP Status Codes

Use appropriate status codes.

Examples:

```text
200 OK
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Entity
429 Too Many Requests
500 Internal Server Error
```

Do not return `200` for every failure.

---

# 38. API Validation Layer

Validate incoming requests before business logic.

Example:

```text
Request
 ↓
Schema Validation
 ↓
Business Logic
 ↓
Database
```

Validation may use an appropriate library or custom implementation.

---

# 39. Type Safety

Where TypeScript is used, type:

* Content models
* API responses
* Component props
* Configuration
* Lead objects
* Form data
* Route parameters

Avoid unnecessary `any`.

---

# 40. Shared Types

Where frontend and backend share models, avoid maintaining completely separate contradictory definitions.

Possible approaches:

```text
Shared Type Package
Shared Schema
Generated Types
```

The exact implementation depends on project size.

---

# 41. Form Architecture

Forms should be separated into:

```text
Presentation
Validation
Submission
Success/Error state
```

Example:

```text
RFQForm
   ↓
Validation Schema
   ↓
Lead Service
   ↓
API
```

---

# 42. Form Validation

Use a shared validation schema where possible.

This prevents:

```text
Frontend validation:
Different rules

Backend validation:
Different rules
```

The server remains authoritative.

---

# 43. Lead Architecture

The lead subsystem should remain independent enough to support different lead types.

Conceptually:

```text
Lead
├── Contact
├── RFQ
├── Product Inquiry
├── Service Inquiry
├── Property Inquiry
├── Vehicle Inquiry
├── Tour Inquiry
└── Appointment Request
```

See:

`06-lead-generation-and-rfq.md`

---

# 44. Lead Routing Architecture

Use a routing/service layer for lead destinations.

Conceptually:

```text
Lead
 ↓
Lead Service
 ↓
Routing
 ├── Email
 ├── Database
 ├── CRM
 └── External Service
```

This allows future CRM integration without rewriting forms.

---

# 45. Content Architecture

Content retrieval should be separated from content presentation.

Example:

```text
Product API
    ↓
Product Data
    ↓
Product Detail Template
    ↓
Product Components
```

Do not make the Product Card responsible for retrieving its own data.

---

# 46. Content Loading Strategy

Choose appropriate loading mode:

```text
Static
Server/API
Client fetch
Hybrid
```

based on:

* Content frequency
* SEO requirements
* Performance
* Hosting
* Complexity

---

# 47. Static Content

Static content is appropriate when:

* Data changes rarely.
* Client does not need a CMS.
* Content volume is manageable.
* Build/deployment updates are acceptable.

---

# 48. Dynamic Content

Dynamic content is appropriate when:

* Content changes frequently.
* Lead data must persist.
* Search/filtering is significant.
* Content volume is large.
* Multiple data relationships exist.

---

# 49. CMS Integration Boundary

A CMS may be integrated later.

The content model should remain independent from the CMS implementation.

Example:

```text
Content Model
      ↓
CMS Adapter
      ↓
Application
```

or:

```text
Content Model
      ↓
Local Data
      ↓
Application
```

The templates should not depend directly on a particular CMS.

---

# 50. No Automatic CMS

Business Growth does not include a client CMS by default.

Do not add:

* Admin dashboard
* Login
* Content editor
* Publishing workflow

unless separately approved.

---

# 51. Search Architecture

Search should be modular.

Small dataset:

```text
Content
 ↓
Client-Side Search
```

Large dataset:

```text
Search UI
 ↓
API
 ↓
Database Search
```

Very large/complex search:

```text
Search UI
 ↓
Search API
 ↓
Dedicated Search Service
```

The most complex option is not the default.

---

# 52. Filter Architecture

Filters should operate on actual content fields.

Example:

```text
Product
├── Category
├── Brand
├── Industry
└── Application
```

The filter system should not contain hardcoded categories unrelated to the content model.

---

# 53. Search and Filter Separation

Search and filters are related but different.

Search:

> "Find something by text."

Filter:

> "Narrow the existing collection using known attributes."

Keep the implementation responsibilities clear.

---

# 54. Media Architecture

Images, videos, and downloadable files should be handled through appropriate media utilities.

Examples:

```text
Image component
Responsive image helper
Gallery
Lightbox
Video component
Download component
```

Avoid every page implementing its own image behavior.

---

# 55. Asset Management

Static assets should be organized:

```text
assets/
├── images/
├── icons/
├── fonts/
├── logos/
└── documents/
```

The exact structure may vary.

---

# 56. Image Service Integration

Where Cloudinary or another image service is used:

```text
Content
 ↓
Image Reference
 ↓
Image Service
 ↓
Optimized Delivery
```

Do not expose private credentials to the browser.

---

# 57. Media Transformations

Where supported, request appropriate:

* Width
* Height
* Format
* Quality
* Crop
* Focal point

This should be centralized in the image utility.

---

# 58. Third-Party Integration Layer

External services should be isolated.

Examples:

```text
integrations/
├── analytics/
├── maps/
├── email/
├── crm/
├── whatsapp/
└── monitoring/
```

The actual organization may differ.

The principle is to avoid scattering third-party API logic throughout components.

---

# 59. Integration Adapter Pattern

Use adapters where an external service may change.

Conceptually:

```text
Application
    ↓
EmailService
    ↓
Provider
```

rather than:

```text
Component
   ↓
Direct SMTP implementation
```

This makes provider replacement easier.

---

# 60. Analytics Architecture

Analytics should use a centralized abstraction.

Conceptually:

```text
Interaction
   ↓
Analytics Service
   ↓
Provider
```

The application should not contain provider-specific analytics code in every component.

---

# 61. Analytics Provider Independence

Where practical:

```text
Application
 ↓
trackEvent()
 ↓
Analytics Provider
```

This makes it easier to change providers without rewriting the website.

---

# 62. Routing Architecture

Routes must be:

* Predictable
* Search-friendly
* Stable
* Configurable
* Consistent

Example:

```text
/products
/products/:slug

/services
/services/:slug

/projects
/projects/:slug

/blog
/blog/:slug
```

---

# 63. Dynamic Route Safety

Dynamic route parameters must be validated.

Example:

```text
/products/:slug
```

must safely handle:

```text
invalid slug
missing product
archived product
malformed parameter
```

without causing application crashes.

---

# 64. 404 Architecture

Unknown content should produce an appropriate result.

Example:

```text
/products/does-not-exist
     ↓
404 Content State
```

Do not expose raw database errors.

---

# 65. Redirect Architecture

If a content slug changes:

```text
Old Slug
   ↓
Redirect
   ↓
New Slug
```

Redirects should be centrally managed where possible.

---

# 66. Frontend State Architecture

Use local state for local concerns.

Use shared/global state only where multiple distant components actually depend on the same state.

Examples:

Local:

```text
RFQ form
Mobile menu
Filter state
Modal state
```

Global:

```text
Site configuration
Authentication where applicable
Global user preference where applicable
```

Avoid unnecessary global state.

---

# 67. Server State

Server data should be treated differently from UI state.

Examples:

```text
Products
Services
Projects
Articles
Locations
Leads
```

Use an appropriate data-fetching strategy rather than storing every API response in arbitrary global state.

---

# 68. API Caching

Where appropriate, cache stable public data.

Examples:

```text
Services
Products
Projects
Articles
Locations
```

Do not cache sensitive lead information incorrectly.

---

# 69. Error Boundaries

The frontend should use appropriate error boundaries or equivalent mechanisms to prevent one component failure from crashing the entire site.

Example:

```text
Project Gallery Error
        ↓
Project Page remains usable
```

where practical.

---

# 70. Global Error Handling

Application-level errors should have:

* Logging
* Safe user feedback
* Recovery where possible

Avoid blank-screen failures.

---

# 71. Loading Architecture

Dynamic content should have appropriate states:

```text
Loading
Success
Empty
Error
```

These states should be defined in the component/template system.

---

# 72. Environment Configuration

Separate configuration by environment:

```text
Development
Preview/Staging
Production
```

Examples:

```text
API URL
Analytics ID
Database
CORS origin
Third-party credentials
```

Secrets must remain server-side.

---

# 73. Environment Validation

Application startup should validate required environment variables where appropriate.

For example:

```text
DATABASE_URL required?
JWT_SECRET required?
CORS_ORIGIN required?
```

Fail clearly when required production configuration is missing.

Do not silently use unsafe defaults.

---

# 74. Local Development Defaults

Safe local defaults may exist for development.

However:

```text
Development fallback
    ≠
Production fallback
```

Never let:

```text
localhost
```

be the silent fallback for production API configuration.

---

# 75. Build Architecture

Production build must be deterministic.

Verify:

```text
Same Code
+
Same Lockfile
+
Same Environment
=
Predictable Build
```

Use lockfiles.

---

# 76. Dependency Locking

Commit the appropriate dependency lockfile.

Examples:

```text
package-lock.json
pnpm-lock.yaml
yarn.lock
```

depending on the package manager.

Do not mix package managers unnecessarily.

---

# 77. Package Manager Standard

Choose one package manager per project.

Examples:

```text
npm
pnpm
yarn
```

Do not alternate between them without a deliberate migration.

---

# 78. Code Formatting

Use consistent formatting.

Recommended tooling may include:

```text
Prettier
ESLint
TypeScript
```

Use only what the project needs.

---

# 79. Linting

Linting should identify:

* Unused imports
* Unsafe patterns
* Invalid hooks
* Inconsistent code
* Potential bugs

Do not disable lint rules globally to make the build pass.

---

# 80. Testing Architecture

Business Growth should test at multiple levels.

```text
Component
   ↓
Feature
   ↓
Template
   ↓
Integration
   ↓
Production
```

Refer to:

`12-testing-and-qa.md`

---

# 81. Component Testing

Test important reusable components:

```text
ProductCard
ServiceCard
ProjectCard
RFQForm
Search
Filters
Gallery
Location
```

Especially test configurable variants.

---

# 82. Integration Testing

Test:

```text
Frontend
 ↓
API
 ↓
Database
```

where applicable.

Also test:

```text
Website
 ↓
Lead Routing
 ↓
Email / CRM
```

where applicable.

---

# 83. End-to-End Testing

Important user journeys should be tested.

Examples:

```text
Product
 ↓
Product Detail
 ↓
RFQ
 ↓
Submission
```

```text
Service
 ↓
Service Detail
 ↓
Consultation
 ↓
Submission
```

---

# 84. Architecture Documentation

Every project should document:

```text
Technology
Architecture
Modules
Routes
Content Models
Integrations
Environment Variables
Deployment
```

Do not document secrets.

---

# 85. Project Structure Standard

Recommended conceptual structure:

```text
project/
│
├── src/
│   ├── app/
│   ├── routes/
│   ├── templates/
│   ├── components/
│   ├── features/
│   ├── content/
│   ├── services/
│   ├── hooks/
│   ├── lib/
│   ├── types/
│   └── styles/
│
├── public/
│
├── docs/
│   ├── design/
│   ├── architecture/
│   └── ui-reference/
│
├── tests/
│
├── .env.example
├── README.md
└── package.json
```

The actual structure may differ depending on project complexity.

---

# 86. Backend Structure

Where Express is used:

```text
server/
├── routes/
├── controllers/
├── services/
├── repositories/
├── middleware/
├── schemas/
├── integrations/
├── utils/
├── config/
└── app/
```

Not every directory is necessary in every project.

Avoid creating empty architectural layers without purpose.

---

# 87. Middleware

Useful middleware may include:

```text
CORS
Security headers
Rate limiting
Request parsing
Validation
Error handling
Authentication
Authorization
Logging
```

Only implement relevant middleware.

---

# 88. Validation Schemas

Keep validation schemas close to the feature they validate.

Examples:

```text
RFQ schema
Contact schema
Product query schema
Search schema
```

Avoid duplicate validation logic.

---

# 89. Service Boundary

Business logic should not depend directly on React components.

Example:

```text
RFQForm
  ↓
Lead Service
  ↓
API
```

not:

```text
RFQForm
  ↓
Direct database access
```

---

# 90. Database Boundary

Frontend code must never access PostgreSQL directly.

Correct:

```text
Browser
  ↓
API
  ↓
Prisma
  ↓
PostgreSQL
```

---

# 91. Public Content Boundary

Public content may be safely exposed through controlled API endpoints or static rendering.

Private content must never be exposed through public content endpoints.

---

# 92. Feature Flags

Features may be enabled through configuration.

Examples:

```text
products
projects
blog
locations
rfq
search
resources
```

Feature flags must not be used as a substitute for proper authorization.

---

# 93. Feature Flags vs Authorization

These are different.

Feature flag:

> Is the feature enabled?

Authorization:

> Is this user allowed to perform this action?

Never use:

```text
featureEnabled === true
```

as the only security control for protected data.

---

# 94. Multi-Client Template Isolation

The agency template should not accidentally mix data between clients.

Each client project should have its own:

* Repository
* Environment
* Database where applicable
* Storage
* Analytics property
* Deployment project

Do not share client data stores unless explicitly designed and secured as a multi-tenant platform.

---

# 95. Client Isolation

Default architecture:

```text
Client A
├── Repository A
├── Environment A
├── Database A
└── Hosting A

Client B
├── Repository B
├── Environment B
├── Database B
└── Hosting B
```

This is simpler and safer for agency websites.

---

# 96. Multi-Tenant Architecture Boundary

A centralized multi-tenant platform is not part of the default Business Growth package.

Do not create:

```text
One Database
+
All Clients
+
Tenant Switching
```

unless the agency intentionally develops a SaaS-like platform.

That is a different architecture.

---

# 97. Client Customization Layer

The client-specific layer should contain:

```text
Brand
Configuration
Content
Approved UI
Integrations
```

not modifications to the entire core architecture.

---

# 98. Template Core vs Client Project

Conceptually:

```text
Business Growth Core
        │
        ├── Templates
        ├── Components
        ├── Utilities
        └── Standards
                │
                ↓
        Client Project
                │
        ├── Configuration
        ├── Content
        ├── Branding
        ├── UI References
        └── Integrations
```

---

# 99. Template Updates

When improving the agency template:

```text
Core Template
      ↓
Change
      ↓
Test
      ↓
Version
      ↓
Adopt in New Projects
```

Do not automatically push changes into live client projects without review.

---

# 100. Client Project Independence

Once deployed, a client's project should remain stable even if the agency template later changes.

A template update should not silently modify the existing production site.

---

# 101. Upgrade Strategy

If a client project adopts a newer Business Growth template version:

```text
Current Project
      ↓
Compatibility Review
      ↓
Migration Plan
      ↓
Testing
      ↓
Approval
      ↓
Deployment
```

Do not blindly replace the entire codebase.

---

# 102. Approved UI Integration

Each project must include:

```text
Approved UI Reference
+
Business Growth Component System
+
Business Growth Templates
```

The code must implement the approved visual design.

The architecture must not force every client into one visual appearance.

---

# 103. UI/Architecture Separation

The architecture should allow:

```text
Same Product Data
+
Different Approved UI
=
Different Client Experience
```

Example:

```text
Product Model
      ↓
Product Template
      ↓
Client A Design
```

and:

```text
Product Model
      ↓
Product Template
      ↓
Client B Design
```

without changing the underlying data model unnecessarily.

---

# 104. Design Variant vs Feature Variant

A visual difference should generally be handled in the design/component layer.

A functional difference should generally be handled in the feature/content layer.

Example:

```text
Different Button Color
→ Design

Request Quote vs Request Consultation
→ Configuration / Lead Type
```

---

# 105. No Business Logic in Styling

Do not encode business decisions solely through CSS classes.

For example:

Bad:

```text
.blue-card-means-product
```

Prefer:

```text
<ProductCard type="product">
```

with the design system controlling appearance.

---

# 106. Content-Driven Rendering

Templates should render from content/configuration.

Example:

```text
products.map(product => (
  <ProductCard product={product} />
))
```

rather than manually writing:

```text
ProductCard A
ProductCard B
ProductCard C
```

---

# 107. Configuration-Driven Navigation

Navigation should be centrally defined.

Conceptually:

```text
Enabled Templates
      ↓
Navigation Configuration
      ↓
Header
Footer
Mobile Navigation
Breadcrumbs
```

This reduces inconsistencies.

---

# 108. Configuration-Driven CTA

Primary CTA should be configurable.

Example:

```text
Manufacturing
→ Request Quote

Consulting
→ Request Consultation

Education
→ Request Information
```

Do not duplicate entire header components just to change the CTA label.

---

# 109. Configuration-Driven Contact Methods

A client may enable:

```text
Phone
Email
WhatsApp
Maps
Social
```

Only enabled methods should appear.

Avoid rendering empty contact icons.

---

# 110. Content Fallback Architecture

If optional content is missing:

```text
No Testimonials
   ↓
Hide Testimonial Section
```

not:

```text
Show "Testimonials Coming Soon"
```

unless explicitly required.

---

# 111. Error Boundaries by Module

Where appropriate, isolate risky optional modules.

Example:

```text
Map Component
   ↓
Fails
   ↓
Contact Page remains functional
```

---

# 112. Performance Architecture Review

Before introducing a new architecture component ask:

```text
What problem does this solve?

Can the current architecture solve it?

What performance cost does it add?

What security cost does it add?

Can it be reused?

Does the client actually need it?
```

---

# 113. Security Architecture Review

Before adding a feature:

```text
What data does it collect?

Who can access it?

Where is it stored?

What external services receive it?

What happens if it fails?

What is the attack surface?
```

---

# 114. Maintenance Architecture

The system should be maintainable by another developer who did not build the original project.

This requires:

* Clear file structure
* Predictable naming
* Documentation
* Reusable components
* Minimal hidden dependencies
* Centralized configuration
* Clear data flow

---

# 115. AI Coding Architecture Rules

AI coding agents must:

```text
[ ] Read the project architecture before coding
[ ] Read the page template specification
[ ] Read the component system
[ ] Read the content model
[ ] Reuse existing modules
[ ] Reuse existing services
[ ] Preserve project structure
[ ] Avoid unnecessary dependencies
[ ] Avoid unnecessary architecture
[ ] Preserve approved UI
[ ] Keep business logic out of UI components
[ ] Validate data
[ ] Test changes
```

---

# 116. AI Must Not Rebuild the Architecture

If an existing:

```text
Product
```

module exists, the AI must not create a second product system merely because a client uses a different design.

The appropriate sequence is:

```text
Existing Architecture
      ↓
Check Reusability
      ↓
Extend Configuration
      ↓
Extend Component
      ↓
Create New Module Only If Necessary
```

---

# 117. AI Must Not Introduce Unnecessary Frameworks

Do not add a new framework/library simply because:

> "It is modern."

Technology must solve an actual requirement.

---

# 118. AI Must Not Over-Engineer Small Projects

For example, a client with:

```text
12 products
8 services
5 projects
RFQ email
```

probably does not need:

```text
Microservices
Dedicated search cluster
Redis
GraphQL
Kubernetes
```

unless there is an explicit reason.

---

# 119. AI Must Not Under-Engineer Real Requirements

The opposite is also true.

A client with:

```text
300 products
100 projects
Persistent leads
Search
Filtering
Frequent content updates
```

should not be forced into a static architecture that creates maintenance or performance problems.

---

# 120. Architecture Decision Record

For significant architectural decisions, document:

```text
Decision:
Problem:
Options:
Chosen Solution:
Reason:
Trade-offs:
Date:
```

This is especially useful for:

* Database adoption
* Search
* CMS
* CRM integration
* File storage
* Authentication
* Caching

---

# 121. Technical Debt

Technical debt should be identified rather than hidden.

Record:

```text
Technical Debt:
Impact:
Reason:
Priority:
Planned Resolution:
```

Do not silently allow temporary architecture to become permanent.

---

# 122. Definition of Technical Completeness

The Business Growth architecture is technically complete when:

```text
[✓] Modules are clearly separated
[✓] Templates are reusable
[✓] Components are reusable
[✓] Content models are separated from presentation
[✓] Client configuration is centralized
[✓] Routes are predictable
[✓] Data access is separated from UI
[✓] API boundaries are clear
[✓] Forms are structured
[✓] Lead generation is modular
[✓] Third-party integrations are isolated
[✓] Environment configuration is separated
[✓] Security boundaries are clear
[✓] Performance architecture is considered
[✓] Testing supports the architecture
[✓] Documentation exists
```

---

# 123. Architecture Acceptance Checklist

Before development begins:

```text
[ ] Business requirements understood
[ ] Required modules identified
[ ] Templates selected
[ ] Components identified
[ ] Content models identified
[ ] Lead flows identified
[ ] Integrations identified
[ ] Architecture level selected
[ ] Static vs dynamic decision made
[ ] Database need evaluated
[ ] Search need evaluated
[ ] CMS need evaluated
[ ] File upload need evaluated
```

---

# 124. Technical Pre-Development Checklist

```text
[ ] Repository created
[ ] Branch strategy established
[ ] Technology versions selected
[ ] Project structure created
[ ] Environment strategy defined
[ ] UI references added
[ ] Design system added
[ ] Page templates selected
[ ] Content model selected
[ ] Component system available
[ ] Lead generation configuration defined
```

---

# 125. Architecture During Development

The developer/AI should periodically verify:

```text
[ ] No duplicate modules
[ ] No duplicate models
[ ] No unnecessary dependencies
[ ] No hardcoded client data
[ ] No direct database access from UI
[ ] No API logic in presentation components
[ ] No unauthorized third-party services
[ ] No architectural drift
```

---

# 126. Architecture Before Production

```text
[ ] Production environment defined
[ ] API URL correct
[ ] Database correct
[ ] CORS correct
[ ] Secrets secure
[ ] Build succeeds
[ ] Routes work
[ ] API works
[ ] Database works where applicable
[ ] Lead routing works
[ ] Monitoring configured
[ ] Rollback path available
```

---

# 127. Final System Architecture

The intended Business Growth architecture is:

```text
                         CLIENT
                           │
                           ↓
                    APPROVED UI/UX
                           │
                           ↓
                    PAGE TEMPLATES
                           │
                           ↓
                    COMPONENT SYSTEM
                           │
                           ↓
                    CONTENT MODELS
                           │
                 ┌─────────┴─────────┐
                 │                   │
              STATIC              DYNAMIC
              CONTENT             CONTENT
                 │                   │
                 │                 API
                 │                   │
                 │             BUSINESS SERVICES
                 │                   │
                 │            ┌──────┴──────┐
                 │            │             │
                 │        PostgreSQL      External
                 │        / Prisma        Services
                 │                          │
                 │                ┌─────────┼─────────┐
                 │                │         │         │
                 │             Email      CRM      Analytics
                 │
                 └──────────────┬───────────────┘
                                ↓
                           PRODUCTION
```

---

# 128. Final Architecture Principle

Business Growth should be architected as:

```text
Reusable
+
Configurable
+
Content-Driven
+
Component-Based
+
Template-Based
+
Secure
+
Performant
+
Maintainable
```

The agency should not rebuild the system for every client.

Instead:

```text
Business Growth Core
        ↓
Client Requirements
        ↓
Select Modules
        ↓
Select Templates
        ↓
Configure Content
        ↓
Apply Client Branding
        ↓
Implement Approved UI
        ↓
Configure Lead Flows
        ↓
Test
        ↓
Deploy
```

The architecture must support all intended sectors without becoming a generic abstraction that loses business meaning.

The most important rule is:

> **Abstract what is genuinely shared, specialize what is genuinely different, and configure what changes from client to client.**

The final objective is not technical complexity.

It is a reusable system that allows the agency to deliver richer business websites faster, more consistently, and with fewer architectural mistakes while still giving each client a website that accurately fits their industry, content, business goals, and approved design.

```
```
