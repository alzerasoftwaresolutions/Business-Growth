# `06-lead-generation-and-rfq.md`

````md
# Business Growth
# Lead Generation & Request for Quote (RFQ) Standards

**Document:** 06-lead-generation-and-rfq.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines the lead-generation architecture for the Business Growth package.

Lead generation is one of the defining differences between Business Growth and Starter Presence.

The objective is to turn website traffic into meaningful business inquiries through:

- Contact forms
- Request for Quote (RFQ)
- Product inquiries
- Service inquiries
- Project inquiries
- Property inquiries
- Vehicle inquiries
- Tour inquiries
- Appointment requests
- Consultation requests
- Information requests
- Phone calls
- Email
- WhatsApp
- Other approved contact channels

The system must be flexible enough to support all Business Growth sectors without forcing every client into the same lead process.

---

# 2. Business Growth Lead-Generation Philosophy

The website should not merely tell visitors:

> "Contact us."

It should help visitors understand:

> "What should I do next?"

The lead-generation system therefore follows:

```text
Visitor
   ↓
Relevant Content
   ↓
Trust / Evaluation
   ↓
Contextual CTA
   ↓
Appropriate Inquiry Method
   ↓
Lead
   ↓
Business Follow-Up
````

The website is responsible for producing a useful inquiry.

The website is not automatically responsible for becoming a full CRM or sales-management system.

---

# 3. Difference From Starter Presence

Starter Presence primarily provides:

```text
General Contact
Phone
Email
WhatsApp
Basic Contact Form
```

Business Growth expands this into:

```text
Contextual CTAs
        +
RFQ
        +
Product / Service Inquiry
        +
Lead Context
        +
Multiple Inquiry Types
        +
Lead Source Tracking
        +
Conversion Tracking
        +
Structured Lead Data
```

The lead-generation architecture is therefore a major package upgrade.

---

# 4. Lead-Generation Goals

The lead system should help the business:

* Generate more inquiries.
* Generate more relevant inquiries.
* Reduce unnecessary contact friction.
* Provide context to the sales team.
* Encourage visitors to take the appropriate next step.
* Measure important conversion actions.
* Route inquiries to the appropriate destination.

---

# 5. Lead Generation Architecture

The core architecture is:

```text
Visitor
    ↓
Content
    ↓
CTA
    ↓
Lead Action
    ↓
Form / Communication Channel
    ↓
Validation
    ↓
Submission
    ↓
Routing
    ↓
Business Follow-Up
```

Example:

```text
Product Page
    ↓
Request Quote
    ↓
RFQ Form
    ↓
Product = Current Product
    ↓
Submit
    ↓
Sales Email / Approved Lead Destination
```

---

# 6. Lead Actions

The system should support multiple lead actions.

Possible actions:

```text
Contact
Request Quote
Request Consultation
Request Information
Inquire About Product
Inquire About Service
Request Project Consultation
Request Appointment
Request Test Drive
Request Property Information
Request Travel Information
Make a Hotel Inquiry
Call
Email
WhatsApp
Download
```

Only actions relevant to the client should be enabled.

---

# 7. Lead Action Selection

The correct CTA depends on the business model.

Examples:

### Automotive

```text
View Vehicle
   ↓
Vehicle Details
   ↓
Request Test Drive
```

or:

```text
Request Vehicle Information
```

### Manufacturing

```text
Product
   ↓
Specifications
   ↓
Request Quote
```

### Construction

```text
Project / Service
   ↓
Project Consultation
```

### Engineering

```text
Engineering Service
   ↓
Request Consultation
```

### Import / Export

```text
Product
   ↓
Request Quote
```

### Hotel / Resort

```text
Accommodation / Facility
   ↓
Make an Inquiry
```

### Education

```text
Program
   ↓
Request Information
```

### Healthcare

```text
Medical Service
   ↓
Request Appointment
```

### Travel

```text
Tour
   ↓
Request Trip Information
```

### Real Estate

```text
Property
   ↓
Enquire About Property
```

### Consulting

```text
Service
   ↓
Book Consultation
```

---

# 8. CTA Hierarchy

Each page should have a primary business action.

Recommended hierarchy:

```text
Primary CTA
    ↓
Secondary CTA
    ↓
Supporting Contact
```

Example:

```text
Primary:
Request Quote

Secondary:
View Specifications

Supporting:
WhatsApp
Phone
Email
```

Not every page needs every action.

---

# 9. Contextual CTAs

Business Growth should use contextual lead actions.

A contextual CTA means the CTA reflects what the visitor is currently viewing.

Examples:

```text
Product Page
→ Request Quote

Service Page
→ Request Consultation

Project Page
→ Discuss Your Project

Property Page
→ Enquire About Property

Vehicle Page
→ Request Test Drive

