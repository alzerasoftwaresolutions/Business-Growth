import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import type { ReactNode } from 'react';

import {
  Button,
  Container,
  Section,
  SectionHeader,
  MetadataList,
  StatGrid,
  Timeline,
  Grid,
  Stack,
  Divider,
  AspectRatio,
} from '../common';

const render = (node: ReactNode) => renderToStaticMarkup(node);

describe('common primitives', () => {
  it('Button renders an anchor when href is provided', () => {
    const html = render(<Button href="/contact">Contact</Button>);
    expect(html).toContain('<a');
    expect(html).toContain('href="/contact"');
    expect(html).toContain('>Contact</a>');
  });

  it('Button marks external anchors with target/rel', () => {
    const html = render(<Button href="https://example.com">Go</Button>);
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noreferrer"');
  });

  it('Button renders a button element by default with size classes', () => {
    const html = render(<Button size="lg">Save</Button>);
    expect(html).toContain('<button');
    expect(html).toContain('class="');
    expect(html).toContain('px-5');
  });

  it('Button forwards native button attributes and loading state', () => {
    const html = render(
      <Button type="submit" loading>
        Send
      </Button>
    );
    expect(html).toContain('type="submit"');
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain('disabled');
  });

  it('Container applies the default max width', () => {
    const html = render(<Container>Body</Container>);
    expect(html).toContain('max-w-6xl');
    expect(html).toContain('Body');
  });

  it('Section supports variant and spacing classes', () => {
    const html = render(
      <Section variant="muted" spaced={false}>
        X
      </Section>
    );
    expect(html).toContain('bg-slate-50');
    expect(html).not.toContain('py-16');
  });

  it('Section exposes the anchor id', () => {
    const html = render(<Section id="services">X</Section>);
    expect(html).toContain('id="services"');
  });

  it('SectionHeader renders heading hierarchy with optional parts', () => {
    const html = render(
      <SectionHeader eyebrow="About" heading="Who we are" supportingText="Text" />
    );
    expect(html).toContain('>Who we are</h2>');
    expect(html).toContain('About');
    expect(html).toContain('Text');
  });

  it('SectionHeader omits optional slots when absent', () => {
    const html = render(<SectionHeader heading="Only heading" />);
    expect(html).not.toContain('uppercase');
    expect(html).not.toContain('max-w-2xl');
  });

  it('MetadataList renders a semantic definition list', () => {
    const html = render(
      <MetadataList
        items={[
          { label: 'Founded', value: '2010' },
          { label: 'Team', value: '40' },
        ]}
      />
    );
    expect(html).toContain('<dl');
    expect(html).toContain('<dt');
    expect(html).toContain('>2010</dd>');
    expect(html).toContain('Founded');
  });

  it('StatGrid renders provided stats and nothing when empty', () => {
    const withStats = render(
      <StatGrid stats={[{ label: 'Years', value: '10', suffix: '+' }]} />
    );
    expect(withStats).toContain('>10<span');
    expect(withStats).toContain('Years');
    expect(render(<StatGrid stats={[]} />)).toBe('');
  });

  it('Timeline renders entries and nothing when empty', () => {
    const html = render(
      <Timeline
        items={[
          { year: '2010', title: 'Founded', description: 'Started' },
          { year: '2015', title: 'Expanded' },
        ]}
      />
    );
    expect(html).toContain('<ol');
    expect(html).toContain('2010');
    expect(html).toContain('Founded');
    expect(render(<Timeline items={[]} />)).toBe('');
  });

  it('Grid maps column counts to responsive classes', () => {
    expect(render(<Grid columns={4}>x</Grid>)).toContain('lg:grid-cols-4');
    expect(render(<Grid columns={2}>x</Grid>)).toContain('sm:grid-cols-2');
  });

  it('Stack and Divider render layout classes', () => {
    expect(render(<Stack gap="lg">x</Stack>)).toContain('gap-10');
    expect(render(<Divider />)).toContain('<hr');
  });

  it('AspectRatio reserves space via inline style', () => {
    const html = render(<AspectRatio ratio="4/3">x</AspectRatio>);
    expect(html).toContain('aspect-ratio:4/3');
  });
});