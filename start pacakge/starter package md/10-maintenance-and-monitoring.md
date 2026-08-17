# `10-maintenance-and-monitoring.md`

```md
# Stonebridge Construction
# Starter Presence — Maintenance & Monitoring Standards

**Version:** 1.0  
**Status:** Approved for Development  
**Package:** Starter Presence

---

# 1. Purpose

This document defines the standards for maintaining, monitoring, securing, and supporting websites after they have been deployed to production.

The purpose of maintenance is to keep the website:

- Available
- Secure
- Functional
- Fast
- Up to date
- Search-engine friendly
- Compatible with modern browsers
- Free from preventable technical problems

Maintenance begins after successful deployment and continues throughout the agreed maintenance period.

---

# 2. Maintenance Philosophy

A production website is not considered finished simply because it has been launched.

The lifecycle is:

    Design
       ↓
    Development
       ↓
    QA
       ↓
    Deployment
       ↓
    Monitoring
       ↓
    Maintenance
       ↓
    Improvements
       ↓
    Continued Monitoring

Maintenance should be proactive rather than waiting for the client to report a problem.

---

# 3. Maintenance Scope

The standard optional maintenance plan may include:

- Website monitoring
- Security updates
- Software updates
- Dependency updates
- Website backups
- Minor content updates
- Minor image updates
- Domain renewal assistance
- Hosting renewal assistance
- SSL monitoring
- Basic performance monitoring
- Basic uptime monitoring
- Basic technical troubleshooting

The exact services provided depend on the maintenance plan purchased by the client.

---

# 4. Maintenance Plans

Maintenance may be offered as:

- Monthly
- Quarterly
- Yearly

The client should receive a clearly defined scope before purchasing a maintenance plan.

The maintenance plan must specify:

- Included services
- Response expectations
- Update frequency
- Backup frequency
- Content-update limits
- Support method
- Emergency support availability
- Excluded work
- Additional work rates

---

# 5. Maintenance Categories

Maintenance should be divided into:

    01. Availability
    02. Security
    03. Software
    04. Backups
    05. Performance
    06. SEO
    07. Content
    08. Domain
    09. Hosting
    10. Third-party services
    11. Monitoring
    12. Reporting

---

# 6. Uptime Monitoring

Every maintained production website should have uptime monitoring where practical.

Monitor:

- Main website
- API where applicable
- Important public endpoints where applicable

The monitoring system should detect:

- Website unavailable
- Server errors
- Unexpected response codes
- SSL problems where supported

Example:

    Website
       ↓
    Monitoring Service
       ↓
    Health Check
       ↓
    Alert if unavailable

---

# 7. Uptime Monitoring Frequency

The monitoring frequency depends on the monitoring service and maintenance plan.

For standard company websites, regular automated checks are sufficient.

Avoid excessive monitoring that provides no practical benefit.

---

# 8. Uptime Alerting

Alerts should be sent to the responsible team when:

- Website becomes unavailable
- Website remains unavailable
- Website recovers

Where appropriate, alerts may use:

- Email
- Team communication channel
- Monitoring dashboard

Do not send client alerts for every harmless transient event unless the maintenance agreement requires it.

---

# 9. Availability Review

During maintenance reviews verify:

    [ ] Website responds
    [ ] Main pages load
    [ ] HTTPS works
    [ ] DNS works
    [ ] API works where applicable
    [ ] Contact functionality works
    [ ] Hosting service is healthy

---

# 10. SSL Monitoring

Every production website must use HTTPS.

Monitor:

- Certificate validity
- Certificate expiration
- HTTPS availability
- Mixed-content problems

Verify:

    [ ] HTTPS works
    [ ] Certificate is valid
    [ ] Certificate is not approaching expiration
    [ ] HTTP redirects correctly
    [ ] No major browser security warnings

Where the hosting provider automatically manages SSL renewal, still verify that renewal continues to function.

---

# 11. Domain Monitoring

Track:

- Domain name
- Registrar
- Expiration date
- Renewal status
- DNS provider
- DNS records

Maintain a domain record:

    Domain:
    Registrar:
    Expiration:
    Auto-renewal:
    DNS Provider:
    Responsible Account:

Never store passwords inside the project repository.

---

# 12. Domain Renewal

Before domain expiration:

    [ ] Verify ownership
    [ ] Verify renewal status
    [ ] Confirm payment method where applicable
    [ ] Confirm auto-renewal
    [ ] Confirm contact information
    [ ] Confirm DNS remains correct

Domain renewal assistance does not necessarily mean the agency pays the domain renewal cost.

The client remains responsible for domain ownership and renewal fees unless otherwise agreed.

---

# 13. Hosting Monitoring

Monitor the hosting environment for:

- Availability
- Deployment failures
- Resource limitations
- Unexpected errors
- Service incidents
- Billing issues where applicable

The maintenance team should know:

    Hosting Provider:
    Project:
    Account Owner:
    Production URL:
    Deployment Method:

---

# 14. Software Update Policy

Software should be kept reasonably up to date.

This may include:

- React
- Vite
- Tailwind CSS
- Node.js
- Express
- Prisma
- PostgreSQL-related dependencies
- Third-party libraries

Updates must not be performed blindly.

Before significant updates:

    Review
      ↓
    Test
      ↓
    Build
      ↓
    QA
      ↓
    Deploy

---

# 15. Dependency Updates

Before updating dependencies:

    [ ] Review release notes
    [ ] Check breaking changes
    [ ] Check compatibility
    [ ] Update locally
    [ ] Run build
    [ ] Run tests
    [ ] Review visual output
    [ ] Review console
    [ ] Deploy only after verification

Do not update every dependency simply because an update exists.

---

# 16. Security Updates

Security-related updates should receive higher priority.

When a dependency has a known security vulnerability:

    Identify
       ↓
    Assess severity
       ↓
    Check project impact
       ↓
    Apply update/fix
       ↓
    Test
       ↓
    Deploy
       ↓
    Verify

Do not ignore serious security vulnerabilities without documenting the reason.

---

# 17. Security Monitoring

Review for:

- Vulnerable dependencies
- Unexpected authentication failures
- Suspicious requests
- Form abuse
- API errors
- Exposed secrets
- SSL problems
- Unauthorized changes

For simple Starter Presence websites, monitoring should remain proportional to the project's risk.

---

# 18. Secret Management

Never store:

- API keys
- Database passwords
- JWT secrets
- Hosting credentials
- Client passwords
- Private tokens

inside:

- Git repositories
- Frontend source code
- Public assets
- Documentation committed to Git

If a secret is accidentally exposed:

    Revoke
       ↓
    Rotate
       ↓
    Update production
       ↓
    Review exposure
       ↓
    Document incident

---

# 19. Backup Policy

Where the project contains recoverable data or backend infrastructure, backups should be configured.

Potential backup targets:

- Database
- Uploaded assets
- Important configuration
- CMS content
- Client-managed content

For a purely static website, database backups may not be applicable.

---

# 20. Backup Frequency

Backup frequency should depend on how frequently the website changes.

Possible schedules:

    Daily
    Weekly
    Before major changes
    Before database migrations

For low-change company profile websites, frequent backups may be unnecessary if the website can be reliably rebuilt from Git and external assets are separately preserved.

---

# 21. Backup Verification

A backup is not considered reliable simply because a backup job reports success.

Periodically verify:

    [ ] Backup exists
    [ ] Backup is readable
    [ ] Backup is recent
    [ ] Backup contains expected data
    [ ] Restoration process is understood

For critical systems, perform restoration testing.

---

# 22. Git as Source Recovery

The Git repository should remain the primary source for application code.

Maintain:

    Source Code
        ↓
    Git Repository
        ↓
    Tagged/known-good releases
        ↓
    Production

Do not rely exclusively on files stored on the hosting server.

---

# 23. Content Backup

Client-provided content should be preserved appropriately.

Examples:

- Company descriptions
- Service information
- Product information
- Project information
- Images
- Logos
- Contact information

Do not assume that Git is automatically a backup for every external content source.

---

# 24. Performance Monitoring

During maintenance periodically review:

- Page loading
- Image sizes
- JavaScript size
- CSS size
- Third-party scripts
- Core user experience
- Mobile performance

Investigate significant performance degradation.

Refer to:

    05-performance-and-optimization.md

---

# 25. Performance Regression

A website that was fast at launch can become slower over time.

Common causes:

- New images
- Large videos
- Third-party scripts
- Tracking tools
- New dependencies
- Poorly optimized content
- Additional fonts
- Excessive animations

Any significant new content or feature should be checked for performance impact.

---

# 26. SEO Maintenance

Foundational SEO should be periodically reviewed.

Check:

    [ ] Titles
    [ ] Meta descriptions
    [ ] Heading structure
    [ ] Sitemap
    [ ] Robots.txt
    [ ] Canonical URLs
    [ ] Broken links
    [ ] Image alt text
    [ ] Indexability
    [ ] Search Console status where configured

Maintenance does not automatically include an advanced SEO campaign.

---

# 27. Analytics Monitoring

If analytics is included, periodically verify:

- Tracking is still active
- Page views are recorded
- Important events are recorded
- No duplicate tracking exists
- Correct production property is being used

Investigate sudden unexpected tracking loss.

---

# 28. Contact Form Monitoring

The contact form is one of the most important functions of a Starter Presence website.

Periodically verify:

    [ ] Form loads
    [ ] Required fields work
    [ ] Validation works
    [ ] Submission succeeds
    [ ] Success state appears
    [ ] Message reaches destination
    [ ] Spam protection works where applicable

A broken contact form can directly affect business inquiries and should receive high priority.

---

# 29. Third-Party Service Monitoring

Review services integrated into the website.

Examples:

- Google Maps
- WhatsApp
- Analytics
- Email services
- Cloudinary
- Social media links
- Form services

Verify:

    [ ] Service remains available
    [ ] URLs remain valid
    [ ] Credentials remain valid where applicable
    [ ] API limits are not exceeded
    [ ] No service configuration has changed

---

# 30. Broken Link Monitoring

Periodically check important links.

Check:

- Navigation
- CTA buttons
- Internal pages
- External websites
- Social media
- Email links
- Phone links
- WhatsApp links
- Map links

Prioritize links that affect customer conversion.

---

# 31. Content Updates

Minor content updates may include:

- Correcting text
- Updating phone numbers
- Updating email addresses
- Replacing an image
- Updating business hours
- Updating a service description

Minor updates should not alter the approved design system.

---

# 32. Content Update Boundaries

The maintenance plan does not automatically include:

- New page design
- Complete redesign
- New application functionality
- Complex content migration
- E-commerce
- Advanced booking systems
- Customer portals
- Major feature development

These should be treated as new work or an add-on.

---

# 33. Design Preservation

Maintenance must preserve the approved UI.

The following should not be changed casually:

- Color palette
- Typography
- Layout
- Navigation structure
- Component styling
- Spacing system
- Button design
- Card design
- Responsive behavior

The approved:

    Complete Stonebridge Design System Specification

and project UI reference files remain the visual source of truth.

---

# 34. Browser Compatibility

Periodically verify the website against supported modern browsers:

- Chrome
- Edge
- Firefox
- Safari

Major browser updates should be considered when investigating newly reported issues.

---

# 35. Mobile Compatibility

Verify:

- Mobile navigation
- Touch targets
- Forms
- Images
- Buttons
- Text wrapping
- Horizontal overflow
- Responsive sections

The website must continue to work across supported mobile screen sizes.

---

# 36. Accessibility Maintenance

Periodically check:

    [ ] Keyboard navigation
    [ ] Focus states
    [ ] Image alt text
    [ ] Heading hierarchy
    [ ] Color contrast
    [ ] Form labels
    [ ] Link/button clarity

Accessibility should not regress during content or design changes.

---

# 37. Error Monitoring

Where appropriate, use an error-monitoring service.

Monitor:

- JavaScript exceptions
- API failures
- Server errors
- Repeated client-side errors

For a simple static website, extensive error-monitoring infrastructure may not be necessary.

Use monitoring proportional to the project.

---

# 38. Error Severity

Classify problems approximately as:

## Critical

Website unavailable or major business functionality unavailable.

Examples:

- Homepage inaccessible
- Production server failure
- Contact form completely broken
- Major security incident

## High

Important functionality significantly affected.

Examples:

- Several pages broken
- Mobile navigation broken
- Major API failure

## Medium

Limited functionality affected.

Examples:

- One non-critical link broken
- Minor visual issue
- Non-critical third-party integration problem

## Low

Minor cosmetic or content issue.

Examples:

- Small spacing problem
- Typographical issue
- Minor visual inconsistency

---

# 39. Incident Response

For serious production issues:

    Detect
       ↓
    Assess
       ↓
    Contain
       ↓
    Recover
       ↓
    Verify
       ↓
    Document

Do not immediately make multiple unrelated changes.

Identify the cause first.

---

# 40. Maintenance Change Workflow

All meaningful maintenance changes should follow:

    Request
       ↓
    Assess
       ↓
    Implement
       ↓
    Test
       ↓
    Review
       ↓
    Deploy
       ↓
    Verify

Avoid modifying production directly whenever possible.

---

# 41. Emergency Changes

Emergency changes may bypass some normal workflow when necessary to protect:

- Availability
- Security
- Client data
- Critical functionality

Even emergency changes must be:

- Documented
- Tested as much as practical
- Verified after deployment

---

# 42. Maintenance Testing

After any meaningful change:

    [ ] Build succeeds
    [ ] Changed functionality works
    [ ] Navigation works
    [ ] Responsive design remains correct
    [ ] No console errors
    [ ] No obvious visual regression
    [ ] Contact functionality works where relevant

For larger changes, run the complete QA process.

Refer to:

    08-testing-and-qa.md

---

# 43. Monitoring Dashboard

Maintain a simple record containing:

    Website:
    Production URL:
    Hosting:
    Domain:
    SSL:
    Uptime:
    Analytics:
    Error Monitoring:
    Last Backup:
    Last Maintenance:
    Next Maintenance:
    Known Issues:

---

# 44. Maintenance Schedule

A typical maintenance cycle may look like:

## Monthly

    [ ] Uptime check
    [ ] SSL check
    [ ] Domain check
    [ ] Contact form check
    [ ] Broken-link check
    [ ] Security review
    [ ] Dependency review
    [ ] Performance review

## Quarterly

    [ ] Full QA review
    [ ] Browser review
    [ ] Mobile review
    [ ] SEO review
    [ ] Analytics review
    [ ] Backup restoration check where applicable
    [ ] Third-party service review

## Yearly

    [ ] Domain renewal review
    [ ] Hosting renewal review
    [ ] Technology stack review
    [ ] Dependency modernization
    [ ] Security review
    [ ] Design/content review
    [ ] Maintenance plan review

The actual frequency may be adjusted according to the client's plan.

---

# 45. Dependency Maintenance Checklist

    [ ] Check outdated dependencies
    [ ] Check security vulnerabilities
    [ ] Review major-version updates
    [ ] Test updates locally
    [ ] Run production build
    [ ] Run QA
    [ ] Commit changes
    [ ] Deploy
    [ ] Verify production

---

# 46. Hosting Maintenance Checklist

    [ ] Hosting available
    [ ] Deployment healthy
    [ ] Resource usage reasonable
    [ ] Billing status checked where applicable
    [ ] Environment variables intact
    [ ] Logs reviewed
    [ ] No unexpected service errors

---

# 47. Domain Maintenance Checklist

    [ ] Domain active
    [ ] Expiration date recorded
    [ ] Auto-renewal checked
    [ ] DNS correct
    [ ] HTTPS working
    [ ] Contact information current

---

# 48. Security Maintenance Checklist

    [ ] Dependencies reviewed
    [ ] HTTPS verified
    [ ] Secrets protected
    [ ] Authentication reviewed where applicable
    [ ] Forms protected
    [ ] Input validation intact
    [ ] No exposed credentials
    [ ] No suspicious changes
    [ ] Production configuration reviewed

Refer to:

    03-security-standards.md

---

# 49. Performance Maintenance Checklist

    [ ] Page speed reviewed
    [ ] Images optimized
    [ ] Large assets reviewed
    [ ] Third-party scripts reviewed
    [ ] JavaScript bundle reviewed
    [ ] CSS reviewed
    [ ] Mobile performance checked
    [ ] Layout stability checked

---

# 50. SEO Maintenance Checklist

    [ ] Titles verified
    [ ] Meta descriptions verified
    [ ] Sitemap verified
    [ ] Robots.txt verified
    [ ] Canonical URLs verified
    [ ] Broken links checked
    [ ] Indexability checked
    [ ] Analytics/Search Console checked where configured

---

# 51. Content Maintenance Checklist

    [ ] Contact information correct
    [ ] Business hours correct
    [ ] Services current
    [ ] Product information current
    [ ] Project information current
    [ ] Images current
    [ ] Social links correct
    [ ] No placeholder content

---

# 52. Client Support

Clients should have a clear support process.

Document:

    Support Email:
    Support Channel:
    Business Hours:
    Emergency Contact:
    Expected Response:
    Maintenance Plan:

Do not promise response times that are not included in the client's agreement.

---

# 53. Maintenance Request Classification

Client requests should be classified as:

## Included Maintenance

Examples:

- Minor text correction
- Minor image replacement
- Broken-link correction
- Small technical fix

## New Feature

Examples:

- New booking system
- New customer portal
- New dashboard
- New authentication system

## New Page

Examples:

- New Careers page
- New Blog
- New Products page beyond agreed scope

## Redesign

Examples:

- New visual identity
- New layout
- New design system
- Complete homepage redesign

New features, pages, and redesigns may require a separate quotation.

---

# 54. Change Documentation

For meaningful changes record:

    Date:
    Request:
    Reason:
    Changes:
    Developer:
    Testing:
    Deployment:
    Result:

This creates a useful maintenance history.

---

# 55. Maintenance Log

Maintain a simple log:

| Date | Type | Description | Status |
|------|------|-------------|--------|
| YYYY-MM-DD | Security | Dependency update | Completed |
| YYYY-MM-DD | Content | Updated phone number | Completed |
| YYYY-MM-DD | Performance | Optimized images | Completed |
| YYYY-MM-DD | Monitoring | Uptime review | Completed |

---

# 56. Client Maintenance Report

Where reporting is included, a monthly report may contain:

## Website Health

- Availability
- Major incidents
- Maintenance performed

## Security

- Security updates
- Vulnerability review

## Performance

- Performance observations
- Optimization performed

## Content

- Updates completed

## Technical

- Dependency updates
- Hosting changes

## Recommendations

- Recommended future improvements

Do not fabricate metrics.

Only report data that was actually measured.

---

# 57. Maintenance Exclusions

Unless explicitly included, maintenance does not include:

- New features
- Major redesign
- E-commerce
- Advanced booking
- Mobile applications
- ERP integration
- Customer portals
- Large content migrations
- Advanced SEO campaigns
- Marketing campaigns
- Paid advertising
- Third-party service subscription fees
- Domain registration fees
- Hosting fees

---

# 58. Warranty vs Maintenance

Warranty and maintenance are different.

## Warranty

The 30-day warranty covers defects related to delivered functionality.

## Maintenance

Maintenance is an ongoing service that keeps the website healthy after launch.

Warranty does not automatically mean unlimited free maintenance.

---

# 59. Warranty Issue Handling

If a client reports an issue during the warranty period:

    Receive Report
       ↓
    Reproduce Issue
       ↓
    Determine Cause
       ↓
    Confirm Whether Covered
       ↓
    Fix
       ↓
    Test
       ↓
    Deploy
       ↓
    Verify

---

# 60. Monitoring Rules for AI Coding Agents

AI coding agents working on the project must follow these rules:

1. Read the maintenance documentation before making maintenance-related changes.
2. Preserve the approved UI.
3. Do not perform dependency upgrades blindly.
4. Do not modify production environment variables without authorization.
5. Never expose secrets.
6. Never disable security controls simply to fix an error.
7. Test changes before deployment.
8. Review the impact of changes on responsive layouts.
9. Review the impact of changes on SEO.
10. Review the impact of changes on performance.
11. Do not claim a monitoring check was performed if it was not actually performed.
12. Do not invent uptime, analytics, performance, or security metrics.
13. Document meaningful changes.
14. Use the smallest safe change necessary.

---

# 61. AI Maintenance Decision Process

When an AI agent receives a maintenance request:

    Understand Request
          ↓
    Determine Scope
          ↓
    Check Existing Documentation
          ↓
    Identify Affected System
          ↓
    Assess Risk
          ↓
    Make Minimal Change
          ↓
    Test
          ↓
    Review Regression
          ↓
    Deploy if Authorized
          ↓
    Verify
          ↓
    Document

---

# 62. Final Maintenance Checklist

Before marking maintenance complete:

    [ ] Request understood
    [ ] Scope confirmed
    [ ] Correct files changed
    [ ] Approved design preserved
    [ ] No unnecessary changes
    [ ] Build succeeds
    [ ] Relevant tests pass
    [ ] Mobile checked where relevant
    [ ] Desktop checked where relevant
    [ ] No critical console errors
    [ ] Security reviewed
    [ ] SEO reviewed where relevant
    [ ] Performance reviewed where relevant
    [ ] Production verified
    [ ] Change documented

---

# 63. Definition of Healthy Production Website

A healthy Starter Presence website should have:

    ✓ Reliable availability
    ✓ Working HTTPS
    ✓ Valid domain configuration
    ✓ Working navigation
    ✓ Working contact methods
    ✓ No critical production errors
    ✓ Secure configuration
    ✓ Reasonable performance
    ✓ Functional responsive design
    ✓ Correct business information
    ✓ Foundational SEO
    ✓ Valid analytics where included
    ✓ Recoverable source code
    ✓ Appropriate backups where applicable
    ✓ Active monitoring where included

---

# 64. Final Principle

Maintenance is not about constantly changing the website.

It is about preserving and improving the website without introducing unnecessary risk.

The goal is:

    Keep it available.
    Keep it secure.
    Keep it fast.
    Keep it accurate.
    Keep it maintainable.
    Keep it consistent with the approved design.

The website should evolve deliberately, not randomly.
```

This brings your documentation sequence to:

```text
01-information-architecture-and-routing.md
02-design-system.md
03-security-standards.md
04-seo-and-analytics.md
05-performance-and-optimization.md
06-system-architecture-and-technical-standards.md
07-content-and-asset-management.md
08-testing-and-qa.md
09-deployment-and-release.md
10-maintenance-and-monitoring.md
```
