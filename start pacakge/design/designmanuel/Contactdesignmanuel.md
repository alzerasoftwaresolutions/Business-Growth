I am happy to help you break down these UI designs. As an AI, I know exactly how crucial a structured, detailed specification is for generating accurate HTML and CSS.

*Note: I will refer to your files exactly as requested. However, please note that the file named **"Contact mobile veiw.jpg"** actually depicts the wide **Desktop layout**, while the file named **"contact (2).jpg"** depicts the narrow **Mobile layout**. I have organized the breakdown accordingly to ensure your code generator builds the responsive states correctly.*

Here is the comprehensive design-to-code specification for the Stonebridge Contact page.

---

## 🎨 Global Design System & Theme Specs

### Color Palette

* **Primary Dark (Navy Blue):** `#0C1E38` (Used for Pre-footer, Footer, Form submit buttons, and text headings).
* **Accent / Brand Gold (Tan/Peach):** `#E4C094` / `#F3D3A3` (Used for icons, timeline nodes, and primary CTA buttons).
* **Neutral Background Light:** `#F9FAFB` (Used for the main page background and map section background).
* **Neutral White:** `#FFFFFF` (Used for form inputs, header, and specific section backgrounds).
* **Text Primary (Dark):** `#111827` / `#0C1E38` (Headings and primary body text).
* **Text Secondary (Muted):** `#6B7280` (Subtitles, field placeholders, and helper text).

### Typography

* **Primary Font:** Modern Sans-Serif (e.g., *Inter*, *Plus Jakarta Sans*).
* **Headings:** Bold, tight letter spacing for H1/H2.
* **Eyebrows/Labels:** 12px–14px, Uppercase, Bold, Letter-spacing `1.5px` (often in Accent Gold or Dark Navy).

---

## 💻 1. Desktop View Breakdown (`Contact mobile veiw.jpg`)

### Section 1: Header / Navigation Bar

* **Layout:** Sticky top bar, `flex` row, `justify-between`, `items-center`, white background.
* **Left:** Brand logo `STONEBRIDGE` (Bold, uppercase).
* **Center:** Horizontal navigation links (`Expertise`, `Projects`, `About Us`, `Heritage`, `Sustainability`, `Contact`). "Contact" has an active bottom border/underline.
* **Right:** Solid dark navy button (`Request Consultation`).

### Section 2: Hero Section

* **Layout:** 2-Column Split (50/50).
* **Left Column (Text):**
* H1 Heading: `Let's Build Something Together` (Dark Navy).
* Body text: "Partner with Stonebridge Construction to bring your vision to life..."


* **Right Column (Image):** High-resolution construction site image with cranes and structural framing.

### Section 3: Contact Information Bar

* **Layout:** 4-Column flex row, centered text, separated by subtle vertical divider lines.
* **Styling per Column:** Gold line-art icon top, uppercase label, bold value, muted subtext.
1. *Phone Icon* | PHONE | `+1 (888) 555-0199` | Toll-Free
2. *Envelope Icon* | EMAIL | `inquiries@stonebridge.com` | General Inquiries
3. *Map Pin Icon* | OFFICE | `150 Heritage Plaza` | Chicago, IL 60601
4. *Clock Icon* | HOURS | `Mon - Fri 9am - 6pm` | Central Time



### Section 4: Project Inquiry Form

* **Layout:** 2-Column (Approx. 40/60 split).
* **Left Column:** Heading `Project Inquiry`, descriptive paragraph, and a short gold horizontal accent line.
* **Right Column (The Form):** White background, inputs have light gray borders.

| Field Label | Input Type | Grid Span (Desktop) |
| --- | --- | --- |
| First Name | Text Input | 1 Column (Half width) |
| Company / Organization | Text Input | 1 Column (Half width) |
| Email Address | Email Input | 1 Column (Half width) |
| Phone Number | Tel Input | 1 Column (Half width) |
| Project Type | Select Dropdown | 1 Column (Half width) |
| Project Location | Text Input | 1 Column (Half width) |
| Estimated Budget | Select Dropdown | Full Width |
| Project Description | Textarea (Multi-line) | Full Width |

* **Submit Button:** Full-width solid dark navy button (`REQUEST CONSULTATION →`).

### Section 5: Headquarters Map

* **Layout:** 2-Column (50/50 split). Light gray background container.
* **Left Column:** Grayscale map image with a custom gold map marker pin.
* **Right Column (White Card):**
* Heading: `Headquarters`
* Address details (stacked).
* Parking info text.
* Outline button (`GET DIRECTIONS →`).



### Section 6: Process Timeline

