# `05-content-model-and-content-structure.md`

````md
# Business Growth
# Content Model & Content Structure Specification

**Document:** 05-content-model-and-content-structure.md  
**Version:** 1.0  
**Status:** Agency Template Standard  
**Package:** Business Growth

---

# 1. Purpose

This document defines how business information is structured, related, stored, validated, rendered, and maintained within the Business Growth template system.

It provides the data blueprint behind:

- Page templates
- Reusable components
- Product/service catalogs
- Project portfolios
- Blog/news
- Lead-generation flows
- Trust content
- Downloads
- Industry-specific content

The objective is to ensure that the same Business Growth architecture can be reused across different clients without rebuilding the application's content structure from scratch.

The fundamental relationship is:

```text
Business Requirements
        ↓
Content Model
        ↓
Content Data
        ↓
Reusable Components
        ↓
Page Templates
        ↓
Approved Client UI
        ↓
Website
````

---

# 2. Core Principle

The content model must separate:

```text
WHAT THE BUSINESS SAYS
```

from:

```text
HOW THE WEBSITE DISPLAYS IT
```

Therefore:

```text
Content
   ≠
UI
```

The content model defines:

* Information
* Relationships
* Fields
* Validation
* Availability
* Status

The component system defines:

* Presentation
* Layout
* Interaction
* Visual variants

The page template defines:

* Page composition
* Section relationships
* Content placement

The approved client UI defines:

* Actual visual implementation

---

# 3. Template-First Content Architecture

Business Growth must be built around reusable content structures.

The system should support:

```text
One Content Model
        ↓
Many Content Entries
        ↓
One Reusable Template
        ↓
Many Pages
```

Example:

```text
Product Model
      ↓
Product A
Product B
Product C
Product D
      ↓
Product Detail Template
```

The agency should not create a unique data structure for every product, service, or project.

---

# 4. Content Model vs CMS

The content model is not itself a CMS.

Business Growth does **not** automatically include:

* Client administration panel
* Content editor
* User accounts
* CMS dashboard
* WYSIWYG editor
* Content publishing portal

The content model describes how information is structured.

That information may be managed by:

* Source files
* Structured data
* Database records
* Headless CMS
* Custom backend

depending on the selected architecture.

The architecture must preserve the content model even when the storage mechanism changes.

---

# 5. Content Architecture Layers

The content system should be divided into:

```text
Layer 1 — Global Business Information
Layer 2 — Core Company Content
Layer 3 — Offering Content
Layer 4 — Proof / Experience Content
Layer 5 — Marketing Content
Layer 6 — Lead Content
Layer 7 — Resources
Layer 8 — Industry-Specific Content
Layer 9 — Relationships
Layer 10 — Presentation Metadata
```

---

# 6. Content Status Model

Content should support lifecycle states.

Recommended:

```text
draft
review
approved
published
archived
```

Meaning:

### Draft

Content is still being prepared.

### Review

Content is waiting for internal/client review.

### Approved

Content has been approved but may not yet be published.

### Published

Content is available on the production website.

### Archived

Content is no longer active but may need to be retained.

---

# 7. Content Source

Every client-specific content item should have an identifiable source.

Possible sources:

```text
client
client-approved-copy
existing-official-material
agency-edited
approved-generated-draft
internal
```

The exact source must be recorded where the project workflow requires it.

The AI must not treat generated content as verified factual business information.

---

# 8. Content Ownership

The client is responsible for factual business information.

The agency is responsible for:

* Structure
* Formatting
* Presentation
* Content organization
* Technical implementation

The AI is responsible for implementing approved information.

The AI must not independently invent:

* Statistics
* Certifications
* Testimonials
* Awards
* Product specifications
* Project results
* Locations
* Partnerships
* Customer names
* Claims of experience

---

# 9. Common Field Types

The content system should use predictable field types.

Possible types:

```text
string
text
richText
integer
decimal
boolean
date
datetime
url
email
phone
image
video
file
reference
reference[]
enum
string[]
object
object[]
```

The actual implementation may use TypeScript interfaces, JavaScript objects, database schemas, CMS schemas, or another appropriate representation.

---

# 10. Field Classification

Every content model should distinguish:

```text
Required
Optional
Conditional
Computed
System-managed
```

Example:

```text
Product

Required:
name
slug
primaryImage

Optional:
description
productCode
downloads

Conditional:
specifications
inquiry
comparison

System-managed:
createdAt
updatedAt
```

---

# 11. Global Site Configuration

Every project should have a central global configuration model.

Example:

```js
const siteConfig = {
  name: "",
  legalName: "",
  tagline: "",
  description: "",
  logo: "",
  favicon: "",
  phone: "",
  email: "",
  whatsapp: "",
  address: "",
  businessHours: [],
  socialLinks: [],
  mapsUrl: "",
  primaryCTA: {}
};
```

The exact implementation may differ.

The principle is:

> Shared business information should have a single authoritative source.

---

# 12. Company Model

The Company model represents the primary organization.

Possible fields:

```text
id
name
legalName
slug
tagline
shortDescription
longDescription
logo
foundedYear
industry
headquarters
serviceAreas
mission
vision
values
website
email
phone
```

Optional fields should only be populated when applicable.

---

# 13. Company Description

Support at least two levels:

```text
shortDescription
longDescription
```

This allows:

```text
Short description
→ Cards / previews / hero support

