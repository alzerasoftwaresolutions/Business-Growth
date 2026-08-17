# `CLIENT-PROJECT-BRIEF.md`

````md
# Business Growth
# Client Project Brief

**Document:** CLIENT-PROJECT-BRIEF.md  
**Version:** 1.0  
**Status:** Project Input Document  
**Package:** Business Growth

---

# 1. Purpose

This document is the primary project-specific brief used to convert a client's requirements into a configured Business Growth website.

It serves as the bridge between:

```text
Client
   ↓
Discovery
   ↓
Project Brief
   ↓
Business Growth Template
   ↓
Configuration
   ↓
Design Implementation
   ↓
Development
   ↓
QA
   ↓
Delivery
````

The purpose of this document is to ensure that the development team and AI coding agent have one clear source of truth for the individual client project.

---

# 2. Critical Rule

This document contains **client-specific information**.

It must not be treated as a generic package specification.

The package defines:

> What Business Growth can provide.

This document defines:

> What this particular client actually needs.

---

# 3. Source-of-Truth Hierarchy

For the individual client project:

```text
1. Signed Scope / Contract
2. Client-Approved Requirements
3. Approved UI Design
4. Client-Project Brief
5. Business Growth Package Standards
6. Technical Implementation Decisions
```

If a conflict exists, the higher-level source takes precedence.

---

# 4. Project Identification

```text
Project ID:
________________________________

Client Name:
________________________________

Company Name:
________________________________

Business Name:
________________________________

Industry:
________________________________

Business Growth Template Version:
________________________________

Project Configuration Version:
________________________________

Project Start Date:
________________________________

Target Launch Date:
________________________________

Project Manager:
________________________________

Lead Developer:
________________________________

Designer:
________________________________

QA Owner:
________________________________
```

---

# 5. Client Business Overview

## 5.1 Business Description

Provide a concise description of the company.

```text
Business Description:

__________________________________________________________________

__________________________________________________________________

__________________________________________________________________
```

---

## 5.2 What Does the Company Do?

```text
__________________________________________________________________

__________________________________________________________________

__________________________________________________________________
```

---

## 5.3 Primary Products / Services

```text
1. ______________________________________________

2. ______________________________________________

3. ______________________________________________

4. ______________________________________________

5. ______________________________________________
```

---

## 5.4 Primary Market

```text
Country:
________________________________

City / Region:
________________________________

Service Area:
________________________________

International Markets:
________________________________
```

---

# 6. Business Goals

Identify what the website must accomplish.

## Primary Goal

```text
[ ] Establish professional online presence
[ ] Generate leads
[ ] Generate RFQs
[ ] Showcase products
[ ] Showcase services
[ ] Showcase projects
[ ] Support sales
[ ] Support marketing
[ ] Publish content
[ ] Build trust
[ ] Improve search visibility
[ ] Provide business information
[ ] Other:

________________________________
```

---

## Secondary Goals

```text
1. ______________________________________________

2. ______________________________________________

3. ______________________________________________
```

---

# 7. Target Audience

Describe the people the website is intended to serve.

## Primary Audience

```text
_______________________________________________

_______________________________________________
```

## Secondary Audience

```text
_______________________________________________

_______________________________________________
```

---

# 8. Customer Intent

What do visitors typically want to do?

```text
[ ] Learn about the company
[ ] View products
[ ] View services
[ ] View projects
[ ] Request a quote
[ ] Request consultation
[ ] Ask a question
[ ] Call
[ ] WhatsApp
[ ] Visit a location
[ ] Download a document
[ ] Read articles
[ ] Request information
[ ] Schedule an appointment
[ ] Other:

________________________________
```

---

# 9. Primary Conversion

Define the most important website action.

```text
Primary Conversion:

________________________________
```

Examples:

```text
Request a Quote
Request Consultation
Submit Inquiry
Call
WhatsApp
Request Information
```

---

# 10. Secondary Conversions

```text
1. ______________________________________________

2. ______________________________________________

3. ______________________________________________
```

---

# 11. Business Positioning

## Brand Positioning

What should the company be perceived as?

```text
[ ] Premium
[ ] Professional
[ ] Technical
[ ] Reliable
[ ] Innovative
[ ] Established
[ ] Affordable
[ ] Local
[ ] International
[ ] Sustainable
[ ] Luxury
[ ] Specialist
[ ] Other:

