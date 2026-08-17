# `04-component-system.md`

````md
# Business Growth
# Component System Specification

**Document:** 04-component-system.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines the reusable component system for the Business Growth website template.

The Business Growth component system is designed to support multiple business sectors through a common, configurable architecture.

The component library must be broad enough to support the sectors included in the Business Growth package:

- Automotive dealerships
- Manufacturing companies
- Construction companies
- Engineering firms
- Import/export businesses
- Hotels and resorts
- Educational institutions
- Healthcare providers
- Travel agencies
- Real estate companies
- Professional consulting firms

The purpose is not to make every client's website contain every component.

The purpose is:

> **Build a sufficiently complete component library so that each client project can assemble the components it actually needs without requiring the agency to redesign or rebuild the system from scratch.**

---

# 2. Component System Philosophy

The component architecture follows:

```text
Business Growth
      ↓
Component Library
      ↓
Client Requirements
      ↓
Enabled Components
      ↓
Approved Client UI
      ↓
Content
      ↓
Final Website
````

Components must be:

* Reusable
* Configurable
* Accessible
* Responsive
* Maintainable
* Visually consistent
* Data-driven where appropriate
* Suitable for multiple sectors

---

# 3. Component vs Template

A page template defines the structure of a page.

A component provides a reusable piece of that page.

Example:

```text
Product Detail Template
        ↓
    ┌───┼───────────────┐
    ↓   ↓               ↓
Product Gallery
Product Summary
Specification Table
Download List
Related Products
Inquiry CTA
```

The component system must therefore be more granular than the page-template system.

---

# 4. Component Hierarchy

The component architecture should follow:

```text
Design Tokens
     ↓
Primitive Components
     ↓
UI Components
     ↓
Content Components
     ↓
Business Components
     ↓
Page Sections
     ↓
Page Templates
```

Example:

```text
Button
  ↓
CTA Button
  ↓
Inquiry CTA
  ↓
Product Inquiry Section
  ↓
Product Detail Template
```

---

# 5. Component Categories

The Business Growth component library should contain:

```text
01. Global / Layout
02. Navigation
03. Typography
04. Buttons & CTAs
05. Forms
06. Content Cards
07. Product Components
08. Service Components
09. Project / Portfolio Components
10. Business / Company Components
11. People / Team Components
12. Location Components
13. Trust / Credibility Components
14. Marketing / Content Components
15. Resource / Download Components
16. Lead Generation Components
17. Media Components
18. Data / Specification Components
19. Search / Filter Components
20. Feedback / State Components
21. Accessibility Components
22. Footer Components
```

---

# 6. Global Layout Components

Core reusable components:

```text
Container
PageWrapper
Section
SectionHeader
SectionHeading
ContentWrapper
Grid
Stack
Divider
AspectRatio
```

These components provide structural consistency.

---

# 7. Container

The Container controls maximum content width and horizontal spacing.

Responsibilities:

* Maximum width
* Responsive padding
* Horizontal alignment

It must use the project's approved design tokens.

Do not create different arbitrary container widths for individual sections unless required by the approved UI.

---

# 8. Section

The Section component provides:

* Vertical spacing
* Background
* Optional container
* Optional section ID
* Responsive behavior

Possible variants:

```text
default
muted
dark
accent
image
full-width
```

Only variants actually used by the design system should be implemented.

---

# 9. Section Header

Reusable section heading structure:

```text
Eyebrow
Heading
Supporting Text
Optional CTA
```

Example:

```text
OUR SERVICES

Solutions built around your business.

Explore our capabilities.

