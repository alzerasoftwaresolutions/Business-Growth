# `07-content-and-asset-management.md`

````md
# Stonebridge Construction
# Starter Presence — Content & Asset Management Standards

**Version:** 1.0  
**Status:** Approved for Development  
**Package:** Starter Presence

---

# 1. Purpose

This document defines how client content and digital assets must be collected, organized, prepared, implemented, reviewed, and maintained for Starter Presence websites.

The objective is to ensure that:

- Client content is accurate.
- Content is organized consistently.
- Images are high quality and optimized.
- Assets are properly named and structured.
- Content is separated from presentation where practical.
- The approved UI is preserved.
- AI coding agents do not invent client information.
- Missing content is identified before development is considered complete.
- Content can be updated efficiently.
- The final website contains no accidental placeholder content.

This document works together with:

- `01-project-requirements.md`
- `02-information-architecture-and-routing.md`
- `03-security-standards.md`
- `04-seo-and-analytics.md`
- `05-performance-and-optimization.md`
- `06-system-architecture-and-technical-standards.md`
- `complete-stonebridge-design-system-specification.md`

---

# 2. Core Principle

The agency is responsible for professionally organizing and presenting client-provided content.

The client remains responsible for the factual accuracy of the information they provide.

The AI coding agent must never invent factual company information unless explicitly instructed to create placeholder/demo content.

The workflow is:

```text
Client Content
      ↓
Content Collection
      ↓
Content Review
      ↓
Content Organization
      ↓
Asset Preparation
      ↓
UI Implementation
      ↓
Content QA
      ↓
Client Approval
      ↓
Production
````

---

# 3. Content Ownership

The following responsibilities apply:

## Client

Responsible for:

* Company information.
* Company history.
* Services/products information.
* Project information.
* Contact information.
* Addresses.
* Phone numbers.
* Email addresses.
* Certifications.
* Claims and statistics.
* Legal information.
* Images they provide.
* Permission to use supplied content and media.

## Agency

Responsible for:

* Content organization.
* Content presentation.
* Formatting.
* Layout.
* Basic proofreading/consistency where included.
* Image optimization.
* Accessibility implementation.
* SEO implementation.
* Technical asset preparation.

## AI Coding Agent

Responsible for:

* Implementing approved content.
* Following content structure.
* Rendering assets correctly.
* Applying alt text supplied or approved by the team.
* Maintaining consistent formatting.

The AI must not independently create factual claims about the client.

---

# 4. Content Collection Before Development

Before implementation begins, collect the available client materials.

Recommended content request:

```text
Company Logo
Company Name
Company Description
About Us
Mission
Vision
Values
Services
Products
Projects
Project Images
Team Information
Certifications
Partners
Testimonials
Contact Information
Business Hours
Office Address
Google Maps Location
Phone Numbers
Email Addresses
WhatsApp Number
Social Media Links
Company Photos
Brand Guidelines
Existing Marketing Materials
```

Not every project requires every item.

Only collect information relevant to the approved scope.

---

# 5. Content Collection Checklist

```text
[ ] Company name received
[ ] Logo received
[ ] Company description received
[ ] About content received
[ ] Services/products received
[ ] Project/gallery content received
[ ] Contact information received
[ ] Address received
[ ] Phone number verified
[ ] Email verified
[ ] Social links received
[ ] Google Maps location received
[ ] Business hours received
[ ] Images received
[ ] Certifications received where applicable
[ ] Testimonials received where applicable
[ ] Additional page content received
```

---

# 6. Content Inventory

Before implementation, create a content inventory.

Example:

| Content        | Required | Received | Approved |
| -------------- | -------: | -------: | -------: |
| Company Name   |      Yes |      Yes |      Yes |
| Logo           |      Yes |      Yes |      Yes |
| About          |      Yes |      Yes |      Yes |
| Services       |      Yes |      Yes |      Yes |
| Projects       |      Yes |      Yes |      Yes |
| Contact        |      Yes |      Yes |      Yes |
| Testimonials   | Optional |       No |      N/A |
| Certifications | Optional |      Yes |  Pending |

This prevents missing content from being discovered immediately before launch.

---

# 7. Content Status

Use clear statuses.

```text
NOT REQUESTED
REQUESTED
RECEIVED
UNDER REVIEW
NEEDS REVISION
APPROVED
IMPLEMENTED
QA VERIFIED
```

Example:

```text
Project description
      ↓
