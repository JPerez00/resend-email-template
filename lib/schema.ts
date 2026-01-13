// lib/schema.ts
import { z } from 'zod';

const asString = (v: unknown) => (typeof v === 'string' ? v : '');

export const ContactFormSchema = z.object({
  name: z.preprocess(asString, z.string().min(1, 'Name is required.')),
  email: z.preprocess(
    asString,
    z.string().min(1, 'Email is required.').email('Invalid email.')
  ),
  message: z.preprocess(
    asString,
    z.string().min(1, 'Message is required.').min(6, 'Message must be at least 6 characters.')
  ),
});