Tour Page
→ Request This Trip
```

This is more useful than sending every visitor to the same generic contact form.

---

# 10. CTA Destination Types

A CTA may lead to:

```text
Internal Page
Form
RFQ
Modal
Sheet
Phone
Email
WhatsApp
Download
External Service
```

The destination must be explicitly configured.

---

# 11. Lead Context

A lead should retain context where appropriate.

Example:

```text
User:
Hydraulic Press Product Page

Clicks:
Request Quote

RFQ:
Product = Hydraulic Press
```

Conceptually:

```js
{
  type: "rfq",
  context: {
    type: "product",
    id: "product-001",
    title: "Hydraulic Press"
  }
}
```

The exact implementation can differ.

---

# 12. Why Lead Context Matters

Context helps the business answer:

> "What did this person contact us about?"

Instead of:

```text
User submitted a generic contact form.
```

The business may receive:

```text
User is asking about:
Hydraulic Press HP-500
```

This reduces friction between marketing and sales.

---

# 13. Lead Types

The lead system should support:

```text
contact
rfq
product-inquiry
service-inquiry
project-inquiry
vehicle-inquiry
property-inquiry
tour-inquiry
appointment-request
consultation-request
information-request
hotel-inquiry
```

The exact list may be extended when a legitimate client requirement exists.

---

# 14. Generic Lead Model

A common lead structure may contain:

```text
id
type
name
company
email
phone
message
source
context
submittedAt
status
```

Not every lead type requires every field.

---

# 15. Lead Contact Information

Typical fields:

```text
Name
Company
Email
Phone
```

Not every field must be mandatory.

For example:

### Consumer-oriented hotel inquiry

Company may be unnecessary.

### B2B manufacturing RFQ

Company may be important.

The form configuration must reflect the actual customer journey.

---

# 16. Lead Message

A free-text message should allow the visitor to provide context that structured fields cannot capture.

The message field must:

* Have reasonable length limits.
* Be validated.
* Be safely processed.
* Not accept arbitrary executable HTML.

---

# 17. RFQ Definition

RFQ means:

> **Request for Quote**

It is intended for visitors who are seeking commercial information about a product, service, project, or other business offering.

RFQ is appropriate especially for:

* Manufacturing
* Construction
* Engineering
* Import/export
* Automotive
* Real estate
* Professional services

It may be inappropriate for some businesses.

---

# 18. RFQ Flow

The standard RFQ flow is:

```text
Visitor
   ↓
Product / Service / Project
   ↓
Request Quote
   ↓
RFQ Form
   ↓
Enter Request Details
   ↓
Validation
   ↓
Submit
   ↓
Confirmation
   ↓
Lead Routing
```

---

# 19. RFQ Entry Points

The RFQ may be accessed from:

* Header CTA
* Homepage
* Product page
* Service page
* Project page
* Contact page
* Dedicated RFQ page
* Mobile sticky CTA

Only approved entry points should be used.

---

# 20. RFQ Form Architecture

The RFQ form should be divided into logical groups.

Recommended:

```text
1. Contact Information
2. Request Information
3. Product / Service Context
4. Project Information
5. Additional Details
6. Supporting Files where approved
7. Submit
```

Not all sections are required for every business.

---

# 21. RFQ Contact Fields

Possible fields:

```text
Full Name
Company
Email
Phone
Preferred Contact Method
```

The exact field set depends on the business.

---

# 22. RFQ Request Fields

Possible fields:

```text
Product
Service
Category
Quantity
Unit
Project Type
Project Location
Timeline
Expected Start Date
```

Only collect information the sales process genuinely uses.

---

# 23. RFQ Commercial Fields

Possible fields:

```text
Budget Range
Quantity
Expected Purchase Date
Preferred Delivery
Currency
```

These fields may be useful in B2B contexts but should not be mandatory without justification.

---

# 24. RFQ Message

Provide an optional or required detailed request field where necessary.

Example:

```text
Please describe your requirements.
```

The prompt should be clear and business-oriented.

---

# 25. RFQ Attachments

File upload may be supported when explicitly required.

Potential use cases:

* Project drawings
* Technical specifications
* Property documents
* Product requirement documents
* Reference files
* Corporate procurement documents

File uploads are not automatically included in every RFQ.

---

# 26. File Upload Security

If file uploads are enabled:

```text
[ ] Allowed extensions defined
[ ] Maximum file size defined
[ ] File type validated
[ ] Filename sanitized
[ ] Storage location defined
[ ] Access rules defined
[ ] Malware/security review performed where appropriate
[ ] Untrusted files are not executed
```

See:

`09-security-standards.md`

---

# 27. RFQ Conditional Fields

The RFQ form should support conditional fields when appropriate.

Example:

```text
User selects:
Product

Then:
Product selector appears.
```

Another example:

```text
User selects:
Project

