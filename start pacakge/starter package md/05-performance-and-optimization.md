# `05-performance-and-optimization.md`

````md
# Stonebridge Construction
# Starter Presence — Performance & Optimization Standards

**Version:** 1.0  
**Status:** Approved for Development  
**Package:** Starter Presence

---

# 1. Purpose

This document defines the performance standards for websites developed under the Starter Presence package.

The objective is to ensure that every website is:

- Fast to load.
- Responsive to user interaction.
- Efficient on mobile devices.
- Efficient on slower networks.
- Optimized for Core Web Vitals.
- Efficient with images and other media.
- Free from unnecessary JavaScript and dependencies.
- Structured for maintainability.
- Tested before deployment.
- Stable under normal and expected traffic.

Performance optimization must improve the user experience without changing the approved UI/UX design.

---

# 2. Performance Philosophy

The performance approach is:

```text
Approved UI/UX
      +
Efficient Architecture
      +
Optimized Assets
      +
Minimal JavaScript
      +
Efficient Network Requests
      +
Responsive Rendering
      +
Performance Testing
      =
Fast Website
````

Performance is not achieved by removing important content or simplifying the approved design unnecessarily.

---

# 3. Performance Targets

The following targets should be treated as development goals rather than absolute guarantees.

## Core Web Vitals

Target:

```text
LCP  < 2.5 seconds
INP  < 200 ms
CLS  < 0.1
```

Where possible, pages should achieve "Good" Core Web Vitals results.

Testing should consider:

* Mobile devices.
* Desktop devices.
* Fast networks.
* Slower networks.
* Cold loads.
* Repeat visits.

---

# 4. Performance Budget

Every project should have a reasonable performance budget.

The development team should actively control:

```text
JavaScript size
CSS size
Image size
Font size
Number of requests
Third-party scripts
API requests
DOM complexity
```

Avoid adding dependencies unless they provide meaningful project value.

---

# 5. Performance Priority

Optimization priorities:

```text
1. Critical rendering path
2. Largest above-the-fold content
3. Images
4. Fonts
5. JavaScript
6. Third-party scripts
7. API/network requests
8. CSS
9. Long-running browser tasks
10. Non-critical assets
```

Do not spend excessive effort optimizing minor details while large images or unnecessary JavaScript remain the primary bottleneck.

---

# 6. Approved Design Must Not Be Changed

Performance optimization must not alter the approved design without authorization.

The AI coding agent must not:

* Remove sections to improve performance.
* Replace designed components with generic components.
* Remove animations that are part of the approved design without review.
* Replace approved images with unrelated images.
* Change layouts simply to make implementation easier.
* Remove mobile functionality.
* Reduce content unnecessarily.

The goal is:

```text
Same approved experience
+
Better technical implementation
```

---

# 7. Image Optimization

Images are one of the highest-impact areas of website performance.

Every image should be evaluated for:

```text
Format
Dimensions
Compression
Responsive sizing
Loading priority
Caching
```

Preferred formats where supported:

```text
AVIF
WebP
```

Use other formats where appropriate.

---

# 8. Image Dimensions

Do not serve an image that is significantly larger than its displayed size.

Example:

```text
Displayed:
800 × 500

Avoid:
5000 × 3125
```

Instead, provide an appropriately sized image.

For responsive layouts, use responsive image techniques.

Example:

```html
<img
  src="project-800.webp"
  srcset="
    project-400.webp 400w,
    project-800.webp 800w,
    project-1200.webp 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Commercial construction project"
/>
```

---

# 9. Image Compression

Images should be compressed while maintaining the visual quality required by the approved design.

Avoid:

```text
Uncompressed 8 MB photograph
```

when the same visual quality can be delivered at a much smaller size.

Before launch:

```text
[ ] Large images identified
[ ] Images compressed
[ ] Correct dimensions
[ ] Modern formats where appropriate
[ ] No unnecessary duplicate images
```

---

# 10. Hero Image Optimization

The primary hero image often has a major impact on LCP.

Hero images should receive special treatment.

Requirements:

```text
[ ] Correct dimensions
[ ] Optimized file size
[ ] Appropriate format
[ ] Loaded with appropriate priority
[ ] Not unnecessarily lazy-loaded
[ ] No layout shift
```

Do not lazy-load the primary above-the-fold image if doing so delays the LCP element.

---

# 11. Lazy Loading

Below-the-fold images should generally be lazy-loaded.

Example:

```html
<img
  src="/images/project.webp"
  loading="lazy"
  alt="Completed construction project"
