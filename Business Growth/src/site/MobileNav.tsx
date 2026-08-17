import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import type { NavigationItem } from '../types/navigation';
import { SiteLink } from './SiteLink';
import { isCurrentPath } from './navigation';
import { Button } from '../components/common/Button';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  items: NavigationItem[];
  /** Configuration-driven CTA (navigation.mobile.cta). */
  cta?: { label: string; href: string } | null;
  /** Close when the user navigates (navigation.mobile.menu.closeOnNavigation). */
  closeOnNavigation?: boolean;
}

/**
 * Accessible mobile navigation drawer. Renders nothing until opened, closes on
 * Escape or navigation, and labels itself for screen readers. The visual
 * treatment stays neutral — client-specific styling arrives with the design
 * manual.
 */
export function MobileNav({ open, onClose, items, cta, closeOnNavigation = true }: MobileNavProps) {
  const location = useLocation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (closeOnNavigation) {
      onClose();
    }
  }, [location.pathname, closeOnNavigation, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="lg:hidden">
      <div aria-hidden="true" className="fixed inset-0 z-40 bg-slate-900/40" onClick={onClose} />
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85%] flex-col gap-6 bg-white p-6 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <span className="sr-only">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <SiteLink
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isCurrentPath(location.pathname, item.href) ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  ariaCurrent={isCurrentPath(location.pathname, item.href) ? 'page' : undefined}
                >
                  {item.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </nav>

        {cta ? (
          <Button href={cta.href} className="mt-auto w-full">
            {cta.label}
          </Button>
        ) : null}
      </div>
    </div>
  );
}