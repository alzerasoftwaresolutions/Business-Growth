# `08-testing-and-qa.md`

````md
# Stonebridge Construction
# Starter Presence — Testing & Quality Assurance Standards

**Version:** 1.0  
**Status:** Approved for Development  
**Package:** Starter Presence

---

# 1. Purpose

This document defines the testing and Quality Assurance (QA) standards for every Starter Presence website before it is delivered to a client.

The purpose is to ensure that the final website is:

- Functionally correct.
- Responsive.
- Visually consistent with the approved UI.
- Accessible.
- Secure at the package level.
- Performant.
- SEO-ready.
- Compatible with modern browsers.
- Free from broken links and missing assets.
- Free from placeholder content.
- Ready for production deployment.

Testing is not performed only at the end of development.

Testing should happen continuously throughout implementation.

---

# 2. QA Principle

The development process should follow:

```text
Design
  ↓
Implementation
  ↓
Test
  ↓
Fix
  ↓
Retest
  ↓
Approve
````

Never assume that a feature works because the code compiles.

A successful build is not the same as a production-ready website.

---

# 3. Testing Levels

The project should be tested at multiple levels:

```text
1. Component Testing
2. Functional Testing
3. Integration Testing
4. Responsive Testing
5. Visual/UI Testing
6. Accessibility Testing
7. Performance Testing
8. SEO Testing
9. Security Testing
10. Browser Testing
11. Content Testing
12. Production Testing
```

Not every project requires a large automated testing framework.

Testing effort should be proportional to the complexity of the website.

---

# 4. Test Environments

Where applicable, use:

```text
Development
    ↓
Preview/Staging
    ↓
Production
```

Do not perform major experimental changes directly on production.

---

# 5. Development Testing

During implementation, continuously verify:

```text
[ ] Page renders
[ ] No runtime errors
[ ] No console errors
[ ] Components render correctly
[ ] Navigation works
[ ] Images load
[ ] Forms behave correctly
[ ] Responsive behavior works
```

Fix errors as they are discovered rather than accumulating them until the end.

---

# 6. Build Testing

Before considering the project complete:

```text
[ ] Production build succeeds
[ ] No build errors
[ ] No unexpected warnings
[ ] Assets resolve correctly
[ ] Routes work
[ ] Environment variables are configured
[ ] Production configuration is correct
```

Run the actual production build rather than testing only the development server.

---

# 7. Functional Testing

Every interactive element must be tested.

Test:

```text
[ ] Navigation links
[ ] Buttons
[ ] CTA buttons
[ ] Contact form
[ ] Phone links
[ ] Email links
[ ] WhatsApp links
[ ] Google Maps links
[ ] Social media links
[ ] Gallery interactions
[ ] Mobile navigation
[ ] Any approved interactive components
```

---

# 8. Navigation Testing

Verify every navigation path.

Example:

```text
Home
 ├── About
 ├── Services
 ├── Projects
 ├── Contact
 └── Additional Page
```

Test:

```text
[ ] Header navigation
[ ] Footer navigation
[ ] CTA navigation
[ ] Internal links
[ ] Logo → Home
[ ] Mobile menu links
[ ] Back navigation
```

No link should lead to:

```text
404
blank page
wrong page
development route
localhost
```

---

# 9. URL Testing

Verify every production URL.

Example:

```text
/
 /about
 /services
 /projects
 /contact
```

Check:

```text
[ ] Correct URL
[ ] Correct page
[ ] Correct title
[ ] Correct content
[ ] Refresh works
[ ] Direct navigation works
```

---

# 10. 404 Testing

Test invalid URLs.

Example:

```text
/random-page
/test
/does-not-exist
```

The application should provide an appropriate 404 experience rather than crashing.

---

# 11. CTA Testing

Every CTA must perform its intended action.

Examples:

```text
Request Consultation
    ↓
Contact page / contact form

View Projects
    ↓
Projects page

