# Starter Presence
# Client Handover & Documentation Standards

**Document:** 11-client-handover-and-documentation.md  
**Version:** 1.0  
**Package:** Starter Presence  
**Status:** Approved Standard

---

# 1. Purpose

This document defines the standard process for handing over a completed Starter Presence website to the client.

The handover process ensures that:

- The client understands the delivered website.
- The client knows how to use the services connected to the website.
- Required credentials and ownership information are properly transferred.
- The final website is documented.
- Warranty responsibilities are clearly defined.
- Maintenance responsibilities are clearly defined.
- The agency retains the information necessary to provide future support.
- The client receives the agreed deliverables without unnecessary technical complexity.

Handover is considered a formal project phase and should not be treated as an informal final message.

---

# 2. Handover Lifecycle

The standard handover process is:

    Development Complete
          ↓
    Final QA
          ↓
    Production Deployment
          ↓
    Production Verification
          ↓
    Client Review
          ↓
    Final Corrections
          ↓
    Handover Preparation
          ↓
    Client Training
          ↓
    Handover
          ↓
    Warranty Period
          ↓
    Maintenance / Support

---

# 3. Handover Requirements

Handover should only begin after:

    [ ] Development is complete
    [ ] Approved UI has been implemented
    [ ] Required content has been added
    [ ] QA is complete
    [ ] Production deployment is successful
    [ ] Domain is connected
    [ ] HTTPS is working
    [ ] Contact functionality is tested
    [ ] Responsive behavior is tested
    [ ] Major browser testing is complete
    [ ] No known critical defects remain
    [ ] Final client review is complete

---

# 4. Final Deliverables

The client should receive the deliverables included in the agreed package.

For Starter Presence this normally includes:

- Completed company website
- Production website
- Connected domain
- HTTPS/SSL configuration
- Contact functionality
- Configured communication links
- Foundational SEO
- Approved website content
- Client training
- Warranty coverage

Additional deliverables must only be provided if they are included in the agreement.

---

# 5. Production Website Information

The final project record should contain:

    Website Name:
    Production URL:
    Domain:
    Hosting Provider:
    Deployment Platform:
    Repository:
    Project Owner:
    Launch Date:
    Warranty Start Date:
    Warranty End Date:
    Maintenance Plan:
    Primary Client Contact:

Sensitive credentials must not be stored in plain-text project documentation.

---

# 6. Domain Ownership

The client's domain should remain under the client's ownership whenever practical.

The agency may assist with:

- Domain registration
- DNS configuration
- Domain connection
- Renewal assistance

The client remains responsible for domain ownership and renewal costs unless otherwise agreed.

The agency should avoid making the client dependent on an agency-owned domain account without a documented contractual reason.

---

# 7. Hosting Ownership

Hosting ownership should be clearly documented.

Possible arrangements include:

## Client-Owned Hosting

The client owns the hosting account and grants the agency access.

Preferred when practical.

## Agency-Managed Hosting

The agency manages hosting on behalf of the client.

The agreement should clearly define:

- Hosting fees
- Management responsibilities
- Access
- Renewal
- Migration
- Termination procedure

## Third-Party Hosting

The website may be hosted using a third-party provider selected according to project requirements.

The client should know:

- Provider
- Account ownership
- Billing responsibility
- Renewal responsibility

---

# 8. Source Code Ownership

Source-code ownership must follow the signed agreement.

The project record should specify:

    Code Ownership:
    Repository Owner:
    Client Access:
    Agency Access:
    License Restrictions:

Do not assume ownership terms that were not agreed upon.

---

# 9. Git Repository

Where source code is included in the client's agreement, the repository should be properly organized before handover.

Verify:

    [ ] Correct repository
    [ ] Correct project name
    [ ] README exists
    [ ] Installation instructions exist
    [ ] Environment variables documented safely
    [ ] No secrets committed
    [ ] Production credentials removed from source
    [ ] Git history is clean enough for handover
    [ ] Main branch contains the final approved version

Never commit:

- Passwords
- API secrets
- Database credentials
- JWT secrets
- Private keys
- Client passwords

---

# 10. Environment Variables

The project may require environment variables.

Examples:

    DATABASE_URL
    JWT_SECRET
    API_URL
    VITE_API_URL
    CLOUDINARY credentials
    Analytics identifiers

