import type { ReactNode } from 'react';
import type { PackageConfigs } from '../types';
import { resolvePageTitle, type PageTemplate } from '../app/routes';
import type { CollectionSource } from '../content/collection';
import { createEmptyCollectionSource } from '../content/collection';
import { ServiceCard } from '../components/cards/ServiceCard';
import { ProductCard } from '../components/cards/ProductCard';
import { ProjectCard } from '../components/cards/ProjectCard';
import { ArticleCard } from '../components/cards/ArticleCard';
import { TestimonialCard } from '../components/cards/TestimonialCard';
import { CertificationCard } from '../components/cards/CertificationCard';
import { PersonCard } from '../components/cards/PersonCard';
import { LocationCard } from '../components/cards/LocationCard';
import type {
  ServiceSummary,
  ProductSummary,
  ProjectSummary,
  ArticleSummary,
  Testimonial,
  CertificationSummary,
  PersonSummary,
  LocationSummary,
} from '../components/types';

export interface ListingFilterOption {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

export interface ListingSortOption {
  value: string;
  label: string;
}

export interface ListingConfig {
  template: PageTemplate;
  title: string;
  intro?: string;
  source: CollectionSource<unknown>;
  renderItem: (item: unknown, index: number) => ReactNode;
  columns?: 1 | 2 | 3 | 4;
  categories?: { label: string; href: string }[];
  allowedCategories?: string[];
  sortOptions?: ListingSortOption[];
  allowedSorts?: string[];
  filters?: ListingFilterOption[];
  emptyStateTitle: string;
  emptyStateDescription?: string;
}

interface Definition {
  renderItem: (item: unknown, index: number) => ReactNode;
  emptyStateTitle: string;
  emptyStateDescription: string;
  columns: 1 | 2 | 3 | 4;
}

const DEFINITIONS: Record<PageTemplate, Definition> = {
  services: {
    renderItem: (item) => <ServiceCard service={item as ServiceSummary} />,
    emptyStateTitle: 'No services yet',
    emptyStateDescription: 'Services will appear here when the client provides their catalog.',
    columns: 3,
  },
  products: {
    renderItem: (item) => <ProductCard product={item as ProductSummary} />,
    emptyStateTitle: 'No products yet',
    emptyStateDescription: 'Products will appear here when the client provides their catalog.',
    columns: 3,
  },
  productCategories: {
    renderItem: (item) => <ProductCard product={item as ProductSummary} />,
    emptyStateTitle: 'No products in this category',
    emptyStateDescription: 'Products will appear here when the client provides their catalog.',
    columns: 3,
  },
  projects: {
    renderItem: (item) => <ProjectCard project={item as ProjectSummary} />,
    emptyStateTitle: 'No projects yet',
    emptyStateDescription: 'Projects will appear here when the client provides their portfolio.',
    columns: 3,
  },
  blog: {
    renderItem: (item) => <ArticleCard article={item as ArticleSummary} />,
    emptyStateTitle: 'No news yet',
    emptyStateDescription: 'Articles will appear here when the client publishes news.',
    columns: 3,
  },
  testimonials: {
    renderItem: (item) => <TestimonialCard testimonial={item as Testimonial} />,
    emptyStateTitle: 'No testimonials yet',
    emptyStateDescription: 'Testimonials will appear here when approved by the client.',
    columns: 3,
  },
  certifications: {
    renderItem: (item) => <CertificationCard certification={item as CertificationSummary} />,
    emptyStateTitle: 'No certifications yet',
    emptyStateDescription: 'Certifications will appear here when verified by the client.',
    columns: 3,
  },
  team: {
    renderItem: (item) => <PersonCard person={item as PersonSummary} />,
    emptyStateTitle: 'No team members yet',
    emptyStateDescription: 'Team members will appear here when the client provides them.',
    columns: 4,
  },
  partners: {
    renderItem: (item) => <PersonCard person={item as PersonSummary} />,
    emptyStateTitle: 'No partners yet',
    emptyStateDescription: 'Partners will appear here when the client provides them.',
    columns: 4,
  },
  locations: {
    renderItem: (item) => <LocationCard location={item as LocationSummary} />,
    emptyStateTitle: 'No locations yet',
    emptyStateDescription: 'Locations will appear here when the client provides them.',
    columns: 3,
  },
  home: { renderItem: () => null, emptyStateTitle: '', emptyStateDescription: '', columns: 3 },
  about: { renderItem: () => null, emptyStateTitle: '', emptyStateDescription: '', columns: 3 },
  serviceDetails: { renderItem: () => null, emptyStateTitle: '', emptyStateDescription: '', columns: 3 },
  productDetails: { renderItem: () => null, emptyStateTitle: '', emptyStateDescription: '', columns: 3 },
  projectDetails: { renderItem: () => null, emptyStateTitle: '', emptyStateDescription: '', columns: 3 },
  blogDetails: { renderItem: () => null, emptyStateTitle: '', emptyStateDescription: '', columns: 3 },
  locationDetails: { renderItem: () => null, emptyStateTitle: '', emptyStateDescription: '', columns: 3 },
  contact: { renderItem: () => null, emptyStateTitle: '', emptyStateDescription: '', columns: 3 },
  rfq: { renderItem: () => null, emptyStateTitle: '', emptyStateDescription: '', columns: 3 },
  faq: { renderItem: () => null, emptyStateTitle: '', emptyStateDescription: '', columns: 3 },
  privacy: { renderItem: () => null, emptyStateTitle: '', emptyStateDescription: '', columns: 3 },
  terms: { renderItem: () => null, emptyStateTitle: '', emptyStateDescription: '', columns: 3 },
};

/**
 * Resolves the reusable listing configuration for a template. The title and
 * intro come from the SEO configuration; the card renderer and empty-state
 * copy come from the shared definitions — one listing architecture for every
 * content type, never an industry-specific page.
 */
export function resolveListingConfig(configs: PackageConfigs, template: PageTemplate): ListingConfig {
  const definition = DEFINITIONS[template];
  const metadataPage = configs.seo.seo.metadata.pages[template];

  return {
    template,
    title: resolvePageTitle(configs, template),
    intro: metadataPage?.description || undefined,
    source: createEmptyCollectionSource(),
    renderItem: definition.renderItem,
    columns: definition.columns,
    emptyStateTitle: definition.emptyStateTitle,
    emptyStateDescription: definition.emptyStateDescription,
  };
}