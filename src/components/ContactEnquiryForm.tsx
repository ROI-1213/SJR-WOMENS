import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, LoaderCircle, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactEnquirySchema, type ContactEnquiry } from '@/lib/contactEnquiry.mjs';

const fields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', maxLength: 100, wide: true },
  { name: 'email', label: 'Email Address', type: 'email', autoComplete: 'email', maxLength: 254 },
  { name: 'phone', label: 'Phone Number', type: 'tel', autoComplete: 'tel', maxLength: 30 },
  { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off', maxLength: 150, wide: true },
] as const;

const inputStyle = 'mt-1.5 border-[#177249]/25 bg-white text-base focus-visible:ring-[#177249] aria-[invalid=true]:border-red-700';
const errorStyle = 'mt-1.5 text-sm text-red-800';

type Result = { reference: string } | { error: string };

export const ContactEnquiryForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactEnquiry>({
    resolver: zodResolver(contactEnquirySchema),
  });
  const [result, setResult] = useState<Result | null>(null);

  const submit = async (enquiry: ContactEnquiry) => {
    setResult(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(enquiry),
      });
      if (response.status !== 201) throw new Error('Enquiry not saved');
      const { reference } = await response.json();
      if (typeof reference !== 'string' || !reference) throw new Error('Missing enquiry reference');
      reset();
      setResult({ reference });
    } catch {
      setResult({ error: 'We couldn’t send your message. Try again or use the phone or email above.' });
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(submit, () => setResult(null))} aria-busy={isSubmitting} className="mt-5">
      <fieldset disabled={isSubmitting} className="grid min-w-0 gap-x-4 gap-y-4 sm:grid-cols-2">
        <legend className="sr-only">Enquiry details</legend>
        {fields.map(field => {
          const id = `contact-${field.name}`;
          const error = errors[field.name]?.message;
          return (
            <div key={field.name} className={'wide' in field ? 'min-w-0 sm:col-span-2' : 'min-w-0'}>
              <label htmlFor={id} className="text-sm font-semibold text-[#153b2a]">{field.label}</label>
              <Input
                id={id}
                type={field.type}
                autoComplete={field.autoComplete}
                maxLength={field.maxLength}
                required
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${id}-error` : undefined}
                className={`h-11 ${inputStyle}`}
                {...register(field.name)}
              />
              {error && <p id={`${id}-error`} className={errorStyle}>{error}</p>}
            </div>
          );
        })}
        <div className="min-w-0 sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-semibold text-[#153b2a]">Message</label>
          <Textarea
            id="contact-message"
            rows={5}
            maxLength={3000}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className={`resize-y ${inputStyle}`}
            {...register('message')}
          />
          {errors.message && <p id="contact-message-error" className={errorStyle}>{errors.message.message}</p>}
        </div>
        <button type="submit" className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#177249] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#135c3b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249] disabled:opacity-60 sm:col-span-2 sm:w-fit">
          {isSubmitting ? <LoaderCircle size={17} className="motion-safe:animate-spin" aria-hidden="true" /> : <Send size={17} aria-hidden="true" />}
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>
      </fieldset>
      {result && ('reference' in result ? (
        <div role="status" className="mt-4 flex items-start gap-2.5 rounded-lg border border-[#177249]/20 bg-[#177249]/5 p-3 text-sm text-[#153b2a]">
          <CheckCircle2 size={18} className="shrink-0 text-[#177249]" aria-hidden="true" />
          <div><p className="font-semibold">Your enquiry was received.</p><p className="mt-1 break-all">Reference {result.reference}</p></div>
        </div>
      ) : <p role="alert" className="mt-4 rounded-lg border border-red-700/20 bg-red-50 p-3 text-sm text-red-800">{result.error}</p>)}
    </form>
  );
};
