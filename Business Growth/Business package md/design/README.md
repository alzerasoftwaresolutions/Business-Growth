# `design/README.md`

````md
# Business Growth
# Design Reference & Implementation Rules

**Document:** design/README.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Purpose:** Defines how approved client UI/UX design references must be used during implementation.

---

# 1. Purpose

The `design/` directory contains the approved visual references for the Business Growth website template and individual client projects.

These files are the **visual source of truth** for frontend implementation.

The purpose of this directory is to make sure that:

```text
Approved Design
       ↓
AI / Developer
       ↓
Implementation
````

rather than:

```text
AI / Developer Preference
       ↓
New Design
```

The AI must implement the approved design rather than independently designing a different website.

---

# 2. Critical Design Rule

> **The approved design is authoritative for visual implementation.**

Before creating or significantly modifying a frontend component, the developer or AI must inspect the relevant design reference.

The implementation should reproduce the approved:

* Layout
* Visual hierarchy
* Typography
* Colors
* Spacing
* Components
* Imagery
* Navigation
* CTA placement
* Section order
* Responsive behavior

as closely as reasonably possible.

---

# 3. What This Directory Represents

The `design/` directory contains:

```text
design/
├── README.md
│
├── design-system/
│   ├── colors.md
│   ├── typography.md
│   ├── spacing.md
│   ├── grid-and-layout.md
│   ├── borders-radius-shadows.md
│   ├── icons.md
│   └── responsive-rules.md
│
├── desktop/
│
├── mobile/
│
└── ui-references/
```

The exact files may grow as the template evolves.

---

# 4. Design Source-of-Truth Hierarchy

When implementing the UI, use this order:

```text
1. Client-approved final design
2. Client-approved design-system decisions
3. Client-specific design references
4. Business Growth design standards
5. Existing reusable components
6. Developer implementation judgment
```

A developer's personal design preference must not override the approved UI.

---

# 5. Design Approval Status

Every important design file should have a known status.

Recommended states:

```text
DRAFT
IN REVIEW
APPROVED
SUPERSEDED
ARCHIVED
```

Only `APPROVED` references should be treated as final implementation authority.

---

# 6. Final Design vs Exploration

Exploratory designs may exist during discovery.

Do not treat every visual reference as final.

Example:

```text
design/exploration/
```

may contain alternatives.

The final implementation should use:

```text
design/desktop/
design/mobile/
```

or another explicitly marked approved source.

---

# 7. Approved Design Rule

A design is considered approved when the responsible project authority has explicitly accepted it.

Record approval where practical:

```text
Design:
________________________________

Version:
________________________________

Approved By:
________________________________

Approval Date:
________________________________
```

---

# 8. Stitch / AI-Generated Design References

When Stitch, Gemini, or another design-generation tool is used to create the UI:

The resulting design must be treated as a **design reference**, not as a source of executable code.

The developer/AI must translate the visual design into the project's existing:

* Component system
* Design tokens
* Page templates
* Content model
* Architecture

---

# 9. AI Must Not Redesign

The AI must not look at the design and say:

> "I can make this better."

and replace the approved layout.

The AI may make implementation improvements for:

* Accessibility
* Responsive behavior
* Performance
* Browser compatibility
* Maintainability

provided the visual intent remains intact.

---

# 10. Design Fidelity

The implementation should preserve:

```text
Visual hierarchy
Spacing rhythm
Typography hierarchy
Component proportions
Image treatment
CTA prominence
Section sequence
Brand character
```

A technically correct page that looks substantially different from the approved design is not considered a successful implementation.

---

# 11. Desktop References

The `desktop/` directory contains approved desktop page references.

Recommended:

```text
desktop/
├── home.png
├── about.png
├── services.png
├── service-detail.png
├── products.png
├── product-detail.png
├── projects.png
├── project-detail.png
├── blog.png
├── article.png
├── contact.png
└── rfq.png
```

Only include pages that have actually been designed.

---

# 12. Mobile References

The `mobile/` directory contains approved mobile designs.

Recommended:

```text
mobile/
├── home.png
├── about.png
├── services.png
├── service-detail.png
├── products.png
├── product-detail.png
├── projects.png
├── project-detail.png
├── blog.png
├── article.png
├── contact.png
└── rfq.png
```

Again, only include actual approved designs.

---

# 13. Why Mobile Designs Are Separate

Mobile should not be treated as:

```text
Desktop
↓
Shrink everything
```

The mobile design may intentionally change:

* Layout
* Navigation
* Grid behavior
* Image proportions
* Content order
* CTA placement
* Spacing
* Typography scale
* Interaction patterns

Therefore, when a mobile reference exists, it must be inspected independently.

---

# 14. Tablet Design

If the project includes a dedicated tablet design, store it separately:

```text
design/
└── tablet/
```

If no tablet design exists, the implementation should derive tablet behavior from:

* Desktop design
* Mobile design
* Responsive rules
* Component constraints

without inventing a completely different visual system.

---

# 15. UI Reference Components

The `ui-references/` directory contains detailed references for reusable visual components.

Recommended:

```text
ui-references/
├── header.png
├── footer.png
├── buttons.png
├── forms.png
├── cards.png
├── navigation.png
├── section-headers.png
├── breadcrumbs.png
├── gallery.png
├── filters.png
├── modals.png
└── cta-sections.png
```

These references help the AI reproduce components consistently.

---

# 16. Component Reference Rule

If a component reference exists:

```text
Approved Component Reference
        ↓
