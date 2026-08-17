import { ArrowRight, Diamond } from 'lucide-react';
import AppIcon from '../components/ui/AppIcon';
import PreFooter from '../components/sections/PreFooter';
import { usePageMeta } from '../lib/usePageMeta';
import { pageMeta } from '../data/meta';
import { siteConfig } from '../data/site';
import { industries } from '../data/siteContent';
import { imgUrl } from '../data/images';
import type { ImageKey } from '../data/images';

const serviceRows: {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  types: string[];
  cta: string;
  imageAlt: string;
  image: ImageKey;
}[] = [
  {
    id: '01',
    eyebrow: '01 / Commercial',
    title: 'Commercial Construction.',
    text: 'We deliver commercial buildings designed around the requirements of business — flexible, efficient, and built to perform.',
    types: [
      'Office Buildings',
      'Retail & Commercial Centers',
      'Mixed-Use Developments',
      'Corporate Facilities',
      'Hospitality Projects',
    ],
    cta: 'Discuss a Commercial Project',
    imageAlt: 'Commercial building',
    image: 'glassOffice',
  },
  {
    id: '02',
    eyebrow: '02 / Industrial',
    title: 'Industrial Facilities.',
    text: 'We support the delivery of industrial environments where structural performance, logistics, and durability are critical.',
    types: [
      'Manufacturing Facilities',
      'Warehouses',
      'Processing Plants',
      'Logistics Facilities',
      'Industrial Expansions',
    ],
    cta: 'Discuss an Industrial Project',
    imageAlt: 'Industrial facility',
    image: 'industrial',
  },
  {
    id: '03',
    eyebrow: '03 / Infrastructure',
    title: 'Civil Infrastructure.',
    text: `${siteConfig.companyName} delivers infrastructure projects that require careful coordination, resilience, and long-term reliability.`,
    types: ['Roads', 'Bridges', 'Public Infrastructure', 'Structural Works', 'Site Development'],
    cta: 'Discuss an Infrastructure Project',
    imageAlt: 'Infrastructure project',
    image: 'infrastructure',
  },
];

const capabilities = [
  { n: '01', title: 'Project Management', text: 'Single accountable leadership across the full delivery lifecycle.' },
  { n: '02', title: 'Engineering Coordination', text: 'Integrated structural, MEP, and architectural engineering.' },
  { n: '03', title: 'Procurement', text: 'Strategic sourcing and supply chain discipline.' },
  { n: '04', title: 'Quality Control', text: 'Rigorous inspection and compliance throughout construction.' },
  { n: '05', title: 'Site Management', text: 'Experienced site leads managing daily execution.' },
  { n: '06', title: 'Safety Management', text: 'Uncompromising safety protocols and zero-incident culture.' },
];

const approachSteps = [
  { n: '01', title: 'Consultation', text: 'Strategic alignment for infinite project visions.' },
  { n: '02', title: 'Planning & Design', text: 'Meticulous engineering and architectural excellence.' },
  { n: '03', title: 'Engineering Review', text: 'Ensuring structural integrity and safety standards.' },
  { n: '04', title: 'Construction', text: 'Precise execution managed by seasoned site leads.' },
  { n: '05', title: 'Quality Inspection', text: 'Rigorous quality assurance and compliance checks.' },
  { n: '06', title: 'Project Handover', text: 'Seamless transition and transfer to management.' },
];

const industryIcon: Record<string, string> = {
  commercial: 'commercial',
  industrial: 'industrial',
  healthcare: 'healthcare',
  education: 'education',
  government: 'government',
  hospitality: 'hospitality',
};

