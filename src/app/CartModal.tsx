"use client";
import React from "react";
import useCartStore from "./stores/cartStore";
import { Item } from "@prisma/client";
declare global {
  interface Window {
    my_modal_2: HTMLDialogElement;
  }
}

export default function Modal() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleRemoveFromCart = (item: Item) => {
    removeFromCart(item);
  };

  const handleClearCart = () => {
    clearCart();
  };
  return (
    <div>
      {/* Open the modal using window.my_modal_2.showModal() method */}
      <button className="btn" onClick={() => window.my_modal_2.showModal()}>
        <p className="font-bold text-white">🛒 Open Cart</p>
      </button>

      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="text-lg font-bold">Your Cart</h3>
          <div>
            {items.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      {item.name}{" "}
                      <button onClick={() => handleRemoveFromCart(item)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <button onClick={handleClearCart}>Clear Cart</button>
              </div>
            )}
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
