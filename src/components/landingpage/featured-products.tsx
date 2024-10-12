import ProductCard from "../product-card";
import prisma from "@/lib/db";
import Link from "next/link";
import { searchProductByKeyword } from "@/lib/server-utils";
import { Product, Variants } from "@prisma/client";
import { ReactNode } from "react";
import { Button } from "../ui/button";

export default async function Featured({
  query,
  title,
  desc,
  seeMore = false,
}: {
  query?: string;
  seeMore?: boolean;
  title?: string;
  desc?: string;
}) {
  let products = [];

  if (!query) {
    products = await prisma.product.findMany({
      take: 4,
      where: {
        isFeatured: true,
      },
      include: {
        prices: true,
      },
    });
  } else {
    products = await searchProductByKeyword(query, 4, 0);
  }

  return (
    <section
      id="featured-products"
      className="flex flex-col items-center justify-center mt-8 md:mt-16 mb-16 md:mb-14"
    >
      <div className="text-center capitalize">
        <h1 className="text-3xl md:text-4xl uppercase">{title ? title : "Featured products"}</h1>
        <p className="text-sm md:text-base opacity-80">
          {desc ? desc : "Impressive collection for your dream home"}
        </p>
      </div>

      <div className="flex flex-wrap max-w-[1280px] gap-x-1 gap-y-3 md:gap-4 mt-8 md:mt-10 mb-4 md:mb-12 justify-center md:justify-normal">
        {products.length > 0 ? (
          products?.map((item, i) => <ProductCard key={i} data={item} />)
        ) : (
          <div>No products in category</div>
        )}
      </div>
      {seeMore && (
        <Link href={`/search?q=${query || ""}`}>
          {/* <Button className="mt-2 md:mt-2 mb-8 md:mb-14" variant={"fullRounded"}>See more ...</Button> */}
          <Button variant={"default"}>See more</Button>
        </Link>
      )}
    </section>
  );
}

const SwigglyButton = ({ children }: { children?: ReactNode }) => {
  return (
    <button
      role="link"
      className="relative underline decoration-wavy underline-offset-4 transition-colors duration-300 hover:text-gray-500 hover:underline"
    >
      {children}
    </button>
  );
};
