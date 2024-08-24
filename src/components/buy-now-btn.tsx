"use client";
import React from "react";
import { Button } from "./ui/button";
import useCartStore, { TCartProduct } from "@/store/cart";
import { Product } from "@prisma/client";
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
      className="w-full"
    >
      Buy Now
    </Button>
  );
};

export default BuyNowBtn;