import React from "react";
import { Montserrat } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const Home = () => {
  return (
    <div className="h-screen">
      <p className="text-white">Cool</p>
    </div>
  );
};

export default Home;
