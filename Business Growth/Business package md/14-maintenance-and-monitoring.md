# `14-maintenance-and-monitoring.md`

````md id="n8p4q7"
# Business Growth
# Maintenance & Monitoring Standards

**Document:** 14-maintenance-and-monitoring.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines the ongoing maintenance, monitoring, update, support, health-check, incident-response, and lifecycle-management standards for websites delivered through the Business Growth package.

Business Growth is intended to become an active business and marketing asset rather than a website that is abandoned after launch.

Because the package may include:

- Product catalogs
- Service catalogs
- Project portfolios
- Blog/news
- Resources
- Multiple locations
- Rich media
- RFQ
- Contact forms
- Inquiry workflows
- Analytics
- Search Console
- APIs
- PostgreSQL
- File storage
- Third-party services
- Optional CRM integrations

ongoing maintenance is important for preserving:

- Security
- Performance
- Availability
- Content accuracy
- Lead generation
- SEO health
- Analytics reliability
- Compatibility
- Asset integrity

---

# 2. Relationship to Starter Presence

The maintenance fundamentals established in Starter Presence remain applicable.

These include:

- Website monitoring
- Security updates
- Software updates
- Backups
- Minor content updates
- Domain renewal assistance
- Hosting renewal assistance
- Technical support

Reference:

`Starter Presence / 10-maintenance-and-monitoring.md`

Business Growth expands maintenance because the website contains more content, integrations, and business-critical workflows.

This document therefore focuses on the additional operational requirements created by Business Growth.

---

# 3. Maintenance Philosophy

The objective is:

```text
Detect Problems Early
        ↓
Prevent Avoidable Failures
        ↓
Keep Content Accurate
        ↓
Keep Leads Working
        ↓
Keep the Website Fast
        ↓
Keep the Website Secure
        ↓
Keep the Website Useful
````

Maintenance is not only about fixing broken websites.

It is also about preventing them from becoming outdated, insecure, slow, or ineffective.

---

# 4. Maintenance Categories

Business Growth maintenance should be divided into:

```text
01. Availability Monitoring
02. Error Monitoring
03. Security Maintenance
04. Dependency Maintenance
05. Infrastructure Maintenance
06. Content Maintenance
07. Asset Maintenance
08. SEO Maintenance
09. Analytics Maintenance
10. Lead Generation Maintenance
11. Performance Maintenance
12. Database Maintenance
13. Backup & Recovery
14. Third-Party Integration Maintenance
15. Domain & Hosting Maintenance
16. Compatibility Maintenance
17. Incident Response
18. Lifecycle & Improvement
```

Not every category is equally active for every project.

---

# 5. Maintenance Plan Boundary

The Business Growth package may be delivered without an ongoing maintenance plan.

However:

> **The website architecture must be designed so that ongoing maintenance can be performed without rebuilding the website.**

Maintenance may be:

```text
Monthly
Quarterly
Yearly
On Demand
```

according to the client's agreement.

---

# 6. Maintenance Responsibility

The project agreement should clearly identify:

```text
Client
Agency
Hosting Provider
Third-Party Provider
```

and which party is responsible for:

* Domain
* Hosting
* DNS
* Content
* Security
* Backups
* Updates
* Third-party accounts
* Lead destinations

---

# 7. Maintenance Scope

Typical Business Growth maintenance may include:

```text
Content Updates
Product Updates
Service Updates
Project Updates
Article Publishing
Image Replacement
Document Replacement
Security Updates
Dependency Updates
Backup Verification
Performance Review
Lead Form Testing
Analytics Verification
SEO Health Checks
Uptime Monitoring
Error Monitoring
Domain Assistance
Hosting Assistance
```

---

# 8. Out-of-Scope Maintenance

The maintenance plan does not automatically include:

* New features
* New page templates
* Major redesigns
* New integrations
* Full CMS development
* E-commerce
* Booking engines
* Customer portals
* ERP integrations
* CRM development
* Major data migrations
* Mobile applications

These should be separately quoted.

---

# 9. Maintenance Priority

Operational priorities should generally be:

```text
1. Security
2. Availability
3. Lead generation
4. Critical functionality
5. Data integrity
6. Performance
7. SEO
8. Content
9. Minor visual improvements
```

A broken RFQ form should take priority over a minor spacing issue.

---

# 10. Monitoring Architecture

A typical monitoring structure is:

```text
                         WEBSITE
                            │
              ┌─────────────┼─────────────┐
              │             │             │
            Uptime         Errors      Performance
              │             │             │
              └─────────────┼─────────────┘
                            ↓
                         ALERTING
                            ↓
                       INVESTIGATION
                            ↓
                         RESPONSE
                            ↓
                         RECOVERY
                            ↓
                        DOCUMENTATION
```

---

# 11. Availability Monitoring

At minimum, monitor the public website where maintenance monitoring is included.

Verify:

```text
Homepage reachable
HTTPS available
Domain resolves
```

Where an API exists, monitor:

```text
API health endpoint
```

---

# 12. Uptime Monitoring

Monitor important public endpoints such as:

```text
/
 /contact
 /services
 /products
 /projects
