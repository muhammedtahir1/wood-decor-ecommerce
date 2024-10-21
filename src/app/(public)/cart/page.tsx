"use client";

import CartProduct from "@/components/cart-product";
import Heading from "@/components/landingpage/h1-style";
import { Button } from "@/components/ui/button";
import { calculateTotalPrice } from "@/lib/utils";
import useCartStore from "@/store/cart";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  const { cartItems, removeItemFromCart } = useCartStore();

  let finalTotalPrice = calculateTotalPrice(cartItems);

  return (
    <main className="mt-36 md:mt-32  md:px-10">
      
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-4 min-h-[70vh]">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">Your Cart is Empty</h1>
        <p className="text-md sm:text-lg text-gray-500 mb-6 text-center">
          Looks like you havent added anything to your cart yet.
        </p>
        <Button asChild variant={"outline"} className=" border-2 w-40">
        <Link href={"/"}>Go to Home</Link>
      </Button>
      </div>

      ) : (
        <>
          {/* <h1 className="mt-2 font-gt text-center">Your Cart</h1> */}
          <Heading text="Your Cart"/>
        <div className="flex  flex-col px-5 md:flex-row md:gap-10 md:px-10 max-w-5xl mx-auto justify-between">
          <div className="flex-1">
            {cartItems.map((item, i) => (
              <CartProduct
                item={item}
                key={i}
                removeItemFromCart={removeItemFromCart}
              />
            ))}
          </div>

          <section className="mt-10 border rounded-xl bg-white/50 px-4 py-6 ">
            <h1 className="font-bold text-2xl mb-4  font-gt">Summary</h1>
            <div className="flex items-center justify-between gap-2 mb-16">
              <div className="text-sm space-x-5 space-y-2 text-left">
                <p>Subtotal</p>
                <p className="text-sm">Estimated Delivery & Handling</p>
              </div>
              <div className="text-sm space-y-2 font-semibold text-right">
                <p>₹{finalTotalPrice}</p>
                <p>Free</p>
              </div>
            </div>

            <div className="border-t pt-4 space-y-4 p-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <p>Total</p>
                <p>₹{finalTotalPrice}</p>
              </div>
              <Link href={"/checkout"} className="flex items-centerw gap-3">
                <Button
                  className="w-full flex items-center gap-2"
                  disabled={cartItems.length === 0}
                >
                  Proceed to buy <ArrowRight size={16} className="mt-1" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
        </>
      )}
    </main>
  );
};

export default Page;
