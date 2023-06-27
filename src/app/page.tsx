import React from "react";
import { Montserrat } from "next/font/google";
import SignInButton from "~/components/SignInButton";
// If loading a variable font, you don't need to specify the font weight

export default function Home() {
  return (
    <main className="text-white">
      <div>
        <SignInButton />
      </div>
    </main>
  );
}