```

Only where appropriate.

A single homepage monitor may be sufficient for simple projects, while dynamic projects may benefit from API monitoring as well.

---

# 13. API Health Monitoring

If a backend exists:

```text
GET /health
```

may be monitored.

The health endpoint should verify service availability without exposing sensitive implementation details.

---

# 14. Database Availability Monitoring

For database-backed projects, monitor availability through the application's health or monitoring infrastructure where supported.

Do not expose the database directly to monitoring clients unnecessarily.

---

# 15. Monitoring Frequency

The monitoring system should determine availability frequently enough to detect meaningful outages.

The exact interval depends on:

* Business importance
* Hosting capability
* Monitoring provider
* Maintenance agreement

Do not promise a specific response SLA unless included in the contract.

---

# 16. Uptime Alerts

An alert should be generated when an important monitored endpoint fails according to configured thresholds.

Possible conditions:

```text
Single failure
Repeated failures
Extended outage
API unavailable
Certificate problem
```

Avoid overly sensitive alerts that generate unnecessary noise.

---

# 17. Error Monitoring

Where appropriate, monitor application errors.

Potential sources:

```text
Frontend JavaScript
Backend exceptions
API failures
Database errors
Integration failures
```

---

# 18. Error Monitoring Scope

Error monitoring may use tools such as:

* Sentry
* Hosting-provider logging
* Application logs
* Other approved monitoring platforms

The exact provider is project-dependent.

---

# 19. Error Classification

Errors should be classified as:

```text
Critical
High
Medium
Low
Informational
```

Example:

```text
RFQ API failure
→ Critical / High

Broken related-content request
→ Medium

Optional analytics error
→ Low
```

Severity depends on business impact.

---

# 20. Error Noise Control

Do not treat every console warning as a production incident.

Separate:

```text
Real User Impact
```

from:

```text
Non-Critical Warning
```

Monitoring should focus on actionable failures.

---

# 21. Monitoring Alerts

Alerts should have:

```text
Source
Timestamp
Environment
Error
Affected endpoint
Severity
Relevant context
```

Avoid logging private user information unnecessarily.

---

# 22. Security Monitoring

Review where practical:

```text
Repeated form abuse
Rate-limit events
Failed authentication
Suspicious API behavior
Dependency vulnerabilities
Certificate expiry
```

---

# 23. Dependency Monitoring

Dependencies should be reviewed periodically.

Check:

```text
React
Vite
Tailwind
Express
Prisma
Database drivers
Validation libraries
Third-party SDKs
```

and all other production dependencies.

---

# 24. Dependency Security Updates

Security-related updates should be prioritized.

Workflow:

```text
Vulnerability
    ↓
Assess Impact
    ↓
Update
    ↓
Test
    ↓
Deploy
    ↓
Verify
```

---

# 25. Dependency Major Updates

Major version updates require additional caution.

Workflow:

```text
New Major Version
      ↓
Compatibility Review
      ↓
Upgrade in Development
      ↓
Test
      ↓
Preview/Staging
      ↓
Production
```

Do not blindly upgrade major versions on live systems.

---

# 26. Dependency Inventory

Maintain an understanding of production dependencies.

The project should be able to identify:

```text
Name
Version
Purpose
```

for major dependencies.

---

# 27. Unused Dependencies

Periodically review and remove dependencies that are no longer needed.

Benefits:

* Smaller bundle
* Lower attack surface
* Easier maintenance
* Fewer compatibility issues

Do not remove dependencies without verifying actual usage.

---

# 28. Content Maintenance

Business Growth content should be reviewed periodically.

Possible updates:

```text
Products
Services
Projects
Articles
Team
Locations
Certifications
Resources
Testimonials
```

---

# 29. Product Maintenance

For product-oriented clients, review:

```text
Product Name
Description
Specifications
Images
Documents
Availability notes
Categories
Related services
```

Do not allow outdated product information to remain active indefinitely.

---

# 30. Service Maintenance

Review:

```text
Service descriptions
Capabilities
Applications
Process
Related projects
CTA
Contact information
```

---

# 31. Project Maintenance

Review:

```text
Project status
Project description
Images
Location
Year
Client attribution
Results
Related services
```

Archived or completed project information should remain accurate.

---

# 32. Article / News Maintenance

Review:

```text
Titles
Dates
Authors
Categories
Links
Images
Related content
CTA
```

Old articles do not necessarily need deletion.

Instead evaluate:

```text
Keep
Update
Merge
Redirect
Archive
```

---

# 33. Certification Maintenance

Certifications may expire.

Review:

```text
Certification
Issuer
Number
Issue Date
Expiry Date
Verification URL
Status
```

An expired certification should not continue to appear as active.

---

# 34. Team Maintenance

Review:

```text
Name
Position
Biography
Photo
Credentials
Contact details
```

Former team members should be handled according to the client's preference and content policy.

---

# 35. Location Maintenance

Review:

```text
Address
Phone
Email
Business Hours
Map
Directions
Services
```

Location changes can be highly important because visitors rely on this information for real-world access.

---

# 36. Hotel / Resort Maintenance

Review:

```text
Accommodation
Amenities
Facilities
Offers
Gallery
Contact
Location
Inquiry details
```

Expired offers should be removed or archived appropriately.

---

# 37. Education Maintenance

Review:

```text
Programs
Requirements
Departments
Faculty
Events
Admissions information
Contact details
```

Educational information can change frequently and should be reviewed periodically.

---

# 38. Healthcare Maintenance

Review:

```text
Medical services
Departments
Specialists
Credentials
Locations
Appointment information
Public informational content
```

The client should verify medically sensitive content.

The agency should not independently alter medical claims.

---

# 39. Travel Maintenance

Review:

```text
Destinations
Tour packages
Itineraries
Dates
Pricing where applicable
Availability notes
Images
Inquiry information
```

Expired travel offers and dates should be removed or clearly marked.

---

# 40. Real Estate Maintenance

Review:

```text
Property
Price
Availability
Status
Location
Agent
Specifications
Images
```

Outdated availability can cause significant business problems and should receive appropriate priority.

---

# 41. Automotive Maintenance

Review:

```text
Vehicle
Model
Specifications
Availability
Price where applicable
Images
Dealer location
Inquiry/test-drive information
```

Sold or unavailable vehicles should not continue to appear as actively available.

---

# 42. Import / Export Maintenance

Review:

```text
Products
Markets
Countries
Logistics information
Certifications
Catalogs
Contact information
```

Market/service claims must remain accurate.

---

# 43. Engineering Maintenance

Review:

```text
Capabilities
Services
Projects
Technical documents
Certifications
Team credentials
```

Outdated technical documents may need to be removed or replaced.

---

# 44. Consulting Maintenance

Review:

```text
Services
Industries
Case studies
Consultants
Insights
Reports
Testimonials
```

Confidential client material must never accidentally become public.

---

# 45. Asset Maintenance

Asset maintenance includes:

```text
Image optimization
Broken image detection
Document updates
Video updates
Logo changes
Font changes
Storage review
Unused asset cleanup
```

---

# 46. Broken Asset Monitoring

Check periodically for:

```text
404 images
404 documents
Missing videos
Broken external media
Expired asset URLs
```

---

# 47. Image Maintenance

Review:

```text
Large images
Poor-quality images
Incorrect crops
Duplicate images
Broken images
Outdated photography
```

Replace assets while preserving the approved design.

---

# 48. Document Maintenance

Review:

```text
Expired brochures
Old catalogs
Outdated technical sheets
Old certifications
Broken PDF links
Incorrect versions
```

---

# 49. Video Maintenance

Review:

```text
Video availability
Poster image
Embed
Provider URL
Playback
```

Remove or replace broken external videos.

---

# 50. Storage Maintenance

For cloud storage:

Review:

```text
Storage usage
Unused assets
Access settings
Public/private classification
Large files
Old files
```

---

# 51. Content Backup

Where dynamic content exists, backups should cover:

```text
Database
Content
Relevant configuration
Important assets where applicable
```

---

# 52. Backup Frequency

Backup frequency should reflect:

```text
Content change frequency
Lead volume
Business importance
Recovery requirements
Hosting capability
```

Higher-change websites require more frequent backups.

---

# 53. Lead Backup

If leads are stored in a database:

Ensure the backup strategy includes the lead data.

Lead information should not be lost because of an unrelated application failure.

---

# 54. Backup Validation

A backup is not considered reliable merely because:

> "The backup job ran."

Periodically verify that restoration is actually possible.

---

# 55. Restore Testing

Where appropriate:

```text
Backup
 ↓