Existing Component System
        ↓
Implementation
```

Do not create a visually unrelated component simply because it is easier to code.

---

# 17. Design System Directory

The `design-system/` directory defines reusable visual rules.

Expected files include:

```text
colors.md
typography.md
spacing.md
grid-and-layout.md
borders-radius-shadows.md
icons.md
responsive-rules.md
```

These files explain the design decisions represented by the visual references.

---

# 18. Colors

`colors.md` should define:

```text
Primary
Secondary
Accent
Background
Surface
Text
Muted Text
Border
Success
Warning
Error
```

Only approved project colors should be documented as final.

---

# 19. Typography

`typography.md` should define:

```text
Font Family
Heading Font
Body Font
Technical/Numeric Font where applicable
Font Weights
Font Sizes
Line Heights
Letter Spacing
```

The AI must not replace the approved fonts with generic defaults unless there is an explicit technical/licensing reason.

---

# 20. Spacing

`spacing.md` should define the approved spacing rhythm.

Examples:

```text
Section spacing
Container padding
Card padding
Grid gaps
Heading spacing
Button spacing
Form spacing
```

The exact values belong in the design-system file.

---

# 21. Grid & Layout

`grid-and-layout.md` should define:

```text
Container widths
Grid columns
Gutters
Max widths
Section layouts
Alignment
Content proportions
```

The AI should use these rules rather than inventing arbitrary values.

---

# 22. Borders, Radius & Shadows

`borders-radius-shadows.md` should define:

```text
Border widths
Border styles
Border colors
Radius values
Shadow levels
```

Do not randomly mix rounded and sharp components when the approved design uses a consistent visual language.

---

# 23. Icons

`icons.md` should define:

```text
Icon family
Stroke style
Weight
Size
Color
Usage
```

Where an existing icon library is approved, use it consistently.

Do not mix multiple unrelated icon styles.

---

# 24. Responsive Rules

`responsive-rules.md` should define:

```text
Breakpoints
Grid transitions
Typography scaling
Spacing scaling
Navigation changes
Mobile stacking
Image behavior
Tablet behavior
```

These rules support implementation when a screenshot does not explicitly show every intermediate width.

---

# 25. Design Tokens

Where the project uses code-level design tokens, the visual documentation should map to those tokens.

Conceptually:

```text
Design Reference
      ↓
Design Tokens
      ↓
Components
      ↓
Pages
```

This prevents individual pages from inventing their own colors, spacing, or typography.

---

# 26. Design Tokens Are Not a Reason to Redesign

The token system exists to implement the approved design consistently.

It must not be used to reinterpret the design.

Example:

Approved:

```text
Copper Accent
```

Do not decide:

```text
Let's make it orange because orange has better contrast.
```

Instead determine whether the approved design already has an accessible alternative or whether an accessibility correction is genuinely required.

---

# 27. Visual Hierarchy

The implementation must preserve the intended hierarchy.

For example:

```text
Primary Headline
      ↓
Supporting Message
      ↓
Primary CTA
      ↓
