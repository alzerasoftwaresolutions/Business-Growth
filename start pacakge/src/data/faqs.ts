export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'How much does a commercial construction project cost?',
    answer:
      'Cost depends on scope, location, materials, and complexity. After an initial consultation, we provide a detailed estimate and a transparent breakdown. Contact us with your project details for a more accurate figure.',
  },
  {
    question: 'How long will my project take?',
    answer:
      'Timelines vary by project size and complexity. After we understand your scope, we provide a realistic schedule with defined milestones. Our engineering-led approach is designed to keep delivery on time without compromising quality or safety.',
  },
  {
    question: 'Do you handle both design and construction?',
    answer:
      'Yes. We offer design-build delivery, where a single contractor manages both design and construction. This streamlines coordination, reduces risk, and often shortens the overall schedule.',
  },
  {
    question: 'What sectors do you serve?',
    answer:
      'We deliver commercial, industrial, and infrastructure projects, with additional experience across healthcare, education, government, and hospitality sectors.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. Stonebridge Construction holds a general contractor license and maintains comprehensive insurance and bonding. We are also certified to ISO 9001 (quality) and ISO 45001 (occupational health and safety) standards.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Start by submitting a project inquiry through our contact form or by calling our team. We will review your requirements, schedule a consultation, and provide a clear proposal with scope, timeline, and estimate.',
  },
];
