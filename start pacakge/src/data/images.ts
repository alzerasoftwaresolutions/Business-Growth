export const images = {
  hero: '/images/hero.jpg',
  legacy: '/images/legacy.jpg',
  featuredTower: '/images/featuredTower.jpg',
  glassOffice: '/images/glassOffice.jpg',
  steelFramework: '/images/steelFramework.jpg',
  engineersSite: '/images/engineersSite.jpg',
  reviewTablet: '/images/reviewTablet.jpg',
  teamOnSite: '/images/teamOnSite.jpg',
  cranesSunset: '/images/cranesSunset.jpg',
  siteSunset: '/images/siteSunset.jpg',
  industrial: '/images/industrial.jpg',
  infrastructure: '/images/infrastructure.jpg',
  healthcare: '/images/healthcare.jpg',
  education: '/images/education.jpg',
  hospitality: '/images/hospitality.jpg',
  portraitCeo: '/images/portraitCeo.jpg',
  portraitTech: '/images/portraitTech.jpg',
  portraitProject: '/images/portraitProject.jpg',
} as const;

export type ImageKey = keyof typeof images;

export const imgUrl = (id: ImageKey) => images[id];

const projectImageKeys: Record<string, ImageKey> = {
  COMMERCIAL: 'glassOffice',
  INDUSTRIAL: 'industrial',
  INFRASTRUCTURE: 'infrastructure',
  HEALTHCARE: 'healthcare',
  EDUCATION: 'education',
  HOSPITALITY: 'hospitality',
};

export const projectImgUrl = (category: string) =>
  images[projectImageKeys[category] ?? 'hero'];