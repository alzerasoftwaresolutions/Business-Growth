# Stonebridge Construction
# Starter Presence — Project Requirements Specification

**Document:** Project Requirements Specification  
**Version:** 1.0  
**Status:** Approved for Development  
**Package:** Starter Presence  
**Project Type:** Professional Company Profile Website

---

## 1. Purpose

The Starter Presence package provides a professional, modern, secure, fast, responsive, and mobile-friendly company website for businesses that primarily need an online presence rather than a complex web application.

The website must establish credibility, communicate what the business does, showcase products, services, or projects, and provide clear ways for prospective customers to contact the business.

This is a **company-profile website**, not an ERP, e-commerce platform, customer portal, SaaS application, or enterprise management system.

---

## 2. Project Objectives

The website must help the client:

1. Establish a professional online presence.
2. Build trust with prospective customers.
3. Clearly communicate the company's identity and capabilities.
4. Showcase products, services, projects, or work.
5. Generate customer inquiries.
6. Make contact information immediately accessible.
7. Improve foundational search-engine visibility.
8. Provide a professional representation of the company's brand.
9. Work reliably across desktop, tablet, and mobile devices.
10. Provide a maintainable technical foundation for future minor updates.

---

## 3. Package Scope

The Starter Presence package includes:

- Professional company website
- Up to 6 core pages
- Responsive/mobile-first design
- Professional homepage
- Contact form
- Click-to-call functionality
- Email links
- WhatsApp integration
- Google Maps integration
- Social media links
- Foundational SEO
- XML sitemap
- robots.txt
- Image optimization
- Domain connection
- Hosting deployment
- HTTPS/SSL configuration
- Website launch
- One client training session
- 30-day post-launch defect warranty

---

## 4. Target Clients

The package is intended for:

- Manufacturing companies
- Agro-processing businesses
- Construction companies
- Engineering firms
- Schools and training centers
- Clinics and medical centers
- Beauty salons and academies
- Hotels and guest houses without online booking
- NGOs
- Consulting firms
- Import/export businesses
- Local service providers

The implementation must remain adaptable enough to support different industries without changing the underlying architecture unnecessarily.

---

## 5. Core Website Structure

The website supports a maximum of **6 core pages**.

Standard structure:

1. Home
2. About
3. Services / Products
4. Gallery / Projects
5. Contact
6. One additional page

The sixth page may be selected according to the client's needs, such as:

- Partners
- Careers
- Certifications
- FAQs
- Company Profile
- Industries
- Team

The exact page names may change according to the client's business.

---

## 6. Page Requirements

### 6.1 Home

The homepage is the primary credibility and conversion page.

It should communicate:

- Who the company is
- What the company does
- Why the company should be trusted
- Main services/products
- Relevant projects/work
- Key differentiators
- Contact opportunity

Possible sections include:

- Hero
- Trust/credibility metrics
- Company introduction
- Why choose us
- Services/products
- Process
- Industries served
- Featured project/product
- Gallery
- Testimonials
- Trusted by
- Certifications
- Final CTA

The exact sections depend on the client's business. Do not force every possible section onto every client website.

### 6.2 About

Possible content:

- Company overview
- History
- Mission
- Vision
- Values
- Leadership
- Team
- Experience
- Approach
- Certifications
- Company milestones

Prioritize authentic client-provided information. Do not invent company history, awards, certifications, statistics, or achievements.

### 6.3 Services / Products

Depending on the client, this page may represent:

- Services
- Products
- Solutions
- Capabilities
- Programs
- Treatments
- Training
- Professional offerings

Each item should have:

- Name
- Description
- Supporting image/icon where appropriate
- Relevant details
- Optional CTA

This page must not become an e-commerce catalog. Shopping cart and online payment functionality are outside this package.

### 6.4 Gallery / Projects

Possible content:

- Projects
- Portfolio
- Product gallery
- Facilities
- Completed work
- Before/after images
- Company activities

Each item may contain:

- Image
- Title
- Category
- Location
- Date/year
- Short description