Secondary CTA
```

Do not make secondary information visually compete with the primary conversion action.

---

# 28. Section Order

The section sequence is part of the approved design.

Do not move sections simply because:

> "This ordering is more common."

The approved composition is authoritative.

---

# 29. Section Spacing

Generous spacing in the approved design must be preserved.

Do not compress the design excessively simply to fit more content onto the screen.

Whitespace is part of the visual system.

---

# 30. Image Treatment

The AI must preserve approved image behavior.

This includes:

```text
Aspect Ratio
Crop
Object Position
Border Radius
Overlay
Contrast
Placement
Size
```

Do not replace the approved treatment with a generic image card.

---

# 31. Image Selection

The design reference shows the intended role of imagery.

The actual client image should be substituted only when:

```text
Client-approved asset
```

is available.

If the image is missing:

```text
Do not invent a real project photograph.
```

Use an approved temporary placeholder only during development if necessary.

---

# 32. Placeholder Image Rule

Development placeholders must be clearly identifiable.

Example:

```text
[PROJECT IMAGE PENDING]
```

They must never accidentally ship to production.

---

# 33. Animation

Animations must follow the approved design.

If animation is visible in the reference:

```text
Implement a restrained equivalent.
```

If animation is not part of the design:

```text
Do not add it simply because it "looks better."
```

---

# 34. Motion Accessibility

Where animation exists:

```text
prefers-reduced-motion
```

should be respected where appropriate.

Accessibility improvements must preserve the design intention.

---

# 35. Hover States

If hover behavior is not explicitly shown:

The AI may implement a subtle interaction consistent with the design system, but it must not introduce a visually significant redesign.

Examples of acceptable enhancement:

```text
Small opacity transition
Subtle border transition
Small color transition
```

Avoid:

```text
Large card transformations
Unexpected scaling
Unrelated animation
```

unless approved.

---

# 36. Focus States

Focus states must be implemented for accessibility.

They should be visually consistent with the approved design.

Do not remove visible focus simply because it is not shown in a screenshot.

---

# 37. Interactive States

The design reference may show only the default state.

The implementation must still consider:

```text
Default
Hover
Focus
Active
Disabled
Loading
Error
Success
```

where applicable.

These states should use the approved design system.

---

# 38. Forms

Forms require special attention because screenshots typically show only their default state.

Implement:

```text
Default
Focus
Error
Success
Loading
Disabled
```

while preserving the visual language of the approved design.

---

# 39. Error Messages

Error messages must remain visually consistent.

Do not suddenly introduce:

```text
Bright red generic browser error box
```

if the approved design uses subtle inline validation.

---

# 40. Modal / Dialog Design

If modals are required:

Use the existing design system.

Consider:

```text
Overlay
Container
Close button
Typography
Spacing
Focus
Keyboard behavior
Mobile behavior
```

Do not create a second unrelated modal system.

---

# 41. Gallery Design

Where galleries or lightboxes exist:

Match:

```text
Thumbnail ratio
Spacing
Overlay
Navigation
Close control
Caption treatment
Mobile behavior
```

---

# 42. Navigation Design

The navigation reference is authoritative for:

```text
Header height
Logo placement
Menu spacing
Typography
CTA
Mobile menu
Sticky behavior
```

---

# 43. Footer Design

The footer reference is authoritative for:

```text
Column structure
Logo placement
Contact information
Links
Social icons
Newsletter
Legal content
Spacing
```

Only display content enabled for the project.

---

# 44. Content Density

Do not unnecessarily compress content.

The design may intentionally use:

```text
Large headings
Wide containers
Generous section spacing
Large image areas
```

These choices communicate the brand.

---

# 45. Long Content Rule

Real client content will often be longer than design mockups.

The AI must make the design resilient to:

```text
Long titles
Long descriptions
Long company names
Long addresses
Long testimonials
```

without fundamentally changing the approved visual structure.

---

# 46. Short Content Rule

The opposite is also important.

If a client has less content than the reference:

```text
Do not fabricate content.
```

Instead:

```text
Use real content
+
Hide optional modules
+
Preserve layout where possible
```

---

# 47. Content-Driven Layout

The design should remain stable as content changes.

Components must not assume:

```text
Exactly 20 words
Exactly 2 lines
Exactly 3 products
```

unless the design explicitly requires such constraints.

---

# 48. Design Variants

If the approved design contains variants, document them.

Example:

```text
Product Card:
- Standard
- Featured

CTA:
- Primary
- Secondary
- Outline

