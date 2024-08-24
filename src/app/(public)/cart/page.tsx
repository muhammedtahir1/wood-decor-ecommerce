"use client";
import { BuyNow } from "@/actions/customer.action";
import CartProduct from "@/components/cart-product";
import { Button } from "@/components/ui/button";
import useCartStore from "@/store/cart";
import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  
  const { cartItems, removeItemFromCart, clearCart } = useCartStore();
  return (
    <main className="mt-20 md:px-10">
      <h1 className="my-2 ml-10 font-gt">Cart</h1>
      <div className="flex flex-col px-5 md:flex-row md:px-10 w-full justify-between">
        <div className="">
          {cartItems.map((item, i) => (
            <CartProduct item={item} key={i} />
            // <div key={item.id} className="flex border mb-2 w-96 px-2">
            //   <Image
            //     alt={item.title}
            //     className="object-cover size-[100px] rounded-md"
            //     src={item.image}
            //     width={100}
            //     height={100}
            //   />
            //   <div>
            //     <h4>{item.title}</h4>
            //     <p>{item.price}</p>
            //     <Button
            //       onClick={() => {
            //         removeItemFromCart(item.id);
            //       }}
            //       variant={"destructive"}
            //       size={"icon"}
            //     >
            //       <Trash size={16} />
            //     </Button>
            //   </div>
            // </div>
          ))}
        </div>

        <section className="mt-10 border rounded-xl bg-white/80 min-h-screen px-4 py-6">
          <h1 className="font-bold text-2xl mb-4  font-gt">Summary</h1>
          <div className="flex items-center justify-between mb-16">
            <div className="text-sm space-y-2">
              <p>Subtotal</p>
              <p>Estimated Delivery & Handling</p>
              <p>Estimated Taxes</p>
            </div>
            <div className="text-sm space-y-2 font-semibold">
              <p>$191.00</p>
              <p>Free</p>
              <p>$21.00</p>
            </div>
          </div>

          <div className="border-t pt-4 space-y-4">
            <div className="flex items-center justify-between text-lg font-semibold">
              <p>Total</p>
              <p>$212.00</p>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant={"secondary"} className=" rounded-full text-sm">
                Checkout Now
              </Button>
              <Button className=" rounded-full">Pay</Button>
            </div>
          </div>
        </section>
      </div>
      {/* <form
        action={async () => {
          await BuyNow(cartItems);
          clearCart();
          alert("Order placed successfully");
        }}
      >
        <Button className="w-full">Checkout</Button>
      </form> */}
    </main>
  );
};

export default Page;
