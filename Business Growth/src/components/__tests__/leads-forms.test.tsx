import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import type { ReactNode } from 'react';

import { ContactForm, RFQForm, LeadCTA, InquiryCTA, WhatsAppCTA, PhoneCTA } from '../leads';
import {
  isRequired,
  isValidEmail,
  validateContactForm,
  validateRfqForm,
} from '../forms';

const render = (node: ReactNode) => renderToStaticMarkup(node);

describe('form validation (pure, node-testable)', () => {
  it('requires non-blank values', () => {
    expect(isRequired('')).toBe(false);
    expect(isRequired('   ')).toBe(false);
    expect(isRequired('x')).toBe(true);
  });

  it('validates email format', () => {
    expect(isValidEmail('a@b.com')).toBe(true);
    expect(isValidEmail('not-an-email')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });

  it('validateContactForm flags missing required fields and bad email', () => {
    const errors = validateContactForm({ name: '', email: 'nope', subject: '', message: '' });
    expect(errors.name).toBeTruthy();
    expect(errors.email).toBeTruthy();
    expect(errors.message).toBeTruthy();
    expect(validateContactForm({ name: 'A', email: 'a@b.com', subject: '', message: 'Hi' })).toEqual({});
  });

  it('validateRfqForm flags missing product and details', () => {
    const errors = validateRfqForm({ name: 'A', email: 'a@b.com', company: '', product: '', quantity: '', details: '' });
    expect(errors.product).toBeTruthy();
    expect(errors.details).toBeTruthy();
    expect(errors.name).toBeUndefined();
  });
});

describe('lead CTA components', () => {
  it('ContactForm renders labeled, required fields and a submit button', () => {
    const html = render(<ContactForm />);
    expect(html).toContain('Send message');
    expect(html).toContain('name="name"');
    expect(html).toContain('type="email"');
    expect(html).toContain('name="message"');
    expect(html).toContain('required');
    expect(html).not.toContain('Message sent');
  });

  it('RFQForm renders an rfq submit button', () => {
    const html = render(<RFQForm />);
    expect(html).toContain('Request quote');
    expect(html).toContain('name="product"');
  });

  it('LeadCTA renders heading and the child form slot', () => {
    const html = render(
      <LeadCTA heading="Get in touch" text="Tell us about your project.">
        <form>
          <input name="demo" />
        </form>
      </LeadCTA>
    );
    expect(html).toContain('Get in touch');
    expect(html).toContain('name="demo"');
  });

  it('InquiryCTA renders primary and secondary CTA links', () => {
    const html = render(
      <InquiryCTA
        heading="Start a project"
        cta={{ label: 'Contact us', href: '/contact' }}
        secondaryCta={{ label: 'Request a quote', href: '/rfq' }}
      />
    );
    expect(html).toContain('href="/contact"');
    expect(html).toContain('href="/rfq"');
  });

  it('WhatsAppCTA renders only for valid wa.me links', () => {
    expect(render(<WhatsAppCTA href="https://wa.me/15551234567" />)).toContain('wa.me/15551234567');
    expect(render(<WhatsAppCTA href="https://example.com" />)).toBe('');
  });

  it('PhoneCTA renders tel: link and nothing without a number', () => {
    expect(render(<PhoneCTA phone="+251 11 111 1111" />)).toContain('href="tel:+251 11 111 1111"');
    expect(render(<PhoneCTA phone="  " />)).toBe('');
  });
});