[ View All Services ]
```

---

# 10. Grid Component

The Grid component should support:

* 2-column
* 3-column
* 4-column
* Responsive stacking
* Unequal spans where approved

The Grid component should not contain business-specific logic.

---

# 11. Navigation Components

Core navigation components:

```text
Header
PrimaryNavigation
NavItem
MobileNavigation
MobileMenu
Breadcrumbs
StickyHeader
UtilityNavigation
CTAHeader
```

Not every project uses every navigation component.

---

# 12. Header

The Header may contain:

```text
Logo
Primary navigation
Secondary navigation where approved
Contact details where approved
Primary CTA
Language control where approved
```

The exact structure is controlled by the approved client UI.

---

# 13. Sticky Header

Optional.

Supports:

```text
Normal State
Scrolled State
Mobile State
```

The sticky header must not obscure page content.

---

# 14. Breadcrumbs

The Breadcrumb component supports:

```text
Home
Category
Subcategory
Current Page
```

It should be generated from actual route hierarchy.

Do not hardcode unrelated breadcrumb labels.

---

# 15. Mobile Navigation

The MobileNavigation component must support:

* Open
* Close
* Focus management
* Keyboard interaction
* Scroll behavior
* Active route
* CTA access

The visual implementation follows the approved client UI.

---

# 16. Typography Components

Reusable typography primitives may include:

```text
Display
PageTitle
SectionTitle
Subheading
Body
Lead
Caption
Metadata
Label
Quote
```

These should map to the Design System's typography tokens.

---

# 17. Button Components

Base Button:

```text
Button
```

Variants may include:

```text
Primary
Secondary
Outline
Ghost
Text
Icon
```

States:

```text
Default
Hover
Focus
Active
Disabled
Loading
```

Only variants required by the design system should be enabled.

---

# 18. CTA Components

Business Growth needs more conversion-oriented CTA components.

Examples:

```text
PrimaryCTA
SecondaryCTA
LeadCTA
InquiryCTA
RFQCTA
PhoneCTA
EmailCTA
WhatsAppCTA
ConsultationCTA
DownloadCTA
```

---

# 19. CTA Context

The CTA terminology should adapt to the business.

Examples:

```text
Manufacturing
→ Request Quote

Construction
→ Request Consultation

Consulting
→ Book Consultation

Healthcare
→ Request an Appointment

Education
→ Request Information

Travel
→ Request a Trip

Real Estate
→ Enquire About Property

