import React from 'react'
import type { Metadata } from "next";

export const metaData: Metadata = {
  title: "Legal Notice | Pachimond Attorneys",
  description: "Legal Notice Pachimond Attorneys",
};

export default function LegalNoticeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}