Restore to Safe Environment
 ↓
Verify Content
 ↓
Verify Data Integrity
```

Do not perform destructive restoration tests on production.

---

# 56. Recovery Objective

The project should understand:

```text
How much data can be lost?
How quickly should service be restored?
```

Do not promise a Recovery Point Objective (RPO) or Recovery Time Objective (RTO) unless included in the service agreement.

---

# 57. Domain Maintenance

Monitor:

```text
Domain expiry
DNS configuration
Nameservers
SSL
Verification records
```

Domain renewal assistance may be included in the maintenance agreement.

---

# 58. Domain Expiry Risk

The client should not rely solely on the agency to remember domain ownership obligations unless explicitly contracted.

Document:

```text
Domain Owner
Registrar
Expiration Date
Renewal Responsibility
```

---

# 59. Hosting Maintenance

Review:

```text
Hosting status
Resource usage
Deployment health
Billing
Limits
Storage
Bandwidth
Runtime versions
```

---

# 60. Hosting Resource Monitoring

Where the hosting provider exposes metrics:

Review:

```text
CPU
Memory
Bandwidth
Storage
Requests
Build usage
Database usage
```

Unexpected growth should be investigated.

---

# 61. Runtime Version Maintenance

Review:

```text
Node.js
Database version
Build tools
```

and other runtime dependencies for support lifecycle and security.

---

# 62. Platform Lifecycle

If a hosting platform ends support for a runtime/version:

```text
Review
 ↓
Upgrade
 ↓
Test
 ↓
Deploy
```

Do not wait until production stops working.

---

# 63. Database Maintenance

For PostgreSQL projects:

Review:

```text
Connection health
Storage
Performance
Slow queries
Indexes
Backups
Migration state
```

---

# 64. Database Storage Growth

Monitor growth from:

```text
Leads
Products
Projects
Articles
Logs
Uploaded files
```

Large growth may require:

* Archiving
* Retention policies
* Storage expansion
* Query optimization

---

# 65. Slow Query Monitoring

Where applicable, identify slow database queries.

Common targets:

```text
Product listing
Search
Filtering
Project listing
Lead queries
```

Optimize only where actual evidence indicates a problem.

---

# 66. Database Index Maintenance

Review indexes when query patterns change.

Do not blindly add indexes to every column.

---

# 67. Database Migration Maintenance

Production migration history must remain understandable.

Before a new migration:

```text
Current Schema
 ↓
Required Change
 ↓
Migration
 ↓
Test
 ↓
Deploy
```

---

# 68. Lead System Monitoring

Because lead generation is central to Business Growth, monitor:

```text
Contact submissions
RFQ submissions
Inquiry submissions
API failures
Email delivery
CRM delivery where applicable
Spam volume
```

---

# 69. Lead Failure Alerts

A lead system failure can be business-critical even if the homepage remains online.

Example:

```text
Website:
UP

RFQ:
DOWN
```

This should receive high priority.

---

# 70. Lead Monitoring Strategy

Where technically possible:

```text
Automated health check
+
Controlled test submissions
+
Error monitoring
```

The frequency depends on the maintenance agreement.

---

# 71. Controlled Lead Testing

Where appropriate, perform a test inquiry.

Example:

```text
Test:
Agency Maintenance Verification

