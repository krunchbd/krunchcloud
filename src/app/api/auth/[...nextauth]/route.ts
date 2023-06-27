import { authOptions } from "~/server/auth";

import NextAuth from "next-auth/next";

type nextAuthHandler = () => Promise<void>;

const handler: nextAuthHandler = NextAuth(authOptions) as nextAuthHandler;

export { handler as GET, handler as POST };
