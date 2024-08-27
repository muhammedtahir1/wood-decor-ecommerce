"use client";
import { Button } from "@/components/ui/button";
import useCartStore, { TCartProduct } from "@/store/cart";
import { CircleCheck, TicketCheckIcon } from "lucide-react";
import React from "react";

const AddToCartBtn = ({ product }: { product: TCartProduct }) => {
  const { addItemToCart } = useCartStore();
  const [isAddingToCart, setIsAddingToCart] = React.useState(false);
  return (
    <Button
      className="flex-1 md:flex-none transition-all duration-300 px-2 py-2 text-xs md:text-sm"
      onClick={() => {
        addItemToCart(product);
        setIsAddingToCart(true);
      }}
      variant={"secondary"}
    >
      {isAddingToCart ? <span >Added <CircleCheck className="inline-block"/></span> : "Add to cart"}
    </Button>
  );
};

export default AddToCartBtn;
