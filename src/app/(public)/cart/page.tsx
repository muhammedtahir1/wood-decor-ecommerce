"use client";
import { BuyNow } from "@/actions/customer.action";
import CartProduct from "@/components/cart-product";
import CheckoutWithRazorpayAndAdmin from "@/components/checkout-razorpay";
import { Button } from "@/components/ui/button";
import useCartStore, { TCartProduct } from "@/store/cart";
import React from "react";

const Page = () => {
  function calculateTotalPrice(products: TCartProduct[]) {
    let totalPrice = 0;
    for (const product of products) {
      totalPrice += product.price;
    }
    return totalPrice;
  }
  const { cartItems, clearCart, removeItemFromCart } = useCartStore();
  return (
    <main className="mt-28 md:mt-32 md:px-10">
      <h1 className="my-2 ml-10 font-gt">Cart</h1>
      <div className="flex flex-col px-5 md:flex-row md:px-10 w-full justify-between">
        <div className="">
          {cartItems.map((item, i) => (
            <CartProduct item={item} key={i} removeItemFromCart={removeItemFromCart} />
          ))}
        </div>

        <section className="mt-10 border rounded-xl bg-white/80 min-h-screen px-4 py-6 ">
          <h1 className="font-bold text-2xl mb-4  font-gt">Summary</h1>
          <div className="flex items-center justify-between gap-2 mb-16">
            <div className="text-sm space-x-5 space-y-2">
              <p>Subtotal</p>
              <p className="text-sm">Estimated Delivery & Handling</p>
              {/* <p>Estimated Taxes</p> */}
            </div>
            <div className="text-sm space-y-2 font-semibold">
              <p>₹{calculateTotalPrice(cartItems)}</p>
              <p>Free</p>
              {/* <p>₹21.00</p> */}
            </div>
          </div>

          <div className="border-t pt-4 space-y-4">
            <div className="flex items-center justify-between text-lg font-semibold">
              <p>Total</p>
              <p>₹{calculateTotalPrice(cartItems)}</p>
            </div>
            <div className="flex flex-col gap-3">
              {/* <Button variant={"secondary"} className=" rounded-full text-sm">
                Checkout Now
              </Button> */}
              <CheckoutWithRazorpayAndAdmin/>
              {/* <Button className=" rounded-full">Pay</Button> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
