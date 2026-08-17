# `09-security-standards.md`

````md
# Business Growth
# Security Standards

**Document:** 09-security-standards.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines the security standards specifically required for the Business Growth package.

Business Growth introduces additional attack surfaces compared with Starter Presence because it may contain:

- Contact forms
- RFQ forms
- Product inquiries
- Service inquiries
- Project inquiries
- Appointment requests
- Property inquiries
- Vehicle inquiries
- File uploads
- Search
- Filtering
- Dynamic content
- APIs
- Database-backed content
- Multiple third-party integrations
- Analytics
- Downloadable resources
- Optional CRM integrations
- Optional persistent lead storage

The purpose of this document is to ensure that these features are implemented securely without introducing unnecessary complexity.

---

# 2. Relationship to Starter Presence

The foundational security requirements from Starter Presence remain applicable.

These include:

- HTTPS
- Secure form handling
- Input validation
- Output safety
- Secure environment variables
- Dependency management
- Basic security headers
- Safe error handling
- Git security
- Secret protection

Reference:

`Starter Presence / 03-security-standards.md`

This document does not simply repeat those standards.

It establishes the additional controls required by the richer Business Growth architecture.

---

# 3. Business Growth Security Principle

The security model is:

```text
More Features
     ↓
More Data
     ↓
More Entry Points
     ↓
More Attack Surface
     ↓
Stronger Validation,
Isolation, Access Control,
Monitoring and Recovery
````

Security must therefore be considered at:

```text
Browser
   ↓
Frontend
   ↓
API
   ↓
Business Logic
   ↓
Database
   ↓
File Storage
   ↓
Third-Party Services
```

---

# 4. Security Objectives

The Business Growth implementation must protect:

* Website availability
* Client business information
* Lead submissions
* Uploaded files
* Database content
* API endpoints
* Account credentials
* Third-party service credentials
* Analytics configuration
* Production infrastructure
* Client access
* Website visitors

---

# 5. Security Priorities

Security priorities are:

```text
1. Protect secrets
2. Validate untrusted input
3. Protect lead-generation endpoints
4. Protect uploaded files
5. Control API access
6. Protect stored business data
7. Prevent unauthorized administration
8. Secure third-party integrations
9. Monitor important security events
10. Maintain recovery capability
```

---

# 6. Threat Model

The Business Growth template should consider threats such as:

```text
Spam
Bot submissions
Brute-force requests
Injection attacks
Cross-site scripting
CSRF
Unauthorized API access
Broken access control
Malicious file uploads
Credential exposure
Data leakage
Dependency vulnerabilities
Third-party compromise
Denial-of-service abuse
Path traversal
Open redirects
```

Not every project will require advanced mitigation for every threat, but the relevant risks must be assessed.

---

# 7. Trust Boundaries

The system should distinguish:

```text
Public User
    ↓
Frontend
    ↓
Public API
    ↓
Trusted Server Logic
    ↓
Database / Storage
```

The browser must never be considered a trusted environment.

---

# 8. Client-Side Security Principle

Frontend validation is for user experience.

It is not a security boundary.

Example:

```text
Browser
  ↓
Client Validation
  ↓
API
  ↓
Server Validation
  ↓
Business Logic
```

A malicious user can bypass all frontend JavaScript.

All security-relevant validation must occur on the server when a backend exists.

---

# 9. Authentication Scope

Business Growth does not normally require customer accounts.

The default package does not include:

* Customer login
* User registration
* Customer dashboards
* Membership
* Account management

Authentication may still be required for:

* Internal APIs
* Administrative infrastructure
* CMS
* CRM integrations
* Monitoring tools

Those systems must be separately secured.

---

# 10. No Unnecessary Authentication

Do not add login systems simply because the website has:

* Products
* RFQ
* Contact forms
* Blog
* Downloads

These features do not automatically require user accounts.

Avoid unnecessary authentication complexity.

---

# 11. Lead Form Security

Every lead-generation endpoint must be treated as a public attack surface.

Relevant forms include:

```text
Contact
RFQ
Product Inquiry
Service Inquiry
Project Inquiry
Vehicle Inquiry
Property Inquiry
Tour Inquiry
Appointment Request
Consultation Request
Information Request
```

These endpoints must have:

* Input validation
* Input limits
* Abuse protection
* Error handling
* Rate limiting where appropriate
* Safe storage where applicable

---

# 12. Input Validation

Validate:

* Required fields
* Data types
* String lengths
* Email format
* Phone format where appropriate
* IDs
* URLs
* Dates
* Quantities
* Enumerated values

Never trust browser-supplied values.

---

# 13. Input Length Limits

Define reasonable maximum lengths.

Example:

```text
Name:
100 characters

