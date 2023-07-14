import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { Prisma, type User } from "@prisma/client";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./db";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),

  providers: [
    // CredentialsProvider({
    //   name: "Email",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "email",
    //       placeholder: "example@example.com",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     const user = (await fetch("/api/checkauth").then((res) =>
    //       res.json()
    //     )) as User;
    //     return user;
    //   },
    // }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};
