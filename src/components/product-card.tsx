import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Product, Variants } from "@prisma/client";
import AddToCartBtn from "./add-to-cart-btn";
import BuyNowBtn from "./buy-now-btn";
import StarRating from "./star-rating";
import { Badge } from "./ui/badge";
import { ProductCardProps } from "@/types/validations";



export default function ProductCard({ data }: { data: ProductCardProps }) {
  const { id, image, label, slug, title, rating, prices } = data;

  console.log("---", prices);

  function findPriceInfo(priceData: Variants[]): Variants | null {
    // Find the 'default' variant or the first variant if 'default' is not found
    return (
      priceData.find((item) => item.variant.toLowerCase() === "default") ||
      priceData[0]
    );
  }

  const priceInfo = findPriceInfo(prices);
  // console.log("--- ", priceInfo); // Output: { variant: 'default', price: 5000, discountedPrice: 4699 }

  // console.log(`/products/${slug}`);
  // console.log("price🎯🎯", prices, typeof prices.map(v => v.variant.toLowerCase() === "default"))

  return (
    <Card className="w-40 relative rounded-xl md:w-72 h-[300px]  md:h-[460px] mx-1  bg-white/30 ">
      <CardHeader className="h-[50%] md:h-[60%] overflow-hidden p-0">
        <Link
          href={`/products/${slug}`}
          className="rounded-xl md:mb-2 w-full h-[150px] md:h-[260px] hover:scale-105 transition-all duration-300"
        >
          <Image
            className="h-full w-full object-cover rounded-t-xl"
            width={270}
            height={260}
            src={image}
            alt="Sofa set"
          />
        </Link>
      </CardHeader>
      <CardContent className="m-0 ">
        <div className="mt-1 items-center px-4 md:px-8">
          <h1 className="text-lg md:text-xl font-bold truncate">{title}</h1>
          <h2 className=" opacity-80 text-lg md:text-3xl">
            <span className="text-base md:text-xl font-semibold">₹</span>
            {prices.find((v) => v.variant.toLowerCase() == "default")?.price || "NA"}
          </h2>

          <StarRating
            className="scale-90 mt-1 -ml-2"
            rating={rating > 3 ? rating : 4}
          />
        </div>
      </CardContent>
      <CardFooter className="md:space-x-4 px-1 md:px-8 mt-4 md:mt-6">
        <BuyNowBtn
          product={{
            id,
            image,
            price: {
              price: priceInfo?.discountedPrice || priceInfo?.price || 0,
              variant: priceInfo?.variant as string,
            },
            title,
          }}
        />
        <AddToCartBtn
          product={{
            id,
            image,
            price: {
              price: priceInfo?.discountedPrice || priceInfo?.price || 0,
              variant: priceInfo?.variant as string,
            },
            title,
          }}
        />
      </CardFooter>
      {label && <Badge className="absolute top-0 left-0">{label}</Badge>}
    </Card>
  );
}
