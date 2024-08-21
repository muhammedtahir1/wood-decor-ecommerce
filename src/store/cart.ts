"use client"
import { Product } from "@prisma/client";
import { create } from "zustand";

type CartStore = {
  cartItems: Product[];
  addItemToCart: (product: any) => void;
  removeItemFromCart: (productId: Product["id"]) => void;
  updateCartItemQuantity: (productId: Product["id"], quantity: number) => void;
  clearCart: () => void;
};

const useCartStore = create<CartStore>((set) => ({
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") as string)
    : [],
  addItemToCart: (product) =>
    set((state) => ({
      cartItems: [...state.cartItems, product],
    })),
  removeItemFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    })),
  updateCartItemQuantity: (productId, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ cartItems: [] }),
}));

// Update local storage whenever cartItems change
useCartStore.subscribe((state) => {
  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
});

export default useCartStore;