Call Us
    ↓
Phone application

WhatsApp
    ↓
WhatsApp conversation

Get Directions
    ↓
Google Maps
```

---

# 12. Contact Form Testing

If the Starter Presence project includes a contact form, test:

```text
[ ] Form displays correctly
[ ] Required fields are enforced
[ ] Valid input is accepted
[ ] Invalid input is rejected
[ ] Email validation works
[ ] Empty fields are handled
[ ] Error messages are understandable
[ ] Success state works
[ ] Submission reaches intended destination
[ ] Duplicate submission behavior is considered
```

---

# 13. Contact Form Validation

Test invalid input such as:

```text
Empty name
Invalid email
Empty message
Extremely long input
Whitespace-only input
Unexpected characters
```

The system should reject invalid input safely.

---

# 14. Form UX

Forms should provide clear feedback.

States:

```text
Default
  ↓
Editing
  ↓
Submitting
  ↓
Success
  OR
Error
```

The user should understand what happened after submission.

Avoid silent failures.

---

# 15. Form Security

Verify:

```text
[ ] Input validation
[ ] Server-side validation where applicable
[ ] Appropriate rate limiting where applicable
[ ] No sensitive data exposed
[ ] No raw user HTML rendering
[ ] Error messages do not expose internal details
```

Refer to:

```text
03-security-standards.md
```

---

# 16. Responsive Testing

Every website must be tested across:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

At minimum verify:

```text
320px
375px
390px
414px
768px
1024px
1280px
1440px
1920px
```

These are test targets, not requirements to create separate layouts for every width.

---

# 17. Mobile Testing

Test:

```text
[ ] Navigation
[ ] Hamburger/menu
[ ] Hero
[ ] Images
[ ] Cards
[ ] Buttons
[ ] Forms
[ ] Footer
[ ] Typography
[ ] Section spacing
[ ] Horizontal overflow
```

There must be no unintended horizontal scrolling.

---

# 18. Tablet Testing

Verify:

```text
[ ] Navigation behavior
[ ] Grid transitions
[ ] Image proportions
[ ] Typography
[ ] Section spacing
[ ] Card layout
[ ] Footer layout
```

The design should not appear like a stretched mobile or compressed desktop layout.

---

# 19. Desktop Testing

Verify:

```text
[ ] Maximum content width
[ ] Grid alignment
[ ] Hero proportions
[ ] Navigation
[ ] Cards
[ ] Images
[ ] Typography
[ ] Footer
[ ] Large-screen whitespace
```

---

# 20. Responsive Layout Rules

Test for:

```text
[ ] No overlapping content
[ ] No clipped content
[ ] No horizontal scrolling
[ ] No unreadable text
[ ] No excessively small buttons
[ ] No broken grids
[ ] No distorted images
[ ] No overflowing cards
```

---

# 21. Visual Regression Testing

The approved UI design is the source of truth.

The implementation must be compared against the approved design reference.

Test:

```text
[ ] Layout
[ ] Spacing
[ ] Typography
[ ] Colors
[ ] Images
[ ] Buttons
[ ] Cards
[ ] Navigation
[ ] Footer
[ ] Responsive behavior
```

Do not allow the AI coding agent to redesign the website while implementing it.

---

# 22. Approved UI Reference Rule

Every project must contain the approved UI references.

Recommended:

```text
project/
├── docs/
│   ├── complete-stonebridge-design-system-specification.md
│   └── ui-reference/
│       ├── home-desktop.png
│       ├── home-mobile.png
│       ├── about-desktop.png
│       ├── about-mobile.png
│       ├── services-desktop.png
│       ├── services-mobile.png
│       ├── projects-desktop.png
│       ├── projects-mobile.png
│       ├── contact-desktop.png
│       └── contact-mobile.png
```

The actual filenames may differ.

The important requirement is that the approved UI references exist and are accessible to the coding agent.

---

# 23. UI Comparison

For each page compare:

```text
Reference
    vs
