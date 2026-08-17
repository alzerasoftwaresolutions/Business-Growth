import { describe, expect, it } from 'vitest';
import { getConfigs } from '../../config';
import {
  resolveEnvironment,
  resolveRobots,
  applyTitleTemplate,
  resolveTitle,
  resolveDescription,
  resolveImage,
  resolveCanonicalUrl,
  resolveBaseUrl,
  buildStructuredData,
} from '../metadata';

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

describe('SEO metadata resolvers', () => {
  it('resolves the environment from configuration', () => {
    expect(resolveEnvironment(getConfigs())).toBe('development');
  });

  it('applies environment robots rules by default', () => {
    const robots = resolveRobots(getConfigs());
    expect(robots).toEqual({ index: false, follow: false });
  });

  it('prefers an explicit robots override', () => {
    const robots = resolveRobots(getConfigs(), { index: true, follow: false });
    expect(robots).toEqual({ index: true, follow: false });
  });

  it('applies the title template only when a site name exists', () => {
    const configs = getConfigs();
    expect(applyTitleTemplate(configs, 'Contact Us')).toBe('Contact Us');

    const named = clone(configs);
    named.seo.seo.site.name = 'Acme';
    expect(applyTitleTemplate(named, 'Contact Us')).toBe('Contact Us | Acme');
  });

  it('resolves titles from override, then configuration, never invented', () => {
    const configs = getConfigs();
    expect(resolveTitle(configs, 'contact', 'My title')).toBe('My title');

    const named = clone(configs);
    named.seo.seo.site.name = 'Acme';
    named.seo.seo.metadata.pages['contact'].title = 'Contact Us';
    expect(resolveTitle(named, 'contact')).toBe('Contact Us | Acme');
  });

  it('resolves description from override then configuration', () => {
    const configs = clone(getConfigs());
    configs.seo.seo.metadata.pages['about'].description = 'Configured about copy';
    expect(resolveDescription(configs, 'about', 'Override')).toBe('Override');
    expect(resolveDescription(configs, 'about')).toBe('Configured about copy');
    expect(resolveDescription(configs, 'home')).toBe('');
  });

  it('resolves the social image from configuration', () => {
    const configs = clone(getConfigs());
    configs.seo.seo.metadata.pages['home'].image = '/social.png';
    expect(resolveImage(configs, 'home')).toBe('/social.png');
    expect(resolveImage(configs, 'home', '/override.png')).toBe('/override.png');
  });

  it('returns an empty canonical URL until a base URL is provisioned', () => {
    expect(resolveCanonicalUrl(getConfigs(), '/services')).toBe('');
    expect(resolveBaseUrl(getConfigs())).toBe('');
  });

  it('builds canonical URLs from the base + path with configured rules', () => {
    const configs = clone(getConfigs());
    configs.seo.seo.canonical.baseUrl = 'https://example.com';
    configs.seo.seo.canonical.trailingSlash = true;
    expect(resolveCanonicalUrl(configs, '/services')).toBe('https://example.com/services/');

    configs.seo.seo.canonical.trailingSlash = false;
    expect(resolveCanonicalUrl(configs, '/services')).toBe('https://example.com/services');
  });

  it('emits Organization structured data only when provisioned', () => {
    const data = buildStructuredData(getConfigs(), {});
    expect(data).toEqual([]);

    const configs = clone(getConfigs());
    configs.seo.seo.structuredData.organization.name = 'Acme';
    configs.seo.seo.structuredData.organization.url = 'https://example.com';
    const withOrg = buildStructuredData(configs, {});
    expect(withOrg).toHaveLength(1);
    expect(withOrg[0]).toMatchObject({ '@type': 'Organization', name: 'Acme' });
  });

  it('emits BreadcrumbList structured data when enabled and provided', () => {
    const configs = clone(getConfigs());
    configs.seo.seo.canonical.baseUrl = 'https://example.com';
    const data = buildStructuredData(configs, {
      breadcrumbs: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
      ],
    });
    const breadcrumbs = data.find((entry) => entry['@type'] === 'BreadcrumbList');
    expect(breadcrumbs).toBeDefined();
    const items = (breadcrumbs as { itemListElement: unknown[] }).itemListElement;
    expect(items).toHaveLength(2);
  });
});