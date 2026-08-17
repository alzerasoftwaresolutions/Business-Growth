# `SCOPE-AND-CHANGE-CONTROL.md`

````md
# Business Growth
# Scope & Change Control Standards

**Document:** SCOPE-AND-CHANGE-CONTROL.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines how project scope is established, protected, changed, reviewed, estimated, approved, implemented, tested, and delivered for Business Growth projects.

The purpose is to prevent:

- Scope creep
- Unapproved feature development
- Endless revisions
- Confusion between bugs and new features
- Unclear responsibilities
- Unplanned technical work
- Uncontrolled AI-generated changes
- Unexpected project delays
- Unapproved cost increases

The goal is not to make the agency inflexible.

The goal is:

> **Make every project change intentional, visible, approved, and traceable.**

---

# 2. Why Scope Control Is Required

A website project naturally evolves.

A client may initially request:

```text
Company Website
+
Products
+
Projects
+
RFQ
````

and later request:

```text
Customer Login
+
Booking
+
Payment
+
Dashboard
```

These are not minor adjustments.

They can fundamentally change:

* Architecture
* Database requirements
* Security requirements
* UX
* Development time
* QA
* Deployment
* Maintenance
* Cost

Scope control exists to recognize these differences early.

---

# 3. Core Scope Principle

The project is controlled by:

```text
Signed Agreement
        +
Approved Project Brief
        +
Approved Design
        +
Approved Configuration
        =
Approved Project Scope
```

Anything outside those sources must be evaluated before implementation.

---

# 4. Scope Authority

The following hierarchy should determine whether a requirement is in scope:

```text
1. Signed Contract / Proposal
2. Approved Scope
3. Approved CLIENT-PROJECT-BRIEF.md
4. Approved UI Design
5. Approved Change Request
6. Package Definition
```

The exact contractual hierarchy may vary.

The important rule is:

> **A casual conversation, chat message, or AI assumption does not automatically expand project scope.**

---

# 5. Scope Categories

Every requested item should be classified as one of:

```text
STANDARD PACKAGE
PACKAGE FEATURE
CLIENT-SPECIFIC REQUIREMENT
CONTENT UPDATE
BUG / DEFECT
DESIGN REVISION
TECHNICAL CHANGE
OPTIONAL ADD-ON
CUSTOM FEATURE
OUT OF SCOPE
```

---

# 6. Standard Package

A standard package capability is functionality already defined by Business Growth.

Examples:

```text
Services
Products
Projects
Blog
Testimonials
RFQ
Basic analytics
Basic SEO
Responsive design
```

Only the capabilities actually included in the project agreement are considered in scope.

---

# 7. Package Feature

A feature may exist within Business Growth but still require explicit selection.

Example:

```text
Blog
Multiple locations
Team
Certifications
Partners
Search
Filtering
```

The fact that the template supports a feature does not automatically mean every client receives it.

---

# 8. Client-Specific Requirement

A client may have a requirement that is compatible with the package but unique to that client.

Example:

```text
Construction company:
Add "Project Sector" filter.

Manufacturer:
Add technical specification table.

Consultant:
Add industry expertise section.
```

The requirement must still be evaluated and documented.

---

# 9. Content Update

A content update changes information without materially changing the website's functionality.

Examples:

```text
Add 5 products
Change company phone
Replace project image
Update service description
Publish an article
Replace a brochure
Change business hours
```

Whether these are included in maintenance depends on the contract.

---

# 10. Bug / Defect

A bug is behavior that fails to match:

```text
Approved Requirements
OR
Approved Design
OR
Expected Technical Behavior
```

Example:

Approved:

> Clicking "Request Quote" submits the RFQ.

Actual:

> The button does nothing.

This is a defect.

---

# 11. What Is Not a Bug

A request is not automatically a bug because the client dislikes or changes their preference after approval.

Example:

Approved:

> Copper CTA button.

After approval:

> "We now prefer a green button."

That is a design change, not a defect.

---

# 12. Design Revision

A design revision changes the approved visual implementation.

Examples:

```text
Move hero content
Change typography
Change colors
Change card layout
Change section order
Add animation
Change navigation
```

Design revisions must be classified according to the contract and revision allowance.

---

# 13. Technical Change

A technical change affects architecture or implementation.

Examples:

```text
Add database
Add API
Change hosting
Add authentication
Add CRM
Add search service
Add file storage
Change deployment architecture
```

Technical changes require impact assessment.

---

# 14. Optional Add-On

A capability that Business Growth can support but is not included in the agreed project can be offered as an add-on.

Examples:

```text
Additional pages
Professional copywriting
Multilingual support
CRM integration
Custom booking
Live chat
Additional maintenance
```

---

# 15. Custom Feature

A custom feature is functionality outside the standard template capability.

Examples:

```text
Customer portal
Custom dashboard
Inventory system
Payment processing
ERP integration
Advanced booking engine
Membership system
Custom workflow
```

Custom features require separate scope and estimation.

---

# 16. Out of Scope

A request is out of scope when it is:

* Not included in the contract.
* Not included in the approved project brief.
* Not included as an agreed add-on.
* Not required to correct an actual defect.
* Not otherwise approved as part of the project.

---

# 17. Scope Baseline

At project start, create a baseline containing:

```text
Pages
Features
Components
Content Types
Lead Flows
Integrations
Design
Technical Architecture
Deliverables
Timeline
```

This baseline becomes the reference against which changes are evaluated.

---

# 18. Scope Baseline Record

```text
Project:
________________________________