Long description
→ About / company pages
```

Do not duplicate the same paragraph everywhere.

---

# 14. Mission, Vision & Values

The Company model may contain:

```text
mission
vision
values[]
```

A value may contain:

```text
title
description
icon
```

Values should only appear if provided or approved.

---

# 15. Company Statistics

Statistics should be structured.

Example:

```js
{
  label: "Projects Completed",
  value: 450,
  prefix: "",
  suffix: "+",
  description: "Completed across multiple sectors.",
  verified: true
}
```

Possible statistics:

```text
Years in Operation
Projects
Clients
Locations
Employees
Products
Countries Served
```

Never create statistics to fill a template.

---

# 16. Brand Content Model

Brand information may include:

```text
primaryLogo
secondaryLogo
lightLogo
darkLogo
favicon
brandColors
approvedFonts
brandAssets
```

The brand model should reference actual approved assets.

---

# 17. Contact Information Model

Possible fields:

```text
primaryPhone
secondaryPhone
primaryEmail
salesEmail
supportEmail
whatsapp
website
address
businessHours
```

Not every business needs every field.

---

# 18. Business Hours Model

Example:

```js
{
  day: "Monday",
  open: "08:00",
  close: "17:00",
  closed: false
}
```

Additional structures may support:

```text
24-hour
Closed
By appointment
Holiday schedule
```

Do not invent business hours.

---

# 19. Location Model

The reusable Location model should support:

```text
id
name
slug
type
address
city
region
country
postalCode
latitude
longitude
phone
email
businessHours
mapUrl
directionsUrl
services[]
image
```

Useful types:

```text
headquarters
branch
office
store
clinic
campus
dealership
hotel
warehouse
```

---

# 20. Multi-Location Relationship

A Company may have:

```text
Company
   ↓
Locations[]
```

Each location may have:

```text
Location
   ↓
Services[]
```

or:

```text
Location
   ↓
Departments[]
```

depending on the industry.

---

# 21. Person Model

Create a reusable Person model for business representatives.

Possible fields:

```text
id
name
slug
role
department
title
shortBio
longBio
photo
email
phone
socialLinks
credentials[]
```

This base model can support:

* Executives
* Consultants
* Engineers
* Doctors
* Teachers
* Travel specialists
* Sales representatives
* Real estate agents
* Hotel management

---

# 22. Person Type

The person model may include a type:

```text
executive
team-member
doctor
consultant
engineer
teacher
agent
specialist
sales
management
```

This allows reusable people components without creating unrelated data structures.

---

# 23. Team Model

A Team is a collection of people.

Possible structure:

```text
Team
   ↓
Department
   ↓
People[]
```

This can support:

```text
Leadership
Engineering
Sales
Medical
Academic
Management
```

without requiring different fundamental systems.

---

# 24. Organization / Partner Model

Partners and client organizations may use a reusable OrganizationReference model.

Fields:

```text
id
name
logo
type
description
website
relationship
displayPriority
```

Possible types:

```text
client
partner
supplier
association
institution
member
```

---

# 25. Testimonial Model

Possible fields:

```text
id
quote
personName
personRole
companyName
personPhoto
companyLogo
industry
relatedService
relatedProduct
relatedProject
featured
approved
```

Testimonials must be client-approved.

Do not fabricate testimonial content.

---

# 26. Certification Model

Possible fields:

```text
id
name
issuer
number
description
issueDate
expiryDate
logo
document
verificationUrl
status
```

Possible status:

```text
active
expired
pending
```

Expired certifications must not be presented as active.

---

# 27. Award / Achievement Model

Possible fields:

```text
id
title
organization
year
description
image
verificationUrl
```

Only verified awards should be published.

---

# 28. Service Model

The Service model is one of the core Business Growth content models.

Possible fields:

```text
id
title
slug
category
shortDescription
description
heroImage
gallery
icon
benefits
capabilities
process
applications
industries
relatedServices
relatedProjects
relatedArticles
testimonials
cta
status
```

---

# 29. Service Categories

A service may belong to:

```text
one category
```

or, where justified:

```text
multiple categories
```

Avoid excessive categorization.

Example:

```text
Construction
Engineering
Consulting
```

---

# 30. Service Process Model

A process step may contain:

```text
number
title
description
icon
image
```

Example:

```text
1 — Consultation
2 — Planning
3 — Execution
4 — Quality Review
5 — Delivery
```

The number of steps is variable.

---

# 31. Service Capability Model

A capability may contain:

```text
title
description
icon
image
```

Capabilities should communicate what the company can actually do.

---

# 32. Service Application Model

Applications describe where a service can be used.

Possible fields:

```text
name
description
industry
image
```

Example:

```text
Manufacturing
Healthcare
Education
Commercial
Government
```

Only include industries actually served.

---

# 33. Product Model

Product content must support product-oriented sectors while remaining reusable.

Possible fields:

```text
id
name
slug
productCode
brand
category
shortDescription
description
primaryImage
gallery
features
specifications
applications
downloads
relatedProducts
relatedServices
relatedProjects
inquiry
featured
status
```

---

# 34. Product Specification Model

A flexible specification model should support:

```js
{
  label: "Capacity",
  value: "500",
  unit: "tons",
  group: "Performance"
}
```

This allows different products to have different technical attributes without forcing every product into the same fields.

---

# 35. Specification Groups

Specifications may be grouped:

```text
Performance
Dimensions
Materials
Power
Capacity
Connectivity
Safety
General
```

Groups must be based on actual product information.

---

# 36. Product Feature Model

Features may contain:

```text
title
description
icon
image
```

Features should be separated from technical specifications.

Example:

```text
Feature:
High precision operation