RECEIVED
      ↓
UNDER REVIEW
      ↓
APPROVED
      ↓
IMPLEMENTED
      ↓
QA VERIFIED
```

---

# 8. Content Source of Truth

Every piece of client-specific content should have a known source.

Possible sources:

```text
Client-provided document
Client-provided email
Approved questionnaire
Approved marketing material
Client-approved copy
Existing official website
Client-approved generated copy
```

Do not use random internet sources as authoritative company information.

---

# 9. AI Content Generation Rules

AI may assist with:

* Formatting.
* Grammar correction.
* Content structure.
* Shortening text.
* Improving readability.
* Creating draft copy when explicitly requested.
* SEO-friendly wording when approved.
* CTA variations.

AI must not independently invent:

* Years of experience.
* Number of projects.
* Revenue/value delivered.
* Certifications.
* Awards.
* Client names.
* Testimonials.
* Safety statistics.
* Locations.
* Partnerships.
* Company history.
* Technical qualifications.

Example:

```text
Client says:
"Operating since 2005."

Allowed:
"Operating since 2005."

Not allowed:
"Over 20 years of industry leadership."

unless that claim is explicitly approved and factually supported.
```

---

# 10. Placeholder Content

During development, temporary placeholder content may be used when necessary.

Placeholder content must be clearly identifiable.

Example:

```text
[CLIENT COMPANY DESCRIPTION]
[PROJECT IMAGE]
[PHONE NUMBER]
[CLIENT TESTIMONIAL]
```

Avoid generic placeholder text such as:

```text
Lorem ipsum dolor sit amet...
```

especially when it can accidentally reach production.

---

# 11. Placeholder Removal

Before launch:

```text
[ ] No Lorem ipsum
[ ] No placeholder headings
[ ] No placeholder images
[ ] No fake phone numbers
[ ] No fake email addresses
[ ] No dummy testimonials
[ ] No example company names
[ ] No development-only content
```

---

# 12. Content Structure

Content should be organized according to the approved information architecture.

Typical Starter Presence structure:

```text
Home
About
Services / Products
Gallery / Projects
Contact
Additional approved page
```

Do not create additional pages merely because additional content exists.

---

# 13. Homepage Content

The homepage should contain only the sections approved for the specific project.

Possible content:

```text
Hero
Trust / credibility
About preview
Services / products
Projects
Why choose us
Testimonials
Certifications
CTA
Footer
```

The exact section order must follow the approved UI.

---

# 14. About Content

The About page may contain:

```text
Company introduction
History
Mission
Vision
Values
Leadership/team
Capabilities
Certifications
Company statistics
```

Only implement sections that exist in the approved design and project requirements.

---

# 15. Services Content

Each service should have structured information where applicable.

Example:

```js
{
  title: "Commercial Construction",
  description: "...",
  image: "/images/services/commercial.webp",
  slug: "commercial-construction"
}
```

Avoid duplicating the same service information across multiple files.

---

# 16. Product Content

For businesses selling products rather than services, product information may include:

```text
Product name
Short description
Detailed description
Category
Image
Specifications
Applications
Availability information
CTA
```

Do not add e-commerce functionality unless explicitly included in the project scope.

---

# 17. Project Content

Project entries should follow a consistent structure.

Example:

```js
{
  title: "Apex Tower",
  location: "Addis Ababa",
  year: "2024",
  category: "Commercial",
  description: "...",
  image: "/images/projects/apex-tower.webp"
}
```

Only include fields that the approved design requires.

---

# 18. Project Images

Project images should be:

* Relevant.
* High quality.
* Properly oriented.
* Correctly cropped.
* Optimized for the web.
* Approved by the client.

Do not use unrelated stock images to represent completed client projects.

---

# 19. Testimonials

Testimonials must be provided or approved by the client.

Required information may include:

```text
Quote
Person name
Position
Company
Optional photo
```

Do not fabricate testimonials.

Never present AI-generated testimonials as genuine customer statements.

---

# 20. Certifications

Certification information must be verified.

For each certification, where applicable:

```text
Certification name
Issuing organization
Certification number if appropriate
Issue date
Expiry date if applicable
Logo
Verification URL where appropriate
```

Do not display expired or unverified certifications as current credentials.

---

# 21. Partners and Client Logos

Partner/client logos require appropriate permission.

Before publishing:

```text
[ ] Logo received
[ ] Organization name verified
[ ] Permission confirmed where necessary
[ ] Correct logo used
[ ] Logo quality checked
```

Do not add recognizable company logos merely to make a "Trusted By" section look complete.

---

# 22. Company Logo Standards

The preferred logo package should include:

```text
Primary logo
Horizontal logo
Light version
Dark version
Icon/mark if available
```

Preferred formats:

```text
SVG
PNG
WebP
```

SVG should be used where appropriate for logos.

---

# 23. Logo Restrictions

Do not:

* Stretch the logo.
* Distort proportions.
* Change approved colors.
* Add unnecessary effects.
* Add shadows not included in the brand.
* Crop the logo incorrectly.

Maintain the approved clear space.

---

# 24. Image Directory Structure

Recommended:

```text
public/
└── images/
    ├── hero/
    ├── about/
    ├── services/
    ├── products/
    ├── projects/
    ├── team/
    ├── testimonials/
    ├── certifications/
    └── general/