Implementation
```

Review:

```text
Header
Hero
Section order
Section dimensions
Typography
Colors
Images
Buttons
Cards
Spacing
Footer
```

---

# 24. Design Drift

Design drift occurs when implementation gradually changes the approved design.

Examples:

```text
Different font
Different spacing
Different button shape
Different card style
Different color
Different navigation
Different section order
Different image treatment
```

Design drift must be corrected.

---

# 25. Typography Testing

Verify:

```text
[ ] Correct font loaded
[ ] Correct font weights
[ ] Correct heading sizes
[ ] Correct body size
[ ] Correct line height
[ ] Correct letter spacing
[ ] No unexpected fallback fonts
```

Typography must follow:

```text
complete-stonebridge-design-system-specification.md
```

Do not substitute generic fonts without approval.

---

# 26. Color Testing

Verify:

```text
[ ] Primary color
[ ] Secondary color
[ ] Accent color
[ ] Background colors
[ ] Text colors
[ ] Border colors
[ ] Hover states
[ ] Error/success states
```

Do not introduce arbitrary colors.

---

# 27. Button Testing

Test every button for:

```text
Default
Hover
Focus
Active
Disabled
Mobile
```

Verify:

```text
[ ] Correct size
[ ] Correct typography
[ ] Correct radius
[ ] Correct spacing
[ ] Correct icon placement
[ ] Correct action
```

---

# 28. Hover Testing

On desktop verify:

```text
[ ] Navigation hover
[ ] Button hover
[ ] Card hover
[ ] Image hover where applicable
[ ] Link hover
```

Hover effects must remain consistent with the approved design.

---

# 29. Focus Testing

Keyboard users must be able to identify focused elements.

Test:

```text
Tab
Shift + Tab
Enter
Space
Escape
Arrow keys where applicable
```

Verify:

```text
[ ] Visible focus state
[ ] Logical focus order
[ ] No focus traps
[ ] Interactive elements reachable
```

---

# 30. Keyboard Testing

A user should be able to navigate important functionality without a mouse.

Test:

```text
[ ] Header
[ ] Navigation
[ ] Mobile menu
[ ] Buttons
[ ] Forms
[ ] Links
[ ] Dialogs/sheets if present
```

---

# 31. Accessibility Testing

Check:

```text
[ ] Semantic HTML
[ ] Heading hierarchy
[ ] Alt text
[ ] Keyboard navigation
[ ] Focus indicators
[ ] Color contrast
[ ] Form labels
[ ] Accessible buttons
[ ] Accessible navigation
```

---

# 32. Heading Hierarchy

Verify:

```text
H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2
```

Avoid using headings only for visual styling.

---

# 33. Image Accessibility

Verify:

```text
[ ] Meaningful images have alt text
[ ] Decorative images use appropriate empty alt
[ ] Alt text is not keyword-stuffed
[ ] Important information is not communicated only through images
```

---

# 34. Color Contrast

Verify that text remains readable against its background.

Check:

```text
[ ] Body text
[ ] Headings
[ ] Buttons
[ ] Navigation
[ ] Footer
[ ] Form fields
[ ] Error messages
```

---

# 35. Browser Compatibility

The Starter Presence website should be tested on current versions of:

```text
Google Chrome
Microsoft Edge
Mozilla Firefox
Safari
```

Where possible test both:

```text
Desktop
Mobile
```

---

# 36. Browser-Specific Testing

Look for:

```text
[ ] Layout differences
[ ] Font rendering
[ ] Form behavior
[ ] Navigation behavior
[ ] CSS compatibility
[ ] Image rendering
[ ] JavaScript errors
```

Do not rely exclusively on one browser.

---

# 37. Device Testing

Where physical devices are available, test on:

```text
[ ] Android phone
[ ] iPhone
[ ] Tablet
[ ] Windows desktop/laptop
[ ] macOS device where available
```

Emulators and responsive browser tools may supplement physical testing.

---

# 38. Performance QA

Verify:

```text
[ ] Images optimized
[ ] No unnecessarily large assets
[ ] Fonts optimized
[ ] Lazy loading where appropriate
[ ] No excessive JavaScript
[ ] No unnecessary dependencies
[ ] Fast initial rendering
```

Refer to:

```text
05-performance-and-optimization.md
```

---

# 39. Performance Testing

Measure the production build rather than only localhost.

Check:

```text
[ ] Initial page load
[ ] Largest content element
[ ] Layout stability
[ ] JavaScript execution
[ ] Image loading
[ ] Network requests
```

Use appropriate performance tools where available.

---

# 40. Core Web Vitals

Where applicable, review:

```text
LCP
CLS
INP
```

The goal is to identify significant performance problems before launch.

---

# 41. Network Testing

Test under different network conditions where practical:

```text
Fast connection
Average connection
Slow connection
Mobile network
```

Check:

```text
[ ] Page remains usable
[ ] Images do not break layout
[ ] Loading states are reasonable
[ ] No unnecessary blocking resources
```

---

# 42. Offline / Failed Resource Testing

Where practical, simulate:

```text
Missing image
Failed API request
Failed form submission
Slow request
Network interruption
```

The application should fail gracefully.

---

# 43. Error Handling

Error messages should:

* Be understandable.
* Avoid technical details.
* Avoid exposing secrets.
* Tell the user what to do next where appropriate.

Avoid displaying:

```text
DATABASE_URL=...
JWT_SECRET=...
stack traces
internal file paths
server configuration
```

---

# 44. Console Testing

Before production:

```text
[ ] No JavaScript errors
[ ] No React errors
[ ] No broken resource errors
[ ] No unexpected network errors
[ ] No missing asset warnings
```

Warnings should be reviewed rather than automatically ignored.

---

# 45. Network Request Testing

Inspect browser network activity.

Look for:

```text
[ ] 404 requests
[ ] 500 requests
[ ] Failed API requests
[ ] Missing images
[ ] Missing fonts
[ ] Incorrect URLs
[ ] Requests to localhost
```

No production page should depend on localhost resources.

---

# 46. Environment Testing

Verify production environment variables.

Examples:

```text
API URL
Analytics ID
Form endpoint
Third-party service keys
```

Do not expose secret credentials in frontend code.

Refer to:

```text
03-security-standards.md
```

---

# 47. SEO QA

Verify:

```text
[ ] Page title
[ ] Meta description
[ ] Canonical URL where applicable
[ ] Heading structure
[ ] Sitemap
[ ] Robots.txt
[ ] Image alt text
[ ] Clean URLs
[ ] Open Graph metadata
```

Refer to:

```text
04-seo-and-analytics.md
```

---

# 48. Sitemap Testing

Verify:

```text
[ ] Sitemap exists
[ ] Correct URLs
[ ] No development URLs
[ ] No broken URLs
[ ] No unnecessary private routes
```

---

# 49. Robots.txt Testing

Verify:

```text
[ ] robots.txt exists where required
[ ] Production rules are intentional
[ ] Important pages are not accidentally blocked
[ ] Sitemap reference is correct where applicable
```

---

# 50. Analytics Testing

If analytics is included:

```text
[ ] Tracking installed
[ ] Correct property/account
[ ] Page views recorded
[ ] Important events recorded where configured
[ ] No duplicate tracking
[ ] No test property in production
```

Analytics implementation must follow:

```text
04-seo-and-analytics.md
```

---

# 51. Privacy Testing

If analytics or third-party services are used, verify the implementation is consistent with the project's privacy requirements.

Check:

```text
[ ] Tracking configuration
[ ] Consent requirements where applicable
[ ] Third-party scripts
[ ] Privacy policy requirements
```

---

# 52. Security QA

Before launch:

```text
[ ] HTTPS enabled
[ ] Contact form protected
[ ] Input validation
[ ] No exposed secrets
[ ] No development credentials
[ ] No debug mode
[ ] Secure headers where configured
[ ] No unnecessary public endpoints
```

Refer to:

```text
03-security-standards.md
```

---

# 53. Dependency Testing

Before deployment:

```text
[ ] Dependencies reviewed
[ ] No unnecessary packages
[ ] Known critical vulnerabilities reviewed
[ ] Lockfile committed
[ ] Production dependencies identified
```

Do not upgrade major dependencies immediately before launch without testing.

---

# 54. Link Testing

Run through every link.

Categories:

```text
Internal
External
Email
Phone
WhatsApp
Social
Maps
```

Check:

```text
[ ] Correct destination
[ ] HTTPS where appropriate
[ ] No 404
[ ] No incorrect redirects
```

---

# 55. External Service Testing

If the website uses:

```text
Google Maps
WhatsApp
Analytics
Email service
Cloudinary
CMS
Form service
```

test the integration in the production environment.

---

# 56. Content QA

Verify:

```text
[ ] Correct company name
[ ] Correct contact information
[ ] Correct service descriptions
[ ] Correct project information
[ ] Correct images
[ ] Correct statistics
[ ] Correct testimonials
[ ] Correct certifications
[ ] No placeholders
```

Refer to:

```text
07-content-and-asset-management.md
```

---

# 57. Image QA

Check:

```text
[ ] Images load
[ ] Correct images used
[ ] Correct aspect ratio
[ ] No broken images
[ ] No extreme compression artifacts
[ ] Alt text exists
[ ] Responsive behavior works
```

---

# 58. Font QA

Check:

```text
[ ] Approved fonts are loaded
[ ] Correct font weights exist
[ ] No missing font files
[ ] No unexpected fallback
[ ] Font loading does not break layout
```

---

# 59. Mobile Navigation QA

Test:

```text
Open menu
Close menu
Open page
Navigate
Return
Resize screen
Open menu again
```

Verify:

```text
[ ] Menu opens
[ ] Menu closes
[ ] Correct links
[ ] No background scroll problems where applicable
[ ] Accessible controls
[ ] Correct animation
```

---

# 60. Form UX QA on Mobile

Test:

```text
[ ] Keyboard behavior
[ ] Input visibility
[ ] Labels
[ ] Error messages
[ ] Submit button
[ ] Success message
```

Ensure the keyboard does not make the form unusable.

---

# 61. Touch Target Testing

Interactive controls on mobile should have appropriately sized touch targets.

Test:

```text
[ ] Navigation buttons
[ ] CTA buttons
[ ] Form controls
[ ] Close buttons
[ ] Social icons
```

Avoid tiny controls that are difficult to tap.

---

# 62. Animation Testing

Verify:

```text
[ ] Animations are smooth
[ ] No excessive animation
[ ] No layout jumping
[ ] Animations do not block interaction
[ ] Mobile performance remains acceptable
```

Animations must follow the approved design system.

---

# 63. Reduced Motion

Where animations exist, respect reduced-motion preferences where appropriate.

Test:

```text
prefers-reduced-motion
```

Animations should not create accessibility problems.

---

# 64. Stress Testing

Starter Presence websites generally do not require enterprise-level load testing.

However, where forms, APIs, or dynamic backend services exist, basic stress testing should be performed.

Test areas:

```text
Contact form
API endpoints
Database-backed pages
Image services
Third-party integrations
```

---

# 65. Basic Load Testing

For backend functionality, test multiple requests to identify obvious problems.

Check:

```text
[ ] Server remains responsive
[ ] Requests do not unexpectedly fail
[ ] Database connections remain stable
[ ] Rate limiting works where configured
[ ] Errors are handled safely
```

Do not perform aggressive load tests against production without authorization.

---

# 66. Form Abuse Testing

Test repeated submissions.

Verify:

```text
[ ] Validation
[ ] Rate limiting where applicable
[ ] Spam protection where implemented
[ ] Duplicate handling
[ ] Error handling
```

---

# 67. Large Input Testing

Test maximum reasonable inputs:

```text
Very long name
Very long email
Very long message
Unexpected characters
Whitespace
Repeated characters
```

The application should remain stable.

---

# 68. Accessibility Automated Testing

Use an appropriate accessibility testing tool where available.

Review:

```text
[ ] Missing alt text
[ ] Missing labels
[ ] Heading structure
[ ] Color contrast
[ ] ARIA issues
[ ] Keyboard issues
```

Automated tools do not replace manual accessibility testing.

---

# 69. Manual Accessibility Testing

Perform:

```text
Keyboard-only navigation
Screen reader spot checks where practical
Zoom testing
Color contrast review
Focus testing
```

---

# 70. Zoom Testing

Test browser zoom where practical:

```text
100%
125%
150%
200%
```

Look for:

```text
[ ] Overlap
[ ] Clipping
[ ] Hidden content
[ ] Broken navigation
[ ] Unusable forms
```

---

# 71. Browser Zoom and Responsive Layout

Do not confuse browser zoom with responsive breakpoints.

The website should remain usable when users enlarge content.

---

# 72. Content Overflow Testing

Test unusually long:

```text
Company names
Service names
Project names
Buttons
Testimonials
Addresses
Email addresses
Navigation labels
```

No important content should be clipped.

---

# 73. Empty State Testing

If dynamic content can be empty, test:

```text
No projects
No services
No testimonials
No search results
```

The UI should handle these states intentionally.

---

# 74. Loading State Testing

If dynamic data is loaded:

```text
[ ] Loading state
[ ] Success state
[ ] Error state
[ ] Empty state
```

must be considered.

Do not leave users staring at a blank page.

---

# 75. Deployment Testing

After deployment, test the actual production URL.

Do not assume:

```text
localhost works
=
production works
```

Verify:

```text
[ ] Domain
[ ] HTTPS
[ ] Pages
[ ] Assets
[ ] Forms
[ ] External integrations
[ ] Analytics
[ ] SEO
```

---

# 76. Production Smoke Test

Immediately after deployment:

```text
Open homepage
Open About
Open Services/Products
Open Gallery/Projects
Open Contact
Submit/test contact flow
Click phone
Click email
Click WhatsApp
Open Maps
Check social links
```

---

# 77. Production Error Monitoring

Where monitoring is configured:

```text
[ ] Application errors monitored
[ ] Uptime monitored
[ ] Form failures monitored where possible
[ ] Critical alerts configured
```

Monitoring may be part of the maintenance plan.

---

# 78. Regression Testing

After fixing a bug, retest:

```text
The fixed feature
+
Related features
+
Affected responsive layouts
```

Do not assume a fix cannot break another component.

---

# 79. Regression Checklist

After significant changes:

```text
[ ] Homepage
[ ] Navigation
[ ] Main CTA
[ ] Contact form
[ ] Footer
[ ] Mobile navigation
[ ] Responsive layouts
[ ] External links
[ ] Production build
```

---

# 80. Bug Severity

Classify bugs.

## Critical

Prevents the website from functioning or launching.

Examples:

```text
Website crashes
Production build fails
Contact system completely broken
Major security issue
```

Must be fixed before launch.

## High

Major functionality is broken.

Examples:

```text
Navigation broken
Important page inaccessible
Major responsive issue
```

Must normally be fixed before launch.

## Medium

Noticeable issue with a workaround.

Examples:

```text
Incorrect spacing
Minor browser issue
Non-critical animation problem
```

Should be fixed before launch where practical.

## Low

Minor cosmetic issue.

Examples:

```text
Small alignment difference
Minor visual inconsistency
```

May be scheduled for a later maintenance update if approved.

---

# 81. Bug Report Format

Use:

```text
Title:
Description:
Severity:
Page:
Environment:
Browser:
Device:
Steps to reproduce:
Expected result:
Actual result:
Screenshot/video:
Status:
```

Example:

```text
Title:
Mobile navigation overlaps hero

