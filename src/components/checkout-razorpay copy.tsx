"use client";
import useCartStore from "@/store/cart";
import { Button } from "./ui/button";
import { BuyNow } from "@/actions/customer.action";
import Script from "next/script";
import { createOrder, verifyOrder } from "@/actions/payments.action";
import { useState } from "react";

const CheckoutWithRazorpayAndAdmin = () => {
  const { cartItems, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);

  const processPayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const totalAmount = cartItems.reduce((acc, curr) => acc + curr.price, 0);
      const orderId = await createOrder({ amount: `${totalAmount}` });

      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: parseFloat(`${totalAmount}`) * 100,
        currency: "INR",
        name: "name", // Adjust as needed
        description: "description", // Adjust as needed
        order_id: orderId,
        handler: async function (response: any) {
          const paymentData = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await verifyOrder(paymentData);

          if (result.success) {
            alert("Payment succeeded");
          } else {
            alert(result.message);
          }
        },
        prefill: {
          name: "name",
          email: "email",
        },
        theme: {
          color: "#3399cc",
        },
      };

      let paymentObject =
        // @ts-ignore
        typeof window !== "undefined" ? new window.Razorpay(options) : null;

      paymentObject?.on("payment.failed", function (response: any) {
        alert(response.error.description);
      });

      paymentObject?.open();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <form onSubmit={processPayment}>
        <Button type="submit" className="w-full">
          Checkout
        </Button>
      </form>
    </>
  );
};

export default CheckoutWithRazorpayAndAdmin;