Destination:
Approved test email
```

Avoid generating fake production leads unnecessarily.

---

# 72. Analytics Maintenance

Review:

```text
Analytics property
Tracking ID
Events
Conversions
Data flow
```

---

# 73. Analytics Failure

If analytics stops working:

```text
Website functionality
→ Must continue working
```

Analytics is important but should not become a single point of failure.

---

# 74. Analytics Event Maintenance

When the website changes:

```text
New CTA
New Lead Type
New Product Detail
New Inquiry Flow
```

review whether analytics tracking still represents the intended conversion journey.

---

# 75. Search Console Maintenance

Review where applicable:

```text
Indexing
Sitemap
Coverage
Crawl issues
Search performance
Security issues
```

---

# 76. SEO Maintenance

Periodic SEO review should include:

```text
Broken links
Broken pages
Metadata
Canonical URLs
Sitemap
Robots
Internal links
Orphan pages
Outdated content
Redirects
```

---

# 77. Content-Driven SEO Maintenance

New products/services/projects/articles should be checked for:

```text
Unique URL
Metadata
Internal links
Images
Structured data where applicable
CTA
```

---

# 78. SEO Decay

Some content may become less accurate or useful over time.

Review:

```text
Old statistics
Expired offers
Old products
Old services
Old project status
Outdated guides
```

The solution may be:

```text
Update
Consolidate
Archive
Redirect
Remove
```

---

# 79. Performance Monitoring

Monitor:

```text
Core Web Vitals
Page weight
Image weight
JavaScript
API response
Server response
```

---

# 80. Performance Regression

A website may become slower over time due to:

* New images
* New videos
* New dependencies
* New integrations
* More content
* Larger databases

Maintenance should catch these changes before they become severe.

---

# 81. Monthly Performance Review

Where included, review:

```text
Homepage
Important listing pages
Important detail pages
RFQ
Mobile
```

Focus on real user-facing performance.

---

# 82. Security Maintenance

Security maintenance should include:

```text
Dependency updates
Security advisories
TLS/certificate review
Form abuse review
API security review
Access review
Secret rotation where needed
```

---

# 83. Security Patch Priority

Security patches should be prioritized according to:

```text
Severity
Exploitability
Exposure
Business impact
```

Do not delay critical security updates unnecessarily.

---

# 84. Access Review

Periodically review access to:

```text
GitHub
Hosting
Domain
Database
Analytics
Search Console
CRM
Storage
Monitoring
```

Remove unnecessary access.

---

# 85. Employee / Freelancer Offboarding

When a team member leaves a project:

```text
[ ] GitHub access reviewed
[ ] Hosting access removed
[ ] Database access removed
[ ] Cloud storage access removed
[ ] Monitoring access removed
[ ] Analytics access reviewed
[ ] Shared credentials rotated where necessary
```

---

# 86. Credential Rotation

Rotate credentials when:

* Exposed
* Compromised
* Staff changes require it
* Provider recommends it
* Security policy requires it

Do not rotate credentials arbitrarily if it risks breaking production without preparation.

---

# 87. Monitoring Third-Party Services

Review services such as:

```text
Analytics
Maps
Email
CRM
Cloudinary
Video providers
Monitoring
```

for:

```text
Availability
API changes
Authentication changes
Pricing changes
Deprecation
Security updates
```

---

# 88. Third-Party Deprecation

If a provider announces a deprecated API:

```text
Notice
 ↓
Impact Assessment
 ↓
Replacement Plan
 ↓
Development
 ↓
QA
 ↓
Deployment
```

Do not wait until the integration stops working.

---

# 89. Third-Party Failure

When an integration fails:

Determine whether:

```text
Website functionality
```

can degrade gracefully.

Example:

```text
Map fails
 ↓
Address + Directions link remains

Analytics fails
 ↓
Website remains functional

CRM fails
 ↓
Lead fallback strategy where supported
```

---

# 90. Maintenance Incident Severity

Use:

## P1 — Critical

Examples:

* Website down
* RFQ completely unavailable
* Security breach
* Database corruption
* Major data loss

## P2 — High

Examples:

* Product detail system broken
* Major API failure
* Significant lead-routing failure
* Major SEO issue

## P3 — Medium

Examples:

* Important content issue
* Partial search failure
* Secondary integration failure

## P4 — Low

Examples:

* Minor visual defect
* Non-critical copy issue
* Small enhancement

Response times should only be contractual if explicitly defined.

---

# 91. Incident Response

When an incident occurs:

```text
Detect
 ↓
Assess
 ↓
Classify
 ↓
Contain
 ↓
Fix / Rollback
 ↓
Verify
 ↓
Monitor
 ↓
Document
```

---

# 92. Incident Communication

For significant incidents:

Communicate:

```text
What happened
What is affected
What is being done
Current status
Resolution
```

Do not expose unnecessary internal technical details to clients.

---

# 93. Post-Incident Review

For significant incidents:

```text
Incident
 ↓
Root Cause
 ↓
Impact
 ↓
Resolution
 ↓
Prevention
```

Document what should change to reduce recurrence.

---

# 94. Root Cause Analysis

Ask:

```text
What failed?
Why did it fail?
Why was it not detected earlier?
What control could have prevented it?
What monitoring could have detected it?
```

Do not stop at:

> "The server crashed."

Identify the deeper cause where practical.

---

# 95. Maintenance Change Control

Routine maintenance should still be controlled.

Before changing production:

```text
Identify Change
 ↓
Assess Impact
 ↓
Implement in Development
 ↓
Test
 ↓
Deploy
 ↓
Verify
```

---

# 96. Content-Only Change

For small approved content changes:

```text
Update
 ↓
Review
 ↓
Preview
 ↓
Publish
 ↓
Quick QA
```

No full application release may be required if the architecture supports safe content updates.

---

# 97. Code Change

For code changes:

```text
Development
 ↓
QA
 ↓
Release
 ↓
