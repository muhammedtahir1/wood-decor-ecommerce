"use server";
import OrderConfirmedEmail from "@/components/emails/order-confirmed";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

type Order = {
  title: string;
  price: number;
  image: string;
};

const sendConfirmationEmail = async ({
  orders,
  finalPrice,
  name,
  email,
}: {
  orders: Order[];
  finalPrice: number;
  name: string;
  email: string;
}) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Wood Decor  <info@wooddecor.in>",
      to: [email, process.env.ADMIN_EMAIL as string],
      subject: `Order Confirmed ${name}`,
      react: OrderConfirmedEmail({ name, orders, finalPrice }),
    });

    if (error) {
      return [{ error }, { status: 500 }];
    }

    return { data };
  } catch (error) {
    return [{ error }, { status: 500 }];
  }
};

export { sendConfirmationEmail };