Company:
200 characters

Email:
254 characters

Message:
5000 characters
```

These are examples and should be adjusted to the actual project.

The purpose is to prevent oversized requests and abuse.

---

# 14. Allowlist Validation

Where possible, use allowlists.

Example:

```text
Lead Type:
contact
rfq
product-inquiry
service-inquiry
```

Do not accept arbitrary strings when the application already knows the valid options.

---

# 15. Enum Validation

For fields such as:

```text
leadType
productType
propertyStatus
vehicleType
serviceCategory
```

validate against known values.

Do not blindly trust values submitted by the client.

---

# 16. SQL Injection Prevention

If PostgreSQL/database queries are used:

* Use Prisma or parameterized queries.
* Never concatenate raw user input into SQL.
* Validate query parameters.
* Restrict dynamic ordering/filtering.

Bad:

```js
query(`SELECT * FROM products WHERE name = '${userInput}'`);
```

Preferred:

```text
Parameterized / ORM query
```

---

# 17. ORM Security

When using Prisma:

* Validate input before database operations.
* Select only required fields where practical.
* Avoid exposing internal database structures.
* Restrict update operations.
* Do not pass arbitrary client objects directly into database update calls.

---

# 18. Mass Assignment Protection

Do not allow the client to submit arbitrary fields that the server blindly writes to the database.

Bad:

```text
request.body
   ↓
database.update(request.body)
```

Preferred:

```text
Allowed Fields
   ↓
Validated Data
   ↓
Database Update
```

---

# 19. Cross-Site Scripting Protection

User-generated or dynamically stored content must not be rendered as arbitrary HTML without sanitization.

Potential sources:

* Contact messages
* RFQ messages
* CMS content
* Blog content
* Query parameters
* External API content

---

# 20. Rich Text Security

If the Business Growth project includes rich text:

```text
Input
  ↓
Validation
  ↓
Sanitization
  ↓
Safe Storage
  ↓
Safe Rendering
```

Do not trust HTML simply because it came from an administrator or database.

---

# 21. React Rendering Safety

Avoid unnecessary use of:

```jsx
dangerouslySetInnerHTML
```

If HTML rendering is genuinely required:

* Sanitize the content.
* Define allowed tags.
* Define allowed attributes.
* Remove scripts and dangerous URLs.
* Test malicious payloads.

---

# 22. Stored XSS

Stored XSS is especially relevant if content is stored in:

* Database
* CMS
* Blog
* Testimonials
* Product descriptions
* Service descriptions

Any stored rich text must be treated as potentially dangerous until sanitized.

---

# 23. Reflected XSS

Check any route that accepts query parameters.

Example:

```text
/search?q=<payload>
```

Search terms must not be inserted into HTML unsafely.

---

# 24. DOM-Based XSS

Avoid unsafe DOM manipulation.

Do not use untrusted values in:

```text
innerHTML
outerHTML
document.write
unsafe URL generation
```

unless appropriately controlled.

---

# 25. CSRF Protection

If the backend accepts authenticated state-changing requests using browser cookies, appropriate CSRF protection should be implemented.

For public lead forms, use an appropriate anti-abuse strategy.

The exact implementation depends on the authentication architecture.

---

# 26. CORS

If a backend exists:

CORS must allow only approved origins.

Example:

```text
Production:
https://clientdomain.com

Development:
http://localhost:5173
```

Production configuration must not unintentionally allow arbitrary origins.

Avoid:

```text
Access-Control-Allow-Origin: *
```

for sensitive authenticated APIs where credentials are involved.

---

# 27. CORS Environment Configuration

Production CORS should come from secure configuration.

Example:

```text
CORS_ORIGIN=https://clientdomain.com
```

Do not hardcode development origins as production fallbacks.

---

# 28. API Authentication

Where protected endpoints exist:

* Require authentication.
* Verify tokens securely.
* Verify authorization.
* Reject expired/invalid credentials.
* Avoid returning excessive account information.

Public content endpoints may remain public.

---

# 29. Authorization

Authentication answers:

> Who are you?

Authorization answers:

> Are you allowed to do this?

Every protected operation must enforce both where applicable.

Example:

```text
Authenticated user
       ↓
Request lead data
       ↓
Authorization check
       ↓
