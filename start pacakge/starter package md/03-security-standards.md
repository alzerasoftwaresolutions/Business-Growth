# `03-security-standards.md`

````md
# Stonebridge Construction
# Starter Presence — Security Standards

**Version:** 1.0  
**Status:** Approved for Development  
**Package:** Starter Presence

---

# 1. Purpose

This document defines the minimum security standards that must be followed when developing, testing, deploying, and maintaining a Starter Presence website.

Security requirements apply to:

- Frontend
- Backend, when required
- Contact forms
- APIs
- Third-party integrations
- Environment variables
- Hosting
- Domain configuration
- Dependencies
- User-submitted data
- Production deployment

The objective is to provide a secure company website without introducing unnecessary complexity.

---

# 2. Security Principles

Every project must follow these principles:

1. Never trust user input.
2. Never expose secrets to the browser.
3. Validate data on the server whenever a backend exists.
4. Use HTTPS in production.
5. Keep dependencies updated.
6. Minimize exposed functionality.
7. Use least privilege.
8. Do not store unnecessary personal information.
9. Do not expose internal system information to users.
10. Fail securely.
11. Log security-relevant failures without exposing sensitive information.
12. Security controls must not unnecessarily change the approved UI.

---

# 3. Security Scope

The Starter Presence package normally has limited functionality.

Typical security-sensitive areas include:

```text
Contact Form
     ↓
Input Validation
     ↓
Spam / Abuse Protection
     ↓
Email / API Processing
     ↓
Third-Party Service
````

Other possible areas:

```text
WhatsApp
Google Maps
Social Media
Analytics
Hosting
Domain
DNS
Contact APIs
```

Only features actually used by the project need to be secured.

Do not introduce authentication, databases, or backend services when they are not required.

---

# 4. HTTPS / TLS

Every production website must use HTTPS.

Requirements:

```text
HTTP
  ↓
HTTPS
```

The production site must not intentionally serve sensitive functionality over plain HTTP.

Where supported, HTTP requests should redirect to HTTPS.

Verify:

```text
[ ] HTTPS certificate is valid
[ ] Certificate covers the production domain
[ ] HTTP redirects to HTTPS
[ ] No mixed-content warnings
[ ] Forms submit through HTTPS
[ ] External API requests use HTTPS where supported
```

---

# 5. Environment Variables

Secrets must never be hard-coded into source code.

Never commit:

```text
API keys
Passwords
Database credentials
JWT secrets
Private tokens
SMTP passwords
Cloudinary secrets
Third-party private keys
```

Use environment variables.

Example:

```env
DATABASE_URL=...
JWT_SECRET=...
SMTP_PASSWORD=...
API_SECRET=...
```

---

# 6. Frontend Environment Variables

Frontend environment variables are not automatically secret.

Anything exposed to the browser can potentially be inspected by users.

For example:

```env
VITE_API_URL=https://api.example.com
```

may be acceptable.

But this is not:

```env
VITE_DATABASE_PASSWORD=...
VITE_PRIVATE_API_SECRET=...
VITE_JWT_SECRET=...
```

Never expose private credentials through frontend environment variables.

---

# 7. `.gitignore`

Sensitive files must not be committed.

At minimum, verify that appropriate environment files are ignored:

```text
.env
.env.local
.env.development.local
.env.production.local
```

Before pushing to Git:

```text
[ ] No secrets in source code
[ ] No secrets in Git history
[ ] Environment files ignored
[ ] No private certificates committed
[ ] No production credentials committed
```

---

# 8. Secret Rotation

If a secret is accidentally exposed:

1. Treat it as compromised.
2. Revoke or rotate the secret.
3. Replace it in the deployment environment.
4. Remove it from source code.
5. Check Git history if necessary.
6. Review affected services.

Do not assume deleting the secret from the latest commit is sufficient.

---

# 9. Contact Form Security

The contact form is one of the primary attack surfaces of a Starter Presence website.

The form must protect against:

* Invalid input
* Spam
* Automated submissions
* Malicious payloads
* Email injection
* Excessive requests
* Unexpected content

---

# 10. Client-Side Validation

Client-side validation improves user experience.

Examples:

```text
Name → Required
Email → Valid email format
Phone → Valid expected format
Message → Required
```

However:

> **Client-side validation is not a security boundary.**

Users can bypass browser validation.

---

# 11. Server-Side Validation

When a backend exists, all submitted data must be validated server-side.

Example:

```text
Request
   ↓
Parse
   ↓
