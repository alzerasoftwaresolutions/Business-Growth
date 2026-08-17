# `04-seo-and-analytics.md`

````md
# Stonebridge Construction
# Starter Presence — SEO & Analytics Standards

**Version:** 1.0  
**Status:** Approved for Development  
**Package:** Starter Presence

---

# 1. Purpose

This document defines the SEO and analytics standards for every website delivered under the Starter Presence package.

The objective is to ensure that each website:

- Can be correctly discovered and indexed by search engines.
- Has clear and meaningful page metadata.
- Uses a logical URL structure.
- Provides search engines with a clear understanding of the website.
- Presents properly when shared on social platforms.
- Is optimized for local search where applicable.
- Can be monitored through analytics.
- Can be connected to Google Search Console.
- Can measure important business interactions.
- Does not collect unnecessary or sensitive information.
- Maintains good SEO practices without compromising the approved UI/UX.

---

# 2. Scope

The Starter Presence package includes foundational SEO.

Included:

```text
Page titles
Meta descriptions
Search-friendly URLs
Heading hierarchy
XML sitemap
robots.txt
Image optimization
Canonical URLs
Open Graph metadata
Basic structured data
Indexing configuration
Search Console setup
Basic analytics setup
Conversion/event tracking
SEO pre-launch verification
Analytics verification
````

The following are outside the standard package unless explicitly added:

```text
Advanced SEO campaigns
Ongoing keyword research
Link-building campaigns
Content marketing
Monthly SEO reporting
Large-scale content production
Professional SEO copywriting
Paid advertising
Search engine advertising
```

---

# 3. SEO Philosophy

SEO implementation should focus on:

```text
Correct Technical Foundation
        +
Useful Content
        +
Clear Information Architecture
        +
Fast Performance
        +
Mobile Usability
        +
Accurate Business Information
        =
Strong Foundational SEO
```

Do not attempt to manipulate search engines through:

* Keyword stuffing
* Hidden text
* Invisible links
* Duplicate doorway pages
* Automatically generated low-quality content
* Misleading metadata
* Fake reviews
* Artificial backlinks

---

# 4. Source of Truth

SEO implementation must follow the approved project content and design.

The implementation hierarchy is:

```text
Client-approved content
        ↓
Project requirements
        ↓
Approved UI/UX design
        ↓
Information architecture
        ↓
SEO requirements
        ↓
Implementation
```

The AI coding agent must not invent:

* Company claims
* Certifications
* Awards
* Locations
* Statistics
* Customer testimonials
* Project values
* Years of experience
* Keywords presented as factual business claims

If information is missing, use the approved placeholder/content process rather than inventing information.

---

# 5. Page SEO Requirements

Every indexable page must have:

```text
[ ] Unique title
[ ] Unique meta description
[ ] One primary H1
[ ] Logical heading hierarchy
[ ] Search-friendly URL
[ ] Canonical URL
[ ] Appropriate image alt text
[ ] Relevant internal links
[ ] Appropriate Open Graph metadata
```

Typical Starter Presence pages:

```text
/
 /about
 /services
 /projects
 /contact
```

An additional page may be included depending on the client's selected package configuration.

---

# 6. Page Titles

Every indexable page must have a unique and descriptive title.

Example:

```text
Home:
Stonebridge Construction | Commercial Construction

About:
About Stonebridge Construction | Our Company

Services:
Construction Services | Stonebridge Construction

Projects:
Our Projects | Stonebridge Construction

Contact:
Contact Stonebridge Construction
```

Avoid:

```text
Home
Page
Welcome
Untitled
Stonebridge
```

Titles should describe the actual page.

---

# 7. Meta Descriptions

Every indexable page should have a unique meta description.

Descriptions should:

* Accurately describe the page.
* Be written for humans.
* Include relevant terminology naturally.
* Encourage useful clicks.
* Avoid keyword stuffing.
* Not contain unsupported claims.

Example:

```text
Explore Stonebridge Construction's commercial construction
services, capabilities, completed projects, and approach to
quality-driven project delivery.
```

Do not create generic descriptions for every page.

---

# 8. Heading Hierarchy

Each page should have one clear primary heading.

Recommended hierarchy:

```text
H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2
      ├── H3
      └── H3
