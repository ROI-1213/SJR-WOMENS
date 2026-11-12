import type { ZodType } from 'zod';

export interface ContactEnquiry {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const contactEnquirySchema: ZodType<ContactEnquiry, ContactEnquiry>;
