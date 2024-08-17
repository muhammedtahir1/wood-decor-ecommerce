import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import "@/styles/typography.css";

const page = async ({ params }: { params: { category: string } }) => {
  const { category } = params;

  const products = await prisma.product.findMany({
    where: {
      category,
    },
  });
  if (products.length === 0) {
    return (
      <div>
        <h1>
          No products in category <span className="capitalize">{category}</span>
        </h1>
      </div>
    );
  }

  return (
    <div>
      {products.map((product, i) => (
        <div key={i}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
