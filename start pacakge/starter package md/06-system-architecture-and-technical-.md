# `06-system-architecture-and-technical-standards.md`

````md
# Stonebridge Construction
# Starter Presence — System Architecture & Technical Standards

**Version:** 1.0  
**Status:** Approved for Development  
**Package:** Starter Presence

---

# 1. Purpose

This document defines the technical architecture, project structure, development standards, technology decisions, and implementation rules for websites delivered under the Starter Presence package.

The purpose is to ensure that every project is:

- Structured consistently.
- Maintainable.
- Secure.
- Scalable within the package scope.
- Easy for another developer to understand.
- Compatible with the approved UI/UX design.
- Efficient to deploy.
- Easy to test.
- Easy to maintain after delivery.

This document works together with:

- `01-project-requirements.md`
- `02-information-architecture-and-routing.md`
- `03-security-standards.md`
- `04-seo-and-analytics.md`
- `05-performance-and-optimization.md`
- `complete-stonebridge-design-system-specification.md`

These documents must be treated as the project's technical source of truth.

---

# 2. Core Architecture Principle

The architecture must remain proportional to the project.

The Starter Presence package is primarily a company profile website.

Therefore:

```text
Simple requirements
        ↓
Simple architecture
        ↓
Minimal infrastructure
        ↓
Lower maintenance cost
        ↓
Reliable delivery
````

Do not introduce enterprise-level architecture into a simple company website without a documented requirement.

---

# 3. Standard Technology Stack

The standard frontend stack is:

```text
React
Vite
Tailwind CSS
```

Backend, only when required:

```text
Node.js
Express.js
```

Database, only when required:

```text
PostgreSQL
```

ORM, when PostgreSQL is used:

```text
Prisma
```

Version control:

```text
Git
GitHub
```

Typical deployment:

```text
Frontend → Vercel or suitable hosting provider
Backend  → Railway or suitable cloud provider
Database → PostgreSQL provider
```

The hosting provider may change according to:

* Client requirements.
* Geographic availability.
* Budget.
* Hosting capabilities.
* Domain requirements.
* Performance requirements.

---

# 4. Architecture Selection

Before development begins, determine which architecture the project actually requires.

## Architecture A — Static/Frontend-Only

Use when the website only requires:

* Informational pages.
* Company information.
* Services/products.
* Projects/gallery.
* Contact information.
* External communication links.
* Basic forms handled through an external service.

Architecture:

```text
Browser
   ↓
React + Vite
   ↓
Static Production Build
   ↓
Hosting/CDN
```

No custom backend or database is required.

---

# 5. Architecture B — Frontend + External Services

Use when the website requires functionality such as:

* Contact form.
* Analytics.
* Google Maps.
* WhatsApp.
* Email service.
* Search Console.
* Other third-party integrations.

Architecture:

```text
Browser
   ↓
React + Vite
   ↓
Third-Party Services
```

Only integrate services that are actually required.

---

# 6. Architecture C — Frontend + Backend

Use when the project requires custom server-side functionality.

Example:

```text
Browser
   ↓
React + Vite
   ↓
Node.js + Express
   ↓
PostgreSQL
```

Possible reasons:

* Custom contact management.
* Admin functionality.
* Dynamic content.
* Custom inquiry storage.
* Authentication.
* Future business requirements.

Do not add a backend merely because React is being used.

---

# 7. Architecture D — Frontend + Backend + Database

Use only when persistent application data is required.

Example:

```text
                    ┌──────────────┐
                    │   Browser    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ React/Vite   │
                    └──────┬───────┘
                           │ HTTPS
                           ▼
                    ┌──────────────┐
                    │ Node/Express │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ PostgreSQL   │
                    └──────────────┘
```

The database must not be introduced without an actual data requirement.

---

# 8. Architecture Decision Record

Before implementation, document the selected architecture.

Example:

```text
Project:
Stonebridge Construction

Architecture:
Frontend-only

Reason:
The website is primarily informational and does not require
custom persistent application data.

Backend:
Not required

Database:
Not required

