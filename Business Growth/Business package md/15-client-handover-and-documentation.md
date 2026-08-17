# `15-client-handover-and-documentation.md`

````md
# Business Growth
# Client Handover & Documentation Standards

**Document:** 15-client-handover-and-documentation.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines the standards for completing, documenting, and handing over a Business Growth website to the client.

A project is not considered fully complete when the website is deployed.

It is complete when:

```text
Website
   +
Production Environment
   +
Business Content
   +
Technical Documentation
   +
Access Ownership
   +
Operational Knowledge
   +
Maintenance Process
   +
Client Handover
````

have been properly organized and transferred.

The objective is to ensure that:

* The client understands what was delivered.
* The client knows who controls important accounts.
* The agency can maintain the project later.
* Another developer can understand the implementation.
* Important credentials and ownership information are not lost.
* The website can be operated, maintained, and recovered.
* The client is not unnecessarily dependent on one individual developer.

---

# 2. Purpose of Handover

The handover process should answer:

> What was built?

> How does it work?

> Where is it hosted?

> Who owns the domain?

> Where do inquiries go?

> What is included in maintenance?

> What can the client change?

> What requires the agency?

> How can the system be recovered?

> What accounts and services are connected?

---

# 3. Handover Philosophy

The client should receive:

```text
Ownership
+
Understanding
+
Access
+
Documentation
+
Operational Clarity
```

The handover should not simply be:

```text
"Here is the website link."
```

---

# 4. Handover Scope

The handover should cover the parts of the project that actually exist.

Possible areas:

```text
Website
Domain
Hosting
Frontend
Backend
Database
Storage
Analytics
Search Console
Email
CRM
Monitoring
Content
Assets
Source Code
Documentation
Maintenance
```

Disabled or unused systems should not be presented as though they were delivered.

---

# 5. Handover Categories

The final handover package should be organized into:

```text
01. Project Overview
02. Production Information
03. Ownership & Access
04. Website Documentation
05. Content Documentation
06. Technical Documentation
07. Lead & Inquiry Documentation
08. SEO & Analytics
09. Hosting & Domain
10. Security
11. Backup & Recovery
12. Maintenance
13. Source Code
14. Assets
15. Training
16. Warranty
17. Outstanding Items
18. Acceptance & Sign-Off
```

---

# 6. Final Handover Package

A Business Growth project should ideally contain:

```text
handover/
├── 01-project-overview.md
├── 02-production-environment.md
├── 03-access-and-ownership.md
├── 04-website-structure.md
├── 05-content-and-assets.md
├── 06-technical-documentation.md
├── 07-leads-and-inquiries.md
├── 08-seo-and-analytics.md
├── 09-security.md
├── 10-backup-and-recovery.md
├── 11-maintenance.md
├── 12-third-party-services.md
├── 13-training-guide.md
├── 14-known-issues.md
├── 15-warranty-and-support.md
└── 16-acceptance.md
```

The exact documents may be combined into fewer files for smaller projects.

---

# 7. Do Not Invent Handover Documents

Documentation must reflect the actual project.

If the project has no:

```text
Database
```

do not provide a database administration guide.

If the project has no:

```text
CRM
```

do not document a CRM workflow.

Documentation must describe what exists.

---

# 8. Project Overview

The handover should begin with a concise project overview.

Include:

```text
Client
Project Name
Business Sector
Package
Production URL
Launch Date
Technology
Repository
Hosting
Primary Features
Maintenance Status
```

Example:

```text
Client:
Stonebridge Construction

Package:
Business Growth

Production:
https://example.com

Launch:
August 2026
```

---

# 9. Delivered Scope

Document the actual delivered scope.

Example:

```text
Pages:
Home
About
Services
Service Detail
Projects
Project Detail
Blog
Contact
RFQ

Features:
Product catalog
Project gallery
RFQ
WhatsApp
Analytics
Search Console
```

Do not list features that were excluded.

---

# 10. Scope Comparison

Where useful, distinguish:

```text
Included
Optional Add-on
Not Included
```

Example:

```text
Included:
RFQ

Not Included:
Online payment

Optional:
CRM integration
```

This prevents future confusion.

---

# 11. Production Information

Document:

```text
Production URL
WWW URL where applicable
API URL where applicable
Hosting Provider
Database Provider
Storage Provider
Analytics Property
Search Console Property
```

Do not include passwords or private API tokens.

---

# 12. Production URL

The final production URL should be clearly identified.

Example:

```text
Primary:
https://example.com

