"use client";

import { Item } from "@prisma/client";
import React from "react";
import useCartStore from "./stores/cartStore";

export default function ItemCard(item: Item) {
  const addToCart = useCartStore((state) => state.addItem);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure></figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.price}</p>
        <div className="card-actions justify-end">
          <button onClick={() => addToCart(item)} className="btn-primary btn">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
