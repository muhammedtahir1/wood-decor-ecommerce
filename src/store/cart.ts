"use client";
import { Product } from "@prisma/client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type TCartProduct = Pick<Product, "id" | "title" | "price" | "image"> & {
  variant?: string;
  color?: string;
};

type CartStore = {
  cartItems: TCartProduct[];
  addItemToCart: (product: TCartProduct) => void;
  removeItemFromCart: (productId: TCartProduct["id"]) => void;
  updateCartItemQuantity: (
    productId: TCartProduct["id"],
    quantity: number
  ) => void;
  clearCart: () => void;
};

const isServer = typeof window === "undefined";

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],
      addItemToCart: (product) =>
        set((state) => {
          const existingProduct = state.cartItems.find(
            (item) => item.id === product.id
          );
          if (existingProduct) {
            return { cartItems: [...state.cartItems] };
          }
          return {
            cartItems: [
              ...state.cartItems,
              {
                id: product.id,
                image: product.image,
                price: product.price,
                title: product.title,
                color: product.color,
                variant: product.variant,
              },
            ],
          };
        }),
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
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => ({
        getItem: (name) => {
          if (isServer) return null;
          return localStorage.getItem(name);
        },
        setItem: (name, value) => {
          if (!isServer) {
            localStorage.setItem(name, value);
          }
        },
        removeItem: (name) => {
          if (!isServer) {
            localStorage.removeItem(name);
          }
        },
      })),
    }
  )
);

export default useCartStore;
