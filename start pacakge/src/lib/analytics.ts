declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

import { getConsent } from './consent';

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const ENABLED = Boolean(MEASUREMENT_ID);

export function isAnalyticsEnabled(): boolean {
  return ENABLED;
}

let loaded = false;

function loadGtag() {
  // Never load analytics without explicit user consent.
  if (!ENABLED || loaded || typeof window === 'undefined') return;
  if (getConsent() !== 'accepted') return;
  loaded = true;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID);

  const script = document.createElement('script');
  script.async = true;
  // eslint-disable-next-line max-len
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID as string)}`;
  document.head.appendChild(script);
}

export function trackPageView(path: string) {
  loadGtag();
  try {
    if (ENABLED && window.gtag) {
      window.gtag('event', 'page_view', { page_path: path });
    }
  } catch {
    // Analytics must never affect site functionality.
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  loadGtag();
  try {
    if (ENABLED && window.gtag) {
      window.gtag('event', eventName, params);
    }
  } catch {
    // Analytics must never affect site functionality.
  }
}

export default isAnalyticsEnabled;