Production
```

Do not edit source code directly on production.

---

# 98. Infrastructure Change

Examples:

* Hosting plan
* Node version
* Database version
* DNS
* Environment variables
* Storage

These require an impact assessment before production change.

---

# 99. Maintenance and Warranty

The 30-day post-launch warranty covers defects related to delivered functionality.

Maintenance may cover:

* Updates
* Monitoring
* Security
* Backups
* Content updates

according to the selected maintenance agreement.

New features remain separate from warranty.

---

# 100. Maintenance Reporting

Where included, a maintenance report may summarize:

```text
Uptime
Security Updates
Content Updates
Backups
Performance
SEO
Lead System
Issues Resolved
Recommendations
```

Only report measured facts.

---

# 101. Monthly Maintenance Example

```text
MONTHLY

Security
[ ] Dependency review
[ ] Security advisories

Monitoring
[ ] Uptime
[ ] Errors
[ ] Lead system

Content
[ ] Client-requested updates

Performance
[ ] Key page review

SEO
[ ] Indexing/errors
[ ] Broken links

Backups
[ ] Backup status
```

The exact schedule depends on the maintenance plan.

---

# 102. Quarterly Maintenance Example

```text
QUARTERLY

[ ] Full dependency review
[ ] Performance review
[ ] SEO health review
[ ] Content health review
[ ] Broken-link review
[ ] Asset review
[ ] Backup restoration test where appropriate
[ ] Access review
[ ] Domain/hosting review
```

---

# 103. Annual Maintenance Example

```text
ANNUAL

[ ] Domain renewal
[ ] Hosting renewal
[ ] Certificate review
[ ] Major dependency review
[ ] Runtime support review
[ ] Full security review
[ ] Full SEO review
[ ] Content audit
[ ] Asset audit
[ ] Recovery plan review
[ ] Monitoring review
```

---

# 104. Maintenance Checklist — Availability

```text
[ ] Domain resolves
[ ] HTTPS works
[ ] Homepage works
[ ] Important routes work
[ ] API health works where applicable
[ ] Monitoring active
```

---

# 105. Maintenance Checklist — Leads

```text
[ ] Contact works
[ ] RFQ works
[ ] Inquiry workflows work
[ ] Email delivery
[ ] CRM delivery where applicable
[ ] Lead context correct
[ ] Analytics events work
```

---

# 106. Maintenance Checklist — Security

```text
[ ] Dependencies reviewed
[ ] Vulnerabilities reviewed
[ ] Secrets secure
[ ] Access reviewed
[ ] Forms protected
[ ] File uploads protected
[ ] Security alerts reviewed
```

---

# 107. Maintenance Checklist — Content

```text
[ ] Products current
[ ] Services current
[ ] Projects current
[ ] Articles current
[ ] Team current
[ ] Locations current
[ ] Certifications current
[ ] Resources current
```

---

# 108. Maintenance Checklist — SEO

```text
[ ] Sitemap
[ ] Robots
[ ] Canonicals
[ ] Broken links
[ ] Metadata
[ ] Indexing
[ ] Orphan content
[ ] Redirects
```

---

# 109. Maintenance Checklist — Performance

```text
[ ] Core Web Vitals
[ ] Image weight
[ ] JavaScript
[ ] API response
[ ] Database performance
[ ] Third-party scripts
[ ] Mobile performance
```

---

# 110. Maintenance Checklist — Infrastructure

```text
[ ] Hosting
[ ] Domain
[ ] DNS
[ ] SSL
[ ] Runtime
[ ] Database
[ ] Storage
[ ] Monitoring
```

---

# 111. Monitoring Dashboard

Where a monitoring platform is used, the agency should ideally be able to see:

```text
Website Status
API Status
Error Rate
Performance
Resource Usage
Lead System Health
```

Do not build a custom monitoring dashboard unless required.

---

# 112. Alert Destination

Alerts should reach the people responsible for responding.

Possible:

```text
Email
Team chat
Incident management platform
SMS where justified
```

The selected channel depends on the maintenance agreement.

---

# 113. Alert Fatigue

Avoid unnecessary alerts.

Good monitoring:

```text
Actionable
Specific
Relevant
```

Poor monitoring:

```text
Thousands of harmless warnings
```

Review alert rules periodically.

---

# 114. Monitoring Data Retention

Monitoring logs should have reasonable retention.

The retention period depends on:

* Tool
* Cost
* Security
* Operational need

Do not retain sensitive logs unnecessarily.

---

# 115. Maintenance Environment Safety

Maintenance changes should normally be tested in:

```text
Development
or
Preview/Staging
```

before production.

Exceptions may apply for urgent security/hotfix situations.

---

# 116. Production Maintenance Window

For changes with potential service interruption:

Define:

```text
Expected Start
Expected Duration
Affected Features
Rollback Plan
```

Notify the client when required.

---

# 117. No-Downtime Maintenance

Where possible, use deployment mechanisms that avoid downtime.

Examples:

```text
Atomic deployment
Platform rollback
Blue/green-style deployment where supported
```

Do not introduce complex infrastructure solely to eliminate seconds of downtime on a low-risk brochure website.

---

# 118. Maintenance and Client Communication

Clients should know:

```text
What is included
What is not included
How to request changes
How emergencies are handled
Who to contact
```

---

# 119. Maintenance Request Classification

Incoming requests should be classified:

```text
Content Update
Bug
Security Issue
Performance Issue
SEO Issue
Feature Request
Infrastructure Issue
Third-Party Issue
```

---

# 120. Maintenance Request Workflow

```text
Client Request
 ↓
Classify
 ↓
Estimate Impact
 ↓
Approve if outside scope
 ↓
Implement
 ↓
Test
 ↓
Deploy
 ↓