/>
```

Do not lazy-load critical above-the-fold assets unnecessarily.

---

# 12. Image Layout Stability

Image dimensions should be known before the image loads where practical.

Use:

```html
width="1200"
height="800"
```

or an equivalent aspect-ratio strategy.

This prevents content from unexpectedly moving while images load.

Goal:

```text
Image loading
      ↓
Space already reserved
      ↓
Minimal layout movement
```

---

# 13. Background Images

CSS background images should be used intentionally.

For important visual content:

```text
Prefer semantic <img>
```

when the image is actual content.

Use background images primarily for decorative or layout-oriented imagery.

Do not hide meaningful content from accessibility tools through background images.

---

# 14. Image Naming

Use descriptive filenames.

Preferred:

```text
commercial-high-rise-project.webp
construction-team-site.webp
industrial-facility.webp
```

Avoid:

```text
IMG_0034.jpg
image1.png
final-final-2.jpg
```

---

# 15. Responsive Images

Images should adapt to the user's viewport.

Do not automatically deliver desktop-sized images to small mobile screens.

The implementation should use:

```text
srcset
sizes
responsive containers
appropriate image variants
```

where beneficial.

---

# 16. Fonts

Fonts can significantly affect performance.

Only load fonts that are actually required by the approved design system.

Avoid loading:

```text
10 font families
20 font weights
unused italic variants
unused character sets
```

---

# 17. Font Loading

Fonts should be loaded efficiently.

Use appropriate:

```text
font-display
preload
subset
font formats
```

where applicable.

Avoid blocking the entire page while waiting for non-critical fonts.

---

# 18. Font Preloading

Only preload fonts that are truly critical to initial rendering.

Do not preload every font.

Example:

```html
<link
  rel="preload"
  href="/fonts/primary-font.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

Preloading too many assets can reduce rather than improve performance.

---

# 19. Typography and Performance

The approved typography must remain unchanged unless explicitly authorized.

Performance optimization should focus on:

```text
Fewer font files
Smaller font files
Correct font formats
Required weights only
Efficient loading
```

Do not replace the approved typography with a generic system font simply to reduce asset size.

---

# 20. JavaScript Philosophy

JavaScript should be used only when it provides meaningful functionality.

Avoid JavaScript for things that can be handled by:

```text
HTML
CSS
Native browser behavior
```

Examples:

```text
Simple hover effects → CSS
Simple transitions → CSS
Basic layout → CSS
Navigation links → HTML
```

---

# 21. React Performance

The standard frontend stack uses:

```text
React
Vite
Tailwind CSS
```

React implementation should avoid unnecessary rendering.

Use appropriate techniques such as:

```text
Component decomposition
Stable props
Memoization when justified
Efficient state management
Lazy loading
Code splitting
```

Do not add memoization everywhere without evidence of a performance problem.

---

# 22. Component Design

Components should be:

* Reusable.
* Focused.
* Predictable.
* Lightweight.

Avoid creating extremely large components containing the entire website.

Preferred:

```text
App
 ├── Header
 ├── Hero
 ├── TrustSection
 ├── Services
 ├── Projects
 ├── Testimonials
 ├── CTA
 └── Footer
```

This also supports maintainability.

---

# 23. Code Splitting

Where appropriate, split code by route or feature.

For example:

```text
Home
About
Services
Projects
Contact
```

Pages that are not required immediately do not necessarily need to be included in the initial JavaScript payload.

Use route-level lazy loading where it provides a meaningful benefit.

---

# 24. Initial JavaScript

The initial JavaScript bundle should contain only what is required to render and operate the initial page.

Avoid loading:

```text
Unused libraries
Unused components
Unused utilities
Large libraries for simple functionality
```

---

# 25. Dependency Management

Every dependency should have a reason.

Before installing a package, ask:

```text
Do we actually need it?
Can native browser functionality solve this?
Can existing project utilities solve this?
Does the dependency significantly increase bundle size?
Is it actively maintained?
```

Do not install a library simply because an AI coding agent recommends it.

---

# 26. Third-Party Scripts

Third-party scripts can significantly affect performance.

Examples:

```text
Analytics
Maps
Chat widgets
Social widgets
Tracking scripts
Embedded services
```

Only include services required by the project.

Third-party scripts should not block the primary page rendering unnecessarily.

---

# 27. Google Maps

If Google Maps integration is included, avoid unnecessarily loading a heavy interactive map immediately on every page.

Where appropriate:

```text
Static map preview
      ↓
User interaction
      ↓
Open Google Maps
```

may be more efficient than embedding a fully interactive map immediately.

The final implementation must follow the approved UI and client requirements.

---

# 28. Analytics Performance

Analytics must load in a way that does not unnecessarily block the website.

Analytics failure must never prevent:

```text
Page rendering
Navigation
Forms
Contact links
```

---

# 29. CSS Optimization

CSS should be:

```text
Organized
Reusable
Minimal
Predictable
```

Avoid excessive duplicate styles.

The Tailwind implementation should avoid unnecessarily generating huge amounts of unused CSS.

---

# 30. Tailwind CSS

Use Tailwind according to the project's configured build process.

Avoid:

```text
Large manually generated utility strings
Unused custom CSS
Duplicate design tokens
Inconsistent spacing values
```

The implementation must follow the approved Stonebridge Design System.

Do not introduce arbitrary values when an existing design token is available.

---

# 31. Design Tokens

Performance optimization must not bypass the design system.

Use centralized values for:

```text
Colors
Typography
Spacing
Radius
Shadows
Breakpoints
Transitions
```

Example:

```text
Primary
Secondary
Surface
Text
Muted
Border
Success
```

The exact values must come from:

```text
complete Stonebridge Design System specification
```

---

# 32. Animations

Animations should enhance the experience without causing performance problems.

Preferred:

```text
transform
opacity
```

Avoid animating expensive layout properties unnecessarily:

```text
width
height
top
left
margin
padding
```

when equivalent transform/opacity animations are possible.

---

# 33. Animation Duration

Animations should generally be short and purposeful.

Avoid:

```text
Long loading animations
Constant background animations
Excessive scroll effects
Multiple simultaneous animations
```

Animations must not delay access to content.

---

# 34. Reduced Motion

Respect the user's reduced-motion preference.

Support:

```css
@media (prefers-reduced-motion: reduce) {
  /* reduce or disable non-essential motion */
}
```

Important content must remain accessible when animation is disabled.

---

# 35. Hover Effects

Hover effects should not trigger expensive layout changes.

Prefer:

```text
opacity
transform
box-shadow
color
```

where appropriate.

On touch devices, hover behavior must not be required to access functionality.

---

# 36. Navigation Performance

Navigation should feel immediate.

The implementation should avoid unnecessary full-page reloads when client-side routing is appropriate.

For React applications:

```text
Internal navigation
        ↓
Client-side route transition
```

where appropriate.

---

# 37. Route Loading

If route-level code splitting is used, loading states must be designed according to the approved UI.

Do not display a generic browser-like loading screen if the design system specifies a branded loading state.

Avoid unnecessary loading delays.

---

# 38. API Requests

For websites requiring a backend, API requests should be efficient.

Avoid:

```text
Repeated identical requests
Unnecessary polling
Large responses
Unused fields
Sequential requests that can safely be combined
```

---

# 39. API Request Strategy

Preferred:

```text
Page
 ↓
Required data identified
 ↓
Efficient request
 ↓
Render
```

Avoid:

```text
Page
 ↓
Request A
 ↓
Request B
 ↓
Request C
 ↓
Request D
```

when the same result can safely be achieved more efficiently.

---

# 40. Backend Performance

