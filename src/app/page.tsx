import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Product } from "@prisma/client";
export default async function Home() {
  const products = await prisma.product.findMany();
  return (
    <div>
      <section>
        {products.map((product) => (
          <EachProduct title={product.title} slug={product.slug}/>
        ))}
      </section>
    </div>
  );
}

const EachProduct = ({ title, slug }: { title: string, slug:string }) => {
  return (
    <Link href={`/products/${slug}`}>
      <Card className="h-[360px] w-[220px] md:h-[400px] md:w-[260px] md:mt-[50px] md:shadow-md rounded-none ">
        <CardHeader className="p-0"></CardHeader>
        {/* <div className="md:flex flex">
      <FaRegHeart
        size={15}
        className="md:ml-[-30px] md:mt-4 ml-[-10px] mt-2 "
      />
    </div> */}
        <CardContent className="flex flex-col gap-1 items-start">
          <Badge variant={"outline"} className="text-[10px] mx-auto">
            category
          </Badge>
          <h2 className="text-sm md:text-[16px] font-bold font-grotesk leading-6 mt-2 text-center">
            {title}
          </h2>
          <p></p>
          <div className="w-full flex items-center justify-between">
            <Button className="w-full" variant={"default"}>
              Add to Cart
            </Button>
            {/* <CustomBtn1 /> */}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

/*
<section className="min-h-[80vh] flex flex-col gap-5 items-center justify-center px-6 md:px-12">
      <Badge  variant={"secondary"}>Over 3 million ready-to-work creatives!</Badge>
      <h1 className="text-5xl font-bold text-center font-roboto">
        The world’s destination for progress tracker
      </h1>
      <p className=" text-center text-muted-foreground">
        Get inspired by the work of millions of top-rated designers & agencies
        around the world.
      </p>
      <Link href={"/login"} className="w-56 mt-10">
        <Button className="w-full" variant={"fullRounded"}>Get started</Button>
      </Link>
    </section>

*/
