import Header from "@/components/landingpage/header";
import React from "react";
import { CheckoutForm } from "./checkout-form";
import CheckoutWithRazorpayAndAdmin from "@/components/checkout-razorpay";

const page = () => {

  return (
    <main className="mt-24">
      <Header />
      <h1 className="text-center my-6 mt-10">Final Step</h1>
      <section className="max-w-4xl px-5">
        <CheckoutWithRazorpayAndAdmin/>
      </section>
      
    </main>
  );
};

export default page;
