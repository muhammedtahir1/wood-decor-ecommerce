"use client";
import { useState, useTransition } from "react";
import Script from "next/script";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { Button } from "./ui/button";
import useCartStore from "@/store/cart";
import { BuyNow } from "@/actions/customer.action";
import {
  CheckoutForm,
  CustomerDataFormSchema,
} from "@/app/(payments)/checkout/checkout-form";
import { z } from "zod";
import { redirect, useRouter } from "next/navigation";
import { calculateTotalPrice } from "@/lib/utils";

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface VerificationData {
  orderCreationId: string;
  razorpayPaymentId: string;
  razorpayOrderId: string;
  razorpaySignature: string;
}

const CheckoutWithRazorpayAndAdmin: React.FC = () => {
  const { cartItems, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [buyNowLoading, setBuyNowLoading] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const createOrderId = async (amount: number): Promise<string> => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100 }),
      });

      if (!response.ok) {
        throw new Error("Failed to create Razorpay order ID");
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      console.error("Error creating order ID:", error);
      toast.error("Failed to initiate checkout. Please try again.");
      throw error;
    }
  };

  const verifyPayment = async (data: VerificationData): Promise<boolean> => {
    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Payment verification failed");
      }

      const result = await response.json();
      return result.isOk;
    } catch (error) {
      console.error("Error verifying payment:", error);
      toast.error("Payment verification failed. Please contact support.");
      return false;
    }
  };

  const handlePayment = async (
    customerData: z.infer<typeof CustomerDataFormSchema>
  ) => {
    setLoading(true);
    // const amount = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    const amount = calculateTotalPrice(cartItems);

    try {
      startTransition(async () => {
        const orderId = await createOrderId(amount);

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: amount * 100,
          currency: "INR",
          name: "Wood Decor",
          description: "Product Purchase",
          order_id: orderId,
          handler: async (response: RazorpayResponse) => {
            const verificationData: VerificationData = {
              orderCreationId: orderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };

            const isVerified = await verifyPayment(verificationData);

            if (isVerified) {
              setBuyNowLoading(true);
              try {
                const res = await BuyNow(cartItems, customerData);
                if (res) {
                  toast.success("Payment successful!");
                  clearCart();
                  router.push("/success");
                }
              } catch (error) {
                console.error("Error in BuyNow action:", error);
                toast.error("Error processing your order. Please try again.");
              } finally {
                setBuyNowLoading(false);
              }
            } else {
              toast.error(
                "Payment verification failed. Please contact support."
              );
              router.push("/failed");
            }
          },
          prefill: {
            name: customerData.name,
            email: customerData.email,
            contact: customerData.phone,
          },
          notes: {
            address: customerData.address,
          },
          theme: {
            color: "#FAFAF1",
          },
        };

        const paymentObject = new (window as any).Razorpay(options);
        paymentObject.on("payment.failed", (response: any) => {
          toast.error(`Payment failed: ${response.error.description}`);
        });
        paymentObject.open();
      });
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Checkout failed. Please try again.");
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

        {buyNowLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg flex items-center">
              <LoaderCircle className="animate-spin mr-2" />
              <span>Processing your order...</span>
            </div>
          </div>
        )}

      <div className="w-full">
        <CheckoutForm
          action={handlePayment}
          loading={loading || buyNowLoading}
        />
      </div>

    </>
  );
};

export default CheckoutWithRazorpayAndAdmin;
