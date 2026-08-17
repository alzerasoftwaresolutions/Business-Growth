import { useEffect } from 'react';
import type { SeoIndexRules } from '../types/seo';

interface SeoHeadProps {
  title: string;
  description?: string;
  image?: string;
  robots?: SeoIndexRules;
  canonicalUrl?: string;
  type?: string;
  locale?: string;
  siteName?: string;
  structuredData?: Record<string, unknown>[];
}

function setMetaAttribute(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(key: string, value: Record<string, unknown>[]): void {
  document.head.querySelectorAll<HTMLScriptElement>(`script[data-seo-jsonld="${key}"]`).forEach((node) => node.remove());
  if (value.length === 0) {
    return;
  }
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-seo-jsonld', key);
  script.textContent = JSON.stringify(value);
  document.head.appendChild(script);
}

/**
 * Client-side SEO head manager. Applies title, description, canonical, robots,
 * Open Graph and JSON-LD to `<head>`. Pure metadata resolution lives in
 * `metadata.ts`; this component only performs the DOM writes.
 */
export function SeoHead({
  title,
  description,
  image,
  robots,
  canonicalUrl,
  type = 'website',
  locale,
  siteName,
  structuredData,
}: SeoHeadProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      setMetaAttribute('name', 'description', description);
    }
    if (robots) {
      const content = [robots.index ? 'index' : 'noindex', robots.follow ? 'follow' : 'nofollow'].join(', ');
      setMetaAttribute('name', 'robots', content);
    }
    if (canonicalUrl) {
      setCanonical(canonicalUrl);
    }
    setMetaAttribute('property', 'og:type', type);
    if (title) {
      setMetaAttribute('property', 'og:title', title);
    }
    if (description) {
      setMetaAttribute('property', 'og:description', description);
    }
    if (image) {
      setMetaAttribute('property', 'og:image', image);
    }
    if (canonicalUrl) {
      setMetaAttribute('property', 'og:url', canonicalUrl);
    }
    if (locale) {
      setMetaAttribute('property', 'og:locale', locale);
    }
    if (siteName) {
      setMetaAttribute('property', 'og:site_name', siteName);
    }
    upsertJsonLd('page', structuredData ?? []);
  }, [title, description, image, robots, canonicalUrl, type, locale, siteName, structuredData]);

  return null;
}