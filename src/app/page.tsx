import React from "react";
import { Montserrat } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import { unknown } from "zod";
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "~/components/buttons.component";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default async function page() {
  return <div className="text-white"></div>;
}
