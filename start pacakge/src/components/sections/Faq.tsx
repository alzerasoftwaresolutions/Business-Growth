import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faqs';
import { siteConfig } from '../../data/site';

function FaqSchema() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById('faq-schema')?.remove();
    };
  }, []);

  return null;
}

export default function Faq({ heading = 'Frequently Asked Questions' }: { heading?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <FaqSchema />
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="eyebrow mb-4">Common Questions</p>
              <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
                {heading}
              </h2>
            </div>

            <div className="mt-12 divide-y divide-border-light border-y border-border-light">
              {faqs.map((faq, index) => {
                const isOpen = open === index;
                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span
                        className={`font-sans text-base font-bold transition-colors sm:text-lg ${
                          isOpen ? 'text-navy-950' : 'text-navy-950 hover:text-gold-600'
                        }`}
                      >
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen ? (
                      <p className="pb-5 pr-6 text-base leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-center text-sm text-slate-600">
              Still have questions?{' '}
              <a
                href={siteConfig.emailHref}
                className="font-sans font-bold uppercase tracking-[0.05em] text-gold-600 underline underline-offset-4 transition-colors hover:text-navy-950"
              >
                Contact our team
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
