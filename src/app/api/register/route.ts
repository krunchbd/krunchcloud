import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "~/server/db";



export async function POST(req: NextRequest) {
  const user = (await req.json()) as User;

  const createdUser = await prisma.user.create({ data: { ...user } });
  const { password, ...userWithoutPass } = createdUser;

  return NextResponse.json(userWithoutPass);
}
