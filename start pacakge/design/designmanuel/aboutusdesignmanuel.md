Here is the detailed design-to-code specification for the **Stonebridge Construction — About Us** page, covering both the **Desktop View (`about us.png`)** and **Mobile View (`about us mobile veiw.png`)**.

---

## 🎨 Global Design System & Theme Specs

### Color Palette

* **Primary Dark (Navy Blue):** `#0C1E38` (Vision card, pre-footer banner, main footer background)
* **Accent / Brand Gold (Bronze):** `#C49A6C` / `#B8860B` (Eyebrow labels, timeline markers, CTA button background)
* **Neutral Background Light:** `#F8F9FA` / `#F4F5F7` (Page background, light card backgrounds)
* **Neutral White:** `#FFFFFF` (Card surfaces, header background)
* **Text Primary (Dark):** `#1A1A1A` / `#0C1E38`
* **Text Secondary (Muted):** `#6B7280` / `#4B5563`
* **Text Light:** `#FFFFFF` (On dark blue backgrounds)

### Typography Hierarchy

* **Font Family:** Modern Sans-Serif / Serif Hybrid (*Inter*, *Plus Jakarta Sans*, or *Cinzel* for headings)
* **H1 (Hero Heading):** 48px–52px Bold (Desktop) / 32px–36px Bold (Mobile)
* **H2 (Section Titles):** 32px–36px Bold (Desktop) / 24px–28px Bold (Mobile)
* **Eyebrow Tags:** 12px–14px Uppercase, Bold, Letter-spacing `1.5px` (Gold `#C49A6C` or Muted Gray)
* **Body Text:** 14px–16px Regular, line-height `1.6`

---

## 💻 1. Desktop View Breakdown (`about us.png`)

### Section 1: Top Navigation Bar

* **Layout:** Sticky header, `max-width: 1280px`, flex row (`justify-between`, `items-center`).
* **Background:** Solid White (`#FFFFFF`) with border-bottom (`#E5E7EB`).
* **Left Element:** Brand Logo (`Stonebridge Construction`).
* **Center Nav Links:** Horizontal flex list (`gap-8`): `Home`, `Expertise`, `Projects`, **`About`** *(Active state with bold/underline indicator)*, `Contact`.
* **Right Action:** Solid Dark Navy button (`#0C1E38`) with white text: `REQUEST CONSULTATION`.

---

### Section 2: About Hero Section (2-Column Split Layout)

* **Layout:** 2-Column Grid (50/50 split), vertical alignment `center`.
* **Left Column (Text Content):**
* *Eyebrow:* `ABOUT STONEBRIDGE` in small gold/muted uppercase.
* *Main Title (H1):* `Built on Experience. Driven by Precision.`
* *Body Paragraph:* Descriptive text introducing the company's heritage, architectural excellence, and commitment to longevity.


* **Right Column (Visual Container):**
* High-resolution rectangular photo showing site engineers/project leads in high-vis vests reviewing plans at an active construction site with a tower crane background.



---

### Section 3: Company Narrative

* **Layout:** Single centered content block, max-width `800px`.
* **Heading (H2):** `Setting the Standard in Commercial Construction`
* **Body Text:** Extended narrative paragraph explaining company origins, safety philosophy, and relentless pursuit of engineering quality.

---

### Section 4: Timeline ("A Legacy of Growth")

* **Header:** Eyebrow `OUR STORY` + Title `A Legacy of Growth`.
* **Layout:** Horizontal Stepper / Milestone Track across 5 points:
* `1978` — Stonebridge Is Founded
* `2005` — Expanding Capability
* `2012` — Growing Expertise
* `2018` — Complex Projects
* `2026` — Building the Next Generation


* **Styling:** Circular nodes sitting on a horizontal connector line with year labels in bold dark text and subtitles beneath in secondary muted text.

---

### Section 5: Mission & Vision (Side-by-Side Split Block)