Section:
- Light
- Dark
```

Only approved variants should exist.

---

# 49. No Uncontrolled Variants

Avoid creating:

```text
CardA
CardB
CardC
CardD
CardSpecial
CardModern
CardNew
```

unless those are genuinely approved design variants.

---

# 50. Design Consistency

The same visual component should look the same across pages unless a documented variant exists.

Example:

```text
ProductCard
```

should not have completely different styling on:

```text
Home
Products
Search
Related Products
```

unless the design explicitly calls for variants.

---

# 51. Design Consistency Across Sectors

Business Growth supports many sectors.

The visual design may change by client, but the implementation principles remain:

```text
Reusable components
+
Approved client UI
+
Structured content
+
Configuration
```

The template must not force:

```text
Construction design
```

onto:

```text
Healthcare client
```

or:

```text
Automotive client
```

---

# 52. Client-Specific Design

When a client has a unique visual identity:

```text
Client Design
   ↓
Design Tokens
   ↓
Reusable Components
   ↓
Client Website
```

Do not change the underlying functionality simply because the colors or typography are different.

---

# 53. Design and Content Separation

The design should determine:

```text
How content is presented.
```

The content model should determine:

```text
What content exists.
```

These should remain separate.

---

# 54. Design and Business Logic Separation

A visual component should not contain unnecessary business logic.

Example:

```text
ProductCard
```

should present:

```text
Product Data
```

rather than deciding:

```text
Whether a product should exist in the system.
```

---

# 55. Responsive Reference Priority

If desktop and mobile references conflict:

```text
Use each reference for its intended breakpoint.
```

Do not force desktop behavior onto mobile.

---

# 56. Intermediate Breakpoints

If only desktop and mobile designs exist:

The AI may determine intermediate behavior using:

```text
Component constraints
Grid rules
Typography scaling
Spacing rules
```

while preserving the visual intent.

---

# 57. Responsive Interpolation

The AI should not:

```text
Desktop
→ Completely different tablet design
→ Completely different mobile design
```

unless the design explicitly requires it.

Prefer controlled responsive transitions.

---

# 58. Breakpoint Rule

Use the project's documented responsive breakpoints.

Do not introduce arbitrary breakpoints for every small visual problem.

---

# 59. Design Inspection Before Implementation

Before implementing a page:

```text
1. Identify page reference.
2. Identify corresponding mobile reference.
3. Identify reusable components.
4. Identify typography.
5. Identify spacing.
6. Identify imagery.
7. Identify interactions.
8. Implement.
```

---

# 60. Design QA

After implementation, perform:

```text
Approved Design
      ↓
Rendered Page
      ↓
Visual Comparison
      ↓
Identify Differences
      ↓
Correct
      ↓
Re-check
```

---

# 61. Visual Comparison Checklist

```text
[ ] Overall structure
[ ] Section order
[ ] Header
[ ] Hero
[ ] Typography
[ ] Color
[ ] Spacing
[ ] Cards
[ ] Images
[ ] Buttons
[ ] Footer
[ ] Mobile behavior
```

---

# 62. Design Drift

Design drift occurs when implementation gradually moves away from the approved design.

Examples:

```text
Original:
10px radius

Implementation:
12px here
16px there
8px elsewhere

Original:
Copper accent

Implementation:
Orange + gold + brown
```

This should be avoided.

---

# 63. Design Drift Prevention

Use:

```text
Approved Design
+
Design Tokens
+
Reusable Components
+
Visual QA
```

rather than page-specific styling decisions.

---

# 64. Design Changes During Development

If the client changes the design:

```text
Design Change
 ↓
Scope Review
 ↓
Approval
 ↓
Update Reference
 ↓
Implementation
 ↓
QA
```

The old design should be marked:

```text
SUPERSEDED
```

where appropriate.

---

# 65. Design File Naming

Use descriptive names.

Good:

```text
home-desktop.png
home-mobile.png
product-detail-desktop.png
product-card.png
rfq-form.png
```

Avoid:

```text
final.png
final2.png
new-final.png
real-final-v3.png
```

---

# 66. Design Versioning

When major changes occur:

```text
v1
v2
v3
```

or another consistent versioning method may be used.

Record which version was approved.

---

# 67. Superseded Designs

Do not delete previously approved designs without a reason.

Move them to:

```text
design/archive/
```

where useful.

This can help explain historical implementation decisions.

---

# 68. Design Archive

Recommended:

```text
design/
├── archive/
│   ├── v1/
│   └── v2/
```

Only approved/current files should remain in the primary implementation directories.

---

# 69. Design Metadata

Where practical, record:

```text
File:
Purpose:
Version:
Status:
Created:
Approved:
Source:
```

---

# 70. Design Source Information

Example:

```text
Source:
Stitch

