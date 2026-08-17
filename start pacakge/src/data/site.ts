export const siteConfig = {
  companyName: 'Stonebridge Construction',
  tagline: 'Engineering Excellence',
  foundingYear: '1978',
  industrySuffix: 'Construction',
  siteUrl: (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://stonebridge.com',
  ogImage: '/og-image.png',
  logoText: 'STONEBRIDGE',
  phone: '1-800-BUILD-IT',
  phoneHref: 'tel:18002845348',
  email: 'inquiries@stonebridge.com',
  emailHref: 'mailto:inquiries@stonebridge.com',
  whatsapp: '+1 (888) 555-0199',
  whatsappHref: 'https://wa.me/18885550199',
  address: '150 Heritage Plaza, Chicago, IL 60601',
  mapEmbed:
    'https://www.google.com/maps?q=150+Heritage+Plaza,+Chicago,+IL+60601&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=150+Heritage+Plaza,+Chicago,+IL+60601',
  businessHours: [
    { days: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
    { days: 'Saturday', hours: '10:00 AM – 2:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  contactInfo: [
    {
      label: 'Phone',
      value: '+1 (888) 555-0199',
      subtext: 'Toll-Free',
      href: 'tel:+18885550199',
    },
    {
      label: 'Email',
      value: 'inquiries@stonebridge.com',
      subtext: 'General Inquiries',
      href: 'mailto:inquiries@stonebridge.com',
    },
    {
      label: 'Office',
      value: '150 Heritage Plaza',
      subtext: 'Chicago, IL 60601',
      href: 'https://www.google.com/maps/search/?api=1&query=150+Heritage+Plaza,+Chicago,+IL+60601',
    },
    {
      label: 'Hours',
      value: 'Mon - Fri 9am - 6pm',
      subtext: 'Central Time',
      href: undefined,
    },
  ],
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/stonebridgeconstruction' },
    { label: 'Instagram', href: 'https://www.instagram.com/stonebridgeconstruction' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/stonebridgeconstruction' },
  ],
  footerNote:
    'Building trust through precision and engineering excellence since 1978.',
} as const;