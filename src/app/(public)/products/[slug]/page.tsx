import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import "@/styles/typography.css";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // const product = await prisma.product.findUnique({
  //   where: {
  //     slug,
  //   },
  // });
  // if (!product) {
  //   notFound();
  // }

  return (
    <main className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16 px-10">
      {/* <h1>{product.title}</h1>
      <p>{product.price}</p> */}

      <div className="">
        <Image
          src={
            "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="sofa"
          width={600}
          height={600}
          className="rounded-lg "
        />
      </div>

      <div className="flex flex-col gap-2">
        <p>
          <Badge variant={"outline"}>Category Sofa</Badge>
        </p>
        <h1 className="text-4xl capitalize tracking-tight">Axis 2-seat sofa</h1>
        <p className="text-sm">9.2k Reviews</p>
        <h2 >
          <span className="font-light text-xl line-through">$650</span> $800
        </h2>
        <h3 className="text-lg ">Description</h3>
        <p className="text-sm font-light leading-4 max-w-lg">
          Bring Axis home and watch life revolve around it. This 2-seat sofa
          offers exceptional durability for family rooms and casual living
          rooms, featuring track arms that <span>Read more...</span>
        </p>
        <p className="text-base mt-2 tracking-tight capitalize">
          3 Color Available
        </p>
        <div className="flex gap-1">
          <div className="h-6 w-6 rounded-full border-2 bg-slate-600"></div>
          <div className="h-6 w-6 rounded-full border-2 bg-cyan-600"></div>
          <div className="h-6 w-6 rounded-full border-2 bg-lime-500"></div>
        </div>
        <div className="flex gap-x-4 mt-4">
          <Button className="md:w-80 flex-1 md:flex-none">Buy Now</Button>
          <Button className="flex-1 md:flex-none" variant={"secondary"}>
            Add to cart
          </Button>
        </div>
      </div>
    </main>
  );
};

export default page;