Allowed?
```

---

# 30. Object-Level Authorization

If lead records or other private resources have IDs:

```text
GET /api/leads/:id
```

must not simply return the lead because the ID is known.

The system must verify the requester is authorized to access that specific record.

---

# 31. Public Content APIs

Public APIs should expose only fields intended for public use.

Do not return:

```text
Internal notes
Database metadata
Private contact details
Administrative flags
Internal IDs
Credentials
```

unless required and safe.

---

# 32. API Response Minimization

Return only necessary fields.

Example:

```text
Product Listing
→ title
→ slug
→ thumbnail
→ category
```

Do not return:

```text
internalCost
privateNotes
databaseCredentials
internalRelations
```

that are not required by the frontend.

---

# 33. API Rate Limiting

Public endpoints should have appropriate rate limiting.

High-priority targets:

```text
/contact
/rfq
/inquiry
/search
/authentication endpoints where applicable
```

Rate limits should balance:

```text
Protection
+
Legitimate customer use
```

---

# 34. Abuse Protection

Possible controls:

* Rate limiting
* CAPTCHA / Turnstile
* Honeypot fields
* Request throttling
* IP/device controls where appropriate
* Email verification where justified

Not every form requires every mechanism.

---

# 35. CAPTCHA Principle

Do not place CAPTCHA on every form automatically.

Use it where:

* Spam is significant.
* Abuse is observed.
* Risk justifies it.

The goal is to reduce abuse without creating unnecessary conversion friction.

---

# 36. Honeypot Fields

A hidden honeypot field may be used for basic bot detection.

Rules:

* Must remain invisible to normal users.
* Must not interfere with accessibility.
* Should not be the only protection for high-risk endpoints.

---

# 37. File Upload Security

Business Growth may support attachments for:

* RFQ
* Project inquiry
* Product inquiry
* Technical documents

File uploads create a major additional security surface.

---

# 38. File Upload Allowlist

Define approved file types.

Example:

```text
PDF
DOCX
XLSX
JPG
JPEG
PNG
WEBP
```

Only enable formats actually required by the client.

Avoid unrestricted upload types such as:

```text
.exe
.js
.php
.sh
.bat
```

---

# 39. File Size Limits

Set a maximum size.

Example:

```text
10 MB
20 MB
25 MB
```

The actual limit depends on the business requirement and hosting architecture.

Never allow unlimited uploads.

---

# 40. File Name Sanitization

Do not trust the uploaded filename.

Example:

```text
../../malicious-file.exe
```

must not be used directly as a filesystem path.

Generate safe storage identifiers.

---

# 41. File MIME Validation

Do not rely solely on the browser-provided MIME type.

Where appropriate:

* Inspect file signatures.
* Validate extension.
* Validate MIME.
* Reject inconsistencies.

---

# 42. File Storage

Uploaded files should not automatically be stored in publicly executable directories.

Preferred:

```text
Upload
   ↓
Validation
   ↓
Safe Storage
   ↓
Controlled Access
```

---

# 43. Downloadable Client Resources

Public resources such as approved brochures and catalogs are different from private user uploads.

Still verify:

```text
[ ] File is legitimate
[ ] File has correct extension
[ ] File is not malicious
[ ] File size is reasonable
[ ] Public access is intentional
```

---

# 44. File Access Control

Private lead attachments should not be publicly accessible through predictable URLs.

Example of an insecure pattern:

```text
/uploads/rfq-123/private-document.pdf
```

without authorization.

Private files require controlled access.

---

# 45. Path Traversal Protection

Never allow user input to determine arbitrary filesystem paths.

Bad:

```text
/download?file=../../secret.env
```

File identifiers must map to approved storage records.

---

# 46. Secure Resource Downloads

For private documents:

```text
Authenticated / Authorized Request
        ↓
Verify Permission
        ↓
Retrieve File
        ↓
Return File
```

For public brochures:

```text
Public URL
```

may be appropriate.

---

# 47. Secrets Management

Never store secrets in:

* Git
* Frontend source
* Public assets
* Markdown documentation
* Screenshots
* Client-accessible files

Secrets may include:

```text
DATABASE_URL
JWT_SECRET
API_KEYS
SMTP_PASSWORD
CRM_TOKEN
CLOUDINARY_SECRET
PRIVATE_KEYS
```

---

# 48. Frontend Environment Variables

Remember:

```text
VITE_* 
```

variables are generally exposed to frontend users.

Never put private secrets into frontend environment variables.

Only public configuration belongs there.

---

# 49. Secret Rotation

If a secret is exposed:

```text
Detect
 ↓
Revoke
 ↓
Rotate
 ↓
Update Deployment
 ↓
Verify
 ↓