Client:
________________________________

Package:
Business Growth

Baseline Version:
________________________________

Approved Date:
________________________________

Approved By:
________________________________
```

---

# 19. Scope Inventory

Maintain a structured scope inventory.

| Item     | Category | Included | Approved | Status |
| -------- | -------- | -------: | -------: | ------ |
| Home     | Page     |        ✓ |        ✓ |        |
| Products | Feature  |        ✓ |        ✓ |        |
| RFQ      | Feature  |        ✓ |        ✓ |        |
| Blog     | Optional |        — |        — |        |
| CRM      | Add-on   |        — |        — |        |

---

# 20. Page Scope

The project brief should identify the agreed page inventory.

For each page:

```text
Page
Route
Template
Purpose
Included?
Design Approved?
Content Required?
```

---

# 21. Page Limit

The Business Growth package supports a richer site than Starter Presence, but the final contract should still specify the agreed page scope.

For example:

```text
Up to 10 core pages
```

does not automatically mean:

```text
Unlimited service details
Unlimited product pages
Unlimited project pages
Unlimited article pages
```

Dynamic content count and content-production responsibilities must be defined separately.

---

# 22. Dynamic Content Scope

When the site contains collections such as:

```text
Products
Services
Projects
Articles
Locations
```

separate:

```text
Template Creation
```

from:

```text
Content Population
```

Example:

```text
Product Detail Template
→ Included

100 product entries
→ Requires agreed content-entry scope
```

---

# 23. Content Population Scope

Document the number of initial records included where necessary.

Example:

```text
Products:
25

Projects:
10

Articles:
5

Team Members:
8
```

Anything beyond the agreed quantity may be treated as:

```text
Maintenance
Additional Content Entry
Or
Separate Scope
```

depending on the contract.

---

# 24. Feature Scope

For every major feature:

```text
Feature:
________________________________

Included:
[ ] Yes
[ ] No

Approved:
[ ] Yes
[ ] No

Notes:
________________________________
```

---

# 25. Integration Scope

Third-party integrations should be explicitly listed.

Examples:

```text
Analytics
Search Console
Maps
Email
WhatsApp
CRM
Cloudinary
Video
```

An integration should not be considered included simply because the template technically supports it.

---

# 26. Design Scope

Design scope should define:

```text
Pages
Responsive states
Design system
Components
Number of revisions
Custom graphics
Illustrations
Animations
```

---

# 27. Design Revision Policy

The contract should define a reasonable number of included revision rounds.

Example:

```text
Design revisions:
2 rounds
```

A revision round should be clearly defined.

---

# 28. What Counts as a Revision Round

A revision round should generally mean:

```text
Client reviews the approved design
        ↓
Provides consolidated feedback
        ↓
Agency implements that feedback
```

Scattered daily changes should not automatically count as an unlimited series of revision rounds.

---

# 29. Consolidated Feedback

Clients should ideally provide feedback in a consolidated form.

Example:

```text
Page:
Home

