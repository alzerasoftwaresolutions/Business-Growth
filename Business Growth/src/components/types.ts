/**
 * Component-facing content contracts.
 *
 * These are the VIEW contracts each component consumes (04-component-system
 * §82 "Component Data Requirements"). They map 1:1 onto the authoritative
 * content model (05-content-model) — Product, Service, Project, Article,
 * Person, Location, Testimonial, Certification, Download, media, CTA — and
 * describe what a component requires vs accepts (04 §83).
 *
 * They are NOT a second content model and contain no client data. Cards and
 * sections receive typed content from page templates later; a component never
 * knows which industry it belongs to (04 §90, Phase 5 §7).
 */

/** Media image model (05 §93). `alt` is always required for accessibility. */
export interface MediaImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** Responsive-crop focal point (05 §94). */
  focalPoint?: { x: number; y: number };
}

/** Gallery = ordered images, each with its own metadata (05 §95). */
export type GalleryItem = MediaImage;

/** Generic label/value metadata (MetadataList). */
export interface MetadataItem {
  label: string;
  value: string;
}

/** Structured statistic (05 §15). `value` is display text; never fabricated. */
export interface Stat {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  description?: string;
}

/** Company / project history entry (04 §41, 05 §18). */
export interface TimelineItem {
  year: string;
  title: string;
  description?: string;
  image?: MediaImage;
}

/** Feature (05 §36) — separated from technical specifications. */
export interface Feature {
  title: string;
  description?: string;
  /** Icon token; actual rendering follows the approved UI. */
  icon?: string;
}

/** Flexible specification (05 §34). */
export interface Specification {
  label: string;
  value: string;
  unit?: string;
  group?: string;
}

/** Downloadable resource (05 §97, 04 §30). */
export interface DownloadItem {
  title: string;
  url: string;
  type?: string;
  size?: string;
  description?: string;
}

/** Client-approved testimonial (05 §25). */
export interface Testimonial {
  quote: string;
  personName: string;
  personRole?: string;
  companyName?: string;
  photo?: MediaImage;
}

/** Verified certification (05 §26). */
export interface CertificationSummary {
  name: string;
  issuer?: string;
  logo?: MediaImage;
  verificationUrl?: string;
}

/** Product listing/detail summary (05 §33). */
export interface ProductSummary {
  title: string;
  slug?: string;
  category?: string;
  shortDescription?: string;
  image?: MediaImage;
  metadata?: MetadataItem[];
  href?: string;
}

/** Service summary (05 §28). */
export interface ServiceSummary {
  title: string;
  slug?: string;
  category?: string;
  shortDescription?: string;
  icon?: string;
  image?: MediaImage;
  href?: string;
}

/** Project summary (05 §39). */
export interface ProjectSummary {
  title: string;
  slug?: string;
  category?: string;
  location?: string;
  year?: string;
  shortDescription?: string;
  image?: MediaImage;
  metadata?: MetadataItem[];
  href?: string;
}

/** Article / news summary (05 §46). */
export interface ArticleSummary {
  title: string;
  slug?: string;
  category?: string;
  publishedDate?: string;
  excerpt?: string;
  featuredImage?: MediaImage;
  author?: string;
  href?: string;
}

/** Person summary (05 §21). */
export interface PersonSummary {
  name: string;
  role?: string;
  department?: string;
  shortBio?: string;
  photo?: MediaImage;
  email?: string;
  href?: string;
}

/** Location summary (05 §19). */
export interface LocationSummary {
  name: string;
  address?: string;
  city?: string;
  region?: string;
  country?: string;
  phone?: string;
  email?: string;
  businessHours?: string;
  mapUrl?: string;
  href?: string;
}

/** Breadcrumb trail entry (04 §14). */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/** CTA descriptor consumed by lead-generation CTAs (05 §98). */
export interface CtaDefinition {
  label: string;
  /** Destination type (05 §98): internal, external, phone, email, whatsapp, rfq, contact. */
  type: 'internal' | 'external' | 'phone' | 'email' | 'whatsapp' | 'rfq' | 'contact';
  /** href/tel:/mailto:/https:// target. */
  href?: string;
  /** WhatsApp prefill message when type === 'whatsapp'. */
  message?: string;
}