Confirm
```

---

# 121. Maintenance and Scope Control

Example:

Client:

> "Add 15 new products."

Likely:

```text
Content Update
```

Client:

> "Create a searchable customer portal where users can manage products."

Likely:

```text
New Feature
```

The distinction prevents maintenance plans from silently turning into unlimited development.

---

# 122. Maintenance Documentation

Keep a maintenance record:

```text
Date
Issue/Request
Type
Action
Affected System
Result
Release
```

---

# 123. Change Log Example

```text
2026-08-13
Content
Added 3 products

2026-08-16
Security
Updated dependency

2026-08-20
Bug
Fixed RFQ validation

2026-08-25
Performance
Optimized project gallery
```

---

# 124. Maintenance and Versioning

Every meaningful production code change should be traceable to:

```text
Git Commit
Release
Deployment
```

Content-only changes should also be traceable where the architecture supports versioning.

---

# 125. Monitoring and Version Changes

After a deployment:

```text
Deploy
 ↓
Monitor
 ↓
Compare errors
 ↓
Verify
```

Unexpected increases in errors should trigger investigation.

---

# 126. Maintenance and Backups

Before major changes:

```text
[ ] Confirm backup
[ ] Confirm recovery path
```

especially before:

* Database migration
* Large content import
* Major dependency upgrade
* Infrastructure migration

---

# 127. Maintenance and Rollback

Every significant change should have a recovery strategy.

Possible:

```text
Previous deployment
Previous content version
Database backup
Asset backup
```

---

# 128. Maintenance and Disaster Recovery

The project should know how to recover from:

```text
Website outage
Database failure
Hosting failure
Accidental content deletion
Credential compromise
Major deployment failure
```

The exact recovery capability depends on the architecture and maintenance plan.

---

# 129. Disaster Recovery Boundary

Advanced disaster recovery architecture is not automatically included.

Examples that may require additional scope:

* Multi-region infrastructure
* High availability clusters
* Automated failover
* Dedicated disaster recovery environments

Do not add this complexity unless business criticality justifies it.

---

# 130. Monitoring and Business Priority

Monitoring should focus most heavily on:

```text
Lead generation
Primary pages
Business-critical APIs
Contact
RFQ
```

A failure on a secondary article page is generally less urgent than a failure in the RFQ system.

---

# 131. Monitoring by Sector

### Automotive

Prioritize:

```text
Vehicle listings
Vehicle details
Inquiry
Test-drive request
Dealer location
```

### Manufacturing

Prioritize:

```text
Products
Product details
Downloads
RFQ
```

### Construction

Prioritize:

```text
Services
Projects
Project details
Consultation/RFQ
```

### Engineering

Prioritize:

```text
Services
Capabilities
Projects
Consultation
```

### Import / Export

Prioritize:

```text
Products
Markets
RFQ
Contact
```

### Hotel / Resort

Prioritize:

```text
Accommodation
Facilities
Gallery
Inquiry
Contact
```

### Education

Prioritize:

```text
Programs
Admissions information
Events
Information request
```

### Healthcare

Prioritize:

```text
Services
Specialists
Locations
Appointment request
```

### Travel

Prioritize:

```text
Destinations
Tours
Itineraries
Trip inquiry
```

### Real Estate

Prioritize:

```text
Properties
Property details
Availability/status
Property inquiry
```

### Consulting

Prioritize:

```text
Services
Case studies
Insights
Consultation
```

---

# 132. Maintenance KPIs

Where reporting is included, useful operational measurements include:

```text
Uptime
Incident Count
Lead Form Success
API Error Rate
Page Performance
Backup Success
Security Updates
Broken Links
```

These are maintenance indicators, not guaranteed business outcomes.

---

# 133. Business KPI Boundary

Maintenance monitoring may measure:

```text
Website Leads
CTA Clicks
RFQ Submissions
Traffic
```

but should not claim:

```text
Revenue
Sales
Qualified Leads
ROI
```

unless connected to the client's actual business systems and data.

---

# 134. Maintenance and Analytics

Analytics helps answer:

> Is the website being used?

Monitoring helps answer:

> Is the website functioning correctly?

Both are important but serve different purposes.

---

# 135. Maintenance and SEO

SEO monitoring helps answer:

> Can people discover the website?

Maintenance helps ensure:

> The pages remain available, accurate, fast, and technically healthy.

---

# 136. Maintenance and Lead Generation

Lead monitoring is especially important because:

```text
Website Looks Fine
```

does not necessarily mean:

```text
Lead System Works
```

A broken email integration could silently stop inquiries while the website remains online.

---

# 137. Lead Health Check

Where practical, verify:

```text
Form
 ↓
Validation
 ↓
API
 ↓
Processing
 ↓
