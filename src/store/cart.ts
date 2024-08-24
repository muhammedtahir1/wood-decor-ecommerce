"use client";
import { Product } from "@prisma/client";
import { create } from "zustand";

export type TCartProduct = Pick<Product, "id" | "title" | "price" | "image">;

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

const useCartStore = create<CartStore>((set) => ({
  cartItems: [], // Initialize cartItems as an empty array
  addItemToCart: (product) =>
    set((state) => {
      console.log(state.cartItems);
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        return {
          cartItems: [...state.cartItems],
        };
      }

      return {
        cartItems: [...state.cartItems, product],
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
  // get totalPrice from cartItems
}));

export default useCartStore;

// "use client";
// import { Product } from "@prisma/client";
// import { create } from "zustand";

// export type TCartProduct = Pick<Product, "id" | "title" | "price" | "image">;

// type CartStore = {
//   cartItems: TCartProduct[];
//   addItemToCart: (product: TCartProduct) => void;
//   removeItemFromCart: (productId: Product["id"]) => void;
//   updateCartItemQuantity: (productId: Product["id"], quantity: number) => void;
//   clearCart: () => void;
// };

// const useCartStore = create<CartStore>((set) => ({
//   cartItems:
//   localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems") as string)
//     : [],
//   addItemToCart: (product) =>
//     set((state) => ({
//       cartItems: [...state.cartItems, product],
//     })),
//   removeItemFromCart: (productId) =>
//     set((state) => ({
//       cartItems: state.cartItems.filter((item) => item.id !== productId),
//     })),
//   updateCartItemQuantity: (productId, quantity) =>
//     set((state) => ({
//       cartItems: state.cartItems.map((item) =>
//         item.id === productId ? { ...item, quantity } : item
//       ),
//     })),
//   clearCart: () => set({ cartItems: [] }),
// }));

// // Update local storage whenever cartItems change
// useCartStore.subscribe((state) => {
//   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
// });

// export default useCartStore;