Then:
Project Location
Project Timeline
Project Scope
may appear.
```

Conditional fields should reduce unnecessary form complexity.

---

# 28. RFQ Form Configuration

Conceptually:

```js
const rfqConfig = {
  showCompany: true,
  showQuantity: true,
  showBudget: false,
  showTimeline: true,
  showProjectLocation: true,
  allowAttachments: false
};
```

The exact implementation may differ.

The system should support configuration rather than separate RFQ systems for each sector.

---

# 29. Sector-Specific RFQ Configuration

### Automotive

```text
Vehicle / Model
Preferred Year
Purchase Intent
Trade-in where approved
Test Drive Request
```

### Manufacturing

```text
Product
Model
Quantity
Specification
Delivery Location
Timeline
```

### Construction

```text
Project Type
Project Location
Scope
Timeline
Drawings/Documents
```

### Engineering

```text
Discipline
Service
Project Scope
Location
Timeline
Technical Requirement
```

### Import / Export

```text
Product
Quantity
Destination
Country
Delivery Requirements
```

### Real Estate

```text
Property Type
Location
Budget
Move/Purchase Timeline
Requirements
```

These are examples of optional configurations, not mandatory fields.

---

# 30. Non-RFQ Inquiry Forms

Not every lead should be an RFQ.

Examples:

```text
Healthcare:
Appointment Request

Education:
Information Request

Hotel:
Accommodation Inquiry

Travel:
Trip Inquiry

Consulting:
Consultation Request
```

The same lead system may support these different workflows.

---

# 31. Appointment Request

For healthcare or other appointment-oriented clients, a request form may include:

```text
Name
Email
Phone
Service / Specialist
Preferred Date
Preferred Time
Message
```

This remains a request unless an actual appointment booking engine is separately contracted.

---

# 32. Hotel Inquiry

A hotel inquiry may include:

```text
Name
Email
Phone
Accommodation Type
Check-in
Check-out
Guests
Message
```

This does not create a reservation or payment system.

---

# 33. Travel Inquiry

A travel inquiry may include:

```text
Name
Email
Phone
Destination / Tour
Travel Date
Number of Travelers
Trip Preferences
Message
```

The agency receives an inquiry rather than automatically confirming a booking.

---

# 34. Vehicle Inquiry

Possible fields:

```text
Name
Email
Phone
Vehicle
Preferred Contact Method
Test Drive Request
Message
```

Test-drive requests should be treated as leads unless a proper scheduling system is separately approved.

---

# 35. Property Inquiry

Possible fields:

```text
Name
Email
Phone
Property
Budget where appropriate
Preferred Contact Method
Message
```

---

# 36. Education Information Request

Possible fields:

```text
Name
Email
Phone
Program
Level
Preferred Contact Method
Message
```

The website does not automatically become an admissions system.

---

# 37. Consulting Request

Possible fields:

```text
Name
Company
Email
Phone
Service
Industry
Project Scope
Preferred Date
Message
```

The exact fields depend on the client's sales process.

---

# 38. Lead Routing

Every lead form must have an identified destination.

Possible destinations:

```text
Sales Email
General Email
Department Email
Branch Email
Approved CRM
Backend Storage
External Form Service
```

Do not build a lead form without determining where the submission goes.

---

# 39. Department Routing

Where useful, leads may be routed based on selected content.

Example:

```text
Product Inquiry
    ↓
Sales Department

Service Inquiry
    ↓
Professional Services Team

Healthcare Appointment
    ↓
Appointments Contact

Education Information
    ↓
Admissions
```

The routing logic must be configured explicitly.

---

# 40. Location-Based Routing

For multi-location businesses:

```text
Selected Location
       ↓
Branch Contact
       ↓
Appropriate Destination
```

Example:

```text
Addis Ababa Branch
    ↓
branch-a@example.com
```

Only implement this when the client actually has separate contacts.

---

# 41. Lead Routing Configuration

Conceptually:

```js
const leadRouting = {
  rfq: {
    destination: "sales@example.com"
  },
  healthcareAppointment: {
    destination: "appointments@example.com"
  }
};
```

Actual implementation may differ.

---

# 42. Lead Delivery Methods

Possible methods:

### Email

Simplest option for many Starter/Business Growth clients.

### API

Useful when integrating with another approved system.

### Database

Useful when the project requires internal lead history.

### CRM

Only when separately integrated and approved.

---

# 43. CRM Boundary

Business Growth does not automatically include CRM integration.

A CRM integration is a custom/add-on feature.

Examples:

```text
Salesforce
HubSpot
Zoho
Custom CRM
```

If integrated, the project requires separate:

* Authentication
* API specification
* Data mapping
* Error handling
* Security review
* Testing

---

# 44. Lead Storage

Storing leads in the project's database is optional.

Use persistent storage when the business actually needs:

* Lead history
* Searchable inquiries
* Internal review
* Status tracking
* Reporting

For simple sites, email delivery may be sufficient.

---

# 45. Lead Storage Model

If persistent storage exists:

```text
Lead
├── Contact Information
├── Request Information
├── Source
├── Context
├── Status
├── Created At
└── Updated At
```

Sensitive data must be handled according to the security/privacy requirements.

---

# 46. Lead Status

If lead storage exists:

```text
New
Reviewing
Qualified
Responded
Closed
Archived
```

The actual lifecycle may be smaller.

Do not build a complex CRM workflow simply because the database supports statuses.

---

# 47. Lead Source Tracking

Track where the lead originated.

Possible values:

```text
homepage
services
service-detail
products
product-detail
projects
project-detail
blog
contact
rfq
location
```

This helps determine which website areas generate interest.

---

# 48. Campaign Source Tracking

Where required, support campaign parameters such as:

```text
utm_source
utm_medium
utm_campaign
utm_content
```

These should be handled consistently with the analytics implementation.

Do not store or expose unnecessary tracking data.

---

# 49. Conversion Tracking

Important conversion events should include:

```text
contact_submit
rfq_submit
product_inquiry
service_inquiry
project_inquiry
appointment_request
consultation_request
phone_click
email_click
whatsapp_click
```

Event names should remain consistent.

---

# 50. Lead Funnel

A Business Growth website can measure:

```text
Visitor
   ↓