Specification:
Accuracy: ±0.02 mm
```

---

# 37. Product Application Model

Products may support multiple applications:

```text
Construction
Manufacturing
Healthcare
Automotive
Education
```

The applications should describe actual use cases.

---

# 38. Product Download Model

Possible fields:

```text
id
title
type
file
fileSize
description
language
version
date
```

Types may include:

```text
brochure
catalog
datasheet
manual
certificate
case-study
company-profile
```

---

# 39. Project Model

Possible fields:

```text
id
title
slug
category
client
location
year
startDate
endDate
duration
industry
scope
shortDescription
description
heroImage
gallery
challenge
solution
results
services
products
testimonials
downloads
relatedProjects
relatedArticles
featured
status
```

Only applicable fields should be displayed.

---

# 40. Project Client Reference

A project may reference an organization:

```text
project.client
    ↓
OrganizationReference
```

This avoids duplicating client information manually.

---

# 41. Project Location

A project may reference:

```text
location
```

using the Location model where appropriate.

This supports:

```text
Project
   ↓
Location
```

and enables consistent location presentation.

---

# 42. Project Challenge

The Challenge field should explain the actual problem the project addressed.

Do not generate a challenge simply to fill a case-study template.

---

# 43. Project Solution

The Solution field should describe what the company actually did.

Do not transform ordinary project descriptions into exaggerated case studies.

---

# 44. Project Results

Results should support:

```text
description
metrics[]
```

A metric may contain:

```text
label
value
unit
description
verified
```

Only verified results may be published.

---

# 45. Case Study Model

A Case Study may extend a Project.

Conceptually:

```text
Project
   +
Challenge
   +
Solution
   +
Results
   +
Client Approval
   =
Case Study
```

A separate Case Study model should only be introduced if the client's content needs are substantially different from a Project.

---

# 46. Article Model

The Blog/News model should support:

```text
id
title
slug
excerpt
content
featuredImage
author
category
tags
publishedDate
updatedDate
readingTime
relatedServices
relatedProducts
relatedProjects
relatedArticles
cta
status
```

---

# 47. Article Author

An article author should reference the Person model where appropriate.

Example:

```text
article.author
    ↓
Person
```

This avoids duplicate author information.

---

# 48. Article Categories

Categories might include:

```text
News
Insights
Industry
Projects
Company
Education
Announcements
```

Only use relevant categories.

---

# 49. Article Tags

Tags may support discovery and relationships.

Example:

```text
construction
engineering
sustainability
project-management
```

Avoid creating dozens of meaningless tags.

---

# 50. Resource Model

Possible fields:

```text
id
title
slug
description
type
file
thumbnail
fileSize
version
date
category
relatedProducts
relatedServices
relatedProjects
status
```

---

# 51. Resource Types

Supported types may include:

```text
brochure
catalog
datasheet
manual
company-profile
case-study
certificate
report
guide
```

This should remain configurable.

---

# 52. Lead Model

A Lead represents an inquiry generated through the website.

The system may conceptually contain:

```text
id
type
name
company
email
phone
message
source
context
submittedAt
status
```

The website does not automatically need to store leads in a database.

The model describes the information required for lead processing.

---

# 53. Lead Type

Possible lead types:

```text
contact
rfq
product-inquiry
service-inquiry
project-inquiry
vehicle-inquiry
property-inquiry
tour-inquiry
appointment-request
consultation
information-request
```

---

# 54. Lead Context

A lead may reference the content that caused the inquiry.

Example:

```text
lead.type = "product-inquiry"

lead.context = {
  contentType: "product",
  contentId: "...",
  contentTitle: "Hydraulic Press"
}
```

This provides sales context.

---

# 55. Lead Source

Possible sources:

```text
homepage
services
service-detail
products
product-detail
projects
project-detail
blog
contact
rfq
whatsapp
```

This may support analytics and internal reporting.

---

# 56. RFQ Model

An RFQ may include:

```text
id
name
company
email
phone
productOrService
quantity
location
timeline
budget
message
attachments
submittedAt
source
status
```

Not every field is mandatory.

---

# 57. RFQ Status

Possible statuses:

```text
new
reviewing
qualified
responded
closed
```

This is useful if the RFQ is stored in a backend.

If the website only sends RFQs by email, the external email/sales process owns the status.

---

# 58. Inquiry Context Models

Industry-specific inquiries can reuse the Lead/RFQ model.

Examples:

```text
Vehicle Inquiry
    ↓
context.type = vehicle

Property Inquiry
    ↓
context.type = property

Tour Inquiry
    ↓
context.type = tour

Appointment Request
    ↓
