import { NextApiRequest, NextApiResponse } from "next";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { authOptions } from "~/server/auth";

type nextAuthHandlerParams = {
  req: NextApiRequest;
  res: NextApiResponse;
  options: AuthOptions;
};

type nextAuthHandler = (params: nextAuthHandlerParams) => Promise<void>;

const handler = NextAuth(authOptions) as nextAuthHandler;

export { handler as GET, handler as POST };
