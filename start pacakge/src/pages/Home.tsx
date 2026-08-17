import { ChevronDown, ArrowRight, Quote } from 'lucide-react';
import Button from '../components/ui/Button';
import AppIcon from '../components/ui/AppIcon';
import PreFooter from '../components/sections/PreFooter';
import { usePageMeta } from '../lib/usePageMeta';
import { pageMeta } from '../data/meta';
import { siteConfig } from '../data/site';
import {
  processSteps,
  whyPartner,
  coreServices,
  industries,
  featuredProject,
  testimonials,
  companies,
} from '../data/siteContent';
import { projects } from '../data/projects';
import { imgUrl, projectImgUrl } from '../data/images';

const metrics = [
  { value: '25+', label: 'YEARS OF EXPERIENCE' },
  { value: '450+', label: 'PROJECTS COMPLETED' },
  { value: '$2B+', label: 'PROJECT VALUE DELIVERED' },
  { value: '0', label: 'SAFETY INCIDENTS' },
];

const whyIcons: Record<string, string> = {
  experience: 'lightbulb',
  engineering: 'ruler',
  safety: 'shield',
  management: 'chart',
  delivery: 'target',
  sustainable: 'leaf',
};

const industryIcons: Record<string, string> = {
  commercial: 'commercial',
  industrial: 'industrial',
  healthcare: 'healthcare',
  education: 'education',
  government: 'government',
  hospitality: 'hospitality',
};