```

Do not choose heading tags based solely on visual size.

Visual appearance should be controlled through CSS.

For example:

```html
<h2 class="large-display-text">
```

is preferable to using:

```html
<div class="h1-looking-text">
```

when the content represents a real section heading.

---

# 9. H1 Rules

The H1 should clearly describe the page.

Examples:

```text
Home:
Building Tomorrow's Infrastructure with Precision.

About:
Built on Experience. Driven by Precision.

Services:
Construction Services

Projects:
Featured Projects

Contact:
Let's Talk About Your Project
```

The exact wording must follow the approved project content.

Do not duplicate the same H1 across every page.

---

# 10. URL Structure

URLs must be:

* Short
* Descriptive
* Readable
* Consistent
* Lowercase

Preferred:

```text
/about
/services
/projects
/contact
```

Avoid:

```text
/page?id=123
/services123
/AboutUs
/our_company_page_final_v2
```

Use hyphens when multiple words are required:

```text
/project-management
/industrial-facilities
```

---

# 11. URL Stability

Once a production URL is published, do not change it unnecessarily.

If a URL must change:

```text
Old URL
   ↓
301 Redirect
   ↓
New URL
```

Do not leave old URLs returning unexplained 404 errors when a valid replacement exists.

---

# 12. Canonical URLs

Each indexable page should define an appropriate canonical URL.

Example:

```html
<link
  rel="canonical"
  href="https://www.example.com/about"
/>
```

Canonical URLs should:

* Use the production domain.
* Use HTTPS.
* Match the preferred URL.
* Avoid unnecessary query parameters.
* Be consistent with sitemap URLs.

Do not point every page to the homepage.

---

# 13. XML Sitemap

Every production Starter Presence website should provide an XML sitemap.

Example:

```text
https://example.com/sitemap.xml
```

The sitemap should contain:

* Indexable production pages.
* Canonical URLs.
* Valid URLs only.

Do not include:

* 404 pages
* Redirect URLs
* Duplicate URLs
* Development URLs
* Private pages
* Noindex pages

---

# 14. Sitemap Verification

Before launch:

```text
[ ] Sitemap exists
[ ] Sitemap is valid XML
[ ] URLs return successful responses
[ ] URLs are canonical
[ ] No broken URLs
[ ] No development URLs
[ ] No duplicate URLs
[ ] Sitemap is accessible in production
```

---

# 15. robots.txt

Every production website should have:

```text
https://example.com/robots.txt
```

The file should provide sensible crawler instructions.

Example:

```text
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

The exact configuration should reflect the project.

---

# 16. robots.txt Restrictions

Do not accidentally block the entire website.

Avoid unintentionally deploying:

```text
User-agent: *
Disallow: /
```

unless the site is intentionally private.

Development environments may use different indexing controls.

Production must be reviewed separately.

---

# 17. Development vs Production Indexing

Development, staging, and preview environments should not unintentionally compete with production in search results.

Where appropriate:

```text
Development
    ↓
No indexing

Staging
    ↓
No indexing

Production
    ↓
Indexable
```

Production indexing must be explicitly verified after deployment.

---

# 18. Open Graph Metadata

Every important public page should have Open Graph metadata.

Recommended fields:

```text
og:title
og:description
og:image
og:url
og:type
```

Example:

```html
<meta property="og:title"
      content="Stonebridge Construction | Commercial Construction">

<meta property="og:description"
      content="Explore our construction services and completed projects.">

<meta property="og:image"
      content="https://example.com/images/og-image.jpg">

<meta property="og:url"
      content="https://example.com/">
```

---

# 19. Social Sharing Image

The website should have an appropriate social sharing image.

The image should:

* Represent the company.
* Use approved branding.
* Be high quality.
* Avoid excessive text.
* Have sufficient resolution for social previews.

Do not create an unrelated generic image.

The design must follow the approved visual identity.

---

# 20. Twitter / Social Metadata

Where appropriate, include compatible social metadata for platforms that use it.

Example:

```text
twitter:card
twitter:title
twitter:description
twitter:image
```

Use the project's actual social media strategy.

Do not create fake social accounts or links.

---

# 21. Structured Data

Where appropriate, implement structured data using Schema.org.

Possible types for Starter Presence websites include:

```text
Organization
LocalBusiness
WebSite
BreadcrumbList
Service
```

