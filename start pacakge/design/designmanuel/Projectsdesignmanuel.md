Here is a comprehensive UI description of the Projects page layouts to serve as a design-to-code guide for your AI. This breakdown covers both the desktop and mobile views, detailing the layout structures, components, and responsive behaviors.

---

## Global Design System

* **Primary Colors:** Navy Blue (Backgrounds, Primary Text, solid buttons), White (Backgrounds, Cards, Text on dark backgrounds).
* **Accent Color:** Gold / Bronze (used for eyebrows, icons, metric numbers, and links).
* **Background Colors:** Light Gray (used for alternating section backgrounds to create contrast).
* **Typography:** Modern Sans-Serif. High contrast between bold, large headings (H1/H2) and standard readable body text. Eyebrows are consistently small, uppercase, and bold with wide letter spacing.
* **Border Radius:** Sharp corners (0px) on most images and buttons to maintain an architectural, structured feel.

---

## Desktop UI Breakdown: "Project.jpg"

### 1. Header Navigation

* **Layout:** Sticky top bar, flex row, `justify-content: space-between`, `align-items: center`.
* **Background:** White.
* **Left:** Brand Logo (Text-based).
* **Center:** Horizontal navigation links (`Home`, `Expertise`, `Projects`, `About`, `Contact`). "Projects" has an active state indicated by an underline.
* **Right:** Solid Navy CTA button (`Request Consultation`).

### 2. Hero Section

* **Layout:** 2-column flex or grid layout (approx. 40/60 split).
* **Background:** White.
* **Left Column (Content):**
* Eyebrow text: `OUR PROJECTS` (Gold/Orange).
* H1 Heading: `Built to Perform. Built to Last.` (Large, Navy, Bold).
* Body text paragraph explaining the uncompromising standards of the portfolio.


* **Right Column (Visual):** Large, high-resolution rectangular image of a modern glass office building.

### 3. Category Navigation Bar

* **Layout:** Centered horizontal row of text links with bottom borders.
* **Items:** `ALL`, `COMMERCIAL`, `INDUSTRIAL`, `INFRASTRUCTURE`, `HEALTHCARE`, `EDUCATION`, `HOSPITALITY`.

### 4. Featured Project Spotlight

* **Layout:** Full-width light gray background container. Inside, a 2-column layout (approx. 50/50 split).
* **Left Column:** Tall vertical image of a skyscraper ("Aura Tower").
* **Right Column (Content):**
* Eyebrow: `FEATURED PROJECT`
* H2 Title: `AURA TOWER`
* Subtitle: `Commercial Development`
* Body paragraph.
* Metadata Grid (2x2):
* `LOCATION: CHICAGO, IL`
* `TYPE: MIXED-USE`
* `STATUS: COMPLETED`
* `YEAR: 2024`


* Text Link: `VIEW PROJECT ->`



### 5. Project Grid ("A Record of Delivered Work.")

* **Header:** Eyebrow `OUR PORTFOLIO` + H2 `A Record of Delivered Work.` + short descriptive paragraph.
* **Layout:** 3-column masonry or staggered grid layout.
* **Card Structure:**
* Top: Image (varying aspect ratios).
* Bottom: Title (Navy, Bold), subtitle/location (Gray, small text), and completion year aligned to the right.
* *Note on images:* The 5th card ("West Logistics Hub") features a 3x3 grid of icons rather than a standard photo.



### 6. Specialized Project Types

* **Header:** Eyebrow `OUR EXPERTISE` + H2 `Specialized Project Types.`
* **Layout:** 3-column x 2-row grid.
* **Card Structure:** White background, padding, slight shadow or border. Contains an orange/gold icon top-left, a bold Title, and a small descriptive paragraph.

### 7. Metrics Banner

* **Layout:** Full-width Navy Blue background. Center aligned text.
* **Header:** H2 `Experience Measured in Projects.` (White).
* **Metrics Row:** 4 columns.
* Large Orange Text: `25+`, `450+`, `$2B+`, `12+`.
* Small White Subtext below each: `YEARS ACTIVE`, `PROJECTS DELIVERED`, `TOTAL VALUE`, `ACTIVE SITES`.



### 8. Pre-Footer & Footer

* **Pre-Footer:** Light gray background, centered content. H2 `HAVE A PROJECT IN MIND?`, paragraph, and two buttons side-by-side (`START A PROJECT` in solid navy, `VIEW SERVICES` in outline).
* **Footer:** Navy Blue background. 3-column layout (Brand info left, internal links center, legal links right).

---

## Mobile UI Breakdown: "Project mobile veiw.png"

The mobile design adapts the desktop layout into a vertical, single-column reading experience to optimize for touch devices.

### 1. Mobile Header & Hero

* **Header:** White background, Logo aligned left, Hamburger menu icon (≡) aligned right.
* **Hero Layout:** Stacked vertically.
* Eyebrow: `OUR PROJECTS`
* H1 Heading: `Built to Perform. Built to Last.`
* Full-width Image placed immediately below the heading (body text from desktop is removed here).



### 2. Category Navigation

* **Layout:** Horizontal, scrollable row (overflow-x: auto) to accommodate categories without wrapping.
* **Items Visible:** `ALL PROJECTS`, `COMMERCIAL`, `INDUSTRIAL`.

### 3. Featured Project Card

* **Layout:** Single-column card layout on a white background.
* **Structure:**
* Image sits at the top.
* Content sits below: Eyebrow (`01 —— FEATURED PROJECT`), Title (`Aura Tower`), and a 2x2 metadata grid (Type, Location, Completion).
* `VIEW PROJECT ->` text link at the bottom.



### 4. Project List

* **Layout:** Single column vertical stack. The masonry grid from desktop is converted into a standard list of cards.
* **Card Structure (Mobile specific):**
* Full-width Image.
* A row below the image containing a sequence number (e.g., `02`) on the left, and a gray category pill badge (e.g., `COMMERCIAL`) on the right.
* Title, Location, and Completion year stacked.
* `VIEW PROJECT ->` text link.



### 5. Project Categories Grid

* **Header:** Eyebrow `EXPERTISE` + H2 `Project Categories`.
* **Layout:** 2-column grid.
* **Card Structure:** Simplified compared to desktop. Light gray background cards containing only an icon and a title (no paragraphs).

### 6. Mobile Metrics Banner

* **Background:** Navy Blue.
* **Layout:** Vertical stack (1 column).
* **Styling:** Instead of centered columns, each metric is left-aligned with a thick orange/gold left border acting as an accent line.
* *Note Data Variance:* The metrics in the mobile mockup differ from desktop (`150+ PROJECTS COMPLETED`, `25 YEARS OF EXCELLENCE`, `$5B+ VALUE DELIVERED`).



### 7. Mobile Pre-Footer & Footer

* **Pre-Footer:** Light gray background. Centered text. Single full-width solid navy button (`CONTACT US TODAY`).
* **Footer:** Stacked vertically on a white background (differs from the Navy background on desktop). Logo and brand description top, Company links stacked, Legal links stacked, copyright and social icon at the very bottom.

