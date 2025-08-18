import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pachimond Attorneys",
  description: "About Pachimond Attorneys",
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}