External Services:
Analytics
Google Maps
WhatsApp
Contact form service
```

If requirements change, reassess the architecture.

---

# 9. Repository Structure

The repository should have a clear structure.

For a frontend-only project:

```text
project/
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── favicon/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── sections/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── routes/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── README.md
├── package.json
├── vite.config.js
└── ...
```

The exact structure may be adapted when the project requires it.

---

# 10. Components Directory

Reusable interface components belong in:

```text
src/components/
```

Examples:

```text
components/
├── Button.jsx
├── Container.jsx
├── SectionHeading.jsx
├── Image.jsx
├── Card.jsx
├── Logo.jsx
├── Header.jsx
├── Footer.jsx
└── ContactForm.jsx
```

Components should represent reusable UI patterns.

---

# 11. Sections Directory

Large page sections belong in:

```text
src/sections/
```

Example:

```text
sections/
├── home/
│   ├── Hero.jsx
│   ├── TrustMetrics.jsx
│   ├── AboutPreview.jsx
│   ├── ServicesPreview.jsx
│   ├── FeaturedProject.jsx
│   ├── Testimonials.jsx
│   └── FinalCTA.jsx
│
├── about/
├── services/
├── projects/
└── contact/
```

This keeps page-specific content separate from globally reusable components.

---

# 12. Pages Directory

Each route should have an appropriate page component.

Example:

```text
src/pages/

Home.jsx
About.jsx
Services.jsx
Projects.jsx
Contact.jsx
NotFound.jsx
```

Pages should primarily compose sections rather than contain every UI detail themselves.

Example:

```jsx
function Home() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedProject />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
```

---

# 13. Layouts

Global layouts belong in:

```text
src/layouts/
```

Example:

```text
layouts/
└── MainLayout.jsx
```

The main layout may contain:

```text
Header
Main content
Footer
```

---

# 14. Routing

Routing must follow:

```text
02-information-architecture-and-routing.md
```

Routes should be predictable and SEO-friendly.

Example:

```text
/
 /about
 /services
 /projects
 /contact
```

Do not invent routes that are not part of the approved information architecture.

---

# 15. Route Naming

Use lowercase, readable paths.

Preferred:

```text
/about
/services
/projects
/contact
```

Avoid:

```text
/AboutUs
/OurServicesPage
/page123
/service-page-final
```

---

# 16. Route Responsibilities

Each route should have one clear purpose.

Example:

```text
/              → Homepage
/about         → Company information
/services      → Services/products
/projects      → Gallery/projects
/contact       → Contact information
```

Do not duplicate entire pages unnecessarily.

---

# 17. UI Source of Truth

The approved UI design is mandatory.

The implementation must reference:

```text
complete-stonebridge-design-system-specification.md
```

and the project's approved UI/UX files.

The AI coding agent must not generate a new design.

---

# 18. Design Implementation Rule

The development workflow is:

```text
Approved UI/UX
      ↓
Design System
      ↓
Wireframe / Page Design
      ↓
Component Mapping
      ↓
Implementation
      ↓
Responsive Adaptation
      ↓
QA
```

Not:

```text
Requirements
      ↓
AI invents design
      ↓