Investigate Exposure
```

Do not simply remove the secret from the repository and assume the old secret is safe.

---

# 50. Repository Security

Before pushing code:

```text
[ ] No passwords
[ ] No API keys
[ ] No private certificates
[ ] No database credentials
[ ] No production tokens
[ ] No client account credentials
```

Use appropriate secret scanning tools where available.

---

# 51. Git History Security

Removing a secret from the latest commit does not necessarily remove it from Git history.

If a real secret was committed:

* Rotate it immediately.
* Assess exposure.
* Remove sensitive history where appropriate.

---

# 52. Dependency Security

Business Growth uses more packages because it may support:

* Search
* Forms
* Rich media
* Analytics
* Maps
* Uploads
* Filtering

Therefore dependency security requires regular review.

Check:

```text
[ ] Known vulnerabilities
[ ] Dependency age
[ ] Package legitimacy
[ ] Unnecessary packages
[ ] Abandoned dependencies
```

---

# 53. Dependency Update Policy

Security updates should be prioritized.

Before major updates:

```text
Review
 ↓
Update
 ↓
Build
 ↓
QA
 ↓
Deploy
```

Do not blindly run major dependency upgrades in production.

---

# 54. Package Supply Chain

Before adding a package:

Consider:

* Is it necessary?
* Is it trustworthy?
* Is it maintained?
* Is it widely used?
* Does it introduce excessive dependencies?
* Does it collect user data?
* Does it require unnecessary permissions?

Avoid adding libraries simply because they make a small UI task easier.

---

# 55. Third-Party Integration Security

Business Growth may integrate:

* Analytics
* Maps
* Email
* WhatsApp
* Video
* CRM
* Monitoring
* Cloud storage

Each integration creates a trust relationship.

Verify:

```text
[ ] Provider
[ ] Permissions
[ ] Credentials
[ ] Data exchanged
[ ] Privacy impact
[ ] Failure behavior
```

---

# 56. API Key Restrictions

Where third-party APIs support restrictions:

Use:

* Domain restrictions
* IP restrictions
* Service restrictions
* Scope restrictions

Do not expose unrestricted API keys.

---

# 57. CRM Integration Security

If CRM integration is purchased:

The integration should use:

```text
Website
 ↓
Backend
 ↓
CRM API
```

rather than exposing private CRM credentials in the browser.

---

# 58. Email Service Security

When forms use email delivery:

* Store SMTP/API credentials securely.
* Validate recipient configuration.
* Prevent user input from controlling arbitrary recipients.
* Avoid email-header injection.
* Rate-limit public submissions.

---

# 59. Email Header Injection

Never construct email headers directly from untrusted user input.

For example:

```text
From:
To:
CC:
BCC:
Subject:
```

must be controlled by the server/application.

User input should remain within intended message fields.

---

# 60. Spam Mail Abuse

Public forms can be abused to turn the website into a spam relay.

Prevent:

```text
User
 ↓
Arbitrary Recipient
 ↓
Spam
```

Use fixed approved recipient addresses.

---

# 61. WhatsApp Security

WhatsApp links should be built from verified business numbers.

Do not expose unnecessary private numbers.

---

# 62. Analytics Security

Analytics must not receive:

* Email
* Phone
* Medical information
* RFQ text
* Private messages
* Uploaded file names containing sensitive data
* Authentication tokens

unless explicitly justified and approved.

---

# 63. Search Security

Search endpoints should safely handle:

* Arbitrary text
* Special characters
* Long queries
* Repeated requests

Never concatenate search strings directly into SQL.

---

# 64. Search Result Leakage

Search must not expose private/unpublished content.

For example:

```text
Draft Product
```

must not appear publicly merely because it exists in the database.

---

# 65. Filter Security

Filter values must be validated.

Do not allow arbitrary user input to become:

* Raw SQL
* File paths
* Unrestricted sort fields
* Unrestricted database columns

---

# 66. Sorting Security

If users can choose sorting:

Use an allowlist.

Example:

```text
Allowed:
name
date
category

Not allowed:
arbitrary SQL expression
```

---

# 67. Error Handling

Production errors must not reveal:

* Stack traces
* SQL queries
* Database connection strings
* File paths
* Internal service URLs
* Environment variables
* Private IDs
* Library versions where unnecessary

Users should receive a safe generic message.

---

# 68. Logging

Server-side logs may contain technical details required for diagnosis.

However, do not log sensitive information unnecessarily.

Avoid logging:

```text
Passwords
Access tokens
Full credit card data
Private medical data
Authentication secrets
```

---

# 69. Security Logging

Where relevant, log:

* Authentication failures
* Rate-limit events
* Form abuse
* File upload rejection
* Authorization failures
* Unexpected API errors
* Suspicious activity

The exact logging level should be proportional to the system.

---

# 70. Log Retention

Define appropriate retention for security logs.

Do not keep sensitive logs indefinitely without a reason.

---

# 71. Database Security

If PostgreSQL is used:

```text
[ ] Secure credentials
[ ] Restricted network access where supported
[ ] Least-privilege database user
[ ] Backups
[ ] Encryption in transit
[ ] No public database exposure unless explicitly secured
```

---

# 72. Database User Privileges

Application users should receive only necessary permissions.

Do not use a database superuser for ordinary application operations.

---

# 73. Database Exposure

The frontend must never connect directly to a private PostgreSQL database.

Correct:

```text
Browser
 ↓
