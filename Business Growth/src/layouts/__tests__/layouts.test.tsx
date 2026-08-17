import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import type { ReactNode } from 'react';
import { getConfigs } from '../../config';
import { ConfigContext } from '../../app/ConfigContext';
import { SiteLayout } from '../SiteLayout';
import { ListingLayout } from '../ListingLayout';
import { DetailLayout } from '../DetailLayout';

const configs = getConfigs();
function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function render(node: ReactNode): string {
  return renderToStaticMarkup(
    <ConfigContext.Provider value={{ configs: clone(configs), issues: [] }}>
      <MemoryRouter initialEntries={['/']}>{node}</MemoryRouter>
    </ConfigContext.Provider>
  );
}

describe('SiteLayout', () => {
  it('wraps children in the site chrome', () => {
    const html = render(
      <SiteLayout>
        <p>Page body</p>
      </SiteLayout>
    );
    expect(html).toContain('href="#main-content"');
    expect(html).toContain('main-content');
    expect(html).toContain('Page body');
    expect(html).toContain('<footer');
  });
});

describe('ListingLayout', () => {
  it('renders the required heading and optional bands when provided', () => {
    const html = render(
      <ListingLayout
        title="Services"
        intro="Configured intro"
        categoryNav={<p>Categories</p>}
        controls={<p>Controls</p>}
        summary={<p>Showing 1 of 1</p>}
        pagination={<p>Pagination</p>}
      >
        <p>Body</p>
      </ListingLayout>
    );
    expect(html).toContain('Services');
    expect(html).toContain('Configured intro');
    expect(html).toContain('Categories');
    expect(html).toContain('Controls');
    expect(html).toContain('Showing 1 of 1');
    expect(html).toContain('Pagination');
    expect(html).toContain('Body');
  });

  it('omits optional bands that are not supplied', () => {
    const html = render(
      <ListingLayout title="Products">
        <p>Body</p>
      </ListingLayout>
    );
    expect(html).not.toContain('Showing');
    expect(html).not.toContain('Categories');
    expect(html).toContain('Body');
  });

  it('renders the empty state instead of the body when provided', () => {
    const html = render(
      <ListingLayout title="Products" emptyState={<p>No products yet</p>}>
        <p>Body</p>
      </ListingLayout>
    );
    expect(html).toContain('No products yet');
    expect(html).not.toContain('Body');
  });
});

describe('DetailLayout', () => {
  it('renders title, children and an optional aside', () => {
    const html = render(
      <DetailLayout title="Product" aside={<p>Aside</p>}>
        <p>Body</p>
      </DetailLayout>
    );
    expect(html).toContain('Product');
    expect(html).toContain('Aside');
    expect(html).toContain('Body');
  });

  it('collapses to a single column when no aside is provided', () => {
    const html = render(
      <DetailLayout title="Article">
        <p>Body</p>
      </DetailLayout>
    );
    expect(html).not.toContain('Aside');
    expect(html).toContain('Body');
  });
});