context.type = medical-service
```

---

# 59. Vehicle Model

For automotive clients, the content model may support:

```text
id
make
model
slug
year
bodyType
engine
transmission
fuelType
mileage
price
currency
images
features
specifications
availability
location
inquiry
```

Price and availability should only be displayed if provided and maintained by the client.

---

# 60. Vehicle Specification Model

Flexible technical data may include:

```text
engine
horsepower
fuelType
transmission
dimensions
seating
drivetrain
safetyFeatures
```

The exact fields can vary by vehicle type.

---

# 61. Property Model

For real estate clients:

```text
id
title
slug
propertyType
status
location
price
currency
area
bedrooms
bathrooms
parking
description
features
amenities
images
documents
agent
inquiry
```

Examples of property types:

```text
Apartment
Villa
Office
Warehouse
Land
Commercial Property
```

---

# 62. Property Status

Possible values:

```text
available
reserved
sold
leased
under-development
completed
```

Only use statuses relevant to the client's business.

---

# 63. Property Amenities

Reusable:

```text
amenities[]
```

Examples:

```text
Parking
Security
Gym
Pool
Garden
Elevator
Backup Power
```

Only include actual amenities.

---

# 64. Accommodation Model

For hotels/resorts:

```text
id
name
slug
type
description
capacity
bedConfiguration
size
images
amenities
features
location
availabilityNote
inquiry
```

The model describes accommodation information.

It does not implement availability management or online booking.

---

# 65. Hotel Facility Model

Possible fields:

```text
name
description
image
icon
category
```

Examples:

```text
Restaurant
Pool
Spa
Conference Hall
Gym
Parking
```

---

# 66. Hotel Package / Offer Model

Possible fields:

```text
title
description
image
includedItems
validFrom
validUntil
CTA
```

Pricing is optional and should only be included when appropriate.

---

# 67. Travel Destination Model

For travel agencies:

```text
id
name
slug
country
region
description
images
highlights
activities
bestTimeToVisit
relatedTours
```

---

# 68. Tour / Travel Package Model

Possible fields:

```text
id
title
slug
destination
duration
description
highlights
itinerary
included
excluded
images
price
currency
inquiry
```

The model supports presentation and inquiries, not full booking management.

---

# 69. Itinerary Model

A tour itinerary may contain:

```text
day
title
description
location
activities
meals
images
```

The number of days is variable.

---

# 70. Education Program Model

For educational institutions:

```text
id
title
slug
level
department
duration
description
requirements
outcomes
curriculum
fees where approved
applicationCTA
```

Possible levels:

```text
Certificate
Diploma
Undergraduate
Postgraduate
Professional
Training
```

Do not create admissions functionality unless separately approved.

---

# 71. Education Department Model

Possible fields:

```text
name
description
head
programs
faculty
image
```

---

# 72. Education Event Model

Possible fields:

```text
title
slug
date
time
location
description
image
registrationCTA
```

Registration is a lead action unless a separate event-registration system is purchased.

---

# 73. Healthcare Service Model

Healthcare services may use a specialized extension of Service.

Possible fields:

```text
service
specialty
department
description
conditions
procedures
doctorReferences
location
appointmentCTA
```

Medical information must be supplied/approved by the client.

The website should not generate medical claims.

---

# 74. Healthcare Specialist Model

A specialist may extend Person with:

```text
specialty
credentials
education
experience
languages
department
locations
appointmentCTA
```

All professional credentials must be verified by the client.

---

# 75. Healthcare Department Model

Possible fields:

```text
name
description
services
specialists
location
facilities
```

---

# 76. Consulting Industry Model

Consulting firms may use:

```text
Consulting Service
Industry
Case Study
Consultant
Expertise
Insight
```

An Industry model may contain:

```text
name
description
services[]
projects[]
insights[]
```

---

# 77. Engineering Capability Model

Engineering firms may require:

```text
discipline
capability
service
industry
certification
project
```

Possible disciplines:

```text
Civil
Structural
Mechanical
Electrical
Environmental
Industrial
```

Only use relevant disciplines.

---

# 78. Import / Export Market Model

Import/export clients may require geographic market data.

Possible fields:

```text
country
region
marketType
products
services
description
image
```

Market content should reflect actual business operations.

---

# 79. Industry Model

A general Industry model may support:

```text
id
name
slug
description
image
icon
services
products
projects
caseStudies
```

Useful for:

* Consulting
* Engineering
* Construction
* Manufacturing
* Healthcare
* Education
* Import/export

---

# 80. Category Model

Categories should be reusable where appropriate.

Possible fields:

```text
id
name
slug
description
image
icon
parent
sortOrder
```

Categories may be used for:

```text
Products
Services
Projects
Articles
Resources
Tours
Properties
Vehicles
```

---

# 81. Hierarchical Categories

Categories may support parent-child relationships.

Example:

```text
Products
├── Industrial Equipment
│   ├── Pumps
│   └── Compressors
└── Safety Equipment
```

Use hierarchy only when needed.

Avoid excessive nesting.

---

# 82. Tag Model

Tags should be lightweight labels.

Possible fields:

```text
id
name
slug
```

Tags should not replace meaningful categories.

---

# 83. Content Relationships

The content model must support related content.

Examples:

```text
Service
  ↔ Projects
  ↔ Articles
  ↔ Testimonials
  ↔ Related Services
```

```text
Product
  ↔ Services
  ↔ Projects
  ↔ Articles
  ↔ Related Products
  ↔ Resources
```

```text
Project
  ↔ Services
  ↔ Products
  ↔ Client
  ↔ Location
  ↔ Articles
```

---

# 84. Relationship Rules

Relationships should be intentional.

Do not connect content simply because both items exist.

Example:

```text
Product A
    ↓