```

Only create directories relevant to the project.

---

# 25. Asset Naming Convention

Use:

```text
lowercase
hyphen-separated
descriptive names
```

Preferred:

```text
stonebridge-office.webp
commercial-high-rise.webp
industrial-facility.webp
construction-team.webp
apex-tower-project.webp
```

Avoid:

```text
IMG_1002.jpg
New Image.png
final-final2.jpg
PHOTO1.JPG
```

---

# 26. File Formats

Use the most appropriate format for each asset.

General guidance:

```text
Photographs → WebP / AVIF
Logos → SVG where appropriate
Icons → SVG
Simple graphics → SVG / WebP
Transparent images → PNG / WebP
```

Do not convert assets blindly if doing so reduces quality or causes compatibility problems.

---

# 27. Image Resolution

Images should be large enough for their intended display but not unnecessarily large.

Example:

```text
Desktop hero:
appropriate large resolution

Mobile:
appropriate mobile resolution

Thumbnail:
smaller optimized version
```

Avoid sending a 5000px-wide original to a 300px card.

---

# 28. Image Compression

Before implementation:

```text
[ ] Remove unnecessary metadata
[ ] Resize oversized images
[ ] Compress images
[ ] Convert where appropriate
[ ] Verify visual quality
```

See:

```text
05-performance-and-optimization.md
```

for detailed performance requirements.

---

# 29. Image Cropping

Image cropping must respect the approved UI.

For example:

```text
Hero image
→ wide composition

Project card
→ landscape composition

Team portrait
→ portrait composition
```

Do not arbitrarily crop important subjects.

---

# 30. Responsive Images

Where appropriate, provide multiple image sizes.

Example:

```text
project-400.webp
project-800.webp
project-1200.webp
```

Use responsive image techniques to serve the appropriate version.

---

# 31. Image Alt Text

Every meaningful image should have appropriate alternative text.

Good:

```text
alt="Completed commercial high-rise constructed in Addis Ababa"
```

Poor:

```text
alt="image"
```

Decorative images may use:

```text
alt=""
```

when appropriate.

---

# 32. Alt Text Rules

Alt text should:

* Describe meaningful visual content.
* Be concise.
* Support accessibility.
* Avoid unnecessary phrases.
* Not stuff keywords.

Do not write:

```text
alt="best construction company commercial construction Addis Ababa construction"
```

---

# 33. Decorative Images

If an image provides no meaningful information and is purely decorative:

```html
<img src="..." alt="" />
```

or use an appropriate CSS/background approach.

Do not add meaningless alt text to decorative graphics.

---

# 34. Video Assets

Video is not part of the standard Starter Presence package unless included in the project scope.

If video is approved:

```text
[ ] File optimized
[ ] Poster image available
[ ] Mobile behavior defined
[ ] Autoplay reviewed
[ ] Muting behavior reviewed
[ ] Accessibility considered
[ ] Performance impact reviewed
```

Avoid automatically loading large videos unnecessarily.

---

# 35. Icons

Icons must follow the approved design system.

Do not mix unrelated icon styles.

For example:

```text
Outlined engineering icon
Outlined contact icon
Outlined project icon
```

should visually belong to the same icon family.

---

# 36. Icon Sources

Use:

* Approved project assets.
* Approved icon library.
* Custom SVG icons.

Do not download random icons that conflict with the design system.

---

# 37. Icon Accessibility

Decorative icons should not create unnecessary screen-reader noise.

For icon-only buttons:

```text
[ ] Accessible label
[ ] Keyboard accessible
[ ] Visible focus state
```

Example:

```html
<button aria-label="Open navigation">
  ...
