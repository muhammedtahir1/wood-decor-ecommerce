"use client";
import { Button } from "@/components/ui/button";
import useCartStore from "@/store/cart";
import { TCartProduct } from "@/types/cart";
import { CircleCheck } from "lucide-react";
import React from "react";

const AddToCartBtn = ({ product }: { product: TCartProduct }) => {
  const { addItemToCart } = useCartStore();
  const [isAddingToCart, setIsAddingToCart] = React.useState(false);
  return (
    <Button
      className="flex-1 md:flex-none transition-all duration-300 px-1 py-1 md:px-4 rounded-full scale-90 md:scale-100 ml-0 md:py-4 text-xs md:text-sm bg-slate-500/20 border md:w-52 w-32"
      onClick={() => {
        addItemToCart(product);
        setIsAddingToCart(true);
      }}
      variant={"secondary"}
    >
      {isAddingToCart ? (
        <span>
          Added <CircleCheck className="inline-block" />
        </span>
      ) : (
        "Add to cart"
      )}
    </Button>
  );
};

export default AddToCartBtn;