Content View
   ↓
CTA Interaction
   ↓
Form Start
   ↓
Form Submit
   ↓
Qualified Lead
```

The website can measure the earlier stages.

"Qualified Lead" may require a separate sales process and must not be claimed solely from website analytics.

---

# 51. Form Start Tracking

For complex forms, track:

```text
form_start
```

when the user meaningfully begins the form.

Do not count every page load as a form start.

---

# 52. Form Error Tracking

Track form failure where useful.

Possible event:

```text
form_error
```

Do not include sensitive form content in analytics parameters.

---

# 53. Successful Submission

A conversion should fire only when the submission has actually succeeded.

Preferred:

```text
Submit
  ↓
Validate
  ↓
Process
  ↓
Success
  ↓
Conversion Event
```

Not:

```text
Submit Click
  ↓
Conversion
```

---

# 54. Duplicate Submission Prevention

Forms should reduce accidental duplicate submissions.

Possible methods:

* Disable submit while processing
* Idempotency where appropriate
* Submission state
* Server-side duplicate controls

Do not create duplicate leads when a visitor double-clicks the submit button.

---

# 55. Rate Limiting

Public forms must be protected against abuse where applicable.

Especially:

```text
RFQ
Contact
Appointment
Inquiry
```

Appropriate controls may include:

* Rate limiting
* CAPTCHA/Turnstile
* Honeypot
* Request throttling
* Validation

---

# 56. Spam Protection

Spam protection should be proportional.

The agency should balance:

```text
Security
+
Lead quality
+
Low friction
```

Do not make a simple inquiry form unnecessarily difficult to submit.

---

# 57. Validation

Forms require:

### Client-side validation

For user experience.

### Server-side validation

For security when a backend exists.

Never treat frontend validation as the security boundary.

---

# 58. Required Fields

Required fields should be chosen based on business need.

Example:

Manufacturing RFQ:

```text
Name → Required
Email → Required
Phone → Recommended
Product → Required
Quantity → Required
```

Hotel inquiry:

```text
Name → Required
Email → Required
Check-in → Optional/Required depending on workflow
```

There is no universal required-field list.

---

# 59. Field Labels

Labels must be understandable.

Prefer:

```text
Project Location
```

over:

```text
Location*
```

where additional context is necessary.

---

# 60. Placeholder vs Label

Do not use placeholder text as the only label.

Example:

```text
Label:
Company Name

Input placeholder:
Enter your company name
```

This improves accessibility and usability.

---

# 61. Form Grouping

Long forms should use meaningful groups.

Example:

```text
CONTACT INFORMATION

REQUEST DETAILS

PROJECT INFORMATION

ADDITIONAL INFORMATION
```

Groups should reflect the user's mental model.

---

# 62. Progressive Disclosure

Use conditional fields to keep forms short.

Example:

```text
What do you need?

[Product]
[Service]
[Project]
```

Then show relevant fields.

Do not expose every possible field immediately.

---

# 63. Form Completion

A successful submission should provide:

```text
Clear Success Message
+
Next-Step Information
```

Example:

> Your request has been received. Our team will contact you using the information provided.

Only promise response times that the client actually provides.

---

# 64. Failed Submission

If submission fails:

* Explain that the request could not be completed.
* Preserve entered information where safe and practical.
* Allow retry.
* Do not expose server details.

Example:

> We couldn't send your request. Please try again.

---

# 65. Network Failure

If the browser cannot reach the backend:

```text
User
  ↓
Submit
  ↓
Network Failure
  ↓
Clear Error
  ↓
Retry
```

Do not silently lose the inquiry.

---

# 66. Email Delivery Failure

If the website accepts the form but downstream email delivery fails, the system must be designed so the failure is detectable where possible.

Avoid:

```text
Form says "sent"
```

when the lead has clearly failed to reach its destination.

The exact behavior depends on the chosen architecture.

---

# 67. Lead Confirmation

After successful submission:

```text
Success
  ↓
Confirmation
  ↓