Changes:
1. Adjust hero headline.
2. Move CTA slightly.
3. Change image.
4. Update section heading.
```

This is easier to manage than:

```text
Message 1
Message 2
Message 3
Message 4
...
```

---

# 30. Content Revision Policy

Content revision limits should distinguish:

```text
Correction
```

from:

```text
New Copy Direction
```

Example:

> Fix a spelling error.

Likely correction.

> Rewrite the entire About page with a completely new positioning strategy.

Likely new content work.

---

# 31. Client Delay and Scope

Timeline depends on client responsiveness.

Delays may result from:

```text
Late content
Late feedback
Late approvals
Late domain access
Late third-party credentials
Late assets
```

Project timelines should be adjusted accordingly.

---

# 32. Timeline Impact

When a significant scope change is approved:

```text
Original Timeline
       ↓
Impact Assessment
       ↓
Updated Timeline
```

Do not assume the original launch date remains unchanged.

---

# 33. Change Request Definition

A Change Request is a documented request to alter the approved project scope.

It should contain:

```text
Request
Reason
Type
Impact
Estimate
Timeline
Approval
```

---

# 34. Change Request ID

Use a unique identifier.

Example:

```text
CR-001
CR-002
CR-003
```

---

# 35. Change Request Template

```text
CHANGE REQUEST

ID:
________________________________

Date:
________________________________

Requested By:
________________________________

Requested Change:
________________________________

Reason:
________________________________

Category:
[ ] Content
[ ] Bug
[ ] Design
[ ] Feature
[ ] Technical
[ ] Integration
[ ] Other

Impact:
________________________________

Estimated Effort:
________________________________

Additional Cost:
________________________________

Timeline Impact:
________________________________

Status:
[ ] Proposed
[ ] Approved
[ ] Rejected
[ ] Implemented

Approved By:
________________________________

Approval Date:
________________________________
```

---

# 36. Change Request Workflow

```text
Client Request
      ↓
Log Change Request
      ↓
Classify
      ↓
Assess Impact
      ↓
Estimate
      ↓
Client Approval
      ↓
Implementation
      ↓
QA
      ↓
Release
      ↓
Update Documentation
```

---

# 37. No Automatic Implementation

A client request should not automatically become development work.

The agency must first determine:

```text
Is it a bug?
Is it included?
Is it maintenance?
Is it a change?
Is it an add-on?
```

---

# 38. AI Change Request Rule

The AI coding agent must never assume:

> "The client asked for it, therefore it is approved."

The AI must check:

```text
Contract
Project Brief
Configuration
Approved Design
Change Requests
```

before implementing new work.

---

# 39. AI Scope Classification

When the AI encounters a request, classify it:

```text
Existing Requirement
Bug
Configuration Change
Content Change
Design Change
Feature Change
Custom Development
Unknown
```

If uncertain, do not silently implement a major change.

---

# 40. AI Scope Protection

The AI must not:

```text
Add customer accounts
Add payments
Add booking
Add dashboards
Add CMS
Add CRM
Add e-commerce
```

unless the project scope explicitly requires them.

---

# 41. Example: New Blog

Client says:

> "Can we add a blog?"

Check:

```text
Blog enabled?
```

If:

```text
blog = true
```

and the blog is already in project scope:

```text
Implement within scope.
```

If:

```text
blog = false
```

and it is not contracted:

```text
Change request.
```

---

# 42. Example: New Product

Client says:

> "We have 10 more products."

If the product detail system already exists:

```text
Likely Content Update
```

not:

```text
New Feature
```

unless the contract limits content population.

---

# 43. Example: Product Comparison

Client says:

> "Can visitors compare products?"

This is not automatically part of a basic product catalog.

Classify:

```text
Custom Feature / Add-on
```

because it introduces:

* New UX
* Comparison state
* Additional component logic
* Potential URL/state changes
* Additional QA

---

# 44. Example: Customer Login

Client says:

> "Customers should log in and see their RFQs."

This is:

```text
New Feature
+
Authentication
+
Authorization
+
Private Data
```

It requires separate architecture/security consideration.

It is not a normal scope adjustment.

---

# 45. Example: Online Payment

Client says:

> "Can customers pay online?"

This introduces:

```text
Payment Integration
Security
Payment Provider
Transaction Handling
Webhook Handling
Failure Handling
Potential Compliance
```

It must be separately scoped.

---

# 46. Example: Booking

Client says:

> "Add hotel booking."

A simple:

```text
Contact / Inquiry
```

is different from:

```text
Booking Engine
Availability
Reservations
Payments
Confirmation
Cancellation
```

Do not treat them as the same feature.

---

# 47. Example: New Design Preference

Client says:

> "Can we change the entire design to something more modern?"

This is:

```text
Major Design Change
```

It is not a small revision.

---

# 48. Example: Color Change

Client says:

> "Make the copper accent slightly darker."

If within design revision scope:

```text
Design Revision
```

No major architecture change.

---

# 49. Example: New Section

Client says:

> "Can we add a sustainability section?"

Classify based on circumstances:

```text
Approved but missing
→ Bug / incomplete implementation