Where a backend is required, the standard stack is:

```text
Node.js
Express.js
PostgreSQL
Prisma
```

Backend performance considerations include:

```text
Efficient queries
Proper indexes
Pagination where necessary
Input validation
Connection management
Error handling
Response size
```

---

# 41. Database Queries

Avoid retrieving unnecessary database fields.

Bad:

```text
SELECT *
```

when only a few fields are required.

Preferred:

```text
Select only required fields
```

Prisma queries should follow the same principle.

---

# 42. Database Indexes

Database indexes should be added where justified by:

```text
Frequent lookups
Filtering
Sorting
Unique constraints
Relationships
```

Do not create indexes indiscriminately.

For a simple Starter Presence website, avoid unnecessary database complexity.

---

# 43. Caching

Use caching where it provides a meaningful benefit.

Potential candidates:

```text
Static assets
Images
Public content
API responses
```

Caching must not cause stale business-critical information to remain indefinitely.

---

# 44. Browser Caching

Static assets should use appropriate cache policies in production.

Recommended candidates:

```text
Images
Fonts
CSS
JavaScript
Static files
```

Hashed build assets can generally have long cache lifetimes.

---

# 45. Asset Fingerprinting

Production builds should generate versioned or hashed asset names where supported by the build system.

Example:

```text
assets/index.a8f32c.js
assets/style.92ab31.css
```

This allows safe long-term caching while ensuring new versions can be downloaded after deployment.

---

# 46. Compression

Production responses should use appropriate compression where supported.

Possible technologies:

```text
Brotli
Gzip
```

Static assets should be served efficiently.

---

# 47. HTTPS

All production websites must use HTTPS.

Verify:

```text
HTTP
 ↓
HTTPS
```

where appropriate.

No production page should depend on insecure HTTP resources.

---

# 48. Mixed Content

Before launch:

```text
[ ] No HTTP images
[ ] No HTTP scripts
[ ] No HTTP stylesheets
[ ] No HTTP fonts
[ ] No HTTP API requests
```

All required resources should be served securely.

---

# 49. Network Requests

Minimize unnecessary network requests.

Review:

```text
Fonts
Images
JavaScript
CSS
Analytics
APIs
Third-party resources
```

A page should not request resources that it does not need.

---

# 50. Preconnect

Use `preconnect` only for genuinely important external origins.

Example:

```html
<link rel="preconnect" href="https://fonts.example.com">
```

Do not add preconnect hints for many unrelated domains.

---

# 51. Preload

Preload only critical assets.

Potential candidates:

```text
Primary hero image
Critical font
Critical resource
```

Overusing preload can harm performance.

---

# 52. Resource Priorities

Resources should have sensible loading priorities.

Conceptually:

```text
Critical content
      ↓
Above-the-fold assets
      ↓
Interactive functionality
      ↓
Below-the-fold assets
      ↓
Optional resources
```

---

# 53. DOM Complexity

Avoid unnecessarily deep or repetitive DOM structures.

Bad:

```text
div
 └── div
      └── div
           └── div
                └── div
```

when simpler semantic HTML can achieve the same result.

Use meaningful elements where appropriate:

```text
header
nav
main
section
article
footer
button
form
```

---

# 54. Accessibility and Performance

Accessibility must not be sacrificed for performance.

The implementation should maintain:

```text
Semantic HTML
Keyboard navigation
Accessible forms
Alt text
Focus states
Readable text
Proper labels
```

---

# 55. Forms

Forms should remain responsive.

Avoid excessive client-side JavaScript for basic validation when native browser validation can assist.

However, server-side validation remains required for backend submissions.

---

# 56. Loading States

Loading states should:

* Clearly communicate activity.
* Avoid blocking the entire interface unnecessarily.
* Match the approved UI.
* Avoid causing layout shifts.

Do not display loading indicators when an operation is effectively instantaneous.

---

# 57. Error States

Performance optimization must not remove meaningful error handling.

Users should understand when:

```text
Network request fails
Form submission fails
Content cannot load
```

Error states should follow the approved design system.

---

# 58. Stress Testing

