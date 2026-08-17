Here is the detailed design-to-code specification for the Stonebridge Construction Expertise page.



---

## 🎨 Global Design System & Theme Specs

### Color Palette

* **Primary Dark (Navy Blue):** Used for the "Additional Capabilities" section, pre-footer CTA, main footer background, and primary text headings.
* **Accent / Brand Gold:** Used for eyebrow tags (e.g., "CORE SERVICES"), list icons, "DISCUSS A PROJECT" text links, and the main CTA button background.
* **Neutral Background Light:** A light gray/off-white used for the "Our Approach" and "Industries We Serve" sections.
* **Neutral White:** Used for the header, main hero background, service section backgrounds, and industry cards.

### Typography Hierarchy

* **Font Family:** Clean, modern Sans-Serif throughout.
* **Headings:** Bold and dark navy for light sections; bold and white for dark sections.
* **Eyebrow Tags:** Small, uppercase, bold, and colored in the accent gold (e.g., "01 | COMMERCIAL").

---

## 📱 Mobile UI Breakdown

### Section 1: Header / Navigation

* **Layout:** Sticky top bar with a solid white background.
* **Left Element:** The brand name "Stonebridge Construction" stacked on two lines in dark text.
* **Right Element:** A standard hamburger menu icon (three horizontal lines) in gray.

### Section 2: Hero Section

* **Layout:** Single-column vertical stack with white background and standard side padding.
* **Content Order:**
* Eyebrow: "CORE SERVICES" in gold.
* H1 Heading: "Construction Expertise for Complex Projects" in dark navy.
* Body Text: Paragraph starting with "Stonebridge Construction brings decades...".
* Hero Image: A full-width construction site at sunset, featuring cranes and rebar.



### Section 3: Core Services (Repeated Card Layout)

This layout repeats three times for different service sectors. Each is stacked vertically on a white background.

* **Service 1: Commercial**
* Image: A modern, multi-story glass commercial building.
* Eyebrow: "01 | COMMERCIAL".
* H2 Heading: "Commercial Construction".
* Body Text: "We deliver state-of-the-art commercial spaces...".
* List Items (Gold diamond icons): Corporate Headquarters, Mixed-Use Developments, Retail Centers.
* Link: "DISCUSS A PROJECT >" in gold uppercase text.


* **Service 2: Industrial**
* Image: A large-scale industrial manufacturing facility.
* Eyebrow: "02 | INDUSTRIAL".
* H2 Heading: "Industrial Facilities".
* Body Text: "Our industrial construction team specializes in...".
* List Items (Gold diamond icons): Manufacturing Plants, Distribution Centers, Warehousing Solutions.
* Link: "DISCUSS A PROJECT >" in gold uppercase text.


* **Service 3: Infrastructure**
* Image: A large cable-stayed bridge spanning a river.
* Eyebrow: "03 | INFRASTRUCTURE".
* H2 Heading: "Civil Infrastructure".
* Body Text: "We engineer and construct the vital infrastructure...".
* List Items (Gold diamond icons): Bridges & Highways, Public Transit Systems, Water Treatment Facilities.
* Link: "DISCUSS A PROJECT >" in gold uppercase text.



### Section 4: Additional Capabilities

* **Background:** Solid dark navy blue.
* **Header Content:** White H2 "Additional Capabilities" followed by white body text "Beyond our core services, we offer...".
* **Capabilities List:** A vertical stack of six items, each featuring:
* A gold outline icon.
* A bold white title (e.g., "Pre-Construction", "Design-Build", "Construction Management").
* White, slightly muted body text describing the capability.



### Section 5: Our Approach & Delivery

* **Background:** Light gray/off-white.
* **Top Block:**
* H2 Heading: "Our Approach".
* Subtext: "A systematic, proven methodology...".
* Visual element: A thin vertical line acting as a timeline/border down the left side.


* **Bottom Block:**
* H2 Heading: "Uncompromising Project Delivery".
* Body Text: "We measure success not just by the completed structure...".
* Image: Two construction professionals (one male, one female) in hardhats reviewing a tablet on a job site.



### Section 6: Industries We Serve

* **Background:** Light gray/off-white (continuation from the previous section).
* **Header:** H2 "Industries We Serve" with brief subtext.
* **Cards:** A vertical stack of white cards with subtle drop shadows. Each card contains:
* A gold icon at the top left.
* A dark heading (e.g., "Education", "Government", "Hospitality").
* Muted body text.
* *Note: The first card ("Education") appears slightly faded out in the provided mockup.*



### Section 7: Pre-Footer CTA & Main Footer

* **Pre-Footer Banner:**
* Background: Dark navy.
* Heading: "PLANNING YOUR NEXT PROJECT?" in bold white, centered text.
* Button: Full-width solid gold button with black text "DISCUSS A PROJECT".


