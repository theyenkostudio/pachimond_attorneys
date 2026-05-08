import { QueryProvider } from "@/components/QueryProvider";
import { Toaster } from "@/components/ui/sonner";
import { SanityLive } from "@/sanity/lib/live";
import type { Metadata } from "next";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pachimond-attorneys.vercel.app";

export const metadata: Metadata = {
  title: {
    template: "%s | Pachimond Attorneys",
    default: "Pachimond Attorneys — Strategic Legal Counsel in Nigeria",
  },
  description:
    "Pachimond Attorneys provides expert legal counsel to individuals and businesses in Nigeria — litigation, corporate law, commercial law, and IP law.",
  applicationName: "Pachimond Attorneys",
  metadataBase: new URL(siteUrl),
  keywords: [
    "Pachimond Attorneys",
    "Legal Services Nigeria",
    "Law Firm Nigeria",
    "Corporate Law Nigeria",
    "Commercial Law Nigeria",
    "Litigation Nigeria",
    "IP Law Nigeria",
    "Data Protection Nigeria",
    "Legal Advice Lagos",
  ],
  authors: [{ name: "Pachimond Attorneys", url: siteUrl }],
  creator: "Pachimond Attorneys",
  publisher: "Pachimond Attorneys",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, noimageindex: false },
  },
  openGraph: {
    title: "Pachimond Attorneys — Strategic Legal Counsel in Nigeria",
    description:
      "Expert legal services in Nigeria — litigation, corporate, commercial, and IP law. Trusted by individuals and businesses.",
    url: siteUrl,
    siteName: "Pachimond Attorneys",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pachimond Attorneys",
      },
    ],
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pachimond Attorneys",
    description:
      "Trusted legal services in Nigeria — corporate law, litigation, and more.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <QueryProvider>
          <Toaster />
          {children}
          <SanityLive />
          {(await draftMode()).isEnabled && <VisualEditing />}
        </QueryProvider>
      </body>
    </html>
  );
}
