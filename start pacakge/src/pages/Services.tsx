import { ArrowRight, Diamond } from 'lucide-react';
import PreFooter from '../components/sections/PreFooter';
import { usePageMeta } from '../lib/usePageMeta';
import { pageMeta } from '../data/meta';
import { siteConfig } from '../data/site';
import { coreServices, industries } from '../data/siteContent';
import AppIcon from '../components/ui/AppIcon';
import { imgUrl } from '../data/images';
import Faq from '../components/sections/Faq';

const capabilities = [
  { title: 'Pre-Construction', text: 'Feasibility, budgeting, and planning before anything is built.' },
  { title: 'Design-Build', text: 'Single-contractor delivery from design through construction.' },
  { title: 'Construction Management', text: 'Professional oversight of cost, schedule, and quality.' },
  { title: 'Sustainable Building', text: 'Energy-efficient design and certified green construction.' },
  { title: 'BIM Services', text: 'Digital modeling for coordination and clash-free delivery.' },
  { title: 'Facility Maintenance', text: 'Long-term asset management and preventative care.' },
];

export default function Services() {
  usePageMeta(pageMeta.services);

  const industryIcon: Record<string, string> = {
    commercial: 'commercial',
    industrial: 'industrial',
    healthcare: 'healthcare',
    education: 'education',
    government: 'government',
    hospitality: 'hospitality',
  };

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site grid items-center gap-12 py-20 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-6">Core Services</p>
            <h1 className="font-sans text-4xl font-bold uppercase leading-tight tracking-tight text-navy-950 sm:text-5xl">
              Construction Expertise for Complex Projects
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {siteConfig.companyName} delivers a full range of construction services — engineered
              with precision and delivered with accountability.
            </p>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded border border-border-light bg-surface-container">
            <img
              src={imgUrl('siteSunset')}
              alt="Construction site at sunset"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Integrated Services
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {coreServices.map((service) => (
              <article key={service.id} className="card-accent p-8">
                <p className="font-sans text-lg font-bold text-navy-950">{service.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.1em] text-gold-600 underline underline-offset-4 transition-colors hover:text-navy-950"
                >
                  Discuss a Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional capabilities (dark) */}
      <section className="border-b border-border-light bg-navy-950 text-white">
        <div className="container-site py-20">
          <h2 className="font-sans text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Additional Capabilities
          </h2>
          <p className="mt-4 max-w-2xl text-base text-white/60">
            Beyond our core services, we offer specialized capabilities that support every
            stage of delivery.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <article key={cap.title} className="rounded border border-white/10 bg-navy-900 p-8">
                <div className="flex items-center gap-3">
                  <Diamond className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                  <h3 className="font-sans text-lg font-bold">{cap.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{cap.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Our Approach</p>
              <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
                A Systematic, Proven Methodology
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                We measure success not just by the completed
                structure, but by the discipline of the process that built it.
              </p>
              <ol className="mt-8 space-y-6 border-l border-gold-600 pl-6">
                {['Consultation', 'Planning', 'Delivery', 'Handover'].map((step, index) => (
                  <li key={step}>
                    <p className="font-mono text-sm font-bold text-gold-600">
                      0{index + 1} / {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded border border-border-light bg-surface-container">
              <img
                src={imgUrl('reviewTablet')}
                alt="Team reviewing project plans"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Industries We Serve</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Tailored to Every Sector
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry.id} className="card p-8 shadow-subtle">
                <AppIcon name={industryIcon[industry.id]} className="h-7 w-7 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 font-sans text-lg font-bold text-navy-950">{industry.label}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Dedicated construction delivery for the {industry.label.toLowerCase()} sector.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq />

      {/* Pre-footer */}
      <PreFooter
        heading="Planning Your Next Project?"
        subtext={`Contact our team to discuss how ${siteConfig.companyName} can bring expertise and precision to your next major venture.`}
        ctaLabel="Discuss a Project"
      />
    </>
  );
}