Not included but compatible with design
→ Scope change

Requires new custom layout
→ Design + Scope Change
```

---

# 50. Example: New Page

Client says:

> "Add a Careers page."

This is usually:

```text
Additional Page
```

unless the signed scope already includes it.

---

# 51. Example: Additional Detail Content

Client says:

> "Add a separate page for every service."

If the approved package includes:

```text
Service Detail Template
```

then individual service entries may simply be content.

However, if additional unique page templates are required, assess separately.

---

# 52. Example: New Industry

Client originally says:

> "We serve manufacturing."

Later:

> "We also need dedicated pages for healthcare, education, energy, and government."

If the architecture already supports industry pages but they were not included:

```text
Additional Content / Scope
```

If a new dynamic architecture is required:

```text
Technical Scope Change
```

---

# 53. Example: Multilingual

Client says:

> "Add Amharic and English."

This introduces:

```text
Multilingual Architecture
Translation
Routing
SEO
Content Management
Typography
QA
```

It is not a simple content change unless multilingual support was already included.

---

# 54. Example: Analytics Change

Client says:

> "Add Google Analytics."

If analytics is already included:

```text
Configuration
```

If a more advanced analytics platform or custom dashboard is requested:

```text
Add-on / Custom Feature
```

---

# 55. Example: CRM

Client says:

> "Send leads to our CRM."

Classify:

```text
CRM Integration
```

Evaluate:

```text
API
Credentials
Field Mapping
Security
Testing
Maintenance
```

---

# 56. Example: Map

Client says:

> "Add Google Maps."

If maps are already included:

```text
Configuration
```

If they request:

> "Show all branches with search and filtering."

This may become:

```text
Enhanced Location Feature
```

requiring scope review.

---

# 57. Change Impact Categories

Each change should evaluate impact on:

```text
Scope
Design
Content
Architecture
Security
Performance
SEO
Analytics
Testing
Timeline
Cost
Maintenance
Documentation
```

---

# 58. Change Impact Matrix

| Area        | None | Low | Medium | High |
| ----------- | ---- | --- | ------ | ---- |
| Design      | ☐    | ☐   | ☐      | ☐    |
| Frontend    | ☐    | ☐   | ☐      | ☐    |
| Backend     | ☐    | ☐   | ☐      | ☐    |
| Database    | ☐    | ☐   | ☐      | ☐    |
| Security    | ☐    | ☐   | ☐      | ☐    |
| SEO         | ☐    | ☐   | ☐      | ☐    |
| Analytics   | ☐    | ☐   | ☐      | ☐    |
| Performance | ☐    | ☐   | ☐      | ☐    |
| QA          | ☐    | ☐   | ☐      | ☐    |
| Timeline    | ☐    | ☐   | ☐      | ☐    |

---

# 59. Change Estimation

Estimate based on actual work.

Possible categories:

```text
Design
Frontend
Backend
Database
Content
Assets
Integration
Testing
Deployment
Documentation
```

---

# 60. Effort Estimate

Example:

```text
Design:
4 hours

Frontend:
8 hours

Backend:
5 hours

QA:
3 hours

Deployment:
1 hour

Total:
21 hours
```

Use the agency's actual estimation method.

---

# 61. Cost Estimate

Cost may be determined using:

```text
Estimated Hours
×
Applicable Rate
```

plus:

```text
Third-Party Costs
Hosting Costs
Licenses
External Services
```

where applicable.

---

# 62. Timeline Estimate

Estimate:

```text
Development
Testing
Client Review
Deployment
```

Do not estimate only coding time when client review or third-party configuration is required.

---

# 63. Dependency Risk

A change may depend on:

```text
Client Content
Third-Party Provider
API Access
Domain
Hosting
Credentials
Design Approval
```

Document dependencies explicitly.

---

# 64. Change Approval

A change becomes approved only when the responsible authority has explicitly accepted it according to the project process.

Possible approval:

```text
Written confirmation
Signed change request
Approved quotation
Approved project management entry
```

---

# 65. Verbal Approval

If a significant change is approved verbally:

```text
Document the approval afterward.
```

Do not rely on memory.

---

# 66. Change Log

Maintain:

```text
CHANGE LOG