Backend
 ↓
PostgreSQL
```

---

# 74. Sensitive Lead Data

If leads are stored:

Protect:

```text
Names
Emails
Phone numbers
Company information
Project requirements
Appointments
Messages
Attachments
```

Access must be restricted to authorized personnel.

---

# 75. Data Minimization

Collect only what is necessary.

For example:

If a general contact form only requires:

```text
Name
Email
Message
```

do not automatically add:

```text
Address
Date of birth
National ID
Company revenue
```

---

# 76. Data Retention

Lead records should have a retention policy.

Possible lifecycle:

```text
New
 ↓
Processed
 ↓
Closed
 ↓
Retained for required period
 ↓
Deleted/Archived
```

The actual retention period depends on:

* Client policy
* Legal requirements
* Business needs

---

# 77. Privacy Boundary

The agency should not make legal claims on behalf of the client.

If privacy notices, consent, or data-retention requirements are needed:

* Obtain client-approved language.
* Implement according to agreed requirements.
* Escalate legal uncertainty rather than inventing a policy.

---

# 78. Security Headers

Where appropriate, configure security headers.

Potential headers include:

```text
Content-Security-Policy
Strict-Transport-Security
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
```

Exact configuration depends on the project.

---

# 79. Content Security Policy

A CSP should be designed around actual resources.

Example considerations:

```text
Frontend
Analytics
Maps
Video
Images
API
Fonts
```

Do not simply use an overly permissive policy to make the website work.

---

# 80. CSP Development vs Production

Development and production may require different CSP configuration.

Production should use a deliberate restrictive policy.

Do not leave temporary development exceptions in production.

---

# 81. HTTPS

Production must use HTTPS.

Verify:

```text
[ ] Certificate valid
[ ] HTTP redirects to HTTPS
[ ] Secure API communication
[ ] No mixed-content warnings
```

---

# 82. HSTS

Where appropriate, enable:

```text
Strict-Transport-Security
```

after confirming HTTPS is correctly configured.

Do not enable long preload policies blindly.

---

# 83. Referrer Policy

Configure a reasonable referrer policy to reduce unnecessary information leakage.

Example:

```text
strict-origin-when-cross-origin
```

The actual project may use another appropriate setting.

---

# 84. Permissions Policy

Limit unnecessary browser capabilities.

Examples:

```text
camera
microphone
geolocation
payment
```

Do not grant access to features the website does not need.

---

# 85. Clickjacking Protection

Where appropriate, prevent unauthorized embedding of the website using:

* CSP `frame-ancestors`
* Appropriate legacy headers where needed

unless framing is an intentional business requirement.

---

# 86. Open Redirect Prevention

Do not blindly redirect users to URL parameters.

Bad:

```text
/redirect?url=https://malicious-site.com
```

without validation.

Only allow approved destinations or use safe internal routes.

---

# 87. External Links

For links opened in new windows where appropriate:

```html
target="_blank"
```

should be accompanied by appropriate security attributes such as:

```text
rel="noopener noreferrer"
```

where necessary.

---

# 88. Download Security

Public download links should use trusted destinations.

Do not allow user-supplied URLs to become arbitrary downloadable resources.

---

# 89. URL Validation

If the system accepts URLs from a CMS/database:

Validate:

* Protocol
* Host
* Format
* Allowed destinations where necessary

Avoid blindly rendering dangerous schemes such as:

```text
javascript:
data:
```

where inappropriate.

---

# 90. Content Security for Rich Links

When rendering user-controlled links:

* Allow expected protocols.
* Remove dangerous URL schemes.
* Sanitize attributes.
* Validate external URLs where appropriate.

---

# 91. Authentication Security

Where administrative authentication exists:

Use:

* Strong password policy
* Secure password hashing
* Rate limiting
* Session expiration
* Secure cookies
* MFA where supported
* Account recovery controls

Do not implement authentication casually.

---

# 92. Password Storage

Passwords must never be stored in plaintext.

Use an approved password hashing algorithm.

Do not log passwords.

---

# 93. Session Security

Where sessions are used:

* Secure cookies
* HttpOnly where appropriate
* SameSite settings
* Session expiration
* Session invalidation on logout

---

# 94. JWT Security

If JWT is used:

* Keep the signing secret server-side.
* Use reasonable expiration.
* Validate issuer/audience where appropriate.
* Validate signature.
* Do not store secrets in frontend source.
* Do not put sensitive information inside tokens unnecessarily.

---

# 95. API Token Security

Third-party API tokens should be:

* Server-side where private
* Rotatable
* Scope-limited
* Stored securely

---

# 96. Brute-Force Protection

If login exists for any administrative interface:

Implement:

* Rate limiting
* Attempt monitoring
* Appropriate lockout/throttling
* MFA where available

This is not normally required for public company websites without authentication.

---

# 97. Content Management Security

If a CMS or admin system is separately added:

It must be treated as a security-sensitive application.

Requirements should include:

```text
Authentication
Authorization
MFA
Audit logging
Input validation
Content sanitization
Role-based access
Session security
```

A CMS is outside the default Business Growth package.

---

# 98. Role-Based Access

If an administrative system exists, roles may include:

```text
Administrator
Editor
Content Manager
Sales
```

Only appropriate roles should access lead or business data.

---

# 99. Least Privilege

Every user/service should have only the permissions necessary.

Example:

```text
Analytics
→ Analytics access