________________________________
```

---

## Desired Customer Perception

```text
After visiting the website, the visitor should think:

"________________________________________________________"

"________________________________________________________"

"________________________________________________________"
```

---

# 12. Competitive Context

## Main Competitors

```text
1. ______________________________________________

2. ______________________________________________

3. ______________________________________________

4. ______________________________________________
```

## What Should This Website Do Better?

```text
__________________________________________________________________

__________________________________________________________________

__________________________________________________________________
```

---

# 13. Approved Design Reference

The approved UI is stored in:

```text
design/
```

## Design Reference Status

```text
[ ] Desktop approved
[ ] Mobile approved
[ ] Tablet defined
[ ] Design system approved
[ ] Typography approved
[ ] Color system approved
[ ] Components approved
[ ] Page layouts approved
```

---

# 14. Design Source of Truth

```text
Primary Design Source:

________________________________

Design Tool:
________________________________

Design Version:
________________________________

Design Approval Date:
________________________________
```

---

# 15. Design Notes

Important client-specific design requirements:

```text
__________________________________________________________________

__________________________________________________________________

__________________________________________________________________
```

Examples:

```text
Use existing Stonebridge visual language.
Do not introduce gradients.
Keep all section spacing generous.
Use approved construction photography.
```

---

# 16. Required Pages

Select the required pages.

```text
[ ] Home
[ ] About
[ ] Services
[ ] Service Detail
[ ] Products
[ ] Product Categories
[ ] Product Detail
[ ] Projects
[ ] Project Detail
[ ] Testimonials
[ ] Blog / News
[ ] Resources
[ ] Locations
[ ] Team
[ ] Certifications
[ ] Partners
[ ] FAQs
[ ] Contact
[ ] RFQ
[ ] Other:

________________________________
```

---

# 17. Page Inventory

| Page     | Route       | Required | Design Ready | Content Ready | Status |
| -------- | ----------- | -------: | -----------: | ------------: | ------ |
| Home     | `/`         |        ☐ |            ☐ |             ☐ |        |
| About    | `/about`    |        ☐ |            ☐ |             ☐ |        |
| Services | `/services` |        ☐ |            ☐ |             ☐ |        |
| Products | `/products` |        ☐ |            ☐ |             ☐ |        |
| Projects | `/projects` |        ☐ |            ☐ |             ☐ |        |
| Blog     | `/blog`     |        ☐ |            ☐ |             ☐ |        |
| RFQ      | `/rfq`      |        ☐ |            ☐ |             ☐ |        |
| Contact  | `/contact`  |        ☐ |            ☐ |             ☐ |        |

Add project-specific pages below.

```text
Custom Page 1:
Route:
Template:
Purpose:

Custom Page 2:
Route:
Template:
Purpose:
```

---

# 18. Feature Selection

Configure the enabled Business Growth features.

```text
PRODUCTS
[ ] Enabled
[ ] Disabled

PRODUCT CATEGORIES
[ ] Enabled
[ ] Disabled

PRODUCT DETAILS
[ ] Enabled
[ ] Disabled

SERVICES
[ ] Enabled
[ ] Disabled

SERVICE DETAILS
[ ] Enabled
[ ] Disabled

PROJECTS
[ ] Enabled
[ ] Disabled

PROJECT DETAILS
[ ] Enabled
[ ] Disabled

BLOG / NEWS
[ ] Enabled
[ ] Disabled

TESTIMONIALS
[ ] Enabled
[ ] Disabled

TEAM
[ ] Enabled
[ ] Disabled

CERTIFICATIONS
[ ] Enabled
[ ] Disabled

PARTNERS
[ ] Enabled
[ ] Disabled

LOCATIONS
[ ] Enabled
[ ] Disabled

RESOURCES / DOWNLOADS
[ ] Enabled
[ ] Disabled

SEARCH
[ ] Enabled
[ ] Disabled

FILTERING
[ ] Enabled
[ ] Disabled

RFQ
[ ] Enabled
[ ] Disabled

CONTACT FORM
[ ] Enabled
[ ] Disabled