export default function Home() {
  usePageMeta(pageMeta.home);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site flex flex-col items-center py-20 text-center lg:py-28">
          <p className="eyebrow mb-6">Building Excellence</p>
          <h1 className="max-w-4xl font-sans text-4xl font-bold uppercase leading-tight tracking-tight text-navy-950 sm:text-5xl lg:text-6xl">
            Engineered for generations.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            From concept to completion, {siteConfig.companyName} delivers precision-built
            commercial, industrial, and infrastructure projects — engineered with
            discipline and built to last.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to="/projects">View Projects</Button>
            <Button to="/expertise" variant="secondary">
              Our Process
            </Button>
          </div>
          <div className="mt-16 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded border border-border-light bg-surface-container">
            <img
              src={imgUrl('hero')}
              alt="Construction site with cranes"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <p className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.15em] text-slate-600">
            Scroll{' '}
            <ChevronDown
              className="chevron-bob h-4 w-4 text-gold-600"
              aria-hidden="true"
            />
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-navy-950 text-white">
        <div className="container-site py-16">
          <div className="text-center">
            <h2 className="font-sans text-2xl font-bold uppercase tracking-wide sm:text-3xl">
              Our Foundation of Reliability
            </h2>
            <p className="mt-3 text-base text-white/60">
              Metrics built on decades of proven execution and safety standards.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="font-mono text-4xl font-bold text-gold-500 sm:text-5xl">
                  {metric.value}
                </p>
                <p className="mt-3 font-sans text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy split */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site grid items-center gap-12 py-20 md:grid-cols-2 lg:grid-cols-2">
          <div className="aspect-[3/4] max-h-[75vh] w-full overflow-hidden rounded border border-border-light bg-surface-container">
            <img
              src={imgUrl('legacy')}
              alt="Construction worker on site"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">Our Legacy</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              A Legacy of Structural Excellence
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Founded in {siteConfig.foundingYear}, {siteConfig.companyName} has combined
              disciplined engineering with hands-on delivery to build structures that endure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Every project is measured, precise, and built on long-term trust.
            </p>
            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.1em] text-gold-600 underline underline-offset-4 transition-colors hover:text-navy-950"
            >
              Discover Our Story <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="border-b border-border-light bg-surface">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Why Partner With Us
            </h2>
            <p className="mt-4 text-base text-slate-600">Built on Precision, Driven by Trust.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {whyPartner.map((item) => (
              <article key={item.id} className="card p-8 shadow-subtle transition-shadow hover:shadow-card">
                <AppIcon name={whyIcons[item.id]} className="h-8 w-8 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 font-sans text-lg font-bold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-20">
          <div className="text-center">
            <p className="eyebrow mb-4">Our Process</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              How We Deliver
            </h2>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((step) => (
              <li key={step.id} className="relative pl-6">
                <span
                  className="absolute left-0 top-1 h-3 w-3 rounded-full border-2 border-gold-600 bg-white"
                  aria-hidden="true"
                />
                <p className="font-mono text-sm font-bold text-gold-600">{step.id}</p>
                <h3 className="mt-2 font-sans text-base font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Core services */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site py-20">
          <div className="text-center">
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Core Services
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {coreServices.map((service) => (
              <article key={service.id} className="card-accent p-8">
                <p className="font-sans text-lg font-bold text-navy-950">{service.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-16">
          <div className="text-center">
            <p className="eyebrow mb-4">Industries We Serve</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="flex flex-col items-center gap-3 rounded border border-border-light bg-white p-6 text-center"
              >
                <AppIcon name={industryIcons[industry.id]} className="h-7 w-7 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
                <span className="font-sans text-xs font-bold uppercase tracking-wide text-navy-950">
                  {industry.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section className="border-b border-border-light bg-navy-950 text-white">
        <div className="container-site grid items-center gap-12 py-20 md:grid-cols-2 lg:grid-cols-2">
          <div className="aspect-[3/4] max-h-[75vh] w-full overflow-hidden rounded border border-white/10 bg-navy-900">
            <img
              src={imgUrl('featuredTower')}
              alt="Aura Tower — featured commercial development"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow mb-4 text-gold-500">{featuredProject.eyebrow}</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              {featuredProject.title}
            </h2>
            <p className="mt-4 font-mono text-sm font-bold uppercase tracking-[0.15em] text-gold-500">
              {featuredProject.subtitle}
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <dt className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-white/50">
                  Client
                </dt>
                <dd className="mt-1 text-base font-semibold">{featuredProject.client}</dd>
              </div>
              <div>
                <dt className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-white/50">
                  Location
                </dt>
                <dd className="mt-1 text-base font-semibold">{featuredProject.location}</dd>
              </div>
              <div>
                <dt className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-white/50">
                  Completion
                </dt>
                <dd className="mt-1 text-base font-semibold">{featuredProject.completion}</dd>
              </div>
            </dl>
            <p className="mt-8 text-base leading-relaxed text-white/70">
              {featuredProject.description}
            </p>
            <div className="mt-8">
              <Button to="/projects" variant="gold">
                View Project Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project gallery */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-20">
          <div className="text-center">
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Project Gallery
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.id} className="card overflow-hidden">
                <div className="aspect-[16/10] w-full bg-surface-container">
                  <img
                    src={projectImgUrl(project.category)}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded px-2 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-navy-950">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-sans text-base font-bold text-navy-950">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site py-20">
          <div className="text-center">
            <p className="eyebrow mb-4">Client Testimonials</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.id} className="card p-8">
                <Quote className="h-8 w-8 text-gold-600" aria-hidden="true" />
                <p className="mt-4 text-base leading-relaxed text-slate-600">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-950 font-mono text-sm font-bold text-gold-500">
                    {t.name.replace(/\s/g, '').slice(0, 1)}
                  </span>
                  <div>
                    <p className="font-sans text-sm font-bold text-navy-950">{t.name}</p>
                    <p className="text-xs text-slate-600">{t.company}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-16">
          <div className="text-center">
            <p className="eyebrow mb-6">Trusted By Industry Leaders</p>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-10 opacity-60">
            {companies.map((company) => (
              <li key={company} className="font-sans text-lg font-bold uppercase tracking-wide text-slate-600">
                {company}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pre-footer */}
      <PreFooter
        heading="Let's Build Something That Lasts."
        subtext={`Partner with ${siteConfig.companyName} to bring your most ambitious projects to towering success.`}
        ctaLabel="Request Consultation"
      />
    </>
  );
}