Implementation
```

---

# 19. No AI-Generated Replacement Design

The coding AI must not:

* Invent new layouts.
* Change section order.
* Replace the approved navigation.
* Replace approved cards.
* Change the visual hierarchy.
* Introduce a different design style.
* Replace typography.
* Add unnecessary sections.
* Remove approved sections.

If the design cannot be implemented exactly, the agent should identify the technical issue rather than silently redesigning the interface.

---

# 20. Design Assets

Approved assets should be organized clearly.

Example:

```text
public/
├── images/
│   ├── hero/
│   ├── projects/
│   ├── about/
│   ├── services/
│   └── testimonials/
│
├── icons/
└── fonts/
```

Do not randomly place assets throughout the repository.

---

# 21. Asset Naming

Use predictable names.

Preferred:

```text
hero-construction-site.webp
apex-tower.webp
industrial-facility.webp
company-team.webp
```

Avoid:

```text
image1.png
newimage.png
final2.png
IMG_8837.jpg
```

---

# 22. Content Architecture

Content should be separated from presentation where practical.

For repeated content, use structured data.

Example:

```js
const services = [
  {
    title: "Commercial High-Rises",
    description: "...",
    image: "/images/services/high-rise.webp"
  },
  {
    title: "Industrial Facilities",
    description: "...",
    image: "/images/services/industrial.webp"
  }
];
```

Then render through reusable components.

This makes future content updates easier.

---

# 23. Hardcoded Content

Hardcoding is acceptable for small static websites when appropriate.

However, repeated information should not be duplicated unnecessarily.

Avoid:

```text
Same phone number
Same email
Same address
Same company name
```

being manually repeated across many unrelated components.

Centralize shared business information where practical.

---

# 24. Site Configuration

Create a central configuration/data source for common business information.

Example:

```text
src/data/siteConfig.js
```

Possible content:

```text
Company name
Phone
Email
Address
Social links
Business hours
WhatsApp number
Google Maps URL
```

This reduces inconsistent information.

---

# 25. Environment Variables

Sensitive or environment-specific values must not be hardcoded.

Examples:

```text
API URLs
Analytics identifiers where appropriate
Backend URLs
Service credentials
Private keys
Database URLs
JWT secrets
```

Use:

```text
.env
.env.local
.env.production
```

as appropriate.

Never commit secrets to Git.

---

# 26. Environment Variable Rules

Frontend environment variables should contain only values that are safe to expose to the browser.

For Vite:

```text
VITE_*
```

variables are publicly exposed in the frontend build.

Therefore:

```text
NEVER:
VITE_DATABASE_PASSWORD
VITE_PRIVATE_API_KEY
VITE_JWT_SECRET
```

---

# 27. Backend Environment Variables

Backend secrets may include:

```text
DATABASE_URL
JWT_SECRET
PRIVATE_API_KEYS
EMAIL_SERVICE_CREDENTIALS
```

These must remain server-side.

---

# 28. API Architecture

If a backend is required, organize routes by responsibility.

Example:

```text
/api
├── /contact
├── /services
└── /projects
```

Do not create unnecessarily complex microservices for a Starter Presence project.

---

# 29. Express Structure

A backend may use:

```text
server/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   ├── validators/
│   ├── config/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── prisma/
│   └── schema.prisma
│
└── package.json
```

---

# 30. Controller Responsibility

Controllers should handle:

```text
HTTP request
Input extraction
Calling appropriate service
HTTP response
```

Controllers should not contain the entire business logic.

---

# 31. Service Layer

Business logic should be separated where the backend has meaningful complexity.

Example:

```text
Controller
    ↓
Service
    ↓
Repository / Prisma
    ↓
Database
```

For a very small backend, this structure may be simplified where appropriate.

---

# 32. Database Architecture

PostgreSQL should be used only when persistent structured data is required.

Potential tables might include:

```text
contacts
projects
services
```

Only create tables that correspond to actual requirements.

---

# 33. Prisma

When Prisma is used:

```text
schema.prisma
```

must represent the actual application data model.

Use migrations for schema changes.

Do not modify production database schemas manually without a documented migration strategy.

---

# 34. Database Safety

Before changing database structure:

```text
[ ] Migration created
[ ] Migration reviewed
[ ] Existing data considered
[ ] Backup strategy considered
[ ] Development migration tested
```

---

# 35. API Response Standards

API responses should be predictable.

Success example:

```json
{
  "success": true,
  "data": {}
}
```

Error example:

```json
{
  "success": false,
  "message": "Unable to process request."
}
```

Do not expose internal stack traces or sensitive implementation details to users.

---

# 36. HTTP Status Codes

Use appropriate status codes.

Examples:

```text
200 → Successful request
201 → Resource created
400 → Invalid request
401 → Authentication required
403 → Forbidden
404 → Resource not found
409 → Conflict
422 → Validation failure
429 → Rate limited
500 → Server error
```

---

# 37. Error Handling

Errors should be handled centrally where practical.

The backend must:

* Log useful technical information.
* Return safe client-facing messages.
* Avoid exposing secrets.
* Avoid exposing stack traces in production.
* Return appropriate HTTP status codes.

---

# 38. Logging

Logs should help developers diagnose problems.

Useful:

```text
Request method
Endpoint
Status
Duration
Error category
Request ID where appropriate
```

Do not log:

```text
Passwords
JWT secrets
Database passwords
Private API keys
Sensitive personal information
```

---

# 39. Frontend Error Handling

The frontend should gracefully handle:

```text
Network failure
API failure
Missing content
Invalid form submission
Unexpected server errors
```

The user should receive an understandable message.

---

# 40. State Management

Do not introduce a global state library unless the project actually needs one.

For Starter Presence websites, prefer:

```text
React state
Context where appropriate
Local component state
URL state
Server data
```

Use additional state-management libraries only when justified.

---

# 41. Forms

Forms should have:

```text
Client-side validation
Accessible labels
Clear error messages
Loading state
Success state
Failure state
Server-side validation where backend exists
```

Follow:

```text
03-security-standards.md
```

for security requirements.

---

# 42. Authentication

Authentication is normally outside the Starter Presence scope.

If authentication is required as an approved add-on or expanded project:

```text
Secure password hashing
Secure sessions/tokens
Authorization
Rate limiting
Input validation
Secure cookie strategy where appropriate
```

must be implemented.

Do not build authentication casually.

---

# 43. API Authentication

If private APIs exist, they must not rely on frontend route protection alone.

Security must be enforced server-side.

Example:

```text
Browser
   ↓
