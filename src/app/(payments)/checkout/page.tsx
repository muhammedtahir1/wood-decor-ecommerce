import Header from "@/components/landingpage/header";
import React from "react";
import { CheckoutForm } from "./checkout-form";
import CheckoutWithRazorpayAndAdmin from "@/components/checkout-razorpay";

const page = () => {

  return (
    <main className="mt-24">
      <Header />
      <h1 className="text-center my-6 mt-36">Delivery Details</h1>
      <section className="max-w-2xl px-5 mx-auto py-5">
        <CheckoutWithRazorpayAndAdmin />
      </section>

    </main>
  );
};

export default page;