Related Projects
```

must mean the projects actually involve Product A.

---

# 85. Relationship Types

Useful relationship types:

```text
related
featured
parent
child
category
author
client
partner
location
service
product
project
resource
testimonial
```

---

# 86. Featured Content

Many models may contain:

```text
featured: boolean
```

Use featured status selectively.

Examples:

```text
Featured Product
Featured Project
Featured Article
Featured Service
```

Do not make everything featured.

---

# 87. Ordering

Collections should support controlled ordering.

Possible fields:

```text
sortOrder
displayPriority
featured
```

Where a CMS/database exists, the ordering may be managed through structured data.

---

# 88. Slug Model

Every publicly routable content entry should have a stable slug.

Rules:

```text
lowercase
hyphen-separated
human-readable
stable
unique
```

Example:

```text
commercial-construction
hydraulic-press
addis-ababa-project
executive-consulting
```

---

# 89. Slug Uniqueness

Slugs must be unique within the relevant content type.

Example:

```text
/products/hydraulic-press
```

must not conflict with another product using the same slug.

---

# 90. Content IDs

Every content entry should have a stable identifier.

Example:

```text
id
```

The ID may be:

* UUID
* Database ID
* CMS ID
* Stable string

Do not use the display title as the system's primary identity.

---

# 91. System Metadata

Content entries may contain:

```text
id
createdAt
updatedAt
publishedAt
status
```

These are system-managed.

The AI should not invent timestamps.

---

# 92. Media Model

Images and media should be structured rather than scattered.

A media object may include:

```text
id
src
alt
caption
title
width
height
type
credit
license
```

---

# 93. Image Model

Minimum recommended image information:

```text
src
alt
width
height
```

Optional:

```text
caption
credit
focalPoint
mobileVariant
```

---

# 94. Image Focal Point

For important marketing imagery, the model may support:

```text
focalPoint:
  x
  y
```

This allows responsive cropping to preserve the important subject.

---

# 95. Gallery Model

A Gallery contains:

```text
images[]
```

Each image should maintain its own metadata.

Galleries may belong to:

* Projects
* Products
* Properties
* Vehicles
* Hotels
* Tours
* Team
* Company

---

# 96. Video Model

Possible fields:

```text
src
poster
title
description
duration
provider
```

External video platforms may be supported where approved.

---

# 97. File / Download Model

All downloadable files should use a structured model.

Example:

```text
{
  title,
  type,
  url,
  size,
  version,
  date
}
```

This avoids creating separate hardcoded download markup for every resource.

---

# 98. CTA Model

CTAs should be structured.

Example:

```js
{
  label: "Request a Quote",
  type: "rfq",
  href: "/rfq",
  context: "product"
}
```

Possible types:

```text
internal
external
phone
email
whatsapp
rfq
download
contact
```

---

# 99. CTA Context

CTA context may include:

```text
contentType
contentId
contentTitle
```

This allows the same CTA component to behave appropriately on:

```text
Product
Service
Project
Property
Vehicle
Tour
Article
```

---

# 100. SEO Content Model

Indexable content should support:

```text
seoTitle
seoDescription
canonicalUrl
ogTitle
ogDescription
ogImage
noIndex
```

Where metadata is not explicitly provided, the system may generate sensible defaults from approved content.

The AI must not invent factual SEO claims.

---

# 101. SEO Fallback Rule

Example:

```text
If seoTitle exists:
    use seoTitle

Else:
    generate from approved title + company name
```

The same principle may apply to:

```text
meta description
Open Graph title
Open Graph description
```

---

# 102. Content Length Rules

Content models should support realistic ranges.

Examples:

```text
Short description
→ card/preview

Description
→ listing/detail introduction

Long content
→ detail/article body
```

Do not force long content into fields intended for short summaries.

---

# 103. Excerpt Model

Long-form content should support an excerpt.

Example:

```text
title
excerpt
content
```

This avoids cutting arbitrary sections of the article or service description.

---

# 104. Rich Text Model

Rich content may support:

```text
headings
paragraphs
lists
links
quotes
images
tables
embeds
```

The allowed content types should be restricted to what the project needs.

Do not create an unrestricted HTML editor by default.

---

# 105. Rich Text Security

When rich text is accepted from a CMS/database/user:

```text
Validate
   ↓
Sanitize
   ↓
Render safely
```

Never assume stored HTML is safe.

---

# 106. Content Validation

Validation rules should ensure:

```text
required fields exist
slugs are valid
URLs are valid
email addresses are valid
dates are valid
relationships are valid
images exist
referenced content exists
```

---

# 107. Relationship Validation

If:

```text
product.relatedServices
```

contains a service ID that does not exist:

The system should:

* Reject invalid data, or
* Ignore the invalid relationship safely.

It must not crash the entire website.

---

# 108. Orphan Content

The system should identify or prevent orphan content.

Examples:

```text
Product exists
but no category

Article exists
but no route