ANALYTICS
[ ] Enabled
[ ] Disabled

SEARCH CONSOLE
[ ] Enabled
[ ] Disabled
```

---

# 19. Industry-Specific Features

Select the applicable sector.

```text
[ ] Automotive
[ ] Manufacturing
[ ] Construction
[ ] Engineering
[ ] Import & Export
[ ] Hotel / Resort
[ ] Education
[ ] Healthcare
[ ] Travel
[ ] Real Estate
[ ] Consulting
[ ] Other:

________________________________
```

---

# 20. Sector-Specific Requirements

Describe any special requirements created by the industry.

```text
__________________________________________________________________

__________________________________________________________________

__________________________________________________________________
```

---

# 21. Business Information

## Company Name

```text
Display Name:
________________________________

Legal Name:
________________________________
```

## Founded

```text
Year:
________________________________
```

## Tagline

```text
________________________________
```

## Short Description

```text
__________________________________________________________________

__________________________________________________________________
```

## Long Description

```text
__________________________________________________________________

__________________________________________________________________

__________________________________________________________________
```

---

# 22. Mission

```text
__________________________________________________________________

__________________________________________________________________
```

---

# 23. Vision

```text
__________________________________________________________________

__________________________________________________________________
```

---

# 24. Values

```text
1. ______________________________________________

2. ______________________________________________

3. ______________________________________________

4. ______________________________________________

5. ______________________________________________
```

---

# 25. Company Statistics

Only enter verified client-approved statistics.

```text
Established:
________________________________

Employees:
________________________________

Projects:
________________________________

Locations:
________________________________

Years of Experience:
________________________________

Other:
________________________________
```

---

# 26. Statistics Verification

```text
[ ] Client supplied
[ ] Client verified
[ ] Agency verified against approved source
[ ] Approved for public use
```

---

# 27. Contact Information

## Main Contact

```text
Name:
________________________________

Position:
________________________________

Email:
________________________________

Phone:
________________________________
```

---

## General Company Contact

```text
Phone:
________________________________

Email:
________________________________

WhatsApp:
________________________________

Website:
________________________________
```

---

# 28. Business Hours

```text
Monday:
________________________________

Tuesday:
________________________________

Wednesday:
________________________________

Thursday:
________________________________

Friday:
________________________________

Saturday:
________________________________

Sunday:
________________________________
```

---

# 29. Locations

## Main Office

```text
Location Name:
________________________________

Address:
________________________________

City:
________________________________

Region:
________________________________

Country:
________________________________

Phone:
________________________________

Email:
________________________________

Latitude:
________________________________

Longitude:
________________________________

Maps URL:
________________________________
```

---

## Additional Locations

```text
Location 2:

________________________________

Location 3:

________________________________

Location 4:

________________________________
```

---

# 30. Social Media

```text
Facebook:
________________________________

Instagram:
________________________________

LinkedIn:
________________________________

YouTube:
________________________________

TikTok:
________________________________

X:
________________________________

Other:
________________________________
```

---

# 31. Services

List the services that will appear on the website.

```text
1. ______________________________________________

2. ______________________________________________

3. ______________________________________________

4. ______________________________________________

5. ______________________________________________

6. ______________________________________________

7. ______________________________________________

8. ______________________________________________

9. ______________________________________________

10. _____________________________________________
```

---

# 32. Service Content Status

```text
Service information received:
[ ] Yes
[ ] Partial
[ ] No

Service detail content received:
[ ] Yes
[ ] Partial
[ ] No

Service images received:
[ ] Yes
[ ] Partial
[ ] No
```

---

# 33. Products

List products/product groups.

```text
1. ______________________________________________

2. ______________________________________________

3. ______________________________________________

4. ______________________________________________

5. ______________________________________________

6. ______________________________________________

7. ______________________________________________

8. ______________________________________________

9. ______________________________________________

10. _____________________________________________
```

---

# 34. Product Content Requirements

Determine which fields are required.

```text
[ ] Product name
[ ] Category
[ ] Description
[ ] Features
[ ] Specifications
[ ] Applications
[ ] Dimensions
[ ] Materials
[ ] Capacity
[ ] Downloads
[ ] Images
[ ] Video
[ ] Inquiry
[ ] Related products
```

---

# 35. Product Data Source

```text
[ ] Client spreadsheet
[ ] PDF catalog
[ ] Existing website
[ ] Database
[ ] Manual submission
[ ] Other:

________________________________
```

---

# 36. Product Import Requirements

```text
Estimated Number of Products:

________________________________

Estimated Number of Categories:

________________________________

Product Import Required:
[ ] Yes
[ ] No
```

---

# 37. Projects

List the projects to be displayed.

```text
1. ______________________________________________

2. ______________________________________________

3. ______________________________________________

4. ______________________________________________

5. ______________________________________________

6. ______________________________________________

7. ______________________________________________

8. ______________________________________________

9. ______________________________________________

10. _____________________________________________
```

---

# 38. Project Content Requirements

```text
[ ] Project title
[ ] Client
[ ] Location
[ ] Date/year
[ ] Category
[ ] Description
[ ] Scope
[ ] Services
[ ] Results
[ ] Images
[ ] Video
[ ] Documents
[ ] Related services
```

---

# 39. Testimonials

```text
Testimonials available:
[ ] Yes
[ ] Partial
[ ] No
```

Number of approved testimonials:

```text
________________________________
```

---

# 40. Team

If team members are displayed:

```text
Name:
________________________________

Position:
________________________________

Biography:
________________________________

Photo:
________________________________

LinkedIn:
________________________________
```

Repeat for additional team members.

---

# 41. Certifications

```text
Certification:
________________________________

Issuer:
________________________________

Certificate Number:
________________________________

Issue Date:
________________________________

Expiry Date:
________________________________

Document:
________________________________
```

---

# 42. Partners

```text
Partner:
________________________________

Website:
________________________________

Logo:
________________________________

Display Approved:
[ ] Yes
[ ] No
```

---

# 43. Blog / News

```text
Blog Required:
[ ] Yes
[ ] No

Initial Articles:
________________________________

Categories:
________________________________

Authors:
________________________________
```

---

# 44. Resources

List downloadable materials.

```text
1. ______________________________________________

2. ______________________________________________

3. ______________________________________________

4. ______________________________________________

5. ______________________________________________
```

---

# 45. Content Ownership

```text
Content Owner:
________________________________

Content Approval Person:
________________________________

Final Approval Authority:
________________________________
```

---

# 46. Content Responsibilities

```text
Client provides:
________________________________

Agency organizes:
________________________________

Agency writes:
________________________________

Client approves:
________________________________

Agency publishes:
________________________________
```

---

# 47. Content Deadline

```text
Initial Content Due:
________________________________

Final Content Due:
________________________________

Content Freeze:
________________________________
```

---

# 48. Asset Inventory

```text
Logo:
[ ] Received
[ ] Pending

Brand Guide:
[ ] Received
[ ] Pending

Company Photos:
[ ] Received
[ ] Pending

Product Photos:
[ ] Received
[ ] Pending

Project Photos:
[ ] Received
[ ] Pending

Team Photos:
[ ] Received
[ ] Pending

Videos:
[ ] Received
[ ] Pending

Brochures:
[ ] Received
[ ] Pending

Certificates:
[ ] Received
[ ] Pending

Other:
________________________________
```

---

# 49. Asset Rights

```text
[ ] Client confirms ownership
[ ] License verified
[ ] Stock usage verified
[ ] Photographer permission verified
[ ] Partner/logo permission verified
[ ] Third-party documents approved
```

---

# 50. Branding

## Primary Brand Colors

```text
Primary:
________________________________

Secondary:
________________________________

Accent:
________________________________

Background:
________________________________

Text:
________________________________
```

---

## Typography

```text
Primary Font:
________________________________

Secondary Font:
________________________________

Display Font:
________________________________

Technical / Numeric Font:
________________________________
```

These values must match the approved design.

---

# 51. Lead Generation

## Contact Form

```text
Enabled:
[ ] Yes
[ ] No

Recipient:
________________________________
```

---

## RFQ

```text
Enabled:
[ ] Yes
[ ] No

Recipient:
________________________________
```

---

## Product Inquiry

```text
Enabled:
[ ] Yes
[ ] No