</button>
```

---

# 38. Social Media Assets

Social media links should use verified client accounts.

Before launch:

```text
[ ] URL verified
[ ] Account belongs to client
[ ] Link opens correctly
[ ] No placeholder accounts
```

Do not invent social media URLs.

---

# 39. Contact Information

Contact information must be treated as critical content.

Verify:

```text
Company name
Phone
Email
Address
WhatsApp
Office hours
Google Maps location
```

before production.

---

# 40. Phone Numbers

Phone numbers should be displayed consistently.

Where appropriate, implement click-to-call:

```html
<a href="tel:+251XXXXXXXXX">
  +251 XXX XXX XXX
</a>
```

The number must be the client's verified number.

---

# 41. Email Addresses

Use:

```html
<a href="mailto:info@example.com">
  info@example.com
</a>
```

Verify the email before launch.

Avoid exposing private personal email addresses unless the client specifically requests it.

---

# 42. WhatsApp

If WhatsApp integration is included:

```text
[ ] Correct number
[ ] Correct country code
[ ] Correct link
[ ] Mobile tested
[ ] Desktop behavior tested
```

Do not create a WhatsApp link using an unverified number.

---

# 43. Google Maps

The client must provide the correct business location.

Before launch:

```text
[ ] Location verified
[ ] Address verified
[ ] Map link tested
[ ] Directions link tested where applicable
```

Do not assume the location based only on the company name.

---

# 44. Business Hours

Business hours must be provided by the client.

Example:

```text
Monday–Friday
8:00 AM–5:00 PM
```

Do not invent opening hours.

If emergency contact information is provided, clearly distinguish it from normal office hours.

---

# 45. Content Formatting

Content should be formatted consistently.

Maintain:

```text
Heading hierarchy
Paragraph spacing
List formatting
Capitalization
Punctuation
Units
Dates
Phone formatting
Currency formatting
```

---

# 46. Numbers and Statistics

Statistics require special care.

Examples:

```text
25+ Years
450+ Projects
$2B+ Delivered
```

Before publication:

```text
[ ] Client confirmed number
[ ] Date/context understood
[ ] Units correct
[ ] Formatting consistent
```

Do not invent statistics to fill visual cards.

---

# 47. Dates

Use a consistent date format throughout the website.

For example:

```text
2024
March 2024
March 15, 2024
```

Choose the appropriate format based on the design and client requirements.

---

# 48. Currency

Currency values must specify the correct currency.

Avoid:

```text
$2M
```

if the client actually means:

```text
ETB 2M
```

Verify currency before publication.

---

# 49. Technical Specifications

For product or engineering websites, technical specifications must come from the client.

Do not infer:

```text
Dimensions
Capacity
Materials
Certifications
Standards
Performance
Technical ratings
```

---

# 50. Legal and Regulatory Content

The client is responsible for legal accuracy.

Potential content:

```text
Privacy Policy
Terms
Licenses
Certifications
Regulatory information
Copyright notices
```

The agency should implement approved legal content but should not represent itself as the client's legal advisor.

---

# 51. SEO Content

Content must support the requirements in:

```text
04-seo-and-analytics.md
```

Each important page should have:

```text
Page title
Meta description
Primary heading
Logical subheadings
Relevant content
Image alt text
Search-friendly URL
```

Do not keyword-stuff content.

---

# 52. SEO Claims

Do not promise rankings based solely on foundational SEO.

The Starter Presence package provides foundational technical SEO.

It does not include an advanced SEO campaign unless purchased separately.

---

# 53. Content and UI Relationship

Content must fit the approved UI without damaging the design.

If client content is substantially longer than the designed component allows:

```text
Content
   ↓
