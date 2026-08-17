import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import type { ReactNode } from 'react';

import {
  Card,
  CardGrid,
  ProductCard,
  ServiceCard,
  ProjectCard,
  ArticleCard,
  TestimonialCard,
  CertificationCard,
  DownloadCard,
  LocationCard,
  PersonCard,
} from '../cards';

const render = (node: ReactNode) => renderToStaticMarkup(node);

const image = { src: '/media/a.jpg', alt: 'A photo' };
const href = '/details';

describe('cards', () => {
  it('Card renders a link when href is given, div otherwise', () => {
    expect(render(<Card href={href}>x</Card>)).toContain(`<a href="${href}"`);
    expect(render(<Card>x</Card>)).toContain('<div');
  });

  it('CardGrid renders a responsive grid', () => {
    const html = render(<CardGrid columns={2}>x</CardGrid>);
    expect(html).toContain('grid');
    expect(html).toContain('sm:grid-cols-2');
  });

  it('ProductCard shows image + metadata in standard variant', () => {
    const html = render(
      <ProductCard
        product={{
          title: 'Widget',
          href,
          image,
          category: 'Widgets',
          shortDescription: 'A widget.',
          metadata: [
            { label: 'Code', value: 'W-1' },
            { label: 'Size', value: 'M' },
          ],
        }}
      />
    );
    expect(html).toContain('<img');
    expect(html).toContain('alt="A photo"');
    expect(html).toContain('W-1');
    expect(html).toContain('View details');
  });

  it('ProductCard compact variant omits image and metadata', () => {
    const html = render(
      <ProductCard
        variant="compact"
        product={{ title: 'Widget', href, image, category: 'Widgets', shortDescription: 'A widget.' }}
      />
    );
    expect(html).not.toContain('<img');
    expect(html).toContain('Widgets');
  });

  it('ProductCard renders without image when not provided (never fabricated)', () => {
    const html = render(<ProductCard product={{ title: 'Widget' }} />);
    expect(html).not.toContain('<img');
    expect(html).toContain('Widget');
  });

  it('ServiceCard renders title and CTA', () => {
    const html = render(<ServiceCard service={{ title: 'Consulting', href, shortDescription: 'Advice.' }} />);
    expect(html).toContain('Consulting');
    expect(html).toContain('Advice.');
  });

  it('ProjectCard renders metadata list', () => {
    const html = render(
      <ProjectCard
        project={{
          title: 'HQ',
          href,
          category: 'Workspace',
          metadata: [
            { label: 'Location', value: 'Addis Ababa' },
            { label: 'Year', value: '2024' },
          ],
        }}
      />
    );
    expect(html).toContain('Addis Ababa');
    expect(html).toContain('2024');
  });

  it('ArticleCard renders a semantic time element when published', () => {
    const html = render(<ArticleCard article={{ title: 'Post', href, category: 'News', publishedDate: '2026-08-10' }} />);
    expect(html).toContain('<time dateTime="2026-08-10">2026-08-10</time>');
  });

  it('TestimonialCard renders quote and attribution', () => {
    const html = render(
      <TestimonialCard
        testimonial={{ quote: 'Great work.', personName: 'A. Client', personRole: 'CEO', companyName: 'Acme' }}
      />
    );
    expect(html).toContain('Great work.');
    expect(html).toContain('A. Client');
    expect(html).toContain('CEO, Acme');
    expect(html).toContain('<blockquote');
    expect(html).toContain('<figcaption');
  });

  it('CertificationCard links to the verification URL when present', () => {
    const html = render(
      <CertificationCard certification={{ name: 'ISO 9001', issuer: 'ANSI', verificationUrl: 'https://verify.example.com/x' }} />
    );
    expect(html).toContain('href="https://verify.example.com/x"');
    expect(html).toContain('Verify');
  });

  it('DownloadCard renders a direct download link', () => {
    const html = render(<DownloadCard download={{ title: 'Brochure', url: '/files/brochure.pdf', size: '2.1 MB', type: 'PDF' }} />);
    expect(html).toContain('href="/files/brochure.pdf"');
    expect(html).toContain('2.1 MB');
    expect(html).toContain('Download');
  });

  it('LocationCard renders address and contact details when provided', () => {
    const html = render(
      <LocationCard
        location={{
          name: 'HQ',
          address: 'Bole Rd',
          city: 'Addis Ababa',
          country: 'Ethiopia',
          phone: '+251 11 111 1111',
          email: 'hello@example.com',
          mapUrl: 'https://maps.example.com/x',
        }}
      />
    );
    expect(html).toContain('Bole Rd, Addis Ababa, Ethiopia');
    expect(html).toContain('mailto:hello@example.com');
    expect(html).toContain('href="tel:+251 11 111 1111"');
  });

  it('PersonCard renders role, department and photo', () => {
    const html = render(
      <PersonCard person={{ name: 'J. Doe', role: 'Engineer', department: 'Design', photo: image }} />
    );
    expect(html).toContain('J. Doe');
    expect(html).toContain('Engineer');
    expect(html).toContain('Design');
    expect(html).toContain('<img');
  });

  it('cards never render an empty image tag when data is missing', () => {
    const html = render(<PersonCard person={{ name: 'J. Doe' }} />);
    expect(html).not.toContain('<img');
    expect(html).toContain('J. Doe');
  });
});