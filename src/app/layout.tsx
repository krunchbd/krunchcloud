import "./globals.css";
import React from "react";
import NextAuthSessionProvider from "./providers/sessionProvider";
// import { type NextPage } from "next";
// import Head from "next/head";
// import Link from "next/link";
// import { api } from "~/utils/api";
import type { Metadata } from "next";
import SignInButton from "~/components/SignInButton";

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
    <html lang="en" className=" bg-black ">
      <body className="">
        <NextAuthSessionProvider>
          <div className="flex flex-row">
            <div className="m-2 border">
              {" "}
              <SignInButton />
            </div>

            {children}
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
