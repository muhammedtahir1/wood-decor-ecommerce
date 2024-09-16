import prisma from "@/lib/db";
import React from "react";
import { AdminBreadCrumbComponent } from "../../layout";
import AdminProductsPagination from "../../admin-products-pagination";
import { validateUrl } from "@/lib/utils";

const page = async () => {
  console.log(validateUrl('https://utfs.io/f/2e1b285a-804f-443b-b1b9-bbea6deda5c5-r016zg.jpg'))
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
