export interface NavLinkItem {
  label: string;
  path: string;
}

export const navLinks: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Expertise', path: '/expertise' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const mainCta = {
  label: 'Request Consultation',
  path: '/contact',
};