Project exists
but no reachable listing
```

Orphaned public content should be reviewed.

---

# 109. Unpublished Content

Unpublished content must not accidentally appear on the production website.

For example:

```text
status = draft
```

should not appear in the public listing.

---

# 110. Archived Content

Archived content may remain in the data source but should not normally appear in public navigation or listings.

If an archived URL remains indexed, apply the appropriate redirect/noindex/content strategy.

---

# 111. Content Visibility

Content may require visibility controls:

```text
public
hidden
draft
archived
```

Visibility should be controlled centrally rather than with scattered boolean flags.

---

# 112. Sector Content Composition

A sector-specific website should be assembled from universal and specialized models.

Example:

```text
Automotive
=
Company
+
Locations
+
People
+
Vehicles
+
Vehicle Features
+
Vehicle Inquiry
+
Projects
+
News
```

---

# 113. Manufacturing Composition

```text
Manufacturing
=
Company
+
Services
+
Products
+
Product Specifications
+
Industries
+
Projects
+
Certifications
+
Resources
+
RFQ
```

---

# 114. Construction Composition

```text
Construction
=
Company
+
Services
+
Service Details
+
Projects
+
Project Details
+
Certifications
+
Clients
+
Testimonials
+
RFQ
```

---

# 115. Engineering Composition

```text
Engineering
=
Company
+
Engineering Services
+
Capabilities
+
Industries
+
Projects
+
Technical Team
+
Certifications
+
Insights
+
Consultation
```

---

# 116. Import / Export Composition

```text
Import / Export
=
Company
+
Products
+
Categories
+
Markets
+
Countries
+
Services
+
Resources
+
RFQ
+
Locations
```

---

# 117. Hotel / Resort Composition

```text
Hotel / Resort
=
Company
+
Accommodation
+
Facilities
+
Amenities
+
Gallery
+
Offers
+
Locations
+
Testimonials
+
News
+
Inquiry
```

This does not automatically introduce online booking.

---

# 118. Education Composition

```text
Education
=
Institution
+
Programs
+
Departments
+
Faculty
+
Campuses
+
Events
+
Admissions Information
+
News
+
Resources
+
Information Request
```

This does not automatically create student registration systems.

---

# 119. Healthcare Composition

```text
Healthcare
=
Organization
+
Medical Services
+
Departments
+
Doctors / Specialists
+
Facilities
+
Locations
+
FAQs
+
Resources
+
Appointment Request
```

Appointment Request remains an inquiry flow unless booking is separately approved.

---

# 120. Travel Composition

```text
Travel
=
Company
+
Destinations
+
Tours
+
Itineraries
+
Activities
+
Travel Guides
+
Gallery
+
Testimonials
+
Inquiry
```

This does not automatically implement booking/payment.

---

# 121. Real Estate Composition

```text
Real Estate
=
Company
+
Properties
+
Property Categories
+
Property Details
+
Amenities
+
Locations
+
Agents
+
Projects
+
Property Inquiry
```

This does not automatically create transaction functionality.

---

# 122. Consulting Composition

```text
Consulting
=
Company
+
Services
+
Industries
+
Case Studies
+
Consultants
+
Insights
+
Testimonials
+
Consultation
```

---

# 123. Cross-Sector Reuse

The same core models should be reused wherever the business meaning is sufficiently similar.

Example:

```text
Person
→ Doctor
→ Engineer
→ Consultant
→ Teacher
→ Agent
```

through appropriate extensions or configuration.

Similarly:

```text
Location
→ Office
→ Clinic
→ Campus
→ Dealership
→ Hotel
→ Branch
```

---

# 124. Avoid Forced Universal Models

Not everything should become one generic model.

Do not force:

```text
Vehicle
Property
Room
Product
Tour
```

into one meaningless "Item" model if their data and behavior are substantially different.

Reuse should occur at the appropriate abstraction level.

---

# 125. Extension Principle

Use:

```text
Base Model
    +
Industry-Specific Extension
```

when appropriate.

Example:

```text
Person
 +
HealthcareProfile

Person
 +
ConsultantProfile
```

This allows common components to reuse the base model while specialized pages access the additional fields.

---

# 126. Content Relationships and Lead Generation

Content should connect naturally to lead actions.

Examples:

```text
Product
   ↓
Product Inquiry
```

```text
Property
   ↓
Property Inquiry
```

```text
Service
   ↓
Consultation
```

```text
Vehicle
   ↓
Test Drive Request
```

```text
Tour
   ↓
Trip Inquiry
```

---

# 127. Content Relationships and Marketing

Marketing content should also connect to business offerings.

Example:

```text
Article
   ↓
Related Service
   ↓
Related Project
   ↓
CTA
```

This creates a connected content ecosystem.

---

# 128. Content Relationships and SEO

Relationships should support internal linking.

For example:

```text
Product
   ↔ Related Products
   ↔ Related Services
   ↔ Related Projects
   ↔ Related Articles
```

This should support discoverability without creating artificial links.

---

# 129. Content Rendering Rule

A component should render content only when the relevant data exists.

Conceptually:

```js
if (product.specifications?.length) {
  renderSpecifications();
}
```

Avoid:

```text
Always render everything
```

This is fundamental to a reusable template.

---

# 130. Empty Content Rule

If content is missing:

```text
Do not invent it.
Do not leave a large empty section.
Do not display fake placeholder content.
Disable the optional section.
```

---

# 131. Content Fallback Rule

Fallbacks should be purposeful.

Allowed:

```text
Use company logo fallback
Use generic alt-text pattern where approved
Use generated SEO title from approved content
Use default CTA when configured
```

Not allowed:

```text
Invent missing business information
Invent statistics
Invent testimonials
Invent certifications
```

---

# 132. Client Content Approval

Content should move through:

```text
Draft
   ↓