ID:
Date:
Request:
Category:
Approved:
Estimate:
Status:
Release:
```

---

# 67. Scope Freeze

At an agreed point:

```text
Scope Freeze
```

should occur.

After scope freeze:

```text
New Request
 ↓
Change Review
```

rather than silently extending development.

---

# 68. Change Freeze

During final QA:

```text
Release Candidate
```

should be protected from unrelated new requests.

A new feature introduced late in QA can destabilize:

* Layout
* Performance
* Security
* SEO
* Analytics
* Delivery date

---

# 69. Emergency Changes

Emergency changes may bypass normal timing only when necessary.

Examples:

```text
Critical security vulnerability
Production outage
Broken lead generation
Data corruption
```

Even emergency changes must be documented afterward.

---

# 70. Emergency Change Process

```text
Incident
 ↓
Contain
 ↓
Fix / Rollback
 ↓
Verify
 ↓
Document
 ↓
Review
```

---

# 71. Client-Requested Emergency Change

Client urgency does not automatically make a change an emergency.

Example:

> "We need a new homepage section tomorrow."

This may be urgent to the client but still be a normal scope change.

---

# 72. Third-Party Changes

A third-party provider may force an unexpected change.

Examples:

```text
API deprecation
Provider shutdown
Authentication change
Pricing change
Security issue
```

These should be classified according to the contract and circumstances.

---

# 73. Third-Party Cost Changes

If an integration requires a paid provider:

Document:

```text
Provider
Plan
Recurring Cost
Who Pays
```

Do not silently subscribe the client to paid services.

---

# 74. Infrastructure Changes

A request such as:

> "Move from Vercel to another host."

should be treated as an infrastructure change.

Evaluate:

```text
Deployment
DNS
SSL
Environment
Performance
Cost
Monitoring
Rollback
```

---

# 75. Architecture Changes

Examples:

```text
Static → Database
Client-side Search → Server Search
Email Leads → CRM
No Auth → Customer Auth
Single Location → Multi-location
```

These are architecture changes.

They require additional evaluation.

---

# 76. Database Change

Any request that introduces persistent data may require:

```text
Schema
Migration
Backup
Security
Testing
Maintenance
```

Therefore database changes must not be treated as cosmetic scope changes.

---

# 77. Security Impact

For every change involving:

```text
User Accounts
Private Data
Uploads
Payments
Integrations
APIs
```

perform a security review.

---

# 78. SEO Impact

For every change involving:

```text
Routes
Pages
Slugs
Content
Templates
Internationalization
```

evaluate SEO impact.

---

# 79. Analytics Impact

For every change involving:

```text
CTA
Forms
Lead types
Content
User journeys
```

evaluate analytics impact.

---

# 80. Performance Impact

Evaluate performance for:

```text
Video
Large galleries
Search
Filtering
Maps
New scripts
Third-party integrations
Large content imports
```

---

# 81. Testing Impact

Every change must determine what needs retesting.

Example:

```text
Header change
→ Header
→ Navigation
→ Mobile
→ Accessibility
```

Example:

```text
RFQ change
→ RFQ
→ Lead routing
→ Analytics
→ Security
→ Mobile
```

---

# 82. Documentation Impact

When a change affects:

```text
Routes
Architecture
Configuration
Lead flow
Deployment
Maintenance
```

update relevant documentation.

---

# 83. Handover Impact

If a new feature is added before delivery, update:

```text
Client Handover
Training
Technical Documentation
Acceptance Checklist
```

---

# 84. Change Request Decision

Every change should end with one status:

```text
APPROVED
REJECTED
DEFERRED
INFORMATION REQUIRED
```

---

# 85. Deferred Changes

A deferred change is not lost.

Record:

```text
Change ID
Reason for Deferral
Future Scope
Priority
Notes
```

---

# 86. Rejected Changes

Document rejection reason.

Examples:

```text
Out of scope
Too complex for package
Not aligned with business goals
Security risk
Third-party limitation
Requires separate project
```

---

# 87. Change Priority

Use:

```text
Critical
High
Medium
Low
```

Do not classify every request as Critical simply because the client wants it quickly.

---

# 88. Requirement Ambiguity

If a request is unclear:

```text
DO NOT IMPLEMENT BASED ON ASSUMPTION
```

Instead define:

```text
What is requested?
What problem does it solve?
Who uses it?
What should happen?
What should not happen?
```

---

# 89. Acceptance Criteria for Changes

Every significant change should have acceptance criteria.

Example:

```text
Feature:
Product Comparison