* **Layout:** 2-Column Equal Width Grid (50/50).
* **Left Box (Mission Card - Light Theme):**
* *Background:* Soft Light Gray (`#F8F9FA`).
* *Eyebrow:* `MISSION`
* *Content:* Bold header statement: *"To construct high-performance environments that elevate functionality, ensure lasting durability, and respect their surrounding contexts."*


* **Right Box (Vision Card - Dark Theme):**
* *Background:* Solid Dark Navy (`#0C1E38`).
* *Eyebrow:* `VISION` (Gold/Light Blue text).
* *Content:* Bold white header statement: *"To be the industry benchmark for engineering precision and reliable project delivery across large-scale commercial developments."*



---

### Section 6: Core Values Grid ("Principles That Guide Us")

* **Header:** Eyebrow `CORE VALUES` + Heading `Principles That Guide Us`.
* **Grid Layout:** 3-Column x 2-Row Grid (6 cards total).
* **Card Styling:** Clean white card/flat list item with light border top/divider line.
* `01 Precision`: Meticulous attention to detail in every phase of the construction lifecycle.
* `02 Integrity`: Unwavering honesty and transparency in all our professional relationships.
* `03 Safety`: An uncompromising commitment to creating secure environments for our teams and partners.
* `04 Quality`: Delivering superior craftsmanship and robust materials that endure.
* `05 Partnership`: Fostering collaborative relationships with clients, architects, and subcontractors.
* `06 Responsibility`: A dedicated approach to sustainable practices and community impact.



---

### Section 7: Leadership Team ("The Team Behind the Blueprint")

* **Header:** Eyebrow `LEADERSHIP` + Heading `The Team Behind the Blueprint`.
* **Grid Layout:** 3-Column Card Grid.
* **Card Structure:**
1. *Top:* Vertical portrait aspect ratio image (professional headshot in modern office/site context).
2. *Name:* Bold Dark Title (e.g., `David Chen`, `Sarah Jenkins`, `Marcus Thorne`).
3. *Role:* Muted secondary text (e.g., `Chief Executive Officer`, `Technical Director`, `Project Director`).



---

### Section 8: "Why Partner With Us" Feature Row

* **Heading:** Centered `Why Partner With Us`.
* **Layout:** 4-Column Row of Icon Feature Cards.
* **Items:**
1. *Refresh/Clock Icon:* `25+ Years` | Proven track record
2. *Engineering/Ruler Icon:* `Engineering Expertise` | Complex problem solving
3. *Shield Icon:* `Safety First` | Zero-incident culture
4. *Target/Check Icon:* `Reliable Delivery` | On-time, on-budget



---

### Section 9: Certifications & Standards

* **Header:** Eyebrow `CERTIFICATIONS & STANDARDS` + Heading `Committed to Professional Standards` with subtext paragraph.
* **Grid Layout:** 4-Column Grid of white badge cards with subtle border:
* Card 1: `ISO 9001` — QUALITY MANAGEMENT
* Card 2: `ISO 45001` — OCCUPATIONAL HEALTH & SAFETY
* Card 3: `[LICENSE]` — CONSTRUCTION LICENSE
* Card 4: `[ASSOCIATION]` — PROFESSIONAL MEMBERSHIP



---

### Section 10: Pre-Footer CTA & Main Footer

* **Pre-Footer Banner:** Full-width Dark Navy background (`#0C1E38`).
* Title: `LET'S BUILD SOMETHING THAT LASTS.`
* Subtext: *"Have a project in mind? Talk to our team about your construction requirements."*
* Button: Solid Gold/Bronze CTA button (`REQUEST CONSULTATION`).


* **Footer:** Dark background with multi-column structure (Company info, Navigation, Legal & Compliance, Copyright notice).

---

## 📱 2. Mobile View Breakdown (`about us mobile veiw.png`)

### Responsive Structural Adaptations

