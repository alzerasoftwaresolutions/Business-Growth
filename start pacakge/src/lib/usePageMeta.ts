import { useEffect } from 'react';
import { siteConfig } from '../data/site';
import { breadcrumbLabels } from '../data/meta';

interface RouteMeta {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}

function upsertMeta<T extends HTMLElement>(selector: string, tagName: string, set: (el: T) => void) {
  let el = document.head.querySelector<T>(selector);
  if (!el) {
    el = document.createElement(tagName) as T;
    document.head.appendChild(el);
  }
  set(el);
}

function upsertLink(rel: string, set: (el: HTMLLinkElement) => void) {
  upsertMeta<HTMLLinkElement>(`link[rel="${rel}"]`, 'link', set);
}

function upsertMetaName(name: string, content: string) {
  upsertMeta<HTMLMetaElement>(`meta[name="${name}"]`, 'meta', (el) => {
    el.name = name;
    el.content = content;
  });
}

function upsertMetaProperty(property: string, content: string) {
  upsertMeta<HTMLMetaElement>(`meta[property="${property}"]`, 'meta', (el) => {
    el.setAttribute('property', property);
    el.content = content;
  });
}

function upsertBreadcrumbSchema(path?: string) {
  const label = path ? breadcrumbLabels[path] : undefined;
  const existing = document.getElementById('breadcrumb-schema') as HTMLScriptElement | null;

  if (!path || !label) {
    existing?.remove();
    return;
  }

  const items = [
    { label: 'Home', path: '/' },
    { label, path },
  ];

  const script = existing ?? document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'breadcrumb-schema';
  script.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${siteConfig.siteUrl}${item.path}`,
    })),
  });
  if (!existing) {
    document.head.appendChild(script);
  }
}

export function usePageMeta(meta: RouteMeta) {
  useEffect(() => {
    const { title, description, path, noindex } = meta;
    const url = path ? `${siteConfig.siteUrl}${path}` : siteConfig.siteUrl;

    document.title = title;

    upsertBreadcrumbSchema(path);

    upsertMetaName('description', description);
    upsertMetaName('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    if (path) {
      upsertLink('canonical', (el) => {
        el.rel = 'canonical';
        el.href = url;
      });
    }

    const ogData: Record<string, string> = {
      'og:site_name': siteConfig.companyName,
      'og:title': title,
      'og:description': description,
      'og:image': `${siteConfig.siteUrl}${siteConfig.ogImage}`,
      'og:url': url,
      'og:type': 'website',
    };
    Object.entries(ogData).forEach(([property, content]) => {
      upsertMetaProperty(property, content);
    });

    upsertMetaName('twitter:card', 'summary');
    upsertMetaName('twitter:title', title);
    upsertMetaName('twitter:description', description);
    upsertMetaName('twitter:image', `${siteConfig.siteUrl}${siteConfig.ogImage}`);
  }, [meta.title, meta.description, meta.path, meta.noindex]);
}