Acceptance:
[ ] Users can select products
[ ] Comparison page opens
[ ] Specifications display
[ ] Mobile works
[ ] Empty state works
[ ] Analytics event works
```

---

# 90. Change Documentation

Use:

```text
CHANGE REQUEST
      ↓
REQUIREMENT
      ↓
DESIGN
      ↓
IMPLEMENTATION
      ↓
TEST
      ↓
RELEASE
```

The change should remain traceable from request to production.

---

# 91. Versioning After Change

Significant approved changes should result in a new release/version.

Example:

```text
1.0.0
 ↓
1.1.0
```

or:

```text
1.0.0
 ↓
1.0.1
```

depending on impact.

---

# 92. Scope and Client Communication

When responding to a client request:

Do not simply say:

> "That's extra."

Instead explain:

```text
What is currently included.
What has been requested.
Why it changes scope.
What the estimated impact is.
What the next step is.
```

---

# 93. Suggested Client Communication Structure

```text
Requested Change:
________________________________

Current Scope:
________________________________

Impact:
________________________________

Estimated Cost:
________________________________

Timeline Impact:
________________________________

Next Step:
________________________________
```

---

# 94. Example Client Message

```text
The current project includes the product catalog and product
detail pages. The requested product comparison feature is a
new interaction that requires additional UI, comparison logic,
testing, and responsive behavior.

We can add it as an additional feature. The estimated impact is:

Development: ___
Testing: ___
Timeline: ___
Cost: ___

We can proceed once the change is approved.
```

---

# 95. AI Client Communication Rule

The AI may help draft change explanations but must not independently negotiate price or contractual terms unless explicitly instructed by an authorized agency representative.

---

# 96. AI Estimation Rule

AI-generated estimates are estimates.

They must not be presented as guaranteed project duration or cost without agency review.

---

# 97. AI Scope Rule

When implementing an approved change:

```text
Read Change Request
 ↓
Read Existing Architecture
 ↓
Read Design
 ↓
Assess Dependencies
 ↓
Implement
 ↓
Test
 ↓
Update Documentation
```

---

# 98. AI Must Not Expand Scope

The AI must not add:

```text
Extra pages
Extra integrations
Extra animations
Extra dashboards
Extra authentication
Extra business logic
```

because it believes the site would be "better."

---

# 99. AI Must Not Remove Scope

The AI must not remove approved functionality simply because:

> "It is not necessary."

If a feature is approved, it must be implemented unless the scope is formally changed.

---

# 100. AI Must Preserve Approved Content

The AI must not rewrite approved client content merely to make it shorter unless explicitly instructed.

---

# 101. AI Must Preserve Approved Design

The AI may optimize implementation but must not redesign the interface to make coding easier.

---

# 102. AI Change Validation

After an approved change:

```text
[ ] Scope implemented
[ ] Approved UI followed
[ ] Existing functionality still works
[ ] Security reviewed
[ ] SEO reviewed where applicable
[ ] Analytics reviewed where applicable
[ ] Performance reviewed where applicable
[ ] QA completed
[ ] Documentation updated
```

---

# 103. Change Regression Rule

A change is not complete if it creates regressions elsewhere.

Example:

```text
New Product Filter
     ↓
Products work
     ↓
BUT
Product Detail breaks
```

The change has not passed QA.

---

# 104. Scope and Regression

Any change touching shared components requires regression testing of their other consumers.

Examples:

```text
Header
→ All pages

ProductCard
→ Product listing
→ Homepage
→ Related products
→ Search

LeadForm
→ Contact
→ RFQ
→ Product inquiry
```

---

# 105. Final Scope Review Before QA

Before final QA, review:

```text
[ ] All approved requirements implemented
[ ] No unauthorized features
[ ] No missing agreed pages
[ ] No unapproved design changes
[ ] Change log reconciled
[ ] Outstanding requests classified
```

---

# 106. Final Scope Review Before Delivery

Before client acceptance:

```text
[ ] Scope baseline reviewed
[ ] Approved changes included
[ ] Rejected changes excluded
[ ] Deferred changes documented
[ ] Final scope matches delivery
```

---

# 107. Scope Completion Record

```text
PROJECT SCOPE COMPLETION

