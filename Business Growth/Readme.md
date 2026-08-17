# `README.md`

````md
# Business Growth
# Reusable Agency Website Template

**Document:** README.md  
**Version:** 1.0  
**Status:** Agency Master Template  
**Package:** Business Growth

---

# 1. What Is Business Growth?

Business Growth is a reusable website development system created by the agency for businesses that need more than a basic online presence.

It is designed to support businesses that need:

- Richer product and service presentation
- Project/portfolio presentation
- Stronger credibility
- Lead generation
- Request-for-Quote workflows
- Marketing-oriented pages
- Blog/news
- Structured content
- Search and filtering where required
- Analytics
- Stronger SEO architecture
- Rich media and downloadable resources
- Multiple locations where applicable

The system is designed to support multiple industries without requiring the agency to rebuild the website architecture from zero for every client.

---

# 2. The Core Philosophy

Business Growth is not a single website design.

It is:

```text
Reusable Engineering System
        +
Reusable Page Templates
        +
Reusable Components
        +
Reusable Business/Data Models
        +
Reusable Technical Standards
        +
Client-Specific Design
        +
Client-Specific Content
        +
Client-Specific Configuration
        ↓
Client Website
````

The architecture is reusable.

The visual design is client-specific.

---

# 3. Most Important Rule

> **The Business Growth template provides the engineering system. The client provides the approved visual experience.**

The AI must never assume that every Business Growth client should look the same.

For example:

```text
Client A
→ Construction
→ Premium navy/copper design

Client B
→ Healthcare
→ Calm clinical design

Client C
→ Automotive
→ Dark performance-oriented design
```

All three may use the same underlying Business Growth architecture while having completely different visual designs.

---

# 4. Core vs Client-Specific

This distinction must remain clear throughout every project.

## Business Growth Core

These are reusable across projects:

```text
Package Definition
Information Architecture Standards
Page Template Architecture
Component Architecture
Content Models
Lead Architecture
SEO Standards
Performance Standards
Security Standards
System Architecture
Testing
Deployment
Maintenance
Handover
AI Development Rules
Scope Control
```

---

## Client-Specific

These are different for every client:

```text
Business Information
Brand Identity
Content
Images
Videos
Documents
Approved UI
Design Manuals
Feature Selection
Navigation
Contact Information
Lead Destinations
SEO Content
Analytics Property
Integrations
Domain
Hosting
```

---

# 5. Design Is Client-Specific

The `design/` directory of an individual client project contains the actual approved UI for that client.

The visual design is represented by:

```text
Client Design References
+
Page-Specific Design Manuals
```

The screenshots alone are not sufficient for the AI implementation workflow.

The textual design manuals explain details that may not be obvious from the images.

---

# 6. Client Design Manual Rule

Each client page should have a page-specific design manual where required.

Example:

```text
design/
└── pages/
    ├── home/
    │   ├── homedesignmanuel.md
    │   ├── desktop.png
    │   └── mobile.png
    │
    ├── about/
    │   ├── aboutusdesignmanuel.md
    │   ├── desktop.png
    │   └── mobile.png
    │
    ├── services/
    │   ├── servicesdesignmanuel.md
    │   ├── desktop.png
    │   └── mobile.png
    │
    └── contact/
        ├── contactdesignmanuel.md
        ├── desktop.png
        └── mobile.png