Detailed case-study functionality is outside the default scope unless explicitly approved.

### 6.5 Contact

The Contact page must make it easy for visitors to reach the company.

It should support:

- Contact form
- Phone number
- Click-to-call
- Email
- WhatsApp
- Physical address where applicable
- Google Maps
- Business hours where applicable
- Social media links

The page should explain what happens after submission.

Do not collect unnecessary personal information.

### 6.6 Additional Page

The sixth page is determined by client needs.

Examples:

- FAQ
- Careers
- Partners
- Certifications
- Industries
- Team
- Company profile

It must follow the same design system, accessibility, SEO, and responsive requirements as all other pages.

---

## 7. Functional Requirements

### FR-001 — Navigation

The website must provide clear navigation between all published pages.

Requirements:

- Desktop navigation
- Mobile navigation
- Active-page indication
- Working internal links
- Logo linking to homepage
- Accessible navigation controls

No broken navigation links may remain in production.

### FR-002 — Contact Form

The website must provide a contact/inquiry form.

Recommended minimum:

- Name
- Email or phone
- Message

Additional fields may include:

- Company
- Subject
- Service/project type

The form must include:

- Client-side validation
- Server-side validation when a backend is used
- Clear error messages
- Submission state
- Success state
- Failure state
- Protection against obvious abuse/spam
- Accessible labels

The form must never expose secrets or internal implementation details.

---

## 8. Communication Features

### Click-to-Call

Phone numbers should use telephone links. On mobile, tapping the number should open the phone application.

### Email

Email addresses should use email links where appropriate.

### WhatsApp

Where the client provides a WhatsApp business number, the website may provide WhatsApp CTAs or contact buttons.

The number must come from client-provided configuration. Never use a fictional number in production.

### Google Maps

Where a physical location exists, the website may include an embedded map, map link, or directions link.

Avoid unnecessarily loading heavy third-party content when it would harm performance.

### Social Media

Supported platforms may include:

- Facebook
- Instagram
- LinkedIn
- TikTok
- YouTube
- X
- Other client-provided platforms

Only display platforms for which the client provides valid accounts.

---

## 9. Content Requirements

The client is responsible for the accuracy of supplied business information.

The development team is responsible for:

- Organizing content
- Applying hierarchy
- Formatting content
- Maintaining readability
- Presenting content professionally

The team must not fabricate:

- Company history
- Certifications
- Awards
- Client names
- Project values
- Employee credentials
- Safety statistics
- Business statistics
- Testimonials
- Locations
- Contact information

Missing information must be identified as a content dependency rather than invented.

---

## 10. Placeholder Policy

During development, placeholders may be used:

```text
[COMPANY NAME]
[PHONE NUMBER]
[EMAIL]
[ADDRESS]
[PROJECT TITLE]
[CLIENT LOGO]
[PROJECT IMAGE]
```

No placeholder content may remain in production.

Every placeholder must be replaced with approved content or intentionally removed before deployment.

---

## 11. Design Requirements

The visual implementation must follow:

`complete-stonebridge-design-system.md`

That document is the authoritative source for:

- Colors
- Typography
- Spacing
- Grid
- Components
- Buttons
- Cards
- Forms
- Navigation
- Responsive behavior
- Animation
- Iconography
- Visual hierarchy

Do not create a competing design system.

If implementation conflicts with the Design System, resolve the conflict rather than silently creating a new pattern.

---

## 12. Responsive Requirements

The website must be mobile-first.

Supported layouts:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop

Minimum target test widths:

```text
360px
375px
390px
768px
1024px
1280px
1440px
```

The website must not:

- Overflow horizontally
- Break navigation
- Produce unreadable text
- Stretch images
- Create unusable buttons
- Hide critical content
- Require horizontal scrolling for normal content

---

## 13. Accessibility Requirements

The implementation should follow practical WCAG 2.1 AA-conscious practices.

Required:

- Semantic HTML
- Logical heading hierarchy
- Accessible navigation
- Keyboard navigation
- Visible focus states
- Form labels
- Meaningful alt text
- Sufficient color contrast
- Accessible buttons
- Adequate touch targets