Hotel
→ Make an Inquiry
```

The component structure can remain the same while the label and destination change.

---

# 20. Form System

Base form components:

```text
Form
FormField
Label
Input
Textarea
Select
MultiSelect
Checkbox
Radio
FileUpload
FormSection
FormActions
FormError
FormSuccess
```

---

# 21. Form States

All interactive forms must support:

```text
Default
Focused
Filled
Invalid
Submitting
Success
Error
Disabled
```

---

# 22. Contact Form

The ContactForm component supports:

* Name
* Email
* Phone
* Subject
* Message

Fields must be configurable.

Do not force unnecessary fields on every client.

---

# 23. RFQ Form

The RFQForm is a Business Growth-specific lead component.

Potential sections:

```text
Contact Information
Request Details
Product / Service
Quantity
Location
Timeline
Budget where appropriate
Message
Attachments where approved
```

The field set must be configurable per client.

---

# 24. Contextual Inquiry Form

The system should support inquiry forms associated with a specific entity.

Examples:

```text
Product Inquiry
Service Inquiry
Project Inquiry
Property Inquiry
Tour Inquiry
Room Inquiry
Program Inquiry
```

The component should be capable of receiving contextual information such as:

```text
contentType
contentId
contentTitle
```

without displaying unnecessary technical information to the user.

---

# 25. Product Components

Product-related components must support sectors such as:

* Manufacturing
* Automotive
* Import/export
* Real estate where applicable
* Other product-oriented businesses

Components:

```text
ProductCard
ProductGrid
ProductCategoryCard
ProductCategoryNavigation
ProductGallery
ProductSummary
ProductFeatures
ProductSpecifications
ProductApplications
ProductDownloads
RelatedProducts
ProductInquiry
ProductComparison
```

---

# 26. Product Card

Possible content:

```text
Image
Category
Name
Short Description
Key Metadata
CTA
```

Variants may include:

```text
Compact
Standard
Featured
Horizontal
```

Only implement variants that are required by approved designs.

---

# 27. Product Gallery

Supports:

* Primary image
* Thumbnail gallery
* Lightbox
* Previous/next
* Caption where appropriate

Must remain responsive.

---

# 28. Product Specifications

Supports structured technical information.

Possible formats:

```text
Specification Table
Key/Value List
Specification Groups
Feature Grid
```

The actual display should follow the approved UI.

---

# 29. Product Comparison

Optional component.

Useful when the client's business requires visitors to compare products.

Possible comparison attributes:

* Model
* Capacity
* Dimensions
* Features
* Technical specifications

Do not implement product comparison simply because it exists in the component library.

---

# 30. Product Downloads

Supports:

```text
Brochure
Catalog
Data Sheet
Technical Specification
Manual
Certification
```

Each resource should expose:

```text
Title
Type
Optional size
Download action
```

---

# 31. Service Components

Service-related components:

```text
ServiceCard
ServiceGrid
ServiceCategory
ServiceCategoryNavigation
ServiceHero
ServiceCapabilities
ServiceBenefits
ServiceProcess
ServiceApplications
RelatedServices
ServiceInquiry
```

Applicable to:

* Construction
* Engineering
* Consulting
* Healthcare
* Education
* Travel
* Hotels
* Automotive services
* Other service businesses

---

# 32. Service Process Component

Useful for services that follow a defined process.

Example:

```text
01 Consultation
02 Planning
03 Execution
04 Quality Review
05 Delivery
```

The number of steps must be configurable.

---

# 33. Service Benefits Component

Can display:

```text
Benefit
Icon
Description
```

Useful for communicating value without requiring long paragraphs.

---

# 34. Service Applications

Useful where a service applies to different sectors or use cases.

Example:

```text
Healthcare
Manufacturing
Education
Government
Commercial
```

Applications are client-specific and should not be fabricated.

---

# 35. Project Components

Components:

```text
ProjectCard
ProjectGrid
ProjectCategory
ProjectFilter
ProjectGallery
ProjectHero
ProjectMetadata
ProjectTimeline
ProjectChallenge
ProjectSolution
ProjectResults
RelatedProjects
ProjectInquiry
```

Applicable especially to:

* Construction
* Engineering
* Manufacturing
* Consulting
* Real estate
* Automotive
* Education
* Healthcare

---

# 36. Project Metadata

Possible metadata:

```text
Client
Location
Year
Category
Industry
Duration
Scope
Value where approved
```

Every field is optional.

---

# 37. Project Challenge / Solution

Case-study-style projects may use:

```text
Challenge
Solution
Outcome
```

This creates stronger proof than a basic gallery.

Only use these sections when the client provides meaningful content.

---

# 38. Project Results

Possible results:

```text
Completion
Performance improvement
Delivery outcome
Efficiency
Scale
Milestone
```

All quantitative claims must be verified.

---

# 39. Company Components

Business identity components:

```text
CompanyIntro
CompanyStats
MissionVision
Values
CompanyHistory
Timeline
LeadershipMessage
CompanyMilestones
```

---

# 40. Company Statistics

Possible metrics:

```text
Years
Projects
Locations
Employees
Customers
Products
Industries
```

Do not display fabricated numbers.

---

# 41. Timeline Component

Supports:

```text
Year
Milestone
Description
Image
```

Applicable to:

* Manufacturing
* Construction
* Hotels
* Education
* Healthcare
* Consulting
* Engineering
* Automotive
* Other established businesses

---

# 42. People Components

Components:

```text
TeamCard
TeamGrid
TeamMemberSummary
TeamMemberDetail
LeadershipCard
DoctorCard
ConsultantCard
InstructorCard
AgentCard
```

These are data/content variants using common underlying design principles.

The final UI must remain consistent.

---

# 43. Sector-Specific People Use

The same underlying person component can represent:

```text
Healthcare
→ Doctor / Specialist

Education
→ Lecturer / Instructor

Consulting
→ Consultant / Partner

Real Estate
→ Agent / Advisor

Travel
→ Travel Specialist

Hotel
→ Management / Staff