The selected schema must accurately describe the business.

Do not add structured data simply to increase the amount of schema.

---

# 22. Organization Schema

For a company website, Organization structured data may include information such as:

```text
Name
Logo
URL
Phone
Email
Address
Social profiles
```

Only include information that is actually provided and approved by the client.

Never invent:

```text
Awards
Ratings
Reviews
Certifications
Addresses
Social accounts
```

---

# 23. Local Business SEO

For businesses serving a specific geographic location, include accurate local information where appropriate.

Examples:

```text
Business name
Address
Phone
Opening hours
Service area
Location
```

All information must match the client's actual business information.

Consistency is important across:

```text
Website
Google Business Profile
Social profiles
Business directories
```

where those profiles exist.

---

# 24. NAP Consistency

NAP means:

```text
Name
Address
Phone
```

The website should use the client's official information consistently.

Example:

```text
Stonebridge Construction
Bole, Addis Ababa, Ethiopia
+251 ...
```

Do not use different business names or phone numbers in different sections unless there is a legitimate reason.

---

# 25. Image SEO

Every meaningful image should have:

```text
Descriptive filename
Appropriate alt text
Optimized dimensions
Compressed file size
Correct format
```

Example filename:

```text
commercial-high-rise-project.webp
```

Avoid:

```text
IMG_1234.jpg
image-final-final2.jpg
photo1.png
```

---

# 26. Alt Text

Alt text should describe meaningful images.

Example:

```text
Commercial high-rise construction project in Addis Ababa
```

Decorative images may use:

```html
alt=""
```

Do not stuff keywords into alt text.

Bad:

```text
best construction company commercial construction Addis Ababa
```

Good:

```text
Commercial high-rise under construction
```

---

# 27. Image Optimization

Images must be optimized without noticeably damaging visual quality.

Consider:

```text
WebP
AVIF
Responsive image sizes
Lazy loading
Width and height attributes
Compression
```

Important above-the-fold images should not be unnecessarily lazy-loaded.

---

# 28. Internal Linking

Pages should link naturally to related pages.

Example:

```text
Home
 ├── About
 ├── Services
 ├── Projects
 └── Contact

Services
 └── Contact

Projects
 └── Contact

About
 └── Contact
```

Use meaningful link text.

Prefer:

```text
View Our Projects
```

over:

```text
Click Here
```

---

# 29. Breadcrumbs

Breadcrumbs are optional for the Starter Presence package.

They may be useful if the website contains deeper page structures.

Example:

```text
Home
  /
Projects
  /
Commercial Projects
```

Do not add breadcrumbs merely for visual decoration.

---

# 30. 404 Page

The website must have a useful 404 page.

It should include:

```text
404
Page not found
Return to homepage
Useful navigation
Contact option where appropriate
```

Example:

```text
The page you're looking for doesn't exist.

[Return Home]
[View Projects]
```

The 404 page must use the approved design system.

---

# 31. SEO-Friendly Error Handling

The 404 page should return an actual HTTP 404 status where technically applicable.

Do not return:

```text
HTTP 200
```

for a page that does not exist.

---

# 32. Mobile SEO

The website must be mobile-friendly.

Verify:

```text
[ ] Responsive layout
[ ] Readable text
[ ] No horizontal scrolling
[ ] Touch targets usable
[ ] Navigation functional
[ ] Forms usable
[ ] Images responsive
[ ] Content remains available
```

Do not hide important content from mobile users solely to simplify the design.

---

# 33. Mobile-First Implementation

The approved mobile design is a required implementation reference.

The AI coding agent must use the approved mobile UI as the source of truth.

It must not:

* Invent a different mobile layout.
* Remove sections without approval.
* Change navigation behavior unnecessarily.
* Replace approved components with generic templates.

---

# 34. Page Speed and SEO

Performance contributes to the quality of the user experience and can affect search visibility.

SEO implementation must work together with:

```text
Performance
Accessibility
Responsive Design
Security
```

Do not add unnecessary scripts solely for analytics or SEO.

---

# 35. Analytics

Analytics should provide useful business information without unnecessary data collection.

The standard analytics implementation should be capable of measuring:

```text
Page views
Contact form submissions
Phone clicks
Email clicks
WhatsApp clicks
Map interactions where useful
Primary CTA clicks
```

