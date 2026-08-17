import { useMemo } from 'react';
import { useConfig } from '../app/useConfig';
import { resolveFooterContact, resolveFooterSocialLinks } from './footerContent';
import { SiteLink } from './SiteLink';

/**
 * Configuration-driven site footer (navigation.config.json → footer).
 * Columns, contact details, social links and legal links render only from
 * configured/enabled content — never invented.
 */
export function Footer() {
  const { configs } = useConfig();
  const footer = configs.navigation.footer;

  const columns = useMemo(
    () =>
      footer.columns
        .map((column) => ({
          ...column,
          items: column.items.filter((item) => item.enabled),
        }))
        .filter((column) => column.items.length > 0),
    [footer.columns]
  );

  const contact = useMemo(() => resolveFooterContact(configs), [configs]);
  const social = useMemo(() => resolveFooterSocialLinks(configs), [configs]);

  if (!footer.enabled) {
    return null;
  }

  const legalItems = footer.legal.enabled ? footer.legal.items.filter((item) => item.enabled) : [];

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.id}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{column.title}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <SiteLink href={item.href} className="text-slate-600 hover:text-slate-900 hover:underline">
                      {item.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {footer.contact.enabled && (contact.phone || contact.email || contact.address || contact.hours) ? (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contact</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {contact.phone ? (
                  <li>
                    <SiteLink href={`tel:${contact.phone}`} className="hover:text-slate-900 hover:underline">
                      {contact.phone}
                    </SiteLink>
                  </li>
                ) : null}
                {contact.email ? (
                  <li>
                    <SiteLink href={`mailto:${contact.email}`} className="hover:text-slate-900 hover:underline">
                      {contact.email}
                    </SiteLink>
                  </li>
                ) : null}
                {contact.address ? <li>{contact.address}</li> : null}
                {contact.hours ? <li className="text-slate-500">{contact.hours}</li> : null}
              </ul>
            </div>
          ) : null}

          {social.length > 0 ? (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Follow</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {social.map((entry) => (
                  <li key={entry.platform}>
                    <SiteLink href={entry.url} className="text-slate-600 hover:text-slate-900 hover:underline" openInNewTab>
                      {entry.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {legalItems.length > 0 ? (
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200 pt-6 text-sm text-slate-500">
            {legalItems.map((item) => (
              <SiteLink key={item.href} href={item.href} className="hover:text-slate-900 hover:underline">
                {item.label}
              </SiteLink>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}