Optional next action
```

Possible next actions:

* Return to relevant content
* View related services
* Download resource
* Contact by phone
* Open WhatsApp

Do not overwhelm the user with multiple unrelated CTAs.

---

# 68. Lead Privacy

Lead forms should collect only information required for the business purpose.

Avoid collecting:

* Passwords
* Payment details
* National IDs
* Unnecessary sensitive information

unless explicitly required, legally justified, and separately designed.

---

# 69. Sensitive Industry Considerations

Healthcare, education, and other sectors may involve personal or sensitive information.

The Business Growth package should not assume that basic forms are sufficient for sensitive workflows.

If a client's workflow involves:

* Medical records
* Student records
* Financial information
* Identity documents
* Sensitive legal information

the requirement must be escalated for a specialized architecture and security review.

Do not casually add sensitive data collection to a general-purpose contact form.

---

# 70. Healthcare Boundary

A healthcare inquiry form may request basic appointment/contact information.

It should not request detailed medical records or sensitive clinical information unless explicitly designed and secured for that purpose.

---

# 71. Education Boundary

An information request may collect:

* Name
* Email
* Phone
* Program of interest

It should not become a student application/management system unless separately scoped.

---

# 72. Real Estate Boundary

A property inquiry can collect basic interest information.

It should not automatically collect:

* Banking details
* Financial documents
* Identity documents

unless a separately designed secure workflow exists.

---

# 73. Automotive Boundary

A vehicle inquiry or test-drive request should not automatically become a booking system.

It remains:

```text
Lead
   ↓
Dealer Follow-Up
```

unless scheduling functionality is separately approved.

---

# 74. Hotel Boundary

An accommodation inquiry does not automatically create:

* Availability management
* Reservation confirmation
* Payment processing
* Guest account

Those are separate booking capabilities.

---

# 75. Travel Boundary

A travel inquiry does not automatically provide:

* Booking
* Payment
* Ticketing
* Inventory
* Reservation management

It generates an inquiry for the travel business.

---

# 76. Lead Attachments

If attachment upload is enabled, the system must record:

```text
File Name
File Type
File Size
Associated Lead
```

Do not accept arbitrary unrestricted files.

---

# 77. File Naming

Uploaded files should receive safe server-side handling.

Never trust the visitor-provided filename as the storage identifier.

---

# 78. Lead Data Retention

If leads are stored:

The project should define:

```text
What data is stored
Why it is stored
Where it is stored
Who can access it
How long it is retained
```

Do not retain lead information indefinitely without a reason.

---

# 79. Lead Access Control

If leads are stored in a backend:

```text
Public Website
    ↓
Submit Lead
    ↓
Backend
    ↓
Protected Storage
```

Leads must not be publicly retrievable through unsecured endpoints.

---

# 80. Public API Restrictions

The website must never expose an endpoint that allows unauthenticated visitors to retrieve all submitted leads.

Incorrect:

```text
GET /api/leads
```

without appropriate authorization.

---

# 81. Lead Error Handling

Public users should not see:

```text
Database Error
SMTP Error
CRM API Error
Stack Trace
```

Instead:

```text
Unable to process your request.
Please try again or contact us directly.
```

Technical details should be logged securely where appropriate.

---

# 82. Lead Routing Failure

If a lead cannot be routed:

The system should:

1. Detect the failure.
2. Log the failure securely.
3. Avoid falsely reporting success where possible.
4. Provide an appropriate user response.
5. Support recovery/retry.

---

# 83. Lead Confirmation Emails

Optional confirmation emails may be sent to visitors.

Example:

> We received your inquiry.

Do not promise:

> We will respond within 2 hours.

unless the business has actually committed to that SLA.

---

# 84. Internal Notification

Optional internal notification may be sent to:

```text
Sales
Marketing
Admissions
Appointments
Reservations
Management
Branch
```

The routing must be configured according to the client.

---

# 85. Lead Notification Security

Notification emails should not unnecessarily contain sensitive information.

If lead content includes personal information, use reasonable security controls.

---

# 86. WhatsApp Lead Flow

WhatsApp is an external lead channel.

Flow:

```text
Website
   ↓
WhatsApp CTA
   ↓
WhatsApp
   ↓
Business Conversation
```

Analytics may track:

```text
whatsapp_click
```

but the website cannot claim that a successful WhatsApp conversation occurred.

---

# 87. Phone Lead Flow

```text
Website
   ↓
tel: link
   ↓
Phone Application
```

Analytics:

```text
phone_click
```

This represents a click, not a confirmed call.

---

# 88. Email Lead Flow

```text
Website
   ↓
mailto:
   ↓
Email Application
```

Analytics may track:

```text
email_click
```

Do not collect the contents of the resulting email.

---

# 89. Lead CTA on Detail Pages

Important detail pages should usually have an appropriate action.

Example:

```text
Product:
Request Quote

Service:
Request Consultation

Property:
Enquire Now

Vehicle:
Request Test Drive