Content editor
→ Content access

Sales
→ Lead access

Developer
→ Technical access
```

Avoid giving every user full administrator access.

---

# 100. Third-Party Account Access

For:

* Hosting
* Domain
* Analytics
* Search Console
* CRM
* Monitoring

use delegated access where possible.

Do not share the same account password among the entire team.

---

# 101. Developer Access

Developers should receive only project access necessary to perform their tasks.

When development ends:

```text
[ ] Remove unnecessary access
[ ] Rotate shared credentials where applicable
```

---

# 102. Production Access

Production credentials should not be universally available to every developer.

Use controlled access.

For example:

```text
Developer
→ Development / Preview

Authorized Release Person
→ Production
```

The exact process depends on team size.

---

# 103. Environment Separation

Keep:

```text
Development
Preview/Staging
Production
```

appropriately separated.

Do not allow development credentials to access production data unnecessarily.

---

# 104. Production Data Protection

Never use real production lead data in development without appropriate authorization and data protection.

Prefer:

```text
Synthetic Test Data
```

for development.

---

# 105. Test Data Security

Do not use:

* Real customer phone numbers
* Real customer emails
* Real medical information
* Real student information
* Real confidential project documents

for ordinary testing.

---

# 106. Backup Security

Backups should be:

* Protected
* Access-controlled
* Encrypted where appropriate
* Tested
* Retained according to policy

A backup containing lead data must receive the same protection as production data.

---

# 107. Backup Access

Only authorized personnel should access backups.

Do not place database dumps into public repositories.

---

# 108. Security and Monitoring

Where maintenance monitoring exists, monitor:

```text
Uptime
API errors
Repeated failed submissions
Suspicious form traffic
Certificate issues
Dependency vulnerabilities
```

Monitoring tools must themselves be configured securely.

---

# 109. Security Incident Response

If a security incident occurs:

```text
Detect
  ↓
Assess
  ↓
Contain
  ↓
Rotate/Revoke if necessary
  ↓
Recover
  ↓
Patch
  ↓
Verify
  ↓
Document
```

---

# 110. Credential Exposure Incident

If a password/API key/token is exposed:

```text
1. Revoke
2. Rotate
3. Update configuration
4. Review access
5. Check logs where available
6. Remove exposure from active sources
7. Document incident
```

Do not assume deleting the visible secret is sufficient.

---

# 111. Malicious File Incident

If a malicious upload is detected:

```text
1. Isolate file
2. Prevent access
3. Review storage
4. Check related submissions
5. Scan where appropriate
6. Remove malicious file
7. Review upload controls
8. Document incident
```

---

# 112. Spam Incident

If a public form receives significant spam:

```text
Review
 ↓
Rate-limit
 ↓
Add/improve anti-spam
 ↓
Monitor
 ↓
