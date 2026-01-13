// lib/contact.ts
import { z } from 'zod';
import { ContactFormSchema } from './schema';

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export type ContactFormState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactFormInputs, string[]>>;
};
