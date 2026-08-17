import { siteConfig } from './site';

const company = siteConfig.companyName;
const industry = siteConfig.industrySuffix.toLowerCase();

export const breadcrumbLabels: Record<string, string> = {
  '/about': 'About',
  '/expertise': 'Expertise',
  '/services': 'Services',
  '/projects': 'Projects',
  '/contact': 'Contact',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
};

export const heroBackgrounds: Record<string, string> = {
  '/about': 'bg-white',
  '/contact': 'bg-white',
};

export const pageMeta = {
  home: {
    title: `${company} | ${siteConfig.tagline}`,
    description: `${company} delivers commercial, industrial, and infrastructure ${industry} projects with engineering precision since ${siteConfig.foundingYear}.`,
    path: '/',
  },
  about: {
    title: `About | ${company}`,
    description: `Learn about ${company} - our legacy, values, leadership, and certifications.`,
    path: '/about',
  },
  expertise: {
    title: `Expertise | ${company}`,
    description: `Commercial, industrial, and infrastructure ${industry} expertise backed by disciplined engineering.`,
    path: '/expertise',
  },
  services: {
    title: `Services | ${company}`,
    description: `Core ${industry} services and capabilities delivered with engineering discipline.`,
    path: '/services',
  },
  projects: {
    title: `Projects | ${company}`,
    description: `Browse completed projects delivered by ${company} across commercial, industrial, and infrastructure sectors.`,
    path: '/projects',
  },
  contact: {
    title: `Contact | ${company}`,
    description: `Contact ${company} - project inquiries, consultation requests, and general questions.`,
    path: '/contact',
  },
  notFound: {
    title: `Page Not Found | ${company}`,
    description: 'The page you were looking for could not be found.',
    noindex: true,
  },
  privacy: {
    title: `Privacy Policy | ${company}`,
    description: `Read the ${company} Privacy Policy to understand how we collect, use, and protect your information.`,
    path: '/privacy',
  },
  thankYou: {
    title: `Thank You | ${company}`,
    description: `Thank you for contacting ${company}. We have received your inquiry and will respond shortly.`,
    path: '/thank-you',
    noindex: true,
  },
  terms: {
    title: `Terms of Service | ${company}`,
    description: `Review the ${company} Terms of Service governing the use of our website and services.`,
    path: '/terms',
  },
} as const;
