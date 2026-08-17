const WHATSAPP_PREFIXES = ['https://wa.me/', 'https://api.whatsapp.com/', 'https://chat.whatsapp.com/'];

interface WhatsAppCTAProps {
  /** Full deep link, e.g. `https://wa.me/15551234567`. Never fabricated. */
  href: string;
  label?: string;
  subtext?: string;
}

/**
 * WhatsApp deep link (06 §19). Only renders when a valid `wa.me`/WhatsApp URL
 * is supplied — a missing/invalid link renders nothing rather than a broken
 * button. External links open in a new tab.
 */
export function WhatsAppCTA({ href, label = 'Chat on WhatsApp', subtext }: WhatsAppCTAProps) {
  const valid = WHATSAPP_PREFIXES.some((prefix) => href.startsWith(prefix));
  if (!valid) {
    return null;
  }
  return (
    <div className="flex flex-col gap-1">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
      >
        {label}
      </a>
      {subtext ? <p className="text-xs text-slate-500">{subtext}</p> : null}
    </div>
  );
}