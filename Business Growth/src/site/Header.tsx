import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useConfig } from '../app/useConfig';
import { buildRouteEntries } from '../app/routes';
import { filterNavigationItems, isCurrentPath, shouldOpenInNewTab } from './navigation';
import { SiteLink } from './SiteLink';
import { MobileNav } from './MobileNav';
import { Button } from '../components/common/Button';

/**
 * Configuration-driven site header (navigation.config.json → header).
 *
 * - Primary navigation comes from config and is filtered against the enabled
 *   route table (respects disabled features/pages).
 * - The brand link renders only the configured business brand name — nothing
 *   is invented when a client has not supplied one.
 * - The CTA button renders only when configured.
 * - The mobile toggle drives the accessible MobileNav drawer.
 */
export function Header() {
  const { configs } = useConfig();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const header = configs.navigation.navigation.header;
  const rules = configs.navigation.navigationRules;

  const primaryItems = useMemo(() => {
    const paths = buildRouteEntries(configs).map((entry) => entry.path);
    return filterNavigationItems(header.primary, {
      hideDisabledPages: rules.hideDisabledPages,
      hideDisabledFeatures: rules.hideDisabledFeatures,
      enabledPaths: new Set(paths),
    });
  }, [configs, header.primary, rules.hideDisabledPages, rules.hideDisabledFeatures]);

  const mobile = configs.navigation.navigation.mobile;
  const mobileItems = useMemo(() => {
    const paths = buildRouteEntries(configs).map((entry) => entry.path);
    return filterNavigationItems(mobile.primary, {
      hideDisabledPages: rules.hideDisabledPages,
      hideDisabledFeatures: rules.hideDisabledFeatures,
      enabledPaths: new Set(paths),
    });
  }, [configs, mobile.primary, rules.hideDisabledPages, rules.hideDisabledFeatures]);

  if (!header.enabled) {
    return null;
  }

  const brandName = configs.business.branding.brandName;
  const showLogo = header.logo.enabled && brandName.trim().length > 0;
  const showCta = header.cta.enabled && header.cta.label && header.cta.href;
  const openInNewTab = rules.externalLinksOpenInNewTab;

  return (
    <header className={`border-b border-slate-200 bg-white ${header.behavior.sticky ? 'sticky top-0 z-40' : ''}`}>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6">
        {showLogo ? (
          <SiteLink href={header.logo.target || '/'} className="text-lg font-semibold text-slate-900" ariaCurrent={isCurrentPath(location.pathname, header.logo.target || '/') ? 'page' : undefined}>
            {brandName}
          </SiteLink>
        ) : (
          <span />
        )}

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {primaryItems.map((item) => (
              <li key={item.href}>
                <SiteLink
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-slate-900 ${
                    isCurrentPath(location.pathname, item.href) ? 'text-slate-900' : 'text-slate-600'
                  }`}
                  ariaCurrent={isCurrentPath(location.pathname, item.href) ? 'page' : undefined}
                  openInNewTab={shouldOpenInNewTab(item.href, openInNewTab)}
                >
                  {item.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {showCta ? (
            <Button href={header.cta.href} size="sm" className="hidden sm:inline-flex">
              {header.cta.label}
            </Button>
          ) : null}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobile.enabled ? (
        <MobileNav
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          items={mobileItems}
          cta={mobile.cta.enabled && mobile.cta.label && mobile.cta.href ? { label: mobile.cta.label, href: mobile.cta.href } : undefined}
          closeOnNavigation={mobile.menu.closeOnNavigation}
        />
      ) : null}
    </header>
  );
}