Tour:
Request Trip Information
```

The action must be aligned with the client's actual sales process.

---

# 90. Sticky Lead CTA

A sticky mobile CTA may be useful for high-intent content.

Example:

```text
[ Request Quote ]
```

or:

```text
[ Enquire ]
```

It must:

* Be visually clear.
* Not obstruct content.
* Remain accessible.
* Follow the approved UI.

---

# 91. Lead CTA Placement

Do not place CTAs randomly.

High-value placement opportunities include:

```text
Hero
After key product/service information
After proof
After project results
At bottom of detail page
Contact page
```

The exact placement is defined by the approved UI.

---

# 92. CTA Frequency

The website should provide enough opportunities to convert without becoming aggressive.

Avoid:

```text
CTA
CTA
CTA
CTA
CTA
```

in every section.

Use CTAs at meaningful decision points.

---

# 93. Lead Qualification

The website may collect information that helps the business understand lead quality.

Examples:

```text
Company
Industry
Project Type
Budget Range
Timeline
Quantity
Location
```

However:

> **Lead qualification should remain proportional to the business process.**

Do not create a twenty-field form just because more information could theoretically be useful.

---

# 94. Conversion Friction

Reduce unnecessary friction.

Good:

```text
Relevant fields
Clear labels
Short form
Useful defaults
Clear CTA
```

Poor:

```text
Long form
Unnecessary questions
Confusing terminology
Multiple required fields
No indication of why information is needed
```

---

# 95. Lead UX Testing

Every lead flow must be tested for:

```text
[ ] Understandability
[ ] Field relevance
[ ] Validation
[ ] Mobile usability
[ ] Keyboard usability
[ ] Success state
[ ] Error state
[ ] Routing
[ ] Analytics
```

---

# 96. Lead Analytics

At minimum, Business Growth analytics should be capable of measuring:

```text
CTA Click
Form Start
Form Submit
Form Error
Phone Click
Email Click
WhatsApp Click
RFQ Start
RFQ Submit
```

Only implement events that are relevant to the enabled features.

---

# 97. Lead Funnel Metrics

Possible reporting:

```text
CTA Clicks
       ↓
Form Starts
       ↓
Form Submissions
       ↓
Lead Count
```

These metrics describe website interactions.

They should not be represented as confirmed sales unless the business system provides that data.

---

# 98. Lead Source Reporting

Where analytics supports it, measure:

```text
Homepage leads
Product leads
Service leads
Project leads
Blog leads
Contact leads
RFQ leads
```

This helps identify the most valuable website content.

---

# 99. Campaign Attribution

Where campaign tracking is enabled, lead records/analytics may preserve:

```text
UTM Source
UTM Medium
UTM Campaign
UTM Content
```

Do not store unnecessary personal tracking information.

---

# 100. Spam and Abuse Monitoring

Monitor:

```text
Repeated submissions
Unusual request volume
Suspicious payloads
Invalid repeated requests
```

Where appropriate, use:

* Rate limiting
* CAPTCHA/Turnstile
* Honeypot
* WAF/hosting controls

---

# 101. Lead System Performance

Lead forms should respond quickly.

Optimize:

* Validation
* API requests
* Payload size
* Third-party calls
* Email delivery

Do not delay form submission with unnecessary animations or analytics requests.

---

# 102. Lead System Availability

If analytics fails:

```text
Lead submission must continue.
```

If a decorative third-party service fails:

```text
Lead submission must continue.
```

The lead system must prioritize business-critical functionality.

---

# 103. Fallback Contact Methods

Where appropriate, provide fallback contact methods:

```text
Phone
Email
WhatsApp
```

This is especially useful if a form service experiences an outage.

---

# 104. Failure Recovery

If a primary lead form temporarily fails:

```text
Form Failure
     ↓
Clear Error
     ↓
Fallback Contact Option
     ↓
Phone / Email / WhatsApp
```

The exact fallback depends on the approved UI.

---

# 105. Lead Confirmation Page

A dedicated confirmation page may be used:

```text
/contact/success
/rfq/success
```

or an inline success state may be used.

The exact implementation depends on the approved UI.

---

# 106. Confirmation Page Requirements

A confirmation page should:

* Confirm submission.
* Explain the next step.
* Provide useful navigation.
* Avoid duplicate submission.
* Follow the design system.

---

# 107. Anti-Duplicate Submission

If the user refreshes a success page, the system should not unintentionally resubmit the same lead.

Use appropriate submission handling.

---

# 108. Form State Persistence

If validation fails:

The user's entered information should remain available where practical.

Do not make the user re-enter the entire form after a simple validation error.

For sensitive fields, retention should follow security requirements.

---

# 109. Accessibility for Forms

Forms must provide:

```text
Labels
Required indicators
Error association
Keyboard navigation
Focus management
Accessible success messages
Accessible loading state
```

Errors should be associated with the relevant field.

---

# 110. Accessibility for Error Messages

Example:

```text
Email address
[ input ]