Documentation should explain the purpose of variables without exposing sensitive values.

Example:

    VITE_API_URL
    Purpose: Public frontend API endpoint
    Required: Yes

For secrets:

    DATABASE_URL
    Purpose: Database connection
    Required: Yes
    Value: Stored securely in deployment environment

---

# 11. Credential Handover

Credentials must be transferred securely.

Do not send sensitive credentials through:

- GitHub
- Public documents
- Source code
- Screenshots
- Public chat
- Email when a more secure method is available

Where possible:

    Create Client Account
          ↓
    Assign Client Ownership
          ↓
    Add Agency Access
          ↓
    Verify Access
          ↓
    Document Account

---

# 12. Account Inventory

The project should maintain an account inventory.

Example:

| Service | Purpose | Owner | Status |
|---|---|---|---|
| Domain Registrar | Domain | Client | Active |
| Hosting | Website | Client/Agency | Active |
| GitHub | Source Code | Client/Agency | Active |
| Analytics | Analytics | Client | Active |
| Search Console | SEO | Client | Active |
| Maps | Location | Client | Active |

Do not store passwords in this table.

---

# 13. Third-Party Services

Document all third-party services used by the website.

Examples:

- Hosting
- Domain registrar
- Google Maps
- WhatsApp
- Analytics
- Search Console
- Email provider
- Cloudinary
- Form provider
- Monitoring service

For each service record:

    Service:
    Purpose:
    Account Owner:
    Billing Owner:
    Renewal:
    Agency Responsibility:
    Client Responsibility:

---

# 14. Website Documentation

The final project should contain basic technical documentation.

At minimum:

    README.md
    Project setup instructions
    Environment variable documentation
    Deployment documentation
    Maintenance documentation
    Technology stack
    Contact information
    Known limitations

The documentation should be understandable to another developer joining the project.

---

# 15. README Requirements

The README should include:

## Project Name

Example:

    Stonebridge Construction Website

## Description

Brief explanation of the project.

## Technology

Example:

    React
    Vite
    Tailwind CSS
    Node.js
    Express.js
    PostgreSQL
    Git

Only list technologies actually used.

## Installation

Explain how the project is installed locally.

## Development

Explain how the development environment is started.

## Build

Explain how the production build is generated.

## Environment

Explain required environment variables without exposing secrets.

## Deployment

Explain where and how the application is deployed.

---

# 16. Design Documentation

The approved design must remain documented.

The project must reference:

    Complete Stonebridge Design System Specification

and the approved UI design/reference files.

The design documentation is the visual source of truth.

AI coding agents must not invent a new visual design during implementation.

---

# 17. UI Reference Preservation

The project should contain or reference the approved UI materials.

Examples:

    /design
        /desktop
        /mobile
        /pages
        /components
        /references

The exact structure may vary.

The important requirement is that developers and AI coding agents can identify the approved design.

---

# 18. Content Handover

The final website content should be reviewed with the client.

Verify:

    [ ] Company name
    [ ] Company description
    [ ] About content
    [ ] Services/products
    [ ] Projects
    [ ] Contact information
    [ ] Phone numbers
    [ ] Email addresses
    [ ] Address
    [ ] Social media
    [ ] Business hours
    [ ] Images
    [ ] Legal information where applicable

The client remains responsible for the accuracy of supplied business information.

---

# 19. Content Responsibility

The agency is responsible for professionally organizing and presenting supplied content according to the agreed scope.

The client is responsible for:

- Accuracy
- Legality
- Ownership
- Copyright permission
- Claims about products/services
- Contact information
- Business information

The agency should not knowingly publish false or unverified claims.

---

# 20. Image and Asset Handover

Document important assets:

- Logo
- Brand assets
- Project images
- Product images
- Icons
- Illustrations
- Fonts where licensing permits

The agency should verify that assets used in the website have appropriate usage rights.

---

# 21. Font Licensing

Fonts used in the website should be documented where relevant.

Record:

    Font:
    Source:
    License:
    Usage:
    Local files / Web font:

Do not use commercially restricted fonts without the required license.

---

# 22. Training

Every Starter Presence project includes one client training session.

Training should cover:

- Website overview
- Navigation
- Contact inquiries
- Connected services
- Basic administration where applicable
- Maintenance process
- How to request changes

The training should focus on what the client actually needs to operate the website.

