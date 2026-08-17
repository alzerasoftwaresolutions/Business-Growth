Here is a comprehensive design-to-code specification for the **Stonebridge Construction** landing page, broken down by section for both **Desktop (`Home.png`)** and **Mobile (`home mobile veiw.jpg`)** views.

---

## 🎨 Global Design System & Theme Specs

### Color Palette

* **Primary Dark (Navy Blue):** `#0C1E38` / `#102238` (Hero dark sections, metric section, pre-footer, footer background)
* **Accent / Brand Gold (Bronze):** `#C49A6C` / `#B8860B` (CTAs, links, process step borders, quote icons)
* **Neutral Light / Page Background:** `#F8F9FA` / `#F4F5F7` (Light background sections)
* **Neutral White:** `#FFFFFF` (Card backgrounds, header background)
* **Text Primary (Dark Body/Headings):** `#1A1A1A` / `#0C1E38`
* **Text Secondary (Muted):** `#6B7280` / `#4B5563`
* **Text Light (On Dark Backgrounds):** `#FFFFFF` / `#E5E7EB`

### Typography Hierarchy

* **Primary Font Family:** Clean Modern Sans-Serif / Serif Hybrid (e.g., *Inter*, *Plus Jakarta Sans*, or *Cinzel* for headings)
* **H1 (Hero Heading):** 48px–56px Bold (Desktop) / 32px–36px Bold (Mobile) — Uppercase, high letter spacing.
* **H2 (Section Headings):** 32px–40px Bold (Desktop) / 24px–28px Bold (Mobile).
* **H3 (Card Headings):** 20px–24px Semibold.
* **Eyebrow Tags:** 12px–14px Uppercase, Bold, Letter-spacing `1.5px` (Gold or Dark Gray).
* **Body Text:** 14px–16px Regular, line-height `1.6`.

---

## 💻 1. Desktop View Breakdown (`Home.png`)

### Section 1: Header / Navigation Bar

* **Layout:** Sticky top bar with a `max-width: 1280px` container, `flex` row, `justify-between`, `items-center`.
* **Background:** Solid White (`#FFFFFF`) with a subtle bottom border (`#E5E7EB`).
* **Left Element:** Brand logo containing a geometric icon + uppercase text: `Stonebridge Construction`.
* **Center Navigation Links:** Horizontal list (`gap-8`): `HOME`, `EXPERTISE`, `PROJECTS`, `ABOUT`, `CONTACT` in 13px bold uppercase font.
* **Right Action:** Solid dark navy rectangular button (`#0C1E38`) with crisp white uppercase text: `REQUEST CONSULTATION`.

---

### Section 2: Hero Section

* **Layout:** Centered single-column layout with wide container padding.
* **Eyebrow Text:** `BUILDING EXCELLENCE` in small gold/muted uppercase.
* **Main Title:** `ENGINEERED FOR GENERATIONS.` — Large, bold serif/sans-serif text in two lines.
* **Sub-headline:** Centered paragraph text (2–3 lines) describing company scope and commitment to quality.
* **CTA Button Group:** Horizontal row centered under text:
* *Primary CTA:* Solid Dark Navy button with white text (`VIEW PROJECTS`).
* *Secondary CTA:* White button with dark border and text (`OUR PROCESS`).


* **Hero Image Container:** Wide rectangular image showing an active high-rise skyscraper construction site with cranes and city skyline.
* **Scroll Indicator:** Centered below image with text `SCROLL` and a downward arrow icon.

---

### Section 3: Metrics / Key Performance Indicators Banner

* **Background:** Full-width dark navy banner (`#0C1E38`).
* **Header Content:** Centered white heading `Our Foundation of Reliability` with muted light-blue subtext: *"Metrics built on decades of proven execution and safety standards."*
* **Metrics Grid:** 4-column row evenly spaced:
1. `[25+]` — YEARS OF EXPERIENCE
2. `[450+]` — PROJECTS COMPLETED
3. `[$2B+]` — PROJECT VALUE DELIVERED
4. `0` — SAFETY INCIDENTS


* **Typography:** Numbers are extra large, bold, and highlighted in gold brackets; labels are small uppercase gold/light-gray text.

---

### Section 4: "A Legacy of Structural Excellence" (Split Layout)

* **Layout:** 2-Column split layout (50/50).
* **Left Column:** Vertical tall construction image (worker on site looking at building framework).
* **Right Column:** Text content container:
* *Eyebrow:* `OUR LEGACY`
* *Heading:* `A Legacy of Structural Excellence`
* *Paragraphs:* 2 body text paragraphs detailing company heritage.
* *Link CTA:* Text link in gold color with arrow icon (`DISCOVER OUR STORY →`).



