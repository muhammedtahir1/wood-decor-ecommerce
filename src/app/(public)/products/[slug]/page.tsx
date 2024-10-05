import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import "@/styles/typography.css";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Footer from "@/components/landingpage/footer";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@prisma/client";
import FormSelector from "./product-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClockArrowDown, EyeIcon } from "lucide-react";
import StarRating from "@/components/star-rating";
import ReviewPopup from "@/components/review-popup";
import PriceLabel from "./price-label";

type generateMetaDataProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: generateMetaDataProps): Promise<Metadata> {
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
    title: `${products?.title} - WoodDecor`,
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
    include: {
      prices: true
    }
  });

  if (!product) {
    notFound();
  }

  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  const fromdeliveryDate = new Date(year, month, date.getDate() + 7);
  const todeliveryDate = new Date(year, month, date.getDate() + 10);

  const similarProduct = await prisma.product.findMany({
    take: 4,
    select: {
      image: true,
      title: true,
      prices: true,
      slug: true,
      rating: true,
    },
  });

  // console.log(product.title.slice(0, 20), "- product.rating", product.rating);
  return (
    <>
      <main className="flex flex-col md:flex-row items-start justify-center gap-10 mt-36 md:mt-32 px-10">
        <section className=" space-y-2 md:sticky md:top-0 md:overflow-hidden md:pt-10">
          <div className="max-w-[400px] max-h-[400px] relative">
            <Image
              src={product.image}
              alt="sofa"
              width={600}
              height={600}
              className="rounded-xl"
            />
            {product.label && (
              <Badge
                className="absolute left-0 top-0 -rotate-6"
                variant={"secondary"}
              >
                {product.label}
              </Badge>
            )}
          </div>
        </section>

        <div className="flex flex-col gap-2 md:max-w-[500px] md:overflow-y-auto">
          <Badge
            variant={"default"}
            className="max-w-28 flex items-center justify-center"
          >
            {product.category}
          </Badge>
          <h1 className="text-2xl md:text-4xl capitalize font-gt">
            {product.title}
          </h1>
          <PriceLabel prices={product.prices} colors={product.colors} />
          <StarRating rating={product.rating > 3 ? product.rating : 4} />

          <h3 className="text-sm md:text-lg">Description</h3>
          <div
            className="scale-90 list-decimal -ml-5"
            dangerouslySetInnerHTML={{ __html: product.description as string }}
          />

          <Accordion type="single" collapsible className="md:w-96 w-80">
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                Colors and Designs
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-xs">
                  <li>
                    You may select the color & fabric from the mentioned codes
                    and share it with our customer services representative post
                    placing an order with your order id.
                  </li>
                  <li>
                    You may select the color & fabric from the mentioned codes
                    and add the code while placing an order on cart page under
                    &ldquo;SPECIAL SELLER INSTRUCTIONS&ldquo;
                    <Link
                      href={"https://sarom.info/catalogpdf/VELVETO.pdf"}
                      className="font-bold mx-2  text-blue-500 hover:underline"
                    >
                      Fabrics
                    </Link>
                    <Link
                      href={"https://sarom.info/catalogpdf/BENTLEY.pdf"}
                      className="font-bold mx-2 text-blue-500 hover:underline"
                    >
                      Colors
                    </Link>
                  </li>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">Warrenty</AccordionTrigger>
              <AccordionContent className="scale-90 -ml-5 ">
                <p className="mb-2">
                  The warranty begins on the purchase date and is specified on
                  the product detail page.
                </p>

                <h3 className="text-lg font-semibold mb-1">Eligibility</h3>
                <p className="mb-2">
                  Non-transferable; a valid invoice is required.
                </p>

                <h3 className="text-lg font-semibold mb-1">Exclusions</h3>
                <p className="mb-2">Does not cover:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>Normal wear and tear</li>
                  <li>Improper use or maintenance</li>
                  <li>Damage from abuse or chemicals</li>
                </ul>
                <p className="text-sm text-gray-600 mb-4">
                  Note: Variations in color may occur due to screen differences.
                </p>

                <Link
                  href="/warranty"
                  className="text-blue-500 hover:underline"
                >
                  Read more about our warranty policy
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* 
          <FormSelector
            colors={product.colors}
            product={product}
            // prices={product.prices}
            mainForm={product.prices}
          /> */}
          <div className="flex items-center gap-2">
            <ClockArrowDown size={18} />
            <p className="text-sm">
              Estimated delivery between{" "}
              <u>{fromdeliveryDate.toDateString()}</u> and{" "}
              <u>{todeliveryDate.toDateString()}</u>.
            </p>
          </div>
          {/* {product.rating > 3 && <StarRating rating={5} />} */}
          <div className="flex items-center gap-2">
            <EyeIcon size={18} />
            <p className="text-sm">
              {Math.floor(Math.random() * 20)} Persons looking for this product
            </p>
          </div>
        </div>
      </main>
      {similarProduct.length > 0 && (
        <div className="flex flex-col items-center justify-center mt-16 md:mt-24 px-10 pt-10 gap-10 border-t ">
          <h1>Similar products</h1>
          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {similarProduct.map((product) => (
              <EachProduct key={product.slug} data={product} />
            ))}
          </section>

          <Link href={`/categories/${product.category}`}>
            <Button className="mb-10 md:mb-20" variant={"fullRounded"}>
              See more ...
            </Button>
          </Link>
        </div>
      )}
      <Footer />
      <ReviewPopup />
    </>
  );
};
export default page;

function EachProduct({
  data,
}: {
  data: {
    image: Product["image"];
    title: Product["title"];
    price: Product["prices"];
    slug: Product["slug"];
    rating: Product["rating"];
  };
}) {
  const { slug, image, title, rating } = data;

  return (
    <Card className="w-[145px] rounded-xl md:w-52  h-[260px] md:h-[250px] mx-auto bg-white/40 col-span-1 row-span-1 overflow-hidden justify-normal pb-2 md:pb-4">
      <CardHeader className="h-[74%] py-0 px-6 items-center overflow-hidden ">
        <Link
          href={`/products/${slug}`}
          className="rounded-xl  mb-2 w-[200px] h-[160px] hover:scale-105 transition-all duration-300"
        >
          <Image
            className="h-full w-full object-cover rounded-lg"
            width={200}
            height={180}
            src={image}
            alt="Sofa set"
          />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="px-4 pb-2 mx-auto">
          <h3 className="text-base font-gt truncate text-wrap line-clamp-2">
            {title.trim().slice(0, 20)}
          </h3>
          <StarRating
            className="-ml-5 md:-ml-7 scale-75"
            rating={rating > 3 ? rating : 4}
          />
        </div>
      </CardContent>
    </Card>
  );
}
