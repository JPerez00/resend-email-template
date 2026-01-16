# Resend Contact Form Template

![Image](/public/resend-hero-image.png)

A simple [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/) contact form template powered by the [Resend API](https://resend.com/). Validated with [Zod](https://zod.dev/), submitted via Next.js **Server Actions**, and includes toast notifications using [Sonner](https://sonner.emilkowal.ski/).

## Live Demo

https://resend-email-template.vercel.app/

## Blog Posts

- Original post (first version): https://www.jorge-perez.dev/blog/resend-contact-form  
- Updated post (Next.js 16 + React 19 + Server Actions refactor): https://www.jorge-perez.dev/blog/resend-contact-updated

## Key Features

- Next.js 16 (App Router)
- React 19
- Resend Email API
- Server-side validation with Zod
- Form submissions using Next.js Server Actions (`useActionState`)
- Pending UI state with `useFormStatus`
- Toast notifications with Sonner
- `replyTo` set to the sender email for easy replies
- Basic spam protection via honeypot field
- Improved metadata configuration (`metadataBase`) for correct OG/Twitter previews

## Prerequisites

This template requires a Resend API key and a verified domain or sender identity:

- Create an API key: https://resend.com/api-keys
- Verify your domain: https://resend.com/domains

## Clone & Run Locally

Bootstrap this example using `create-next-app`:

```bash
npx create-next-app --example https://github.com/JPerez00/resend-email-template your-project-name-here
```

Create a `.env.local` file in the root of the project:

```bash
RESEND_API_KEY=your_resend_api_key_here
EMAIL_FROM="Your Website Name <noreply@your-domain.com>"
EMAIL_TO=your_destination_email@example.com
```

Run the dev server:

```bash
npm run dev
```

## Deploy to Vercel

When deploying to Vercel, add the same environment variables:

```bash
RESEND_API_KEY=your_resend_api_key_here
EMAIL_FROM=Your Website Name <noreply@your-domain.com>
EMAIL_TO=your_destination_email@example.com
```

### Important note about quotes

Include quotes **locally** in `.env.local`, but omit them in **Vercel Environment Variables**:

- Locally: `EMAIL_FROM="Coding SaaS <noreply@codingsaas.com>"`
- Vercel: `EMAIL_FROM=Coding SaaS <noreply@codingsaas.com>`

See Vercel deployment example below:

![Image](/public/resend-env-2.png)

## Optional: Metadata Base URL (recommended)

This template uses social preview images (Open Graph / Twitter).  
For the cleanest production previews, you can set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Locally you can use:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Start Editing

Main files you’ll care about:

- `app/components/ContactForm.tsx` (form UI)
- `app/actions.ts` (Server Action that validates and sends the email)
- `app/emails/ContactFormEmail.tsx` (email template)
- `lib/schema.ts` (Zod validation schema)
- `lib/env.server.ts` (server-only env validation)
- `app/layout.tsx` (global layout + metadata)

## Font

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter.

## Learn More

- Next.js Docs: https://nextjs.org/docs
- Resend Docs: https://resend.com/docs/introduction
- Zod Docs: https://zod.dev/

You can also check out the Next.js GitHub repo:
https://github.com/vercel/next.js/