Mobile view converts all multi-column rows into **single vertical stacks (`flex-col`)** with consistent side padding (`px-4` or `px-6`).

---

### 1. Mobile Header

* Sticky top bar, 100% width, title `STONEBRIDGE CONSTRUCTION`, hamburger menu toggle (`≡`) on the right.

### 2. Mobile Hero & Image Card

* **Stack Order:**
1. `ABOUT STONEBRIDGE` eyebrow badge.
2. Main H1 Title: `Built on Experience. Driven by Precision.`
3. Body text paragraph explaining company legacy.
4. Full-width Image Card featuring an overlay badge container at the bottom: `BUILDING THE FUTURE` | *Our Legacy of Excellence*.



### 3. Mobile Company Narrative

* Stacked section under `OUR COMPANY` eyebrow:
* Title: `Construction Built Around Trust.`
* Two narrative paragraphs explaining client relationships, transparency, and safety.
* Full-width blueprint architectural photo positioned directly below the text.



### 4. Mobile Timeline ("A Foundation Built Over Time")

* **Layout Transformation:** Converts horizontal stepper into a **Vertical Timeline**:
* Continuous vertical line running down the left with gold diamond node markers.
* `1978` — **Foundation:** Founded by structural engineers in Chicago...
* `2005` — **Industrial Expansion:** Secured first major industrial manufacturing contract...
* `2012` — **Sustainable Practice:** Integrated LEED-certified methodologies...
* `2018` — **National Reach:** Expanded operations nationwide...
* `2026` — **Forward Vision:** Pioneering AI-driven structural analysis...



### 5. Mobile Mission & Vision

* Stacked vertically into 2 distinct full-width cards:
* **Mission Card (Top):** Light background card containing Mission statement.
* **Vision Card (Bottom):** Solid Dark Navy card (`#0C1E38`) containing Vision statement with white text.



### 6. Mobile Core Values ("Principles Behind Every Project")

* Single-column vertical stack of items numbered `01` through `06` (Precision, Integrity, Safety, Quality, Partnership, Responsibility), each with title + short description block.

### 7. Mobile Leadership Team

* Vertical stack of 3 executive profile cards:
* Full-width portrait image stacked directly above the leader's Name and Job Title.



### 8. Mobile "Why Partner With Us" Cards

* Single-column vertical stack of 4 full-width outlined white cards containing left-aligned icons, bold metric/feature title, and short subtitle.

### 9. Mobile Certifications Grid

* Formatted as a **2x2 Grid** of standard white outline boxes (`ISO 9001`, `ISO 45001`, `Master Builder License`, `Industry Assoc.`).

### 10. Mobile Pre-Footer & Footer

* **Pre-Footer:** Centered text content with full-width gold button (`REQUEST CONSULTATION`).
* **Footer:** Vertical single-column stack featuring Brand Info, Nav Links, Legal Links, and Copyright footer line.

---

## 🛠️ Code Implementation Template (Tailwind CSS)

```html
<!-- Mission & Vision Section (Responsive Split Card) -->
<section class="max-w-7xl mx-auto my-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Mission (Light Card) -->
  <div class="bg-gray-100 p-8 rounded-lg flex flex-col justify-between">
    <span class="text-xs font-bold uppercase tracking-widest text-[#C49A6C]">Mission</span>
    <p class="text-xl md:text-2xl font-bold text-[#0C1E38] mt-4">
      To construct high-performance environments that elevate functionality...
    </p>
  </div>

  <!-- Vision (Dark Card) -->
  <div class="bg-[#0C1E38] text-white p-8 rounded-lg flex flex-col justify-between">
    <span class="text-xs font-bold uppercase tracking-widest text-[#C49A6C]">Vision</span>
    <p class="text-xl md:text-2xl font-bold mt-4">
      To be the industry benchmark for engineering precision and reliable project delivery...
    </p>
  </div>
</section>

```