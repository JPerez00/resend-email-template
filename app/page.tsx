import Image from "next/image";
import ContactForm from "../app/components/ContactForm";
import Link from "next/link";

function Pin(props: JSX.IntrinsicAttributes & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      target="_blank"
      className="mr-0.5 ml-0.5 inline-flex items-center rounded border p-1 text-sm leading-4 no-underline border-zinc-700 bg-zinc-800 text-zinc-100"
    />
  );
}

export default function Home() {
  return (
    <main className="mb-20 mt-8 md:mt-12 flex flex-1 w-full flex-col items-center justify-center text-center">
      <div className="shadow-sm font-semibold mb-6 first-letter:shadow inline-flex rounded-lg px-4 py-1 md:py-1.5 text-sm md:text-base leading-6 text-zinc-300 bg-zinc-800 ring-1 backdrop-blur ring-white/20 hover:ring-white/30">
        Email API For Developers
      </div>
      <h1 className="text-balance md:text-7xl leading-[3.4rem] md:leading-[5rem] text-5xl font-bold tracking-tighter font-gradient">
        Resend API Email Contact Form
      </h1>
      <p className="text-pretty mt-6 text-center text-zinc-300 md:text-lg leading-relaxed">
        A Simple {' '}
          <Pin href="https://nextjs.org">
            <Image
              alt="Next.js logomark"
              src="/next-logo.svg"
              className="!mr-1"
              width="14"
              height="14"
            />
            Next.js
          </Pin>
          {' '} & {' '}
          <Pin href="https://resend.com/">
            <Image
              alt="Resend logomark"
              src="/resend-icon.svg"
              className="!mr-1"
              width="14"
              height="14"
            />
            Resend API
          </Pin>
          {' '}
        contact form template. Styled with React-Email and built with React-Hook-Forms, validated with Zod, handles submissions with server actions, and shows toast notifications using <Link href="https://sonner.emilkowal.ski/" className="underline hover:text-white transition-all">Sonner</Link>.
      </p>
      <p className="text-pretty mt-4 text-center text-zinc-300 md:text-lg">
        Yout must create an API key & verify your domain. For more info, read the  <Link href="https://www.jorge-perez.dev/blog/resend-contact-form" className="underline hover:text-white transition-all">blog.</Link>
      </p>
      <hr className="my-6 border-zinc-700 w-full" />
      <div className="text-left mx-auto w-full max-w-xl">
        <ContactForm />
      </div>
    </main>
  );
}