Interactive elements should generally have at least a 44×44px touch target.

---

## 14. Performance Requirements

Requirements:

- Optimize images
- Use appropriate image dimensions
- Use modern image formats where practical
- Lazy-load below-the-fold images
- Avoid unnecessary JavaScript
- Avoid unnecessary dependencies
- Avoid large libraries for simple functionality
- Avoid rendering unnecessary content
- Minimize blocking resources
- Use appropriate caching/CDN capabilities

Performance must be evaluated before launch.

---

## 15. SEO Requirements

Every indexable page must have:

- Unique title
- Appropriate meta description
- One meaningful primary H1
- Logical H2/H3 structure
- Search-friendly URL
- Descriptive image alt text where appropriate
- Canonical URL where required
- Appropriate Open Graph metadata

The website must include:

- `sitemap.xml`
- `robots.txt`

SEO must be based on actual client content. Do not keyword-stuff content.

Foundational SEO is included; advanced SEO campaigns are outside this package.

---

## 16. URL Requirements

Default routes:

```text
/
/about
/services
/projects
/contact
/[additional-page]
```

Routes may use `/products` instead of `/services` when appropriate.

URLs should be:

- Readable
- Lowercase
- Hyphenated where necessary
- Free from unnecessary query parameters
- Stable after launch

---

## 17. Security Requirements

Security is mandatory even for a simple company website.

The implementation must:

- Use HTTPS in production
- Validate user input
- Handle untrusted input safely
- Protect form endpoints
- Avoid exposing secrets
- Keep credentials out of source control
- Use environment variables for secrets
- Use least-privilege credentials
- Apply appropriate security headers
- Keep dependencies reasonably up to date
- Avoid unnecessary third-party scripts
- Prevent accidental exposure of internal errors

If a backend exists, server-side validation is mandatory. Client-side validation alone is insufficient.

Detailed requirements belong in `06-security-specification.md`.

---

## 18. Backend Requirement

A backend is **not automatically required**.

Use the simplest architecture that satisfies the approved requirements.

A static frontend may be sufficient if no server-side functionality, database, or custom backend processing is required.

Node.js/Express should be introduced only when there is a legitimate requirement.

---

## 19. Database Requirement

PostgreSQL is optional.

A database must only be introduced when required by approved functionality.

For the normal Starter Presence package, a database is generally unnecessary.

Do not introduce PostgreSQL merely for architectural appearance.

---

## 20. Authentication Requirement

Authentication is not part of the default package.

Do not create:

- Login pages
- Admin dashboards
- User accounts
- Customer portals
- Role-based access

unless explicitly approved as an add-on or change.

---

## 21. Analytics

Analytics is an optional add-on.

If enabled:

- Tracking must be intentionally configured
- The client must approve its use
- Privacy requirements must be considered
- Sensitive information must not be exposed
- Analytics scripts should not unnecessarily harm performance

Detailed requirements belong in `07-seo-and-analytics.md`.

---

## 22. Excluded Functionality

The following are outside the standard Starter Presence package:

- E-commerce
- Shopping cart
- Online payment
- Customer portals
- Inventory management
- ERP integration
- Dashboards
- Mobile applications
- Advanced booking systems
- Multilingual support
- Unlimited revisions
- Advanced SEO campaigns

Any excluded feature requires explicit scope approval.

---

## 23. Optional Add-ons

Possible add-ons:

- Additional pages
- Blog
- Professional copywriting
- Business email setup
- Google Analytics
- Google Search Console
- Booking/request system
- Logo redesign
- Multilingual support
- Ongoing maintenance

Each add-on must have clearly defined scope before implementation.

---

## 24. Revision Boundaries

The package does not include unlimited revisions.

Once a page or major design direction is approved, later changes that substantially alter the approved structure may be treated as additional work.

Minor corrections and defects are not new features.

---

## 25. Browser Compatibility

The website must be tested on modern versions of:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

