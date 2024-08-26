import ProductCard from "@/components/product-card";
import prisma from "@/lib/db";
import React from "react";

const page = async ({ params, searchParams }: any) => {
  // query to get products which include the search query
  const products = await prisma.product.findMany({
    where: {
      title: {
        contains: searchParams?.q,
        mode: "insensitive",
      },
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {searchParams?.q}
      {products.length > 0 ? (
        <div>
          {products.map((product, i) => (
            <ProductCard data={product} key={i} />
          ))}
        </div>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default page;