Authentication
   ↓
Authorization
   ↓
Protected API
```

---

# 44. CORS

If frontend and backend are hosted separately, configure CORS explicitly.

Do not use:

```text
Access-Control-Allow-Origin: *
```

for private authenticated APIs unless there is a justified reason.

Use the actual production frontend origin.

---

# 45. Frontend/Backend Configuration

Use environment-specific configuration.

Example:

```text
Development:
http://localhost:5173

Production:
https://client-domain.com
```

Never leave localhost URLs in production configuration.

---

# 46. API URL

Frontend API URLs must be centralized.

Example:

```text
src/lib/api.js
```

Avoid repeating:

```text
https://api.example.com
```

throughout many components.

---

# 47. Security Integration

System architecture must comply with:

```text
03-security-standards.md
```

including:

* Input validation.
* Secure headers.
* CORS.
* Rate limiting where appropriate.
* Secret management.
* HTTPS.
* Safe error handling.
* Dependency security.

---

# 48. SEO Integration

Architecture must support:

```text
04-seo-and-analytics.md
```

Pages should allow:

```text
Unique titles
Unique meta descriptions
Canonical URLs where needed
Structured headings
Open Graph metadata
Sitemap generation
Robots configuration
```

---

# 49. Analytics Integration

Analytics should be centralized rather than manually duplicated across pages.

The implementation must:

* Load analytics appropriately.
* Avoid blocking page rendering.
* Avoid duplicate tracking.
* Respect project privacy requirements.
* Ensure production identifiers are configured correctly.

---

# 50. Performance Integration

Architecture must comply with:

```text
05-performance-and-optimization.md
```

Important principles:

```text
Minimal dependencies
Efficient bundles
Optimized assets
Lazy loading
Code splitting where useful
Efficient API requests
Caching
Responsive images
```

---

# 51. Accessibility Architecture

Components must support accessibility by design.

Examples:

```text
Button → <button>
Navigation → <nav>
Main content → <main>
Sections → <section>
Images → meaningful alt text
Forms → labels
```

Do not use clickable `<div>` elements when a semantic button or link is appropriate.

---

# 52. Reusable Button Standards

All buttons should use the approved design system.

Avoid creating:

```text
Button1
Button2
ButtonNew
ButtonFinal
ButtonFinal2
```

Instead:

```text
Button
```

with variants.

Example:

```text
primary
secondary
outline
ghost
```

Only variants defined by the approved design system should be implemented.

---

# 53. Reusable Card Standards

Cards should follow the approved design system.

Do not create visually inconsistent cards for every section.

Use a shared card foundation with appropriate variants.

---

# 54. Responsive Architecture

The website must be mobile-first.

Implementation order:

```text
Mobile
   ↓
Tablet
   ↓
