/**
 * Pure client-side validation for lead forms. Kept separate from components so
 * the rules are unit-testable without a DOM (node test environment).
 */

export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface RfqFormValues {
  name: string;
  email: string;
  company: string;
  product: string;
  quantity: string;
  details: string;
}

type Errors<T> = Partial<Record<keyof T, string>>;

export function validateContactForm(values: ContactFormValues): Errors<ContactFormValues> {
  const errors: Errors<ContactFormValues> = {};
  if (!isRequired(values.name)) errors.name = 'Please enter your name.';
  if (!isRequired(values.email)) errors.email = 'Please enter your email address.';
  else if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.';
  if (!isRequired(values.message)) errors.message = 'Please enter your message.';
  return errors;
}

export function validateRfqForm(values: RfqFormValues): Errors<RfqFormValues> {
  const errors: Errors<RfqFormValues> = {};
  if (!isRequired(values.name)) errors.name = 'Please enter your name.';
  if (!isRequired(values.email)) errors.email = 'Please enter your email address.';
  else if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.';
  if (!isRequired(values.product)) errors.product = 'Please indicate the product or service.';
  if (!isRequired(values.details)) errors.details = 'Please describe your requirement.';
  return errors;
}