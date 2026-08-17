import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../../data/site';

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Careers', to: '/contact' },
  { label: 'Sustainability', to: '/expertise' },
];

const serviceLinks = [
  { label: 'Commercial', to: '/services' },
  { label: 'Industrial', to: '/services' },
  { label: 'Infrastructure', to: '/services' },
];

const socialIcons: Record<string, typeof Facebook> = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
};

function Brand() {
  return (
    <>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded bg-white/10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 text-gold-500"
            aria-hidden="true"
          >
            <path d="M3 21h18M4 21V8l8-5 8 5v13M9 21v-6h6v6M9 11h.01M12 11h.01M15 11h.01" />
          </svg>
        </span>
        <span className="font-sans text-base font-bold uppercase tracking-[0.1em]">
          {siteConfig.logoText}
          <span className="block text-[10px] font-medium tracking-[0.2em] text-white/50">
            {siteConfig.industrySuffix}
          </span>
        </span>
      </div>
      <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
        {siteConfig.footerNote}
      </p>
    </>
  );
}

function SocialIcons() {
  return (
    <ul className="flex items-center gap-4">
      {siteConfig.social.map((social) => {
        const Icon = socialIcons[social.label];
        if (!Icon) return null;
        return (
          <li key={social.label}>
            <a
              href={social.href}
              className="flex h-10 w-10 items-center justify-center rounded bg-white/10 transition-colors hover:bg-gold-500 hover:text-navy-950"
              aria-label={social.label}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-4 text-gold-500">{children}</p>;
}

function ContactList() {
  const items = [
    { Icon: Phone, value: siteConfig.contactInfo[0].value, href: siteConfig.contactInfo[0].href },
    { Icon: Mail, value: siteConfig.contactInfo[1].value, href: siteConfig.contactInfo[1].href },
    {
      Icon: MapPin,
      value: siteConfig.contactInfo[2].value,
      sub: siteConfig.contactInfo[2].subtext,
      href: undefined,
    },
  ];

  return (
    <ul className="space-y-3 text-sm leading-relaxed text-white/60">
      {items.map((item) => (
        <li key={item.value}>
          {item.href ? (
            <a href={item.href} className="transition-colors hover:text-gold-500">
              {item.value}
            </a>
          ) : (
            <>
              {item.value}
              {item.sub ? <span className="block">{item.sub}</span> : null}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

function LegalBlock({ alignEnd = false }: { alignEnd?: boolean }) {
  return (
    <div
      className={`flex flex-col items-start gap-3 text-xs text-white/40 ${
        alignEnd ? 'sm:items-end' : ''
      }`}
    >
      <a href="/privacy" className="transition-colors hover:text-gold-500">
        Privacy Policy
      </a>
      <a href="/terms" className="transition-colors hover:text-gold-500">
        Terms of Service
      </a>
      <p className="mt-2">
        © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
        {siteConfig.tagline} Since {siteConfig.foundingYear}.
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white pb-16 md:pb-0">
      <div className="container-site">
        {/* Desktop: brand + socials left, 3-col links right */}
        <div className="hidden py-14 lg:flex lg:items-center lg:justify-between lg:gap-16">
          <div className="flex flex-col items-start gap-8">
            <Brand />
            <SocialIcons />
          </div>

          <div className="grid grid-cols-3 gap-12">
            <div>
              <FooterHeading>Contact</FooterHeading>
              <ContactList />
            </div>

            <div>
              <FooterHeading>Company</FooterHeading>
              <ul className="space-y-3 text-sm text-white/60">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition-colors hover:text-gold-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Services</FooterHeading>
              <ul className="space-y-3 text-sm text-white/60">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition-colors hover:text-gold-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile: brand + socials top, 2-col grid, contact + legal bottom */}
        <div className="py-12 lg:hidden">
          <div className="flex flex-col items-start gap-8">
            <Brand />
            <SocialIcons />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-10 border-t border-white/10 pt-12">
            <div>
              <FooterHeading>Company</FooterHeading>
              <ul className="space-y-3 text-sm text-white/60">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition-colors hover:text-gold-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Services</FooterHeading>
              <ul className="space-y-3 text-sm text-white/60">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition-colors hover:text-gold-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <FooterHeading>Contact</FooterHeading>
              <ContactList />
            </div>

            <LegalBlock alignEnd />
          </div>
        </div>

        {/* Footer base: centered legal + copyright (desktop) */}
        <div className="hidden border-t border-white/10 py-8 text-center lg:block">
          <div className="flex items-center justify-center gap-6">
            <a href="/privacy" className="text-xs text-white/40 transition-colors hover:text-gold-500">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-white/40 transition-colors hover:text-gold-500">
              Terms of Service
            </a>
          </div>
          <p className="mt-4 text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
            {siteConfig.tagline} Since {siteConfig.foundingYear}.
          </p>
        </div>
      </div>
    </footer>
  );
}
