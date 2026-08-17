import type { PageTemplate } from '../app/routes';
import { HomeTemplate } from './HomeTemplate';
import { AboutTemplate } from './AboutTemplate';
import { ListingTemplate, type ListingTemplateType } from './ListingTemplate';
import { LISTING_TEMPLATES } from './listingTemplates';
import {
  ServiceDetailTemplate,
  ProductDetailTemplate,
  ProjectDetailTemplate,
  ArticleDetailTemplate,
  LocationDetailTemplate,
} from './DetailTemplates';
import { ContactTemplate } from './ContactTemplate';
import { RfqTemplate } from './RfqTemplate';
import { FaqTemplate } from './FaqTemplate';
import { LegalTemplate } from './LegalTemplate';

/**
 * Template registry (Phase 6 §10-§11): maps every PageTemplate to its reusable
 * page composition. The App renders this single view per route — templates are
 * not registered per content type in App, keeping routing centralized in
 * `src/app/routes.ts`.
 */
export function TemplateView({ template }: { template: PageTemplate }) {
  if (template === 'home') {
    return <HomeTemplate />;
  }
  if (template === 'about') {
    return <AboutTemplate />;
  }
  if (template === 'contact') {
    return <ContactTemplate />;
  }
  if (template === 'rfq') {
    return <RfqTemplate />;
  }
  if (template === 'faq') {
    return <FaqTemplate />;
  }
  if (template === 'privacy' || template === 'terms') {
    return <LegalTemplate template={template} />;
  }
  if (template === 'serviceDetails') {
    return <ServiceDetailTemplate />;
  }
  if (template === 'productDetails') {
    return <ProductDetailTemplate />;
  }
  if (template === 'projectDetails') {
    return <ProjectDetailTemplate />;
  }
  if (template === 'blogDetails') {
    return <ArticleDetailTemplate />;
  }
  if (template === 'locationDetails') {
    return <LocationDetailTemplate />;
  }
  if ((LISTING_TEMPLATES as readonly string[]).includes(template)) {
    return <ListingTemplate template={template as ListingTemplateType} />;
  }
  return <HomeTemplate />;
}