Automotive
→ Sales Specialist / Service Expert
```

The component should be configurable rather than rebuilt for each sector.

---

# 44. Location Components

Components:

```text
LocationCard
LocationGrid
LocationSelector
LocationDetails
LocationMap
DirectionsCTA
OfficeHours
```

Useful for:

* Hotels
* Automotive dealerships
* Healthcare
* Education
* Real estate
* Travel
* Consulting
* Multi-branch businesses

---

# 45. Accommodation Components

Business Growth must support hotel/resort clients.

Components may include:

```text
RoomCard
RoomGrid
RoomDetail
AmenityList
FacilityCard
PackageCard
OfferCard
```

These are informational/inquiry components.

They do not automatically create a booking engine.

---

# 46. Travel Components

Travel businesses may require:

```text
DestinationCard
DestinationGrid
TourCard
TourDetail
Itinerary
ActivityList
PackageCard
TravelInquiry
```

Possible content:

```text
Destination
Duration
Activities
Highlights
Included
Excluded
Itinerary
Inquiry CTA
```

---

# 47. Education Components

Educational institutions may require:

```text
ProgramCard
ProgramGrid
ProgramDetail
DepartmentCard
FacultyCard
CampusCard
AdmissionCTA
EventCard
CourseHighlight
```

Possible content:

```text
Program
Duration
Level
Requirements
Career Path
Application CTA
```

This does not create a student management system.

---

# 48. Healthcare Components

Healthcare providers may require:

```text
DoctorCard
DoctorGrid
SpecialtyCard
DepartmentCard
MedicalServiceCard
FacilityCard
AppointmentRequest
LocationCard
FAQ
```

The appointment component is an inquiry/request component unless a booking engine is separately purchased.

---

# 49. Real Estate Components

Real estate businesses may require:

```text
PropertyCard
PropertyGrid
PropertyFilter
PropertyDetail
PropertyGallery
PropertySpecifications
AmenityList
LocationMap
PropertyInquiry
DevelopmentCard
```

Possible data:

```text
Property Type
Location
Size
Bedrooms
Bathrooms
Status
Price where approved
Amenities
```

Displaying property information does not create e-commerce or transaction functionality.

---

# 50. Automotive Components

Automotive dealerships may require:

```text
VehicleCard
VehicleGrid
VehicleFilter
VehicleDetail
VehicleGallery
VehicleSpecifications
FeatureList
ModelComparison
DealerLocation
TestDriveRequest
VehicleInquiry
```

Possible information:

```text
Make
Model
Year
Body Type
Engine
Transmission
Fuel Type
Mileage
Features
```

Test-drive requests remain lead-generation forms unless booking functionality is separately approved.

---

# 51. Import / Export Components

Import/export companies may require:

```text
ProductCatalog
ProductCategory
MarketCard
CountryCard
SupplyRegion
ExportCapability
LogisticsInformation
ProductInquiry
RFQ
```

The component system should support geographic and product-oriented content.

---

# 52. Engineering Components

Engineering firms may require:

```text
EngineeringServiceCard
CapabilityCard
IndustryCard
TechnicalSpecification
ProjectCard
CertificationCard
TeamExpertise
ConsultationCTA
```

The components should support technical presentation without becoming an engineering application.

---

# 53. Consulting Components

Consulting firms may require:

```text
ConsultingServiceCard
IndustryCard
CaseStudyCard
ConsultantCard
ExpertiseCard
InsightCard
ConsultationCTA
```

These components should emphasize expertise, evidence, and thought leadership.

---

# 54. Trust Components

Universal trust components:

```text
TestimonialCard
ClientLogo
PartnerLogo
CertificationCard
AwardCard
TrustMetric
TrustBadge
CaseStudySummary
```

Each trust element requires verified content.

---

# 55. Marketing Components

Marketing/content components:

```text
FeaturedArticle
ArticleCard
ArticleGrid
CategoryTabs
ContentBadge
NewsletterCTA where approved
SocialLinks
SocialProof
FeaturedContent
```

Newsletter functionality is only included if explicitly enabled.

---

# 56. Blog Components

```text
BlogHero
FeaturedArticle
ArticleCard
ArticleGrid
ArticleHeader
ArticleBody
ArticleMetadata
RelatedArticles
ArticleCategory
AuthorCard
```

The article system should remain lightweight.

It is not intended to replicate a full CMS/editorial platform.

---

# 57. Resource Components

```text
ResourceCard
ResourceGrid
DownloadCard
DocumentMetadata
CatalogCard
BrochureCard
TechnicalDocumentCard
```

The underlying component can support multiple resource types through configuration.

---

# 58. Search Components

Components:

```text
SearchInput
SearchButton
SearchResults
SearchResultCard
SearchFilters
SearchEmptyState
SearchPagination
```

Search should only be enabled when the client has enough content to justify it.

---

# 59. Filter Components

Components:

```text
FilterBar
FilterGroup
FilterItem
ActiveFilter
FilterSummary
FilterReset
MobileFilterSheet
```

Filters must work consistently across:

* Products
* Projects
* Services
* Properties
* Vehicles
* Tours
* Articles

where applicable.

---

# 60. Pagination Components

```text
Pagination
LoadMore
InfiniteScroll
```

Use only the interaction pattern specified in the approved UI.

For a small content set, pagination may not be required.

---

# 61. Feedback Components

Global state components:

```text
LoadingState
Skeleton
EmptyState
ErrorState
SuccessState
Alert
Toast
InlineMessage
```

These must have consistent visual behavior.

---

# 62. Modal / Sheet Components

```text
Modal
Drawer
BottomSheet
Dialog
Lightbox
```

Requirements:

* Focus trapping where appropriate
* Escape support
* Accessible labeling
* Close control
* Mobile behavior
* Scroll management

---

# 63. Media Components

```text
Image
ResponsiveImage
ImageGallery
Lightbox
Video
VideoEmbed
MediaGrid
BeforeAfter
```

Only use advanced media components when required.

---

# 64. Before / After Component

Useful for:

* Construction
* Engineering
* Healthcare
* Automotive services
* Real estate
* Renovation-related businesses

The component should present two related visuals clearly.

---

# 65. Comparison Component

Comparison patterns may support:

```text
Product comparison
Service comparison
Property comparison
Vehicle comparison
Package comparison
```

The component must remain data-driven.

---

# 66. Pricing / Value Display

Price presentation is not a default Business Growth requirement.

Where a business needs price information, use an appropriate display:

```text
Starting From
Price Range
Request Quote
Contact for Pricing
```

Do not create an e-commerce pricing system.

---

# 67. FAQ Component

FAQ can be useful across:

* Healthcare
* Education
* Hotels
* Travel
* Real estate
* Automotive
* Consulting
* Manufacturing

Components:

```text
FAQSection
FAQItem
FAQCategory
```

Use accessible disclosure behavior.

---

# 68. Accordion

Accordion may be used for:

* FAQs
* Specifications
* Long content
* Process steps
* Mobile filter groups

Do not hide important information behind accordion controls if it should always be immediately visible.

---

# 69. Table Component

Generic table component may support:

```text
Specifications
Pricing information where appropriate
Schedules
Comparisons
Technical data
```

Requirements:

* Responsive behavior
* Semantic table markup
* Accessible headers
* Readable typography

---

# 70. Notification / Status Components

Components:

```text
SuccessMessage
ErrorMessage
WarningMessage
InfoMessage
```

Use for:

* Form feedback
* Download status
* Search errors
* API errors

Do not use excessive notification styling.

---

# 71. Social Components

```text
SocialLinks
SocialShare
SocialProof
SocialIcon
```

Only show verified client accounts.

Social sharing should not collect unnecessary user information.

---

# 72. Footer Components

The Business Growth footer may be more extensive than Starter Presence.

Possible components:

```text
Footer
FooterColumn
FooterNavigation
FooterContact
FooterLocations
FooterSocial
FooterCTA
FooterLegal
```

The exact footer is determined by the approved UI.

---

# 73. Utility Components

Examples:

```text
ScrollToTop
BackToTop
CopyButton
ExternalLink
DownloadButton
PrintButton where approved
```

Only implement utilities that provide real user value.

---

# 74. Data Components

Reusable data display:

```text
Stat
StatGrid
MetadataList
KeyValueList
SpecificationList
FeatureList
Timeline
ProgressIndicator
```

The component must remain visually aligned with the approved design.

---

# 75. Metadata Component

Reusable for:

```text
Project location
Project date
Product code
Article date
Property details
Tour duration
Vehicle information
```

Example:

```text
LOCATION
Addis Ababa

