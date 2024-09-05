import ProductCard from "../product-card";
import prisma from "@/lib/db";
import { Button } from "../ui/button";
import Link from "next/link";
import { searchProductByKeyword } from "@/lib/server-utils";
import { Product } from "@prisma/client";

export default async function Featured({ query, title, desc, seeMore = false }: { query?: string, seeMore?: boolean, title?: string, desc?: string }) {

  let products = [];

  if (!query) {
    products = await prisma.product.findMany({
      take: 4,
      where: {
        isFeatured: true,
      },
    });
  }
  else {
    products = await searchProductByKeyword(query, 4, 0)
  }

  return (
    <section
      id="featured-products"
      className="flex flex-col items-center justify-center mt-10 md:mt-20 border-b-2"
    >
      <div className="text-center capitalize">
        <h1>{title ? title : "Featured products"}</h1>
        <p className="text-sm md:text-base opacity-80">{desc ? desc : "Impressive collection for your dream home"}</p>
      </div>

      <div className="flex flex-wrap max-w-[1280px] gap-x-1 gap-y-3 md:gap-4 mt-10 md:mt-16 mb-3 md:mb-2 justify-center md:justify-normal">
        {products?.map((item, i) => (
          <ProductCard key={i} data={item} />
        ))}
      </div>
      {seeMore &&
        <Link href={`/search?q=${query}`}>
          <Button className="mt-5 md:mt-8 mb-10 md:mb-20" variant={"fullRounded"}>See more ...</Button>
        </Link>
      }
    </section>
  );
}
