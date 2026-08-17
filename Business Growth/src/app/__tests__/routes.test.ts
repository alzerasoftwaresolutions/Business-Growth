import { describe, expect, it } from 'vitest';

import { getConfigs } from '../../config';
import { buildRouteEntries, resolvePageTitle } from '../routes';
import type { PackageConfigs } from '../../types';

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

const pathsOf = (configs: PackageConfigs): string[] =>
  buildRouteEntries(configs).map((entry) => entry.path);

describe('route builder', () => {
  it('derives enabled routes from configuration', () => {
    const paths = pathsOf(getConfigs());

    expect(paths).toContain('/');
    expect(paths).toContain('/about');
    expect(paths).toContain('/services');
    expect(paths).toContain('/services/:slug');
    expect(paths).toContain('/products');
    expect(paths).toContain('/products/category/:slug');
    expect(paths).toContain('/products/:slug');
    expect(paths).toContain('/projects');
    expect(paths).toContain('/projects/:slug');
    expect(paths).toContain('/testimonials');
    expect(paths).toContain('/blog');
    expect(paths).toContain('/blog/:slug');
    expect(paths).toContain('/contact');
    expect(paths).toContain('/rfq');
    expect(paths).toContain('/faq');
    expect(paths).toContain('/certifications');
    expect(paths).toContain('/partners');
    expect(paths).toContain('/privacy');
    expect(paths).toContain('/terms');
  });

  it('does not expose routes for disabled features', () => {
    const paths = pathsOf(getConfigs());
    expect(paths).not.toContain('/team');
    expect(paths).not.toContain('/locations');
    expect(paths).not.toContain('/locations/:slug');
  });

  it('hides detail routes when detail pages are disabled', () => {
    const configs = clone(getConfigs());
    configs.features.features.pages.products.detailPages = false;
    const paths = pathsOf(configs);
    expect(paths).not.toContain('/products/:slug');
  });

  it('hides category routes when categories are disabled', () => {
    const configs = clone(getConfigs());
    configs.features.features.pages.products.categories = false;
    const paths = pathsOf(configs);
    expect(paths).not.toContain('/products/category/:slug');
  });

  it('hides all page routes when the page is disabled', () => {
    const configs = clone(getConfigs());
    configs.features.features.pages.blog.enabled = false;
    const paths = pathsOf(configs);
    expect(paths).not.toContain('/blog');
    expect(paths).not.toContain('/blog/:slug');
  });

  it('hides legal routes when the footer legal item is disabled', () => {
    const configs = clone(getConfigs());
    configs.navigation.footer.legal.items[0].enabled = false;
    const paths = pathsOf(configs);
    expect(paths).not.toContain('/privacy');
  });

  it('adds location detail only when multiple locations are enabled', () => {
    const configs = clone(getConfigs());
    configs.features.features.pages.locations.enabled = true;
    const pathsSingle = pathsOf(configs);
    expect(pathsSingle).toContain('/locations');
    expect(pathsSingle).not.toContain('/locations/:slug');

    configs.features.features.pages.locations.multipleLocations = true;
    const pathsMulti = pathsOf(configs);
    expect(pathsMulti).toContain('/locations/:slug');
  });
});

describe('resolvePageTitle', () => {
  it('uses configured titles when present', () => {
    const configs = getConfigs();
    expect(resolvePageTitle(configs, 'contact')).toBe('Contact Us');
    expect(resolvePageTitle(configs, 'rfq')).toBe('Request a Quote');
  });

  it('falls back to a neutral template label when content is empty', () => {
    const configs = clone(getConfigs());
    configs.contact.contact.contactPage.title = '';
    expect(resolvePageTitle(configs, 'contact')).toBe('Contact');
    expect(resolvePageTitle(configs, 'home')).toBe('Home');
    expect(resolvePageTitle(configs, 'privacy')).toBe('Privacy Policy');
    expect(resolvePageTitle(configs, 'terms')).toBe('Terms of Use');
  });
});