Validate
   ↓
Sanitize / Normalize
   ↓
Process
```

Reject invalid requests.

Do not assume the frontend has already validated the data.

---

# 12. Input Limits

Every user-controlled field should have reasonable limits.

Example:

```text
Name:
Maximum length → reasonable business limit

Email:
Maximum length → reasonable business limit

Phone:
Maximum length → reasonable business limit

Message:
Maximum length → reasonable business limit
```

Do not accept unlimited text.

Limits should prevent accidental and abusive oversized requests.

---

# 13. Input Sanitization

User-provided content must be handled safely.

Do not directly inject untrusted HTML into the page.

Avoid unsafe patterns such as:

```js
dangerouslySetInnerHTML()
```

unless there is a specific documented requirement and the content has been properly sanitized.

Prefer rendering user content as text.

---

# 14. Email Injection Protection

If contact form submissions are forwarded through email:

Do not directly place untrusted input into email headers.

Potentially dangerous fields include:

```text
To
From
CC
BCC
Reply-To
Subject
```

The implementation must use a trusted mail library/service and treat user input as data, not email headers.

---

# 15. Spam Protection

Public contact forms should include appropriate anti-abuse controls.

Possible controls:

* Rate limiting
* CAPTCHA / Turnstile
* Honeypot field
* Submission timing checks
* IP-based controls where appropriate
* Server-side validation

The chosen approach should match the project's traffic and hosting environment.

Do not add excessive friction to legitimate visitors.

---

# 16. Rate Limiting

If a backend/API handles contact submissions, rate limiting should be implemented.

Example concept:

```text
Client
  ↓
Too many requests?
  ├── Yes → Reject
  └── No  → Process
```

Rate limits should be appropriate for the endpoint.

Do not apply unnecessarily aggressive limits that prevent legitimate users from contacting the company.

---

# 17. API Security

If a backend exists:

* Validate request bodies.
* Validate query parameters.
* Validate path parameters.
* Restrict HTTP methods.
* Return appropriate status codes.
* Rate-limit public endpoints.
* Avoid exposing internal errors.
* Avoid unnecessary endpoints.

Public endpoints should expose only the functionality required by the website.

---

# 18. HTTP Methods

Only required methods should be enabled.

For example, a contact endpoint may require:

```text
POST /api/contact
```

It should not automatically expose:

```text
PUT
PATCH
DELETE
```

unless required.

---

# 19. CORS

If frontend and backend are separate:

```text
Frontend
   ↓
Backend API
```

CORS must be explicitly configured.

Production should allow only approved origins.

Avoid:

```text
Access-Control-Allow-Origin: *
```

for sensitive APIs unless there is a documented reason.

Example:

```text
Allowed Origin:
https://clientdomain.com
```

Development origins may be allowed separately.

---

# 20. Security Headers

Production websites should use appropriate security headers.

Depending on the hosting architecture, consider:

```text
Content-Security-Policy
Strict-Transport-Security
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
```

The exact configuration must not break:

* Approved UI
* Images
* Fonts
* Maps
* Analytics
* Contact functionality
* Other approved third-party integrations

Security headers must be tested after implementation.

---

# 21. Content Security Policy

Where practical, configure a Content Security Policy.

The policy should allow only required resources.

Potential sources include:

```text
self
approved image hosts
approved font providers
approved analytics services
approved maps services
approved API domains
```

Do not blindly copy a CSP from another project.

The policy must reflect the actual project dependencies.

---

# 22. Clickjacking Protection

The website should prevent unauthorized framing where appropriate.

Use appropriate security headers such as:

```text
Content-Security-Policy: frame-ancestors ...
```

or equivalent platform controls.

If legitimate embedding is required, document the exception.

---

# 23. MIME-Type Protection

Where supported, use:

```text
X-Content-Type-Options: nosniff
```

This helps prevent browsers from incorrectly interpreting resources as another content type.

---

# 24. Referrer Policy

Configure an appropriate referrer policy.

The policy should avoid unnecessarily exposing sensitive URL information to external websites.

A reasonable default should be selected according to the project's needs.

---

# 25. Permissions Policy

Restrict browser features that the website does not need.

Examples:

```text
camera
microphone
geolocation
payment
usb
```

Do not grant unnecessary browser capabilities.

If Google Maps or another approved feature requires a capability, configure only what is necessary.

---

# 26. Authentication

Authentication is **not part of the standard Starter Presence package**.

Do not create:

* Login pages
* User registration
* Password recovery
* User dashboards
* Customer accounts

unless explicitly required.

If authentication is added as an approved feature, it requires additional security specifications.

---

# 27. Database Security

A database is not required for every Starter Presence website.

If a database is used:

* Use environment variables for credentials.
* Use a dedicated database user.
* Grant only required permissions.
* Never expose the database directly to the browser.
* Validate all input.
* Use parameterized queries or a safe ORM.
* Never construct SQL using raw untrusted strings.
* Restrict production database access.
* Back up according to the maintenance plan.

---

# 28. Database Exposure

The browser must never connect directly to a private production database.

Incorrect:

```text
Browser
   ↓
