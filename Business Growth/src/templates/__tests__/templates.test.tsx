import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import type { ReactNode } from 'react';
import { getConfigs } from '../../config';
import { ConfigContext } from '../../app/ConfigContext';
import { TemplateView } from '../index';
import { HomeTemplate } from '../HomeTemplate';
import { AboutTemplate } from '../AboutTemplate';
import { ContactTemplate } from '../ContactTemplate';
import { RfqTemplate } from '../RfqTemplate';
import { FaqTemplate } from '../FaqTemplate';
import { LegalTemplate } from '../LegalTemplate';
import { NotFoundTemplate } from '../NotFoundTemplate';
import { ListingTemplate } from '../ListingTemplate';
import { ProductDetailTemplate } from '../DetailTemplates';
import type { PackageConfigs } from '../../types';

const baseConfigs = getConfigs();
function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function render(node: ReactNode, overrides: (configs: PackageConfigs) => void = () => undefined, initialPath = '/'): string {
  const configs = clone(baseConfigs);
  overrides(configs);
  return renderToStaticMarkup(
    <ConfigContext.Provider value={{ configs, issues: [] }}>
      <MemoryRouter initialEntries={[initialPath]}>{node}</MemoryRouter>
    </ConfigContext.Provider>
  );
}

describe('HomeTemplate', () => {
  it('falls back to the neutral template when no client content exists', () => {
    const html = render(<HomeTemplate />);
    expect(html).toContain('<h1');
    expect(html).toContain('Home');
    expect(html).not.toContain('By the numbers');
    expect(html).not.toContain('Certifications');
    expect(html).not.toContain('Locations');
    expect(html).not.toContain('Acme');
  });

  it('renders only content-backed sections when configuration is populated', () => {
    const html = render(<HomeTemplate />, (configs) => {
      configs.business.branding.brandName = 'Acme';
      configs.business.business.tagline = 'Tagline';
      configs.business.business.companyStory = 'Our story';
      configs.business.businessMetrics.yearsOfExperience = 20;
      configs.business.credentials.certifications = [
        { id: '1', name: 'ISO 9001', issuer: 'Bureau', certificateNumber: '', issueDate: '', expiryDate: '', document: '', logo: '' },
      ];
      configs.business.locations = [
        {
          id: '1',
          name: 'Head Office',
          type: 'head-office',
          address: { street: '1 Main St', city: 'Town', region: '', country: '', postalCode: '' },
          phone: '',
          email: '',
          googleMapsUrl: '',
          coordinates: { latitude: null, longitude: null },
          businessHours: { timezone: '', schedule: {} },
        },
      ];
    });
    expect(html).toContain('Acme');
    expect(html).toContain('By the numbers');
    expect(html).toContain('20');
    expect(html).toContain('ISO 9001');
    expect(html).toContain('Head Office');
  });
});

describe('AboutTemplate', () => {
  it('shows the neutral page without invented bands', () => {
    const html = render(<AboutTemplate />);
    expect(html).toContain('About');
    expect(html).not.toContain('Our values');
  });

  it('renders the values band only when configured', () => {
    const html = render(<AboutTemplate />, (configs) => {
      configs.business.business.values = ['Integrity'];
    });
    expect(html).toContain('Our values');
    expect(html).toContain('Integrity');
  });
});

describe('ContactTemplate', () => {
  it('renders the form and never invents contact channels', () => {
    const html = render(<ContactTemplate />);
    expect(html).toContain('Contact Us');
    expect(html).toContain('Contact details');
    expect(html).toContain('Send message');
    expect(html).not.toContain('tel:');
    expect(html).not.toContain('mailto:');
    expect(html).not.toContain('Open map');
  });

  it('shows the unavailable state when the form feature is disabled', () => {
    const html = render(<ContactTemplate />, (configs) => {
      configs.features.features.leadGeneration.contactForm.enabled = false;
    });
    expect(html).toContain('Contact form unavailable');
    expect(html).not.toContain('Send message');
  });
});

describe('RfqTemplate', () => {
  it('renders the RFQ form when enabled', () => {
    const html = render(<RfqTemplate />);
    expect(html).toContain('Request a Quote');
    expect(html).toContain('Request quote');
  });

  it('shows the unavailable state when disabled', () => {
    const html = render(<RfqTemplate />, (configs) => {
      configs.features.features.leadGeneration.rfq.enabled = false;
    });
    expect(html).toContain('Request form unavailable');
    expect(html).not.toContain('Request quote');
  });
});

describe('FaqTemplate', () => {
  it('shows the intentional empty state until FAQs are provided', () => {
    const html = render(<FaqTemplate />);
    expect(html).toContain('FAQs');
    expect(html).toContain('No FAQs yet');
  });
});

describe('LegalTemplate', () => {
  it('never fabricates legal text', () => {
    const html = render(<LegalTemplate template="privacy" />);
    expect(html).toContain('Privacy Policy');
    expect(html).toContain('not yet available');
  });

  it('links to a provisioned privacy policy', () => {
    const html = render(<LegalTemplate template="privacy" />, (configs) => {
      configs.business.legal.privacyPolicyUrl = 'https://example.com/privacy';
    });
    expect(html).toContain('Open the privacy policy');
    expect(html).toContain('https://example.com/privacy');
  });
});

describe('NotFoundTemplate', () => {
  it('renders a neutral 404 with a single path home', () => {
    const html = render(<NotFoundTemplate />);
    expect(html).toContain('Page not found');
    expect(html).toContain('Back to home');
    expect(html).toContain('href="/"');
  });
});

describe('ListingTemplate', () => {
  it('renders the empty state through the collection boundary', () => {
    const html = render(<ListingTemplate template="services" />);
    expect(html).toContain('Services');
    expect(html).toContain('No services yet');
  });

  it('never shows pagination for an empty collection', () => {
    const html = render(<ListingTemplate template="products" />);
    expect(html).not.toContain('Pagination');
  });
});

describe('DetailTemplates', () => {
  it('renders the honest empty state until content exists', () => {
    const html = render(<ProductDetailTemplate />, () => undefined, '/products/acme');
    expect(html).toContain('Content not yet available');
  });
});

describe('TemplateView registry', () => {
  it('maps listing templates to the reusable listing composition', () => {
    expect(render(<TemplateView template="services" />)).toContain('No services yet');
    expect(render(<TemplateView template="team" />)).toContain('No team members yet');
    expect(render(<TemplateView template="certifications" />)).toContain('No certifications yet');
  });

  it('maps detail templates to the detail composition', () => {
    const html = render(<TemplateView template="productDetails" />, () => undefined, '/products/acme');
    expect(html).toContain('Content not yet available');
  });

  it('maps content and conversion templates to their own compositions', () => {
    expect(render(<TemplateView template="home" />)).toContain('Home');
    expect(render(<TemplateView template="contact" />)).toContain('Contact Us');
    expect(render(<TemplateView template="rfq" />)).toContain('Request a Quote');
    expect(render(<TemplateView template="faq" />)).toContain('No FAQs yet');
    expect(render(<TemplateView template="privacy" />)).toContain('Privacy Policy');
  });
});