Please enter a valid email address.
```

Avoid errors that appear only through color.

---

# 111. Form Keyboard Navigation

Test:

```text
Tab
Shift + Tab
Space
Enter
```

The form must have a logical focus order.

---

# 112. Mobile Form UX

On mobile:

```text
[ ] Inputs fit screen
[ ] Labels remain visible
[ ] Keyboard does not obscure important controls
[ ] Selects are usable
[ ] File upload is usable where enabled
[ ] Submit button is reachable
[ ] Error messages are visible
```

---

# 113. Lead Model and Content Model Relationship

Lead data must reference the appropriate content model when applicable.

Examples:

```text
Product Inquiry
      ↓
Product ID

Service Inquiry
      ↓
Service ID

Project Inquiry
      ↓
Project ID

Property Inquiry
      ↓
Property ID

Vehicle Inquiry
      ↓
Vehicle ID

Tour Inquiry
      ↓
Tour ID
```

This is how lead generation remains connected to the content architecture.

---

# 114. Lead Model and Analytics Relationship

Analytics may measure:

```text
Content View
       ↓
CTA Click
       ↓
Form Start
       ↓
Form Submit
```

This allows the business to understand conversion behavior.

---

# 115. Lead Model and CRM Extension

If a CRM is later added:

```text
Website Lead Model
       ↓
Data Mapping
       ↓
CRM Lead
```

The Business Growth lead architecture should therefore remain structured and predictable.

---

# 116. CRM Extension Boundary

CRM integration must not require rewriting every form.

The system should allow:

```text
Lead
   ↓
Routing Adapter
   ├── Email
   ├── Database
   ├── CRM
   └── External Service
```

where technically appropriate.

---

# 117. Lead Routing Adapter

Conceptually:

```js
async function submitLead(lead) {
  // Validate
  // Process
  // Route
}
```

The implementation architecture may use services, APIs, or another pattern.

The important principle is separation between:

```text
Lead Creation
```

and:

```text
Lead Delivery
```

---

# 118. Lead Data Contract

Every lead submission should have a predictable structure.

Example:

```json
{
  "type": "rfq",
  "name": "John Doe",
  "company": "Example Company",
  "email": "john@example.com",
  "phone": "+251...",
  "message": "We are interested in...",
  "source": "product-detail",
  "context": {
    "type": "product",
    "id": "product-001",
    "title": "Hydraulic Press"
  }
}
```

Actual implementation may add or remove fields according to requirements.

---

# 119. Validation Contract

The system must define which fields are:

```text
Required
Optional
Conditional
```

Example:

```text
RFQ
Name → Required
Email → Required
Phone → Optional
Product → Required
Quantity → Conditional
Budget → Optional
Attachment → Optional
```

---

# 120. Lead Generation Component Reuse

The following should generally be reusable:

```text
InquiryCTA
InquiryForm
RFQForm
FormField
FormSuccess
FormError
ContactMethod
LeadConfirmation
```

Sector-specific behavior should come from configuration.

---

# 121. Lead Generation and Design System

Lead components must follow:

```text
02-design-system.md
```

The visual appearance must come from the approved client UI.

The AI must not create an independent form design.

---

# 122. Lead Generation and Page Templates

Lead components must integrate with:

```text
03-page-template-specification.md
```

Examples:

```text
Product Detail
→ Product Inquiry

Service Detail
→ Consultation

Project Detail
→ Project Inquiry

Property Detail
→ Property Inquiry

Vehicle Detail
→ Vehicle Inquiry

Tour Detail
→ Trip Inquiry
```

---

# 123. Lead Generation and Content Model

Lead components must use:

```text
05-content-model-and-content-structure.md
```

to obtain context.

Example:

```text
Product
   ↓
Product Inquiry CTA
   ↓
Product Context
   ↓
Lead
```

---

# 124. AI Implementation Rules

The AI coding agent must:

```text
[ ] Read the lead-generation specification
[ ] Read the content model
[ ] Reuse existing form components
[ ] Reuse existing CTA components
[ ] Preserve contextual lead data
[ ] Implement validation
[ ] Implement success/error states
[ ] Preserve analytics events
[ ] Follow security requirements
[ ] Avoid inventing fields
[ ] Avoid inventing routing
```

---

# 125. AI Must Not Invent Sales Processes

The AI must not decide:

> "This company needs a customer dashboard."

or:

> "This form should automatically create a CRM pipeline."

unless the requirement explicitly exists.

Business Growth provides lead generation, not an automatic CRM.

---

# 126. AI Must Not Invent Response Promises

The AI must not write:

```text
We will contact you within 24 hours.
```

unless the business has approved that statement.

It must use approved client communication expectations.

---

# 127. Lead Generation Testing Checklist

Before launch:

```text
FORMS
[ ] Valid submission
[ ] Invalid submission
[ ] Required fields
[ ] Optional fields
[ ] Conditional fields
[ ] Long inputs
[ ] Mobile
[ ] Keyboard

