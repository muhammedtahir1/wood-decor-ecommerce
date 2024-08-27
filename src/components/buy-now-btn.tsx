"use client";

import React from "react";
import { Button } from "./ui/button";
import useCartStore, { TCartProduct } from "@/store/cart";
import { useRouter } from "next/navigation";

const BuyNowBtn = ({ product }: { product: TCartProduct }) => {
  const { addItemToCart } = useCartStore();
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        addItemToCart(product);
        router.push("/cart");
      }}
      className="w-full px-3 py-2 text-xs md:text-sm"
    >
      Buy Now
    </Button>
  );
};

export default BuyNowBtn;