Review
   ↓
Adjust content presentation
   OR
Request content revision
```

Do not simply shrink the font until the content fits.

---

# 54. Long Content

For long text:

```text
Do not:
- Reduce font size excessively
- Remove content without approval
- Hide content unexpectedly
- Create overcrowded sections
```

Instead consider:

```text
Better spacing
Content grouping
Expandable content where approved
Additional page
Shortened approved copy
```

---

# 55. Content Overflow

Before launch test:

```text
[ ] Long company name
[ ] Long service title
[ ] Long project title
[ ] Long testimonial
[ ] Long address
[ ] Long email
[ ] Long button text
```

The design must remain stable.

---

# 56. Multi-language Content

Multilingual support is not included in the standard package.

If multilingual support is purchased:

```text
[ ] Language architecture defined
[ ] Translation source identified
[ ] URLs defined
[ ] Navigation translated
[ ] SEO metadata translated
[ ] Images/text reviewed
[ ] Language switching tested
```

Do not add automatic translation without approval.

---

# 57. Content Versioning

For important content changes, maintain a record of approved versions where practical.

Example:

```text
About Us
Version 1 → Draft
Version 2 → Client revision
Version 3 → Approved
```

This helps avoid accidentally reverting approved content.

---

# 58. Client Content Approval

Before launch, the client should review:

```text
Company information
Services/products
Project information
Contact information
Images
Testimonials
Certifications
Statistics
Social links
```

The client should confirm that the content is accurate.

---

# 59. Content QA

Before deployment:

```text
[ ] Spelling checked
[ ] Grammar reviewed
[ ] Company name consistent
[ ] Phone numbers correct
[ ] Email addresses correct
[ ] Address correct
[ ] Links correct
[ ] Dates correct
[ ] Statistics verified
[ ] Images correct
[ ] Captions correct
[ ] Testimonials approved
[ ] Certifications verified
```

---

# 60. Content Consistency

The same information must remain consistent throughout the website.

Example:

If the homepage says:

```text
Operating since 1998
```

the footer should not say:

```text
Established in 2000
```

unless there is a documented reason.

---

# 61. Content Data Architecture

For repeated content, use structured data files.

Example:

```text
src/data/
├── siteConfig.js
├── services.js
├── projects.js
├── testimonials.js
├── socialLinks.js
└── navigation.js
```

This is preferred over duplicating content across components.

---

# 62. Example Site Configuration

```js
export const siteConfig = {
  name: "Stonebridge Construction",
  description: "...",
  phone: "+251...",
  email: "info@example.com",
  address: "...",
  whatsapp: "+251...",
  social: {
    facebook: "...",
    linkedin: "...",
    instagram: "..."
  }
};
```

All values must come from approved client information.

---

# 63. Example Services Data

```js
export const services = [
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    description: "Approved client description.",
    image: "/images/services/commercial.webp"
  }
];
```

Do not duplicate the same service content manually across multiple pages.

---

# 64. Example Projects Data

```js
export const projects = [
  {
    id: "apex-tower",
    title: "Apex Tower",
    category: "Commercial",
    location: "Addis Ababa",
    year: 2024,
    image: "/images/projects/apex-tower.webp",
    description: "Approved client description."
  }
];
```

Only include verified fields.

---

# 65. Content Security

Client content must be treated as untrusted input when it enters dynamic systems.

Where backend/database functionality exists:

```text
[ ] Validate input
[ ] Sanitize where appropriate
[ ] Escape output appropriately
[ ] Prevent injection
[ ] Limit input size
```

See:

```text
03-security-standards.md
```

---

# 66. User-Submitted Content

If the website includes a contact form:

User-submitted content must not automatically be treated as trusted HTML.

Avoid rendering user input as raw HTML.

For example:

```text
User input
   ↓
Validation
   ↓
Safe storage
   ↓
