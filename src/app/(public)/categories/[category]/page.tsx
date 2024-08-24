import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import "@/styles/typography.css";
import Footer from "@/components/landingpage/footer";
import ProductCard from "@/components/product-card";

const page = async ({ params }: { params: { category: string } }) => {
  const { category } = params;

  const products = await prisma.product.findMany({
    where: {
      category,
    },
  });
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1>
          No products in category <span className="capitalize">{category}</span>
        </h1>
      </div>
    );
  }

  return (
    <main className=" py-6 border-b-2 ">
      <div className="px-10 md:px-32 mt-16">
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        <p className="text-sm opacity-85 md:max-w-[500px] mt-3">
          Wood Decor sofas are just what you need for awesome body support and a
          gorgeous living room aesthetic. Here in Wood Decor furniture range,
          you can find the comfort you need.
        </p>
      </div>

      <div className="flex flex-wrap max-w-[1280px] gap-6 mx-auto mt-10 md:mt-16 mb-10 md:mb-20 ">
        {products.map((item, i) => (
          <ProductCard data={item} key={i} />
        ))}
      </div>

      <Footer />
    </main>
  );
};

export default page;