* **Main Footer:**
* Background: Dark navy.
* Logo: "Stonebridge Construction" in white text.
* Links Group 1: General company links (About Us, Leadership, Careers, Contact) in muted white/gray.
* Links Group 2: "Services" heading in gold, followed by links (Infrastructure, Commercial, Portfolio).
* Links Group 3: "LEGAL" heading in white, followed by links (Privacy Policy, Terms of Service, Accessibility).
* Bottom: Copyright text separated by a thin line, stating "© 2026 Stonebridge Construction. All rights reserved. Engineering Excellence Since 1978.".


Here is the comprehensive design-to-code specification for the Stonebridge Construction Expertise page, specifically detailing the **Desktop View** based on the provided file **"expertise desktop.jpg"**.

---

## 🎨 Global Design System & Theme Specs

### Color Palette

* **Primary Dark (Navy Blue):** `#0C1E38` (Pre-footer, footer, main text headings, header CTA).
* **Accent / Brand Gold:** `#C49A6C` / `#B8860B` (Eyebrow labels, list bullets/icons, text links, primary CTA button in pre-footer).
* **Neutral Background Light (Off-White/Gray):** `#F4F5F7` / `#F9FAFB` (Used for alternating section backgrounds like Hero, Industrial, and Capabilities sections).
* **Neutral White:** `#FFFFFF` (Header, alternating section backgrounds, feature cards).
* **Text Primary (Dark):** `#1A1A1A` / `#0C1E38` (Headings and primary body text).
* **Text Secondary (Muted):** `#4B5563` (Body paragraphs and descriptions).

### Typography Hierarchy

* **Font Family:** Clean, Modern Sans-Serif (*Inter*, *Plus Jakarta Sans*, or similar).
* **H1 (Hero Heading):** 56px–64px, Bold, tight leading.
* **H2 (Section Headings):** 40px–48px, Bold.
* **Eyebrow Tags:** 12px, Uppercase, Bold, Letter-spacing `1.5px` to `2px`. Often paired with a slash (e.g., `01 / COMMERCIAL`).

---

## 💻 Desktop View Breakdown (`expertise desktop.jpg`)

### Section 1: Header / Navigation Bar

* **Layout:** Sticky top bar, `max-width: 1280px` centered container, `flex` row, `justify-between`, `items-center`.
* **Background:** Solid White (`#FFFFFF`) with a subtle bottom border.
* **Left Element:** Brand Logo: `Stonebridge Construction` (Bold, Dark text).
* **Center Navigation:** Horizontal list (`gap-8`): `Expertise` (Active state: bold with underline), `Projects`, `Heritage`, `Sustainability`, `News`.
* **Right Action:** Solid Dark Navy button with white text: `REQUEST CONSULTATION`.

---

### Section 2: Hero Section

* **Background:** Neutral Background Light (Off-White/Gray).
* **Layout:** 2-Column Split (Approx. 40/60 split).
* **Left Column (Text Content):**
* *Eyebrow:* `OUR EXPERTISE` (Gold, uppercase).
* *Main Title (H1):* `Construction Expertise for Complex Projects.` (Dark Navy, spans 4 lines).


* **Right Column (Visual):**
* Large high-resolution rectangular image of a towering steel building framework under construction with a clear blue sky.



---

### Section 3: Alternating Feature Zig-Zag (Services)

This section uses a repeating 2-column alternating layout (Image Left/Right) with alternating background colors.

#### 3A. Commercial Construction

* **Background:** Solid White (`#FFFFFF`).
* **Layout:** Image on Left (50%), Text on Right (50%).
* **Left Visual:** Image of a modern, multi-tiered glass commercial building with a water feature.
* **Right Content:**
* *Eyebrow:* `01 / COMMERCIAL`
* *Heading (H2):* `Commercial Construction.`
* *Paragraph:* "We deliver commercial buildings designed around the requirements..."
* *Sub-heading:* `Project types:`
* *Bulleted List (Gold bullets):* Office Buildings, Retail & Commercial Centers, Mixed-Use Developments, Corporate Facilities, Hospitality Projects.
* *CTA Link:* `DISCUSS A COMMERCIAL PROJECT →` (Gold, uppercase text link).



#### 3B. Industrial Facilities

* **Background:** Neutral Background Light (Off-White/Gray).
* **Layout:** Text on Left (50%), Image on Right (50%).
* **Left Content:**
* *Eyebrow:* `02 / INDUSTRIAL`
* *Heading (H2):* `Industrial Facilities.`
* *Paragraph:* "We support the delivery of industrial environments where structural performance..."
* *Sub-heading:* `Project types:`
* *Bulleted List (Gold bullets):* Manufacturing Facilities, Warehouses, Processing Plants, Logistics Facilities, Industrial Expansions.
* *CTA Link:* `DISCUSS AN INDUSTRIAL PROJECT →`


