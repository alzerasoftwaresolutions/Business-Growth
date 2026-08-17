import { useState, type FormEvent } from 'react';
import { Alert } from '../feedback/Alert';
import { Button } from '../common/Button';
import { FormGroup } from '../forms/FormGroup';
import { Input } from '../forms/Input';
import { Textarea } from '../forms/Textarea';
import { FormActions } from '../forms/FormActions';
import { validateContactForm, type ContactFormValues } from '../forms/validation';
import { useLeadSubmit } from './useLeadSubmit';

const INITIAL_VALUES: ContactFormValues = { name: '', email: '', subject: '', message: '' };

/**
 * Contact form (04 §52, §53; 06 §10). Submits through the `leads` boundary.
 * Honest states only: success is only reported when the configured backend
 * accepts; otherwise the visitor sees an "unavailable" or error notice — never
 * a fake confirmation.
 */
export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const { submitting, result, submit } = useLeadSubmit('contact');

  const update = (field: keyof ContactFormValues) => (event: { target: { value: string } }) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    const { name, email, subject, message } = values;
    await submit({ name, email, subject, message });
  };

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {result?.status === 'accepted' ? (
        <Alert variant="success" title="Message sent">
          Thank you. Your message has been sent.
        </Alert>
      ) : null}
      {result?.status === 'unavailable' ? (
        <Alert variant="warning" title="Form unavailable">
          This form is not yet connected on this site. Please contact us directly.
        </Alert>
      ) : null}
      {result?.status === 'error' ? (
        <Alert variant="error" title="Something went wrong">
          {result.message}
        </Alert>
      ) : null}

      <FormGroup label="Name" required error={errors.name}>
        {(id) => (
          <Input
            id={id}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={update('name')}
            invalid={Boolean(errors.name)}
          />
        )}
      </FormGroup>
      <FormGroup label="Email" required error={errors.email}>
        {(id) => (
          <Input
            id={id}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={update('email')}
            invalid={Boolean(errors.email)}
          />
        )}
      </FormGroup>
      <FormGroup label="Subject">
        {(id) => (
          <Input
            id={id}
            name="subject"
            type="text"
            autoComplete="off"
            value={values.subject}
            onChange={update('subject')}
          />
        )}
      </FormGroup>
      <FormGroup label="Message" required error={errors.message}>
        {(id) => (
          <Textarea
            id={id}
            name="message"
            rows={5}
            required
            value={values.message}
            onChange={update('message')}
            invalid={Boolean(errors.message)}
          />
        )}
      </FormGroup>

      <FormActions>
        <Button type="submit" loading={submitting}>
          Send message
        </Button>
      </FormActions>
    </form>
  );
}