PostgreSQL
```

Correct:

```text
Browser
   ↓
Backend API
   ↓
Database
```

For websites that do not require a database, do not introduce one merely because the technology stack supports it.

---

# 29. File Uploads

File uploads are not part of the standard Starter Presence contact form.

If uploads are explicitly required:

* Restrict file types.
* Restrict file size.
* Validate file content.
* Generate safe filenames.
* Do not trust file extensions.
* Store uploads outside executable paths where appropriate.
* Scan files where appropriate.
* Restrict access.
* Do not allow arbitrary executable files.

File uploads require additional review before production.

---

# 30. Third-Party Services

Third-party services may include:

* Google Maps
* WhatsApp
* Analytics
* Search Console
* Email services
* CAPTCHA services
* Cloud storage
* Hosting platforms

Only use services approved for the project.

Before integration:

```text
[ ] Required service identified
[ ] Official integration documented
[ ] Required domains identified
[ ] Required API keys identified
[ ] Secret/public key distinction verified
[ ] CSP updated if necessary
[ ] Privacy implications reviewed
[ ] Failure behavior tested
```

---

# 31. Google Maps

If Google Maps is included:

* Use the appropriate public integration.
* Restrict API keys where possible.
* Do not expose private server credentials.
* Enable only required APIs.
* Monitor usage.
* Configure domain restrictions where supported.

The map must not expose unnecessary API capabilities.

---

# 32. WhatsApp Integration

WhatsApp links should use the official supported URL format.

Do not collect unnecessary personal information before redirecting the user to WhatsApp.

The website should not claim that a WhatsApp conversation has been submitted as a website form submission.

---

# 33. Analytics

Analytics must not collect unnecessary sensitive information.

Do not send:

* Passwords
* Contact form messages
* Authentication tokens
* Private API responses
* Database credentials
* Sensitive personal information

Analytics configuration must respect the actual services used by the project.

---

# 34. Error Handling

Production errors must not expose internal information.

Avoid responses such as:

```text
Database connection failed:
postgres://user:password@...
```

or:

```text
JWT_SECRET is undefined
```

or stack traces containing internal paths.

Production users should receive a safe message.

Example:

```text
Something went wrong. Please try again later.
```

Detailed information may be recorded securely in server logs where appropriate.

---

# 35. Logging

Logs should help diagnose problems without exposing secrets.

Never log:

```text
Passwords
API secrets
JWT secrets
Database passwords
Authentication tokens
Full private messages
```

Logs may contain:

```text
Timestamp
Request type
Endpoint
Status code
Safe error identifier
Performance information
```

---

# 36. Dependency Security

Before production:

```text
[ ] Dependencies reviewed
[ ] Known critical vulnerabilities addressed
[ ] Unnecessary packages removed
[ ] Lockfile committed
[ ] Production dependencies identified
```

Use the package manager's security audit tools where appropriate.

Do not automatically upgrade every dependency immediately before launch without testing.

---

# 37. Dependency Minimization

Do not install libraries merely because they are popular.

Every dependency adds:

* Maintenance cost
* Security surface
* Bundle size
* Potential vulnerabilities

Prefer:

```text
Required dependency
```

over:

```text
Convenient but unnecessary dependency
```

---

# 38. Secrets in Git History

Security review must consider more than the current files.

If production credentials were previously committed:

```text
Current file clean
```

does not necessarily mean:

```text
Secret secure
```

The credential must be rotated.

For serious exposure, review Git history and remove sensitive material according to the repository's security procedure.

---

# 39. Production Environment Separation

Where applicable, separate:

```text
Development
Staging
Production
```

Do not use production credentials for local development.

Do not use development databases for production.

---

# 40. Hosting Security

Before launch, verify:

```text
[ ] Production domain is correct
[ ] HTTPS is active
[ ] Deployment permissions are restricted
[ ] Environment variables are configured securely
[ ] Production secrets are not exposed
[ ] Unnecessary preview deployments are controlled
[ ] Repository access is restricted
[ ] Hosting account uses strong authentication
```

---

# 41. GitHub / Repository Security

Repository access should follow least privilege.

Recommended:

* Protect the main branch where practical.
* Use pull requests for important changes.
* Review sensitive configuration changes.
* Do not commit secrets.
* Keep dependencies updated.
* Restrict repository permissions.

---

# 42. Administrative Account Security

Important accounts include:

```text
GitHub
Hosting
Domain registrar
DNS provider
Email provider
Analytics
Google services
Third-party APIs
```

Use strong unique passwords and multi-factor authentication where available.

Do not share administrator credentials through chat or source code.

---

# 43. Domain and DNS Security

Before launch:

```text
[ ] Domain ownership verified
[ ] DNS records reviewed
[ ] HTTPS configured
[ ] Unnecessary DNS records removed
[ ] Email DNS records preserved
[ ] SPF configured where email is used
[ ] DKIM configured where email is used
[ ] DMARC considered where email is used
```

Do not modify existing email records without understanding their purpose.

---

# 44. Contact Form Email Security

If the website sends email:

Use a trusted email provider or properly configured SMTP service.

Avoid relying on arbitrary server mail functionality without understanding:

* SPF
* DKIM
* DMARC
* SMTP authentication
* Delivery limits
* Abuse controls

The `From` address should normally be controlled by the configured domain rather than blindly using a visitor's submitted email as the sender.

---

# 45. Personal Data Minimization

Collect only information required for the website's stated purpose.

Typical contact form:

```text
Name
Email
Phone (optional)
Message
```

Do not collect:

```text
National ID
Password
Financial information
Unnecessary demographic information
```

unless there is a legitimate, explicitly approved requirement.

---

# 46. Data Retention

The project should not retain contact information indefinitely without a reason.

If submissions are stored:

```text
Define:
- What is stored
- Why it is stored
- Where it is stored
- Who can access it
- How long it is retained
```

If the package does not require persistent storage, prefer processing inquiries without introducing unnecessary databases.

---

# 47. Privacy

If analytics, contact forms, cookies, or third-party services collect personal information, the project owner should provide appropriate privacy information according to the applicable legal requirements.

Do not invent legal claims.

The development team should implement the technical behavior required by the client's approved privacy requirements.

---

# 48. Security and Accessibility

Security controls must not unnecessarily make the website inaccessible.

Examples:

* CAPTCHA must have an accessible alternative where possible.
* Error messages must be understandable.
* Form validation must be usable with keyboard navigation.
* Security redirects must not create inaccessible loops.
* Third-party widgets must be tested for accessibility where practical.

---

# 49. Security vs User Experience

Security must be proportional to the package.

Do not turn a simple company contact form into an unnecessarily complex authentication system.

The objective is:

```text
Secure
+
Simple
+
Reliable
+
Usable
```

---

# 50. Production Security Checklist

Before deployment:

## HTTPS

```text
[ ] HTTPS enabled
[ ] Certificate valid
[ ] HTTP redirects to HTTPS
[ ] No mixed content
```

## Secrets

```text
[ ] No secrets in source code
[ ] No secrets in frontend bundle
[ ] .env files ignored
[ ] Production secrets configured securely
```

## Forms

```text
[ ] Client validation
[ ] Server validation where applicable
[ ] Input length limits
[ ] Spam protection
[ ] Rate limiting where applicable
[ ] Email injection protection
```

## API

```text
[ ] CORS configured
[ ] Allowed methods restricted
[ ] Request validation enabled
[ ] Rate limits configured
[ ] Errors sanitized
```

## Headers

```text
[ ] CSP reviewed
[ ] HSTS enabled where appropriate
[ ] X-Content-Type-Options configured
[ ] Referrer-Policy configured
[ ] Permissions-Policy reviewed
```

## Dependencies

```text
[ ] Dependency audit completed
[ ] Critical vulnerabilities addressed
[ ] Unnecessary packages removed
```

## Infrastructure

```text
[ ] Domain verified
[ ] DNS reviewed
[ ] Hosting permissions reviewed
[ ] GitHub permissions reviewed
[ ] MFA enabled on important accounts
```

---

# 51. Security Testing

Before production, perform at minimum:

### Functional Security Tests

```text
[ ] Submit valid contact form
[ ] Submit empty form
[ ] Submit invalid email
[ ] Submit oversized input
[ ] Submit unexpected characters
[ ] Submit repeated requests
[ ] Verify error handling
```

### Browser Tests

```text
[ ] HTTPS works
[ ] No mixed content
[ ] Security headers present
[ ] No exposed secrets
[ ] External integrations work
```

### API Tests

If backend exists:

```text
[ ] Invalid request rejected
[ ] Missing fields rejected
[ ] Unsupported methods rejected
[ ] Excessive requests handled
[ ] Unauthorized access rejected where applicable
[ ] Internal errors hidden from users
```

---

# 52. Security Testing Boundaries

Security testing must remain authorized and controlled.

Do not perform destructive testing against:

* Client infrastructure
* Hosting providers
* Third-party services
* Production databases

without explicit authorization.

Testing should focus on the project's own application and approved infrastructure.

---

# 53. Vulnerability Severity

Issues should be prioritized.

### Critical

Examples:

* Exposed production credentials
* Remote unauthorized access
* Database publicly exposed
* Authentication bypass

**Must be fixed before launch.**

### High

Examples:

* Significant injection vulnerability
* Sensitive data exposure
* Broken access control

**Must be fixed before launch.**

### Medium

Examples:

* Missing security headers
* Weak rate limiting
* Non-critical information disclosure

**Should normally be fixed before launch.**

### Low

Examples:

* Minor hardening improvements
* Informational findings

**Can be scheduled if they do not create meaningful risk.**

---

# 54. Security Incident Procedure

If a security issue is discovered after launch:

```text
Identify
   ↓