---

### Section 5: "WHY PARTNER WITH US" Grid

* **Header:** Centered title `WHY PARTNER WITH US` with subtext `Built on Precision, Driven by Trust.`
* **Grid Layout:** 3-column x 2-row card layout (6 cards total).
* **Card Design:** Light white cards with subtle shadow, rounded corners (`8px`), and border.
* *Card 1:* Lightbulb icon | `25+ Years Experience` | *Decades of specialized knowledge...*
* *Card 2:* Drafting ruler icon | `Certified Engineering Team` | *World-class talent...*
* *Card 3:* Shield icon | `Safety-First Culture` | *Uncompromising safety standards...*
* *Card 4:* Chart icon | `Dedicated Project Management` | *Streamlined execution...*
* *Card 5:* Target icon | `Reliable Delivery` | *On-time, on-budget...*
* *Card 6:* Leaf icon | `Sustainable Practices` | *Eco-friendly materials...*



---

### Section 6: Process Horizontal Timeline / Stepper

* **Header:** Centered eyebrow `OUR PROCESS`.
* **Timeline Track:** A horizontal connector line running through 6 circular node steps:
1. `01` - **Consultation:** Strategic alignment for infinite project visions.
2. `02` - **Planning & Design:** Meticulous engineering and architectural excellence.
3. `03` - **Engineering Review:** Ensuring structural integrity and safety standards.
4. `04` - **Construction:** Precise execution managed by seasoned site leads.
5. `05` - **Quality Inspection:** Rigorous quality assurance and compliance checks.
6. `06` - **Project Handover:** Seamless transition and transfer to management.



---

### Section 7: Core Services

* **Header:** Centered bold title `Core Services`.
* **Grid Layout:** 3-column card row.
* **Card Style:** White card background, top border accent line in gold, subtle card shadow.
* *Column 1:* `Commercial Construction` — Office complexes, retail centers...
* *Column 2:* `Industrial Facilities` — Manufacturing plants, tech warehouses...
* *Column 3:* `Infrastructure Projects` — Roads, bridges, and municipal engineering...



---

### Section 8: Industries We Serve

* **Header:** Centered eyebrow `INDUSTRIES WE SERVE`.
* **Layout:** 6-column icon badge bar.
* **Badges:** Minimalist outline boxes containing an icon + text label beneath:
* Commercial | Industrial | Healthcare | Education | Government | Hospitality



---

### Section 9: Featured Project Spotlight ("AURA TOWER")

* **Background:** Full-width dark navy section block (`#0C1E38`).
* **Layout:** 2-Column split block.
* *Left Side:* High-res vertical twilight image of Aura Tower skyscraper.
* *Right Side:* Text block:
* *Eyebrow:* `FEATURED PROJECT`
* *Title:* `AURA TOWER | Innovation & Sustainability`
* *Sub-headline:* `AN ICONIC 52-STORY TOWER DEFINING SMART CITY DEVELOPMENT`
* *Meta Details Grid (2x2):*
* **CLIENT:** Metropolis Partners | **LOCATION:** London, UK
* **COMPLETION:** Q4 2024


* *Description:* Paragraph text describing architectural aspects.
* *CTA Button:* Solid Gold/Bronze filled button (`VIEW PROJECT CASE STUDY`).





---

### Section 10: Project Gallery

* **Header:** Centered heading `Project Gallery`.
* **Grid Layout:** 3-column x 2-row grid (6 project cards).
* **Card Design:** Top image area + bottom white content card with category pill tag + project title:
1. *Commercial:* Metropolitan Plaza
2. *Mixed-Use Residential:* Skyline Bridge
3. *Industrial:* Logistics Hub Alpha
4. *Healthcare:* Unity Medical Center
5. *Civil Infrastructure:* Global Tech Institute
6. *Energy:* Solaris Power Plant



---

### Section 11: Client Testimonials

* **Header:** Centered eyebrow `CLIENT TESTIMONIALS`.
* **Grid Layout:** 3-column layout of white testimonial cards.
* **Card Elements:** Gold quote mark top icon, quote paragraph text, client avatar bubble, client name in bold, and company title beneath.

---

### Section 12: Trust & Certification Banners

* **Trusted By Industry Leaders:** Row of 6 grayscale client/partner logos.
* **Certified Excellence:** 5 icon badges (ISO 9001, ISO 14001, LEED Gold Certified, Engineered Safety Award, Sustainability Award Winner).

