import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getConsent, setConsent, type ConsentPreference } from '../../lib/consent';
import { trackEvent } from '../../lib/analytics';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  const choose = (preference: ConsentPreference) => {
    setConsent(preference);
    setVisible(false);
    trackEvent(`consent_${preference}`);
  };

  if (!visible) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border-light bg-navy-950 text-white shadow-subtle"
    >
      <div className="container-site flex flex-col items-center gap-4 py-4 sm:flex-row sm:justify-between">
        <p className="text-sm leading-relaxed text-white/80">
          We use cookies to improve your experience and measure site traffic. See our{' '}
          <Link to="/privacy" className="font-bold underline underline-offset-2 hover:text-gold-500">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => choose('declined')}
            className="btn-outline-light px-4 py-2 text-[11px]"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="btn-gold px-5 py-2 text-[11px]"
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
}