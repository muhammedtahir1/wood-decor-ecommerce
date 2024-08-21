import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
    features,
    id,
    image,
    label,
    price,
    slug,
    title,
  } = data;

  // console.log(slug, title);
  // console.log("slug , title");
  console.log(`/products/${slug}`);

  return (
    <Card className="w-72 h-[480px]">
      <CardHeader className="h-[60%] overflow-hidden">
        <Link href={`/products/${slug}`}>
          <Image
            className="h-full w-full object-cover"
            width={250}
            height={260}
            src={image}
            alt="Sofa set"
          />
        </Link>
        {/* <CardTitle></CardTitle> */}
        {/* 
        <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <div></div>
        <div>
          <p className="text-xs">GAMMALBYN</p>
          <h1 className="text-xl font-bold truncate">{title}</h1>
          <h2>
            Rs. <span className="text-xl font-semibold">{price}</span>{" "}
          </h2>
          <p className="text-xs">More options</p>
        </div>{" "}
      </CardContent>
      <CardFooter className="space-x-2">
        <BuyNowBtn product={data} />
        <AddToCartBtn product={data} />
      </CardFooter>
    </Card>
  );
}
