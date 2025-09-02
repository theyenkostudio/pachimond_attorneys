import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QueryProvider } from "@/components/QueryProvider";
import { Toaster } from "@/components/ui/sonner"

const dmSans = DM_Sans({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    template: "%s | Pachimond Attorneys",
    default: "Pachimond Attorneys",
  },
  description: "Pachimond Attorneys – Trusted legal advisors in Nigeria, providing expert counsel to individuals and businesses.",
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "Pachimond Attorneys",
  creator: "Pachimond Attorneys",
  publisher: "Pachimond Attorneys",
  keywords: [
    "Pachimond Attorneys",
    "Legal Services Nigeria",
    "Law Firm Nigeria",
    "Corporate Law",
    "Commercial Law",
    "Litigation",
    "Legal Advice",
    "Nigeria Attorneys",
  ],
  authors: [
    {
      name: "Pachimond Attorneys",
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://pachimond-attorneys.vercel.app",
    },
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pachimond-attorneys.vercel.app"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "Pachimond Attorneys",
    description: "Expert legal services in Nigeria — Pachimond Attorneys provide trusted representation and counsel.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://pachimond-attorneys.vercel.app",
    siteName: "Pachimond Attorneys",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Pachimond Attorneys Logo",
      },
    ],
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pachimond Attorneys",
    description: "Trusted legal services in Nigeria — corporate law, litigation, and more.",
    images: ["/logo.png"],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" href="/favicon.ico" />

      </head>
      <body className={dmSans.className}>
        <QueryProvider>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