```

The actual pages depend on the client.

---

# 7. Design Manual Responsibility

A page-specific design manual explains:

* Layout
* Section order
* Typography
* Spacing
* Colors
* Images
* Component behavior
* Desktop behavior
* Mobile behavior
* Interaction states
* Content requirements
* Responsive behavior
* Implementation restrictions

The AI must read the relevant design manual before implementing that page.

---

# 8. Design Source-of-Truth Hierarchy

For visual implementation:

```text
1. Approved Client Design
2. Page-Specific Design Manual
3. Approved Client Design References
4. Business Growth Component System
5. Technical Architecture
6. Developer Judgment
```

Developer preference must not override approved client design.

---

# 9. Main Documentation Map

The Business Growth core contains:

```text
00-package-definition.md
01-information-architecture-and-routing.md
03-page-template-specification.md
04-component-system.md
05-content-model-and-content-structure.md
06-lead-generation-and-rfq.md
07-seo-and-analytics.md
08-performance-and-optimization.md
09-security-standards.md
10-system-architecture-and-technical-standards.md
11-content-and-asset-management.md
12-testing-and-qa.md
13-deployment-and-release.md
14-maintenance-and-monitoring.md
15-client-handover-and-documentation.md
16-project-acceptance-and-final-delivery-checklist.md
17-project-configuration-and-client-setup.md
18-client-instance-bootstrap.md
```

Additional agency workflow documents:

```text
AI-DEVELOPMENT-RULES.md
CLIENT-PROJECT-BRIEF.md
SCOPE-AND-CHANGE-CONTROL.md
```

---

# 10. Recommended Reading Order for AI

An AI coding agent should not immediately start coding.

The recommended order is:

```text
1. README.md
        ↓
2. AI-DEVELOPMENT-RULES.md
        ↓
3. CLIENT-PROJECT-BRIEF.md
        ↓
4. SCOPE-AND-CHANGE-CONTROL.md
        ↓
5. 00-package-definition.md
        ↓
6. 01-information-architecture-and-routing.md
        ↓
7. 03-page-template-specification.md
        ↓
8. 04-component-system.md
        ↓
9. 05-content-model-and-content-structure.md
        ↓
10. 06-lead-generation-and-rfq.md
        ↓
11. Relevant technical standards
        ↓
12. Client design manual
        ↓
13. Client design reference
        ↓
14. Configuration
        ↓
15. Code
```

The AI does not always need to read every document for a tiny change, but it must understand the relevant rules before implementing it.

---

# 11. Project Creation Workflow

A new Business Growth client project should follow:

```text
New Client
    ↓
CLIENT-PROJECT-BRIEF.md
    ↓
Scope Confirmation
    ↓
Client Design
    ↓
Page Design Manuals
    ↓
Project Configuration
    ↓
Content & Assets
    ↓
Development
    ↓
Testing
    ↓
Deployment
    ↓
Handover
    ↓