---

# 23. Training Format

Training may be provided through:

- In-person session
- Video call
- Recorded walkthrough
- Screen-sharing session

The selected method depends on the project and agreement.

---

# 24. Training Checklist

During training verify:

    [ ] Client understands website structure
    [ ] Client knows how customers contact them
    [ ] Client understands contact form behavior
    [ ] Client knows where inquiries arrive
    [ ] Client understands basic connected services
    [ ] Client knows how to request changes
    [ ] Client knows who provides technical support

---

# 25. Training Recording

If the client agrees, training may be recorded.

The recording may be provided as a reference.

Do not record sensitive credentials or passwords.

---

# 26. Client Acceptance

The client should formally confirm that the website has been delivered.

Acceptance may be documented through:

- Signed acceptance document
- Email confirmation
- Project management system
- Contractual acceptance process

The acceptance should identify:

    Project:
    Production URL:
    Delivery Date:
    Client:
    Acceptance Status:

---

# 27. Final Client Review

Before acceptance, the client should have an opportunity to identify issues within the agreed review process.

Review:

- Content
- Images
- Links
- Contact details
- Pages
- Forms
- Responsive behavior
- General presentation

Requests outside the agreed scope should be classified separately.

---

# 28. Scope Control During Handover

Handover should not become an unlimited revision period.

Classify requests as:

## Defect

Something does not work as agreed.

Action:

    Fix under warranty.

## Minor Correction

Small correction within agreed scope.

Action:

    Complete if included.

## New Content

New material not supplied during development.

Action:

    Determine whether included.

## New Feature

New functionality.

Action:

    Treat as additional work.

## Redesign

Change to approved visual design.

Action:

    Treat as additional work unless caused by an implementation defect.

---

# 29. Warranty Activation

The standard Starter Presence warranty begins according to the project agreement.

Default:

    30-day post-launch warranty

The warranty covers defects related to delivered functionality.

---

# 30. Warranty Exclusions

Warranty does not include:

- New features
- Design changes
- New pages
- Additional content
- Client-caused issues
- Unauthorized modifications
- Third-party service failures
- Hosting provider failures
- Domain provider failures
- Changes made by another developer
- Problems caused by unsupported external services

---

# 31. Warranty Issue Workflow

    Client Reports Issue
          ↓
    Agency Reviews
          ↓
    Reproduce
          ↓
    Determine Cause
          ↓
    Warranty Covered?
       ↙          ↘
     Yes           No
      ↓             ↓
     Fix       Explain Scope
      ↓             ↓
    Test       Quote if Needed
      ↓
    Deploy
      ↓
    Verify

---

# 32. Maintenance Transition

If the client purchases maintenance:

    Handover
       ↓
    Warranty
       ↓
    Maintenance Activation

The maintenance plan should begin according to the signed agreement.

If the client does not purchase maintenance:

    Handover
       ↓
    Warranty
       ↓
    Project Support Ends
       ↓
    Future Work by Request

---

# 33. Maintenance Information

The client should receive:

    Maintenance Plan:
    Included Services:
    Support Channel:
    Billing:
    Renewal:
    Response Expectations:

Refer to:

    10-maintenance-and-monitoring.md

---

# 34. Backup Responsibility

Before handover document:

    Backup System:
    Backup Owner:
    Backup Frequency:
    Storage Location:
    Restoration Responsibility:

The client should understand whether backups are:

- Included
- Agency managed
- Hosting managed
- Client managed
- Not applicable

---

# 35. Analytics Handover

If Google Analytics or another analytics platform is included:

Verify:

    [ ] Correct account
    [ ] Correct property
    [ ] Production tracking
    [ ] Basic tracking verified
    [ ] Client access
    [ ] Agency access where authorized

Analytics credentials should never be committed to Git.

---

# 36. Search Console Handover

If Google Search Console is included:

Verify:

    [ ] Website property created
    [ ] Ownership verified
    [ ] Sitemap submitted
    [ ] Client access
    [ ] Agency access where authorized

---

# 37. SEO Handover

The client should understand that Starter Presence includes foundational SEO, not an ongoing SEO campaign.

Included foundation may contain:

- Page titles
- Meta descriptions
- Heading structure
- Search-friendly URLs
- Sitemap
- Robots.txt
- Image optimization

