// lib/env.server.ts
import 'server-only';
import { z } from 'zod';

const EnvSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
  EMAIL_FROM: z.string().min(1),
  EMAIL_TO: z.string().min(1), // can be comma-separated
});

export const env = EnvSchema.parse(process.env);