Canonical:
https://www.example.com
```

Only document what is actually configured.

---

# 13. Environment Information

Document environments:

```text
Development
Preview/Staging
Production
```

For each:

```text
Purpose
URL
Deployment method
Access owner
```

Do not publish development credentials.

---

# 14. Domain Ownership

Document:

```text
Domain
Registrar
Owner
Renewal responsibility
Expiration date
```

The client should understand who owns the domain.

---

# 15. Domain Ownership Principle

The client should retain clear ownership of their business domain.

The agency may manage technical DNS configuration without unnecessarily becoming the permanent owner.

---

# 16. Hosting Ownership

Document:

```text
Hosting Provider
Account Owner
Billing Owner
Deployment Owner
Renewal Responsibility
```

Possible models:

```text
Client-Owned
Agency-Managed

Agency-Owned
Agency-Managed

Third-Party Managed
```

The contract should define the exact arrangement.

---

# 17. Repository Ownership

Document:

```text
GitHub Organization
Repository
Default Branch
Production Branch
Access Owners
```

Example:

```text
Repository:
github.com/company/client-website
```

Do not include personal passwords.

---

# 18. Source Code Handover

If source code is included in the agreement, the client should receive or have access to:

```text
Frontend
Backend where applicable
Database schema/migrations where applicable
Configuration examples
Documentation
```

---

# 19. Source Code Ownership

The contract should define:

```text
Who owns the source code?
Who may modify it?
Does the agency retain reusable template IP?
```

Business Growth is an agency template system.

The client should receive the agreed project implementation, while reusable agency intellectual property and template standards remain governed by the contract.

---

# 20. Template Ownership Boundary

The client project may use:

```text
Business Growth Templates
Business Growth Components
Business Growth Standards
```

but this does not automatically transfer ownership of the agency's entire reusable template library unless explicitly agreed.

The contract should control intellectual-property ownership.

---

# 21. Project-Specific Documentation

Document any project-specific deviations from the standard Business Growth system.

Example:

```text
Standard:
Product Listing

Client:
Uses product categories and industry filters.

Deviation:
Custom filter order approved in UI.
```

---

# 22. Website Structure Documentation

Document the final page structure.

Example:

```text
/
├── about
├── services
│   └── :slug
├── products
│   ├── categories
│   └── :slug
├── projects
│   └── :slug
├── blog
│   └── :slug
├── rfq
└── contact
```

Only include actual routes.

---

# 23. Page Inventory

Document:

```text
Page
Route
Template
Purpose
Enabled Modules
```

Example:

| Page     | Route       | Template        | Purpose               |
| -------- | ----------- | --------------- | --------------------- |
| Home     | `/`         | Home            | Business introduction |
| Services | `/services` | Service Listing | Show offerings        |
| RFQ      | `/rfq`      | RFQ             | Lead generation       |
| Contact  | `/contact`  | Contact         | General communication |

---

# 24. Component Documentation

The handover does not need to document every internal React component unless the contract requires it.

However, document significant reusable/custom components where useful:

```text
Product Detail
RFQ Form
Search
Project Gallery
Location Map
Custom Integration
```

---

# 25. Content Model Documentation

Document enabled content types:

```text
Services
Products
Projects
Articles
Locations
People
Resources
Testimonials
```

For each:

```text
Purpose
Where managed
How updated
```

---

# 26. Content Update Responsibility

The client should clearly understand:

```text
Who creates content?
Who approves content?
Who publishes content?
Who maintains content?
```

For Business Growth without a client CMS:

```text
Client
→ Provides/approves content

Agency
→ Implements updates
```

where maintenance has been purchased.

---

# 27. Content Update Process

Document:

```text
Client Request
 ↓
Content Review
 ↓
Update
 ↓
QA
 ↓
Publish
```

The client should know how to request:

* Product changes
* Service changes
* Project updates
* Blog posts
* Image changes
* Document replacements

---

# 28. Content Entry Boundaries

Explain what counts as:

```text
Content Update
```

versus:

```text
New Feature
```

Example:

```text
Add 5 products
→ Content update

Add customer portal
→ New feature
```

---

# 29. Asset Handover

Where included, organize approved assets:

```text
Brand
Logos
Images
Videos
Documents
Brochures
Certificates
Other agreed assets
```

---

# 30. Asset Ownership

Document ownership or usage rights where relevant.

Example:

```text
Client-supplied photography
→ Client responsibility

