import { useConfig } from '../app/useConfig';
import { resolvePageTitle } from '../app/routes';
import { PageSeo } from '../seo/PageSeo';
import { PageLayout } from '../layouts/PageLayout';
import { PageHeaderSection } from '../sections/PageHeaderSection';
import { ContactForm } from '../components/leads/ContactForm';
import { WhatsAppCTA } from '../components/leads/WhatsAppCTA';
import { PhoneCTA } from '../components/leads/PhoneCTA';
import { EmptyState } from '../components/feedback/EmptyState';
import { resolveContactChannels } from './contactContent';

/**
 * Contact template (03 §54-§58, Phase 6 §15). Direct channels render only when
 * configured and populated; the form renders only when the contact-form
 * feature is enabled, otherwise an honest "unavailable" state is shown.
 */
export function ContactTemplate() {
  const { configs } = useConfig();
  const contact = configs.contact.contact;
  const contactFormEnabled = configs.features.features.leadGeneration.contactForm.enabled;
  const showForm = contact.contactPage.showContactForm && contactFormEnabled;
  const title = resolvePageTitle(configs, 'contact');
  const intro = contact.contactPage.intro || undefined;
  const { channels, address, businessHours, mapUrl } = resolveContactChannels(configs);

  return (
    <>
      <PageSeo template="contact" />

      <PageLayout>
        <PageHeaderSection title={title} intro={intro} />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <section aria-labelledby="contact-details-heading">
            <h2 id="contact-details-heading" className="text-xl font-semibold text-slate-900">
              Contact details
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {channels.map((channel) => {
                if (channel.type === 'phone') {
                  return (
                    <li key={channel.type}>
                      <PhoneCTA phone={channel.label} href={channel.href} />
                    </li>
                  );
                }
                if (channel.type === 'whatsapp') {
                  return (
                    <li key={channel.type}>
                      <WhatsAppCTA href={channel.href} label={channel.label} />
                    </li>
                  );
                }
                return (
                  <li key={channel.type}>
                    <a href={channel.href} className="text-sm font-medium text-blue-600 hover:underline">
                      {channel.label}
                    </a>
                  </li>
                );
              })}
              {address ? <li className="text-slate-600">{address}</li> : null}
              {businessHours ? <li className="text-slate-600">{businessHours}</li> : null}
            </ul>
            {mapUrl ? (
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex text-sm font-medium text-blue-600 hover:underline"
              >
                Open map ↗
              </a>
            ) : null}
          </section>

          <div>
            {showForm ? (
              <ContactForm />
            ) : (
              <EmptyState title="Contact form unavailable" description="Please use the contact details above to reach us directly." />
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
}