import { siteConfig } from './site';

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalContent {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export const privacyPolicy: LegalContent = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  updated: 'Last updated: August 2026',
  intro: `This Privacy Policy explains how ${siteConfig.companyName} ("we", "us") collects, uses, and protects information when you visit our website or contact us.`,
  sections: [
    {
      heading: '1. Information We Collect',
      paragraphs: [
        'We collect information you provide directly when you contact us through our website, including your name, email address, phone number, project type, location, budget, and any project details you choose to share.',
        'We may also collect limited technical information automatically, such as browser type and pages visited, to help us understand how our site is used.',
      ],
    },
    {
      heading: '2. How We Use Your Information',
      list: [
        'To respond to your inquiries and consultation requests.',
        'To schedule and conduct project consultations.',
        'To improve our website and the services we provide.',
        'To send communications you have requested, such as proposals or follow-ups.',
      ],
    },
    {
      heading: '3. How We Share Your Information',
      paragraphs: [
        'We do not sell your personal information. We share information only as needed to operate our business, including with service providers who help us manage our website, communications, and project delivery, and where required by law.',
      ],
    },
    {
      heading: '4. Data Retention',
      paragraphs: [
        'We retain personal information only for as long as necessary to fulfill the purposes described in this policy, including for legal, accounting, or reporting requirements.',
      ],
    },
    {
      heading: '5. Your Rights',
      list: [
        'Access, correct, or request deletion of your personal information.',
        'Opt out of receiving marketing communications at any time.',
        'Ask questions or raise concerns about how your information is handled.',
      ],
      paragraphs: [
        `To exercise any of these rights, contact us at ${siteConfig.email} or by phone at ${siteConfig.contactInfo[0].value}.`,
      ],
    },
    {
      heading: '6. Security',
      paragraphs: [
        'We use appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.',
      ],
    },
    {
      heading: '7. Changes to This Policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time. We will post any changes on this page with an updated revision date.',
      ],
    },
    {
      heading: '8. Contact Us',
      paragraphs: [
        `If you have any questions about this Privacy Policy, please contact us at ${siteConfig.email}, by phone at ${siteConfig.contactInfo[0].value}, or by mail at ${siteConfig.address}.`,
      ],
    },
  ],
};

export const termsOfService: LegalContent = {
  eyebrow: 'Legal',
  title: 'Terms of Service',
  updated: 'Last updated: August 2026',
  intro: `These Terms of Service ("Terms") govern your use of the ${siteConfig.companyName} website and the information, content, and services available through it. By using this website, you agree to these Terms.`,
  sections: [
    {
      heading: '1. Acceptance of Terms',
      paragraphs: [
        'By accessing or using this website, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree, please do not use the website.',
      ],
    },
    {
      heading: '2. Use of the Website',
      list: [
        'Use the website only for lawful purposes.',
        'Not attempt to disrupt, overload, or gain unauthorized access to the website or its systems.',
        'Not use the website to collect information about other visitors without consent.',
      ],
    },
    {
      heading: '3. Project Inquiries',
      paragraphs: [
        'Information submitted through our website, including contact forms, is a request for consultation only and does not create a contractual relationship. Formal proposals, scope, pricing, and timelines are established through a written agreement.',
      ],
    },
    {
      heading: '4. Intellectual Property',
      paragraphs: [
        'All content on this website, including text, graphics, logos, and images, is the property of the company or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use this content without permission.',
      ],
    },
    {
      heading: '5. Limitation of Liability',
      paragraphs: [
        'The website is provided "as is" without warranties of any kind. To the fullest extent permitted by law, the company shall not be liable for any damages arising from your use of or inability to use the website or any information contained within it.',
      ],
    },
    {
      heading: '6. Third-Party Links',
      paragraphs: [
        'Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of those websites and encourage you to review their terms and privacy policies.',
      ],
    },
    {
      heading: '7. Changes to These Terms',
      paragraphs: [
        'We may update these Terms from time to time. Changes take effect when posted on this page. Continued use of the website after changes constitutes acceptance of the revised Terms.',
      ],
    },
    {
      heading: '8. Contact Us',
      paragraphs: [
        `For questions about these Terms, contact us at ${siteConfig.email}, by phone at ${siteConfig.contactInfo[0].value}, or by mail at ${siteConfig.address}.`,
      ],
    },
  ],
};