Safe display
```

---

# 67. File Uploads

File uploads are not part of the default Starter Presence package.

If file uploads are added:

```text
[ ] Allowed file types defined
[ ] Maximum file size defined
[ ] File name handling implemented
[ ] Malware/security considerations reviewed
[ ] Storage strategy defined
[ ] Access control defined
[ ] Validation implemented
```

Do not allow unrestricted file uploads.

---

# 68. Asset Copyright

The agency must not use copyrighted assets without appropriate rights.

Potential sources:

```text
Client-provided assets
Licensed stock assets
Agency-owned assets
Approved open-license assets
Approved generated assets
```

Record asset licensing information where necessary.

---

# 69. Stock Photography

If stock photography is used:

```text
[ ] License checked
[ ] Commercial use allowed
[ ] Attribution requirements reviewed
[ ] Client approves visual direction
```

Do not present generic stock photography as an actual client project, employee, customer, or facility.

---

# 70. AI-Generated Images

If AI-generated imagery is used:

```text
[ ] Client approval obtained
[ ] Image does not falsely represent a real project
[ ] Appropriate disclosure considered where relevant
[ ] Visual matches the approved design
```

AI-generated imagery must not be presented as documentary evidence of actual client work.

---

# 71. Asset Licensing Record

Where applicable, maintain:

```text
Asset
Source
License
Date obtained
Usage restrictions
```

Example:

```text
Asset:
hero-construction.webp

Source:
Licensed stock provider

License:
Commercial web usage

Status:
Approved
```

---

# 72. Favicon and Brand Assets

Every production website should have appropriate:

```text
Favicon
Apple/mobile icon where applicable
Browser metadata
Social sharing image where applicable
```

Use the client's approved branding.

---

# 73. Open Graph Images

Important pages should have appropriate social sharing images where required.

Example:

```text
og-image.jpg
```

Images should follow the approved brand/design system.

---

# 74. Social Preview Content

Before launch, verify:

```text
[ ] Title
[ ] Description
[ ] Image
[ ] URL
```

when social sharing metadata is implemented.

---

# 75. Asset Loading

Assets should be loaded according to importance.

```text
Critical
   ↓
Above-the-fold
   ↓
Visible content
   ↓
Below-the-fold
   ↓
Optional
```

See:

```text
05-performance-and-optimization.md
```

---

# 76. Unused Assets

Before production:

```text
[ ] Remove unused images
[ ] Remove unused icons
[ ] Remove unused fonts
[ ] Remove unused assets
[ ] Remove duplicate assets
```

Do not leave large unused files in the production bundle.

---

# 77. Asset Folder Hygiene

The asset directory must remain organized.

Avoid:

```text
images/
├── random1.png
├── final.jpg
├── new/
├── new2/
├── test/
├── old/
└── maybe-use-this.png
```

Use meaningful categories and names.

---

# 78. Content Backup

Before launch, preserve the final approved client content.

Possible sources:

```text
Final content document
Repository data files
Approved design content
Client email approval
```

This allows recovery if content is accidentally deleted.

---

# 79. Client Content Updates

The Starter Presence package does not automatically include unlimited content updates.

Updates should follow the agreed maintenance plan or change request process.

Examples of minor updates:

```text
Phone number
Office hours
Small text change
Small image replacement
```

Examples of new scope:

```text
New page
New feature
New section
New content system
Major redesign
New language
```

---

# 80. Content Change Process

Recommended:

```text
Client Request
      ↓
Determine scope
      ↓
Minor update?
   /       \
 Yes        No
 ↓           ↓
Maintenance  Change Request
 ↓           ↓
Implement    Estimate
             ↓
           Approval
             ↓
          Implement
```

---

# 81. Content Update Safety

Before making production content changes:

```text
[ ] Correct project identified
[ ] Correct environment identified
[ ] Backup/version available where applicable
[ ] Requested content verified
[ ] Existing design preserved
```

---

# 82. Content Review Before Launch

A final content review should be performed on the actual production candidate.

Review:

```text
Homepage
About
Services/Products
Projects/Gallery
Contact
Additional page
Footer
Mobile version
Desktop version
```

---

# 83. Content QA on Mobile

Check:

```text
[ ] Headings fit
[ ] Paragraphs readable
[ ] Images crop correctly
[ ] Buttons fit
[ ] Phone numbers are clickable
[ ] Email links work
[ ] WhatsApp works
[ ] Address is readable
[ ] Footer content fits
```

---

# 84. Content QA on Desktop

Check:

```text
[ ] No excessive empty areas caused by missing content
[ ] No awkward line breaks
[ ] Images align correctly
[ ] Long titles do not break layout
[ ] Cards remain consistent
[ ] Footer columns remain balanced
```

---

# 85. Final Content Checklist

```text
CLIENT INFORMATION
[ ] Company name
[ ] Company description
[ ] About
[ ] Mission
[ ] Vision
[ ] Services/products
[ ] Projects
[ ] Contact details