Recipient:
________________________________
```

---

## Service Inquiry

```text
Enabled:
[ ] Yes
[ ] No

Recipient:
________________________________
```

---

# 52. RFQ Fields

Required:

```text
[ ] Name
[ ] Company
[ ] Email
[ ] Phone
[ ] Product
[ ] Service
[ ] Quantity
[ ] Budget
[ ] Timeline
[ ] Message
[ ] Attachment
```

Optional:

```text
________________________________
```

---

# 53. Lead Routing

```text
Contact:
________________________________

RFQ:
________________________________

Product Inquiry:
________________________________

Service Inquiry:
________________________________

Other:
________________________________
```

---

# 54. Lead Storage

```text
[ ] Email only
[ ] Database
[ ] CRM
[ ] Other:

________________________________
```

---

# 55. CRM

```text
CRM Required:
[ ] Yes
[ ] No

Provider:
________________________________

Integration:
[ ] Included
[ ] Add-on
[ ] Not applicable
```

---

# 56. WhatsApp

```text
Enabled:
[ ] Yes
[ ] No

Number:
________________________________

Default Message:
________________________________
```

---

# 57. Phone

```text
Primary:
________________________________

Secondary:
________________________________
```

---

# 58. Email

```text
General:
________________________________

Sales:
________________________________

RFQ:
________________________________

Support:
________________________________
```

---

# 59. SEO

## Primary Search Intent

```text
________________________________

________________________________
```

---

## Primary Keywords / Topics

Use only approved or strategically researched terms.

```text
1. ______________________________________________

2. ______________________________________________

3. ______________________________________________

4. ______________________________________________

5. ______________________________________________
```

---

# 60. SEO Metadata

## Homepage

```text
Title:
________________________________

Description:
________________________________
```

## About

```text
Title:
________________________________

Description:
________________________________
```

## Services

```text
Title:
________________________________

Description:
________________________________
```

## Products

```text
Title:
________________________________

Description:
________________________________
```

## Projects

```text
Title:
________________________________

Description:
________________________________
```

## Contact

```text
Title:
________________________________

Description:
________________________________
```

---

# 61. SEO Ownership

```text
SEO Owner:
________________________________

Client Approval Required:
[ ] Yes
[ ] No
```

---

# 62. Analytics

```text
Analytics Required:
[ ] Yes
[ ] No

Provider:
________________________________

Measurement ID:
________________________________
```

Only enter non-secret public identifiers here.

---

# 63. Analytics Events

```text
[ ] Page View
[ ] CTA Click
[ ] Contact Submit
[ ] RFQ Start
[ ] RFQ Submit
[ ] Phone Click
[ ] Email Click
[ ] WhatsApp Click
[ ] Download
[ ] Product View
[ ] Service View
[ ] Project View
[ ] Article View
[ ] Search
[ ] Filter
```

---

# 64. Search Console

```text
Required:
[ ] Yes
[ ] No

Property:
________________________________

Verified:
[ ] Yes
[ ] No
```

---

# 65. Maps

```text
Required:
[ ] Yes
[ ] No

Provider:
________________________________

Primary Location:
________________________________

Other Locations:
________________________________
```

---

# 66. Other Integrations

```text
Integration:
________________________________

Purpose:
________________________________

Provider:
________________________________

Required:
[ ] Yes
[ ] No
```

Repeat as necessary.

---

# 67. Domain

```text
Domain:
________________________________

Registrar:
________________________________

Owner:
________________________________

Expiration:
________________________________

DNS Provider:
________________________________
```

---

# 68. Hosting

```text
Frontend:
________________________________

Backend:
________________________________

Database:
________________________________

Storage:
________________________________

CDN:
________________________________

Monitoring:
________________________________
```

---

# 69. Environment

```text
Development:
________________________________

Staging / Preview:
________________________________

Production:
________________________________
```

---

# 70. Production Environment Variables

Do not enter secret values here.

Document names only:

```text
[ ] NODE_ENV
[ ] API_URL
[ ] FRONTEND_URL
[ ] CORS_ORIGIN
[ ] DATABASE_URL
[ ] DIRECT_URL
[ ] ANALYTICS_ID
[ ] RFQ_RECIPIENT
[ ] Other:

________________________________
```

---

# 71. Security Requirements

Client-specific security requirements:

```text
__________________________________________________________________

__________________________________________________________________
```

---

# 72. Authentication

Standard Business Growth sites do not normally include customer authentication.

If authentication is required:

```text
Required:
[ ] Yes
[ ] No

Purpose:
________________________________

User Type:
________________________________

Authentication Method:
________________________________
```

This should trigger additional architecture/security review.

---

# 73. File Upload Requirements

```text
Upload Required:
[ ] Yes
[ ] No

Purpose:
________________________________

Allowed Types:
________________________________

Maximum Size:
________________________________
```

---

# 74. Accessibility Requirements

Additional client requirements:

```text
__________________________________________________________________

__________________________________________________________________
```

---

# 75. Performance Requirements

Additional requirements:

```text
__________________________________________________________________

__________________________________________________________________
```

Examples:

```text
High mobile priority
Large product catalog
Large project gallery
High-traffic campaign
```

---

# 76. Content Volume

Estimate:

```text
Products:
________________________________

Services:
________________________________

Projects:
________________________________

Articles:
________________________________

Locations:
________________________________

Resources:
________________________________

Team Members:
________________________________
```

---

# 77. Performance Risk Assessment

```text
Content Volume:
[ ] Low
[ ] Medium
[ ] High

Media Volume:
[ ] Low
[ ] Medium
[ ] High

Expected Traffic:
[ ] Low
[ ] Medium
[ ] High

Dynamic Functionality:
[ ] Low
[ ] Medium
[ ] High
```

---

# 78. Required Technical Architecture

```text
Frontend:
________________________________

Backend:
[ ] No
[ ] Yes

Database:
[ ] No
[ ] Yes

Search:
[ ] Client-side
[ ] Server-side
[ ] Not required

CMS:
[ ] No
[ ] Yes

File Storage:
[ ] Local/static
[ ] Cloud storage
[ ] CMS
[ ] Other
```

---

# 79. Architecture Decision

Reason for selected architecture:

```text
__________________________________________________________________

__________________________________________________________________

__________________________________________________________________
```

---

# 80. Custom Requirements

List all requirements that are not directly covered by the standard Business Growth package.

```text
1. ______________________________________________

2. ______________________________________________

3. ______________________________________________

4. ______________________________________________

5. ______________________________________________
```

---

# 81. Custom Requirement Classification

For each custom requirement:

```text
Requirement:
________________________________

Classification:
[ ] Standard
[ ] Package Feature
[ ] Optional Add-on
[ ] Custom Feature
[ ] Out of Scope

Approved:
[ ] Yes
[ ] No

Additional Cost:
________________________________
```

---

# 82. Design Exceptions

```text
Exception:
________________________________

Reason:
________________________________

Approved By:
________________________________

Date:
________________________________
```

---

# 83. Architecture Exceptions

```text
Exception:
________________________________

Reason:
________________________________

Technical Impact:
________________________________

Approved By:
________________________________

Date:
________________________________
```

---

# 84. Content Exceptions

```text
Exception:
________________________________

Reason:
________________________________

Approved By:
________________________________
```

---

# 85. Client Responsibilities

The client must provide:

```text
[ ] Company information
[ ] Services
[ ] Products
[ ] Projects
[ ] Images
[ ] Documents
[ ] Contact information
[ ] Social links
[ ] Brand assets
[ ] Certifications
[ ] Testimonials
[ ] Partner information
[ ] Legal/approved content
```

Only applicable items need to be checked.

---

# 86. Agency Responsibilities

```text
[ ] Implement approved design
[ ] Configure project
[ ] Integrate approved content
[ ] Implement functionality
[ ] Perform QA
[ ] Deploy
[ ] Handover
[ ] Training
```

---

# 87. Client Content Deadline

```text
Required By:
________________________________
```

---

# 88. Client Review Schedule

```text
Design Review:
________________________________

Content Review:
________________________________

Staging Review:
________________________________

Final Approval:
________________________________
```

---

# 89. Revision Rules

```text
Design Revisions:
________________________________

Content Revisions:
________________________________

