import React from "react";
// import { type NextPage } from "next";
// import Head from "next/head";
// import Link from "next/link";
// import { api } from "~/utils/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Krunch Cloud",
  description: "Krunch's Official Website",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" ">
      <body className="h-screen bg-yellow-300">{children}</body>
    </html>
  );
}
