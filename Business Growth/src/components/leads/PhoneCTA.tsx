interface PhoneCTAProps {
  /** Display phone number (from config — never invented). */
  phone: string;
  /** Optional pre-formatted `tel:` href. Defaults to `tel:${phone}`. */
  href?: string;
  label?: string;
}

/**
 * Click-to-call link (06 §19). Renders nothing when no phone is provided so a
 * missing config value never produces a broken link.
 */
export function PhoneCTA({ phone, href, label = phone }: PhoneCTAProps) {
  if (!phone.trim()) {
    return null;
  }
  return (
    <a
      href={href ?? `tel:${phone}`}
      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
    >
      {label}
    </a>
  );
}