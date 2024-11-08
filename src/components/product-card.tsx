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

  function findPriceInfo(priceData: Variants[]): Variants | null {
    // Find the 'default' variant or the first variant if 'default' is not found
    return (
      priceData.find((item) => item.variant.toLowerCase() === "default") ||
      priceData[0]
    );
  }

  const priceInfo = findPriceInfo(prices);

  return (
    <Card className="w-40 relative md:w-72 h-[290px]  md:h-[440px] mx-1  bg-white/30 ">
      <CardHeader className="h-[50%] md:h-[60%] overflow-hidden p-0">
        <Link
          href={`/products/${slug}`}
          className="md:mb-2 w-full h-[150px] md:h-[260px] hover:scale-105 transition-all duration-300"
        >
          <Image
            className="h-full w-full object-cover "
            width={270}
            height={260}
            src={image}
            alt="Sofa set"
          />
        </Link>
      </CardHeader>
      <CardContent className="m-0 ">
        <div className="mt-1 items-center px-4 md:px-8">
          <h1 className="text-lg md:text-xl font-medium truncate">{title}</h1>

          <div className="">
            {priceInfo?.discountedPrice && priceInfo.discountedPrice > 0 ? (
              <div className="flex justify-between items-center">
                <h2 className="flex items-center gap-2 text-lg md:text-xl">
                  <span className="text-base md:text-lg font-light line-through opacity-80 relative text-red-500">
                    ₹{priceInfo.price}
                  </span>
                  <span className="font-normal">
                    ₹{priceInfo.discountedPrice}
                  </span>
                </h2>
                <Badge variant="default"  className="ml-2 scale-[80%]">
                  {Math.round(
                    ((priceInfo.price - priceInfo.discountedPrice) /
                      priceInfo.price) *
                      100
                  )}
                  % OFF
                </Badge>
              </div>
            ) : (
              <h2 className=" text-lg md:text-xl">₹{priceInfo?.price}</h2>
            )}
          </div>

          <StarRating
            className="scale-75  -ml-5 md:-ml-8"
            rating={rating > 3 ? rating : 4}
          />
        </div>
      </CardContent>
      <CardFooter className="md:space-x-1 px-1 md:px-8 mt-2 md:mt-5">
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