Severity:
High

Page:
Home

Device:
iPhone

Expected:
Menu opens above content

Actual:
Menu is clipped

Status:
Open
```

---

# 82. QA Tracking

Recommended status:

```text
OPEN
IN PROGRESS
FIXED
RETEST
PASSED
WONT FIX
DEFERRED
```

---

# 83. Test Case Format

For important functionality:

```text
Test ID:
Feature:
Precondition:
Steps:
Expected Result:
Actual Result:
Status:
```

Example:

```text
Test ID:
CONTACT-001

Feature:
Contact Form

Steps:
1. Open Contact page
2. Enter valid name
3. Enter valid email
4. Enter valid message
5. Submit

Expected:
Successful submission message

Status:
PASS
```

---

# 84. Page-by-Page QA

Every page should have a dedicated QA pass.

Typical Starter Presence pages:

```text
[ ] Home
[ ] About
[ ] Services / Products
[ ] Gallery / Projects
[ ] Contact
[ ] Additional approved page
```

---

# 85. Home Page QA

```text
[ ] Header
[ ] Navigation
[ ] Hero
[ ] Primary CTA
[ ] Secondary CTA
[ ] Content sections
[ ] Images
[ ] Statistics
[ ] Testimonials where applicable
[ ] Final CTA
[ ] Footer
```

---

# 86. About Page QA

```text
[ ] Hero/header
[ ] Company information
[ ] Images
[ ] Mission
[ ] Vision
[ ] Values where applicable
[ ] Statistics where applicable
[ ] CTA
[ ] Footer
```

---

# 87. Services / Products Page QA

```text
[ ] All approved items present
[ ] Correct names
[ ] Correct descriptions
[ ] Images
[ ] Links
[ ] CTA
[ ] Mobile layout
```

---

# 88. Gallery / Projects QA

```text
[ ] Correct images
[ ] Correct project names
[ ] Correct metadata
[ ] Correct categories
[ ] Correct links
[ ] Image loading
[ ] Responsive grid
```

---

# 89. Contact Page QA

```text
[ ] Contact information
[ ] Contact form
[ ] Phone
[ ] Email
[ ] WhatsApp
[ ] Google Maps
[ ] Social links
[ ] Business hours
[ ] Mobile layout
```

---

# 90. Footer QA

Verify:

```text
[ ] Logo
[ ] Company description
[ ] Navigation
[ ] Contact information
[ ] Social links
[ ] Copyright
[ ] Legal links where applicable
```

---

# 91. Final Cross-Page QA

After testing individual pages, test the website as one complete system.

Check:

```text
[ ] Consistent header
[ ] Consistent navigation
[ ] Consistent typography
[ ] Consistent spacing
[ ] Consistent buttons
[ ] Consistent footer
[ ] Consistent colors
[ ] Consistent image treatment
```

---

# 92. Final Pre-Deployment QA

Before deployment:

```text
FUNCTIONALITY
[ ] All pages work
[ ] All links work
[ ] Forms work
[ ] CTAs work
[ ] Navigation works

