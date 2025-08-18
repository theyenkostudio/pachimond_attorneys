import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Pachimond Attorneys ",
  description: "About Pachimond Attorneys",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
