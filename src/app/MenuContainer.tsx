import { Item } from "@prisma/client";
import React from "react";
import ItemCard from "./ItemCard";

export default function MenuContainer({ menu_items }: { menu_items: Item[] }) {
  return (
    <div className="flex flex-row flex-wrap">
      {menu_items.map((item, indx) => (
        <div key={indx} className="p-4">
          <ItemCard {...item} />
        </div>
      ))}
    </div>
  );
}
