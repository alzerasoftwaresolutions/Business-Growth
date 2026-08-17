import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import type { ReactNode } from 'react';
import { getConfigs } from '../../config';
import { ConfigContext } from '../../app/ConfigContext';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { SiteLink } from '../SiteLink';
import { resolveTemplateBreadcrumbs } from '../breadcrumbs';
import {
  filterNavigationItems,
  isExternalHref,
  isCurrentPath,
  shouldOpenInNewTab,
  buildEnabledPaths,
} from '../navigation';
import type { NavigationItem } from '../../types/navigation';

const configs = getConfigs();
function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function render(node: ReactNode, initialPath = '/'): string {
  return renderToStaticMarkup(
    <ConfigContext.Provider value={{ configs: clone(configs), issues: [] }}>
      <MemoryRouter initialEntries={[initialPath]}>{node}</MemoryRouter>
    </ConfigContext.Provider>
  );
}

describe('navigation helpers', () => {
  const items: NavigationItem[] = [
    { label: 'Home', href: '/', enabled: true },
    { label: 'Team', href: '/team', enabled: true },
    { label: 'External', href: 'https://example.com', enabled: true },
  ];

  it('drops links to disabled routes but keeps external links', () => {
    const filtered = filterNavigationItems(items, {
      hideDisabledPages: true,
      hideDisabledFeatures: true,
      enabledPaths: buildEnabledPaths(['/']),
    });
    expect(filtered.map((item) => item.label)).toEqual(['Home', 'External']);
  });

  it('drops explicitly disabled entries when hideDisabledFeatures is on', () => {
    const withDisabled = [{ ...items[0], enabled: false }, items[1]];
    const filtered = filterNavigationItems(withDisabled, {
      hideDisabledPages: true,
      hideDisabledFeatures: true,
      enabledPaths: buildEnabledPaths(['/']),
    });
    expect(filtered).toHaveLength(0);
  });

  it('identifies external hrefs', () => {
    expect(isExternalHref('/about')).toBe(false);
    expect(isExternalHref('https://example.com')).toBe(true);
    expect(isExternalHref('mailto:hi@example.com')).toBe(true);
    expect(isExternalHref('tel:+15551234567')).toBe(true);
  });

  it('marks the current page with sub-path awareness', () => {
    expect(isCurrentPath('/', '/')).toBe(true);
    expect(isCurrentPath('/about', '/')).toBe(false);
    expect(isCurrentPath('/services', '/services')).toBe(true);
    expect(isCurrentPath('/services/plumbing', '/services')).toBe(true);
  });

  it('decides new-tab behavior only for external links', () => {
    expect(shouldOpenInNewTab('https://example.com', true)).toBe(true);
    expect(shouldOpenInNewTab('/about', true)).toBe(false);
    expect(shouldOpenInNewTab('https://example.com', false)).toBe(false);
  });
});

describe('resolveTemplateBreadcrumbs', () => {
  it('builds a Home → section trail for configured templates', () => {
    const trail = resolveTemplateBreadcrumbs(configs, 'services');
    expect(trail.map((crumb) => crumb.label)).toEqual(['Home', 'Services']);
  });

  it('returns an empty trail for templates not in showOn', () => {
    expect(resolveTemplateBreadcrumbs(configs, 'home')).toEqual([]);
    expect(resolveTemplateBreadcrumbs(configs, 'team')).toEqual([]);
  });

  it('appends the current item for detail templates', () => {
    const trail = resolveTemplateBreadcrumbs(configs, 'serviceDetails', { label: 'Plumbing' });
    expect(trail.map((crumb) => crumb.label)).toEqual(['Home', 'Services', 'Plumbing']);
  });

  it('returns an empty trail when breadcrumbs are disabled', () => {
    const disabled = clone(configs);
    disabled.navigation.breadcrumbs.enabled = false;
    expect(resolveTemplateBreadcrumbs(disabled, 'services')).toEqual([]);
  });
});

describe('site chrome rendering', () => {
  it('renders the configuration-driven primary navigation and CTA', () => {
    const html = render(<Header />);
    expect(html).toContain('Home');
    expect(html).toContain('About Us');
    expect(html).toContain('Request a Quote');
  });

  it('filters header links to disabled routes out of the markup', () => {
    const withTeam = clone(configs);
    withTeam.navigation.navigation.header.primary.push({ id: 'team', label: 'Team', href: '/team', type: 'page', enabled: true });
    const html = renderToStaticMarkup(
      <ConfigContext.Provider value={{ configs: withTeam, issues: [] }}>
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>
      </ConfigContext.Provider>
    );
    expect(html).not.toContain('/team');
    expect(html).not.toContain('>Team</');
  });

  it('renders footer columns and legal links from configuration', () => {
    const html = render(<Footer />);
    expect(html).toContain('Company');
    expect(html).toContain('Resources');
    expect(html).toContain('Privacy Policy');
    expect(html).toContain('Terms of Use');
  });

  it('does not render disabled footer entries', () => {
    const html = render(<Footer />);
    expect(html).not.toContain('Our Team');
  });

  it('renders internal links via react-router and external links as anchors', () => {
    const html = render(
      <SiteLink href="/about">About</SiteLink>,
      '/'
    );
    expect(html).toContain('href="/about"');

    const external = render(
      <SiteLink href="https://example.com" openInNewTab>
        Example
      </SiteLink>,
      '/'
    );
    expect(external).toContain('href="https://example.com"');
    expect(external).toContain('target="_blank"');
    expect(external).toContain('rel="noreferrer noopener"');
  });
});