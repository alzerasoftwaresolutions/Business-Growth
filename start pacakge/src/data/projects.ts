export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
}

export const projectCategories = [
  'ALL',
  'COMMERCIAL',
  'INDUSTRIAL',
  'INFRASTRUCTURE',
  'HEALTHCARE',
  'EDUCATION',
  'HOSPITALITY',
];

export const projects: Project[] = [
  {
    id: 'metropolitan-plaza',
    title: 'Metropolitan Plaza',
    category: 'COMMERCIAL',
    location: 'Chicago, IL',
    year: '2025',
    description:
      'A mixed-use commercial landmark delivered to strict engineering standards.',
  },
  {
    id: 'skyline-bridge',
    title: 'Skyline Bridge',
    category: 'COMMERCIAL',
    location: 'Naperville, IL',
    year: '2024',
    description:
      'Mixed-use residential bridge development spanning a major urban corridor.',
  },
  {
    id: 'logistics-hub-alpha',
    title: 'Logistics Hub Alpha',
    category: 'INDUSTRIAL',
    location: 'Joliet, IL',
    year: '2024',
    description:
      'High-efficiency logistics and distribution facility for modern operations.',
  },
  {
    id: 'unity-medical',
    title: 'Unity Medical Center',
    category: 'HEALTHCARE',
    location: 'Evanston, IL',
    year: '2023',
    description:
      'A patient-centered healthcare facility built with resilience and care.',
  },
  {
    id: 'global-tech-institute',
    title: 'Global Tech Institute',
    category: 'EDUCATION',
    location: 'Aurora, IL',
    year: '2023',
    description:
      'A technology campus designed for collaboration and future growth.',
  },
  {
    id: 'solaris-power',
    title: 'Solaris Power Plant',
    category: 'INFRASTRUCTURE',
    location: 'Rockford, IL',
    year: '2022',
    description:
      'Renewable energy infrastructure engineered for long-term performance.',
  },
];

export const specializedProjectTypes = [
  { id: 's1', icon: 'building', title: 'High-Rise Construction', text: 'Structural integrity for vertical developments.' },
  { id: 's2', icon: 'grid', title: 'Structural Steel', text: 'Precision steel erection and fabrication.' },
  { id: 's3', icon: 'layers', title: 'Concrete Systems', text: 'High-performance concrete engineering.' },
  { id: 's4', icon: 'refresh', title: 'Retrofits & Expansions', text: 'Upgrades that extend asset life.' },
  { id: 's5', icon: 'map', title: 'Site Development', text: 'Foundations, earthworks, and utilities.' },
  { id: 's6', icon: 'wrench', title: 'Facility Management', text: 'Long-term asset care and maintenance.' },
];