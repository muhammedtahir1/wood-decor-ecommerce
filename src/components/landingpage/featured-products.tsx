import ProductCard from "../product-card";
import prisma from "@/lib/db";
import { Button } from "../ui/button";
import Link from "next/link";

export default async function Featured() {
  const products = await prisma.product.findMany({
    take: 4,
    where: {
      isFeatured: true,
    },
  });

  return (
    <section
      id="featured-products"
      className="flex flex-col items-center justify-center mt-10 md:mt-20 border-b-2"
    >
      <div className="text-center capitalize">
        <h1>Featured products</h1>
        <p className="text-sm md:text-base opacity-80">Impressive collection for your dream home</p>
      </div>

      <div className="flex flex-wrap max-w-[1280px] gap-x-1 gap-y-3 md:gap-4 mt-10 md:mt-16 mb-3 md:mb-2 justify-center md:justify-normal">
        {products.map((item, i) => (
          <ProductCard key={i} data={item} />
        ))}
      </div>
      <Link href={"/search?q="}>
        <Button className="mt-5 md:mt-8 mb-10 md:mb-20" variant={"fullRounded"}>See more ...</Button>
      </Link>
    </section>
  );
}
