import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import type { ReactNode } from 'react';

import { Image, Gallery } from '../media';
import { Hero, FeaturedContent, CTABanner } from '../marketing';

const render = (node: ReactNode) => renderToStaticMarkup(node);

const image = { src: '/media/a.jpg', alt: 'A photo', width: 800, height: 600 };

describe('media components', () => {
  it('Image renders with alt, dimensions and lazy loading', () => {
    const html = render(<Image image={image} />);
    expect(html).toContain('<img src="/media/a.jpg" alt="A photo"');
    expect(html).toContain('loading="lazy"');
    expect(html).toContain('width="800"');
  });

  it('Image reserves aspect ratio when dimensions are unknown', () => {
    const html = render(<Image image={{ src: '/x.jpg', alt: 'x' }} ratio="4/3" />);
    expect(html).toContain('aspect-ratio:4/3');
  });

  it('Gallery renders a figure with selectable thumbnails', () => {
    const html = render(
      <Gallery images={[{ src: '/a.jpg', alt: 'A' }, { src: '/b.jpg', alt: 'B' }]} />
    );
    expect(html).toContain('<figure');
    expect(html).toContain('role="group"');
    expect(html).toContain('aria-current="true"');
    expect(html).toContain('View image 2 of 2');
  });

  it('Gallery renders nothing when empty', () => {
    expect(render(<Gallery images={[]} />)).toBe('');
  });
});

describe('marketing components', () => {
  it('Hero renders headline, subheadline and CTA links', () => {
    const html = render(
      <Hero
        eyebrow="Company"
        headline="Big headline"
        subheadline="Supporting copy."
        primaryCta={{ label: 'Get started', href: '/contact' }}
        secondaryCta={{ label: 'Learn more', href: '/about' }}
      />
    );
    expect(html).toContain('>Big headline</h1>');
    expect(html).toContain('Supporting copy.');
    expect(html).toContain('href="/contact"');
    expect(html).toContain('href="/about"');
  });

  it('Hero dark variant applies high-contrast classes', () => {
    const html = render(<Hero variant="dark" headline="X" />);
    expect(html).toContain('bg-slate-900');
  });

  it('FeaturedContent renders image and content sides', () => {
    const html = render(
      <FeaturedContent eyebrow="Why us" title="Our story" description="Words." image={image} />
    );
    expect(html).toContain('Our story');
    expect(html).toContain('Words.');
    expect(html).toContain('<img');
  });

  it('CTABanner renders primary button', () => {
    const html = render(<CTABanner heading="Work with us" primaryCta={{ label: 'Contact', href: '/contact' }} />);
    expect(html).toContain('Work with us');
    expect(html).toContain('href="/contact"');
  });
});