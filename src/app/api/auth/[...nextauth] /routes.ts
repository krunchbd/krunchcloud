import { authOptions } from "~/server/auth";

import NextAuth from "next-auth/next";

type NextAuthHandler = (options: typeof authOptions) => Promise<void>;

const handler: NextAuthHandler = NextAuth(authOptions) as NextAuthHandler;

export { handler as GET, handler as POST };
