import type { NavigationItem } from '../types/navigation';

/**
 * Pure navigation helpers shared by the site chrome. Kept free of React so the
 * feature-aware filtering rules are unit-testable in the node environment.
 */

/** External hrefs (http(s), mailto, tel) are never rewritten or dropped. */
export function isExternalHref(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');
}

export interface NavigationFilterOptions {
  /** Drop links whose destination page is disabled (navigationRules.hideDisabledPages). */
  hideDisabledPages: boolean;
  /** Drop disabled entries (navigationRules.hideDisabledFeatures). */
  hideDisabledFeatures: boolean;
  /** Paths that are actually routable (from the built route table). */
  enabledPaths: Set<string>;
}

/**
 * Applies the navigation rules to a list of configured items:
 * - entries explicitly disabled in config are removed;
 * - internal links to routes that are not enabled are removed (prevents broken
 *   links and links to disabled features);
 * - external links always survive.
 */
export function filterNavigationItems(
  items: NavigationItem[],
  options: NavigationFilterOptions
): NavigationItem[] {
  return items
    .filter((item) => {
      if (options.hideDisabledFeatures && item.enabled === false) {
        return false;
      }
      if (!options.hideDisabledPages) {
        return true;
      }
      return isExternalHref(item.href) || options.enabledPaths.has(item.href);
    })
    .map((item) =>
      item.children && item.children.length > 0
        ? { ...item, children: filterNavigationItems(item.children, options) }
        : item
    );
}

export interface NavigationRulesSource {
  hideDisabledPages: boolean;
  hideDisabledFeatures: boolean;
}

/**
 * Builds the enabled-paths set once from the route table so chrome components
 * can filter configuration against it.
 */
export function buildEnabledPaths(paths: string[]): Set<string> {
  return new Set(paths);
}

/** Resolves an `externalLinksOpenInNewTab` decision for a link. */
export function shouldOpenInNewTab(href: string, externalLinksOpenInNewTab: boolean): boolean {
  return isExternalHref(href) && externalLinksOpenInNewTab;
}

/**
 * Whether a link should be marked as the current page (navigation.accessibility
 * currentPageIndicator). Home matches exactly; others match the path itself or
 * any of its sub-paths.
 */
export function isCurrentPath(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === '/';
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}