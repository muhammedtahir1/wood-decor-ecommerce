// @ts-nocheck
import prisma from "@/lib/db";
import React from "react";
import { AdminBreadCrumbComponent } from "../../layout";
import OrdersPagination from "./orders-pagination";

const page = async () => {
  const orders = await prisma.order.findMany({
    include: {
      orderItems: {
        include: {
          product: {
            select: {
              id: true,
              image: true, // Ensure this field exists in your Product model
              title: true, // Ensure this field exists in your Product model
              slug: true,   // Ensure this field exists in your Product model
              price: true
            }
          }
        }
      }
    }
  });

  // how to write the type for above query from prisma client



  return (
    <div >
      <AdminBreadCrumbComponent slug="orders" />

      <h1>Orders</h1>

      
      <OrdersPagination initialOrders={orders} />

    </div>
  );
};

export default page;
