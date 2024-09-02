"use client"
import { getSearchProducts } from "@/actions/general.action";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { Product } from "@prisma/client";
import { ArrowLeft, CircleHelp } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const NUMBER_OF_PRODUCTS_TO_FETCH = 5
const page = async ({ params, searchParams }: any) => {
  const query = searchParams?.q

  const [offset, setOffset] = useState(NUMBER_OF_PRODUCTS_TO_FETCH)
  const productsResponse = await getSearchProducts({ query, take: NUMBER_OF_PRODUCTS_TO_FETCH })
  const [products, setProductss] = useState<Product[]>(productsResponse)

  const loadMoreUsers = async () => {
    const apiUsers = await getSearchProducts({ query, take: NUMBER_OF_PRODUCTS_TO_FETCH })
    setProductss([...products, ...apiUsers])
    setOffset(offset + NUMBER_OF_PRODUCTS_TO_FETCH)
  }
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
        <div className="flex items-center justify-center gap-10 h-[90vh] flex-col">
          <h3 className="text-center font-normal">
            No products found <CircleHelp className="inline" /> <span className="capitalize font-bold block">{`"`}{query}{`"`}</span>
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