Assess
   ↓
Contain
   ↓
Rotate / Revoke Credentials if Necessary
   ↓
Fix
   ↓
Test
   ↓
Deploy
   ↓
Monitor
   ↓
Document
```

Do not silently ignore confirmed security issues.

---

# 55. Maintenance Security Requirements

Security does not end at launch.

Maintenance should include:

```text
[ ] Dependency updates
[ ] Security patches
[ ] Hosting updates where applicable
[ ] Domain monitoring
[ ] SSL monitoring
[ ] Backup verification where applicable
[ ] Form abuse monitoring
[ ] Error monitoring
```

Maintenance frequency should follow the selected maintenance plan.

---

# 56. Warranty and Security Issues

The 30-day warranty covers defects related to delivered functionality.

Security defects caused by our implementation should be treated as implementation defects.

The warranty does not automatically cover:

* New security features
* New third-party services
* Client-caused configuration changes
* Compromised third-party accounts
* Changes made outside the delivered system
* Unsupported hosting modifications

---

# 57. AI Coding Security Rules

The AI coding agent must:

```text
[ ] Never hard-code secrets
[ ] Never expose private keys
[ ] Never expose database credentials
[ ] Never put server secrets in VITE_* variables
[ ] Validate untrusted input
[ ] Avoid unsafe HTML injection
[ ] Avoid unnecessary dependencies
[ ] Follow secure API patterns
[ ] Use environment variables correctly
[ ] Avoid exposing internal errors
[ ] Preserve existing security controls
```

The AI must not remove a security control merely because it makes development easier.

---

# 58. AI Must Not Invent Security Exceptions

The AI must not decide:

> "This security check is unnecessary, so I will remove it."

Instead:

1. Understand why the control exists.
2. Check the project requirements.
3. Check the security specification.
4. Preserve it unless explicitly instructed otherwise.

---

# 59. Security Documentation

Project documentation should identify:

```text
Frontend
Backend
Database
External APIs
Email provider
Analytics
Hosting
Domain
DNS
Environment variables
Security controls
```

Sensitive values must never be documented directly.

Document variable names, not secret values.

Example:

```text
DATABASE_URL → required
JWT_SECRET → required
```

Not:

```text
JWT_SECRET=actual-secret-value
```

---

# 60. Final Security Principle

The Starter Presence package should follow:

```text
MINIMAL ATTACK SURFACE
        +
SECURE DEFAULTS
        +
VALIDATED INPUT
        +
PROTECTED SECRETS
        +
HTTPS
        +
CONTROLLED THIRD-PARTY ACCESS
        +
REGULAR MAINTENANCE
        =
SECURE COMPANY WEBSITE
```

Security must be implemented as part of development, not added as an afterthought.

The website should be secure without introducing unnecessary complexity or changing the approved UI/UX design.

**Security controls protect the implementation.
The approved UI controls the visual experience.
Neither should unnecessarily compromise the other.**

```
```
