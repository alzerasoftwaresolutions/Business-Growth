export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Construction',
    description:
      'Custom homes and residential developments built with precision, durability, and attention to every structural detail.',
    details: ['Custom homes', 'Renovations', 'Extensions'],
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    description:
      'Office buildings, retail spaces, and mixed-use developments delivered on schedule with uncompromising quality.',
    details: ['Office buildings', 'Retail spaces', 'Mixed-use'],
  },
  {
    id: 'civil',
    title: 'Civil Engineering',
    description:
      'Infrastructure and site works that establish the foundations for communities and industry.',
    details: ['Roads', 'Drainage', 'Site works'],
  },
  {
    id: 'industrial',
    title: 'Industrial Projects',
    description:
      'Warehouses, plants, and industrial facilities engineered for operational efficiency and long service life.',
    details: ['Warehouses', 'Plants', 'Facilities'],
  },
];

export const expertiseAreas = [
  {
    id: 'structural',
    title: 'Structural Engineering',
    description:
      'Load-bearing design and structural analysis grounded in rigorous engineering standards.',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description:
      'End-to-end delivery discipline — budgeting, scheduling, and quality control.',
  },
  {
    id: 'safety',
    title: 'Safety & Compliance',
    description:
      'Site safety protocols and regulatory compliance integrated into every phase.',
  },
  {
    id: 'materials',
    title: 'Materials & Procurement',
    description:
      'Sourcing quality materials through disciplined supplier relationships and inspection.',
  },
];