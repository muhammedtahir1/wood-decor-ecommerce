import prisma from "@/lib/db";
import React from "react";
import { AdminBreadCrumbComponent } from "../../layout";
import AdminProductsPagination from "../../admin-products-pagination";

const page = async () => {
  const products = await prisma.product.findMany();
  // console.log(products);
  return (
    <main>
      <section className="max-w-5xl mx-auto">
        <AdminBreadCrumbComponent slug="Products" />
        <h1 className="mt-2">All Products</h1>
        {/* Write typography css file to maintain typo consistency */}

        <AdminProductsPagination initialProducts={products} />


      </section>
    </main>
  );
};

export default page;