Advanced SEO is outside the standard package unless purchased separately.

---

# 38. Performance Handover

The client should understand that website performance can change over time.

Performance can be affected by:

- New images
- New scripts
- Third-party services
- Hosting conditions
- New content
- Browser changes

The agency should explain that ongoing optimization may be required for significant future changes.

---

# 39. Security Handover

The client should be informed about basic security responsibilities.

Examples:

- Protect account credentials
- Use strong passwords
- Enable MFA where available
- Do not share administrator accounts
- Do not install unauthorized software
- Do not modify production configuration without authorization

---

# 40. Client Account Security

Where applicable:

    [ ] Client owns primary account
    [ ] MFA enabled
    [ ] Recovery email configured
    [ ] Recovery method documented
    [ ] Agency access appropriate
    [ ] Former team members removed

---

# 41. Password Policy

The agency must never request that clients send passwords through ordinary chat.

If access is required:

- Use account invitation
- Use delegated access
- Use secure credential-sharing tools
- Use temporary access where possible

---

# 42. Deployment Record

The final deployment should be documented.

Record:

    Deployment Date:
    Version:
    Git Commit:
    Production URL:
    Hosting:
    Domain:
    Deployment Status:
    Verified By:

---

# 43. Release Version

The final production release should have an identifiable version.

Example:

    v1.0.0

or:

    production-2026-08-10

The exact versioning strategy may vary.

The purpose is to make it possible to identify the deployed release.

---

# 44. Final Production Snapshot

Before final handover, preserve:

- Final Git commit
- Production build
- Configuration documentation
- Final approved design references
- Final content
- Deployment configuration
- Handover record

This provides a reliable baseline for future maintenance.

---

# 45. Known Issues

If any known non-critical issues remain, document them.

Example:

| Issue | Severity | Status | Planned Action |
|---|---|---|---|
| Minor Safari spacing issue | Low | Known | Review next update |

Never hide known issues from the client.

Critical issues must be resolved before acceptance unless explicitly agreed otherwise.

---

# 46. Client Handover Checklist

## Project

    [ ] Final website deployed
    [ ] Final URL confirmed
    [ ] Client reviewed website
    [ ] Client accepted delivery

## Domain

    [ ] Domain active
    [ ] DNS correct
    [ ] Ownership documented
    [ ] Renewal responsibility documented

## Hosting

    [ ] Hosting documented
    [ ] Ownership documented
    [ ] Billing responsibility documented
    [ ] Access verified

## Security

    [ ] HTTPS working
    [ ] Credentials secured
    [ ] MFA enabled where appropriate
    [ ] No secrets in repository

## Website

    [ ] Navigation tested
    [ ] Contact form tested
    [ ] Phone links tested
    [ ] Email links tested
    [ ] WhatsApp link tested
    [ ] Maps tested
    [ ] Social links tested

## SEO

    [ ] Titles complete
    [ ] Meta descriptions complete
    [ ] Sitemap available
    [ ] Robots.txt available
    [ ] Search Console configured if included

## Analytics

    [ ] Analytics configured if included
    [ ] Tracking verified
    [ ] Client access configured

## Documentation

    [ ] README complete
    [ ] Technical documentation complete
    [ ] Design reference documented
    [ ] Environment documentation complete
    [ ] Deployment documentation complete

## Training

    [ ] Training completed
    [ ] Client understands website
    [ ] Client knows support process

## Warranty

    [ ] Warranty start recorded
    [ ] Warranty end recorded
    [ ] Warranty scope explained

## Maintenance

    [ ] Maintenance status recorded
    [ ] Maintenance plan explained
    [ ] Support channel provided

---

# 47. Final Handover Package

The final handover package may contain:

    /handover
        project-summary.md
        deployment-record.md
        account-inventory.md
        maintenance-information.md
        warranty-information.md
        training-notes.md

Do not include passwords or secrets inside these files.

---

# 48. Project Summary

The final project summary should contain:

    Client:
    Project:
    Package:
    Production URL:
    Launch Date:
    Technology:
    Hosting:
    Domain:
    Warranty:
    Maintenance:
    Primary Contact:

---

# 49. Post-Handover Responsibilities

After handover, responsibilities should be clear.

## Agency

Responsible for:

- Agreed warranty defects
- Agreed maintenance services
- Agreed technical support

## Client

Responsible for:

- Business information accuracy
- Domain fees
- Hosting fees where applicable
- Third-party subscriptions
- Account security
- Approval of future changes

---

# 50. Termination or Transfer

If the client ends the agency relationship, the project should support an orderly transfer.

Where contractually required, provide:

- Source code
- Deployment information
- Domain information
- Hosting information
- Documentation
- Relevant assets
- Account ownership information

Do not intentionally create technical lock-in.

---

# 51. Project Closure

A project may be marked CLOSED only after:

    [ ] Production deployment complete
    [ ] QA complete
    [ ] Client acceptance complete
    [ ] Handover complete
    [ ] Training complete
    [ ] Documentation complete
    [ ] Warranty dates recorded
    [ ] Maintenance status recorded
    [ ] Final project files organized
    [ ] Financial/project closure completed

---

# 52. AI Coding Agent Rules

AI coding agents must follow these rules when preparing a project for handover:

1. Do not invent credentials.
2. Do not expose secrets.
3. Do not modify ownership settings without authorization.
4. Do not change the approved UI.
5. Do not create a new design.
6. Reference the approved design files and Design System.
7. Do not remove documentation without understanding its purpose.
8. Do not claim that a service is configured unless it has been verified.
9. Do not claim that deployment succeeded unless it has been verified.
10. Do not claim that analytics is working unless tracking has been verified.
11. Do not claim that backups exist unless they have been confirmed.
12. Document known limitations.
13. Keep technical documentation synchronized with the actual implementation.
14. Never place secrets in Markdown files.
15. Never fabricate client information.

---

# 53. Definition of Complete Handover

Handover is complete when:

    The website is live.
    The client has reviewed it.
    The client has accepted it.
    Required accounts are documented.
    Required access has been transferred.
    Documentation is complete.
    Training has been completed.
    Warranty dates are recorded.
    Maintenance status is recorded.
    The final production version is identifiable.
    No critical unresolved defects remain.

---

# 54. Final Principle

A professional website project does not end when the deployment command succeeds.

A successful project ends when the client can confidently operate the delivered website, understands who is responsible for what, and the agency can reliably maintain or transfer the system in the future.

The handover should leave:

    No confusion.
    No hidden dependencies.
    No undocumented credentials.
    No unclear ownership.
    No unknown warranty terms.
    No undocumented production configuration.

The goal is a clean transition from:

    Development

to:

    Production

to:

    Client Ownership

to:

    Long-Term Maintenance.




    ---

# 55. Final Handover Record

Every completed project should have a final handover record.

Use the following template:

## Project Information

    Client:
    Project Name:
    Package:
    Project Start Date:
    Development Completion Date:
    Production Launch Date:
    Handover Date:

## Production

    Production URL:
    Domain:
    Hosting Provider:
    Deployment Platform:

## Technology

    Frontend:
    Backend:
    Database:
    Repository:
    Deployment:

## Design

    Design System:
    Approved UI References:
    Desktop Designs:
    Mobile Designs:

## Services

    Contact Form:
    WhatsApp:
    Google Maps:
    Analytics:
    Search Console:
    Social Media:
    Other Integrations:

## Warranty

    Warranty Start:
    Warranty End:
    Warranty Status:

## Maintenance

    Maintenance Plan:
    Maintenance Start:
    Maintenance Renewal:
    Support Contact:

## Acceptance

    Client Review Completed:
    Client Acceptance:
    Handover Completed:

---

# 56. Account & Access Register

Maintain a separate access register for every project.

Example:

| Service | Purpose | Account Owner | Agency Access | Client Access |
|---|---|---|---|---|
| Domain Registrar | Domain | Client | Yes/No | Yes |
| Hosting | Website | Client/Agency | Yes | Yes |
| GitHub | Source Code | Client/Agency | Yes | Yes |
| Analytics | Analytics | Client | Yes/No | Yes |
| Search Console | SEO | Client | Yes/No | Yes |
| Monitoring | Uptime | Agency/Client | Yes | Yes |

Do not store passwords in this document.

Use the register only to document ownership and access status.

---

# 57. Account Ownership Principle

Whenever practical, business-critical accounts should be owned by the client.

Preferred ownership:

    Client
      ↓
    Owns Business Accounts
      ↓
    Agency Receives Authorized Access
      ↓
    Agency Builds & Maintains Website