Maintenance
```

---

# 12. Step 1 — Client Discovery

Before implementation, collect:

```text
Business Information
Business Goals
Target Customers
Products
Services
Projects
Locations
Contact Information
Social Media
Brand Assets
Content
Required Features
Integrations
```

Record them in:

```text
CLIENT-PROJECT-BRIEF.md
```

---

# 13. Step 2 — Scope Confirmation

Determine:

```text
Included
Optional
Custom
Out of Scope
```

Use:

```text
SCOPE-AND-CHANGE-CONTROL.md
```

to prevent uncontrolled scope growth.

---

# 14. Step 3 — Client Design

The client's approved design is created separately.

Possible tools include:

```text
Stitch
Figma
Other approved design tools
```

The final design references are placed into the client project's:

```text
design/
```

directory.

---

# 15. Step 4 — Design Translation

Because the AI may not reliably extract every implementation detail from screenshots, create page-specific design manuals.

Example:

```text
homedesignmanuel.md
aboutusdesignmanuel.md
servicesdesignmanuel.md
contactdesignmanuel.md
```

Each manual translates the visual design into explicit implementation instructions.

---

# 16. Step 5 — Project Configuration

Configure:

```text
Business
Features
Navigation
Contact
Lead Generation
SEO
Analytics
Integrations
Deployment
```

The configuration should determine what capabilities are active.

---

# 17. Step 6 — Content and Assets

Populate:

```text
content/
assets/
```

with verified client information.

Do not invent missing business information.

---

# 18. Step 7 — Development

The AI/developer uses:

```text
Business Growth Core
+
Client Configuration
+
Client Content
+
Client Design Manual
+
Client Design References
```

to implement the site.

---

# 19. Step 8 — Testing

Use:

```text
12-testing-and-qa.md
```

and the appropriate project test resources.

Verify:

* Functionality
* Visual fidelity
* Responsive behavior
* Accessibility
* SEO
* Analytics
* Performance
* Security
* Lead generation

---

# 20. Step 9 — Deployment

Follow:

```text
13-deployment-and-release.md
```

Deployment should be controlled and traceable.

---

# 21. Step 10 — Handover

Use:

```text
15-client-handover-and-documentation.md
16-project-acceptance-and-final-delivery-checklist.md
```

The project should not be considered complete simply because the website is live.

---

# 22. Step 11 — Maintenance

After launch:

```text
14-maintenance-and-monitoring.md
```

governs:

* Monitoring
* Security
* Content updates
* Performance
* Backups
* Lead health
* SEO maintenance
* Dependency maintenance

---

# 23. Recommended Repository Structure

The reusable Business Growth package should conceptually contain:

```text
business-growth/
│
├── README.md
├── AI-DEVELOPMENT-RULES.md
├── CLIENT-PROJECT-BRIEF.md
├── SCOPE-AND-CHANGE-CONTROL.md
│
├── 00-package-definition.md
├── 01-information-architecture-and-routing.md
├── 03-page-template-specification.md
├── 04-component-system.md
├── 05-content-model-and-content-structure.md
├── 06-lead-generation-and-rfq.md
├── 07-seo-and-analytics.md
├── 08-performance-and-optimization.md
├── 09-security-standards.md
├── 10-system-architecture-and-technical-standards.md
├── 11-content-and-asset-management.md
├── 12-testing-and-qa.md
├── 13-deployment-and-release.md
├── 14-maintenance-and-monitoring.md
├── 15-client-handover-and-documentation.md
├── 16-project-acceptance-and-final-delivery-checklist.md
├── 17-project-configuration-and-client-setup.md
│
├── configuration/
├── content/
├── assets/
├── testing/
├── deployment/
└── src/
```

---

# 24. Client Project Structure

When a client project is created from the template:

```text
client-project/
│
├── README.md
│
├── CLIENT-PROJECT-BRIEF.md
│
├── configuration/
│
├── content/
│
├── assets/
│
├── design/
│   ├── README.md
│   │
│   └── pages/
│       ├── home/
│       │   ├── homedesignmanuel.md
│       │   ├── desktop.png
│       │   └── mobile.png
│       │
│       ├── about/
│       │   ├── aboutusdesignmanuel.md
│       │   ├── desktop.png
│       │   └── mobile.png
│       │
│       ├── services/
│       │   ├── servicesdesignmanuel.md
│       │   ├── desktop.png
│       │   └── mobile.png
│       │
│       └── contact/
│           ├── contactdesignmanuel.md
│           ├── desktop.png
│           └── mobile.png
│
└── src/
```

The design pages will vary by client.

---

# 25. Core Template vs Client Project

The agency must clearly distinguish:

```text
CORE
```

from:

```text
CLIENT INSTANCE
```

Core:

```text
Architecture
Components
Templates
Technical Standards
Reusable Logic
```

Client:

```text
Brand
Content
Design
Configuration
Assets
Integrations
```

---

# 26. Do Not Copy Client Content Into the Core

Never place:

```text
Stonebridge
ABC Manufacturing
XYZ Clinic
```

inside the generic Business Growth template.

The core template must remain client-neutral.

---

# 27. Do Not Copy Client Design Into the Core

A client's visual design belongs to that client.

For example:

```text
Stonebridge:
Navy + Copper

Healthcare:
Blue + Teal

Automotive:
Black + Red
```

These should remain separate client projects.

---

# 28. Reusable Improvement Rule

When improving the template, ask:

> "Is this improvement useful for many future Business Growth projects?"

If yes:

```text
Improve Core Template
```

If no:

```text
Keep Change Client-Specific
```

---

# 29. Example of Core Improvement

A bug exists in the shared:

```text
Mobile Navigation
```

Fixing it should improve the reusable component.

```text
Core Template
      ↓
Mobile Navigation Fix
      ↓
