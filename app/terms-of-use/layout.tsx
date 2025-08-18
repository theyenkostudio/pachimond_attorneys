import React from 'react'
import type { Metadata } from "next";

export const metaData: Metadata = {
  title: "Terms of use | Pachimond Attorneys",
  description: "Terms of use Pachimond Attorneys",
};

export default function TermsOfUseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}