Only implement events that provide useful business information.

---

# 36. Analytics Provider

The project may use an approved analytics provider.

For example:

```text
Google Analytics
```

The exact provider should be selected according to the project requirements.

Do not install multiple analytics systems without a reason.

---

# 37. Google Analytics Setup

If Google Analytics is included:

```text
[ ] Correct property created
[ ] Correct measurement ID used
[ ] Production domain configured
[ ] Development traffic handled appropriately
[ ] Tracking verified
[ ] Important events configured
```

Never hard-code private credentials.

---

# 38. Analytics Environment Variables

Public measurement IDs may be included in frontend configuration where appropriate.

Private credentials must never be exposed.

Example:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

This is fundamentally different from:

```env
VITE_GA_PRIVATE_SECRET=...
```

The second must never be exposed to the browser.

---

# 39. Page View Tracking

Page views should correctly represent the site's public pages.

For a client-side React application, verify that navigation between routes does not result in incorrect or missing page tracking.

Example:

```text
/
 /about
 /services
 /projects
 /contact
```

Each meaningful page view should be represented correctly.

---

# 40. Conversion Tracking

The primary purpose of analytics is to understand whether the website helps generate business inquiries.

Important conversions may include:

```text
Contact form submission
Phone call click
Email click
WhatsApp click
Request consultation click
Quote request click
```

The actual events should follow the client's selected CTA structure.

---

# 41. Event Naming

Use consistent event names.

Example:

```text
contact_form_submit
phone_click
email_click
whatsapp_click
cta_click
map_click
```

Avoid random naming such as:

```text
button1
click123
testEvent
new_event_final
```

---

# 42. CTA Tracking

Primary CTAs should be trackable when analytics is included.

Example:

```text
REQUEST CONSULTATION
        ↓
cta_click
        ↓
CTA identifier:
request_consultation
```

This allows the team to understand which important actions users interact with.

---

# 43. Phone Click Tracking

Where appropriate, track clicks on phone links.

Example:

```html
<a href="tel:+251...">
```

Analytics event:

```text
phone_click
```

Do not claim that a phone click represents a completed phone call.

It represents an interaction with the website.

---

# 44. Email Click Tracking

Track email link interactions where useful.

Example:

```html
<a href="mailto:info@example.com">
```

Event:

```text
email_click
```

Do not collect the contents of the user's email conversation.

---

# 45. WhatsApp Tracking

Where WhatsApp is part of the approved contact flow:

```text
User clicks WhatsApp
        ↓
whatsapp_click
        ↓
WhatsApp opens
```

Analytics must not attempt to inspect private WhatsApp conversations.

---

# 46. Contact Form Tracking

A successful form submission should be tracked only after successful processing.

Incorrect:

```text
User clicks Submit
        ↓
conversion
```

if the form actually failed.

Preferred:

```text
Submit
  ↓
Validation
  ↓
Server processing
  ↓
Success
  ↓
conversion event
```

---

# 47. Analytics Error Handling

If analytics fails:

```text
Website functionality
        ↓
Must continue working
```

Analytics must never become a single point of failure for:

* Navigation
* Contact forms
* Buttons
* Page rendering
* Core content

---

# 48. Analytics and Privacy

Analytics configuration must avoid collecting unnecessary sensitive information.

Never send:

```text
Passwords
Authentication tokens
Private messages
Database credentials
Payment information
Sensitive form contents
```

Do not place contact form message content into analytics event parameters.

---

# 49. Consent and Cookies

If the selected analytics implementation uses cookies or other tracking technologies that require user consent under applicable requirements, the project must implement the client's approved consent/privacy approach.

Do not invent legal requirements.

Do not silently collect information that the client has explicitly decided not to collect.

---

# 50. Google Search Console

Where included, connect the production website to Google Search Console.

Before verification:

```text
[ ] Production domain live
[ ] HTTPS working
[ ] Sitemap available
[ ] Canonical URLs correct
[ ] robots.txt reviewed
```

Then:

```text
[ ] Property verified
[ ] Sitemap submitted
[ ] Indexing status reviewed
```

---

# 51. Search Console Verification

After deployment, verify:

```text
[ ] Property verified
[ ] Sitemap accepted
[ ] Important pages discoverable
[ ] No unexpected indexing blocks
[ ] No major crawl errors
```

