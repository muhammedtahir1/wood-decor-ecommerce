import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import "@/styles/typography.css";
import Image from "next/image";
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
import Link from "next/link";
import { Metadata } from "next";

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
          <h1 className="text-4xl capitalize tracking-tight font-gt">
            {product.title}
          </h1>
          {/* <p className="text-sm">9.2k Reviews</p> */}
          {product.discountedPrice ? (
            <h2>
              <span className="font-light text-xl line-through">
                ${product.price}
              </span>{" "}
              ${product.discountedPrice}
            </h2>
          ) : (
            <h2>₹{product.price}</h2>
          )}
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
            <AddToCartBtn product={product} />
          </div>
        </div>
      </main>
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