export default function Expertise() {
  usePageMeta(pageMeta.expertise);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site grid items-center gap-12 py-20 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-6">Our Expertise</p>
            <h1 className="font-sans text-4xl font-bold uppercase leading-tight tracking-tight text-navy-950 sm:text-5xl">
              Construction Expertise for Complex Projects.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {siteConfig.companyName} brings decades of engineering discipline to projects
              that demand precision, coordination, and reliable delivery.
            </p>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded border border-border-light bg-surface-container">
            <img
              src={imgUrl('steelFramework')}
              alt="Structural steel framework under construction"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Alternating services */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site flex flex-col divide-y divide-border-light">
          {serviceRows.map((row, index) => {
            const reversed = index % 2 === 1;
            const image = (
              <div className="aspect-[4/3] w-full overflow-hidden rounded border border-border-light bg-surface-container">
                <img
                  src={imgUrl(row.image)}
                  alt={row.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            );
            const content = (
              <div>
                <p className="eyebrow mb-4">{row.eyebrow}</p>
                <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
                  {row.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-600">{row.text}</p>
                <p className="mt-6 font-sans text-xs font-bold uppercase tracking-[0.1em] text-navy-950">
                  Project types:
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {row.types.map((type) => (
                    <li key={type} className="flex items-center gap-3 text-sm text-slate-600">
                      <Diamond className="h-3 w-3 shrink-0 fill-gold-600 text-gold-600" aria-hidden="true" />
                      {type}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.1em] text-gold-600 underline underline-offset-4 transition-colors hover:text-navy-950"
                >
                  {row.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            );
            return (
              <div
                key={row.id}
                className="grid items-center gap-12 py-20 md:grid-cols-2 lg:grid-cols-2"
              >
                {reversed ? (
                  <>
                    <div className="order-2 lg:order-1">{content}</div>
                    <div className="order-1 lg:order-2">{image}</div>
                  </>
                ) : (
                  <>
                    <div>{image}</div>
                    <div>{content}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional capabilities */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Additional Capabilities</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Supporting Every Stage of Delivery.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <article key={cap.n} className="card p-8">
                <div className="flex items-start justify-between">
                  <p className="font-mono text-sm font-bold text-gold-600">{cap.n}</p>
                  <Diamond className="h-4 w-4 text-gold-600" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-sans text-lg font-bold text-navy-950">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{cap.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Our Approach</p>
              <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
                A Systematic, Proven Methodology
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                We build every project on a repeatable, disciplined
                framework from first consultation to final handover.
              </p>
              <ol className="mt-8 space-y-6 border-l border-gold-600 pl-6">
                {approachSteps.map((step) => (
                  <li key={step.n} className="relative">
                    <span
                      className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-gold-600"
                      aria-hidden="true"
                    />
                    <p className="font-mono text-sm font-bold text-gold-600">{step.n}</p>
                    <h3 className="mt-1 font-sans text-base font-bold text-navy-950">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="aspect-[3/4] max-h-[75vh] w-full overflow-hidden rounded border border-border-light bg-surface-container">
              <img
                src={imgUrl('reviewTablet')}
                alt="Two professionals reviewing project plans on a tablet"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Uncompromising Project Delivery */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site grid items-center gap-12 py-20 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Delivery</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Uncompromising Project Delivery
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              We measure success not just by the completed structure, but by the discipline
              of the process that built it — safety, schedule, and quality on every phase.
            </p>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded border border-border-light bg-surface-container">
            <img
              src={imgUrl('teamOnSite')}
              alt="Construction team on site"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Industries We Serve</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Tailored to Every Sector
            </h2>
            <p className="mt-4 text-base text-slate-600">
              From education to hospitality, we adapt our delivery to the demands of each
              industry.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <article
                key={industry.id}
                className={`card p-8 shadow-subtle ${index === 0 ? 'opacity-60' : ''}`}
              >
                <AppIcon
                  name={industryIcon[industry.id]}
                  className="h-7 w-7 text-gold-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-sans text-lg font-bold text-navy-950">
                  {industry.label}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Dedicated construction delivery for the {industry.label.toLowerCase()} sector.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer */}
      <PreFooter
        heading="Planning Your Next Project?"
        subtext={`Contact our team to discuss how ${siteConfig.companyName} can bring expertise and precision to your next major venture.`}
        ctaLabel="Request a Consultation"
        secondaryLabel="View Our Projects"
        secondaryTo="/projects"
      />
    </>
  );
}