Avoid:

    Agency
      ↓
    Owns Everything
      ↓
    Client Has No Direct Access

The goal is to provide professional service without creating unnecessary vendor lock-in.

---

# 58. Access Removal

When an employee, freelancer, contractor, or external developer no longer requires access:

    [ ] Remove GitHub access
    [ ] Remove hosting access
    [ ] Remove analytics access
    [ ] Remove monitoring access
    [ ] Remove deployment access
    [ ] Remove other project access
    [ ] Rotate shared credentials if applicable

Access should follow the principle of least privilege.

---

# 59. Offboarding

If the project is transferred to another agency or developer:

    Client Request
          ↓
    Confirm Contractual Rights
          ↓
    Prepare Project
          ↓
    Verify Source Code
          ↓
    Prepare Documentation
          ↓
    Transfer Access
          ↓
    Verify New Access
          ↓
    Remove Agency Access if Required
          ↓
    Record Transfer

The agency must not intentionally prevent a legitimate project transfer.

---

# 60. Project Transfer Checklist

Before transferring a project:

    [ ] Source code available
    [ ] Final production version identified
    [ ] README available
    [ ] Environment variables documented
    [ ] Hosting documented
    [ ] Domain documented
    [ ] DNS documented
    [ ] Third-party services documented
    [ ] Design references available
    [ ] Assets available
    [ ] Deployment process documented
    [ ] Maintenance information available
    [ ] Known issues documented
    [ ] Client ownership confirmed

Secrets should be transferred using an appropriate secure mechanism.

---

# 61. Documentation Accuracy

Documentation must describe the actual system.

Do not document:

- Technologies that are not used
- Services that are not configured
- Features that do not exist
- Integrations that were never implemented
- Monitoring that is not active
- Backups that do not exist

Documentation must be updated when the implementation changes.

---

# 62. Documentation Update Trigger

Documentation should be updated whenever there is a meaningful change to:

- Architecture
- Hosting
- Domain
- Deployment
- Third-party services
- Environment variables
- Authentication
- Database
- Major dependencies
- Design system
- Maintenance process

The rule is:

    Change System
         ↓
    Update Documentation
         ↓
    Test
         ↓
    Deploy

---

# 63. Documentation Source of Truth

Project documentation should have clearly defined sources of truth.

## Design

    Complete Stonebridge Design System Specification
    Approved UI reference files

## Architecture

    06-system-architecture-and-technical-standards.md

## Security

    03-security-standards.md

## SEO

    04-seo-and-analytics.md

## Performance

    05-performance-and-optimization.md

## Content

    07-content-and-asset-management.md

## QA

    08-testing-and-qa.md

## Deployment

    09-deployment-and-release.md

## Maintenance

    10-maintenance-and-monitoring.md

## Handover

    11-client-handover-and-documentation.md

AI agents should consult the relevant source document before making changes in that area.

---

# 64. AI Agent Handover Verification

Before an AI coding agent declares a project ready for handover, it must verify:

    [ ] Approved design was followed
    [ ] All required pages exist
    [ ] All required routes work
    [ ] Navigation works
    [ ] Mobile navigation works
    [ ] Forms work
    [ ] Contact methods work
    [ ] Images load
    [ ] No placeholder content remains
    [ ] SEO foundation exists
    [ ] Sitemap exists
    [ ] Robots.txt exists
    [ ] HTTPS is active
    [ ] Production build succeeds
    [ ] No critical console errors
    [ ] No secrets are exposed
    [ ] Documentation reflects implementation
    [ ] Deployment configuration is documented

---

# 65. AI Agent Prohibited Handover Claims

AI agents must never state:

    "The website is deployed."

unless deployment has actually been verified.

They must never state:

    "Analytics is configured."

unless analytics has actually been configured and verified.

They must never state:

    "The backup is working."

unless a backup system has actually been confirmed.

They must never state:

    "The client has access."

unless access has actually been verified.

They must never state:

    "The project is secure."

as an absolute claim.

Security should instead be described according to the checks that were actually performed.

Example:

    "The configured security controls were reviewed according to
    the project's security checklist."

---

# 66. Final Project Archive

After handover, maintain an organized project archive.

