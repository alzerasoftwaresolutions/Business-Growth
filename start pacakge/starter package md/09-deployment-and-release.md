# `09-deployment-and-release.md`

```md
# Stonebridge Construction
# Starter Presence — Deployment & Release Standards

**Version:** 1.0  
**Status:** Approved for Development  
**Package:** Starter Presence

---

# 1. Purpose

This document defines the standard process for preparing, deploying, releasing, verifying, and handing over a Starter Presence website.

The objective is to ensure that every website reaches production in a controlled and repeatable manner.

Deployment is not considered complete when the hosting platform reports:

    "Deployment successful"

The website must also be verified on the real production domain.

The release process is:

    Development
        ↓
    QA
        ↓
    Production Build
        ↓
    Deployment Preparation
        ↓
    Deployment
        ↓
    Production Verification
        ↓
    Client Approval
        ↓
    Release
        ↓
    Monitoring
        ↓
    Handover

---

# 2. Deployment Principles

Every project should follow these principles:

- Never deploy untested code directly to production.
- Never use development credentials in production.
- Never expose secrets in frontend code.
- Never deploy with placeholder content.
- Never launch without verifying the production domain.
- Never assume that a successful build means the website is ready.
- Keep a known-good version that can be restored if a release fails.
- Verify the website after deployment.
- Document the final production configuration.
- Preserve the approved UI design during deployment.

---

# 3. Standard Deployment Architecture

The standard Starter Presence architecture is:

    Client Browser
          ↓
    Custom Domain
          ↓
    HTTPS / SSL
          ↓
    Frontend Hosting
          ↓
    React + Vite Application
          ↓
    Backend API (when required)
          ↓
    Node.js + Express
          ↓
    PostgreSQL (when required)

Depending on the project, a backend and database may not be necessary.

A simple company profile website may use:

    Browser
       ↓
    Domain
       ↓
    Frontend Hosting
       ↓
    React Application

---

# 4. Standard Technology Deployment

Preferred stack:

## Frontend

- React
- Vite
- Tailwind CSS

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL

## Version Control

- Git
- GitHub

## Hosting

Preferred options:

- Vercel
- Railway
- Equivalent hosting provider when project requirements demand it

---

# 5. Environment Structure

Use separate environments where appropriate:

    Local Development
          ↓
    Preview / Staging
          ↓
    Production

Development configuration must never accidentally be used in production.

---

# 6. Environment Variables

Review all environment variables before deployment.

Typical frontend variables may include:

    VITE_API_URL=
    VITE_ANALYTICS_ID=

Typical backend variables may include:

    DATABASE_URL=
    JWT_SECRET=
    NODE_ENV=
    CORS_ORIGIN=

Actual variables depend on the project.

---

# 7. Environment Variable Rules

Never commit secrets to Git.

Do not place secrets inside:

- React source code
- Vite public variables
- HTML
- CSS
- GitHub repositories
- Screenshots
- Documentation
- Client-accessible JavaScript

Remember:

    VITE_* variables are exposed to the frontend.

Only values that are safe to expose publicly should use frontend environment variables.

---

# 8. Production Configuration

Before release verify:

    NODE_ENV=production

where applicable.

Also verify:

- Production API URL
- Production database
- Production domain
- Production CORS configuration
- Production analytics
- Production form configuration
- Production third-party services

Remove development settings.

---

# 9. Pre-Deployment Checklist

Before deployment:

    [ ] All required pages completed
    [ ] Approved UI implemented
    [ ] Client content added
    [ ] Images finalized
    [ ] No placeholder content
    [ ] Navigation tested
    [ ] Forms tested
    [ ] Responsive testing completed
    [ ] Browser testing completed
    [ ] Accessibility review completed
    [ ] SEO review completed
    [ ] Security review completed
    [ ] Performance review completed
    [ ] QA completed
    [ ] Production build succeeds
    [ ] Environment variables reviewed
    [ ] Git changes committed
    [ ] Deployment configuration reviewed

Refer to:

    08-testing-and-qa.md

---

# 10. Repository Preparation

Before release:

    [ ] Correct repository selected
    [ ] Correct branch selected
    [ ] Latest changes committed
    [ ] No accidental files
    [ ] No secrets
    [ ] No local database files
    [ ] No temporary screenshots
    [ ] No debugging files
    [ ] No unnecessary dependencies

Recommended:

    git status

Confirm the working tree contains only intended changes.

---

# 11. Git Release Preparation

Before production deployment:

    git status
    git add .
    git commit -m "Prepare production release"
    git push

Use meaningful commit messages.

Examples:

    feat: add contact form
    fix: correct mobile navigation
    perf: optimize project images
    chore: prepare production release

---

# 12. Branch Strategy

For small Starter Presence projects, a simple workflow may be sufficient:

    main
      ↓
    Production

For projects requiring more control:

    main
      ↓
    staging
      ↓
    production

Do not create unnecessary workflow complexity for simple websites.

---

# 13. Production Build

Always perform a production build before deployment.

Typical command:

    npm run build

The build must:

- Complete successfully.
- Produce the expected output.
- Contain no critical errors.
- Resolve assets correctly.
- Use production environment variables.

---

# 14. Production Preview

Where possible, preview the production build locally.

Typical workflow:

    npm run build
    npm run preview

Test the production build rather than relying only on:

    npm run dev

Development mode can behave differently from production.

---

# 15. Build Verification

After the production build:

    [ ] Build succeeds
    [ ] No critical warnings
    [ ] Images exist
    [ ] Fonts exist
    [ ] CSS loads
    [ ] JavaScript loads
    [ ] Routes work
    [ ] API URL is correct
    [ ] No localhost references

---

# 16. Localhost Detection

Before production deployment, search the project for development URLs.

Examples:

    localhost
    127.0.0.1
    http://localhost:3000
    http://localhost:5173

Production code must not depend on local development services.

---

# 17. Domain Preparation

The client must provide or approve:

- Domain name
- Domain registrar access where required
- DNS access where required

Examples:

    example.com
    www.example.com

The final domain should be confirmed before launch.

---

# 18. Domain Configuration

Configure DNS according to the selected hosting provider.

Typical records may include:

    A
    CNAME
    TXT

The exact records depend on the hosting provider.

Do not invent DNS values.

Use the values provided by the actual hosting platform.

---

# 19. DNS Verification

After configuring DNS:

    [ ] Root domain resolves
    [ ] www domain resolves where required
    [ ] DNS records are correct
    [ ] No conflicting records
    [ ] Hosting provider recognizes domain
    [ ] HTTPS becomes available

DNS propagation may take time.

Do not repeatedly change DNS records unnecessarily while propagation is occurring.

---

# 20. HTTPS / SSL

Every production website must use HTTPS.

Verify:

    https://example.com

and where applicable:

    https://www.example.com

Check:

    [ ] Valid certificate
    [ ] No certificate warnings
    [ ] HTTP redirects to HTTPS
    [ ] No mixed-content warnings

---

# 21. Canonical Domain

Choose one primary domain format.

For example:

    https://example.com

or:

    https://www.example.com

Redirect the alternative version to the canonical version where appropriate.

Avoid having two independently accessible versions of the same website.

---

# 22. Frontend Deployment

For a Vercel-style deployment:

    GitHub Repository
          ↓
    Hosting Project
          ↓
    Build Command
          ↓
    Production Build
          ↓
    Deployment
          ↓
    Custom Domain

Verify:

    [ ] Repository connected
    [ ] Correct project selected
    [ ] Correct framework detected
    [ ] Build command correct
    [ ] Output directory correct
    [ ] Environment variables configured
    [ ] Domain configured

---

# 23. Backend Deployment

When the project requires a backend:

    GitHub
       ↓
    Backend Hosting
       ↓
    Node.js
       ↓
    Express
       ↓
    PostgreSQL

Verify:

    [ ] Backend starts
    [ ] Production environment enabled
    [ ] Database connected
    [ ] API routes accessible
    [ ] CORS configured
    [ ] Secrets configured
    [ ] Logs contain no critical errors

---

# 24. Database Deployment

If PostgreSQL is required:

    [ ] Production database created
    [ ] DATABASE_URL configured
    [ ] Database schema applied
    [ ] Required migrations completed
    [ ] Database connection verified
    [ ] Credentials secured
    [ ] Backup strategy considered

Do not use a developer's local PostgreSQL database as the production database.

---

# 25. Database Migration Rules

Before applying production migrations:

    [ ] Migration reviewed
    [ ] Database backup available where appropriate
    [ ] Migration tested
    [ ] Production environment confirmed
    [ ] Rollback/recovery strategy considered

Never run destructive database commands in production without explicit authorization and a recovery plan.

---

# 26. CORS Verification

If a backend exists, verify that the production frontend domain is allowed.

Example:

    https://example.com

must not accidentally fall back to:

    http://localhost:5173

Verify:

    [ ] Production origin configured
    [ ] Development origin not incorrectly used
    [ ] API requests succeed
    [ ] Browser does not report CORS errors

---

# 27. API Verification

Test production API endpoints where applicable:

    [ ] Authentication
    [ ] Contact submission
    [ ] Content retrieval
    [ ] Required CRUD operations
    [ ] Error responses
    [ ] Authorization

Only test endpoints that actually exist in the project.

---

# 28. Contact Form Production Test

After deployment, perform a real controlled test.

Verify:

    [ ] Form loads
    [ ] Valid submission works
    [ ] Success message appears
    [ ] Message reaches intended destination
    [ ] Email notification works where configured
    [ ] Spam protection works where implemented

Use a controlled test message rather than unnecessary client/customer data.

---

# 29. Third-Party Services

If the website uses external services, verify each one.

Examples:

    Google Maps
    WhatsApp
    Analytics
    Email service
    Cloudinary
    Form provider
    Social media links

For each service:

    [ ] Correct production configuration
    [ ] Correct account
    [ ] Correct URL/API configuration
    [ ] No development credentials
    [ ] Service works from production

---

# 30. Analytics Release Verification

If analytics is included:

    [ ] Correct production property
    [ ] Tracking installed
    [ ] Page view recorded
    [ ] Important events work
    [ ] No duplicate tracking
    [ ] Development property not used

Refer to:

    04-seo-and-analytics.md

---

# 31. SEO Release Verification

After deployment:

    [ ] Page titles correct
    [ ] Meta descriptions correct
    [ ] URLs correct
    [ ] Sitemap accessible
    [ ] Robots.txt accessible
    [ ] Canonical configuration correct
    [ ] Images have appropriate alt text
    [ ] No accidental noindex
    [ ] No development URLs

---

# 32. Sitemap Production Verification

Open the production sitemap.

Verify:

    [ ] Production domain
    [ ] Correct URLs
    [ ] No localhost
    [ ] No preview URLs
    [ ] No broken URLs

---

# 33. Robots.txt Production Verification

Verify:

    [ ] Correct production rules
    [ ] Important pages accessible to search engines
    [ ] No accidental blocking
    [ ] Sitemap reference correct where applicable

---

# 34. Performance Release Verification

Run performance checks against the production URL.

Verify:

    [ ] Images optimized
    [ ] No unnecessary requests
    [ ] CSS loads correctly
    [ ] JavaScript loads correctly
    [ ] Fonts load correctly
    [ ] No major layout shifts
    [ ] Page is usable on mobile

Refer to:

    05-performance-and-optimization.md

---

# 35. Production Smoke Test

Immediately after deployment:

    1. Open homepage.
    2. Open every main page.
    3. Test navigation.
    4. Test primary CTA.
    5. Test contact form.
    6. Test phone link.
    7. Test email link.
    8. Test WhatsApp.
    9. Test Google Maps.
    10. Test social links.
    11. Check images.
    12. Check mobile layout.
    13. Check browser console.
    14. Check network errors.

---

# 36. Production Browser Test

At minimum verify the production website using:

    Chrome
    Edge
    Firefox
    Safari where available

Test the most important user flows rather than every possible browser feature.

---

# 37. Production Mobile Test

Open the real production domain on mobile.

Verify:

    [ ] Header
    [ ] Mobile navigation
    [ ] Hero
    [ ] Content
    [ ] Buttons
    [ ] Forms
    [ ] Images
    [ ] Footer
    [ ] No horizontal scrolling

---

# 38. Production Console Test

Open browser developer tools.

Check:

    [ ] No JavaScript errors
    [ ] No failed assets
    [ ] No failed API requests
    [ ] No localhost requests
    [ ] No obvious security warnings

---

# 39. Production Network Test

Inspect network requests.

Look for:

    404
    401
    403
    500

Investigate unexpected errors before considering the release complete.

---

# 40. Cache and Asset Verification

After deployment verify that:

    [ ] New CSS is loaded
    [ ] New JavaScript is loaded
    [ ] New images are loaded
    [ ] Old cached assets do not cause broken UI

If the hosting platform provides automatic asset versioning, use it.

Do not introduce aggressive manual caching rules without understanding their effect.

---

# 41. Redirect Testing

Test:

    HTTP → HTTPS

and:

    www → canonical domain

or:

    non-www → canonical domain

depending on the selected configuration.

Also verify important existing URLs if the project is replacing an old website.

---

# 42. 404 Page Testing

Visit an invalid production URL:

    https://example.com/does-not-exist

Verify:

    [ ] 404 page appears
    [ ] User can return to homepage
    [ ] Design matches the system
    [ ] No server crash
    [ ] No sensitive error information

---

# 43. Deployment Rollback

Every production deployment should have a recovery strategy.

Possible rollback methods:

    Previous deployment
    Previous Git commit
    Hosting platform rollback
    Database recovery where necessary

For simple frontend websites, rollback may be as simple as redeploying the previous known-good commit.

---

# 44. Rollback Trigger Conditions

Consider rollback when:

    [ ] Website is inaccessible
    [ ] Major navigation is broken
    [ ] Contact functionality is broken
    [ ] Critical production errors appear
    [ ] Severe responsive regression occurs
    [ ] Major security issue appears
    [ ] Important content is corrupted

Do not leave a known-broken production release live while debugging if a safe rollback is available.

---

# 45. Post-Deployment Monitoring

After release monitor:

    [ ] Uptime
    [ ] Application errors
    [ ] Contact form
    [ ] API health where applicable
    [ ] Analytics
    [ ] Hosting logs

Monitoring requirements may depend on the selected maintenance plan.

---

# 46. First 24-Hour Verification

Where practical, perform an additional check after launch.

Verify:

    [ ] Website remains accessible
    [ ] SSL remains valid
    [ ] Forms continue working
    [ ] No major errors
    [ ] Analytics receives data
    [ ] No unexpected hosting issues

---

# 47. First 7-Day Verification

For projects under an active maintenance plan, review:

    [ ] Uptime
    [ ] Errors
    [ ] Form submissions
    [ ] Performance
    [ ] Search indexing signals where applicable
    [ ] Client-reported problems

---

# 48. Client Handover

After successful deployment provide the client with:

    [ ] Production URL
    [ ] Domain information
    [ ] Hosting information
    [ ] Contact process
    [ ] Basic administration instructions where applicable
    [ ] Maintenance plan information
    [ ] Warranty information

Never provide sensitive infrastructure credentials through insecure communication.

---

# 49. Client Training

The included training should cover:

    [ ] Website overview
    [ ] How inquiries arrive
    [ ] Basic administration where applicable
    [ ] How to request changes
    [ ] Maintenance process
    [ ] Support process

---

# 50. Credentials Handover

If the client owns infrastructure accounts:

    [ ] Domain account
    [ ] Hosting account
    [ ] Analytics account
    [ ] Business email account
    [ ] Third-party services

Ownership and access should be clearly documented.

Never store client passwords inside the project repository.

---

# 51. Documentation Handover

The final project documentation should identify:

    Project:
    Client:
    Production URL:
    Repository:
    Hosting:
    Domain:
    Backend:
    Database:
    Analytics:
    Third-party services:
    Deployment date:
    Warranty expiration:
    Maintenance plan:

Do not document secret values.

---

# 52. Release Versioning

For projects where releases are tracked, use a simple version.

Example:

    v1.0.0

Meaning:

    Major.Minor.Patch

For a first production release:

    v1.0.0

A small bug fix:

    v1.0.1

A new backward-compatible feature:

    v1.1.0

A major redesign or breaking change:

    v2.0.0

For simple client websites, Git commits and hosting deployment history may be sufficient if formal versioning is unnecessary.

---

# 53. Release Notes

For significant releases document:

    Release:
    Date:
    Changes:
    Bug fixes:
    New features:
    Infrastructure changes:
    Known issues:

Example:

    Release: v1.0.0

    Changes:
    - Initial production website
    - Company profile pages
    - Contact form
    - Google Maps integration
    - WhatsApp integration
    - Foundational SEO
    - Responsive design

---

# 54. Deployment Checklist

## Before Deployment

    [ ] QA completed
    [ ] Client content approved
    [ ] Production build succeeds
    [ ] Environment variables configured
    [ ] Secrets secured
    [ ] Git repository clean
    [ ] Domain confirmed
    [ ] Hosting configured
    [ ] Database configured where applicable
    [ ] Backup/recovery strategy considered

## During Deployment

    [ ] Correct branch deployed
    [ ] Correct environment selected
    [ ] Build succeeds
    [ ] Deployment succeeds
    [ ] Domain connected
    [ ] SSL active

## After Deployment

    [ ] Homepage tested
    [ ] All pages tested
    [ ] Navigation tested
    [ ] Forms tested
    [ ] Mobile tested
    [ ] Desktop tested
    [ ] Browser tested
    [ ] Console checked
    [ ] Network checked
    [ ] SEO checked
    [ ] Analytics checked
    [ ] External services checked

---

# 55. Final Release Gate

A release is considered production-ready only when:

    [✓] QA passed
    [✓] Production build passed
    [✓] Deployment succeeded
    [✓] Domain works
    [✓] HTTPS works
    [✓] All primary pages work
    [✓] Navigation works
    [✓] Contact functionality works
    [✓] Mobile layout works
    [✓] Desktop layout works
    [✓] No critical console errors
    [✓] No broken primary resources
    [✓] SEO basics verified
    [✓] Analytics verified where applicable
    [✓] Client content verified
    [✓] Production smoke test passed
    [✓] Rollback option available

---

# 56. Release Approval

The final release should be approved by the responsible developer/team member.

Recommended record:

    Project:
    Version:
    Production URL:
    Deployment Date:
    QA Completed By:
    Deployment Completed By:
    Client Approved:
    Warranty Start:
    Warranty End:
    Maintenance Plan:
    Notes:

---

# 57. AI Coding Agent Deployment Rules

The AI coding agent must not deploy or modify production infrastructure unless explicitly authorized.

Before suggesting deployment, the AI must verify:

    1. Relevant documentation has been read.
    2. Approved UI references are preserved.
    3. QA requirements are satisfied.
    4. Production build succeeds.
    5. Environment configuration is understood.
    6. No secrets are exposed.
    7. Deployment configuration is correct.
    8. Production smoke testing is planned.

The AI must not:

    - Invent production credentials.
    - Invent DNS records.
    - Hardcode secrets.
    - Replace production configuration with localhost.
    - Modify the approved design during deployment.
    - Remove security controls to make deployment work.
    - Claim deployment succeeded without verification.

---

# 58. Deployment Failure Rules

If deployment fails:

    1. Read the actual deployment error.
    2. Identify the root cause.
    3. Do not randomly modify configuration.
    4. Fix the smallest required issue.
    5. Rebuild.
    6. Retest.
    7. Redeploy.
    8. Verify production.

Do not hide errors by disabling security, validation, or build checks.

---

# 59. Production Incident Procedure

If a serious issue is discovered after release:

    Detect
      ↓
    Assess severity
      ↓
    Protect client/users
      ↓
    Roll back if necessary
      ↓
    Investigate
      ↓
    Fix
      ↓
    Test
      ↓
    Redeploy
      ↓
    Verify
      ↓
    Document

---

# 60. Definition of Deployment Complete

Deployment is complete only when:

    Code is deployed
        +
    Domain works
        +
    HTTPS works
        +
    Production configuration works
        +
    Primary functionality works
        +
    Responsive design works
        +
    SEO works
        +
    Analytics works where applicable
        +
    Production smoke test passes
        +
    Client can access the finished website
        +
    Release is documented

---

# 61. Final Principle

A deployment is not simply:

    git push → hosting → done

The Starter Presence release process is:

    Approved Design
          ↓
    Implementation
          ↓
    QA
          ↓
    Production Build
          ↓
    Secure Configuration
          ↓
    Deployment
          ↓
    Domain + SSL
          ↓
    Production Testing
          ↓
    Monitoring
          ↓
    Client Approval
          ↓
    Handover
          ↓
    Warranty / Maintenance
```

This document should be used together with:

```text
01-information-architecture-and-routing.md
02-design-system.md
03-security-standards.md
04-seo-and-analytics.md
05-performance-and-optimization.md
06-system-architecture-and-technical-standards.md
07-content-and-asset-management.md
08-testing-and-qa.md
```

The **approved UI reference files** and the **Complete Stonebridge Design System Specification** remain the visual source of truth. Deployment must not alter the approved design.