RESPONSIVE
[ ] Mobile
[ ] Tablet
[ ] Desktop
[ ] Large desktop

VISUAL
[ ] Matches approved UI
[ ] Correct typography
[ ] Correct colors
[ ] Correct spacing
[ ] Correct images

CONTENT
[ ] Client content approved
[ ] No placeholders
[ ] No fake content
[ ] Contact information verified

SEO
[ ] Titles
[ ] Meta descriptions
[ ] Sitemap
[ ] Robots
[ ] URLs
[ ] Alt text

SECURITY
[ ] HTTPS
[ ] Validation
[ ] No secrets exposed
[ ] Production configuration secure

PERFORMANCE
[ ] Images optimized
[ ] Production build tested
[ ] No unnecessary assets
[ ] Performance reviewed

ACCESSIBILITY
[ ] Keyboard navigation
[ ] Focus states
[ ] Alt text
[ ] Labels
[ ] Contrast

BROWSER
[ ] Chrome
[ ] Edge
[ ] Firefox
[ ] Safari

PRODUCTION
[ ] Domain
[ ] SSL
[ ] Deployment
[ ] Production smoke test
```

---

# 93. Final QA Gate

A project should not be considered ready for client delivery until:

```text
Critical bugs = 0
High-priority bugs = 0
Known production blockers = 0
Placeholder content = 0
Broken primary functionality = 0
```

Medium and low-priority issues should be documented and explicitly accepted if they remain.

---

# 94. Client Acceptance Testing

Before final delivery, allow the client to review the production website.

The client should verify:

```text
[ ] Company information
[ ] Services/products
[ ] Projects
[ ] Images
[ ] Contact information
[ ] Business details
[ ] Testimonials
[ ] Certifications
```

Client approval should be documented where practical.

---

# 95. Warranty QA

The 30-day warranty covers defects related to delivered functionality.

If a client reports an issue:

```text
Reported issue
      ↓
