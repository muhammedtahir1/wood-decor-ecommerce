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
import { Button } from "../ui/button";
import { Product } from "@prisma/client";

export default function ProductCard({ item }: Product) {
  return (
    <Card>
      {/* <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader> */}
      <CardContent>
        <div>
          <Link href={""}>
            <Image src={item.images[0]} alt="Sofa set" width={240} height={200} />
          </Link>
        </div>
        <div>
          <p className="text-xs">GAMMALBYN</p>
          <h1 className="text-xl font-bold">{item.title}</h1>
          <h2>
            Rs. <span className="text-xl font-semibold">{item.price}</span>{" "}
          </h2>
          <p className="text-xs">More options</p>
        </div>{" "}
      </CardContent>
      <CardFooter className="space-x-2">
        <Button className="w-full">Buy Now</Button>
        <Button variant={"secondary"}>Add to cart</Button>
      </CardFooter>
    </Card>
  );
}
