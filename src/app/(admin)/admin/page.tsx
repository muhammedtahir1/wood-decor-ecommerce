import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import React from "react";

const page = async () => {
  // await prisma.product.create({
  //   data: {
  //     title: "product",
  //     price: 100,
  //     description: "product description",
  //     slug: "product",
  //     images: ["image1", "image2"],
  //   },
  // });
  const products = await prisma.product.findMany();
  console.log(products);
  return (
    <main>
      <header>
        <h1>Admin</h1>
        <Button>Add new</Button>
      </header>
      <section>
        {products.map((product) => (
          <div>{product.title}</div>
        ))}
      </section>
    </main>
  );
};

export default page;