Future Projects Benefit
```

---

# 30. Example of Client-Specific Change

Stonebridge wants:

```text
Copper diagonal section separator
```

If this is unique to Stonebridge:

```text
Stonebridge Design
```

not:

```text
Business Growth Core
```

unless the feature becomes a reusable component needed for multiple projects.

---

# 31. Component Reuse

Reusable components should be kept in the core implementation where practical.

Examples:

```text
Button
Header
Footer
Card
ProductCard
ServiceCard
ProjectCard
Form
Gallery
Modal
SectionHeader
```

Their appearance should be driven by the client design system/manual rather than hardcoded to one client.

---

# 32. Page Templates

The page-template system defines reusable structures such as:

```text
Home
About
Listing
Detail
Project
Article
Contact
RFQ
```

The client design manual defines how the selected template should visually appear.

---

# 33. Content Models

The content model defines reusable business entities.

Examples:

```text
Product
Service
Project
Article
Location
Person
Testimonial
Certification
Partner
Resource
```

The client may use only a subset.

---

# 34. Configuration

Configuration determines:

```text
Which features are enabled
Which navigation items appear
Which contact methods appear
Which integrations exist
Which content types are active
```

---

# 35. Design

Design determines:

```text
How the enabled features look.
```

This distinction must remain clear.

---

# 36. Example

Configuration:

```json
{
  "products": true,
  "projects": true,
  "blog": false,
  "rfq": true
}
```

Design manual:

```text
Product card:
Use large image
Copper border
10px radius
Dark navy title
```

Content:

```text
Hydraulic Press
Industrial Equipment
...
```

The final page combines all three.

---

# 37. AI Implementation Model

The AI should conceptually process:

```text
PACKAGE
   ↓
PROJECT BRIEF
   ↓
CONFIGURATION
   ↓
DESIGN MANUAL
   ↓
DESIGN REFERENCE
   ↓
CONTENT
   ↓
COMPONENTS
   ↓
PAGE TEMPLATE
   ↓
IMPLEMENTATION
```

---

# 38. AI Must Not Reverse the Process

Do not:

```text
Screenshot
   ↓
AI decides what product the client needs
```

The project brief determines the business requirement.

The design determines the visual implementation.

The content determines what is displayed.

---

# 39. README Maintenance

This README should be updated when the overall Business Growth workflow changes.

Examples:

```text
New required configuration
New development stage
New project structure
New AI rule
New mandatory QA step
```

---

# 40. README Does Not Replace Technical Documentation

This README is an orientation document.

Detailed technical standards remain in:

```text
10-system-architecture-and-technical-standards.md
```

Detailed testing remains in:

```text
12-testing-and-qa.md
```

Detailed deployment remains in:

```text
13-deployment-and-release.md
```

etc.

---

# 41. README Does Not Replace the Design Manual

The README explains that client design manuals exist.

It does not define the actual visual design of a client.

The actual design is contained in:

```text
client-project/design/
```

---

# 42. README Does Not Replace the Project Brief

The project brief contains the actual client requirements.

The README explains how the project brief fits into the workflow.

---

# 43. README Does Not Replace Configuration

Configuration files contain actual project settings.

This README explains the role of those configuration files.

---

# 44. New Developer Workflow

A developer joining a Business Growth project should:

```text
1. Read README.md
2. Read AI-DEVELOPMENT-RULES.md
3. Read CLIENT-PROJECT-BRIEF.md
4. Inspect configuration
5. Inspect design pages
6. Read relevant package standards
7. Inspect existing source code
8. Begin implementation
```

---

# 45. New AI Agent Workflow

An AI agent should:

```text
1. Read README.md
2. Identify the requested task.
3. Read the relevant package standards.
4. Read the client project brief.
5. Read relevant configuration.
6. Read the relevant page design manual.
7. Inspect existing components.
8. Implement.
9. Test.
10. Report actual results.
```

---

# 46. Do Not Load Everything Unnecessarily

For a small task, the AI does not need to repeatedly process the entire repository.

Example:

Changing a product card should primarily require:

```text
04-component-system.md
05-content-model-and-content-structure.md
Relevant design manual
Relevant design reference
Existing ProductCard
Tests
```

This keeps the development process efficient.

---

# 47. Source-of-Truth Rule

When two sources conflict:

```text
STOP
 ↓
Identify conflict
 ↓
Determine authority
 ↓
Resolve
 ↓
