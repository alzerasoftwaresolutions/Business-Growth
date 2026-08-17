/**
 * Templates served by the single reusable listing architecture (Phase 6 §12).
 * Kept in a component-free module so it can be imported anywhere without
 * breaking fast refresh.
 */
export const LISTING_TEMPLATES = [
  'services',
  'products',
  'productCategories',
  'projects',
  'blog',
  'testimonials',
  'certifications',
  'team',
  'partners',
  'locations',
] as const;