MEDIA
[ ] Logo
[ ] Hero images
[ ] Project images
[ ] Service images
[ ] Team images
[ ] Certification logos
[ ] Partner logos

CONTACT
[ ] Phone
[ ] Email
[ ] WhatsApp
[ ] Address
[ ] Google Maps
[ ] Social links
[ ] Business hours

CREDIBILITY
[ ] Statistics verified
[ ] Testimonials approved
[ ] Certifications verified
[ ] Partner/client logos approved

SEO
[ ] Page titles
[ ] Meta descriptions
[ ] Alt text
[ ] Social images
[ ] URLs

QUALITY
[ ] No placeholders
[ ] No broken images
[ ] No incorrect information
[ ] No inconsistent information
[ ] Mobile checked
[ ] Desktop checked
```

---

# 86. AI Content Implementation Checklist

Before asking the AI to implement content:

```text
[ ] Read project requirements
[ ] Read information architecture
[ ] Read design system
[ ] Inspect approved UI references
[ ] Identify required content
[ ] Identify missing content
[ ] Identify placeholder content
[ ] Identify asset requirements
```

The AI must not begin by inventing content.

---

# 87. AI Asset Implementation Checklist

The AI must:

```text
[ ] Use approved assets
[ ] Preserve asset proportions
[ ] Use correct image paths
[ ] Add appropriate alt text
[ ] Optimize loading
[ ] Follow approved image cropping
[ ] Use correct responsive behavior
[ ] Avoid unrelated stock imagery
```

---

# 88. AI Must Not Invent Assets

The AI must not silently replace missing client assets with:

```text
Random stock photos
Random company logos
Fake certifications
Fake project images
Fake testimonials
Fake employee photos
```

If an asset is missing:

```text
Mark it clearly as missing
OR
Use an explicitly approved placeholder
```

---

# 89. Content and Design Conflict

If the supplied content does not fit the approved UI:

Do not automatically redesign the page.

Instead:

```text
Identify conflict
      ↓
Determine whether content can be edited
      ↓
Request approval if needed
      ↓
Implement approved solution
```

Possible solutions:

```text
Shorten copy
Adjust content structure
Use additional approved content area
Create an approved secondary page
```

---

# 90. Content Quality Standard

Final content should be:

```text
Accurate
Readable
Consistent
Relevant
Professional
Accessible
SEO-friendly
Approved
```

---

# 91. Definition of Done

Content and asset management is complete when:

```text
[✓] Required client content has been collected
[✓] Content has been reviewed
[✓] Content sources are known
[✓] Client-specific facts are verified
[✓] Approved content is implemented
[✓] Images are optimized
[✓] Images have appropriate alt text
[✓] Assets are correctly organized
[✓] No unauthorized logos are used
[✓] No fake testimonials exist
[✓] No fake certifications exist
[✓] No placeholder content remains
[✓] Contact information is verified
[✓] Social links are verified
[✓] Google Maps location is verified
[✓] SEO content is implemented
[✓] Mobile content presentation is tested
[✓] Desktop content presentation is tested
[✓] Final content has client approval
```

---

# 92. Final Standard

The Starter Presence website must present the client's business accurately and professionally.

The standard is:

```text
Real Client Information
        +
Approved Content
        +
Approved Assets
        +
Approved UI
        +
Optimized Media
        +
Accessible Presentation
        +
SEO-Friendly Structure
        =
Production-Ready Content
```

The AI coding agent must treat client content as source material to implement, not as an invitation to invent business information.

The final website must contain only content and assets that are:

```text
Provided
Approved
Verified
Licensed
or explicitly authorized for use.
```

```
```
