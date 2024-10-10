import prisma from "@/lib/db";
import React from "react";
import OrdersPagination from "@/components/admin/orders-pagination";
import { TOrdersProps } from "@/types/validations";
import AdminBreadCrumbComponent from "@/components/admin/admin-breadcrumb";

const page = async () => {
  const orders = await prisma.order.findMany({
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  console.log("orders 👋👋👋");
  // console.log(orders[1].orderItems[0].product.image);
  // how to write the type for above query from prisma client
  const serializedOrders: TOrdersProps[] = JSON.parse(JSON.stringify(orders));
  // console.log(serializedOrders[0].orderItems[0].product?.image);
  return (
    <div>
      <AdminBreadCrumbComponent slug="orders" />

      <h1>Orders</h1>

      <OrdersPagination initialOrders={serializedOrders} />
    </div>
  );
};

export default page;