Before production deployment, the application should be tested under increased load where applicable.

For a simple company profile website, testing should focus on:

```text
Concurrent page requests
Contact form requests
Static asset delivery
API endpoints if present
Database connections if present
```

The test should reflect realistic expected traffic.

---

# 59. Stress Testing Principle

Do not claim that a system is capable of unlimited traffic.

Testing should identify:

```text
Normal capacity
Performance degradation
Failure behavior
Recovery behavior
```

---

# 60. Contact Form Stress Testing

Where the website has a contact form:

Test:

```text
Multiple submissions
Invalid submissions
Repeated submissions
Large input values
Rapid requests
Concurrent requests
```

Verify:

```text
Validation
Rate limiting where applicable
Error handling
Database behavior if used
Email/service behavior
```

---

# 61. API Load Testing

If a backend exists, test important endpoints under realistic load.

Example:

```text
GET /api/...
POST /api/contact
```

Measure:

```text
Response time
Error rate
CPU usage
Memory usage
Database performance
Connection behavior
```

---

# 62. Rate Limiting

Public endpoints should be protected against abusive request patterns where appropriate.

Particularly:

```text
Contact forms
Authentication endpoints
Public API endpoints
```

Rate limiting must be configured according to the project's requirements.

---

# 63. Resource Exhaustion

Test for:

```text
Excessive memory usage
Unbounded request sizes
Large uploads
Repeated API calls
Database connection exhaustion
```

The application should fail safely rather than crashing unexpectedly.

---

# 64. Performance Testing Tools

Use appropriate tools during development and QA.

Possible tools:

```text
Lighthouse
Chrome DevTools
PageSpeed Insights
WebPageTest
Browser DevTools Network panel
Browser Performance panel
```

Use the available tools appropriate to the project.

---

# 65. Lighthouse Review

Run Lighthouse against important pages.

At minimum:

```text
Homepage
About
Services
Projects
Contact
```

Review:

```text
Performance
Accessibility
Best Practices
SEO
```

Lighthouse scores should be treated as diagnostic indicators rather than the sole definition of quality.

---

# 66. Network Testing

Test using different network conditions.

At minimum consider:

```text
Fast connection
Moderate connection
Slow connection
```

The website should remain usable on slower connections.

---

# 67. Mobile Performance Testing

Mobile performance receives special attention.

Test:

```text
Small screen
Medium screen
Large mobile screen
```

Verify:

```text
Initial load
Scrolling
Navigation
Images
Forms
Animations
CTA interaction
```

---

# 68. Desktop Performance Testing

Test the approved desktop layout on:

```text
Laptop
Desktop
Large desktop
```

Verify:

```text
Layout
Images
Navigation
Animations
Interaction
Page loading
```

---

# 69. Repeat Visit Performance

Test both:

```text
Cold load
```

and:

```text
Repeat/cached load
```

This helps identify issues with caching and initial asset delivery.

---

# 70. Performance Regression

Performance must be rechecked after major changes.

Examples:

```text
New dependency
New page
New hero image
New animation
New analytics provider
New third-party integration
New large component
```

Do not assume performance remains unchanged after significant modifications.

---

# 71. Performance Checklist — Development

```text
[ ] No unnecessary dependencies
[ ] Images optimized
[ ] Responsive images configured
[ ] Hero image optimized
[ ] Fonts optimized
[ ] Critical fonts identified
[ ] JavaScript minimized
[ ] Code splitting considered
[ ] CSS optimized
[ ] Third-party scripts reviewed
[ ] Animations reviewed
[ ] API requests reviewed
[ ] Database queries reviewed where applicable
[ ] Caching configured
[ ] Compression configured
```

---

# 72. Performance Checklist — QA

```text
[ ] Homepage tested
[ ] About page tested
[ ] Services page tested
[ ] Projects page tested
[ ] Contact page tested
[ ] Mobile tested
[ ] Desktop tested
[ ] Slow network tested
[ ] Images tested
[ ] Navigation tested
[ ] Forms tested
[ ] Loading states tested
[ ] Error states tested
[ ] Console reviewed
[ ] Network requests reviewed
```

