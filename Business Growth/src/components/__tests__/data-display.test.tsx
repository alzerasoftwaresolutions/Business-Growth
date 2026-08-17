import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import type { ReactNode } from 'react';

import { FeatureList, SpecificationTable, KeyValueList, Tabs, Accordion } from '../data-display';

const render = (node: ReactNode) => renderToStaticMarkup(node);

describe('data-display components', () => {
  it('FeatureList renders features and nothing when empty', () => {
    const html = render(
      <FeatureList
        features={[
          { title: 'Reliable', description: 'Always on.' },
          { title: 'Fast' },
        ]}
      />
    );
    expect(html).toContain('Reliable');
    expect(html).toContain('Always on.');
    expect(render(<FeatureList features={[]} />)).toBe('');
  });

  it('SpecificationTable renders rows with units and empty-state', () => {
    const html = render(
      <SpecificationTable
        specifications={[
          { label: 'Capacity', value: '50', unit: 'kg' },
          { label: 'Model', value: 'X-1' },
        ]}
      />
    );
    expect(html).toContain('<table');
    expect(html).toContain('Capacity');
    expect(html).toContain('50');
    expect(html).toContain('kg');
    expect(render(<SpecificationTable specifications={[]} />)).toBe('');
  });

  it('KeyValueList renders a compact dl', () => {
    const html = render(
      <KeyValueList
        items={[
          { label: 'Established', value: '1995' },
          { label: 'Fleet', value: '12' },
        ]}
      />
    );
    expect(html).toContain('<dl');
    expect(html).toContain('Established');
    expect(html).toContain('<dd class="text-sm font-medium text-slate-900">1995</dd>');
  });

  it('Tabs renders tablist with aria-selected and the active panel', () => {
    const html = render(
      <Tabs
        tabs={[
          { id: 'one', label: 'Overview', content: <p>Overview content</p> },
          { id: 'two', label: 'Specs', content: <p>Specs content</p> },
        ]}
        defaultActiveId="one"
      />
    );
    expect(html).toContain('role="tablist"');
    expect(html).toContain('aria-selected="true"');
    expect(html).toContain('Overview content');
    expect(html).not.toContain('Specs content');
  });

  it('Tabs honors a controlled activeId', () => {
    const html = render(
      <Tabs
        tabs={[
          { id: 'one', label: 'Overview', content: <p>Overview content</p> },
          { id: 'two', label: 'Specs', content: <p>Specs content</p> },
        ]}
        activeId="two"
        onSelect={() => {}}
      />
    );
    expect(html).toContain('Specs content');
    expect(html).not.toContain('Overview content');
  });

  it('Tabs renders nothing when empty', () => {
    expect(render(<Tabs tabs={[]} />)).toBe('');
  });

  it('Accordion marks open panels with aria-expanded and shows content', () => {
    const html = render(
      <Accordion
        items={[
          { id: 'a', title: 'Question A', content: <p>Answer A</p> },
          { id: 'b', title: 'Question B', content: <p>Answer B</p> },
        ]}
        defaultOpenIds={['a']}
      />
    );
    expect(html).toContain('aria-expanded="true"');
    expect(html).toContain('aria-expanded="false"');
    expect(html).toContain('Answer A');
    expect(html).not.toContain('Answer B');
  });

  it('Accordion renders nothing when empty', () => {
    expect(render(<Accordion items={[]} />)).toBe('');
  });
});