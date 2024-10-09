import prisma from "@/lib/db";
import React from "react";
import { AdminBreadCrumbComponent } from "../../layout";
import OrdersPagination from "@/components/admin/orders-pagination";

const page = async () => {
  const orders = await prisma.order.findMany({
    include: {
      orderItems: true,
    },
  });

  console.log(orders);
  // how to write the type for above query from prisma client

  return (
    <div>
      <AdminBreadCrumbComponent slug="orders" />

      <h1>Orders</h1>

      <OrdersPagination initialOrders={orders} />
    </div>
  );
};

export default page;
