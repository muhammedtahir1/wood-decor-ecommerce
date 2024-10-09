import prisma from "@/lib/db";
import React from "react";

const page = async () => {
  const orders = await prisma.order.findMany({
    include: {
      orderItems: {
        include: {
          product: {
            select: {
              image: true,
              slug: true,
              title: true
            },
          },
        },
      },
    },
  });
  console.log("⭐⭐⭐⭐⭐");
  console.log(orders[2]);
  // console.log(orders[0].orderItems[0].product.image);
  return <div>page</div>;
};

export default page;
