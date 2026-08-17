import { useLocation } from 'react-router-dom';
import type { PackageConfigs } from '../types';
import type { SeoIndexRules } from '../types/seo';
import type { PageTemplate } from '../app/routes';
import type { BreadcrumbItem } from '../components/types';
import { useConfig } from '../app/useConfig';
import { SeoHead } from './SeoHead';
import {
  resolveTitle,
  resolveDescription,
  resolveImage,
  resolveRobots,
  resolveCanonicalUrl,
  buildStructuredData,
} from './metadata';

export interface PageSeoOverrides {
  title?: string;
  description?: string;
  image?: string;
  robots?: SeoIndexRules;
  /** Canonical path — defaults to the current location. */
  canonicalPath?: string;
  /** Breadcrumb trail (rendered as BreadcrumbList structured data). */
  breadcrumbs?: BreadcrumbItem[];
}

interface PageSeoProps {
  template: PageTemplate;
  overrides?: PageSeoOverrides;
}

/**
 * One-per-template SEO integration point. Resolves metadata from the
 * authoritative configuration via the pure resolvers and applies it to the
 * document head. Templates render `<PageSeo template="..." />` — no metadata
 * logic is duplicated inside pages (07 §6-§8, Phase 6 §16).
 */
export function PageSeo({ template, overrides }: PageSeoProps) {
  const { configs } = useConfig();
  const location = useLocation();
  const path = overrides?.canonicalPath ?? location.pathname;

  const seo: PackageConfigs['seo'] = configs.seo;
  const title = resolveTitle(configs, template, overrides?.title);
  const description = resolveDescription(configs, template, overrides?.description);
  const image = resolveImage(configs, template, overrides?.image);
  const robots = resolveRobots(configs, overrides?.robots);
  const canonicalUrl = resolveCanonicalUrl(configs, path);
  const structuredData = buildStructuredData(configs, { breadcrumbs: overrides?.breadcrumbs });

  return (
    <SeoHead
      title={title}
      description={description}
      image={image}
      robots={robots}
      canonicalUrl={canonicalUrl}
      type={seo.seo.openGraph.type || 'website'}
      locale={seo.seo.openGraph.locale || undefined}
      siteName={seo.seo.openGraph.siteName || undefined}
      structuredData={structuredData}
    />
  );
}