---

### Section 13: Pre-Footer Banner & Main Footer

* **Pre-Footer Banner:** Dark navy background block (`#0C1E38`).
* Heading: `Let's Build Something That Lasts.`
* Subtext: *"Partner with Stonebridge to bring your most ambitious projects to towering success."*
* CTA Button: Centered gold button (`REQUEST CONSULTATION`).


* **Main Footer:** Deep dark background with 4-column structure:
* *Col 1 (Brand):* Logo, tagline.
* *Col 2 (Company):* About Us, Careers, Sustainability.
* *Col 3 (Services):* Commercial, Industrial, Infrastructure.
* *Col 4 (Contact):* Phone `1-800-BUILD-IT`, Email, Address.


* **Bottom Bar:** Divider line, copyright text on left, `Privacy Policy` & `Terms of Service` links on right.

---

## 📱 2. Mobile View Breakdown (`home mobile veiw.jpg`)

### Responsive Structural Adaptations

The mobile view stacks all multi-column layouts into a **single vertical column (`flex-col`)** to optimize touch targets and readability on small screens.

---

### 1. Mobile Header

* **Layout:** Sticky header, 100% width, horizontal flex row with `justify-between` and padding `px-4 py-3`.
* **Left Side:** Brand Name `STONEBRIDGE CONSTRUCTION` (uppercase condensed text).
* **Right Side:** Standard hamburger menu icon (`≡`).

### 2. Mobile Hero Section

* **Content Order (Stacked Vertically):**
1. Header text: `ENGINEERED FOR GENERATIONS.`
2. Body text paragraph explaining value proposition.
3. Full-width primary button: Dark navy fill (`VIEW PROJECTS`).
4. Full-width secondary button: White/Outline (`OUR PROCESS`).
5. Full-width stacked hero construction image.
6. Centered down-arrow scroll indicator.



### 3. Mobile Metrics Banner

* **Layout:** Dark navy block. Stacked grid (2x2 or 1x4 vertical column):
* Numbers stacked on top of their labels (`25+`, `450+`, `$2B+`, `0`).



### 4. Mobile Legacy & "Why Partner With Us" Sections

* **Legacy Block:** Image sits on top, text paragraph and gold arrow link sit directly underneath.
* **Why Partner Cards:** Single column stack of 6 full-width cards with left-aligned icons, headings, and descriptions.

### 5. Mobile Process Timeline

* **Layout Transformation:** Converts from horizontal stepper to a **vertical timeline list**.
* **Design:** Vertical line running down the left side with step circles (`01` to `06`) acting as bullet nodes, with step titles and descriptions placed to the right.

### 6. Mobile Featured Project ("AURA TOWER")

* **Layout:**
1. Vertical full-width image of Aura Tower at top.
2. Dark navy content card stacked below.
3. Metadata fields formatted as stacked text blocks.
4. Full-width Gold CTA button at bottom (`VIEW PROJECT CASE STUDY`).



### 7. Mobile Pre-Footer CTA & Footer

* **Pre-Footer:** Centered text content with full-width gold button.
* **Footer:** Single-column stacked navigation sections (`Company`, `Services`, `Contact`), followed by copyright and legal links at the bottom.

---

## 🛠️ Implementation Guidance for AI Code Generators

```html
<!-- Recommended Component Structure (Tailwind CSS Example) -->
<header class="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex justify-between items-center">
  <!-- Brand Logo -->
  <!-- Desktop Nav (Hidden on Mobile) -->
  <!-- Mobile Hamburger (Hidden on Desktop) -->
</header>

<main class="w-full">
  <!-- Hero Section -->
  <section class="max-w-7xl mx-auto px-4 py-12 text-center flex flex-col items-center">...</section>

  <!-- Metrics Section -->
  <section class="bg-[#0C1E38] text-white py-12 px-4 grid grid-cols-2 md:grid-cols-4 gap-6">...</section>

  <!-- Process Stepper Section -->
  <!-- Desktop: flex-row timeline | Mobile: flex-col vertical stepper -->
</main>

```

### Key Technical Takeaways for Code Generation

1. **Container Breakpoints:** Use standard breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).
2. **Theme Colors:** Define custom colors in CSS variables or Tailwind config for Navy (`#0C1E38`), Gold (`#C49A6C`), and Background Gray (`#F8F9FA`).
3. **Buttons:** Primary buttons should feature `w-full` on mobile and `w-auto` on desktop with `py-3 px-6` for touch targets.