Re-test legitimate submissions
```

Do not simply block all traffic from a broad region without understanding the impact.

---

# 113. Security Testing

Before launch, test relevant:

```text
[ ] Input validation
[ ] Form abuse
[ ] Rate limiting
[ ] File upload restrictions
[ ] Authorization
[ ] API access
[ ] Error messages
[ ] CORS
[ ] Security headers
[ ] Secrets
[ ] Dependency vulnerabilities
```

---

# 114. Security Testing by Enabled Module

Do not test unused functionality.

Example:

If the client has no:

```text
File Upload
```

do not spend the same effort testing a nonexistent upload system.

If the client has:

```text
RFQ
File Upload
Lead Storage
CRM
```

then those areas require deeper testing.

---

# 115. Security Testing for RFQ

```text
[ ] Invalid input
[ ] Oversized input
[ ] Script injection
[ ] SQL injection attempts
[ ] Repeated submissions
[ ] Rate limits
[ ] File uploads if enabled
[ ] Unauthorized lead access
[ ] Error handling
```

---

# 116. Security Testing for Search

```text
[ ] Long queries
[ ] Special characters
[ ] Script payloads
[ ] SQL injection attempts
[ ] Rate limiting where required
[ ] Draft content leakage
```

---

# 117. Security Testing for Dynamic Content

For product/service/project/article pages:

```text
[ ] Invalid slug
[ ] Missing content
[ ] Archived content
[ ] Unauthorized content
[ ] Invalid relationships
[ ] Malformed API responses
```

The application should fail gracefully.

---

# 118. Security Testing for Multiple Locations

Verify that:

```text
[ ] Correct location appears
[ ] No private information leaks
[ ] Internal fields are not exposed
[ ] Location IDs cannot access unauthorized data
```

---

# 119. Security Testing for Third-Party APIs

Verify:

```text
[ ] Keys are not exposed unnecessarily
[ ] Permissions are restricted
[ ] Error responses are handled
[ ] Rate limits understood
[ ] API failures do not expose secrets
```

---

# 120. Security Review Before Deployment

Before production:

```text
[ ] No secrets in Git
[ ] Production environment secure
[ ] HTTPS active
[ ] CORS correct
[ ] Security headers reviewed
[ ] Forms protected
[ ] Uploads protected
[ ] APIs protected
[ ] Database protected
[ ] Dependencies reviewed
[ ] Error handling reviewed
```

---

# 121. Security and Performance Balance

Security controls must not unnecessarily destroy usability.

Examples:

```text
Good:
Reasonable rate limiting

Good:
Appropriate CAPTCHA

Good:
Secure validation

Poor:
Extremely slow security challenge on every page

Poor:
Blocking legitimate users unnecessarily
```

Security should be proportional to risk.

---

# 122. Security and Accessibility

Security mechanisms must remain accessible.

For example:

CAPTCHA alternatives should be considered where necessary.

Forms should remain usable with:

* Keyboard
* Screen reader
* Mobile devices

---

# 123. Security Documentation

Each project should document:

```text
Security Controls:
HTTPS
Validation
Rate Limiting
Spam Protection
Authentication where applicable
Storage
Backups
Monitoring
```

Do not document actual secrets.

---

# 124. Security Change Management

If a security-sensitive component changes:

```text
Change
 ↓
Security Impact Assessment
 ↓
Implementation
 ↓
Security Test
 ↓
Regression Test
 ↓
Deploy
 ↓
Verify
```

Security-sensitive changes include:

* Authentication
* Forms
* File uploads
* API permissions
* CORS
* CSP
* Database access
* Third-party integrations

---

# 125. AI Security Rules

The AI coding agent must:

```text
[ ] Read security requirements before modifying security-sensitive code
[ ] Preserve existing security controls
[ ] Validate all external input
[ ] Avoid hardcoding secrets
[ ] Avoid exposing private data
[ ] Use safe database queries
[ ] Follow existing auth patterns
[ ] Follow existing CORS configuration
[ ] Preserve security headers
[ ] Secure file uploads
[ ] Test security-sensitive changes
```

---

# 126. AI Must Not Disable Security

The AI must never solve a development error by permanently doing things such as:

```text
Allow all origins
Disable validation
Disable authentication
Disable CSP
Disable HTTPS
Allow all file types
Remove rate limiting
Expose database
Log secrets
```

A temporary local debugging change must not silently become production configuration.

---

# 127. AI Must Investigate Security Errors

If a security control causes an error:

```text
Identify Cause
 ↓
Understand Intended Security Rule
 ↓
Adjust Correctly
 ↓
Test
```

Do not simply remove the control.

---

# 128. AI Must Not Invent Security Claims

The AI must not claim:

> "The site is fully secure."

Instead it should report what was actually checked.

Example:

> "The implemented security controls were reviewed against the project's security checklist."

---

# 129. Security Acceptance Criteria

Business Growth security is considered ready when:

```text
[✓] HTTPS is active
[✓] No secrets are exposed
[✓] Input validation is implemented
[✓] Public forms have abuse protection appropriate to risk
[✓] Server-side validation exists where required
[✓] Database access is protected
[✓] API access is controlled
[✓] File uploads are restricted where enabled
[✓] Sensitive data is minimized
[✓] Error messages are safe
[✓] CORS is configured correctly
[✓] Security headers are reviewed
[✓] Dependencies are reviewed
[✓] Third-party integrations are controlled
[✓] Production configuration has been reviewed
[✓] Security-sensitive workflows have been tested
```

---

# 130. Security Coverage by Business Growth Capability

The security architecture must account for all major capabilities:

```text
Contact
    → Input Validation / Rate Limiting

