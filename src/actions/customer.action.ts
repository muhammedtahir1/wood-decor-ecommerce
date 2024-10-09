"use server";

import { CustomerDataFormSchema } from "@/app/(payments)/checkout/checkout-form";
import prisma from "@/lib/db";
import { z } from "zod";
import { sendConfirmationEmail } from "./email.action";
import { calculateTotalPrice } from "@/lib/utils";
import { TCartProduct } from "@/types/cart";

const BuyNow = async (
  products: TCartProduct[],
  customerData: z.infer<typeof CustomerDataFormSchema>
) => {
  try {
    const totalAmount = calculateTotalPrice(products);

    console.log("--------------");
    console.log("Total Price", totalAmount);
    console.log("customerData", customerData);
    console.log("products", products);

    // Total Price 56500
    // customerData {
    //   name: 'Mohd faizan',
    //   email: 'mohdfaizan.zprb2@gmail.com',
    //   phone: '9379692863',
    //   address: 'Mk house',
    //   city: 'Bangalore',
    //   state: 'karnataka',
    //   zipCode: '560026'
    // }
    // products [
    //   {
    //     id: 1,
    //     image: 'https://i.pinimg.com/564x/ec/ca/67/ecca673e7a5fd64099f30da4a88e2bb8.jpg',    price: { price: 3900, variant: '3 beds' },
    //     title: 'Isadora Lounge Sofa',
    //     color: ''
    //   },
    //   {
    //     id: 5,
    //     image: 'https://i.pinimg.com/564x/63/d0/d9/63d0d99654d048bf3c5c68ea8015694a.jpg',    price: { price: 7600, variant: 'DEFAULT' },
    //     title: 'Queen Size 4 Storage Drawers Bed, Upholstered bed'
    //   },
    //   {
    //     id: 9,
    //     image: 'https://i.pinimg.com/564x/a3/a0/b8/a3a0b83353c43f10eb89e0144abb6a57.jpg',    price: { price: 45000, variant: 'DEFAULT' },
    //     title: 'Sofa with Curved Design - Left Chaise Lounge'
    //   }
    // ]

    const order = await prisma.order.create({
      data: {
        name: customerData.name,
        email: customerData.email,
        phone: customerData.phone,
        address: `${customerData.address}, ${customerData.city}, ${customerData.state}, ${customerData.zipCode}`,
        totalAmount,
        // the upper part is sorted

        orderItems: {
          create: products.map((p) => ({
            productId: p.id,
            color: p.color || undefined,
            price: p.price.discountedPrice || p.price.price,
            variant: p.price.variant || undefined,
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
                prices: true,
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
      orders: products.map((item) => ({
        title: item.title,
        price: item.price.discountedPrice || item.price.price,
        image: item.image,
      })),
    });

    return order;
  } catch (error) {
    console.log(error);
  }
};

export { BuyNow };
