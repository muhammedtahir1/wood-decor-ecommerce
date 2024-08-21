import prisma from "@/lib/db";
import React from "react";

const page = async() => {

  const products = await prisma.product.findMany();
  return <div>page</div>;
};

export default page;
