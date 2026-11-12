import { z } from 'zod';

export const contactEnquirySchema = z.strictObject({
  name: z.string().trim().min(1, 'Enter your name.').max(100, 'Use 100 characters or fewer.'),
  email: z.string().trim().max(254, 'Use 254 characters or fewer.').email('Enter a valid email address.'),
  phone: z.string().trim().max(30, 'Use 30 characters or fewer.').refine(value => {
    const digits = value.replace(/\D/g, '');
    return /^\+?[\d ().-]+$/.test(value) && digits.length >= 7 && digits.length <= 15;
  }, 'Enter a valid phone number.'),
  subject: z.string().trim().min(1, 'Enter a subject.').max(150, 'Use 150 characters or fewer.'),
  message: z.string().trim().min(1, 'Enter your message.').max(3000, 'Use 3,000 characters or fewer.'),
});
