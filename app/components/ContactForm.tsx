// app/components/ContactForm.tsx
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

import { sendEmail } from '@/app/actions';
import type { ContactFormState } from '@/lib/contact';
import { SubmitButton } from '../components/SubmitButton';

const initialState: ContactFormState = { ok: false };

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, formAction] = useActionState(sendEmail, initialState);

  useEffect(() => {
    if (!state?.message) return;

    if (state.ok) {
      toast.success(state.message);
      formRef.current?.reset();
    } else {
      toast.error(state.message);
    }
  }, [state?.ok, state?.message]);

  const nameErr = state.fieldErrors?.name?.[0];
  const emailErr = state.fieldErrors?.email?.[0];
  const messageErr = state.fieldErrors?.message?.[0];

  return (
    <form ref={formRef} action={formAction} className="mx-auto flex flex-1 flex-col max-w-2xl px-2">
      {/* Honeypot field */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-zinc-200 font-medium">Name:</label>
          <input
            id="name"
            name="name"
            placeholder="John Snow"
            className="w-full rounded-lg px-3 py-2 mt-2 border border-zinc-600 hover:border-zinc-500 placeholder:text-zinc-600 bg-zinc-900"
            aria-invalid={Boolean(nameErr)}
          />
          {nameErr && <p className="ml-1 mt-1 text-sm text-red-400">{nameErr}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-zinc-100 font-medium">Email:</label>
          <input
            id="email"
            name="email"
            placeholder="john@thenorth.com"
            type="email"
            className="w-full rounded-lg px-3 py-2 mt-2 border border-zinc-600 hover:border-zinc-500 placeholder:text-zinc-600 bg-zinc-900"
            aria-invalid={Boolean(emailErr)}
          />
          {emailErr && <p className="ml-1 mt-1 text-sm text-red-400">{emailErr}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-zinc-100 font-medium">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="I know nothing."
            className="min-h-25 mx-auto w-full rounded-lg px-3 py-2 mt-2 border border-zinc-600 hover:border-zinc-500 placeholder:text-zinc-600 bg-zinc-900"
            aria-invalid={Boolean(messageErr)}
          />
          {messageErr && <p className="ml-1 text-sm text-red-400">{messageErr}</p>}
        </div>

        <div className="flex space-x-4 justify-start">
          <SubmitButton />
          <button
            className="mt-2 inline-flex items-center rounded-lg bg-zinc-700 py-2 px-4 text-sm/6 font-semibold text-zinc-100 shadow-inner shadow-white/10 focus:outline-none hover:bg-zinc-600 focus:bg-zinc-700 focus:outline-1 focus:outline-white"
            type="reset"
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  );
}