Internal Review
   ↓
Client Review
   ↓
Approved
   ↓
Published
```

The final production content should be identifiable as approved.

---

# 133. Content Change Tracking

Meaningful content changes should be traceable.

Example:

```text
Article Version:
1.0 Draft
1.1 Client Revision
1.2 Approved
```

The exact versioning process may depend on the implementation.

---

# 134. Content Update Responsibility

Business Growth assumes that content updates are primarily managed by the agency through maintenance unless a CMS is separately included.

This includes:

* Product updates
* Service updates
* Project additions
* News publication
* Image replacement
* Resource updates

---

# 135. Content Update Workflow

```text
Client Request
      ↓
Content Review
      ↓
Scope Check
      ↓
Update Data
      ↓
Validate
      ↓
Preview
      ↓
QA
      ↓
Publish
```

---

# 136. New Content vs New Feature

Adding:

```text
New Product
```

may be a maintenance/content update.

Adding:

```text
New Product Management Dashboard
```

is a new feature.

The distinction must remain clear.

---

# 137. Content Limits

The package supports richer content but does not imply unlimited content production.

The project agreement should define:

* Number of initial entries
* Content preparation responsibility
* Number of resources
* Number of blog articles
* Number of projects
* Number of products/services where relevant

---

# 138. Content Migration

If the client has an existing website, content migration should be planned.

Potential migration:

```text
Old Site
   ↓
Inventory
   ↓
Map Content
   ↓
Clean Content
   ↓
Transform to New Model
   ↓
Import
   ↓
Validate
```

Large-scale migration may require additional scope.

---

# 139. Content Migration Mapping

Example:

```text
Old Product Page
    ↓
Product Model
    ├── Name
    ├── Description
    ├── Images
    ├── Specifications
    └── Downloads
```

Do not manually duplicate large datasets when structured migration is practical.

---

# 140. Content Import

If importing data programmatically:

```text
Validate
   ↓
Transform
   ↓
Import
   ↓
Check Relationships
   ↓
Review Output
```

Never import unvalidated content directly into production.

---

# 141. Content Backup

The final approved content should be recoverable.

Possible strategies:

```text
Git
Database backup
CMS export
Structured data archive
Content documents
```

The chosen strategy depends on the architecture.

---

# 142. Content Security

Dynamic client content must be handled safely.

Where content enters a backend/database:

```text
Input
  ↓
Validation
  ↓
Sanitization where needed
  ↓
Safe storage
  ↓
Safe rendering
```

Do not render arbitrary HTML without appropriate safeguards.

---

# 143. File Security

Downloadable resources must be:

* From trusted sources
* Correctly typed
* Appropriately named
* Checked for malicious content where applicable
* Served securely

---

# 144. Content and Design Separation

Changing content should not require rewriting components.

Example:

```text
New Product
    ↓
Same Product Card
    ↓
Same Product Detail Template
```

The same component should handle different content lengths and values.

---

# 145. Content and Responsive Design

Content structures must work across:

```text
Desktop
Tablet
Mobile
```

Test content such as:

* Long product names
* Long service names
* Long property titles
* Long hotel names
* Long program names
* Long article titles

---

# 146. Content Length Protection

Components should gracefully handle:

```text
Very short content
Normal content
Long content
Missing optional content
```

Do not force fixed heights that cause text clipping.

---

# 147. Translation / Multilingual Extension

Multilingual support is not automatically included.

However, the content model should be capable of future extension.

Possible strategy:

```text
Content
  ↓
Locale
  ↓
Translated Fields
```

Example:

```text
title.en
title.am
title.ar
```

or an equivalent localization structure.

Do not build multilingual functionality unless it is part of the project.

---

# 148. Language-Neutral Content IDs

Content IDs and slugs should not depend unnecessarily on translated display text.

This makes future multilingual expansion safer.

---

# 149. Content Model and Routing

Publicly routable content should provide:

```text
id
slug
status
```

This allows:

```text
Content
   ↓
Slug
   ↓
Route
   ↓
Template
```

---

# 150. Content Model and Components

Components should consume content models through defined interfaces.

Example:

```text
Product Model
      ↓
ProductCard
ProductGallery
ProductFeatures
ProductSpecifications
ProductDownloads
ProductInquiry
```

This prevents each component from expecting a different version of product data.

---

# 151. Content Model and Templates

Templates should combine content models.

Example:

```text
Product Detail Template
      ↓
Product
      +
Category
      +
Related Products
      +
Related Services
      +
Resources
      +
Inquiry
```

---

# 152. Content Model Documentation

Every reusable model should be documented with:

```text
Model Name
Purpose
Required Fields
Optional Fields
Conditional Fields
Relationships
Validation
Used By
Industry Relevance
```

---

# 153. Model Documentation Example

```text
MODEL: Product

Purpose:
Represents a product that the business wants to showcase.

Required:
- name
- slug
- primaryImage

Optional:
- code
- description
- gallery
- features
- specifications
- applications
- downloads

Relationships:
- category
- relatedProducts
- relatedServices
- relatedProjects

Lead:
- inquiry

