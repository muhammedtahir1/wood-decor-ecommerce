"use client";
import { BuyNow } from "@/actions/customer.action";
import { Button } from "@/components/ui/button";
import useCartStore from "@/store/cart";
import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  const { cartItems, removeItemFromCart, clearCart } = useCartStore();
  return (
    <main className="mt-20">
      <h1>Cart</h1>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="flex border mb-2 w-96 px-2">
            <Image
              alt={item.title}
              className="object-cover size-[100px] rounded-md"
              src={item.images[0]}
              width={100}
              height={100}
            />
            <div>
              <h4>{item.title}</h4>
              <p>{item.price}</p>
              <Button
                onClick={() => {
                  removeItemFromCart(item.id);
                }}
                variant={"destructive"}
                size={"icon"}
              >
                <Trash size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <form
        action={async () => {
          await BuyNow(cartItems);
          clearCart();
          alert("Order placed successfully");
        }}
      >
        <Button className="w-full">Checkout</Button>
      </form>
    </main>
  );
};

export default page;
