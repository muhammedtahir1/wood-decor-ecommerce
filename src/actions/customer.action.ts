"use server";

import { CustomerDataFormSchema } from "@/app/(payments)/checkout/checkout-form";
import prisma from "@/lib/db";
import { TCartProduct } from "@/store/cart";
import { z } from "zod";
import { sendConfirmationEmail } from "./email.action";

const BuyNow = async (
  products: TCartProduct[],
  customerData: z.infer<typeof CustomerDataFormSchema>
) => {
  try {
    const order = await prisma.order.create({
      data: {
        name: customerData.name,
        email: customerData.email,
        phone: customerData.phone,
        address: `${customerData.address}, ${customerData.city}, ${customerData.state}, ${customerData.zipCode}`,
        totalAmount: products.reduce(
          (total, product) => total + product.price,
          0
        ),
        orderItems: {
          create: products.map((product) => ({
            productId: product.id,
            quantity: 1, // Assuming quantity is 1, adjust if needed
            color: product.color ? product.color : "", // Add actual color if available
            variant: product.variant ? product.variant : "", // Add actual variant if available
          })),
        },
      },
      include: {
        orderItems: {
          include: {
            product: {
              select: {
                id: true,
                image: true,
                title: true,
                slug: true,
                price: true,
              },
            },
          },
        },
      },
    });

    console.log(
      "order---->",
      order.orderItems.map((item) => item.productId)
    );

    await sendConfirmationEmail({
      finalPrice: order.totalAmount,
      name: order.name,
      orders: order.orderItems.map((item) => ({
        title: item.product.title,
        price: item.product.price,
        image: item.product.image,
      })),
    });

    return order;
  } catch (error) {
    console.log(error);
  }
};

export { BuyNow };
