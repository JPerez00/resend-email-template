// app/actions.ts
'use server';

import 'server-only';
import React from 'react';
import { headers } from 'next/headers';
import { Resend } from 'resend';

import { ContactFormSchema } from '@/lib/schema';
import type { ContactFormState } from '@/lib/contact';
import { env } from '@/lib/env.server';
import ContactFormEmail from '@/app/emails/ContactFormEmail';

const resend = new Resend(env.RESEND_API_KEY);

function parseEmailToList(value: string) {
  return value
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function sendEmail(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Honeypot spam trap (bots often fill every field)
  const website = formData.get('website');
  if (typeof website === 'string' && website.trim().length > 0) {
    return { ok: true, message: 'Thanks!' };
  }

  const parsed = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    return {
      ok: false,
      message: 'Please fix the highlighted fields.',
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = parsed.data;

  const ip =
    (await headers()).get('x-forwarded-for')?.split(',')[0]?.trim() ??
    (await headers()).get('x-real-ip') ??
    'unknown';

  try {
    await resend.emails.send({
      from: env.EMAIL_FROM,
      to: parseEmailToList(env.EMAIL_TO),
      subject: `New message from ${name}`,
      replyTo: email, // supported by Resend :contentReference[oaicite:14]{index=14}
      text: `Name: ${name}\nEmail: ${email}\n\n${message}\n\nIP: ${ip}`,
      react: React.createElement(ContactFormEmail, { name, email, message }),
    });

    return { ok: true, message: 'Message sent. Thanks!' };
  } catch (err) {
    console.error('Resend send failed:', err);
    return { ok: false, message: 'Something went wrong sending your message. Please try again.' };
  }
}