Additional Revisions:
________________________________
```

This must match the signed agreement.

---

# 90. Change Requests

Any requirement outside the approved brief must be treated as a change request.

Workflow:

```text
New Request
   ↓
Scope Review
   ↓
Impact Assessment
   ↓
Estimate
   ↓
Approval
   ↓
Design if required
   ↓
Development
   ↓
QA
   ↓
Release
```

---

# 91. Scope Freeze

```text
Scope Freeze Date:
________________________________
```

After scope freeze, additional requests require formal change review.

---

# 92. Launch Requirements

The client must provide or approve:

```text
[ ] Final content
[ ] Final assets
[ ] Domain
[ ] Contact information
[ ] Lead destinations
[ ] Analytics
[ ] Social links
[ ] Legal/required content
[ ] Final design
```

---

# 93. Launch Dependencies

Outstanding dependencies:

```text
1. ______________________________________________

2. ______________________________________________

3. ______________________________________________
```

---

# 94. Launch Blockers

Potential blockers:

```text
[ ] Missing critical content
[ ] Missing domain
[ ] Missing assets
[ ] Missing lead destination
[ ] Missing production environment
[ ] Missing approval
[ ] Security issue
[ ] Critical QA issue
[ ] Other:

________________________________
```

---

# 95. Project Risks

Identify known risks.

```text
Risk:
________________________________

Impact:
________________________________

Probability:
________________________________

Mitigation:
________________________________

Owner:
________________________________
```

Repeat as necessary.

---

# 96. Approval Authority

Final client approval is provided by:

```text
Name:
________________________________

Position:
________________________________

Email:
________________________________
```

---

# 97. Communication

Primary project contact:

```text
Name:
________________________________

Position:
________________________________

Email:
________________________________

Phone:
________________________________
```

---

# 98. Internal Project Contact

```text
Project Manager:
________________________________

Developer:
________________________________

Designer:
________________________________

QA:
________________________________
```

---

# 99. AI Development Notes

Use this section for implementation-specific instructions to the AI.

```text
IMPORTANT CLIENT-SPECIFIC RULES:

1. __________________________________________________________

2. __________________________________________________________

3. __________________________________________________________

4. __________________________________________________________

5. __________________________________________________________
```

---

# 100. AI Must Read These Files

Before implementation:

```text
[ ] AI-DEVELOPMENT-RULES.md
[ ] 00-package-definition.md
[ ] 01-information-architecture-and-routing.md
[ ] 03-page-template-specification.md
[ ] 04-component-system.md
[ ] 05-content-model-and-content-structure.md
[ ] 06-lead-generation-and-rfq.md
[ ] 07-seo-and-analytics.md
[ ] 08-performance-and-optimization.md
[ ] 09-security-standards.md
[ ] 10-system-architecture-and-technical-standards.md
[ ] 11-content-and-asset-management.md
[ ] 12-testing-and-qa.md
[ ] 17-project-configuration-and-client-setup.md
```

---

# 101. AI Design References

The AI must inspect:

```text
[ ] design/README.md
[ ] design/desktop/
[ ] design/mobile/
[ ] design/ui-references/
[ ] design/design-system/
```

where available.

---

# 102. AI Implementation Rules

```text
[ ] Do not redesign
[ ] Do not invent business facts
[ ] Do not invent content
[ ] Do not invent testimonials
[ ] Do not invent certifications
[ ] Do not invent statistics
[ ] Reuse components
[ ] Use configuration
[ ] Follow content models
[ ] Follow routing
[ ] Preserve security
[ ] Test changes
```

---

# 103. AI Scope Boundary

The AI may implement only:

```text
Approved Requirements
+
Approved Configuration
+
Approved Design
+
Approved Content
+
Approved Technical Decisions
```

It must not independently introduce:

```text
New major features
New business processes
New authentication systems
New payment systems
New dashboards
New CMS systems
```

without explicit approval.

---

# 104. Configuration Completion Checklist

Before coding is considered ready:

```text
[ ] Project identity complete
[ ] Business information complete
[ ] Contact information complete
[ ] Navigation configured
[ ] Feature flags configured
[ ] Content types selected
[ ] Lead flows configured
[ ] SEO configured
[ ] Analytics configured
[ ] Integrations configured
[ ] Domain configured
[ ] Hosting identified
```

---

# 105. Content Readiness Checklist

```text
[ ] Company content
[ ] Service content
[ ] Product content
[ ] Project content
[ ] Testimonials
[ ] Team
[ ] Certifications
[ ] Partners
[ ] Blog
[ ] Resources
```

Only applicable items need to be complete.

---

# 106. Asset Readiness Checklist

```text
[ ] Logo
[ ] Favicon
[ ] Hero imagery
[ ] Service imagery
[ ] Product imagery
[ ] Project imagery
[ ] Team imagery
[ ] Certification logos
[ ] Partner logos
[ ] Documents
[ ] Videos
```

---

# 107. Development Readiness

The project is development-ready when:

```text
[ ] Requirements approved
[ ] Design approved
[ ] Configuration complete
[ ] Required content available
[ ] Required assets available
[ ] Scope understood
[ ] Technical architecture selected
[ ] Lead flow defined
[ ] Deployment target defined
```

---

# 108. QA Readiness

The project is QA-ready when:

```text
[ ] Development feature-complete
[ ] Content integrated
[ ] Design implemented
[ ] Forms implemented
[ ] API implemented where required
[ ] Production-like environment available
[ ] Test data available
```

---

# 109. Launch Readiness

The project is launch-ready when:

```text
[ ] QA passed
[ ] Client approved
[ ] Production configuration complete
[ ] Domain ready
[ ] SSL ready
[ ] Analytics ready
[ ] Lead destination verified
[ ] Backup/recovery ready
[ ] Monitoring ready
```

---

# 110. Final Project Brief Sign-Off

```text
PROJECT BRIEF APPROVAL