Licensed stock image
→ Usage according to license

Agency-created artwork
→ According to contract
```

---

# 31. Asset Source of Truth

Identify where production assets are stored.

Examples:

```text
Cloudinary
Object Storage
Repository
CMS
Client Drive
```

---

# 32. Production Storage

Document:

```text
Asset Provider
Bucket/folder concept where appropriate
Public/private classification
Access owner
```

Do not document private credentials.

---

# 33. Lead & Inquiry Documentation

This is one of the most important Business Growth handover areas.

Document:

```text
Lead Types
Form Types
Destinations
Email Recipients
Database Storage
CRM Integration
Fallback Contact Methods
```

---

# 34. Lead Types

Example:

```text
Contact
RFQ
Product Inquiry
Service Inquiry
Project Inquiry
Appointment Request
Consultation
```

Only document enabled lead types.

---

# 35. Lead Destination Documentation

For each form:

```text
Form:
RFQ

Destination:
sales@example.com

Storage:
Database

CRM:
Not included
```

Do not include passwords or secrets.

---

# 36. Lead Flow Documentation

Example:

```text
Product Detail
   ↓
Request Quote
   ↓
RFQ Form
   ↓
Product Context
   ↓
Backend
   ↓
Sales Email
   ↓
Business Follow-Up
```

This helps both the client and future developers understand the system.

---

# 37. Lead Context

Document what context is automatically associated with inquiries.

Example:

```text
Product Inquiry:
Product ID
Product Name

Service Inquiry:
Service ID
Service Name
```

---

# 38. Lead Testing Instructions

Provide a safe method for testing lead forms.

Example:

```text
1. Open product page.
2. Click "Request Quote".
3. Fill test information.
4. Submit.
5. Confirm success message.
6. Verify expected destination.
```

Do not provide production credentials.

---

# 39. Lead Failure Troubleshooting

Provide basic troubleshooting guidance:

```text
If form does not submit:
→ Check website/API health.

If submission succeeds but no email arrives:
→ Check mail/service configuration.

If CRM integration fails:
→ Check integration status and logs.
```

Detailed credentials remain restricted.

---

# 40. Analytics Documentation

Document:

```text
Analytics Provider
Property
Purpose
Key Events
Conversion Events
Access Owner
```

---

# 41. Analytics Events

Example:

```text
page_view
cta_click
form_start
form_submit
rfq_start
rfq_submit
phone_click
email_click
whatsapp_click
download_click
```

Only document events implemented in the project.

---

# 42. Analytics Ownership

Ideally:

```text
Client
→ Owns analytics property

Agency
→ Receives authorized access where necessary
```

This reduces long-term client dependency.

---

# 43. Search Console Documentation

Document:

```text
Search Console Property
Verified Domain
Sitemap
Ownership
Access
```

---

# 44. SEO Handover

Explain:

```text
Sitemap location
Robots.txt
Canonical structure
Content indexing
URL structure
Basic SEO configuration
```

Do not promise rankings.

---

# 45. SEO Maintenance Responsibility

Document who handles:

```text
Metadata updates
New content
Broken links
SEO monitoring
Search Console
Sitemap
Technical SEO
```

---

# 46. Hosting Documentation

Document:

```text
Provider
Project/Application
Deployment method
Build command
Start command where applicable
Root directory
Production branch
```

---

# 47. Frontend Deployment Documentation

Example:

```text
Platform:
Vercel

Build:
npm run build

Output:
dist

Branch:
main
```

The actual values must match the project.

---

# 48. Backend Deployment Documentation

Where applicable:

```text
Platform:
Railway

Start:
npm start

Environment:
Production

Health:
/health
```

---

# 49. Database Documentation

Where PostgreSQL is used:

Document:

```text
Provider
Database name
Migration system
Backup approach
Connection method
```

Do not include:

```text
DATABASE_URL
password
private credentials
```

---

# 50. Database Migration Documentation

Document:

```text
Migration tool
How to run migration
Production migration procedure
Backup requirement
```

Example:

```text
Development:
npx prisma migrate dev