Design:
Stonebridge Homepage

Version:
3

Status:
Approved

Approved By:
Project Manager

Date:
2026-08-10
```

---

# 71. Design Asset Rights

Design references may contain:

* Stock images
* Fonts
* Logos
* Icons

Verify appropriate rights before using them in production.

A design screenshot is not itself proof that every visible asset is licensed.

---

# 72. Screenshot Limitation

Screenshots show visual intent.

They do not automatically define:

* Exact HTML structure
* Exact CSS implementation
* Exact API behavior
* Exact accessibility behavior
* Exact animation implementation

Those must come from the corresponding package standards and project requirements.

---

# 73. AI Screenshot Interpretation

The AI must interpret screenshots carefully.

Do not infer fictional functionality from visual appearance.

Example:

A button labeled:

```text
Request Consultation
```

means a CTA exists.

It does not automatically mean:

```text
A complete CRM
```

exists behind it.

---

# 74. Design and Functionality

The design determines visual interaction intent.

The functional specification determines exact behavior.

Example:

```text
Design:
Request Quote button

Functional requirement:
Open RFQ form with product context.
```

Both must be satisfied.

---

# 75. Missing Design States

If a required state is not shown:

Examples:

```text
Error
Loading
Empty
Success
```

the AI should use the established design system and UX standards rather than inventing an unrelated appearance.

---

# 76. Design Accessibility Adaptation

Permitted changes may include:

```text
Accessible focus states
Accessible labels
Keyboard interaction
Improved contrast where necessary
Reduced-motion behavior
Semantic structure
```

These should maintain the original visual character.

---

# 77. Design Performance Adaptation

Permitted technical optimizations include:

```text
Responsive images
Lazy loading
Code splitting
Optimized assets
Deferred third-party scripts
```

These should not materially change the visual design.

---

# 78. Design Security Adaptation

Security requirements may require:

```text
CSRF protection
Validation
Spam protection
Safe URL handling
```

These are implementation concerns and should not unnecessarily alter the visual design.

---

# 79. Do Not Hide Required UI

Performance or technical optimization must not remove approved content simply because it is inconvenient to implement.

---

# 80. No Generic UI Substitution

The AI must not substitute:

```text
Generic Bootstrap card
Generic Tailwind card
Generic dashboard layout
Generic SaaS navbar
Generic template footer
```

for approved client components.

---

# 81. No Generic Font Substitution

If the approved design uses:

```text
General Sans
Switzer
IBM Plex Mono
```

or other approved fonts, do not replace them with:

```text
Inter
Arial
system-ui
```

without an explicit decision.

The same principle applies to any client-approved typography.

---

# 82. No Random Icon Substitution

If the design uses:

```text
Phosphor-style line icons
```

do not replace them with:

```text
Emoji
Material icons
Font Awesome
Random SVGs
```

unless approved.

---

# 83. Design-to-Code Mapping

Where practical, maintain a mapping:

```text
Design Element
      ↓
Code Component
```

Example:

```text
Design:
Primary CTA

Code:
<Button variant="primary">
```

```text
Design:
Product Card

Code:
<ProductCard>
```

---

# 84. Design-to-Component Matrix

A project may maintain:

| Design Element | Component   | Status |
| -------------- | ----------- | ------ |
| Header         | Header      | Ready  |
| Hero           | HeroSection | Ready  |
| Product Card   | ProductCard | Ready  |
| RFQ Form       | RfqForm     | Ready  |
| Footer         | Footer      | Ready  |

This helps identify missing reusable components.

---

# 85. Design-to-Page Matrix

Maintain a mapping:

| Design         | Page     | Template       | Status |
| -------------- | -------- | -------------- | ------ |
| Home Desktop   | Home     | HomeTemplate   | Ready  |
| Home Mobile    | Home     | HomeTemplate   | Ready  |
| Products       | Products | ProductListing | Ready  |
| Product Detail | Product  | ProductDetail  | Ready  |

---

# 86. Design Completeness

Before development begins:

```text
[ ] Required page designs exist
[ ] Mobile designs exist where required
[ ] Major components defined
[ ] Design system defined
[ ] Missing states identified
[ ] Design approval obtained
```

---

# 87. Design Readiness

A design is development-ready when:

```text id="kz8f3m"
[ ] Page hierarchy is clear
[ ] Components are identifiable
[ ] Typography is known
[ ] Colors are known
[ ] Spacing is reasonably defined
[ ] Responsive intent is clear
[ ] Key interactions are understood
[ ] Client approval exists
```

---

# 88. Development Blocker

Development should be paused or clarified when:

```text
A critical page has no approved design
AND
The implementation would require inventing the visual structure.
```

Do not silently invent a major page design.

---

# 89. Minor Design Ambiguity

If a small detail is unclear:

```text
Use:
Existing design system
+
Existing component pattern
+
Closest approved reference
```

Prefer consistency over invention.

---

# 90. Major Design Ambiguity

If an important layout or user flow is ambiguous:

```text
Document the ambiguity.
Obtain clarification or approval.
Then implement.
```

---

# 91. AI Design Decision Log

For meaningful visual interpretation decisions, document:

```text
Element:
________________________________