Recommended structure:

    project-name/
    │
    ├── documentation/
    │   ├── README.md
    │   ├── project-summary.md
    │   ├── deployment.md
    │   ├── maintenance.md
    │   └── handover.md
    │
    ├── design/
    │   ├── design-system/
    │   ├── desktop/
    │   ├── mobile/
    │   └── references/
    │
    ├── assets/
    │   ├── logo/
    │   ├── images/
    │   └── brand/
    │
    └── source/
        └── application/

The exact structure may vary according to the project.

---

# 67. Sensitive Information Rule

The project archive must never contain unsecured:

- Passwords
- Private API keys
- Database credentials
- JWT secrets
- Private certificates
- Recovery codes
- Personal authentication information

Use a secure password or secret-management system instead.

---

# 68. Final Client Handover Message

The agency may use the following structure when formally notifying the client:

    Subject: Website Project — Final Handover

    Dear [Client Name],

    We are pleased to confirm that the [Project Name] website
    has been completed and deployed.

    Production Website:
    [URL]

    The website has completed the agreed development,
    testing, and deployment process.

    The handover includes:
    - Completed website
    - Production deployment
    - Domain/SSL configuration
    - Agreed integrations
    - Foundational SEO
    - Client training
    - Warranty coverage

    Warranty Period:
    [Start Date] — [End Date]

    Maintenance:
    [Maintenance Status]

    If you experience an issue related to the delivered
    functionality during the warranty period, please contact:

    [Support Contact]

    Thank you for trusting us with your project.

    [Agency Name]

---

# 69. Client Acceptance Statement

Where a formal acceptance statement is required:

    PROJECT ACCEPTANCE

    Project:
    Client:
    Production URL:
    Delivery Date:

    I confirm that I have reviewed the delivered website
    and acknowledge receipt of the agreed project deliverables.

    Client Name:
    Signature:
    Date:

    Agency Representative:
    Signature:
    Date:

Electronic acceptance may be used where legally and contractually appropriate.

---

# 70. Final Handover Status

Use one of the following statuses:

## PREPARING

The website is being prepared for handover.

## READY FOR CLIENT REVIEW

Internal QA is complete and the client can review the website.

## CLIENT REVIEW

The client is reviewing the delivered website.

## CORRECTIONS REQUIRED

Issues remain before final acceptance.

## ACCEPTED

The client has accepted the website.

## HANDED OVER

Required access, documentation, and training have been completed.

## WARRANTY

The project has entered its warranty period.

## MAINTENANCE

The project is under an active maintenance agreement.

## CLOSED

The project has completed its contractual lifecycle.

---

# 71. Final Handover State Machine

The project lifecycle should follow:

    DEVELOPMENT
         ↓
    INTERNAL QA
         ↓
    READY FOR REVIEW
         ↓
    CLIENT REVIEW
         ↓
    CORRECTIONS
         ↓
    ACCEPTANCE
         ↓
    HANDOVER
         ↓
    WARRANTY
         ↓
    ┌───────────────┐
    │               │
    ↓               ↓
 MAINTENANCE      CLOSED
    │
    ↓
 CONTINUED SUPPORT

---

# 72. Definition of Successful Handover

A successful handover means:

    The website works.
    The website matches the approved design.
    The client has reviewed the website.
    The client understands the website.
    The client knows how customers contact them.
    Ownership is clearly documented.
    Access is properly configured.
    Technical documentation exists.
    Deployment information exists.
    Warranty terms are documented.
    Maintenance responsibilities are documented.
    No critical unresolved issue remains.
    The final production release is identifiable.

---

# 73. Final Principle

The purpose of client handover is not simply to give the client a website URL.

It is to transfer a complete, understandable, maintainable product.

The final state should be:

    CLIENT
       │
       ├── Understands Website
       ├── Knows Ownership
       ├── Has Required Access
       ├── Understands Support
       └── Understands Warranty
              │
              ↓
          WEBSITE
              │
       ├── Production
       ├── Documented
       ├── Tested
       ├── Secure
       └── Maintainable

A professional handover should eliminate uncertainty about:

    Who owns it?
    Who manages it?
    Where is it hosted?
    Where is the source code?
    How is it deployed?
    Who receives inquiries?
    Who maintains it?
    What is covered by warranty?
    What requires additional payment?
    What happens if the client changes agencies?

The client should leave the project with confidence, while the agency should retain enough accurate documentation to support, maintain, or transfer the project responsibly.