YEAR
2026

CATEGORY
Commercial
```

---

# 76. Feature List

Useful across:

* Products
* Services
* Properties
* Vehicles
* Hotels
* Tours
* Programs
* Consulting offerings

The same base component may receive different content.

---

# 77. Related Content Component

Generic:

```text
RelatedContent
```

may accept:

```text
relatedProducts
relatedServices
relatedProjects
relatedArticles
relatedProperties
relatedTours
```

This allows the same component architecture to support different sectors.

---

# 78. Lead Generation Components

Business Growth lead components should include:

```text
LeadCTA
InquiryCTA
RFQCTA
ProductInquiry
ServiceInquiry
PropertyInquiry
VehicleInquiry
TourInquiry
AppointmentRequest
ConsultationRequest
InformationRequest
```

These may share a common underlying form system while using different labels and contextual fields.

---

# 79. Contextual CTA Mapping

Examples:

```text
Automotive
→ Request Test Drive
→ Vehicle Inquiry

Manufacturing
→ Request Quote
→ Product Inquiry

Construction
→ Request Consultation
→ Project Inquiry

Hotel
→ Make an Inquiry

Education
→ Request Information

Healthcare
→ Request Appointment

Travel
→ Request a Trip

Real Estate
→ Enquire About Property

Consulting
→ Book Consultation
```

The component architecture should support all these actions.

---

# 80. Component Configuration

Components should support configuration rather than duplicated implementations.

Example:

```js
<InquiryCTA
  label="Request a Quote"
  type="product"
  targetId={product.id}