Reproduce
      ↓
Determine cause
      ↓
Is it a defect?
   /        \
 Yes         No
 ↓            ↓
Warranty      Change Request
Fix            / Maintenance
 ↓
Retest
 ↓
Deploy
```

---

# 96. Warranty Defect Examples

Covered:

```text
Broken navigation
Broken contact form
Incorrect implemented functionality
Responsive defect introduced during development
Broken production link caused by delivered implementation
```

Not normally covered:

```text
New feature
Design change
New page
New content
Client-provided incorrect information
Third-party service outage
Client-caused configuration changes
```

---

# 97. QA Documentation

Maintain, where appropriate:

```text
QA checklist
Bug reports
Test results
Client approval
Deployment verification
Known issues
```

These records help future maintenance.

---

# 98. AI Coding Agent QA Rules

Before declaring a task complete, the AI coding agent must:

```text
1. Read the relevant project documentation.
2. Inspect the approved UI reference.
3. Implement only the requested scope.
4. Run the application.
5. Check the browser console.
6. Test the relevant interactions.
7. Test responsive behavior.
8. Run the production build.
9. Fix discovered errors.
10. Re-test after fixes.
```

The AI must not declare:

```text
"Done"
```

merely because code was written.

---

# 99. AI Must Preserve the Approved Design

The AI must not:

```text
Invent a new layout
Replace approved fonts
Change the color system
Add random sections
Remove required sections
Replace images unnecessarily
Change navigation structure
Add unnecessary animations
```

If the implementation cannot match the approved design because of a technical limitation, the issue must be identified rather than silently redesigning the interface.

---

# 100. Definition of Done

The Starter Presence website passes QA when:

```text
[✓] Functionality works
[✓] Navigation works
[✓] Forms work
[✓] Responsive layouts work
[✓] Approved UI is accurately implemented
[✓] Content is correct
[✓] Assets are correct
[✓] No placeholder content remains
[✓] Accessibility basics are satisfied
[✓] SEO basics are implemented
[✓] Security basics are satisfied
[✓] Performance has been reviewed
[✓] Modern browsers have been tested
[✓] Production build succeeds
[✓] Production deployment has been smoke-tested
[✓] Critical/high bugs are resolved
[✓] Client content has been approved
```

---

# 101. Final QA Principle

The website is not finished when the code is finished.

It is finished when:

```text
Code
  +
Design
  +
Content
  +
Functionality
  +
Responsive behavior
  +
Accessibility
  +
Security
  +
Performance
  +
SEO
  +
Production verification
  +
Client approval
```

all meet the agreed Starter Presence standard.

```
```
