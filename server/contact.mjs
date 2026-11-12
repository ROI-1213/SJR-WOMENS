import { randomUUID } from 'node:crypto';
import { mkdir, rename, rm, writeFile } from 'node:fs/promises';
import express from 'express';
import { contactEnquirySchema } from '../src/lib/contactEnquiry.mjs';

const inbox = new URL('../.data/contact-enquiries/', import.meta.url);

export const contactApp = express();
contactApp.disable('x-powered-by');

contactApp.use((_request, response, next) => {
  response.set('Cache-Control', 'no-store');
  next();
});

contactApp.post('/', express.json({ limit: '16kb' }), async (request, response) => {
  if (!request.is('application/json')) {
    return response.status(415).json({ error: 'Submit the enquiry as JSON.' });
  }

  const enquiry = contactEnquirySchema.safeParse(request.body);
  if (!enquiry.success) {
    return response.status(400).json({ error: 'Check your contact details and message and try again.' });
  }

  const reference = randomUUID();
  const pending = new URL(`${reference}.pending`, inbox);
  const saved = new URL(`${reference}.json`, inbox);

  try {
    await mkdir(inbox, { recursive: true, mode: 0o700 });
    const record = { reference, receivedAt: new Date().toISOString(), ...enquiry.data };
    await writeFile(pending, `${JSON.stringify(record, null, 2)}\n`, { flag: 'wx', mode: 0o600, flush: true });
    await rename(pending, saved);
  } catch (error) {
    await rm(pending, { force: true }).catch(() => {});
    console.error('Unable to save contact enquiry:', error.code ?? 'unknown error');
    return response.status(503).json({ error: 'The contact inbox is temporarily unavailable.' });
  }

  return response.status(201).json({ reference });
});

contactApp.all('/', (_request, response) => {
  response.set('Allow', 'POST').status(405).json({ error: 'Use POST to submit an enquiry.' });
});

contactApp.use((error, _request, response, next) => {
  if (response.headersSent) return next(error);
  if (error.status === 413) return response.status(413).json({ error: 'The enquiry is too long.' });
  if (error.status >= 400 && error.status < 500) return response.status(400).json({ error: 'Invalid enquiry request.' });
  return response.status(500).json({ error: 'The enquiry could not be processed.' });
});
