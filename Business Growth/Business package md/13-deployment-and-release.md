# `13-deployment-and-release.md`

````md
# Business Growth
# Deployment & Release Standards

**Document:** 13-deployment-and-release.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines the deployment, release, production configuration, launch, rollback, and post-deployment standards for the Business Growth package.

Business Growth can range from a relatively simple static website to a richer system containing:

- Structured content
- Product and service catalogs
- Dynamic detail pages
- Project portfolios
- Blog/news
- Resources
- Search
- Filtering
- RFQ
- Lead storage
- APIs
- PostgreSQL
- File storage
- Analytics
- Search Console
- Maps
- Email services
- CRM integrations
- Other approved third-party services

Because the architecture can vary by project, deployment must be based on the actual enabled features rather than one universal deployment process.

The objective is:

> **Release the exact approved website into production safely, verify that all critical functionality works, and maintain a reliable path for rollback and recovery.**

---

# 2. Relationship to Starter Presence

The foundational deployment standards from Starter Presence remain applicable.

These include:

- Production build
- Domain connection
- HTTPS
- Environment configuration
- Hosting
- DNS
- Basic smoke testing
- Git release discipline
- Production verification

Reference:

`Starter Presence / 09-deployment-and-release.md`

This document expands those standards for Business Growth-specific requirements such as:

- Dynamic content
- APIs
- Databases
- Lead systems
- File storage
- Search/filtering
- Analytics
- Third-party integrations
- Larger content sets
- Production migrations

---

# 3. Deployment Principle

Deployment must follow:

```text
Approved Requirements
        ↓
Approved UI
        ↓
Completed Development
        ↓
QA
        ↓
Release Candidate
        ↓
Staging / Preview
        ↓
Production Deployment
        ↓
Smoke Test
        ↓
Monitoring
````

Production should never be treated as the primary testing environment.

---

# 4. Definition of a Release

A release is a known, tested version of the project intended for deployment.

A release should have:

* Identifiable version/commit
* Completed required QA
* Approved content
* Approved UI
* Known environment configuration
* Documented changes
* Rollback path

---

# 5. Release Types

The agency may classify releases as:

```text
Major
Minor
Patch
Content
Hotfix
```

## Major

Significant architectural or feature changes.

## Minor

New functionality without major architectural change.

## Patch

Bug fixes and small technical changes.

## Content

Approved content/assets changes without significant application changes.

## Hotfix

Urgent production correction.

---

# 6. Release Identification

Every production deployment should be traceable to:

```text
Repository
Commit
Branch
Build
Deployment
Date
```

Example:

```text
Project:
Business Growth Client A

Commit:
a84f12c

Environment:
Production

Deployment:
2026-08-13
```

---

# 7. Source Control Requirement

All production code must originate from the project's Git repository.

Do not deploy:

* Random local copies
* Uncommitted code
* Unknown ZIP archives
* Code modified directly on production

unless a documented emergency procedure applies.

---

# 8. Branch Strategy

The exact branching model may vary.

A practical agency workflow may use:

```text
main
 ↓
Production

