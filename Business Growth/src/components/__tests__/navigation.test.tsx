import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import type { ReactNode } from 'react';

import { Breadcrumbs } from '../navigation';

const render = (node: ReactNode) => renderToStaticMarkup(node);

describe('Breadcrumbs', () => {
  it('marks the final item as current and links parents', () => {
    const html = render(
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Consulting' },
        ]}
      />
    );
    expect(html).toContain('aria-label="Breadcrumb"');
    expect(html).toContain('href="/services"');
    expect(html).toContain('aria-current="page"');
    expect(html).toContain('>Consulting</span>');
  });

  it('renders nothing when empty', () => {
    expect(render(<Breadcrumbs items={[]} />)).toBe('');
  });
});