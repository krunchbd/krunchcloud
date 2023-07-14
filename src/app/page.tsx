import React from "react";
import menu_items from "../../public/menu_items.json";
import { Item } from "@prisma/client";
import Modal from "./CartModal";
import MenuContainer from "./MenuContainer";

export default async function Menu() {
  const menuItems = menu_items as unknown as Item[];

  return (
    <div>
      <MenuContainer menu_items={menuItems} />
      <div className="fixed bottom-2 right-2">
        <Modal />
      </div>
    </div>
  );
}
