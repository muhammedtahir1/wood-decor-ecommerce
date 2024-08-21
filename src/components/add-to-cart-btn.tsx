"use client";
import { Button } from "@/components/ui/button";
import useCartStore from "@/store/cart";
import { Product } from "@prisma/client";
import React from "react";

const AddToCartBtn = ({ product }: { product: Product }) => {
  const { addItemToCart } = useCartStore();

  return (
    <Button
      className="flex-1 md:flex-none"
      onClick={() => {
        addItemToCart(product);
      }}
      variant={"secondary"}
    >
      Add to cart
    </Button>
  );
};

export default AddToCartBtn;
