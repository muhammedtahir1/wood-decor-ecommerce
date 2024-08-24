"use server";

import prisma from "@/lib/db";
import { TCartProduct } from "@/store/cart";
import { Product } from "@prisma/client";

const BuyNow = async (products: TCartProduct[]) => {
  try {
    console.log(products);
    await prisma.order.create({
      data: {
        userId: 1,
        // products,
        totalAmount: products.reduce((acc, curr) => acc + curr.price, 0),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export { BuyNow };