Used By:
Manufacturing
Automotive
Import/Export
Selected Real Estate/Product Businesses
```

---

# 154. Data Validation Checklist

Before content is published:

```text
[ ] Required fields present
[ ] Slug valid
[ ] Slug unique
[ ] Images valid
[ ] Links valid
[ ] Relationships valid
[ ] Dates valid
[ ] Numbers valid
[ ] Client approval confirmed
[ ] Content status approved
```

---

# 155. Content Model Acceptance Criteria

The content architecture is complete when:

```text
[ ] Global business data defined
[ ] Company data defined
[ ] Contact data defined
[ ] Location data defined
[ ] People data defined
[ ] Services defined
[ ] Products defined
[ ] Projects defined
[ ] Testimonials defined
[ ] Certifications defined
[ ] Blog/news defined
[ ] Resources defined
[ ] Leads defined
[ ] RFQ defined
[ ] Industry-specific structures defined
[ ] Relationships defined
[ ] Media model defined
[ ] SEO fields defined
[ ] Content status defined
[ ] Validation rules defined
[ ] Empty-state behavior defined
[ ] Content approval process defined
```

---

# 156. AI Content Implementation Rules

The AI coding agent must:

```text
[ ] Read the content model before creating data structures
[ ] Reuse existing models
[ ] Reuse existing fields
[ ] Follow required/optional rules
[ ] Preserve relationships
[ ] Validate data
[ ] Never invent factual content
[ ] Never hardcode client data into reusable components
[ ] Handle missing optional content
[ ] Handle long content
[ ] Preserve content IDs/slugs
[ ] Follow approved content
```

---

# 157. AI Must Not Create Random Data Models

The AI must not independently create:

```text
ProductInfo
ProductData
ProductDetails
ProductModelNew
ProductModelFinal
```

when a standard Product model already exists.

If a genuine new data requirement appears:

```text
Identify Requirement
    ↓
Check Existing Model
    ↓
Determine Extension
    ↓
Document Change
    ↓
Implement
```

---

# 158. AI Must Not Invent Missing Content

If a field is missing:

```text
Client Content Missing
        ↓
Check Whether Field Is Optional
        ↓
If Optional:
    Hide Section

If Required:
    Flag Missing Content
```

Do not generate fake values.

---

# 159. Content Model Versioning

The content model should be versioned when significant structural changes occur.

Example:

```text
Content Model v1.0
      ↓
Additional Resource Fields
      ↓
Content Model v1.1
```

Major structural changes may require:

```text
Content Model v2.0
```

---

# 160. Model Migration

If the content model changes:

```text
Current Model
      ↓
Migration Plan
      ↓
Transform Existing Data
      ↓
Validate
      ↓
Update Components
      ↓
Update Templates
      ↓
QA
```

Do not change production data structures without considering existing content.

---

# 161. Content Model vs Database

The content model should exist independently of the database technology.

The same logical model could be implemented using:

```text
Static data
JSON
JavaScript objects
TypeScript
PostgreSQL
CMS
API
```

The model should remain conceptually stable.

---

# 162. Content Model vs API

If an API exists, API responses should reflect documented content models.

Example:

```json
{
  "id": "product-001",
  "name": "Hydraulic Press",
  "slug": "hydraulic-press",
  "category": {
    "id": "industrial-equipment",
    "name": "Industrial Equipment"
  }
}
```

The exact API structure may vary, but it must remain predictable.

---

# 163. Data Normalization

Avoid unnecessary duplication.

Example:

Do not repeatedly store:

```text
Company Name
Company Address
Company Phone
```

inside every product.

Reference:

```text
Company
```

or central configuration instead.

---

# 164. Data Denormalization

Some duplication may be acceptable for performance or simplicity when justified.

However, duplicated business-critical information must have a clear source of truth.

---

# 165. Content Source Priority

When multiple versions exist:

```text
Latest Client-Approved Content
        ↓
Approved Project Content
        ↓
Earlier Content
```

The AI should not choose older content merely because it is easier to access.

---

# 166. Content Freeze

Before final deployment:

```text
Content Freeze
      ↓
QA
      ↓
Client Review
      ↓
Acceptance
```

Significant content changes after the freeze should follow the change process.

---

# 167. Final Content Architecture

The Business Growth content system should ultimately provide:

```text
                    BUSINESS
                        │
        ┌───────────────┼────────────────┐
        │               │                │
      COMPANY        OFFERINGS         PROOF
        │               │                │
   People           Services          Projects
   Locations        Products          Testimonials
   Values           Categories        Certifications
   Credentials      Details           Clients
        │               │                │
        └───────────────┼────────────────┘
                        │
                    MARKETING
                        │
                 Blog / News
                 Resources
                 Insights
                        │
                        ↓
                    LEAD SYSTEM
                        │
                Contact / RFQ
                        │
                        ↓
                     INQUIRY
```

---

# 168. Final Principle

The Business Growth content model must make the agency's template system genuinely reusable.

The objective is not:

```text
Build a website for one manufacturing company.
```

The objective is:

```text
Build a content architecture capable of serving:

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

through:

```text
Universal Content Models
        +
Reusable Specialized Models
        +
Industry-Specific Extensions
        +
Configurable Relationships
        +
Reusable Components
        +
Reusable Page Templates
```

A client should only receive the content structures appropriate to their business.

The template should already be capable of supporting the rest.

The governing principle is:

> **Model the business information once, reuse it everywhere it is needed, keep the data independent from presentation, and allow each client project to enable only the content structures that make sense for that business.**

```
```