Production:
Use approved deployment migration process
```

The exact command depends on the project.

---

# 51. Storage Documentation

Document:

```text
Provider
Asset types
Public/private rules
Backup approach
```

---

# 52. Third-Party Integrations

Create an inventory:

```text
Service
Purpose
Environment
Owner
Access
Failure Impact
```

Example:

| Service   | Purpose       | Criticality |
| --------- | ------------- | ----------- |
| Analytics | Measurement   | Medium      |
| Email     | Lead delivery | High        |
| Maps      | Location      | Low/Medium  |
| CRM       | Lead storage  | High        |

---

# 53. Integration Ownership

For each service document:

```text
Account Owner
Billing Owner
Technical Owner
```

The client should understand who ultimately controls the account.

---

# 54. Integration Credentials

Never include actual passwords/API secrets in the handover document.

Instead record:

```text
Credential Location:
Hosting Environment Variables

Account:
Client-owned account
```

---

# 55. Security Handover

Document the security controls that were implemented.

Example:

```text
HTTPS
Input Validation
Rate Limiting
Security Headers
Protected APIs
File Upload Restrictions
```

Do not expose sensitive implementation details that could weaken security.

---

# 56. Security Responsibilities

Clarify:

```text
Agency:
Application maintenance

Hosting Provider:
Infrastructure security

Client:
Account access/security
```

Actual responsibilities depend on the service agreement.

---

# 57. Backup Documentation

Document:

```text
What is backed up?
Where?
How often?
Who owns the backup?
How is restoration performed?
```

---

# 58. Backup Scope

Possible:

```text
Database
Content
Important configuration
Approved assets
```

Not every project needs every backup category.

---

# 59. Backup Verification

Document whether backups are:

```text
Automated
Manual
Provider-managed
Agency-managed
```

and whether restore testing is included.

---

# 60. Recovery Documentation

Document:

```text
Website outage recovery
Database recovery
Deployment rollback
Content recovery
Asset recovery
```

---

# 61. Rollback Documentation

The handover should identify:

```text
Current Release
Previous Stable Release
Rollback Platform
Rollback Method
```

Do not include secrets.

---

# 62. Maintenance Plan Documentation

State:

```text
Maintenance Plan:
Included / Not Included

Frequency:
Monthly / Quarterly / Yearly / On Demand

Services:
...
```

---

# 63. Maintenance Scope

Document included services such as:

```text
Security Updates
Content Updates
Backups
Monitoring
Performance Review
SEO Review
Technical Support
```

Only list services covered by the signed agreement.

---

# 64. Maintenance Request Process

Example:

```text
Client
 ↓
Support Request
 ↓
Agency Review
 ↓
Classification
 ↓
Implementation
 ↓
QA
 ↓
Completion
```

---

# 65. Support Contact

Provide:

```text
Support Email
Support Channel
Business Hours
Emergency Process where applicable
```

Do not promise response times unless contractually defined.

---

# 66. Warranty Documentation

Business Growth includes a 30-day post-launch warranty for defects in delivered functionality unless the agreement states otherwise.

The handover should explain:

```text
Warranty Start
Warranty End
Covered Issues
Excluded Issues
```

---

# 67. Warranty Exclusions

Typically excluded:

```text
New Features
Design Changes
Additional Content
Client-Caused Issues
Third-Party Failures
Changes Made Outside Approved Process
```

---

# 68. Known Issues

Document known non-critical issues before handover.

Example:

```text
Issue:
Minor Safari spacing difference

Severity:
Low

Status:
Known

Plan:
Next maintenance cycle
```

Never hide known issues.

---

# 69. Outstanding Items

Create a list:

```text
Item
Owner
Status
Expected Completion
Notes
```

Example:

```text
Final brochure:
Client
Pending

Additional project photos:
Client
Pending
```

---

# 70. Client Training

Business Growth includes one training session covering relevant operational use.

Possible topics:

```text
Website overview
Lead management
Content update process
Basic administration where applicable
Analytics overview
Maintenance requests
```

The training should reflect the actual project.

---

# 71. Training Format

Possible:

```text
Live video session
In-person session
Recorded walkthrough
Written guide
```

The agreed format determines delivery.

---

# 72. Training Agenda

Recommended:

```text
1. Website Overview
2. Main Pages
3. How Leads Arrive
4. Content Update Process
5. Analytics
6. Maintenance
7. Who to Contact
```

---

# 73. Training for No-CMS Projects

If the client has no CMS:

Explain:

```text
Client
→ Provides content changes

