"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import React from "react";

export default function SignInButton() {
  const session = useSession();
  console.log(session);
  if (session.status === "unauthenticated")
    return (
      <div>
        <div>
          <button onClick={() => signIn()}> Sign In</button>
        </div>
      </div>
    );

  return (
    <div>
      {session.data?.user?.name}
      User is signed in
      <button onClick={() => signOut()}> Sign Out</button>
    </div>
  );
}