Project:
________________________________

Original Scope Version:
________________________________

Final Scope Version:
________________________________

Approved Changes:
________________________________

Deferred Changes:
________________________________

Rejected Changes:
________________________________

Final Scope Status:
[ ] Complete
[ ] Incomplete
```

---

# 108. Change Log Template

```text
CHANGE LOG

CR-ID:
________________________________

Date:
________________________________

Requested By:
________________________________

Description:
________________________________

Classification:
________________________________

Estimated Effort:
________________________________

Cost:
________________________________

Timeline Impact:
________________________________

Approval:
________________________________

Implemented In:
________________________________

QA Status:
________________________________

Production Release:
________________________________
```

---

# 109. Scope Audit

Before project closure, review:

```text
Contract
   ↓
Project Brief
   ↓
Design
   ↓
Configuration
   ↓
Change Requests
   ↓
Implementation
   ↓
Final Delivery
```

Every major delivered feature should have a traceable source.

---

# 110. Scope Traceability Matrix

| Requirement     | Source        | Implemented | Tested | Approved |
| --------------- | ------------- | ----------: | -----: | -------: |
| Product Catalog | Project Brief |           ☐ |      ☐ |        ☐ |
| RFQ             | Contract      |           ☐ |      ☐ |        ☐ |
| Blog            | Change CR-002 |           ☐ |      ☐ |        ☐ |
| CRM             | Not Included  |           — |      — |        — |

---

# 111. Definition of Scope Stability

The project is considered scope-stable when:

```text
[✓] Requirements are understood
[✓] Pages are defined
[✓] Features are defined
[✓] Design is approved
[✓] Configuration is approved
[✓] Major changes are documented
[✓] Outstanding requests are classified
```

---

# 112. Definition of Scope Completion

Scope is complete when:

```text
[✓] Every included requirement is implemented
[✓] Every approved change is implemented
[✓] Every excluded request is documented
[✓] Every deferred request is documented
[✓] QA confirms implementation
[✓] Client confirms acceptance
```

---

# 113. Final Scope Acceptance

```text
SCOPE ACCEPTANCE

Project:
________________________________

The parties confirm that the project scope represented by
the approved agreement, project brief, approved designs, and
approved change requests is the basis for final delivery.

Client Representative:
________________________________

Agency Representative:
________________________________

Date:
________________________________
```

---

# 114. Scope Control Architecture

The complete process is:

```text
             CLIENT REQUIREMENT
                     │
                     ↓
               PROJECT BRIEF
                     │
                     ↓
                SCOPE BASELINE
                     │
                     ↓
              APPROVED DESIGN
                     │
                     ↓
                DEVELOPMENT
                     │
                     │
           ┌─────────┴─────────┐
           │                   │
      NEW REQUEST          DEFECT
           │                   │
           ↓                   ↓
     CHANGE REVIEW          FIX
           │                   │
     ┌─────┼─────┐             │
     ↓     ↓     ↓             │
 Approve Reject Defer           │
     │     │     │             │
     └─────┴─────┘             │
           │                   │
           └─────────┬─────────┘
                     ↓
                    QA
                     ↓
                  RELEASE
                     ↓
                  DELIVERY
```

---

# 115. Final Principle

Scope control is not about refusing client requests.

It is about making the difference between:

```text
"Yes, this is already included."

```

and:

```text
"Yes, we can add this, but it changes the approved scope."
```

clear to everyone.

The Business Growth workflow should therefore be:

```text
REQUEST
   ↓
CLASSIFY
   ↓
ASSESS
   ↓
ESTIMATE
   ↓
APPROVE
   ↓
IMPLEMENT
   ↓
TEST
   ↓
DOCUMENT
   ↓
RELEASE
```

---

# 116. Final Rule for the Agency

> **Never let an unclassified request become untracked development work.**

Every meaningful change must have a clear answer to:

```text
What changed?
Why?
Who requested it?
Is it in scope?
What does it affect?
How much work does it require?
Who approved it?
Was it tested?
Which release contains it?
```

---

# 117. Final Rule for the AI

> **The AI does not decide project scope. It implements approved scope.**

The AI must:

```text
Read
 ↓
Classify
 ↓
Check Scope
 ↓
Implement only if approved
 ↓
Test
 ↓
Report
```

This keeps the Business Growth template reusable while preventing the AI from silently turning a structured website package into an uncontrolled custom software project.

---

# END OF DOCUMENT

```
```
