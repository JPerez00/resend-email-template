
# Resend Contact Form Template

![Image](/public/resend-hero-image.png)

A Simple [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/) & [Tailwind CSS](https://tailwindcss.com/) contact form template that uses the [Resend API](https://resend.com/). Styled with React-Email and built with React-Hook-Forms, validated with Zod, handles submissions with server actions, and shows toast notifications using Sonner.

## Live Demo (Needs an API Key):

[https://resend-email-template.vercel.app/](https://resend-email-template.vercel.app/)


## Main Features:

- Form built with [React-Hook-Forms](https://react-hook-form.com/)
- Styled with [React-Email](https://react.email/)
- Email validation With [Zod](https://zodjs.netlify.app/)
- Dialog Toast Notification With [Sonner](https://sonner.emilkowal.ski/)

## Prerequisites:

This template requires a Resend API key and a verified domain name. Follow the instructions below to set this up:

- [Create an API key]((https://resend.com/api-keys))
- [Verify your domain](https://resend.com/domains)

## Clone & Run Locally

First, execute create-next-app with npx to bootstrap the example:

```bash
npx create-next-app --example https://github.com/JPerez00/resend-email-template your-project-name-here
```

Create a `.env.local` file in the root directory of your project and add your Resend API key:

```bash
RESEND_API_KEY=your-resend-api-key-here
```

Then run the development server:

```bash
npm run dev
```

## Clone & Deploy

When deploying the project to Vercel, add the same environment variable to your Vercel project.

Navigate to your Vercel dashboard, select your project, go to the "Settings" tab, and then to "Environment Variables."

Add RESEND_API_KEY as the key and your Resend API key as the value. This ensures the API key is securely accessible both locally and in the deployed environment.

```bash
RESEND_API_KEY=your-resend-api-key-here
```

## Start Editing

In adition to adding your Resend API key and a verified domain name, you must add your source and destination email:

- Edit the `from` and `to` in the `app/actions.ts` file. Example below:

```bash
// Make sure it matches the registered domain on Resend.com
from: 'Your Website <noreply@your-domain.com>',
// Your desired destination email here.
to: ['your@email.com'], 
```

For more details on how I built this, check the blog post on my [website](https://www.jorge-perez.dev/blog/resend-contact-form)

## Font

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!