Document if necessary
```

Do not silently choose one.

---

# 48. No Hidden Decisions

Important decisions should be visible through:

```text
Configuration
Documentation
Code
Change Request
Design Manual
```

Avoid critical behavior that exists only because:

> "The AI decided to do it this way."

---

# 49. Quality Principle

The reusable template should optimize for:

```text
Consistency
+
Speed
+
Quality
+
Maintainability
```

not simply:

```text
Fastest possible code generation
```

---

# 50. Agency Scaling Principle

The purpose of Business Growth is to allow the agency to handle more clients without multiplying technical complexity.

The desired outcome is:

```text
1 Core System
       +
Many Client Configurations
       +
Many Client Designs
       +
Many Client Content Sets
       ↓
Many Professional Websites
```

---

# 51. Client Independence

Each client project should remain independently deployable and maintainable.

A problem in:

```text
Client A
```

must not automatically affect:

```text
Client B
```

---

# 52. Core Template Updates

When a core template update is made:

```text
Core Template
      ↓
Test
      ↓
Version
      ↓
New Projects
```

Existing production projects should not be automatically modified without review.

---

# 53. Client Upgrade

A client project may adopt a newer core version after:

```text
Compatibility Review
 ↓
Migration
 ↓
Testing
 ↓
Approval
 ↓
Deployment
```

---

# 54. Final Project Workflow

The complete Business Growth workflow is:

```text
                    BUSINESS GROWTH CORE
                             │
                             ↓
                    CLIENT DISCOVERY
                             │
                             ↓
                 CLIENT-PROJECT-BRIEF.md
                             │
                             ↓
                    SCOPE CONFIRMATION
                             │
                             ↓
                    CLIENT UI DESIGN
                             │
                             ↓
                   PAGE DESIGN MANUALS
                             │
                             ↓
                      CONFIGURATION
                             │
                             ↓
                     CONTENT + ASSETS
                             │
                             ↓
                       DEVELOPMENT
                             │
                             ↓
                           QA
                             │
                             ↓
                        RELEASE
                             │
                             ↓
                       DEPLOYMENT
                             │
                             ↓
                        HANDOVER
                             │
                             ↓
                    WARRANTY / MAINTENANCE
```

---

# 55. Final Definition of the Template

Business Growth is complete as a reusable agency system when it provides:

```text
[✓] Package specification
[✓] Information architecture
[✓] Page templates
[✓] Component architecture
[✓] Content model
[✓] Lead/RFQ architecture
[✓] SEO standards
[✓] Performance standards
[✓] Security standards
[✓] System architecture
[✓] Content/asset standards
[✓] Testing standards
[✓] Deployment standards
[✓] Maintenance standards
[✓] Handover standards
[✓] Acceptance standards
[✓] Project configuration
[✓] AI development rules
[✓] Client project brief
[✓] Scope/change control
```

---

# 56. Final Definition of a Client Instance

A client project is complete when it contains:

```text
[✓] Approved client requirements
[✓] Approved client design
[✓] Page-specific design manuals
[✓] Client content
[✓] Client assets
[✓] Project configuration
[✓] Implemented source code
[✓] QA records
[✓] Production deployment
[✓] Handover documentation
```

---

# 57. The Most Important Architectural Separation

Remember:

```text
BUSINESS GROWTH CORE
        │
        │ reusable
        ↓
┌───────────────────────────────┐
│ Architecture                  │
│ Components                    │
│ Templates                     │
│ Content Models                │
│ Lead Logic                    │
│ SEO                           │
│ Security                      │
│ Performance                   │
│ Testing                       │
│ Deployment                    │
└───────────────────────────────┘
        │
        │ customized per client
        ↓
┌───────────────────────────────┐
│ Client Design                 │
│ Client Design Manuals         │
│ Client Content                │
│ Client Assets                 │
│ Client Configuration          │
│ Client Integrations           │
└───────────────────────────────┘
        │
        ↓
CLIENT WEBSITE
```

---

# 58. Final Principle

> **Build the engineering system once. Build the client's visual experience intentionally. Configure the business information separately. Keep the two systems connected but independent.**

This allows the agency to reuse the Business Growth foundation without making every client website look like the same template.

The AI should therefore never think:

> "I am generating a Business Growth website."

It should think:

> **"I am implementing this specific client's approved website using the Business Growth engineering system."**

---

# END OF DOCUMENT

```
```