feature/*
 ↓
Development

release/*
 ↓
Release Candidate

hotfix/*
 ↓
Emergency Production Fix
```

The team may simplify this for small projects.

The important requirement is controlled production changes.

---

# 9. Protected Production Branch

Where practical, the production branch should be protected against accidental direct changes.

Recommended:

```text
Feature
  ↓
Pull Request
  ↓
Review
  ↓
Merge
  ↓
Production
```

---

# 10. Commit Standard

Commits should describe meaningful changes.

Good:

```text
feat: add product detail template
fix: correct RFQ submission validation
perf: optimize project gallery loading
content: update product catalog
```

Avoid:

```text
fix
update
changes
final
final-final
```

---

# 11. Release Candidate

Before production:

```text
Development
   ↓
QA
   ↓
Release Candidate
```

The release candidate should represent the version intended for launch.

---

# 12. Release Candidate Freeze

After release-candidate approval:

Only changes that are:

* Critical
* High priority
* Required client corrections
* Required deployment fixes

should be introduced before launch.

Large new features should be moved to a future release.

---

# 13. Environment Model

Business Growth should separate:

```text
Development
Preview / Staging
Production
```

where the architecture supports it.

---

# 14. Development Environment

Used for:

* Coding
* Local testing
* Component development
* Integration development

Development should use:

```text
Test Data
Development Credentials
Development Services
```

where possible.

---

# 15. Preview / Staging Environment

Used for:

* Client review
* Final QA
* Integration testing
* Production-like validation

It should closely resemble production without exposing real sensitive production data unnecessarily.

---

# 16. Production Environment

Production contains:

* Real domain
* Real client content
* Real integrations
* Production analytics
* Production leads
* Production database where applicable

Production access must be controlled.

---

# 17. Environment Separation

Never assume:

```text
Development = Production
```

Verify:

```text
API URL
Database
Analytics
CORS
Storage
Third-party credentials
Domain
```

for each environment.

---

# 18. Environment Variables

Production environment variables may include:

```text
DATABASE_URL
DIRECT_URL
JWT_SECRET
NODE_ENV
CORS_ORIGIN
FRONTEND_URL
API_URL
ANALYTICS_ID
EMAIL_CONFIG
CRM_CONFIG
STORAGE_CONFIG
```

Only use variables relevant to the actual project.

---

# 19. Environment Variable Rules

Required:

```text
[ ] Secrets stored outside Git
[ ] Production values configured in hosting platform
[ ] Development and production separated
[ ] No secret values in frontend source
[ ] Required variables validated
```

---

# 20. Production Configuration Validation

Before deployment verify:

```text
[ ] Production API URL
[ ] Production database
[ ] Correct CORS origin
[ ] Production domain
[ ] Analytics property
[ ] Email destination
[ ] Storage bucket
[ ] CRM credentials where applicable
```

Incorrect environment configuration is a deployment blocker.

---

# 21. Frontend Environment Configuration

Frontend-visible configuration must contain only public values.

Examples:

```text
API base URL
Public analytics identifier
Public map key where restrictions are configured
```

Never expose:

```text
Database credentials
Private API secrets
CRM secrets
SMTP passwords
JWT signing secrets
```

---

# 22. Backend Environment Configuration

Backend secrets must be configured on the server/hosting platform.

Examples:

```text
DATABASE_URL
SMTP credentials
CRM API secret
JWT secret
Cloud storage secret
```

---

# 23. Environment Validation

Application startup should detect missing required variables.

Preferred behavior:

```text
Missing Required Variable
        ↓
Fail Clearly
```

rather than silently using unsafe defaults.

---

# 24. Build Preparation

Before creating a production build:

```text
[ ] Correct branch
[ ] Correct commit
[ ] Dependencies installed
[ ] Lockfile present
[ ] Environment verified
[ ] Content finalized
[ ] UI approved
[ ] QA complete
```

---

# 25. Dependency Installation

Use the project's defined package manager.

Do not switch package managers during deployment.

Examples:

```text
npm
pnpm
yarn
```

The chosen package manager must match the repository configuration.

---

# 26. Lockfile Requirement

The production deployment should use the committed lockfile.

This ensures predictable dependency versions.

Do not update dependencies automatically during deployment unless explicitly intended.

---

# 27. Production Build

The production build must:

```text
[ ] Complete successfully
[ ] Use production configuration
[ ] Generate expected assets
[ ] Not contain development URLs
[ ] Not contain test content
[ ] Not expose secrets
```

---

# 28. Build Failure Policy

Do not deploy a release if the production build fails.

Investigate:

```text
Compilation errors
Type errors
Missing imports
Environment failures
Asset failures
Dependency errors
```

---

# 29. Build Warnings

Warnings should be reviewed.

Not every warning blocks deployment.

However, warnings that indicate:

* Missing assets
* Deprecated APIs
* Security concerns
* Broken routes
* Dependency problems

must be addressed.

---

# 30. Static Asset Verification

Before production:

```text
[ ] Images
[ ] Fonts
[ ] Icons
[ ] PDFs
[ ] Videos
[ ] Favicon
[ ] Manifest where applicable
```

must be verified.

---

# 31. Dynamic Content Deployment

If content is static:

```text
Build
 ↓
Deploy
```

If content is database-backed:

```text
Code
 ↓
Deploy
 ↓
Connect to Production Database
```

The actual sequence depends on the architecture.

---

# 32. Database Migration Standard

If PostgreSQL schema changes exist:

```text
Development Migration
        ↓
Review
        ↓
Test on Staging
        ↓
Production Migration
        ↓
Verify
```

Never introduce untested production database migrations.

---

# 33. Migration Backup

Before a significant production migration:

```text
[ ] Backup available
[ ] Migration reviewed
[ ] Rollback/recovery strategy understood
[ ] Maintenance impact considered
```

---

# 34. Database Migration Safety

Avoid destructive migrations that:

* Drop important columns
* Remove records
* Change data meaning
* Break existing code

without an explicit migration plan.

---

# 35. Zero-Downtime Migration Principle

For important systems, prefer additive migrations.

Example:

```text
Add new field
   ↓
Deploy code that supports both versions
   ↓
Migrate data
   ↓
Remove old field later
```

The exact strategy depends on project complexity.

---

# 36. Seed Data

Production seed data must be deliberate.

Never deploy development test records into production accidentally.

Verify:

```text
[ ] No test products
[ ] No fake leads
[ ] No placeholder users
[ ] No sample articles
[ ] No development credentials
```

---

# 37. Content Deployment

Content changes should be treated as releases when they affect production.

Example:

```text
Approved Product Update
 ↓
Content Validation
 ↓
Preview
 ↓
Production
```

---

# 38. Bulk Content Import

For large imports:

```text
Source Data
 ↓
Validation
 ↓
Transformation
 ↓
Staging Import
 ↓
QA
 ↓
Production Import
```

Never import a large unvalidated dataset directly into production.

---

# 39. Asset Deployment

Large media assets should normally be stored in appropriate asset infrastructure.

The release should verify:

```text
[ ] Asset exists
[ ] URL valid
[ ] Access correct
[ ] Correct optimization
[ ] Production rendering
```

---

# 40. Database and Asset Consistency

If a content entry references an asset:

```text
Product
 ↓
Image Reference
 ↓
Actual Image
```

both must exist.

A release should not produce database records pointing to missing assets.

---

# 41. Deployment Platform

Preferred:

```text
Frontend:
Vercel

Backend:
Railway or equivalent

Database:
PostgreSQL provider

Assets:
Approved storage/CDN
```

Actual hosting may vary according to project requirements.

---

# 42. Frontend Deployment

Verify:

```text
[ ] Correct repository
[ ] Correct branch
[ ] Correct build command
[ ] Correct output configuration
[ ] Correct environment variables
[ ] Correct domain
```

---

# 43. Backend Deployment

Verify:

```text
[ ] Correct repository
[ ] Correct start command
[ ] Environment variables
[ ] Database connection
[ ] CORS
[ ] API health
[ ] Production logging
```

---

# 44. Backend Health Check

Where a backend exists, provide an appropriate health endpoint.

Example:

```text
GET /health
```

Expected:

```text
200 OK
```

A health endpoint should not expose sensitive system information.

---

# 45. Database Health Check

Verify:

```text
[ ] Database reachable
[ ] Required migrations applied
[ ] Application can perform expected queries
```

Avoid exposing database credentials or detailed schema information through health endpoints.

---

# 46. Domain Deployment

The final domain should be verified:

```text
[ ] Domain resolves
[ ] WWW behavior
[ ] Non-WWW behavior
[ ] HTTPS
[ ] Redirects
```

---

# 47. DNS

Verify appropriate records.

Examples:

```text
A
AAAA
CNAME
TXT
MX
```

Only configure records required by the actual project/services.

---

# 48. DNS Change Verification

After DNS changes:

```text
[ ] Domain resolves
[ ] Hosting receives traffic
[ ] SSL works
[ ] Email records remain correct
```

Do not delete unrelated DNS records without understanding their purpose.

---

# 49. SSL Deployment

Verify:

```text
[ ] Certificate active
[ ] Correct domain
[ ] HTTPS
[ ] HTTP → HTTPS
[ ] No mixed content
```

---

# 50. CDN / Edge Configuration

Where the hosting platform uses a CDN:

Verify:

```text
[ ] Static assets delivered correctly
[ ] Cache behavior expected
[ ] Dynamic requests not incorrectly cached
[ ] Purging/revalidation strategy known
```

---

# 51. Caching Deployment

Where caching exists:

```text
[ ] Public content cached appropriately
[ ] Lead submissions not cached incorrectly
[ ] Private responses not cached publicly
[ ] Cache invalidation works
```

---

# 52. API Deployment

For APIs:

```text
[ ] Production URL
[ ] HTTPS
[ ] CORS
[ ] Health check
[ ] Authentication where applicable
[ ] Rate limiting
[ ] Error handling
```

---

# 53. CORS Production Verification

Verify:

```text
Allowed:
https://clientdomain.com

Rejected:
unknown-origin.com
```

Do not leave localhost or wildcard origins unnecessarily enabled.

---

# 54. Lead System Deployment

Before launch:

```text
[ ] Contact form
[ ] RFQ
[ ] Inquiry types
[ ] Routing
[ ] Email
[ ] Database where applicable
[ ] CRM where applicable
```

must be tested.

---

# 55. Real Lead Test

Perform one controlled production test.

Example:

```text
Test Name:
Agency QA

Test Email:
approved test address

Test Request:
Production deployment verification
```

Verify:

```text
Website
 ↓
Backend
 ↓
Lead Routing
 ↓
Destination
```

Then remove or classify test data appropriately.

---

# 56. Analytics Deployment

Verify:

```text
[ ] Correct production analytics property
[ ] No development property
[ ] Page views
[ ] CTA tracking
[ ] RFQ tracking
[ ] Contact tracking
```

---

# 57. Search Console Deployment

Where included:

```text
[ ] Correct domain property
[ ] Ownership verified
[ ] Sitemap submitted
[ ] Production URLs accessible
```

---

# 58. Robots.txt Deployment

Verify production robots.txt.

Do not accidentally deploy staging rules such as:

```text
Disallow: /
```

to production.

---

# 59. Sitemap Deployment

Verify:

```text
[ ] Sitemap exists
[ ] Production URLs
[ ] No staging URLs
[ ] No draft pages
[ ] No broken URLs
[ ] Enabled content included
```

---

# 60. Indexing Controls

Before launch:

```text
Development / Staging:
No accidental indexing

Production:
Important public pages indexable
```

Remove temporary noindex restrictions before public launch where appropriate.

---

# 61. Third-Party Integration Deployment

For every enabled integration:

```text
[ ] Credentials configured
[ ] Production endpoint
[ ] Domain restrictions
[ ] Permissions
[ ] Error handling
[ ] Production test
```

---

# 62. Map Deployment

Verify:

```text
[ ] Correct API key
[ ] Key restrictions
[ ] Correct locations
[ ] Map loads
[ ] Fallback address works
```

---

# 63. Email Deployment

Verify:

```text
[ ] Sender configuration
[ ] Recipient configuration
[ ] SMTP/API credentials
[ ] SPF/DKIM/DMARC where relevant
[ ] Test delivery
```

Do not place email passwords into the repository.

---

# 64. CRM Deployment

If included:

```text
[ ] Production credentials
[ ] Production API
[ ] Lead field mapping
[ ] Context mapping
[ ] Error handling
[ ] Test lead
```

---

# 65. File Storage Deployment

Verify:

```text
[ ] Bucket/storage configuration
[ ] Public/private rules
[ ] Upload permissions
[ ] Download permissions
[ ] File URLs
[ ] CDN configuration
```

---

# 66. Monitoring Deployment

Where included:

```text
[ ] Uptime monitoring
[ ] Error monitoring
[ ] Application monitoring
[ ] Alert destination
```

Examples may include appropriate tools such as uptime, error, or performance monitoring services.

---

# 67. Deployment Order

A dynamic project may follow:

```text
1. Backup
2. Database migration
3. Backend deployment
4. Backend verification
5. Frontend deployment
6. DNS/domain verification
7. Production smoke test
8. Analytics verification
9. Monitoring verification
```

The exact sequence depends on architecture.

---

# 68. Static Project Deployment Order

A simpler project may use:

```text
1. Build
2. Deploy
3. Domain/HTTPS verification
4. Smoke test
5. SEO verification
6. Analytics verification
7. Monitoring
```

---

# 69. Release Dependency Order

When frontend and backend changes are coupled:

```text
Backend Compatibility
        ↓
Backend Deployment
        ↓
Frontend Deployment
```

Do not deploy a frontend that requires an unavailable backend API.

---

# 70. Backward-Compatible Release

When possible:

```text
Existing API
+
New API Compatibility
+
New Frontend
```

should allow safe deployment without breaking visitors.

---

# 71. Rollback Strategy

Every production release should have a rollback path.

Possible:

```text
Previous Deployment
      ↓
Rollback
```

or:

```text
Previous Git Commit
      ↓
Redeploy
```

For databases:

```text
Database Recovery Plan
```

must also be considered.

---

# 72. Frontend Rollback

Frontend rollback should be straightforward through the hosting/deployment platform.

Verify:

```text
[ ] Previous deployment identifiable
[ ] Rollback mechanism understood
[ ] Rollback tested or known to work
```

---

# 73. Backend Rollback

Backend rollback must consider:

* Code
* Environment
* Database schema
* APIs
* Third-party compatibility

Do not roll back application code blindly after an irreversible database migration.

---

# 74. Database Rollback

Prefer forward-compatible database migrations.

If a migration is destructive:

```text
[ ] Backup available
[ ] Recovery tested
[ ] Restore process understood
```

---

# 75. Rollback Trigger

Consider rollback when:

```text
Critical production failure
Major lead-generation failure
Major security issue
Major content corruption
Severe performance regression
Broken primary navigation
```

---

# 76. Rollback Decision

Do not roll back for every minor visual issue.

Use:

```text
Severity
Business Impact
User Impact
Recovery Complexity
```

to decide.

---

# 77. Hotfix Process

For critical issues:

```text
Production Issue
 ↓
Confirm
 ↓
Hotfix Branch
 ↓
Implement Fix
 ↓
Focused QA
 ↓
Deploy
 ↓
Smoke Test
 ↓
Merge Back
```

Do not make undocumented direct production edits.

---

# 78. Emergency Changes

If emergency direct changes are unavoidable:

Immediately afterward:

```text
[ ] Document change
[ ] Commit change
[ ] Reconcile repository
[ ] Test
[ ] Record incident
```

Production should return to source-controlled truth.

---

# 79. Release Notes

Each significant release should record:

```text
Version
Date
Changes
Bug Fixes
Content Changes
Dependencies
Database Changes
Known Issues
```

---

# 80. Client Release Communication

Where appropriate, inform the client of:

* Launch
* Major updates
* Important changes
* Maintenance releases
* Known limitations

Do not communicate technical details unnecessarily.

---

# 81. Deployment Checklist — Code

```text
[ ] Correct commit
[ ] Build passes
[ ] Tests pass
[ ] Lint/type checks pass where configured
[ ] No debug code
[ ] No test credentials
[ ] No placeholder data
[ ] Dependencies locked
```

---

# 82. Deployment Checklist — Environment

```text
[ ] Environment variables correct
[ ] Production API URL
[ ] Database
[ ] CORS
[ ] Domain
[ ] Analytics
[ ] Email
[ ] Storage
[ ] CRM where applicable
```

---

# 83. Deployment Checklist — Security

```text
[ ] HTTPS
[ ] Secrets protected
[ ] CORS restricted
[ ] Security headers
[ ] Forms protected
[ ] Upload security
[ ] Rate limiting
[ ] Authentication where applicable
```

---

# 84. Deployment Checklist — SEO

```text
[ ] Sitemap
[ ] Robots.txt
[ ] Canonicals
[ ] Titles
[ ] Descriptions
[ ] No accidental noindex
[ ] Structured data
[ ] Open Graph
```

---

# 85. Deployment Checklist — Performance

```text
[ ] Optimized assets
[ ] Production bundle
[ ] No unnecessary development scripts
[ ] Images optimized
[ ] Fonts optimized
[ ] Third-party scripts reviewed
[ ] Core pages checked
```

---

# 86. Deployment Checklist — Leads

```text
[ ] Contact form
[ ] RFQ
[ ] Product inquiries
[ ] Service inquiries
[ ] Other enabled lead types
[ ] Email delivery
[ ] Database storage where applicable
[ ] CRM where applicable
[ ] Analytics events
```

---

# 87. Deployment Checklist — Content

```text
[ ] Approved content
[ ] No placeholders
[ ] Correct images
[ ] Correct documents
[ ] Correct links
[ ] Correct contact details
[ ] Correct business hours
[ ] Correct locations
```

---

# 88. Production Smoke Test

Immediately after deployment:

```text
[ ] Homepage
[ ] Header
[ ] Navigation
[ ] Mobile navigation
[ ] Primary CTA
[ ] Services
[ ] Products
[ ] Projects
[ ] Blog
[ ] Contact
[ ] RFQ
[ ] Key integrations
```

Only include enabled modules.

---

# 89. Production Browser Test

At minimum, perform a targeted production check using:

```text
Chrome
Edge
Firefox
Safari
```

Focus on:

```text
Homepage
Navigation
Core content
Lead forms
Mobile
```

---

# 90. Production Mobile Test

Verify:

```text
[ ] Header
[ ] Menu
[ ] Hero
[ ] Content
[ ] CTA
[ ] Product/service pages
[ ] RFQ
[ ] Contact
[ ] Footer
```

---

# 91. Production Console Review

Open browser developer tools and verify:

```text
[ ] No critical JavaScript errors
[ ] No failed API requests
[ ] No missing assets
[ ] No CORS errors
[ ] No mixed-content errors
```

---

# 92. Production Network Review

Review:

```text
[ ] HTTP status
[ ] API responses
[ ] Asset loading
[ ] Third-party resources
```

Investigate unexpected failed requests.

---

# 93. Production SEO Review

Verify:

```text
[ ] Homepage indexability
[ ] Important pages indexability
[ ] Sitemap
[ ] Robots
[ ] Canonical
[ ] Structured data
```

---

# 94. Production Analytics Review

Perform controlled events:

```text
[ ] Page view
[ ] CTA click
[ ] Form start
[ ] Form submit
[ ] RFQ submit
[ ] Phone click
[ ] Email click
[ ] WhatsApp click
```

Only test enabled events.

---

# 95. Production Lead Verification

Verify the actual lead path:

```text
Website
 ↓
Form
 ↓
Backend/API
 ↓
Processing
 ↓
Destination
```

The user should receive a clear success response.

---

# 96. Post-Deployment Monitoring

After deployment, monitor for:

```text
[ ] Uptime
[ ] Errors
[ ] API failures
[ ] Form failures
[ ] Lead delivery
[ ] Performance
[ ] Analytics
```

The first period after launch should receive additional attention.

---

# 97. Post-Deployment Observation

Observe:

```text
Immediately:
Production Smoke Test

First Hours:
Errors + Forms + Availability

First Days:
Analytics + Performance + Client Feedback

Warranty Period:
Defects + Stability
```

The exact monitoring period depends on the project and maintenance plan.

---

# 98. Deployment Incident Handling

If a deployment causes an issue:

```text
Detect
 ↓
Assess Severity
 ↓
Contain
 ↓
Rollback or Hotfix
 ↓
Verify
 ↓
Document
```

---

# 99. Deployment Documentation

Each project should document:

```text
Production URL
Hosting
Repository
Deployment method
Environment variables by name only
Database
Storage
Third-party services
DNS
SSL
Monitoring
Rollback method
```

Never document secret values.

---

# 100. Production Access

Production access should be limited to authorized team members.

At project closure:

```text
[ ] Client ownership documented
[ ] Agency access documented
[ ] Unnecessary developer access removed
```

---

# 101. Domain Ownership

The client should maintain clear ownership/control of the domain.

The agency may manage technical configuration without becoming the permanent owner of the client's business identity.

---

# 102. Hosting Ownership

Hosting arrangements should be documented:

```text
Client-Owned
Agency-Managed
Agency-Owned
Third-Party Managed
```

The chosen arrangement should be clear in the contract/handover.

---

# 103. Analytics Ownership

Analytics properties should preferably be associated with the client.

The agency may receive authorized access for maintenance/reporting.

---

# 104. Search Console Ownership

Search Console ownership should also remain clearly associated with the client where practical.

---

# 105. Release Approval

Production deployment should require internal approval after:

```text
[ ] QA complete
[ ] Client approval
[ ] Release candidate approved
[ ] Deployment checklist complete
```

For small internal agency projects, the same person may perform multiple roles, but the checks should still occur.

---

# 106. Final Release Gate

A release may proceed only when:

```text
Requirements
      ✓
Design
      ✓
Content
      ✓
QA
      ✓
Security
      ✓
SEO
      ✓
Performance
      ✓
Lead Generation
      ✓
Deployment Configuration
      ✓
Rollback Plan
      ✓
```

---

# 107. Deployment Blockers

Do not release when any of the following remain unresolved:

```text
Critical bug
Broken primary lead flow
Broken primary navigation
Security vulnerability
Exposed production secret
Missing required production environment variable
Broken domain
Failed production build
Incorrect production database
Major content corruption
```

---

# 108. Known Minor Issues

A release may proceed with minor issues when:

* They are documented.
* They do not materially affect functionality.
* They do not create security risk.
* The client is aware where appropriate.
* A follow-up plan exists if needed.

---

# 109. Production Content Verification

After deployment, verify that:

```text
[ ] Client logo
[ ] Company name
[ ] Product information
[ ] Service information
[ ] Project information
[ ] Contact information
[ ] Business hours
[ ] Locations
[ ] Social media
```

match the approved production content.

---

# 110. No Development Content

Search production for:

```text
localhost
127.0.0.1
test@example.com
Lorem ipsum
Sample Product
Test Company
Demo
Placeholder
```

unless any are intentionally part of the client content.

---

# 111. Production Configuration Search

Where practical, inspect the deployed frontend/build for accidental development references.

Check for:

```text
localhost
staging domains
development API URLs
test analytics IDs
test keys
```

---

# 112. Release Artifact

The release should be identifiable.

Possible:

```text
Git commit
Deployment ID
Build ID
Version tag
```

At least one stable identifier should be recorded.

---

# 113. Release Archive

Keep enough information to reconstruct the production release:

```text
Repository commit
Deployment configuration
Environment variable names
Database migration version
Build configuration
Content version
```

Do not archive secret values in insecure locations.

---

# 114. Deployment Reproducibility

A future authorized developer should be able to understand:

```text
How was this deployed?
Which commit?
Which platform?
Which build command?
Which environment variables?
Which database?
Which integrations?
```

without asking the original developer.

---

# 115. Release Reproducibility

The production release should be reproducible from:

```text
Source Code
+
Dependencies
+
Configuration
+
Content
+
Deployment Instructions
```

where applicable.

---

# 116. Post-Launch Content Changes

After launch:

```text
Small Content Update
 ↓
Maintenance Workflow

Feature Change
 ↓
Development + QA + Release
```

Do not modify production code casually for a simple content change.

---

# 117. Post-Launch Feature Changes

New features should follow:

```text
Request
 ↓
Scope
 ↓
Design
 ↓
Implementation
 ↓
QA
 ↓
Release
```

Examples:

```text
Add product comparison
Add customer portal
Add booking engine
Add CMS
```

are not ordinary maintenance content updates.

---

# 118. Release and Warranty

During the 30-day warranty:

* Defect fixes should follow controlled releases.
* New functionality is a new scope item.
* Major design changes are not warranty defects.
* Third-party outages are not considered application defects unless caused by the implementation.

---

# 119. Release and Maintenance

After warranty:

```text
Maintenance Request
 ↓
Assess
 ↓
Content / Bug / Feature
 ↓
Appropriate Workflow
```

Maintenance should preserve release discipline.

---

# 120. Versioning

Where practical, use semantic-style versioning:

```text
1.0.0
1.0.1
1.1.0
2.0.0
```

Interpretation:

```text
Major → breaking architecture/behavior
Minor → new compatible functionality
Patch → fixes
```

The agency may use a simpler internal convention for smaller projects.

---

# 121. Release Notes Example

```text
Version: 1.2.0

Added:
- New product detail fields
- Product inquiry CTA

Updated:
- Product gallery

Fixed:
- Mobile navigation issue

Content:
- Added 5 products

Infrastructure:
- Updated image delivery configuration
```

---

# 122. Hotfix Release Example

```text
Version: 1.2.1

Fixed:
- RFQ submissions failing in production

Verification:
- Production RFQ test completed
```

---

# 123. Rollback Checklist

Before rollback:

```text
[ ] Confirm issue
[ ] Identify previous stable release
[ ] Assess database compatibility
[ ] Notify responsible team member
```

After rollback:

```text
[ ] Smoke test
[ ] Lead test
[ ] Monitor
[ ] Document
```

---

# 124. Database Rollback Warning

Do not assume:

```text
Frontend Rollback
+
Backend Rollback
+
Database Rollback
```

are equally simple.

Database migrations may make rollback more complex.

Always assess migration compatibility first.

---

# 125. Release Security Verification

Before release:

```text
[ ] Secrets
[ ] Dependencies
[ ] Security headers
[ ] CORS
[ ] Authentication
[ ] File uploads
[ ] API permissions
```

Only verify controls relevant to the project.

---

# 126. Release Performance Verification

Before release:

```text
[ ] Production bundle
[ ] Main images
[ ] Third-party scripts
[ ] API response
[ ] Core templates
[ ] Mobile experience
```

---

# 127. Release SEO Verification

Before release:

```text
[ ] URLs
[ ] Metadata
[ ] Canonicals
[ ] Sitemap
[ ] Robots
[ ] Structured data
[ ] Indexability
```

---

# 128. Release Analytics Verification

Before release:

```text
[ ] Production property
[ ] Correct event names
[ ] No duplicate tracking
[ ] No sensitive data
[ ] Lead conversion tracking
```

---

# 129. AI Deployment Rules

The AI coding agent must:

```text
[ ] Never deploy without approval
[ ] Never overwrite production unexpectedly
[ ] Verify environment configuration
[ ] Verify production build
[ ] Verify routes
[ ] Verify lead flows
[ ] Verify deployment result
[ ] Report actual test results
[ ] Preserve rollback capability
```

---

# 130. AI Must Not Change Production Configuration Blindly

The AI must not modify:

```text
Production database
Production secrets
DNS
CORS
SSL
CRM credentials
Analytics property
```

without an explicit approved deployment task.

---

# 131. AI Must Not Claim Deployment Success Without Verification

The AI must not say:

> "Deployment successful."

unless the deployment actually completed and production was verified.

It should report:

```text
Deployment:
Success / Failed

Production:
Verified / Not Verified

Smoke Test:
Passed / Failed

Known Issues:
...
```

---

# 132. AI Deployment Sequence

When authorized to perform a deployment:

```text
Read Deployment Standards
        ↓
Read Project Configuration
        ↓
Confirm Target Environment
        ↓
Verify Git State
        ↓
Build
        ↓
Run Required QA
        ↓
Deploy
        ↓
Verify Deployment
        ↓
Smoke Test
        ↓
Report Result
```

---

# 133. Final Deployment Acceptance Criteria

A Business Growth deployment is accepted when:

```text
[✓] Correct release deployed
[✓] Production build works
[✓] Domain works
[✓] HTTPS works
[✓] Frontend works
[✓] Backend works where applicable
[✓] Database works where applicable
[✓] Content is correct
[✓] Lead generation works
[✓] Analytics works where included
[✓] SEO configuration works
[✓] No critical console/network errors
[✓] Mobile smoke test passes
[✓] Monitoring is active where included
[✓] Rollback path is known
[✓] Client-facing production URL verified
```

---

# 134. Master Release Checklist

```text
PROJECT
[ ] Correct project
[ ] Correct client
[ ] Correct environment
[ ] Correct release

SOURCE
[ ] Correct Git commit
[ ] Clean working tree
[ ] Lockfile
[ ] No secrets
[ ] No test code

BUILD
[ ] Build successful
[ ] No blocking errors
[ ] Correct environment

DATABASE
[ ] Migration reviewed
[ ] Backup
[ ] Migration applied
[ ] Data verified

FRONTEND
[ ] Deployment successful
[ ] Routes work
[ ] Assets work
[ ] Responsive

BACKEND
[ ] Health check
[ ] API
[ ] CORS
[ ] Environment

LEADS
[ ] Contact
[ ] RFQ
[ ] Inquiry
[ ] Routing
[ ] Analytics

SEO
[ ] Sitemap
[ ] Robots
[ ] Metadata
[ ] Canonical
[ ] Structured data

SECURITY
[ ] HTTPS
[ ] Secrets
[ ] Headers
[ ] Validation
[ ] Rate limiting

PERFORMANCE
[ ] Production build
[ ] Images
[ ] Critical pages
[ ] Mobile

DOMAIN
[ ] DNS
[ ] SSL
[ ] WWW/non-WWW

MONITORING
[ ] Uptime
[ ] Errors
[ ] Alerts

ROLLBACK
[ ] Previous release identified
[ ] Rollback method known
[ ] Database recovery understood

POST-LAUNCH
[ ] Smoke test
[ ] Lead test
[ ] Analytics test
[ ] Client URL verified
```

---

# 135. Final Deployment Architecture

The Business Growth deployment process should follow:

```text
                         SOURCE
                           │
                           ↓
                    RELEASE CANDIDATE
                           │
              ┌────────────┼────────────┐
              │            │            │
             QA         SECURITY     PERFORMANCE
              │            │            │
              └────────────┼────────────┘
                           ↓
                       APPROVAL
                           │
                           ↓
                     DEPLOYMENT
                           │
          ┌────────────────┼────────────────┐
          │                │                │
       Frontend         Backend          Database
          │                │                │
          └────────────────┼────────────────┘
                           ↓
                     PRODUCTION
                           │
              ┌────────────┼────────────┐
              ↓            ↓            ↓
            Smoke        Leads       Analytics
             Test         Test         Test
              │            │            │
              └────────────┼────────────┘
                           ↓
                      MONITORING
                           │
                           ↓
                     FINAL RELEASE
```

---

# 136. Final Principle

Deployment is not the moment when code is uploaded.

Deployment is the complete process of moving an approved, tested release into a controlled production environment.

The standard is:

```text
Build
 ↓
Test
 ↓
Approve
 ↓
Deploy
 ↓
Verify
 ↓
Monitor
 ↓
Document
```

For Business Growth specifically:

> **Every enabled module, content type, lead flow, integration, database change, and production configuration must be considered part of the release.**

The final objective is:

```text
Correct Code
+
Correct Content
+
Correct Configuration
+
Correct Infrastructure
+
Correct Domain
+
Correct Integrations
+
Verified Production Behavior
=
Safe Release
```

And the agency should always be able to answer:

> **What version is running, where is it running, what does it depend on, how was it tested, and how do we recover if something goes wrong?**

```
```