/>
```

The actual syntax may differ.

The principle is:

```text
One Component
+
Different Configuration
=
Different Business Use Case
```

---

# 81. Component Variants

Variants should represent meaningful visual or behavioral differences.

Good:

```text
ProductCard
  variant="featured"

ProductCard
  variant="compact"
```

Bad:

```text
ProductCardBlue
ProductCardNew
ProductCardFinal
ProductCardModern
```

---

# 82. Component Data Requirements

Every business component should define the data it requires.

Example:

```text
ProductCard

Required:
- title
- image

Optional:
- category
- description
- metadata
- CTA
```

This prevents components from becoming dependent on unnecessary data.

---

# 83. Required vs Optional Data

A component must clearly distinguish:

```text
Required
Optional
Conditional
```

Example:

```text
ProjectCard

Required:
title
image

Optional:
location
year
category
description

Conditional:
client
value
status
```

---

# 84. Missing Data Behavior

When optional data is missing:

```text
Do not show empty label.
Do not show placeholder.
Do not show blank card area unnecessarily.
```

Example:

If no project year:

```text
Do not display:
YEAR —
```

unless the approved UI specifically uses placeholders.

---

# 85. Content-Aware Components

Components must adapt naturally to content length.

Test:

* Short title
* Long title
* Short description
* Long description
* Missing optional metadata

The component must not break the layout.

---

# 86. Component Accessibility

Every reusable interactive component must define:

```text
Keyboard behavior
Focus behavior
Screen-reader labeling
Semantic HTML
Error handling
Touch behavior
```

This is especially important for:

* Modals
* Sheets
* Filters
* Search
* Accordions
* Forms
* Lightboxes

---

# 87. Component Responsive Behavior

Each component must define:

```text
Desktop
Tablet
Mobile
```

behavior.

Example:

```text
ProductGrid

Desktop:
4 columns

Tablet:
2 columns

Mobile:
1 column
```

The actual configuration depends on the approved UI.

---

# 88. Mobile-Specific Components

Some desktop components may need a different interaction pattern on mobile.

Examples:

```text
Desktop Filter Sidebar
        ↓
Mobile Filter Sheet

Desktop Mega Navigation
        ↓
Mobile Navigation Panel

Desktop Specification Table
        ↓
