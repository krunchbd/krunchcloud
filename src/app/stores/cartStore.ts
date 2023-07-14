import { create } from "zustand";
import { Item } from "@prisma/client";

type CartStore = {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  clearCart: () => void;
};

const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) =>
    set((state) => ({ items: state.items.filter((i) => i !== item) })),
  clearCart: () => set({ items: [] }),
}));

export default useCartStore;