Agency
→ Implements updates
```

Do not train the client to edit source code unless explicitly intended.

---

# 74. Training for CMS Projects

If a CMS is separately included:

Train relevant tasks:

```text
Create content
Edit content
Publish
Upload assets
Manage categories
Review inquiries where applicable
```

Only document actual CMS capabilities.

---

# 75. Training Materials

Where provided:

```text
Quick Start Guide
Video Recording
Written Documentation
Screenshots
FAQ
```

---

# 76. Client Quick Start Guide

The client should be able to answer:

```text
How do I contact the agency?
How do I request a content update?
Where do leads arrive?
Who owns the domain?
Who owns hosting?
How do I access analytics?
What does maintenance include?
```

---

# 77. Account Access Handover

The final handover should identify accounts without exposing secrets.

Example:

```text
Domain:
Client-owned

Hosting:
Client-owned / Agency-managed

GitHub:
Agency repository

Analytics:
Client-owned

Search Console:
Client-owned
```

---

# 78. Password Handover

Passwords should never be placed in:

```text
Markdown
PDF
Git
Email
Screenshots
Public drives
```

unless a separate secure credential-transfer process is explicitly used.

---

# 79. Credential Transfer

Use an appropriate secure mechanism such as:

```text
Password manager
Secure vault
Provider account invitation
Temporary credentials
```

The actual mechanism depends on the agency's security process.

---

# 80. Access Verification

After transferring ownership/access:

```text
[ ] Client can access domain
[ ] Client can access hosting
[ ] Client can access analytics
[ ] Client can access Search Console
[ ] Client can access agreed assets
```

Do not assume access works simply because an invitation was sent.

---

# 81. Ownership Verification

The agency should confirm who owns:

```text
Domain
Hosting
Analytics
Search Console
Repository
Storage
CRM
```

where applicable.

---

# 82. Client Exit / Agency Exit

The handover should support a scenario where another developer or agency takes over.

A future developer should be able to understand:

```text
Architecture
Hosting
Deployment
Content
Database
Integrations
Lead system
Monitoring
```

without requiring the original developer to be present.

---

# 83. Developer Onboarding Documentation

A new developer should be able to:

```text
Clone repository
Install dependencies
Configure environment
Run locally
Understand architecture
Run tests
Deploy safely
```

---

# 84. Local Development Guide

Document:

```text
Prerequisites
Node version
Package manager
Install command
Environment setup
Database setup
Development command
Build command
Test command
```

Example:

```text
npm install
npm run dev
npm run build
```

Use the actual project commands.

---

# 85. Environment Example File

Provide:

```text
.env.example
```

containing variable names but no secrets.

Example:

```text
DATABASE_URL=
DIRECT_URL=
JWT_SECRET=
CORS_ORIGIN=
```

Only include variables actually used.

---

# 86. Production Environment Documentation

Document variable names and purpose.

Example:

```text
DATABASE_URL
→ PostgreSQL connection

CORS_ORIGIN
→ Approved frontend domain

ANALYTICS_ID
→ Analytics property
```

Never include actual values.

---

# 87. Deployment Documentation

The project should include:

```text
How to build
How to deploy frontend
How to deploy backend
How to run migrations
How to verify production
How to rollback
```

---

# 88. Deployment Ownership

Document who is responsible for future deployments:

```text
Agency
Client Developer
Third-Party Developer
```

---

# 89. Release Documentation

Record the final delivered version:

```text
Version
Commit
Deployment Date
Major Changes
Known Issues
```

---

# 90. Content Handover

The client should receive agreed access to:

```text
Company content
Product content
Service content
Project content
Article content
Resources
Approved assets
```

according to the contract and storage architecture.

---

# 91. Asset Archive

Provide or document:

```text
Logos
Brand Files
Original Approved Images where included
Documents
Videos
Certificates
Other Agreed Assets
```

---

# 92. Documentation Versioning

Documentation should identify:

```text
Version
Date
Project
Author/Owner
```

Update important documentation after major system changes.

---

# 93. Documentation Source of Truth

There should be one primary technical documentation location.

Possible:

```text
Repository /docs
Agency documentation system
Client documentation package
```

Avoid maintaining conflicting copies.

---

# 94. Documentation Update Responsibility

When the system changes:

```text
Architecture
Deployment
Lead Flow
Integrations
```

update the relevant documentation.

---

# 95. Handover Review Meeting

A final handover meeting should ideally review:

```text
Website
Features
Leads
Analytics
Accounts
Maintenance
Warranty
Known Issues
Support
```

---

# 96. Final Client Walkthrough

Walk through the actual production website:

```text
Home
About
Services
Products
Projects
Blog
RFQ
Contact
```

Only show pages included in the project.

---

# 97. Lead Walkthrough

Demonstrate:

```text
Product
 ↓
