import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../app/Providers";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resend Contact Form Template",
  description:
    "A Simple Next.js Contact Form Template Using The Resend API",
  openGraph: {
    title: "Resend Contact Form Template",
    description:
      "A Simple Next.js Contact Form Template Using The Resend API",
    url: "https://resend-email-template.vercel.app/", 
    siteName: "Resend Contact Form Template",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resend Contact Form Template",
    description:
      "A Simple Next.js Contact Form Template Using The Resend API",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
    lang="en"
    className={cx(inter.className)}
    suppressHydrationWarning
    >
    <body className="text-white bg-zinc-950 antialiased max-w-2xl mx-4 mt-8 lg:mx-auto">
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <Navbar />
        <Providers>{children}</Providers>
      </main>
      <Analytics />
      <Footer />
    </body>
    </html>
  );
}