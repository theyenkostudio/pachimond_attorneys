import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Pachimond Attorneys",
  description: "Pachimond Attorneys",
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