Request Quote
 ↓
Submit
 ↓
Lead destination
```

and other enabled inquiry paths.

---

# 98. Analytics Walkthrough

Explain:

```text
What is measured?
Where?
What is a conversion?
How can the client access it?
```

Do not promise that analytics data equals actual sales.

---

# 99. Maintenance Walkthrough

Explain:

```text
What is monitored?
What is updated?
How content changes are handled?
How support requests are made?
```

---

# 100. Security Walkthrough

At a high level explain:

```text
HTTPS
Backups
Security Updates
Access Control
Form Protection
```

Do not expose sensitive security details unnecessarily.

---

# 101. Documentation of Integrations

Create an integration table:

| Integration | Purpose       | Owner  | Criticality | Status       |
| ----------- | ------------- | ------ | ----------- | ------------ |
| Analytics   | Measurement   | Client | Medium      | Active       |
| Email       | Lead delivery | Client | High        | Active       |
| Maps        | Location      | Client | Low         | Active       |
| CRM         | Lead sync     | Client | High        | Not Included |

Only list actual integrations.

---

# 102. Technical Stack Handover

Document:

```text
Frontend
Backend
Database
ORM
Hosting
Storage
Version Control
Analytics
```

Example:

```text
Frontend:
React + Vite + Tailwind

Backend:
Node.js + Express

Database:
PostgreSQL + Prisma

Deployment:
Vercel + Railway
```

---

# 103. Runtime Versions

Where relevant, document:

```text
Node.js version
Package manager
Database version
Important platform/runtime versions
```

This makes future maintenance easier.

---

# 104. Dependencies Documentation

Do not manually list every package in the handover.

The repository's package manifest and lockfile remain authoritative.

Document only major dependencies that matter operationally.

---

# 105. Known Architectural Decisions

Document important decisions such as:

```text
Why database was used
Why search is client-side/server-side
Why CMS was not included
Why certain integrations exist
```

This prevents future developers from undoing intentional design decisions.

---

# 106. Architecture Decision Records

For significant decisions:

```text
Decision
Reason
Alternatives
Trade-offs
Date
```

This is especially useful for custom client implementations.

---

# 107. Project-Specific Exceptions

If the project differs from standard Business Growth architecture, document:

```text
Exception
Reason
Implementation
Maintenance Impact
```

Example:

```text
Standard:
Email-based RFQ

Project:
CRM integration

Reason:
Client already uses CRM

Impact:
CRM credentials and API must remain active
```

---

# 108. Troubleshooting Guide

Provide basic troubleshooting for:

```text
Website Down
Form Not Working
No Lead Email
Images Missing
Analytics Not Tracking
Domain Problem
Deployment Failure
```

---

# 109. Troubleshooting: Website Down

Basic sequence:

```text
1. Check domain.
2. Check hosting status.
3. Check deployment status.
4. Check application errors.
5. Check recent deployment.
6. Roll back if appropriate.
```

Do not expose confidential infrastructure details in the client-facing version.

---

# 110. Troubleshooting: RFQ Not Working

```text
1. Test form.
2. Check frontend errors.
3. Check API health.
4. Check backend logs.
5. Check email/CRM destination.
6. Check recent deployment.
```

---

# 111. Troubleshooting: Missing Content

```text
1. Verify content exists.
2. Verify publication status.
3. Verify route.
4. Verify API/data source.
5. Verify relationships.
```

---

# 112. Troubleshooting: Missing Image

```text
1. Verify asset exists.
2. Verify URL.
3. Verify storage permissions.
4. Verify image transformation.
5. Check recent asset changes.
```

---

# 113. Troubleshooting: Analytics

```text
1. Verify production property.
2. Verify tracking configuration.
3. Check browser/network.
4. Check analytics console.
5. Verify event implementation.
```

---

# 114. Handover Checklist — Website

```text
[ ] Production URL
[ ] All agreed pages
[ ] Navigation
[ ] Mobile
[ ] Lead forms
[ ] RFQ
[ ] Integrations
[ ] SEO
[ ] Analytics
```

---

# 115. Handover Checklist — Ownership

```text
[ ] Domain owner
[ ] Hosting owner
[ ] Analytics owner
[ ] Search Console owner
[ ] Repository owner
[ ] Storage owner
[ ] CRM owner where applicable
```

---

# 116. Handover Checklist — Technical

```text
[ ] Repository
[ ] Environment documentation
[ ] Build instructions
[ ] Deployment instructions
[ ] Database
[ ] Migrations
[ ] Integrations
[ ] Monitoring
[ ] Backup
[ ] Rollback
```

---

# 117. Handover Checklist — Content

```text
[ ] Company
[ ] Services
[ ] Products
[ ] Projects
[ ] Articles
[ ] Locations
[ ] People
[ ] Resources
[ ] Certifications
[ ] Assets
```

---

# 118. Handover Checklist — Operations

```text
[ ] Lead process
[ ] Maintenance process
[ ] Support process
[ ] Warranty
[ ] Known issues
[ ] Change process
```

---

# 119. Handover Checklist — Training

```text
[ ] Website walkthrough
[ ] Lead walkthrough
[ ] Analytics walkthrough
[ ] Maintenance explanation
[ ] Support process
[ ] Questions answered
```

---

# 120. Handover Checklist — Security

```text
[ ] No secrets in documents
[ ] Access ownership confirmed
[ ] Credentials transferred securely
[ ] Unnecessary developer access removed
[ ] Production access reviewed
```

---

# 121. Final Acceptance Checklist

```text
PROJECT
[ ] Scope reviewed
[ ] Production URL verified
[ ] Client content approved
[ ] Final design approved

