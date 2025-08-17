import React from "react";
import type { Metadata } from "next";

export const metaData: Metadata = {
  title: "Pachimond Attorneys | About Us",
  description: "About Pachimond Attorneys",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