Testing should prioritize currently supported browsers rather than obsolete browsers.

---

## 26. Code Quality Requirements

The implementation must follow:

- Clean code
- Reusable components
- Clear naming
- Organized project structure
- Separation of concerns
- Maintainable architecture
- Git version control
- Meaningful commits
- Minimal duplication

Avoid:

- Giant components
- Copy-pasted page structures
- Unused dependencies
- Dead code
- Arbitrary inline styling
- Repeated constants
- Hardcoded client configuration throughout the UI

---

## 27. Configuration Requirements

Client-specific information should be centralized where practical.

Examples:

- Company name
- Logo
- Phone
- Email
- Address
- WhatsApp
- Social links
- Business hours
- Map location
- Navigation
- Services
- Projects

Client-specific information should not be scattered throughout many components.

---

## 28. Environment Variables

Secrets and environment-specific configuration must not be hardcoded.

Examples:

- API URLs
- Form service credentials
- Email service credentials
- Analytics identifiers
- Backend secrets
- Database URLs

Never commit secret environment files to source control.

Provide `.env.example` with placeholder values only.

---

## 29. Deployment Requirements

Before launch:

- Production build succeeds
- Domain is connected
- HTTPS works
- Redirect behavior is verified
- Environment variables are configured
- Forms work
- Navigation works
- Sitemap works
- robots.txt works
- Images load
- Social links work
- Contact links work
- Mobile layout is tested
- Desktop layout is tested
- Basic security checks pass

---

## 30. Hosting

Standard deployment options:

### Frontend

- Vercel
- Netlify
- Suitable local/international hosting provider

### Backend, when required

- Railway
- Similar cloud platform
- Suitable local/international provider

Infrastructure must be selected according to actual project requirements.

---

## 31. Domain

Requirements:

- Correct DNS configuration
- HTTPS enabled
- Preferred canonical domain established
- Non-preferred domain redirected appropriately where applicable
- Production URLs verified

Domain ownership remains with the client unless otherwise agreed.

---

## 32. Contact Form Delivery

The project must explicitly define where inquiries go.

Possible destinations:

- Client email
- Approved form service
- Backend email service
- Approved CRM/inquiry system if separately agreed

Never deploy a form that appears to work but silently discards submissions.

Before launch, submit a real test inquiry and confirm delivery.

---

## 33. Error Handling

Users must receive understandable messages.

Do not expose technical details such as:

```text
500 Internal Server Error
ECONNREFUSED
DATABASE_URL undefined
```

Prefer user-facing messages such as:

> "We couldn't send your message right now. Please try again or contact us directly by phone."

Technical details should be logged appropriately but not exposed unnecessarily.

---

## 34. Loading States

Where asynchronous functionality exists, provide:

- Loading
- Success
- Error
- Empty

Do not leave users wondering whether an action worked.

---

## 35. Image Requirements

Images must:

- Be appropriately sized
- Be compressed
- Use suitable formats
- Have meaningful filenames where practical
- Have appropriate alt text
- Maintain aspect ratio
- Not be stretched

Example:

`commercial-office-building-addis-ababa.webp`

is preferred over:

`IMG_8392.jpg`

when the image is meaningful content.

---

## 36. Content Dependencies

Development must identify missing client content early.

Possible requirements:

- Logo
- Company profile
- About text
- Services/products
- Images
- Contact information
- Location
- Social links
- Testimonials
- Certifications
- Project information

Missing content must be tracked rather than invented.

---

## 37. Client Approval

Before production deployment, the client should approve:

- Overall design
- Page structure
- Content
- Images
- Contact information
- Social links
- Services/products
- Projects
- Final navigation
- Domain
- Production URL

Approval should be documented.

---

## 38. Quality Assurance

Before delivery, verify:

### Functionality

- Navigation
- Buttons
- Links
- Contact form
- Phone links
- Email links
- WhatsApp
- Maps
- Social links

### Responsive

- Mobile
- Tablet
- Laptop
- Desktop

### Content

- No placeholder content
- No broken images
- Correct spelling
- Correct contact information
- Correct business information