Do not expect all pages to appear in search immediately.

Search engine indexing is not instantaneous.

---

# 52. Search Engine Indexing

The development team must verify that production is indexable.

Check:

```text
robots.txt
meta robots
HTTP headers
canonical URLs
sitemap
```

A page intended for search should not accidentally contain:

```html
<meta name="robots" content="noindex">
```

---

# 53. Noindex Rules

Use `noindex` only where intentionally required.

Potential examples:

```text
Temporary pages
Private pages
Certain utility pages
```

Do not accidentally apply `noindex` globally.

---

# 54. Duplicate Content

Avoid unnecessary duplicate pages.

Examples of potentially problematic duplication:

```text
/about
/about-us
/company
```

all containing essentially identical content.

Choose one canonical page and redirect or consolidate duplicates where appropriate.

---

# 55. Content Quality

SEO does not replace good content.

Each page should clearly answer:

```text
Who is this company?
What does it offer?
Who does it serve?
Where does it operate?
Why should customers trust it?
How can customers contact it?
```

The exact content depends on the client.

---

# 56. Keyword Usage

Keywords should naturally appear in:

* Page titles
* Headings
* Body content
* URLs
* Image descriptions where appropriate
* Metadata

Do not force keywords into every sentence.

The AI must not generate keyword-heavy copy without client approval.

---

# 57. Local Search Keywords

For local businesses, relevant geographic information may naturally appear in content.

Example:

```text
Construction company in Addis Ababa
```

But location claims must be accurate.

Do not create pages for cities or locations the business does not serve merely to attract search traffic.

---

# 58. Structured Data Validation

Before launch:

```text
[ ] Structured data syntax valid
[ ] Information matches visible content
[ ] No invented claims
[ ] Required properties included where applicable
[ ] No misleading review/rating data
```

Structured data must describe what users can actually see or what is legitimately represented by the page.

---

# 59. Analytics Testing Environment

Analytics testing should distinguish development from production where practical.

Avoid polluting production analytics with large amounts of development testing data.

Recommended:

```text
Development
    ↓
Testing configuration

Production
    ↓
Production analytics
```

---

# 60. SEO Pre-Launch Checklist

## Technical SEO

```text
[ ] HTTPS enabled
[ ] Correct production domain
[ ] Unique page titles
[ ] Unique meta descriptions
[ ] Correct H1
[ ] Heading hierarchy reviewed
[ ] Search-friendly URLs
[ ] Canonical URLs
[ ] XML sitemap
[ ] robots.txt
[ ] 404 page
[ ] Redirects verified
[ ] No accidental noindex
```

## Images

```text
[ ] Images optimized
[ ] Meaningful alt text
[ ] Descriptive filenames
[ ] Responsive images
[ ] No broken images
```

## Social

```text
[ ] Open Graph title
[ ] Open Graph description
[ ] Open Graph image
[ ] Correct social URL
```

## Structured Data

```text
[ ] Appropriate schema selected
[ ] Data is accurate
[ ] No fake claims
[ ] Validation completed
```

---

# 61. Analytics Pre-Launch Checklist

```text
[ ] Analytics property configured
[ ] Measurement ID verified
[ ] Production domain verified
[ ] Page views working
[ ] Contact form conversion working
[ ] Phone click tracking working
[ ] Email click tracking working
[ ] WhatsApp click tracking working
[ ] Primary CTA tracking working
[ ] Analytics does not block website functionality
[ ] No sensitive information sent
```

---

# 62. Search Console Pre-Launch Checklist

```text
[ ] Search Console property created
[ ] Ownership verified
[ ] Sitemap submitted
[ ] robots.txt accessible
[ ] Important pages accessible
[ ] No accidental noindex
[ ] Canonical URLs correct
```

---

# 63. Post-Launch SEO Verification

After production deployment:

```text
1. Open production website
2. Verify HTTPS
3. Verify robots.txt
4. Verify sitemap.xml
5. Verify canonical URLs
6. Verify page titles
7. Verify meta descriptions
8. Verify social previews
9. Verify Search Console
10. Verify analytics
11. Verify conversion events
12. Check crawl/indexing status
```

---

# 64. Post-Launch Analytics Verification

