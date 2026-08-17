import { siteConfig } from './site';
import type { ImageKey } from './images';

const company = siteConfig.companyName;

export const milestones = [
  {
    year: '1978',
    title: `${company} Is Founded`,
    text: 'Founded by structural engineers in the company\u2019s founding city.',
  },
  { year: '2005', title: 'Expanding Capability', text: 'Secured first major industrial contracts.' },
  { year: '2012', title: 'Growing Expertise', text: 'Integrated sustainable design methodologies.' },
  { year: '2018', title: 'Complex Projects', text: 'Expanded operations nationwide.' },
  { year: '2026', title: 'Building the Next Generation', text: 'Pioneering advanced structural analysis.' },
];

export const values = [
  { n: '01', title: 'Precision', text: 'Meticulous attention to detail in every phase of the construction lifecycle.' },
  { n: '02', title: 'Integrity', text: 'Unwavering honesty and transparency in all our professional relationships.' },
  { n: '03', title: 'Safety', text: 'An uncompromising commitment to secure environments for teams and partners.' },
  { n: '04', title: 'Quality', text: 'Delivering superior craftsmanship and robust materials that endure.' },
  { n: '05', title: 'Partnership', text: 'Collaborative relationships with clients, architects, and subcontractors.' },
  { n: '06', title: 'Responsibility', text: 'A dedicated approach to sustainable practices and community impact.' },
];

export const leadership: { name: string; role: string; photo: ImageKey }[] = [
  { name: 'John Mercer', role: 'Chief Executive Officer', photo: 'portraitCeo' },
  { name: 'Alan Reyes', role: 'Technical Director', photo: 'portraitTech' },
  { name: 'Priya Sharma', role: 'Project Director', photo: 'portraitProject' },
];

export const partnerRows = [
  { id: 'experience', title: '25+ Years', text: 'Proven track record' },
  { id: 'engineering', title: 'Engineering Expertise', text: 'Complex problem solving' },
  { id: 'safety', title: 'Safety First', text: 'Zero-incident culture' },
  { id: 'delivery', title: 'Reliable Delivery', text: 'On-time, on-budget' },
];
