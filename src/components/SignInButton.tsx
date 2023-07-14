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
          <button className="btn-primary btn" onClick={() => void signIn()}>
            {" "}
            Sign In
          </button>
        </div>
      </div>
    );
  return (
    <div className="m-2 content-center items-center text-center">
      <div className="flex justify-center">
        {session.data?.user?.image && (
          <img className="rounded-full" src={session.data?.user?.image} />
        )}
      </div>
      <p>{session.data?.user?.name}</p>
      <button className="btn-accent btn" onClick={() => void signOut()}>
        Sign Out
      </button>
    </div>
  );
}