* **Header:** Eyebrow `AFTER YOU CONTACT US`, Heading `A Clear Path Forward.`
* **Layout:** 4-Step Horizontal Stepper.
* **Visuals:** Gold circular nodes (`01`, `02`, `03`, `04`) connected by a horizontal line. Below each node is a bold title (e.g., `INQUIRY`) and a brief description paragraph.

### Section 7: Pre-Footer & Footer

* **Pre-Footer:** Dark navy full-width banner. Centered gold handshake icon, Heading `READY TO START A CONVERSATION?`, subtext, and a white CTA button (`Contact Our Team`).
* **Footer:** Dark navy background. Logo left, multi-column link lists right, copyright bottom.

---

## 📱 2. Mobile View Breakdown (`contact (2).jpg`)

### Responsive Structural Adaptations

The mobile view strictly uses **single-column vertical stacking** for all previously multi-column layouts to ensure readability on small screens.

### Section 1: Mobile Header

* **Layout:** White background, flex row, `justify-between`.
* **Left:** Brand logo `STONEBRIDGE`.
* **Right:** Hamburger menu icon (`≡`).

### Section 2: Mobile Hero

* **Layout:** Stacked single column. Generous top/bottom padding.
* **Content Order:**
1. Eyebrow: `CONTACT US`
2. H1 Heading: `Let's Discuss Your Next Legacy Project.`
3. Paragraph text.
4. Full-width rounded image (two engineers looking at blueprints on-site).



### Section 3: Mobile Contact Information Stack

* **Header:** Eyebrow `GET IN TOUCH`, Heading `Speak With Our Team`.
* **Layout:** Vertical list of 4 items. Each item is separated by a full-width light gray horizontal rule (`border-bottom`).
* **Item Structure:**
* Icon + Label inline (Gold text).
* Large bold value (e.g., `+1 (212) 555-0198`).
* Small muted descriptive text.



### Section 4: Mobile Project Inquiry Form

* **Layout:** Stacked single column.
* **Header:** Heading `Project Inquiry` + description paragraph.
* **Form Fields:** All fields are **100% full width**. Note that the fields here differ slightly from the desktop mock.
* `FULL NAME` (Text Input)
* `COMPANY / ORGANIZATION` (Text Input)
* `EMAIL ADDRESS` (Email Input)
* `PROJECT TYPE` (Select Dropdown)
* `PROJECT DESCRIPTION` (Textarea)


* **Submit Button:** Full-width dark navy button (`Submit Inquiry`).

### Section 5: Mobile Headquarters Map

* **Layout:** Vertical Stack.
* **Content Order:**
1. Heading `Headquarters`.
2. Address details (stacked text).
3. Full-width grayscale map image with pin.
4. Full-width outline button (`GET DIRECTIONS`) with an icon.



### Section 6: Mobile Process Timeline

* **Header:** Heading `What Happens Next`.
* **Layout:** **Vertical Timeline.**
* **Visuals:** A vertical line runs down the left edge. Circular nodes sit on the line (`01`, `02`, `03`, and a checkmark for the final step). The step title and description sit to the right of each node.

### Section 7: Pre-Footer & Footer

* **Pre-Footer:** Dark navy background. Stacked text: `Ready to Build?`, paragraph, and a full-width gold button (`Call (212) 555-0198`).
* **Footer:** Dark navy background, left-aligned stacked text and logo.

---

## 🛠️ Implementation Guidance for AI Code Generators

To ensure the AI understands the shift from Desktop to Mobile, prompt it to use mobile-first CSS utility classes (like Tailwind CSS).

```html
<!-- Example of Responsive Form Grid Generation -->
<form class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
  
  <!-- Full width on mobile, half width on desktop -->
  <div class="col-span-1">
    <label class="block text-sm font-bold uppercase text-gray-700">First Name</label>
    <input type="text" class="mt-1 w-full border border-gray-300 p-3 rounded" placeholder="Jane Doe" />
  </div>

  <div class="col-span-1">
    <label class="block text-sm font-bold uppercase text-gray-700">Company</label>
    <input type="text" class="mt-1 w-full border border-gray-300 p-3 rounded" placeholder="Company Inc." />
  </div>

  <!-- Full width on both mobile and desktop -->
  <div class="col-span-1 md:col-span-2">
    <label class="block text-sm font-bold uppercase text-gray-700">Project Description</label>
    <textarea class="mt-1 w-full border border-gray-300 p-3 rounded" rows="4" placeholder="Briefly describe the scope..."></textarea>
  </div>

  <button class="col-span-1 md:col-span-2 w-full bg-[#0C1E38] text-white py-4 rounded font-bold">
    SUBMIT INQUIRY
  </button>
</form>

```