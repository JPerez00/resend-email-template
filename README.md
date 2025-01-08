
# Resend Contact Form Template

![Image](/public/resend-hero-image.png)

A Simple [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/) & [Tailwind CSS](https://tailwindcss.com/) contact form template that uses the [Resend API](https://resend.com/). Styled with React-Email and built with React-Hook-Forms, validated with Zod, handles submissions with server actions, and shows toast notifications using Sonner.

## Live Demo:

[https://resend-email-template.vercel.app/](https://resend-email-template.vercel.app/)


## Main Features:

- Resend Email API
- Form built with [React-Hook-Forms](https://react-hook-form.com/)
- Styled with [React-Email](https://react.email/)
- Email validation With [Zod](https://zodjs.netlify.app/)
- Dialog Toast Notification With [Sonner](https://sonner.emilkowal.ski/)

## Prerequisites:

This template requires a Resend API key and a verified domain name. Follow the instructions below to set this up:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## Clone & Run Locally

First, execute create-next-app with npx to bootstrap the example:

```bash
npx create-next-app --example https://github.com/JPerez00/resend-email-template your-project-name-here
```

Create a `.env.local` file in the root directory of your project and add your Resend API key:

```bash
RESEND_API_KEY=your_resend_api_key_here
EMAIL_FROM="Your Website Name <noreply@your-domain.com>"
EMAIL_TO=your_destination_email@example.com
```

Then run the development server:

```bash
npm run dev
```

## Clone & Deploy

When deploying the project to Vercel, add the same environment variable to your Vercel project.

Navigate to your Vercel dashboard, select your project, go to the "Settings" tab, and then to "Environment Variables." This ensures the API key and emails are securely accessible both locally and in the deployed environment.

```bash
RESEND_API_KEY=your_resend_api_key_here
EMAIL_FROM=Your Website Name <noreply@your-domain.com>
EMAIL_TO=your_destination_email@example.com
```

#### Note:

Include the `""` in the `.env.local` file, but do not include the `""` in the `Vercel Environment Variables`, see example below:

![Image](/public/resend-env-2.png)

## Start Editing

To set up your emails, just add your Resend API key, a verified domain name, and your source and destination emails:

Previously, you had to manually edit the `from` and `to` addresses in the `app/actions.ts` file, like this:

```bash
// Make sure it matches the registered domain on Resend.com
from: 'Your Website Name <noreply@your-domain.com>',
// Your desired destination email here.
to: ['your@email.com'], 
```

Now, you can simply update these in your `.env.local` file or Vercel Variables when deploying. Your `app/actions.ts` file will now use:

```bash
from: process.env.EMAIL_FROM as string, // Fetch "from" email from environment variables
to: [process.env.EMAIL_TO as string],    // Fetch "to" email from environment variables
```

For more details on how I built this, check the blog post on my [website](https://www.jorge-perez.dev/blog/resend-contact-form)

## Font

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!