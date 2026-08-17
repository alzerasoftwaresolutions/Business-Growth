import PreFooter from '../components/sections/PreFooter';
import AppIcon from '../components/ui/AppIcon';
import { usePageMeta } from '../lib/usePageMeta';
import { pageMeta } from '../data/meta';
import { siteConfig } from '../data/site';
import { certifications } from '../data/siteContent';
import { milestones, values, leadership, partnerRows } from '../data/about';
import { imgUrl } from '../data/images';
const partnerIcons: Record<string, string> = {
  experience: 'lightbulb',
  engineering: 'ruler',
  safety: 'shield',
  delivery: 'target',
};

export default function About() {
  usePageMeta(pageMeta.about);

  return (
    <>
      {/* Hero split */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site grid items-center gap-12 py-20 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-6">About {siteConfig.companyName}</p>
            <h1 className="font-sans text-4xl font-bold uppercase leading-tight tracking-tight text-navy-950 sm:text-5xl">
              Built on Experience. Driven by Precision.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Since {siteConfig.foundingYear}, {siteConfig.companyName} has combined architectural
              excellence with a deep commitment to longevity — delivering structures that
              stand the test of time.
            </p>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded border border-border-light bg-surface-container">
            <img
              src={imgUrl('engineersSite')}
              alt={`${siteConfig.companyName} engineers on a construction site`}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Company narrative */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site mx-auto max-w-3xl py-20 text-center">
          <p className="eyebrow mb-4">Our Company</p>
          <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
            Setting the Standard in Construction
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            From disciplined engineering to a relentless focus on safety on every site, we
            believe construction is a promise — to our clients, our people, and the
            communities we build for.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Our Story</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              A Legacy of Growth
            </h2>
          </div>
          <ol className="mt-16 grid gap-10 sm:grid-cols-3 lg:grid-cols-5">
            {milestones.map((item, index) => (
              <li key={item.year} className="relative text-center">
                <span className="mx-auto block h-4 w-4 rounded-full border-2 border-gold-600 bg-white" aria-hidden="true" />
                {index < milestones.length - 1 ? (
                  <span
                    className="absolute top-2 left-1/2 hidden h-0.5 w-full bg-border-light sm:block"
                    aria-hidden="true"
                  />
                ) : null}
                <p className="mt-4 font-mono text-lg font-bold text-navy-950">{item.year}</p>
                <p className="mt-1 font-sans text-sm font-bold text-navy-950">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site grid gap-6 pt-24 pb-20 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col justify-between rounded border border-border-light bg-surface-dim p-10">
            <p className="eyebrow mb-6">Mission</p>
            <p className="font-sans text-xl font-bold leading-snug text-navy-950 sm:text-2xl">
              To construct high-performance environments that elevate functionality, ensure
              lasting durability, and respect their surrounding contexts.
            </p>
          </div>
          <div className="flex flex-col justify-between rounded bg-navy-950 p-10 text-white">
            <p className="eyebrow mb-6 text-gold-500">Vision</p>
            <p className="font-sans text-xl font-bold leading-snug sm:text-2xl">
              To be the industry benchmark for engineering precision and reliable project
              delivery across large-scale commercial developments.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="border-b border-border-light bg-surface">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Core Values</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Principles That Guide Us
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.n} className="border-t-2 border-gold-500 bg-white p-8">
                <p className="font-mono text-sm font-bold text-gold-600">{value.n}</p>
                <h3 className="mt-3 font-sans text-lg font-bold text-navy-950">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              The Team Behind the Blueprint
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {leadership.map((person) => (
              <article key={person.name} className="card overflow-hidden">
                <div className="aspect-[4/3] w-full bg-surface-container">
                  <img
                    src={imgUrl(person.photo)}
                    alt={`Portrait of ${person.name}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-sans text-lg font-bold text-navy-950">{person.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{person.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner row */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site py-16">
          <div className="text-center">
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Why Partner With Us
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnerRows.map((item) => (
              <article key={item.id} className="card p-8 text-center">
                <AppIcon
                  name={partnerIcons[item.id]}
                  className="mx-auto h-8 w-8 text-gold-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-sans text-lg font-bold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Certifications & Standards</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Committed to Professional Standards
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
            {certifications.map((cert) => (
              <article key={cert.id} className="card p-8 text-center">
                <p className="font-sans text-xl font-bold text-navy-950">{cert.label}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-slate-600">
                  {cert.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer */}
      <PreFooter
        heading="Let's Build Something That Lasts."
        subtext="Have a project in mind? Talk to our team about your construction requirements."
        ctaLabel="Request Consultation"
      />
    </>
  );
}