import { useState, type FormEvent } from 'react';
import { Alert } from '../feedback/Alert';
import { Button } from '../common/Button';
import { FormGroup } from '../forms/FormGroup';
import { Input } from '../forms/Input';
import { Textarea } from '../forms/Textarea';
import { FormActions } from '../forms/FormActions';
import { validateRfqForm, type RfqFormValues } from '../forms/validation';
import { useLeadSubmit } from './useLeadSubmit';

const INITIAL_VALUES: RfqFormValues = { name: '', email: '', company: '', product: '', quantity: '', details: '' };

/**
 * Request-for-quote form (06 §11-§13; 04 §53). Submits through the `leads`
 * boundary with `formType: 'rfq'`. Reports honest submission states only.
 */
export function RFQForm() {
  const [values, setValues] = useState<RfqFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Partial<Record<keyof RfqFormValues, string>>>({});
  const { submitting, result, submit } = useLeadSubmit('rfq');

  const update = (field: keyof RfqFormValues) => (event: { target: { value: string } }) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateRfqForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    const { name, email, company, product, quantity, details } = values;
    await submit({ name, email, company, product, quantity, details });
  };

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {result?.status === 'accepted' ? (
        <Alert variant="success" title="Request received">
          Thank you. Your request has been received.
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
      <FormGroup label="Company">
        {(id) => (
          <Input
            id={id}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={update('company')}
          />
        )}
      </FormGroup>
      <FormGroup label="Product or service" required error={errors.product}>
        {(id) => (
          <Input
            id={id}
            name="product"
            type="text"
            autoComplete="off"
            required
            value={values.product}
            onChange={update('product')}
            invalid={Boolean(errors.product)}
          />
        )}
      </FormGroup>
      <FormGroup label="Quantity">
        {(id) => (
          <Input
            id={id}
            name="quantity"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            value={values.quantity}
            onChange={update('quantity')}
          />
        )}
      </FormGroup>
      <FormGroup label="Requirements" required error={errors.details}>
        {(id) => (
          <Textarea
            id={id}
            name="details"
            rows={5}
            required
            value={values.details}
            onChange={update('details')}
            invalid={Boolean(errors.details)}
          />
        )}
      </FormGroup>

      <FormActions>
        <Button type="submit" loading={submitting}>
          Request quote
        </Button>
      </FormActions>
    </form>
  );
}