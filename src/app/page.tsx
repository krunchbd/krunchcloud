import React from "react";
import menu_items from "../../public/menu_items.json";
import { Item } from "@prisma/client";
import Modal from "./CartModal";
import MenuContainer from "./MenuContainer";
import SignInButton from "~/components/SignInButton";

export default function Menu() {
  const menuItems = menu_items as unknown as Item[];

  return (
    <div className=" bg-black">
      <div className="m-2 border">
        <SignInButton />
      </div>
      <div>
        <MenuContainer menu_items={menuItems} />
        <div className="fixed bottom-2 right-2">
          <Modal />
        </div>
      </div>
    </div>
  );
}