Desktop
   ↓
Large Desktop
```

Do not treat mobile as an afterthought.

---

# 55. Responsive Breakpoints

Use the breakpoints defined by:

```text
complete-stonebridge-design-system-specification.md
```

Do not create arbitrary breakpoints for individual components unless required.

---

# 56. Mobile Navigation

Mobile navigation must follow the approved UI.

The AI must not replace it with a generic navigation pattern.

Implementation must include:

```text
Open state
Close state
Keyboard accessibility
Focus behavior
Correct route navigation
Body scroll behavior where required
```

---

# 57. Browser Support

The website must be tested on modern versions of:

```text
Google Chrome
Microsoft Edge
Mozilla Firefox
Safari
```

Responsive testing must include:

```text
Mobile
Tablet
Desktop
```

---

# 58. Git Standards

Every project must use Git.

Recommended workflow:

```text
main
  ↑
feature branch
  ↑
development
```

The exact workflow may be simplified for small projects.

---

# 59. Commit Standards

Commits should describe the actual change.

Good:

```text
feat: add projects page
fix: correct mobile navigation
style: refine hero spacing
perf: optimize project images
fix: validate contact form
```

Avoid:

```text
update
changes
final
final2
done
```

---

# 60. Branching

Use feature branches for meaningful changes.

Examples:

```text
feature/homepage
feature/contact-form
feature/projects-page
fix/mobile-navigation
perf/image-optimization
```

Avoid developing all changes directly on `main` when the project requires collaboration.

---

# 61. Pull Request Standards

Before merging:

```text
[ ] Feature works
[ ] Design matches approved UI
[ ] Responsive behavior verified
[ ] No console errors
[ ] No broken routes
[ ] No security regression
[ ] No obvious performance regression
[ ] Code reviewed
```

---

# 62. Code Quality

Code must be:

* Readable.
* Consistent.
* Modular.
* Maintainable.
* Predictable.

Avoid:

```text
Massive components
Duplicate logic
Unused imports
Dead code
Unnecessary abstractions
Magic values
```

---

# 63. Naming Standards

Use descriptive names.

Components:

```text
HeroSection
ProjectCard
ContactForm
```

Functions:

```text
handleSubmit
fetchProjects
validateContactForm
```

Avoid:

```text
abc
thing
test
data2
componentFinal
```

---

# 64. Comments

Comments should explain why something exists when the reason is not obvious.

Avoid comments that simply restate the code.

Bad:

```js
// Set loading to true
setLoading(true);
```

Better:

```js
// Prevent duplicate submissions while the request is processing.
setLoading(true);
```

---

# 65. Type Safety

If the project uses TypeScript, use meaningful types for:

```text
Props
API responses
Forms
Configuration
Data models
```

If JavaScript is used, maintain clear data structures and validation.

Do not migrate a simple project to TypeScript solely because it is fashionable.

---

# 66. Dependency Security

Before production:

```text
[ ] Dependencies reviewed
[ ] Known vulnerabilities reviewed
[ ] Unused packages removed
[ ] Package versions documented
```

Run appropriate package audit tooling where applicable.

---

# 67. Build Process

The project must have a reproducible production build.

Typical process:

```text
Install dependencies
      ↓
Run validation
      ↓
Build
      ↓
Preview/test production build
      ↓
Deploy
```

---

# 68. Production Build

Never assume development mode represents production performance.

The final website must be tested using the actual production build.

For Vite:

```text
npm run build
npm run preview
```

where appropriate.

---

# 69. Build Failure Policy

A deployment must not proceed if the production build fails.

Investigate:

```text
Type errors
Import errors
Missing assets
Environment variables
Broken routes
Build configuration
```

---

# 70. Environment Separation

Maintain clear environments where applicable:

```text
Development
Staging/Preview
Production
```

Small projects may use development + production if staging is unnecessary.

---

# 71. Deployment Architecture

Typical production architecture:

```text
                   INTERNET
                       │
                       ▼
                ┌─────────────┐
                │   Domain    │
                └──────┬──────┘
                       │ HTTPS
                       ▼
                ┌─────────────┐
                │   Frontend  │
                │ Vercel/CDN  │
                └──────┬──────┘
                       │
              Only if required
                       │
                       ▼
                ┌─────────────┐
                │   Backend   │
                │ Node/Express│
                └──────┬──────┘
                       │
              Only if required
                       │
                       ▼
                ┌─────────────┐
                │ PostgreSQL  │
                └─────────────┘