RFQ
    → Validation / Abuse Protection / Routing

Product Inquiry
    → Context Validation

Service Inquiry
    → Context Validation

Project Inquiry
    → Context Validation

Vehicle Inquiry
    → Context Validation

Property Inquiry
    → Context Validation

Tour Inquiry
    → Context Validation

Appointment Request
    → Data Minimization / Privacy

File Upload
    → Type / Size / Storage / Access Control

Search
    → Query Validation / Abuse Protection

Dynamic Content
    → Output Safety / Publication Control

Database
    → Credentials / Access / Queries

CRM
    → API Security / Secret Management

Analytics
    → Data Minimization / Privacy

Downloads
    → File Integrity / Access Control
```

---

# 131. Security Architecture

The intended architecture is:

```text
                    INTERNET
                        │
                        ↓
                 HTTPS / TLS
                        │
                        ↓
                   FRONTEND
                        │
              ┌─────────┴─────────┐
              │                   │
        Public Content        Lead Actions
              │                   │
              │                   ↓
              │              Validation
              │                   ↓
              │             Rate Limiting
              │                   ↓
              │              Server Logic
              │                   ↓
              │          ┌────────┴────────┐
              │          │                 │
              ↓       Database          Services
          Content      / Storage       / CRM / Email
```

Every trust boundary must be explicit.

---

# 132. Layered Security

Business Growth should use layered controls:

```text
HTTPS
  +
Headers
  +
Validation
  +
Rate Limiting
  +
Output Safety
  +
Access Control
  +
Secret Management
  +
Dependency Security
  +
Monitoring
  +
Backup / Recovery
```

No single control should be treated as sufficient by itself.

---

# 133. Definition of Secure Enough for Package Scope

"Secure" does not mean guaranteeing zero vulnerabilities.

For Starter Presence and Business Growth, the objective is:

> **Implement appropriate, documented, proportional security controls for the features actually delivered.**

If a project requires:

* Payment
* Customer accounts
* Medical records
* Financial transactions
* Advanced booking
* Enterprise integrations
* Sensitive personal data

the project must undergo a deeper security architecture review rather than relying only on this package standard.

---

# 134. Security Escalation

Escalate the project when requirements introduce:

```text
Payment
Authentication
Sensitive medical data
Sensitive financial data
Identity verification
Large private datasets
Government integrations
Enterprise SSO
High-value transaction workflows
```

These may require:

* Additional threat modeling
* Penetration testing
* Specialized architecture
* Legal/privacy review
* Stronger monitoring
* Stronger access control

---

# 135. Final Security Checklist

```text
SECRETS
[ ] No secrets in Git
[ ] No secrets in frontend
[ ] Production secrets managed securely

FORMS
[ ] Validation
[ ] Rate limiting
[ ] Spam protection
[ ] Safe errors

DATABASE
[ ] Secure credentials
[ ] Least privilege
[ ] Parameterized queries
[ ] Protected access

API
[ ] Authorization
[ ] CORS
[ ] Rate limiting
[ ] Response minimization

FILES
[ ] Type validation
[ ] Size limits
[ ] Filename sanitization
[ ] Safe storage
[ ] Access control

FRONTEND
[ ] XSS protection
[ ] Safe URLs
[ ] Safe external links
[ ] CSP reviewed

THIRD PARTY
[ ] API keys restricted
[ ] Credentials protected
[ ] Permissions reviewed

INFRASTRUCTURE
[ ] HTTPS
[ ] Security headers
[ ] Backups
[ ] Monitoring

PRIVACY
[ ] Data minimization
[ ] Sensitive data avoided
[ ] Analytics data reviewed
[ ] Retention considered

TESTING
[ ] Security tests
[ ] Abuse tests
[ ] Upload tests
[ ] Authorization tests
[ ] Production configuration review
```

---

# 136. Final Principle

Business Growth introduces more business capability than Starter Presence.

Therefore the security architecture must grow with it.

The target is:

```text
Richer Content
+
Richer Forms
+
More Integrations
+
More Dynamic Behavior
        ↓
More Controlled Security
```

But security should remain proportional.

The package should not become an unnecessarily complex security platform.

The correct model is:

```text
Understand the Data
        ↓
Identify the Attack Surface
        ↓
Validate Inputs
        ↓
Control Access
        ↓
Protect Secrets
        ↓
Secure Files
        ↓
Secure Integrations
        ↓
Monitor
        ↓
Recover
        ↓
Test
```

The final rule is:

> **Every feature introduced by Business Growth must introduce only the minimum additional attack surface necessary to deliver its business value, and every new attack surface must have an appropriate security control.**

```
```
