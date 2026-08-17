import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, AlertCircle, Navigation } from 'lucide-react';
import AppIcon from '../components/ui/AppIcon';
import PreFooter from '../components/sections/PreFooter';
import { usePageMeta } from '../lib/usePageMeta';
import { trackEvent } from '../lib/analytics';
import { pageMeta } from '../data/meta';
import { siteConfig } from '../data/site';
import { imgUrl } from '../data/images';

type Status = 'idle' | 'submitting' | 'error';

interface FormValues {
  firstName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget: string;
  description: string;
  website: string;
}

const initialForm: FormValues = {
  firstName: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  budget: '',
  description: '',
  website: '',
};

const inputLimits: Record<keyof FormValues, number> = {
  firstName: 80,
  company: 120,
  email: 254,
  phone: 40,
  projectType: 60,
  location: 120,
  budget: 40,
  description: 2000,
  website: 200,
};

const projectTypes = [
  'Commercial',
  'Industrial',
  'Infrastructure',
  'Healthcare',
  'Education',
  'Hospitality',
  'Other',
];

const budgets = ['< $250K', '$250K – $1M', '$1M – $5M', '$5M – $20M', '$20M+'];

const steps = [
  { n: '01', title: 'Inquiry', text: 'Share your project requirements through the form.' },
  { n: '02', title: 'Consultation', text: 'Our team reviews scope and schedules a call.' },
  { n: '03', title: 'Proposal', text: 'We provide a clear scope, timeline, and estimate.' },
  { n: '04', title: 'Engagement', text: 'Engineering-led delivery from start to handover.' },
];