```

---

# 72. Domain Configuration

Before launch:

```text
[ ] Domain connected
[ ] DNS configured
[ ] HTTPS enabled
[ ] www behavior configured
[ ] Canonical domain selected
[ ] Redirect behavior tested
```

---

# 73. Deployment Configuration

Production environment must contain the correct:

```text
API URL
Analytics ID
CORS origin
Backend URL
Database URL where required
Other production configuration
```

No development values should remain.

---

# 74. Database Deployment

If a database exists:

```text
[ ] Production database created
[ ] Environment variables configured
[ ] Migrations applied
[ ] Database connection tested
[ ] Backups considered
[ ] Access restricted
```

---

# 75. Deployment Rollback

Where the hosting platform supports it, maintain the ability to return to a previous stable deployment.

Before major production changes:

```text
Current stable version
        ↓
New deployment
        ↓
Verification
        ↓
Keep or rollback
```

---

# 76. Backup Architecture

If persistent client data exists, backups must be considered.

At minimum:

```text
Database backup
Configuration backup
Source code in Git
```

Static frontend-only websites primarily rely on:

```text
Git repository
Deployment history
Asset repository
```

---

# 77. Monitoring

Production websites should be monitored appropriately.

Monitor:

```text
Availability
Deployment failures
Critical application errors
API failures where applicable
```

Use the monitoring tools selected by the agency/client.

---

# 78. Uptime

The website should be monitored after deployment where the maintenance plan includes monitoring.

Potential monitoring:

```text
Website availability
SSL status
Critical endpoints
```

---

# 79. Error Monitoring

For projects with meaningful application logic, error monitoring may be implemented.

Examples:

```text
Frontend runtime errors
Backend exceptions
Failed API requests
```

The selected monitoring service must not expose sensitive user information.

---

# 80. Documentation

Every completed project must contain a README.

At minimum:

```text
Project overview
Technology stack
Installation
Environment variables
Development commands
Build commands
Deployment information
Project structure
Maintenance notes
```

---

# 81. README Structure

Recommended:

```md
# Project Name

## Overview

## Tech Stack

## Requirements

## Installation

## Environment Variables

## Development

## Production Build

## Deployment

## Project Structure

## External Services

## Maintenance
```

---

# 82. Handover Documentation

Before delivery, document:

```text
Domain
Hosting
Repository
Analytics
Search Console
Third-party integrations
Environment configuration
Maintenance requirements
```

Never place passwords or secrets inside the handover document.

Credentials should be transferred through an appropriate secure method.

---

# 83. AI Coding Workflow

When using AI-assisted development, the agent must follow this order:

```text
1. Read project requirements
2. Read information architecture
3. Read security standards
4. Read SEO/analytics standards
5. Read performance standards
6. Read system architecture standards
7. Read complete design system
8. Inspect approved UI references
9. Inspect existing project structure
10. Plan implementation
11. Implement
12. Test
13. Review against documentation
14. Fix issues
15. Prepare deployment
```

---

# 84. AI Context Files

The project should keep the following documentation together:

```text
docs/
├── 01-project-requirements.md
├── 02-information-architecture-and-routing.md
├── 03-security-standards.md
├── 04-seo-and-analytics.md
├── 05-performance-and-optimization.md
├── 06-system-architecture-and-technical-standards.md
└── complete-stonebridge-design-system-specification.md
```

Approved UI references should also be stored in the project.

Example:

```text
docs/
└── ui/
    ├── desktop/
    ├── tablet/
    └── mobile/
```

---

# 85. UI Reference Rule

The approved UI reference files are implementation references.

The AI must inspect them before creating or modifying pages.

The workflow is:

```text
UI Reference
     ↓
Identify layout
     ↓
Identify components
     ↓
Identify spacing
     ↓
