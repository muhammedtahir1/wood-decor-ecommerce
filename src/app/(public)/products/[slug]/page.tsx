import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import "@/styles/typography.css";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const product = await prisma.product.findUnique({
    where: {
      slug,
    },
  });
  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      
    </div>
  );
};

export default page;
