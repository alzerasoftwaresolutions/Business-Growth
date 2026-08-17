import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import AppIcon from '../components/ui/AppIcon';
import PreFooter from '../components/sections/PreFooter';
import { usePageMeta } from '../lib/usePageMeta';
import { projects, projectCategories, specializedProjectTypes } from '../data/projects';
import { featuredProject } from '../data/siteContent';
import { pageMeta } from '../data/meta';
import { imgUrl, projectImgUrl } from '../data/images';

export default function Projects() {
  usePageMeta(pageMeta.projects);

  const [filter, setFilter] = useState('ALL');
  const visible =
    filter === 'ALL' ? projects : projects.filter((p) => p.category === filter);

  const metrics = [
    { value: '25+', label: 'YEARS ACTIVE' },
    { value: '450+', label: 'PROJECTS DELIVERED' },
    { value: '$2B+', label: 'TOTAL VALUE' },
    { value: '12+', label: 'ACTIVE SITES' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site grid items-center gap-12 py-20 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-6">Our Projects</p>
            <h1 className="font-sans text-4xl font-bold uppercase leading-tight tracking-tight text-navy-950 sm:text-5xl">
              Built to Perform. Built to Last.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Every project we deliver is held to uncompromising standards of engineering,
              safety, and durability.
            </p>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded border border-border-light bg-surface-container">
            <img
              src={imgUrl('glassOffice')}
              alt="Modern glass office building"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Featured spotlight */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site grid items-center gap-12 py-20 md:grid-cols-2 lg:grid-cols-2">
          <div className="aspect-[3/4] max-h-[75vh] w-full overflow-hidden rounded border border-border-light bg-surface-container">
            <img
              src={imgUrl('featuredTower')}
              alt="Aura Tower — featured commercial development"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">{featuredProject.eyebrow}</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Aura Tower
            </h2>
            <p className="mt-2 font-sans text-base font-medium text-slate-600">
              Commercial Development
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              {featuredProject.description}
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6">
              {[
                { k: 'Location', v: featuredProject.location },
                { k: 'Type', v: 'Mixed-Use' },
                { k: 'Status', v: 'Completed' },
                { k: 'Year', v: '2024' },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-slate-600">
                    {item.k}
                  </dt>
                  <dd className="mt-1 font-mono text-sm font-bold text-navy-950">{item.v}</dd>
                </div>
              ))}
            </dl>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.1em] text-gold-600 underline underline-offset-4 transition-colors hover:text-navy-950"
            >
              View Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl">
            <p className="eyebrow mb-4">Our Portfolio</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              A Record of Delivered Work.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              A selection of projects demonstrating our engineering standards across sectors.
            </p>
          </div>
          <div className="container-site py-8">
            <div className="flex flex-wrap gap-x-8 gap-y-3 overflow-x-auto" role="group" aria-label="Filter projects by category">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  className={`tab-underline pb-2 font-sans text-xs font-bold uppercase tracking-[0.1em] transition-colors ${
                    filter === category
                      ? 'is-active text-navy-950'
                      : 'text-slate-600 hover:text-navy-950'
                  }`}
                  aria-pressed={filter === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {visible.length > 0 ? (
            <div key={filter} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((project, index) => (
                <article
                  key={project.id}
                  className="card card-pop overflow-hidden"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-[3/2] w-full overflow-hidden bg-surface-container">
                    <img
                      src={projectImgUrl(project.category)}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-block rounded-sm bg-surface-dim px-2 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-slate-600">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs font-bold text-gold-600">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-sans text-lg font-bold text-navy-950">{project.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{project.location}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-mono text-xs text-slate-600">{project.year}</span>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.1em] text-gold-600 hover:text-navy-950"
                      >
                        View Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded border border-border-light bg-surface-dim py-16 text-center">
              <p className="font-sans text-lg font-bold text-navy-950">
                No projects in this category yet.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Please select another category or contact us to discuss your project.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Specialized project types */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl">
            <p className="eyebrow mb-4">Our Expertise</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Specialized Project Types.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {specializedProjectTypes.map((type) => (
              <article key={type.id} className="card p-8 shadow-subtle">
                <div className="flex items-center justify-between">
                  <AppIcon name={type.icon} className="h-8 w-8 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-mono text-3xl font-bold text-navy-950/10">
                    {String.fromCharCode(65 + specializedProjectTypes.indexOf(type))}
                  </span>
                </div>
                <h3 className="mt-4 font-sans text-lg font-bold text-navy-950">{type.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{type.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics banner */}
      <section className="border-b border-border-light bg-navy-950 text-white">
        <div className="container-site py-16 text-center">
          <h2 className="font-sans text-2xl font-bold uppercase tracking-wide sm:text-3xl">
            Experience Measured in Projects.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label}>
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

      {/* Pre-footer */}
      <PreFooter
        variant="light"
        heading="Have a Project in Mind?"
        subtext="Talk to our team about bringing precision and engineering discipline to your next build."
        ctaLabel="Start a Project"
        ctaVariant="primary"
        ctaTo="/contact"
        secondaryLabel="View Services"
        secondaryTo="/services"
      />
    </>
  );
}