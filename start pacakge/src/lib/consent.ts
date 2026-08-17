const STORAGE_KEY = 'site-consent';

export type ConsentPreference = 'accepted' | 'declined';

export function getConsent(): ConsentPreference | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'accepted' || value === 'declined' ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(preference: ConsentPreference): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, preference);
  } catch {
    // Storage unavailable — treat as no consent (analytics stays off).
  }
}