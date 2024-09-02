import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
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
    <div className="flex flex-col items-center justify-center min-h-[90vh] pt-6 px-1 md:px-16 mt-20">


      {products.length > 0 ? (
        <>
          <h2 className="px-6 text-xl md:text-3xl font-normal">Showing search results for <span className="font-bold capitalize ">{searchParams?.q}</span></h2>
          <div className="px-4 grid grid-cols-2 md:grid-cols-4 max-w-[1280px] gap-x-2 gap-y-8 md:gap-6 mx-auto mt-10 md:mt-16 mb-10 md:mb-20 ">
            {products.map((product, i) => (
              <ProductCard data={product} key={i} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center gap-1 flex-col">
          <h3>
            No products found
          </h3>
          <Link href="/#featured-products">
            <Button
              className="z-10 mt-4 w-52 rounded-full"
              variant={"fullRounded"}
            >
              <ArrowLeft size={14} className="mr-2 " />
              Go back to home
            </Button>
          </Link>        
          </div>
      )}
    </div>
  );
};

export default page;