Destination
```

This should be part of periodic maintenance.

---

# 138. Monitoring False Positives

A monitor may report:

```text
Down
```

when only one request failed.

Use reasonable thresholds before declaring a real outage where appropriate.

---

# 139. Monitoring False Negatives

A homepage may return:

```text
200 OK
```

while:

```text
RFQ endpoint
```

is broken.

Therefore availability monitoring alone is not enough for Business Growth.

---

# 140. Synthetic Testing

Where appropriate, use synthetic checks for:

```text
Homepage
API
Contact
RFQ
```

without unnecessarily creating real customer records.

---

# 141. Synthetic Lead Testing

If automated lead checks are used:

```text
Use dedicated test route/credentials/data
```

or another controlled method.

Do not pollute production analytics and lead databases with automated fake submissions.

---

# 142. Production Monitoring Review

After a deployment, review:

```text
Error logs
Uptime
Lead delivery
Analytics
Performance
```

for unexpected changes.

---

# 143. Maintenance Automation

Automate repetitive checks where useful.

Examples:

```text
Dependency alerts
Broken-link checks
Uptime monitoring
Error monitoring
Backup jobs
SSL expiry alerts
Sitemap checks
```

Do not automate destructive operations without safeguards.

---

# 144. Automated Maintenance Safety

Automated jobs should have:

```text
Defined scope
Logging
Failure notification
Safe retry
Rollback/recovery
```

---

# 145. Automated Content Jobs

Automated content updates should be used cautiously.

Never automatically:

```text
Publish unreviewed content
Delete old products
Modify certifications
Change prices
Change medical claims
```

without an explicitly designed workflow.

---

# 146. Automated Dependency Updates

Automated dependency PRs may be used.

But production deployment should still require:

```text
Review
Testing
Approval
```

for important changes.

---

# 147. Maintenance and AI

AI may assist with:

* Log analysis
* Error diagnosis
* Dependency review
* Content formatting
* Broken-link investigation
* Performance analysis
* Test generation
* Maintenance scripts

AI should not independently:

* Delete production content
* Rotate production credentials without approval
* Change DNS
* Change production database structure
* Disable security controls
* Deploy risky updates without authorization

---

# 148. AI Maintenance Rules

The AI must:

```text
[ ] Read maintenance documentation
[ ] Identify affected scope
[ ] Check dependencies
[ ] Preserve existing architecture
[ ] Test changes
[ ] Report actual results
[ ] Avoid destructive operations
[ ] Keep rollback possible
```

---

# 149. AI Must Not Hide Maintenance Problems

If it encounters:

```text
Security vulnerability
Broken integration
Data inconsistency
Backup failure
Performance regression
```

it must report the issue rather than silently masking it.

---

# 150. AI Maintenance Change Process

```text
Issue
 ↓
Diagnosis
 ↓
Impact Assessment
 ↓
Proposed Solution
 ↓
Implementation
 ↓
Testing
 ↓
Deployment
 ↓
Monitoring
 ↓
Documentation
```

---

# 151. Maintenance Completion Criteria

A maintenance task is complete when:

```text
[ ] Correct issue identified
[ ] Change implemented
[ ] Tests passed
[ ] Production verified where applicable
[ ] No unintended regressions
[ ] Client informed where appropriate
[ ] Change documented
```

---

# 152. Monthly Health Checklist

```text
AVAILABILITY
[ ] Uptime
[ ] Domain
[ ] HTTPS

SECURITY
[ ] Vulnerabilities
[ ] Dependencies
[ ] Access

LEADS
[ ] Contact
[ ] RFQ
[ ] Inquiry

CONTENT
[ ] Critical content
[ ] Contact details
[ ] Products/services

SEO
[ ] Broken links
[ ] Indexing
[ ] Sitemap

PERFORMANCE
[ ] Key pages
[ ] Mobile
[ ] Images

BACKUPS
[ ] Backup status

MONITORING
[ ] Alerts
[ ] Error trends
```

---

# 153. Quarterly Health Checklist

```text
[ ] Full content review
[ ] Full SEO review
[ ] Full performance review
[ ] Dependency review
[ ] Access review
[ ] Backup/recovery review
[ ] Asset review
[ ] Third-party integration review
[ ] Domain/hosting review
[ ] Monitoring review
```

---

# 154. Annual Health Checklist

```text
[ ] Domain ownership
[ ] Hosting plan
[ ] Runtime versions
[ ] Major dependencies
[ ] Security architecture
[ ] Content architecture
[ ] SEO architecture
[ ] Backup strategy
[ ] Monitoring strategy
[ ] Third-party services
[ ] Template version
[ ] Technical debt
```

---

# 155. Maintenance Documentation

Each project should maintain a record of:

```text
Maintenance Plan
Monitoring Providers
Hosting
Domain
Repository
Database
Storage
Integrations
Backup Strategy
Release Process
Incident Process
```

Do not store secret credentials in documentation.

---

# 156. Client Maintenance Responsibilities

Depending on the contract, the client may remain responsible for:

* Providing updated business information
* Approving content
* Paying domain/hosting renewals where applicable
* Maintaining ownership of third-party accounts
* Informing the agency about business changes

---

# 157. Agency Maintenance Responsibilities

Where included, the agency may be responsible for:

* Technical updates
* Security patches
* Monitoring
* Backups
* Content implementation
* Performance checks
* Bug fixes
* Deployment support

The exact obligations must come from the signed maintenance agreement.

---

# 158. Third-Party Responsibility

Failures from:

* Hosting provider
* Email provider
* CRM
* Google services
* WhatsApp
* Video provider
* DNS provider

may require external resolution.

The agency should distinguish:

```text
Application Defect
```

from:

```text
Third-Party Failure
```

---

# 159. Maintenance Contract Boundary

A maintenance plan should explicitly state:

```text
Included
Not Included
Response expectations
Content limits
Technical support
Third-party handling
Emergency handling
```

Avoid vague promises such as:

> "Unlimited support."

unless the contract truly provides that.

---

# 160. Maintenance SLA Boundary

Do not promise:

```text
24/7 response
1-hour resolution
Guaranteed uptime
```

unless these are explicitly supported by the service agreement and infrastructure.

---

# 161. Maintenance Cost Control

The agency should maintain the Business Growth template so that routine maintenance is efficient.

Good architecture:

```text
One Component
 ↓
One Fix
 ↓
Reusable Improvement
```

Poor architecture:

```text
10 Client Variants
 ↓
10 Separate Fixes
```

---

# 162. Template-Level Maintenance

When a reusable component has a common defect:

```text
Identify Shared Bug
 ↓
Fix Core Component
 ↓
Test Representative Projects
 ↓