TECHNICAL
[ ] Source code available as agreed
[ ] Hosting documented
[ ] Domain documented
[ ] Database documented where applicable
[ ] Storage documented
[ ] Deployment documented

LEADS
[ ] Contact tested
[ ] RFQ tested
[ ] Inquiry flows tested
[ ] Lead destinations confirmed

SEO
[ ] Sitemap
[ ] Robots
[ ] Search Console
[ ] Metadata

ANALYTICS
[ ] Analytics property
[ ] Conversion events
[ ] Access

SECURITY
[ ] Access review
[ ] Credential transfer
[ ] HTTPS
[ ] Backup strategy

MAINTENANCE
[ ] Scope explained
[ ] Request process
[ ] Monitoring explained

TRAINING
[ ] Walkthrough completed
[ ] Questions answered

DOCUMENTATION
[ ] Handover package delivered
[ ] Known issues documented
[ ] Outstanding items documented
```

---

# 122. Outstanding Items Register

Before final sign-off:

```text
Outstanding Item
Owner
Priority
Status
Deadline
Notes
```

Example:

```text
Final product catalog PDF
Owner: Client
Priority: Medium
Status: Pending
```

---

# 123. Acceptance Criteria

The client handover is considered complete when:

```text
[✓] Production website is accessible
[✓] Agreed scope has been delivered
[✓] Client content has been approved
[✓] Key business flows work
[✓] Lead destinations are confirmed
[✓] Ownership information is documented
[✓] Technical documentation exists
[✓] Maintenance responsibilities are clear
[✓] Warranty terms are understood
[✓] Training has been completed
[✓] Outstanding issues are documented
[✓] Client acceptance is recorded
```

---

# 124. Client Sign-Off

A final acceptance record should contain:

```text
Project:
Client:
Version:
Production URL:
Launch Date:

Client Representative:
Agency Representative:

Client confirms:
[ ] Delivered scope reviewed
[ ] Production website reviewed
[ ] Handover documentation received
[ ] Training completed
[ ] Known issues received
[ ] Warranty terms understood

Approval:
____________________

Date:
____________________
```

The exact contract/signature mechanism may differ.

---

# 125. Handover Archive

After acceptance, the agency should archive:

```text
Final Release
Final Documentation
Approved Content
Approved Assets
QA Records
Deployment Information
Acceptance Record
```

Do not archive sensitive credentials insecurely.

---

# 126. Project Closure

The project can be marked closed when:

```text
Development
      ✓
QA
      ✓
Deployment
      ✓
Client Approval
      ✓
Handover
      ✓
Documentation
      ✓
Training
      ✓
Warranty Start
      ✓
```

---

# 127. Transition to Maintenance

If a maintenance plan exists:

```text
Project Delivery
      ↓
Handover
      ↓
Warranty
      ↓