---

# 73. Core Web Vitals Checklist

```text
[ ] LCP reviewed
[ ] INP reviewed
[ ] CLS reviewed
[ ] Above-the-fold content optimized
[ ] Layout shifts minimized
[ ] Long JavaScript tasks reviewed
[ ] Hero asset optimized
```

Target:

```text
LCP < 2.5s
INP < 200ms
CLS < 0.1
```

when reasonably achievable under appropriate test conditions.

---

# 74. Production Performance Checklist

Before launch:

```text
[ ] Production build created
[ ] Production build tested
[ ] Debug code removed
[ ] Console errors removed
[ ] Large assets reviewed
[ ] Network requests reviewed
[ ] HTTPS verified
[ ] Compression verified
[ ] Caching verified
[ ] Images optimized
[ ] Fonts optimized
[ ] Analytics reviewed
[ ] Third-party scripts reviewed
```

---

# 75. AI Coding Rules

The AI coding agent must:

```text
[ ] Follow the approved Stonebridge Design System
[ ] Preserve approved UI/UX
[ ] Optimize images
[ ] Avoid unnecessary dependencies
[ ] Avoid unnecessary JavaScript
[ ] Use semantic HTML
[ ] Avoid excessive DOM nesting
[ ] Implement responsive images
[ ] Prevent layout shifts
[ ] Optimize critical assets
[ ] Lazy-load appropriate assets
[ ] Avoid lazy-loading critical content
[ ] Keep animations efficient
[ ] Respect reduced motion
[ ] Avoid blocking analytics
[ ] Review API efficiency
[ ] Review backend queries where applicable
```

---

# 76. AI Must Not Optimize by Breaking the Design

The AI must never use performance as an excuse to:

```text
Remove sections
Remove important images
Remove animations without authorization
Change typography
Replace the approved design
Remove mobile functionality
Remove content
```

If an approved design introduces a performance concern, identify the issue and optimize the implementation rather than redesigning the experience.

---

# 77. Performance Acceptance Criteria

A Starter Presence website is considered performance-ready when:

```text
[ ] Production build works correctly
[ ] No critical console errors
[ ] No broken assets
[ ] Images are appropriately optimized
[ ] Critical content loads efficiently
[ ] No major layout shifts
[ ] Navigation is responsive
[ ] Forms remain responsive
[ ] Mobile experience is usable
[ ] Desktop experience is usable
[ ] Core Web Vitals have been reviewed
[ ] Major third-party performance issues have been reviewed
[ ] Appropriate stress/load testing has been performed where applicable
```

---

# 78. Final Performance Standard

Every Starter Presence website should follow:

```text
Approved Design
      ↓
Efficient Implementation
      ↓
Optimized Assets
      ↓
Minimal Necessary JavaScript
      ↓
Efficient Network Usage
      ↓
Responsive Rendering
      ↓
Performance Testing
      ↓
Stress Testing Where Applicable
      ↓
Production Verification
```

The final objective is not simply a high Lighthouse score.

The objective is:

```text
Fast
Responsive
Stable
Accessible
Maintainable
Reliable
```

while preserving the approved client experience.

---

# 79. Definition of Done

Performance work is complete only when:

```text
[✓] The approved UI is preserved
[✓] Images are optimized
[✓] Fonts are optimized
[✓] JavaScript is reviewed
[✓] Dependencies are reviewed
[✓] Network requests are reviewed
[✓] Critical assets are prioritized
[✓] Non-critical assets are deferred where appropriate
[✓] Layout shifts are minimized
[✓] Animations are efficient
[✓] Mobile performance is tested
[✓] Desktop performance is tested
[✓] Core Web Vitals are reviewed
[✓] Stress/load testing is completed where applicable
[✓] Production build is tested
[✓] No critical performance issue remains
```

Performance optimization must remain aligned with:

```text
01 — Project Requirements
02 — Information Architecture & Routing
03 — Security Standards
04 — SEO & Analytics
05 — Performance & Optimization
Complete Stonebridge Design System Specification
```

```
```
