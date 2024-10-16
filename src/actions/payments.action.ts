"use server";
import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { TcreateOrderProps } from "@/types/validations";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = async ({ amount, currency }: TcreateOrderProps) => {
  try {
    var options = {
      amount,
      currency: currency ? currency : "INR",
      receipt: "rcp1",
    };
    const order = await razorpay.orders.create(options);

    return { orderId: order.id, status: 200, success: true };
  } catch (error) {
    return {
      status: 500,
      success: false,
    };
  }
};

const generatedSignature = (
  razorpayOrderId: string,
  razorpayPaymentId: string
) => {
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    throw new Error(
      "Razorpay key secret is not defined in environment variables."
    );
  }
  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
};

async function verifyOrder(data: any) {
  const { orderCreationId, razorpayPaymentId, razorpaySignature } = data;
  const signature = generatedSignature(orderCreationId, razorpayPaymentId);
  if (signature !== razorpaySignature) {
    return {
      message: "payment verification failed",
      success: false,
      status: 400,
    };
  }
  return {
    message: "payment verified successfully",
    success: true,
    status: 200,
  };
}

export { createOrder, verifyOrder };
