"use client";

import React from "react";
import { Button } from "./ui/button";
import useCartStore from "@/store/cart";
import { useRouter } from "next/navigation";
import { TCartProduct } from "@/types/cart";

const BuyNowBtn = ({ product }: { product: TCartProduct }) => {
  const { addItemToCart } = useCartStore();
  const router = useRouter();
  return (
    <Button
      variant={"fullRounded"}
      onClick={() => {
        addItemToCart(product);
        router.push("/cart");
      }}
      className="w-2/3 px-1 py-0 md:px-3 md:py-2 text-xs md:text-sm scale-90 md:scale-100"
    >
      Buy Now
    </Button>
  );
};

export default BuyNowBtn;