Perform real test interactions:

```text
[ ] Open homepage
[ ] Navigate to another page
[ ] Click primary CTA
[ ] Click phone number
[ ] Click email
[ ] Click WhatsApp
[ ] Submit contact form
```

Then verify that the expected events are received.

---

# 65. Analytics Failure Principle

If analytics stops working:

```text
Analytics
    ↓
Failure
    ↓
Website remains operational
```

The following must continue working:

```text
Navigation
Forms
Contact links
Phone links
WhatsApp
Page content
```

Analytics is secondary to the core website.

---

# 66. SEO Monitoring

The optional maintenance service may include basic SEO health checks.

Possible checks:

```text
Sitemap availability
robots.txt availability
Broken links
Indexing issues
Missing metadata
Broken pages
Domain/HTTPS status
```

Advanced SEO campaigns are outside the Starter Presence package unless separately contracted.

---

# 67. AI Coding Rules

The AI coding agent must:

```text
[ ] Follow the approved page structure
[ ] Follow approved content
[ ] Preserve the approved UI
[ ] Add required metadata
[ ] Generate correct canonical URLs
[ ] Maintain sitemap configuration
[ ] Maintain robots.txt
[ ] Use proper heading hierarchy
[ ] Optimize images
[ ] Preserve meaningful alt text
[ ] Implement approved analytics
[ ] Track approved conversions
[ ] Never invent business claims
[ ] Never invent SEO keywords presented as facts
```

---

# 68. AI Must Not Modify the Design for SEO

SEO implementation must not result in the AI redesigning the page.

The AI must not:

* Add random SEO sections.
* Add keyword blocks.
* Add unnecessary text.
* Add hidden content.
* Add generic FAQ sections.
* Add extra navigation.
* Add unrelated blog sections.

SEO should be integrated into the approved design and content.

---

# 69. AI Must Not Invent Analytics

The AI must not automatically add:

```text
Heatmaps
Session recordings
Advertising trackers
Extra analytics providers
User profiling
```

unless explicitly required.

Only implement the analytics defined by the project requirements.

---

# 70. Analytics Event Documentation

Every implemented event should be documented.

Example:

```text
Event:
contact_form_submit

Trigger:
Successful contact form submission

Purpose:
Measure successful inquiries

Parameters:
form_location

Sensitive Data:
None
```

Example:

```text
Event:
phone_click

Trigger:
User clicks telephone link

Purpose:
Measure contact intent

Sensitive Data:
None
```

---

# 71. SEO Metadata Documentation

The project should maintain a page metadata map.

Example:

```text
Home
Title:
Stonebridge Construction | Commercial Construction

Description:
Approved homepage description.

Canonical:
/ 
```

```text
About
Title:
About Stonebridge Construction | Our Company

Description:
Approved About page description.

Canonical:
/about
```

Repeat for every public page.

---

# 72. SEO and Design Relationship

SEO implementation must respect:

```text
Approved Desktop UI
Approved Tablet UI
Approved Mobile UI
Design System
Information Architecture
Content Requirements
```

The visual design remains the source of truth for presentation.

SEO controls how the website is understood by search engines without changing the approved visual experience.

---

# 73. Final SEO Architecture

The expected structure is:

```text
                    Production Website
                           |
          +----------------+----------------+
          |                |                |
       Content          Technical          Analytics
          |                |                |
     Titles/H1        Sitemap/robots     Page views
     Descriptions     Canonicals         CTA events
     Images           URLs               Conversions
     Internal links   Structured data    Contact events
          |                |                |
          +----------------+----------------+
                           |
                    Search Visibility
                    + Business Insights
```

---

# 74. Final Standard

Every Starter Presence website should leave development with:

```text
Correct metadata
+
Clean URLs
+
Valid sitemap
+
Correct robots.txt
+
Canonical URLs
+
Optimized images
+
Meaningful headings
+
Structured data where appropriate
+
Social sharing metadata
+
Search Console
+
Analytics
+
Conversion tracking
+
Verified production indexing
=
Professional SEO Foundation
```

The Starter Presence package provides a **technical SEO foundation and basic business analytics**, not a full ongoing SEO marketing campaign.

All SEO and analytics implementation must remain aligned with the approved client content, information architecture, and UI/UX design.

```
```