export default function Contact() {
  usePageMeta(pageMeta.contact);

  const navigate = useNavigate();

  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState(initialForm);

  const update = (field: keyof FormValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [field]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === 'submitting') return;

    if (form.website) {
      navigate('/thank-you');
      return;
    }

    if (!form.firstName.trim() || !form.email.trim() || !form.description.trim()) {
      setStatus('error');
      setError('Please complete your name, email, and project description.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('error');
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setError('');

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

    const deliver = async () => {
      if (!endpoint) {
        // Form delivery not configured — record the submission and continue so
        // the demo flow works pre-deployment. Set VITE_FORM_ENDPOINT to go live.
        console.warn('VITE_FORM_ENDPOINT not set — form submission simulated.');
        return;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error(`Form endpoint responded ${response.status}`);
      }
    };

    deliver()
      .then(() => {
        trackEvent('contact_form_submit');
        navigate('/thank-you');
      })
      .catch(() => {
        setStatus('error');
        setError('Something went wrong sending your message. Please try again or call us directly.');
      });
  };

  const infoIcons = [Phone, Mail, MapPin, Clock];

  return (
    <>
      {/* Hero split */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site grid items-center gap-12 py-20 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-6">Contact Us</p>
            <h1 className="font-sans text-4xl font-bold uppercase leading-tight tracking-tight text-navy-950 sm:text-5xl">
              Let&apos;s Build Something Together
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Partner with {siteConfig.companyName} to bring your vision to life. Tell us
              about your project and our team will respond with a clear path forward.
            </p>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded border border-border-light bg-surface-container">
            <img
              src={imgUrl('cranesSunset')}
              alt="Construction site with cranes at sunset"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Contact info bar */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {siteConfig.contactInfo.map((info, index) => {
            const Icon = infoIcons[index];
            return (
              <div key={info.label} className="flex flex-col items-center gap-3 text-center">
                <Icon className="h-8 w-8 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
                <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-slate-600">
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="font-sans text-base font-bold text-navy-950 hover:text-gold-600"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-sans text-base font-bold text-navy-950">{info.value}</p>
                )}
                <p className="text-xs text-slate-600">{info.subtext}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Project inquiry form */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site grid gap-12 py-20 md:grid-cols-5 lg:grid-cols-5">
          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Get In Touch</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Project Inquiry
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Share the details of your project. We only collect the information needed to
              respond to you.
            </p>
            <div className="mt-8 h-1 w-16 bg-gold-600" aria-hidden="true" />
          </div>

          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="card p-8 shadow-subtle sm:p-10"
              noValidate
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={update('website')}
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="input-label">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    maxLength={inputLimits.firstName}
                    value={form.firstName}
                    onChange={update('firstName')}
                    className="input"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="input-label">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    maxLength={inputLimits.company}
                    value={form.company}
                    onChange={update('company')}
                    className="input"
                    placeholder="Company Inc."
                  />
                </div>
                <div>
                  <label htmlFor="email" className="input-label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={inputLimits.email}
                    value={form.email}
                    onChange={update('email')}
                    className="input"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="input-label">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={inputLimits.phone}
                    value={form.phone}
                    onChange={update('phone')}
                    className="input"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="input-label">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={update('projectType')}
                    className="input"
                  >
                    <option value="">Select a type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="input-label">
                    Project Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    maxLength={inputLimits.location}
                    value={form.location}
                    onChange={update('location')}
                    className="input"
                    placeholder="City, State"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="budget" className="input-label">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={update('budget')}
                    className="input"
                  >
                    <option value="">Select a range</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="description" className="input-label">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={5}
                    maxLength={inputLimits.description}
                    value={form.description}
                    onChange={update('description')}
                    className="input resize-y"
                    placeholder="Briefly describe the scope..."
                  />
                </div>
              </div>

              {status === 'error' ? (
                <p className="mt-4 flex items-center gap-2 text-base font-medium text-red-600" role="alert">
                  <AlertCircle className="h-5 w-5" aria-hidden="true" /> {error}
                </p>
              ) : null}

              <div className="mt-8">
                <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
                  <span className="inline-flex items-center gap-2">
                    {status === 'submitting' ? 'Sending...' : 'Request Consultation'}
                    {status === 'idle' ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Headquarters map */}
      <section className="border-b border-border-light bg-surface-dim">
        <div className="container-site grid items-stretch gap-6 pb-20 md:grid-cols-2 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded border border-border-light bg-surface-container">
            <iframe
              title={`Map of ${siteConfig.companyName} headquarters`}
              src={siteConfig.mapEmbed}
              className="absolute inset-0 h-full w-full border-0 grayscale"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
              <MapPin className="h-10 w-10 text-gold-600" strokeWidth={1.5} />
            </span>
          </div>
          <div className="card flex flex-col justify-center p-10">
            <p className="eyebrow mb-4">Headquarters</p>
            <address className="not-italic text-base leading-relaxed text-slate-600">
              {siteConfig.contactInfo[2].value}
              <br />
              {siteConfig.contactInfo[2].subtext}
            </address>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              On-site parking is available at our headquarters.
            </p>            <div className="mt-8">
              <a href={siteConfig.mapLink} className="btn-secondary">
                <span className="inline-flex items-center gap-2">
                  Get Directions <Navigation className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="border-b border-border-light bg-white">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">After You Contact Us</p>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-navy-950 sm:text-4xl">
              A Clear Path Forward.
            </h2>
          </div>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.n} className="relative text-center">
                <span
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                    index === steps.length - 1
                      ? 'border-gold-600 bg-gold-600 text-white'
                      : 'border-gold-600 bg-white text-gold-600'
                  }`}
                >
                  {index === steps.length - 1 ? (
                    <AppIcon name="check" className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <span className="font-mono text-sm font-bold">{step.n}</span>
                  )}
                </span>
                <h3 className="mt-4 font-sans text-sm font-bold uppercase tracking-wide text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pre-footer */}
      <PreFooter
        heading="Ready to Start a Conversation?"
        subtext="Contact our team to discuss your next project and construction requirements."
        ctaLabel="Contact Our Team"
        ctaVariant="gold"
      />
    </>
  );
}