Mobile Scroll / Key-Value Layout
```

This is acceptable when specified by the approved UI.

---

# 89. Component Interaction Rules

Components must not unexpectedly control unrelated page behavior.

For example:

A ProductCard should not:

* Control global navigation
* Modify unrelated content
* Trigger arbitrary analytics events without configuration

Component responsibilities should remain clear.

---

# 90. Component Naming Rules

Use descriptive names.

Preferred:

```text
ProductCard
ProductGallery
ProjectMetadata
RFQForm
LocationCard
TestimonialCard
```

Avoid:

```text
Card2
Box
SectionNew
ComponentX
```

---

# 91. Component Directory Structure

Recommended:

```text
src/components/
│
├── common/
├── navigation/
├── forms/
├── cards/
├── products/
├── services/
├── projects/
├── people/
├── locations/
├── marketing/
├── leads/
├── media/
├── data-display/
├── search/
└── feedback/
```

The actual folder structure may be adapted to the chosen architecture.

---

# 92. Sector Capability Matrix

The component system should be capable of supporting:

| Component Capability | Automotive | Manufacturing | Construction | Engineering | Import/Export |    Hotel | Education | Healthcare |   Travel | Real Estate | Consulting |
| -------------------- | ---------: | ------------: | -----------: | ----------: | ------------: | -------: | --------: | ---------: | -------: | ----------: | ---------: |
| Product Card         |          ✓ |             ✓ |     Optional |    Optional |             ✓ | Optional |  Optional |   Optional | Optional |           ✓ |   Optional |
| Product Detail       |          ✓ |             ✓ |     Optional |    Optional |             ✓ | Optional |  Optional |   Optional | Optional |           ✓ |   Optional |
| Service Card         |          ✓ |             ✓ |            ✓ |           ✓ |             ✓ |        ✓ |         ✓ |          ✓ |        ✓ |           ✓ |          ✓ |
| Service Detail       |          ✓ |             ✓ |            ✓ |           ✓ |             ✓ |        ✓ |         ✓ |          ✓ |        ✓ |           ✓ |          ✓ |
| Project Card         |   Optional |             ✓ |            ✓ |           ✓ |             ✓ | Optional |         ✓ |          ✓ | Optional |           ✓ |          ✓ |
| Project Detail       |   Optional |             ✓ |            ✓ |           ✓ |             ✓ | Optional |         ✓ |          ✓ | Optional |           ✓ |          ✓ |
| Team / People        |          ✓ |             ✓ |     Optional |           ✓ |      Optional |        ✓ |         ✓ |          ✓ | Optional |           ✓ |          ✓ |
| Location             |          ✓ |             ✓ |     Optional |           ✓ |             ✓ |        ✓ |         ✓ |          ✓ |        ✓ |           ✓ |          ✓ |
| Certifications       |   Optional |             ✓ |            ✓ |           ✓ |             ✓ | Optional |         ✓ |          ✓ | Optional |           ✓ |          ✓ |
| Blog / News          |          ✓ |             ✓ |            ✓ |           ✓ |             ✓ |        ✓ |         ✓ |          ✓ |        ✓ |           ✓ |          ✓ |
| Testimonials         |          ✓ |             ✓ |            ✓ |           ✓ |             ✓ |        ✓ |         ✓ |          ✓ |        ✓ |           ✓ |          ✓ |
| RFQ                  |          ✓ |             ✓ |            ✓ |           ✓ |             ✓ | Optional |  Optional |   Optional |        ✓ |           ✓ |   Optional |
| Appointment Request  |   Optional |      Optional |     Optional |    Optional |      Optional | Optional |         ✓ |          ✓ | Optional |    Optional |   Optional |
| Property Components  |   Optional |      Optional |     Optional |    Optional |      Optional | Optional |  Optional |   Optional | Optional |           ✓ |   Optional |
| Vehicle Components   |          ✓ |      Optional |     Optional |    Optional |      Optional | Optional |  Optional |   Optional | Optional |    Optional |   Optional |
| Accommodation        |   Optional |      Optional |     Optional |    Optional |      Optional |        ✓ |  Optional |   Optional | Optional |    Optional |   Optional |
| Travel Package       |   Optional |      Optional |     Optional |    Optional |      Optional | Optional |  Optional |   Optional |        ✓ |    Optional |   Optional |
| Downloads            |          ✓ |             ✓ |            ✓ |           ✓ |             ✓ |        ✓ |         ✓ |          ✓ |        ✓ |           ✓ |          ✓ |
| Search               |   Optional |             ✓ |     Optional |           ✓ |             ✓ | Optional |  Optional |          ✓ |        ✓ |           ✓ |   Optional |
| Filters              |          ✓ |             ✓ |     Optional |    Optional |             ✓ | Optional |  Optional |   Optional |        ✓ |           ✓ |   Optional |
| Comparison           |          ✓ |             ✓ |     Optional |    Optional |      Optional | Optional |  Optional |   Optional | Optional |           ✓ |   Optional |

This matrix is a capability map.

It does **not** mean every sector requires every component.

---

# 93. Component Reuse Principle

The agency should prefer:

```text
Common Component
      +
Configurable Data
      +
Configurable Labels
      +
Configurable Behavior
```

over:

```text
Separate Component for Every Sector
```

Example:

```text
InquiryForm
```

can support:

```text
Vehicle Inquiry
Product Inquiry
Property Inquiry
Tour Inquiry
Service Inquiry
Appointment Request
Consultation Request
```

without requiring six unrelated form implementations.

---

# 94. When Components Should Be Sector-Specific

A separate component is appropriate when the interaction or information structure is genuinely different.

Examples:

```text
VehicleComparison
```

may be distinct from:

```text
ProductComparison
```

if their data and interaction models are materially different.

Likewise:

```text
RoomCard
```

may differ significantly from:

```text
ProductCard
```

because accommodation has different information requirements.

The goal is not forced abstraction.

The goal is appropriate reuse.

---

# 95. Component Extension Rule

If a component is missing:

1. Check whether an existing component can be configured.
2. Check whether an existing variant solves the problem.
3. If not, design a reusable extension.
4. Determine whether the extension is package-wide or project-specific.
5. Document it.
6. Add it to the component library if reusable.

Do not create a one-off component without considering future reuse.

---

# 96. Component Change Management

If a reusable component changes:

```text
Existing Component
      ↓
Change Request
      ↓
Impact Analysis
      ↓
Update Approved UI
      ↓
Update Component
      ↓
Test All Variants
      ↓
