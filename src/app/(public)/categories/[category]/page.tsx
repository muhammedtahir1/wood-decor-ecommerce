import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import "@/styles/typography.css";
import Footer from "@/components/landingpage/footer";
import ProductCard from "@/components/product-card";
import { ArrowLeft, CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = async ({ params }: { params: { category: string } }) => {
  let { category } = params;
  const INITIAL_NUMBER_OF_USERS = 6

  category = decodeURIComponent(category)
  // console.log(category)
  const products = await prisma.product.findMany({
    where: {
      category,
    },
    take: 10
  });
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-10 h-[90vh]">
        <h3 className="text-center font-normal">
          No products in category <CircleHelp className="inline" /> <span className="capitalize block font-bold">{`"`}{category}{`"`}</span>
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
    );
  }

  return (
    <main className=" pt-6 border-b-2 ">
      <div className="px-8 md:px-16 mt-20">
        <h1 className="text-3xl md:text-4xl">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        <p className="text-xs md:text-sm opacity-85 md:max-w-[500px] mt-3">
          Wood Decor sofas are just what you need for awesome body support and a
          gorgeous living room aesthetic. Here in Wood Decor furniture range,
          you can find the comfort you need.
        </p>
      </div>

      <div className="px-4 grid grid-cols-2 md:grid-cols-4 max-w-[1280px] gap-x-2 gap-y-8 md:gap-6 mx-auto mt-10 md:mt-16 mb-10 md:mb-20 ">
        {products.map((item, i) => (
          <ProductCard data={item} key={i} />
        ))}
      </div>
      {/* TODO🔥:ADD INFINITE Scroll in this */}
      <Footer />
    </main>
  );
};

export default page;