Identify typography
     ↓
Identify colors
     ↓
Identify responsive behavior
     ↓
Implement
```

The AI must not replace the UI with its own interpretation.

---

# 86. Page Implementation Checklist

For every page:

```text
[ ] Correct route
[ ] Correct page structure
[ ] Correct section order
[ ] Correct typography
[ ] Correct colors
[ ] Correct spacing
[ ] Correct images
[ ] Correct buttons
[ ] Correct navigation
[ ] Correct footer
[ ] Mobile layout implemented
[ ] Tablet layout implemented
[ ] Desktop layout implemented
[ ] SEO metadata implemented
[ ] Accessibility reviewed
```

---

# 87. Technical Debt Rule

Do not knowingly introduce technical debt simply to finish faster.

If a shortcut is necessary:

```text
Document it
Assess its impact
Create a follow-up task if necessary
```

Avoid:

```text
Temporary code
Temporary URLs
Temporary secrets
Temporary architecture
```

being accidentally deployed as permanent production code.

---

# 88. Scope Control

The Starter Presence package does not automatically justify adding:

```text
Authentication
Admin dashboards
Complex databases
CMS systems
E-commerce
Payment systems
Advanced booking
Customer portals
ERP integrations
```

These belong to different project scopes unless explicitly added.

---

# 89. Architecture Change Trigger

Reassess the architecture if the client requests:

```text
User accounts
Admin dashboard
Persistent content management
Online payments
Booking system
Customer portal
Inventory
ERP integration
Complex search
Personalized content
```

At that point:

```text
Starter Presence
        ↓
New requirements
        ↓
Architecture reassessment
        ↓
Scope/pricing revision
```

Do not quietly add complex functionality under the original architecture.

---

# 90. Technical Acceptance Checklist

Before considering development technically complete:

```text
[ ] Architecture documented
[ ] Repository organized
[ ] Routes implemented
[ ] Components organized
[ ] Approved UI implemented
[ ] Design system followed
[ ] Environment variables configured
[ ] Security requirements implemented
[ ] SEO requirements implemented
[ ] Analytics configured
[ ] Performance optimized
[ ] Accessibility reviewed
[ ] Error handling implemented
[ ] Production build succeeds
[ ] Browser compatibility tested
[ ] Mobile tested
[ ] Desktop tested
[ ] Git repository updated
[ ] README completed
```

---

# 91. Final Architecture Standard

The final architecture must be:

```text
Appropriate
Simple
Secure
Maintainable
Testable
Performant
Documented
Deployable
```

The architecture should solve the actual business problem without unnecessary technical complexity.

---

# 92. Definition of Done

The system architecture is considered complete when:

```text
[✓] The architecture matches project requirements
[✓] The technology stack is documented
[✓] The repository structure is organized
[✓] Routing is documented
[✓] UI implementation follows the approved design
[✓] Environment configuration is separated
[✓] Security requirements are integrated
[✓] SEO requirements are supported
[✓] Performance requirements are supported
[✓] Backend exists only when required
[✓] Database exists only when required
[✓] Production build succeeds
[✓] Deployment configuration is documented
[✓] Git history is maintained
[✓] README documentation exists
[✓] Handover information is prepared
```

---

# 93. Source-of-Truth Hierarchy

When implementing the project, use this priority order:

```text
1. Client-approved requirements
        ↓
2. Approved UI/UX design
        ↓
3. Complete Stonebridge Design System
        ↓
4. Project-specific technical decisions
        ↓
5. Security standards
        ↓
6. SEO & analytics standards
        ↓
7. Performance standards
        ↓
8. AI implementation suggestions
```

AI suggestions must never override an approved requirement or design.

---

# 94. Final Rule for AI-Assisted Development

The AI coding agent is an implementation assistant, not the product designer or architect.

It must:

```text
Read
Understand
Plan
Implement
Test
Verify
```

It must not:

```text
Invent
Redesign
Expand scope
Ignore documentation
Introduce unnecessary architecture
```

The final implementation must remain faithful to the approved requirements, design system, UI references, security standards, SEO requirements, performance requirements, and architecture defined for the Starter Presence package.

```
```
