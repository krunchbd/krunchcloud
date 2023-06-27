"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import React from "react";

export default function SignInButton() {
  const session = useSession();

  console.log(session);
  if (session.status !== "authenticated")
    return (
      <div>
        <div>
          <button className="btn-primary btn" onClick={() => signIn()}>
            {" "}
            Sign In
          </button>
        </div>
      </div>
    );

  return (
    <div>
      {session.data?.user?.name}

      <button className="btn-accent btn" onClick={() => signOut()}>
        {" "}
        Sign Out
      </button>
    </div>
  );
}
