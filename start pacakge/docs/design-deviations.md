# Design Deviations Register

The approved UI references (`design/` PNG wireframes + `design/designmanuel/*.md`)
are the design source of truth. The implementation follows the **Heritage**
design system (documented in the README and tokenized in
`src/styles/globals.css`). Intentional deviations are recorded here.

Any new deviation must be added to this register and approved before shipment.

| # | Area | Design manual | Implementation (Heritage) | Why | Status |
|---|------|---------------|---------------------------|-----|--------|
| D1 | Card radius | 8px (`homedesignmanuel.md` §5) | 10px (`--radius: 10px`, cards + inputs) | Single tokenized radius consistent across cards, inputs, and buttons; matches Heritage card spec (README). Client can change in one place in `globals.css`. | Approved internally — pending client sign-off |
| D2 | Typography | Suggested `Inter` / `Plus Jakarta Sans` / `Cinzel` (`homedesignmanuel.md` §Global) | `Hanken Grotesk` (headlines), `Source Sans 3` (body), `JetBrains Mono` (labels/stats), loaded in `index.html` | Heritage brand pair; all three are tokenized (`--font-*`) so a client font swap is a 2-line change + font link. | Approved internally — pending client sign-off |
| D3 | Header navigation | 5 links: HOME, EXPERTISE, PROJECTS, ABOUT, CONTACT (`homedesignmanuel.md` §1) | 6 links (adds **Services**, full 6-page Starter Presence scope) | Services is a contracted Starter Presence page with its own route/design; keeping it in the primary nav matches package scope. | Approved internally — pending client sign-off |
| D4 | Certifications location | "Certified Excellence" badge strip on Home (`homedesignmanuel.md` §12) | Certifications rendered as a dedicated section on the About page; Home shows Trusted-By text row | Avoids duplicating the same certification content across two templates; About is the canonical trust page. | Approved internally — pending client sign-off |

Status key: change the row to `Client approved` (with date) once the client
confirms, or `Reverted` if the client requires the manual spec exactly —
reverting D1/D2/D4 is token-level, D3 is a `src/data/navigation.ts` edit.

Intentional-deviation rule (checklist #7/#8/#39/#40): the approved design
remains authoritative; the AI must not redesign independently. These four rows
are the complete set of known deviations in the shipped template.