RFQ
[ ] Context attached
[ ] Correct product/service
[ ] Correct routing
[ ] Success state
[ ] Error state

LEAD ROUTING
[ ] Destination works
[ ] Notification works
[ ] Database works where applicable
[ ] CRM works where applicable

ANALYTICS
[ ] CTA click
[ ] Form start
[ ] Submission
[ ] Error
```

---

# 128. Security Testing Checklist

```text
[ ] Server-side validation
[ ] Input limits
[ ] Rate limiting where appropriate
[ ] Spam protection
[ ] No raw HTML rendering
[ ] No sensitive data leakage
[ ] No exposed API credentials
[ ] File upload restrictions
[ ] Secure lead storage
[ ] Secure lead access
```

---

# 129. Lead Generation Acceptance Criteria

The lead system is considered complete when:

```text
[ ] Appropriate lead actions exist
[ ] CTA terminology matches the sector
[ ] Contextual inquiries work
[ ] RFQ works where enabled
[ ] Contact works
[ ] Validation works
[ ] Success state works
[ ] Error state works
[ ] Leads reach the intended destination
[ ] Analytics tracks configured conversions
[ ] Security controls are implemented
[ ] Mobile experience works
[ ] Accessibility requirements are satisfied
[ ] No unnecessary form fields exist
```

---

# 130. Sector Coverage Acceptance

The lead-generation architecture must be capable of supporting:

```text
Automotive
    → Vehicle Inquiry / Test Drive

Manufacturing
    → Product RFQ

Construction
    → Project Inquiry / Consultation

Engineering
    → Consultation

Import / Export
    → Product RFQ

Hotels & Resorts
    → Accommodation Inquiry

Education
    → Information Request

Healthcare
    → Appointment Request

Travel
    → Trip Inquiry

Real Estate
    → Property Inquiry

Consulting
    → Consultation Request
```

Not every project uses every flow.

The template must simply be capable of supporting them.

---

# 131. Lead Generation Performance

Lead forms should remain lightweight.

Avoid unnecessary:

* JavaScript
* API calls
* third-party scripts
* animations
* validation requests

Every request should have a purpose.

---

# 132. Lead Generation Monitoring

Where maintenance includes monitoring, review:

```text
Submission success
Submission failures
Spam volume
API failures
Email delivery
Third-party failures
```

Do not invent or report metrics that have not been measured.

---

# 133. Lead Generation Maintenance

Maintenance may include:

* Updating form fields
* Updating destinations
* Updating email addresses
* Updating CTA labels
* Fixing submission errors
* Updating spam protection
* Reviewing conversion tracking

Adding a new lead type may be a new feature depending on scope.

---

# 134. Lead Generation Documentation

Each project should document:

```text
Lead Types:
Contact
RFQ
Product Inquiry
...

Destinations:
sales@example.com
...

Analytics:
rfq_submit
contact_submit
...

Storage:
Email / Database / CRM

Protection:
Rate Limiting / CAPTCHA / etc.
```

No passwords or secrets should be documented.

---

# 135. Lead Generation Change Control

If the client requests a new lead workflow:

```text
Request
   ↓
Determine whether existing workflow can be configured
   ↓
If yes:
Configure

If no:
Determine new feature scope
   ↓
Estimate
   ↓
Approve
   ↓
Implement
```

---

# 136. Final Lead-Generation Architecture

The Business Growth lead system should ultimately follow:

```text
                        WEBSITE
                           │
                ┌──────────┼──────────┐
                │          │          │
             Product     Service    Project
                │          │          │
                ↓          ↓          ↓
             Inquiry    Inquiry    Inquiry
                │          │          │
                └──────────┼──────────┘
                           ↓
                       LEAD MODEL
                           │
               ┌───────────┼───────────┐
               ↓           ↓           ↓
             Email       Database     CRM
             optional     optional    optional
               │           │           │
               └───────────┼───────────┘
                           ↓
                     BUSINESS FOLLOW-UP
```

---

# 137. Final Principle

The Business Growth lead-generation system must be:

**Contextual**
The visitor should be able to inquire about what they are actually viewing.

**Configurable**
Different industries need different forms.

**Reusable**
The agency should not rebuild lead infrastructure for every client.

**Simple**
A company website does not need a CRM just to collect an inquiry.

**Secure**
Lead information must be validated and protected.

**Measurable**
Important conversion actions should be trackable.

**Accessible**
Forms and CTAs must remain usable across devices and input methods.

**Business-oriented**
Every lead mechanism should exist because it supports an actual business goal.

The target architecture is:

```text
RIGHT CONTENT
     ↓
RIGHT CTA
     ↓
RIGHT FORM
     ↓
RIGHT CONTEXT
     ↓
RIGHT DESTINATION
     ↓
MEASURABLE LEAD
```

The package should therefore provide the infrastructure needed to turn a rich business website into a practical lead-generation asset without accidentally expanding into a CRM, booking system, e-commerce platform, or enterprise application.

```
```
