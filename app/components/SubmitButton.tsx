// app/components/SubmitButton.tsx
'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 inline-flex items-center rounded-lg bg-zinc-700 py-2 px-4 text-sm/6 font-semibold text-zinc-100 shadow-inner shadow-white/10 focus:outline-none hover:bg-zinc-600 focus:bg-zinc-700 focus:outline-1 focus:outline-white"
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}