Maintenance
```

The maintenance team should receive:

```text
Architecture
Credentials/access process
Monitoring
Deployment process
Content process
Known issues
```

---

# 128. Transition Without Maintenance

If the client does not purchase maintenance:

The handover should make clear:

```text
Client Responsibility
Future Developer Responsibility
Third-Party Responsibility
```

The client should still receive the agreed documentation and ownership information.

---

# 129. Future Developer Handover

The project should be transferable to another qualified developer.

A future developer should be able to determine:

```text
Where is the code?
How is it deployed?
How does the API work?
Where is the database?
Where are assets?
How do leads work?
Which integrations exist?
How is content structured?
How is it maintained?
```

---

# 130. Agency Internal Handover

Before delivering to the client, the development team should internally hand over the project.

Internal handover should cover:

```text
Architecture
Deployment
Content
Leads
Integrations
Monitoring
Known Issues
Client Preferences
```

This prevents the client-facing handover from depending entirely on the original developer.

---

# 131. AI Handover Rules

The AI coding agent must:

```text
[ ] Generate documentation from the actual project
[ ] Never invent infrastructure
[ ] Never invent credentials
[ ] Never invent integrations
[ ] Never claim unsupported features
[ ] Document actual routes
[ ] Document actual environment variable names
[ ] Document actual lead flows
[ ] Document actual architecture
[ ] Identify known limitations
```

---

# 132. AI Must Not Expose Secrets

The AI must never place into documentation:

```text
Passwords
API secrets
Database credentials
JWT secrets
Private tokens
Private keys
```

Only variable names and secure storage locations should be documented.

---

# 133. AI Must Not Claim Handover Completion Without Verification

The AI must not claim:

> "Client has access."

unless access has actually been verified.

It should distinguish:

```text
Invitation Sent
```

from:

```text
Access Verified
```

---

# 134. AI Documentation Accuracy

The AI must verify the actual repository and deployed configuration before documenting:

```text
Routes
Commands
Environment variables
Dependencies
Deployment
Integrations
```

Do not copy generic standards into project documentation and present them as actual project facts.

---

# 135. Documentation Quality Standard

Good documentation should be:

```text
Accurate
Current
Specific
Readable
Actionable
Secure
```

Avoid documentation that merely repeats technical terminology without helping someone operate the project.

---

# 136. Documentation Maintenance

When significant changes occur:

```text
Change
 ↓
Update Documentation
 ↓
Release
```

Examples:

```text
New integration
New lead type
New database
New deployment platform
New major route
New maintenance process
```

---

# 137. Documentation Versioning

Important documents should include:

```text
Version
Date
Project
Owner
```

Example:

```text
Business Growth Client Handover
Version: 1.2
Date: August 2026
```

---

# 138. Documentation Source of Truth

The project should maintain one authoritative technical documentation location.

Possible:

```text
Repository /docs
Agency documentation system
Client handover package
```

Avoid contradictory versions.

---

# 139. Final Handover Architecture

The complete handover flow should be:

```text
                      PROJECT
                         │
             ┌───────────┼───────────┐
             ↓           ↓           ↓
          WEBSITE      CONTENT     SYSTEM
             │           │           │
             ↓           ↓           ↓
          FEATURES      ASSETS     TECHNICAL
             │           │           │
             └───────────┼───────────┘
                         ↓
                    DOCUMENTATION
                         ↓
                      TRAINING
                         ↓
                   OWNERSHIP
                         ↓
                     SIGN-OFF
                         ↓
                 WARRANTY / MAINTENANCE
```

---

# 140. Final Principle

A professional agency does not finish a project by saying:

> "The website is live."

The project is finished when the client can confidently understand what they own, what was delivered, how the website operates, how inquiries reach them, who is responsible for maintenance, and how the system can be recovered or transferred in the future.

The Business Growth handover standard is therefore:

```text
DELIVER
   ↓
DOCUMENT
   ↓
EXPLAIN
   ↓
TRANSFER
   ↓
VERIFY
   ↓
ACCEPT
   ↓
MAINTAIN
```

The final objective is:

> **The client should receive not just a functioning website, but a properly documented and operational business asset that can be maintained, updated, supported, and transferred without depending on undocumented knowledge held by one developer.**

And the agency should be able to answer, months or years later:

> **What did we build, what does the client own, where is everything located, how does it work, how do we maintain it, and how do we safely hand it to another developer if necessary?**

```
```