* **Right Visual:** Large modern logistics/warehouse facility with semi-trucks.

#### 3C. Civil Infrastructure

* **Background:** Solid White (`#FFFFFF`).
* **Layout:** Image on Left (50%), Text on Right (50%).
* **Left Visual:** Complex highway interchange and suspension bridge at sunset.
* **Right Content:**
* *Eyebrow:* `03 / INFRASTRUCTURE`
* *Heading (H2):* `Civil Infrastructure.`
* *Paragraph:* "Stonebridge delivers infrastructure projects that require careful coordination..."
* *Sub-heading:* `Project types:`
* *Bulleted List (Gold bullets):* Roads, Bridges, Public Infrastructure, Structural Works, Site Development.
* *CTA Link:* `DISCUSS AN INFRASTRUCTURE PROJECT →`



---

### Section 4: Additional Capabilities Grid

* **Background:** Neutral Background Light (Off-White/Gray).
* **Header Content (Centered or Left-Aligned to Grid):**
* *Eyebrow:* `ADDITIONAL CAPABILITIES`
* *Heading (H2):* `Supporting Every Stage of Delivery.`


* **Grid Layout:** 3-Column x 2-Row Grid (`grid-cols-3`).
* **Card Styling:** White background (`bg-white`), subtle border (`border-gray-200`), padding (`p-6` or `p-8`).
* *Header Row inside Card:* Flex row containing a muted number (e.g., `01`) and a small gold icon on the right.
* *Card Title:* Bold dark text (e.g., `Project Management`).
* *Card Body:* Muted secondary text describing the capability.


* **Grid Items:**
1. 01 - Project Management
2. 02 - Engineering Coordination
3. 03 - Procurement
4. 04 - Quality Control
5. 05 - Site Management
6. 06 - Safety Management



---

### Section 5: Pre-Footer Banner & Main Footer

* **Pre-Footer Banner:**
* *Background:* Solid Dark Navy (`#0C1E38`).
* *Layout:* Centered single column.
* *Heading:* `PLANNING YOUR NEXT PROJECT?` (Large, White, Bold).
* *Subtext:* "Contact our team to discuss how Stonebridge Construction can bring expertise and precision to your next major venture." (Muted White/Light Blue).
* *Button Group (Row):*
1. Solid Gold Button (`REQUEST A CONSULTATION`).
2. White Text Link with arrow (`VIEW OUR PROJECTS →`).




* **Main Footer:**
* *Background:* Solid Dark Navy (Same as Pre-footer, separated by a subtle border line if necessary).
* *Layout:* 4-Column Grid.
* *Column 1 (Brand):* `Stonebridge Construction` logo/text, copyright text, "Engineering Excellence Since 1978".
* *Column 2 (Services Links):* Services, Infrastructure, Commercial, Portfolio.
* *Column 3 (Company Links):* About Us, Leadership, Careers, Contact.
* *Column 4 (Legal Links):* Privacy Policy, Terms of Service, Accessibility.



---

## 🛠️ Implementation Guidance for AI Code Generators

```html
<!-- Example of Alternating Layout Component (Tailwind CSS) -->
<!-- Commercial Section (Image Left) -->
<section class="bg-white py-20 px-4 md:px-8">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <!-- Image -->
    <div class="w-full h-full">
      <img src="..." alt="Commercial Building" class="w-full h-auto object-cover" />
    </div>
    <!-- Content -->
    <div>
      <span class="text-[#C49A6C] text-xs font-bold tracking-widest uppercase">01 / Commercial</span>
      <h2 class="text-4xl font-bold text-[#0C1E38] mt-4 mb-6">Commercial Construction.</h2>
      <!-- ... Content ... -->
    </div>
  </div>
</section>

<!-- Industrial Section (Image Right) -->
<section class="bg-[#F9FAFB] py-20 px-4 md:px-8">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <!-- Content (Order 1 on Desktop) -->
    <div class="order-2 md:order-1">
      <span class="text-[#C49A6C] text-xs font-bold tracking-widest uppercase">02 / Industrial</span>
      <h2 class="text-4xl font-bold text-[#0C1E38] mt-4 mb-6">Industrial Facilities.</h2>
      <!-- ... Content ... -->
    </div>
    <!-- Image (Order 2 on Desktop) -->
    <div class="w-full h-full order-1 md:order-2">
      <img src="..." alt="Industrial Facility" class="w-full h-auto object-cover" />
    </div>
  </div>
</section>

```