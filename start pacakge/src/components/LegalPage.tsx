import type { LegalContent } from '../data/legal';
import Button from './ui/Button';

export default function LegalPage({ content }: { content: LegalContent }) {
  return (
    <>
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site py-20">
          <p className="eyebrow mb-4">{content.eyebrow}</p>
          <h1 className="font-sans text-4xl font-bold uppercase leading-tight tracking-tight text-navy-950 sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-slate-600">
            {content.updated}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {content.intro}
          </p>
        </div>
      </section>

      <section className="border-b border-border-light bg-white">
        <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {content.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-sans text-xl font-bold uppercase tracking-tight text-navy-950">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-base leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-4 space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-border-light pt-10">
            <Button to="/contact">Request Consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
