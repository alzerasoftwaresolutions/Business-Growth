import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PreFooter from '../components/sections/PreFooter';
import Button from '../components/ui/Button';
import { usePageMeta } from '../lib/usePageMeta';
import { pageMeta } from '../data/meta';

export default function ThankYou() {
  usePageMeta(pageMeta.thankYou);

  return (
    <>
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site py-24 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15">
            <CheckCircle2 className="h-8 w-8 text-gold-600" aria-hidden="true" />
          </span>
          <p className="eyebrow mb-4 mt-8">Inquiry Received</p>
          <h1 className="mx-auto max-w-3xl font-sans text-4xl font-bold uppercase leading-tight tracking-tight text-navy-950 sm:text-5xl">
            Thank you for reaching out.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Your project inquiry has been received. A member of our team will review the
            details and respond shortly with a clear next step.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/projects">View Our Work</Button>
            <Link
              to="/services"
              className="inline-flex items-center font-sans text-sm font-bold uppercase tracking-[0.05em] text-navy-950 underline underline-offset-4 transition-colors hover:text-gold-600"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <PreFooter
        heading="Need to Add More Detail?"
        subtext="Email us directly with additional project information, or call our team for a faster conversation."
        ctaLabel="Email the Team"
        ctaVariant="primary"
        ctaTo="/contact"
      />
    </>
  );
}
