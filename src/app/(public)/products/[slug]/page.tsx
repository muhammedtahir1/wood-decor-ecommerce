import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import "@/styles/typography.css";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Footer from "@/components/landingpage/footer";
import AddToCartBtn from "../../../../components/add-to-cart-btn";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";

import Link from "next/link";
import { Metadata } from "next";
import BuyNowBtn from "@/components/buy-now-btn";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@prisma/client";
import ColorSelector from "./product-form";
import FormSelector from "./product-form";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const products = await prisma.product.findUnique({
    where: {
      slug,
    },
    select: {
      title: true,
    },
  });
  return {
    title: products?.title,
  };
}

type ParamsProps = {
  params: {
    slug: string;
  };
};

const page = async ({ params }: ParamsProps) => {
  const slug = params.slug;

  const product = await prisma.product.findUnique({
    where: {
      slug,
    },
  });

  if (!product) {
    notFound();
  }
  console.log(product)

  const similarProduct = await prisma.product.findMany({
    // where: {
    //   category: product.category,
    // },
    take: 4,
    select: {
      image: true,
      title: true,
      price: true,
      slug: true,
    },
  });



  return (
    <>
      <main className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16 md:mt-24 px-10">
        <section className="space-y-2">
          {/* <BreadCrumbComponent slug={product.title} /> */}
          <div className="max-w-[400px] max-h-[400px] ">
            <Image
              src={product.image}
              alt="sofa"
              width={600}
              height={600}
              className="rounded-lg "
            />
          </div>
          <div className="md:space-x-5 space-x-1 flex mx-auto">
            <Image
              src={product.image}
              alt="sofa"
              width={112}
              height={112}
              className="rounded-lg w-[80px] h-[80px] md:w-[112px] md:h-[112px]"
            />
            <Image
              src={product.image}
              alt="sofa"
              width={112}
              height={112}
              className="object-bottom grayscale-[50%] rounded-lg w-[80px] h-[80px] md:w-[112px] md:h-[112px]"
            />
            {/* add a wrapper div for perfect height */}
            <Image
              src={product.image}
              alt="sofa"
              width={112}
              height={112}
              className="object-bottom grayscale-[70%] rounded-lg w-[80px] h-[80px] md:w-[112px] md:h-[112px]"
            />
          </div>
        </section>

        <div className="flex flex-col gap-2 md:max-w-[500px]">
          <Badge
            variant={"default"}
            className="w-20 flex items-center justify-center"
          >
            {product.category}
          </Badge>
          <h1 className="text-2xl md:text-4xl capitalize font-gt">
            {product.title}
          </h1>
          {/* <p className="text-sm">9.2k Reviews</p> */}

          {product.discountedPrice && product.discountedPrice > 0 ? (
            <div className="flex items-center gap-2">
              <h3 className=" scale-90">
                <span className="font-light opacity-80 relative">
                  ₹{product.price}
                  <span className="absolute left-2 bottom-4 -rotate-12 w-20 h-[1px] bg-red-600" />
                </span>
              </h3>
              <p className="font-semibold flex gap-2 scale-105">
                ₹{product.discountedPrice}
              </p>
            </div>
          ) : (
            <h2>₹{product.price}</h2>
          )}
          <h3 className="text-sm md:text-lg">Description</h3>
          <p className="text-[15px] text-[#1a1a1a]  leading-5 max-w-lg">
            {product.description}
          </p>

          <FormSelector colors={product.colors} product={product} variants={product.variants} />

        </div>
      </main>
      {similarProduct.length > 0 && (
        <div className="flex flex-col items-center justify-center mt-16 md:mt-24 px-10 pt-10 gap-10 border-t">
          <h1>Similar products</h1>
          <section className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {similarProduct.map((product) => (
              <EachProduct key={product.slug} data={product} />
            ))}
          </section>
        </div>
      )}

      <Footer />
    </>
  );
};

// export function BreadCrumbComponent({ slug }: { slug: string }) {
//   return (
//     <Breadcrumb className="my-2">
//       <BreadcrumbList>
//         <BreadcrumbItem>
//           <BreadcrumbLink>
//             <Link href="/">Home</Link>
//           </BreadcrumbLink>
//         </BreadcrumbItem>
//         <BreadcrumbSeparator />
//         <BreadcrumbItem>
//           <BreadcrumbLink>
//             <Link href={`/products`}>Products</Link>
//           </BreadcrumbLink>
//         </BreadcrumbItem>
//         <BreadcrumbSeparator />
//         <BreadcrumbItem>
//           <BreadcrumbPage>{slug}</BreadcrumbPage>
//         </BreadcrumbItem>
//       </BreadcrumbList>
//     </Breadcrumb>
//   );
// }

export default page;

function EachProduct({
  data,
}: {
  data: {
    image: Product["image"];
    title: Product["title"];
    price: Product["price"];
    slug: Product["slug"];
  };
}) {
  const { slug, image, title, price } = data;

  return (
    <Card className="w-40 rounded-xl md:w-52  h-[260px] mx-auto bg-white/40 col-span-1 row-span-1 overflow-hidden">
      <CardHeader className="h-[64%] py-4 px-6 items-center overflow-hidden">
        <Link
          href={`/products/${slug}`}
          className="rounded-xl  mb-2 w-[150px] h-[160px] hover:scale-105 transition-all duration-300"
        >
          <Image
            className="h-full w-full object-cover rounded-lg"
            width={150}
            height={160}
            src={image}
            alt="Sofa set"
          />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="mt-3 md:mt-2">
          <h3 className="text-sm md:text-lg font-bold truncate text-wrap">
            {title}
          </h3>
          {/* <h2 className="opacity-80">
            <span className="text-xl font-semibold">Rs.</span>
            {price}
          </h2> */}
        </div>{" "}
      </CardContent>
    </Card>
  );
}