Release Version
```

Do not manually patch every client implementation if the projects share the same source.

---

# 163. Client-Specific Maintenance

If the issue is specific to one client's:

* Content
* Configuration
* Integration
* Approved UI

fix the client project without unnecessarily changing the global template.

---

# 164. Template Version Review

Periodically determine whether a client project should adopt a newer template version.

Do not automatically upgrade every client.

Evaluate:

```text
Benefit
Risk
Compatibility
Client value
Maintenance cost
```

---

# 165. Technical Debt Review

Maintenance should identify:

```text
Duplicate code
Old dependencies
Unused modules
Temporary hacks
Outdated APIs
Poor performance areas
Architecture drift
```

Prioritize technical debt that affects:

```text
Security
Reliability
Maintainability
Performance
Cost
```

---

# 166. End-of-Life Content

When a product/service/location is permanently discontinued:

```text
Identify
 ↓
Review SEO
 ↓
Determine redirect/archive/remove
 ↓
Remove from navigation
 ↓
Update related content
```

---

# 167. End-of-Life Integration

When a third-party service is discontinued:

```text
Provider Notice
 ↓
Impact Assessment
 ↓
Alternative
 ↓
Migration
 ↓
Testing
 ↓
Deployment
```

---

# 168. Website Lifecycle

The Business Growth website lifecycle should be:

```text
Design
 ↓
Development
 ↓
Launch
 ↓
Maintenance
 ↓
Growth
 ↓
Optimization
 ↓
Redesign / Replacement
```

The template should support this lifecycle without becoming fragile.

---

# 169. Redesign Decision

Consider a redesign when:

```text
Brand changes significantly
Information architecture no longer fits
Business goals changed
Technology becomes unsupported
Performance architecture is obsolete
Template no longer represents the business
```

Do not redesign merely because a few sections need updating.

---

# 170. Website Retirement

When a website is retired:

```text
Backup
 ↓
Export Content
 ↓
Export Assets
 ↓
Document Domain
 ↓
Determine Redirect Strategy
 ↓
Decommission Hosting
```

The client should retain control of important assets and domain information.

---

# 171. Maintenance and Handover

At handover, the client should understand:

```text
Who hosts?
Who manages the domain?
Who handles updates?
How are content changes requested?
How are leads received?
Who has access?
What does maintenance include?
```

Reference:

`15-client-handover-and-documentation.md`

---

# 172. Final Maintenance Architecture

The Business Growth operational model is:

```text
                         PRODUCTION
                              │
              ┌───────────────┼───────────────┐
              ↓               ↓               ↓
           Content          Leads           Infrastructure
              │               │               │
              ↓               ↓               ↓
             SEO          Analytics         Monitoring
              │               │               │
              └───────────────┼───────────────┘
                              ↓
                       HEALTH MONITORING
                              │
                    ┌─────────┴─────────┐
                    ↓                   ↓
                 ALERT                REVIEW
                    ↓                   ↓
                INCIDENT             MAINTENANCE
                    ↓                   ↓
                 RECOVERY             UPDATE
                    └─────────┬─────────┘
                              ↓
                         VERIFICATION
                              ↓
                        DOCUMENTATION
```

---

# 173. Definition of Done — Maintenance Readiness

A Business Growth project is maintenance-ready when:

```text
[✓] Monitoring is configured where included
[✓] Uptime can be checked
[✓] Error monitoring is available where appropriate
[✓] Lead generation can be verified
[✓] Backup strategy is documented
[✓] Content update process is documented
[✓] Security update process exists
[✓] Dependency update process exists
[✓] SEO health can be reviewed
[✓] Performance can be reviewed
[✓] Domain/hosting responsibilities are documented
[✓] Third-party integrations are documented
[✓] Incident process exists
[✓] Rollback/recovery path is understood
[✓] Maintenance scope is clear
```

---

# 174. Master Maintenance Checklist

```text
AVAILABILITY
[ ] Website monitored
[ ] API monitored where applicable
[ ] Domain monitored
[ ] HTTPS monitored

SECURITY
[ ] Dependencies reviewed
[ ] Vulnerabilities reviewed
[ ] Access reviewed
[ ] Secrets reviewed
[ ] Forms protected

CONTENT
[ ] Products current
[ ] Services current
[ ] Projects current
[ ] Articles current
[ ] Team current
[ ] Locations current
[ ] Certifications current
[ ] Resources current

ASSETS
[ ] Images valid
[ ] Documents valid
[ ] Videos valid
[ ] Storage healthy

LEADS
[ ] Contact works
[ ] RFQ works
[ ] Inquiry flows work
[ ] Lead delivery works
[ ] Analytics works

SEO
[ ] Sitemap
[ ] Robots
[ ] Indexing
[ ] Broken links
[ ] Metadata
[ ] Redirects

PERFORMANCE
[ ] Core pages
[ ] Mobile
[ ] Images
[ ] APIs
[ ] Database

INFRASTRUCTURE
[ ] Hosting
[ ] Domain
[ ] DNS
[ ] SSL
[ ] Runtime
[ ] Database
[ ] Storage

BACKUP
[ ] Backup runs
[ ] Backup verified
[ ] Recovery known

MONITORING
[ ] Uptime
[ ] Errors
[ ] Alerts
[ ] Lead health

DOCUMENTATION
[ ] Maintenance log
[ ] Releases
[ ] Incidents
[ ] Access
[ ] Integrations
```

---

# 175. Final Principle

Business Growth is designed to become more valuable over time.

That only works when the website remains:

```text
Accurate
Secure
Available
Fast
Discoverable
Measurable
Maintainable
```

The maintenance model is therefore:

```text
MONITOR
   ↓
DETECT
   ↓
ASSESS
   ↓
MAINTAIN
   ↓
TEST
   ↓
DEPLOY
   ↓
VERIFY
   ↓
DOCUMENT
```

The key difference between a website that merely launches and a website that remains a useful business asset is ongoing operational discipline.

The final principle is:

> **Do not wait for the client to discover that something is broken. Monitor the important parts of the system, maintain the content and infrastructure, protect the lead-generation path, apply security and dependency updates, and continuously verify that the website still performs the business function it was built to perform.**

```
```