Reference:
________________________________

Decision:
________________________________

Reason:
________________________________
```

This is useful when a screenshot does not completely describe responsive behavior.

---

# 92. Design Review Checklist

Before accepting frontend implementation:

```text
[ ] Correct reference used
[ ] Correct page
[ ] Correct breakpoint
[ ] Correct section order
[ ] Correct typography
[ ] Correct colors
[ ] Correct spacing
[ ] Correct images
[ ] Correct components
[ ] Correct CTA
[ ] Correct responsive behavior
```

---

# 93. Client Design Approval

Record:

```text
Design:
________________________________

Version:
________________________________

Client:
________________________________

Approved By:
________________________________

Approval Date:
________________________________
```

---

# 94. Final Design Handoff

Before development is considered complete:

```text
[ ] Approved design stored
[ ] Current version identified
[ ] Superseded versions archived
[ ] Design system documented
[ ] Mobile references stored
[ ] Component references stored
[ ] Rights reviewed
```

---

# 95. Final Design Implementation Rule

The implementation is considered visually correct when:

```text
Approved Design
       ≈
Implemented UI
```

The objective is not pixel-copying every screenshot artifact.

The objective is faithful implementation of the intended:

```text
Structure
Hierarchy
Style
Spacing
Typography
Interaction
Responsive Behavior
```

---

# 96. Final Principle

The `design/` directory exists to prevent the most common problem in AI-assisted web development:

```text
Approved UI
      ↓
AI starts coding
      ↓
AI improvises
      ↓
Final site looks different
```

The required workflow is:

```text
APPROVED DESIGN
      ↓
INSPECT
      ↓
MAP TO COMPONENTS
      ↓
MAP TO PAGE TEMPLATE
      ↓
IMPLEMENT
      ↓
COMPARE
      ↓
CORRECT
      ↓
QA
```

---

# 97. Final Rule for AI

> **Do not design what has already been designed. Implement it.**

The AI should use creativity for:

```text
Problem solving
Code quality
Architecture
Performance
Accessibility
Error handling
Testing
```

not for replacing the client's approved visual identity.

---

# 98. Final Rule for Developers

> **The design reference is not inspiration. It is an implementation requirement.**

When a design is approved, the developer's job is to faithfully translate it into:

```text
Reusable Components
+
Responsive Layout
+
Accessible Interaction
+
Real Client Content
+
Production-Ready Code
```

---

# 99. Directory Completion Checklist

```text
design/
│
├── README.md
│   [✓] Design usage rules
│   [✓] Source-of-truth hierarchy
│   [✓] AI design restrictions
│   [✓] Visual QA rules
│
├── design-system/
│   [ ] colors.md
│   [ ] typography.md
│   [ ] spacing.md
│   [ ] grid-and-layout.md
│   [ ] borders-radius-shadows.md
│   [ ] icons.md
│   [ ] responsive-rules.md
│
├── desktop/
│   [ ] Approved page references
│
├── mobile/
│   [ ] Approved mobile references
│
└── ui-references/
    [ ] Approved component references
```

---

# 100. End Standard

The Business Growth design system should allow the agency to say:

> **"The client designs the experience. The agency's template provides the engineering system that implements it consistently."**

The final design workflow is:

```text
CLIENT DESIGN
      ↓
DESIGN REFERENCE
      ↓
DESIGN SYSTEM
      ↓
COMPONENT SYSTEM
      ↓
PAGE TEMPLATE
      ↓
CONTENT
      ↓
IMPLEMENTATION
      ↓
VISUAL QA
      ↓
PRODUCTION
```

The `design/` directory must therefore remain a **first-class part of the project**, not an optional collection of screenshots.

# END OF DOCUMENT

```
```
