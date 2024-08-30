"use client";
import useCartStore from "@/store/cart";
import { Button } from "./ui/button";
import { BuyNow } from "@/actions/customer.action";
import Script from "next/script";

const CheckoutWithRazorpayAndAdmin = () => {
  const { cartItems, clearCart } = useCartStore();
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <form
        action={async () => {
          const amount = cartItems.reduce((acc, curr) => acc + curr.price, 0);

          const createOrderId = async () => {
            try {
              const response = await fetch("/api/order", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  amount: parseFloat(`${amount}`) * 100,
                }),
              });

              if (!response.ok) {
                throw new Error("Network response was not ok");
              }

              const data = await response.json();
              return data.orderId;
            } catch (error) {
              console.error(
                "There was a problem with your fetch operation:",
                error
              );
            }
          };

          try {
            const orderId: string = await createOrderId(); //✅
            const options = {
              key: process.env.RAZORPAY_KEY_ID,
              amount: parseFloat(`${amount}`) * 100,
              currency: "INR",
              name: "name", // change it accordingly
              description: "description", // change it accordingly
              order_id: orderId,
              handler: async function (response: any) {
                const data = {
                  orderCreationId: orderId,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
                };

                const result = await fetch("/api/verify", {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: { "Content-Type": "application/json" },
                });

                console.log("after successfullpayment", await result.json());

                const res = await result.json();
                if (res.isOk) alert("payment succeed");
                else {
                  alert(res.message);
                }
              },
              prefill: {
                name: "Faizan",
                email: "faizan@us.com",
              },
              theme: {
                color: "#3399cc",
              },
            };
            let paymentObject = null;
            if (typeof window !== null)
              // @ts-ignore
              paymentObject = new window.Razorpay(options);
            paymentObject.on("payment.failed", function (response: any) {
              alert(response.error.description);
            });
            paymentObject.open();
          } catch (error) {
            console.log(error);
          }
          await BuyNow(cartItems);
          clearCart();
          alert("Order placed successfully");
        }}
      >
        <Button className="w-full">Checkout</Button>
      </form>
    </>
  );
};

export default CheckoutWithRazorpayAndAdmin;