Project:
________________________________

Client:
________________________________

The client confirms that the information in this project brief
accurately represents the agreed requirements for the project.

Client Representative:

Name:
________________________________

Position:
________________________________

Signature:
________________________________

Date:
________________________________


Agency Representative:

Name:
________________________________

Position:
________________________________

Signature:
________________________________

Date:
________________________________
```

---

# 111. Final Project Brief Status

```text
┌──────────────────────────────────────────────┐
│         PROJECT BRIEF STATUS                 │
│                                              │
│ Requirements      [ ] Complete               │
│ Design             [ ] Complete               │
│ Configuration     [ ] Complete               │
│ Content            [ ] Complete               │
│ Assets             [ ] Complete               │
│ Lead Flow          [ ] Complete               │
│ SEO                [ ] Complete               │
│ Analytics          [ ] Complete               │
│ Integrations       [ ] Complete               │
│ Technical Setup    [ ] Complete               │
│                                              │
│ DEVELOPMENT STATUS:                         │
│ [ ] READY                                     │
│ [ ] NOT READY                                 │
└──────────────────────────────────────────────┘
```

---

# 112. Final Principle

The Business Growth template provides the reusable system.

The Client Project Brief provides the project-specific truth.

The correct relationship is:

```text
BUSINESS GROWTH STANDARD
          +
CLIENT PROJECT BRIEF
          +
APPROVED DESIGN
          +
CLIENT CONTENT
          +
PROJECT CONFIGURATION
          ↓
CLIENT WEBSITE
```

The AI must never assume that every Business Growth project is identical.

One client may need:

```text
Products
+
Services
+
Projects
+
RFQ
```

while another may need:

```text
Services
+
Projects
+
Blog
+
Multiple Locations
+
Consultation
```

and another may need:

```text
Products
+
Categories
+
Product Details
+
Downloads
+
RFQ
```

The template provides the capability.

The project brief determines which capability is actually used.

---

# 113. Final Rule

> **Never build the client website from assumptions. Build it from the approved project brief, the approved design, the configured features, the verified content, and the Business Growth standards.**

The final workflow is:

```text
DISCOVERY
   ↓
CLIENT-PROJECT-BRIEF.md
   ↓
CONFIGURATION
   ↓
DESIGN REFERENCE
   ↓
CONTENT + ASSETS
   ↓
AI IMPLEMENTATION
   ↓
QA
   ↓
DEPLOYMENT
   ↓
HANDOVER
```

This document should be completed **before serious implementation begins** and updated whenever an approved project requirement changes.

---

# END OF DOCUMENT

```
```
