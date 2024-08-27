import ProductCard from "@/components/product-card";
import prisma from "@/lib/db";
import { title } from "process";
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
    <div className="flex flex-col items-center justify-center min-h-screen pt-6 px-1 md:px-16 mt-20">
      <h2 className="px-6 text-3xl md:text-4xl">Showing search results for ${}</h2>
      {searchParams?.q}
      {products.length > 0 ? (
        <div className="px-4 grid grid-cols-2 md:grid-cols-4 max-w-[1280px] gap-x-2 gap-y-8 md:gap-6 mx-auto mt-10 md:mt-16 mb-10 md:mb-20 ">
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
