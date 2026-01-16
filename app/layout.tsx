import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../app/Providers";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

// Use Vercel URL in production, fallback to localhost in dev
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Resend Contact Form Template",
  description: "A Simple Next.js Contact Form Template Using The Resend API",
  openGraph: {
    title: "Resend Contact Form Template",
    description: "A Simple Next.js Contact Form Template Using The Resend API",
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
    description: "A Simple Next.js Contact Form Template Using The Resend API",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cx(inter.className)} suppressHydrationWarning>
      <body className="text-white bg-linear-to-b from-zinc-900 to-black antialiased max-w-2xl mx-4 mt-8 lg:mx-auto">
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