Test Affected Client Projects
```

---

# 97. Component Versioning

Reusable components may require version tracking where the template is deployed across multiple clients.

Example:

```text
ProductCard v1.0
ProductCard v1.1
ProductCard v2.0
```

Major component changes should be documented.

---

# 98. Component Testing

Each reusable component should be tested independently where practical.

Test:

```text
Default
Variant
Missing optional fields
Long content
Mobile
Desktop
Keyboard
Focus
Error
Loading
```

Interactive components must receive additional testing.

---

# 99. Visual Testing

Reusable components must be compared against their approved UI references.

Check:

```text
Spacing
Typography
Colors
Borders
Radius
Shadows
Icons
Hover
Focus
Active
Mobile
```

---

# 100. Performance Testing

Components must not introduce unnecessary performance costs.

Review:

```text
Image loading
JavaScript
Third-party dependencies
Rendering
Animations
Network requests
```

---

# 101. AI Implementation Rules

The AI coding agent must:

* Reuse existing components where appropriate.
* Read component specifications before creating new components.
* Inspect approved UI references.
* Follow data contracts.
* Preserve component variants.
* Avoid duplicate components.
* Avoid arbitrary styling.
* Avoid introducing new libraries unnecessarily.
* Test components after modification.

---

# 102. AI Must Not Invent Component Variants

The AI must not create a new variant simply because:

> "This section would look better with a different card."

Instead:

1. Check existing variants.
2. Check the approved UI.
3. Determine whether the difference is real functionality or only visual preference.
4. Request approval if a new variant is genuinely required.

---

# 103. AI Must Not Hardcode Client Data

Reusable components must receive client data through:

* Props
* Configuration
* Data models
* Content files
* APIs

Do not hardcode:

* Company names
* Product names
* Phone numbers
* Prices
* Statistics
* Project names
* Testimonials

inside reusable components.

---

# 104. AI Component Completion Checklist

Before declaring a new component complete:

```text
- [ ] Purpose defined
- [ ] Data requirements defined
- [ ] Required fields defined
- [ ] Optional fields defined
- [ ] Variants defined
- [ ] Responsive behavior defined
- [ ] Accessibility considered
- [ ] Approved UI inspected
- [ ] Component reusable
- [ ] No unnecessary dependencies
- [ ] Tested with realistic content
- [ ] Tested with long content
- [ ] Tested with missing optional fields
- [ ] Tested on mobile
- [ ] Tested on desktop
```

---

# 105. Definition of Done

The Business Growth component system is considered complete when:

```text
[ ] Global layout components exist
[ ] Navigation components exist
[ ] Typography system exists
[ ] Button/CTA system exists
[ ] Form system exists
[ ] Content cards exist
[ ] Product components exist
[ ] Service components exist
[ ] Project components exist
[ ] People/team components exist
[ ] Location components exist
[ ] Trust components exist
[ ] Marketing components exist
[ ] Resource/download components exist
[ ] Lead-generation components exist
[ ] Media components exist
[ ] Data/specification components exist
[ ] Search/filter components exist
[ ] Feedback states exist
[ ] Footer components exist
[ ] Sector requirements are supported
[ ] Components are reusable
[ ] Components follow the Design System
[ ] Approved UI remains the visual source of truth
```

---

# 106. Final Architecture Principle

The Business Growth component library should be broad enough that the agency can build a website for any supported sector by assembling existing capabilities.

The intended workflow is:

```text
Client
  ↓
Business Sector
  ↓
Business Requirements
  ↓
Select Components
  ↓
Select Page Templates
  ↓
Configure Data
  ↓
Apply Branding
  ↓
Apply Approved UI
  ↓
Build
```

Not:

```text
New Client
   ↓
Start From Scratch
   ↓
Invent New Components
   ↓
Invent New Design
```

---

# 107. Final Principle

The Business Growth component system is a **capability library**, not a collection of components for only one example website.

It must be able to support:

```text
Automotive
Manufacturing
Construction
Engineering
Import / Export
Hotels & Resorts
Education
Healthcare
Travel
Real Estate
Consulting
```

while still allowing each client project to remain focused.

The goal is:

> **Maximum reuse at the architecture level, maximum flexibility at the content level, and exact fidelity at the approved UI level.**

The client should receive only the components that support their business.

The agency should retain a component library capable of supporting the next client without rebuilding the system.

The AI coding agent should assemble and implement the system — **not invent a new one.**

```
```
