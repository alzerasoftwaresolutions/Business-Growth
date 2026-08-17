/**
 * Client-side environment access.
 *
 * Only `VITE_*` variables are exposed to the browser bundle. These values are
 * optional per `.env.example`; the app must not assume they are set (they are
 * typically filled from the authoritative configuration in production).
 */
export interface ClientEnv {
  /** Canonical production domain, e.g. `https://www.example.com`. */
  siteUrl: string;
  /** Public measurement ID used when analytics is enabled. Empty to disable. */
  gaMeasurementId: string;
  /**
   * Lead-delivery endpoint. The lead-generation integration boundary only uses
   * this when a backend is enabled (`project.development.backend.enabled`).
   * Empty when no backend is provisioned.
   */
  formEndpoint: string;
}

export function getClientEnv(): ClientEnv {
  return {
    siteUrl: import.meta.env.VITE_SITE_URL ?? '',
    gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID ?? '',
    formEndpoint: import.meta.env.VITE_FORM_ENDPOINT ?? '',
  };
}
