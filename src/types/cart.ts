import { Product } from "@prisma/client";

export type TCartProduct = Pick<Product, "id" | "title" | "image"> & {
  color?: string;
  price: {
    variant: string;
    price: number;
    discountedPrice?: number;
  };
};

/*
  {
    id: "",
    title: "", 
    image: "",
    color: "",
    price: {
      variant: ""
      price: 0
    }
  }
  */

export type CartStore = {
  cartItems: TCartProduct[];
  addItemToCart: (product: TCartProduct) => void;
  removeItemFromCart: (productId: TCartProduct["id"]) => void;
  updateCartItemQuantity: (
    productId: TCartProduct["id"],
    quantity: number
  ) => void;
  clearCart: () => void;
};
