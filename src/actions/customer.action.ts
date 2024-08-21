"use server";

import prisma from "@/lib/db";
import { Product } from "@prisma/client";

const BuyNow = async (products: Product[]) => {
  try {
    console.log(products);
    await prisma.order.create({
      data: {
        userId: 1,
        totalAmount: products.reduce((acc, curr) => acc + curr.price, 0),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export { BuyNow };