### SEO

- Titles
- Meta descriptions
- H1
- Heading hierarchy
- Sitemap
- robots.txt
- Image alt text

### Performance

- Image optimization
- Page loading
- Asset loading
- No unnecessary dependencies

### Security

- HTTPS
- Input validation
- No exposed secrets
- Basic security checks

---

## 39. Testing Requirement

Testing categories:

1. Functional testing
2. Responsive testing
3. Accessibility testing
4. Browser testing
5. Performance testing
6. SEO validation
7. Security testing
8. Form testing
9. Link testing
10. Production smoke testing

Detailed procedures are defined in:

- `docs/12-testing-and-qa.md`
- `docs/13-stress-and-load-testing.md`

---

## 40. Stress Testing

Testing must be appropriate to the actual architecture.

For a simple static company website, excessive stress-testing infrastructure is unnecessary.

If a backend/contact endpoint exists, test:

- Response time
- Error rate
- Concurrent requests
- Rate limiting
- Resource usage
- Recovery after load

Never intentionally overload a third-party production service.

---

## 41. Monitoring

Production monitoring should cover, where applicable:

- Website availability
- Application errors
- Form failures
- Performance degradation
- Domain/SSL status

Detailed monitoring requirements belong in:

`docs/11-maintenance-and-monitoring.md`

---

## 42. Backup Requirements

For a purely static website, source code and repository history are the primary assets.

For projects involving a database, CMS, uploaded media, or persistent inquiry data, appropriate backups must be configured.

---

## 43. Maintenance

Optional maintenance may include:

- Website monitoring
- Security updates
- Dependency updates
- Backups
- Minor text updates
- Minor image updates
- Domain renewal assistance
- Hosting renewal assistance

Maintenance does not automatically include:

- New features
- Major redesigns
- New pages
- New integrations
- New application functionality

Those require separate scope.

---

## 44. Client Training

One training session is included.

Training should cover:

- Website overview
- How inquiries are received
- Basic administration where applicable
- Basic maintenance recommendations
- Who to contact for technical support

If the website is fully static and has no content-management interface, explain that content changes require the development team unless otherwise agreed.

---

## 45. Warranty

The Starter Presence package includes a **30-day post-launch warranty**.

The warranty covers defects related to delivered functionality, such as:

- Broken navigation
- Form malfunction caused by implementation
- Responsive layout defects
- Delivered functionality that fails unexpectedly

The warranty does not cover:

- New features
- Design changes
- Additional content
- New pages
- Third-party service failures
- Client-caused problems
- Changes to external services
- Domain/hosting problems outside the team's control

---

## 46. Change Management

Any requirement outside approved scope must be evaluated before implementation.

A change may affect:

- Cost
- Timeline
- Architecture
- Testing
- Deployment
- Maintenance

Do not implement significant scope changes simply because they appear easy to code.

---

## 47. Technology Constraints

### Frontend

- React
- Vite
- Tailwind CSS

### Backend when required

- Node.js
- Express.js

### Database when required

- PostgreSQL

### Version control

- Git
- GitHub

### Deployment

- Vercel
- Railway
- Appropriate alternative hosting

Technology choices may be changed only when there is a clear technical reason.

---

## 48. Dependency Policy

Before adding a dependency, determine:

1. Is it actually necessary?
2. Can the functionality be implemented cleanly without it?
3. Is the dependency actively maintained?
4. Does it introduce security concerns?
5. Does it significantly increase bundle size?
6. Does it conflict with the architecture?

Do not install libraries simply because an AI coding agent recommends them.

---

## 49. AI/Vibe-Coding Rules

This project is developed using AI-assisted/vibe coding.

The coding agent must treat project documentation as the source of truth.

Before modifying the project, the agent should understand:

- `01-project-requirements.md`
- `complete-stonebridge-design-system.md`

and any relevant specialized specification.

The agent must:

- Read existing documentation before implementation.
- Inspect existing code before creating new components.
- Reuse existing components when appropriate.
- Avoid unnecessary dependencies.
- Avoid changing architecture without justification.
- Avoid inventing business requirements.
- Avoid inventing client content.
- Avoid inventing credentials or configuration.
- Avoid modifying approved visual design without instruction.
- Keep components reusable.
- Keep client-specific content configurable.
- Keep secrets out of source control.
- Test changes before considering them complete.
- Avoid unrelated refactoring.
- Explain significant architectural changes before making them.
- Preserve existing functionality when modifying the project.

---

## 50. Source-of-Truth Hierarchy

When documents appear to conflict, use this hierarchy:

1. **Explicit client-approved requirement** — highest authority.
2. **Project Requirements** — functional scope.
3. **Design System** — visual behavior.
4. **Specialized technical specifications** — security, SEO, architecture, performance, QA.
5. **Developer implementation preference** — lowest authority.

Developer or AI preference must never override an approved requirement.

---

## 51. Definition of Done

A feature is not complete merely because the code compiles.

A feature is complete when:

- Requirement is implemented
- UI follows the Design System
- Responsive behavior works
- Accessibility has been considered
- Errors are handled
- Relevant links work
- Content is correct
- No unnecessary code remains
- Tests/checks pass
- No obvious console errors remain
- Production behavior has been considered

---

## 52. Definition of Production Ready

The website is production-ready only when:

- All approved pages are complete
- All approved content is present
- No placeholder content remains
- Navigation works
- Contact functionality works
- Responsive layouts work
- SEO basics are implemented
- Sitemap exists
- robots.txt exists
- HTTPS works
- Domain works
- Production build succeeds
- No critical errors remain
- Security checks pass
- Performance is acceptable
- Client approval is obtained
- Deployment checklist passes

---

## 53. Out-of-Scope Protection

The following should trigger a scope review:

- Adding authentication
- Adding a database
- Adding an admin dashboard
- Adding payment functionality
- Adding e-commerce
- Adding booking
- Adding customer accounts
- Adding multilingual functionality
- Adding a blog/CMS
- Adding advanced search
- Adding complex animations
- Adding external APIs
- Adding advanced analytics
- Adding additional pages

A feature being technically easy to implement does not make it part of the package.

---

## 54. Project Success Criteria

The final website should:

1. Look professional and credible.
2. Clearly represent the client's business.
3. Work reliably on mobile and desktop.
4. Make contacting the business easy.
5. Load efficiently.
6. Meet foundational SEO requirements.
7. Meet baseline security requirements.
8. Meet accessibility expectations.
9. Have clean and maintainable code.
10. Be deployable and maintainable without unnecessary complexity.
11. Meet the approved design.
12. Meet the agreed Starter Presence scope.

---

## 55. Related Documentation

This document should be read together with:

- `docs/complete-stonebridge-design-system.md`
- `docs/02-information-architecture-and-routing.md`
- `docs/03-content-and-data-structure.md`
- `docs/04-system-architecture.md`
- `docs/05-component-and-code-architecture.md`
- `docs/06-security-specification.md`
- `docs/07-seo-and-analytics.md`
- `docs/08-performance-specification.md`
- `docs/09-accessibility-specification.md`
- `docs/10-contact-form-and-communication.md`
- `docs/11-maintenance-and-monitoring.md`
- `docs/12-testing-and-qa.md`
- `docs/13-stress-and-load-testing.md`
- `docs/14-deployment-and-infrastructure.md`
- `docs/15-pre-deployment-checklist.md`
- `docs/16-post-deployment-checklist.md`
- `docs/17-client-handover-and-training.md`
- `docs/18-warranty-and-change-management.md`
- `docs/19-vibe-coding-development-rules.md`

---

## 56. Final Principle

The Starter Presence package should deliver a website that is:

**Simple in functionality, sophisticated in presentation, disciplined in engineering, and easy to maintain.**

The project should not become more complicated merely because the technology allows it.

Every feature must have a business purpose.

Every technical dependency must have a reason.

Every visual element must support communication.

Every implementation decision must remain consistent with the approved scope and Design System.
