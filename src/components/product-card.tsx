import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Product } from "@prisma/client";
import AddToCartBtn from "./add-to-cart-btn";
import BuyNowBtn from "./buy-now-btn";

export default function ProductCard({ data }: { data: Product }) {
  const {
    category,
    colors,
    description,
    discountedPrice,
    id,
    image,
    label,
    price,
    slug,
    title,
  } = data;

  console.log(`/products/${slug}`);

  return (
    <Card className="w-40 rounded-xl md:w-72 h-[300px]  md:h-[460px] mx-1  bg-white/40 ">
      <CardHeader className="h-[50%] md:h-[60%] overflow-hidden p-0">
        <Link
          href={`/products/${slug}`}
          className="rounded-xl md:mb-2 w-[160px] h-[150px] md:w-[270px] md:h-[260px] hover:scale-105 transition-all duration-300"
        >
          <Image
            className="h-full w-full object-contain rounded-t-xl"
            width={270}
            height={260}
            src={image}
            alt="Sofa set"
          />
        </Link>
        {/* <CardTitle></CardTitle> */}
        {/* 
        <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="m-0">
        <div className="mt-1">
          <h1 className="text-lg md:text-xl font-bold truncate">{title}</h1>
          <h2 className="opacity-80 text-lg md:text-3xl">
            <span className="text-base md:text-xl font-semibold">Rs.</span>
            {price}
          </h2>
          {/* <p className="text-xs">More options</p> */}
        </div>
      </CardContent>
      <CardFooter className="space-x-1 md:space-x-4">
        <BuyNowBtn product={{ id, image, price, title }} />
        <AddToCartBtn product={{ id, image, price, title }} />
      </CardFooter>
    </Card>
  );
}
