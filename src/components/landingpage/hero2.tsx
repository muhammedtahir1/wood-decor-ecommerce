"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import ProductImageCarousel from "./product-image-carousel";
import Link from "next/link";
import CarouselComponent from "./carousel-component";

function Hero2() {
  return (
    <main className={`h-[70vh] md:h-[75vh] mt-16 md:mt-24 flex flex-col items-center justify-center w-full relative md:px-24  gap-4 backdrop-blur-md text-center	`}>
      <CarouselComponent />
{/* 
      <section className="flex flex-col md:flex-row items-center lg:w-[1100px] md:py-8 justify-between">
        <h2 className="font-gt z-10 text-5xl font-normal  text-brand-text-DEFALUT md:w-[50%] capitalize text-balance text-start">
          All in one furniture needs
        </h2>
        <div className="flex flex-col md:w-[50%]  md:items-end gap-1 md:gap-0 md:mt-0 mt-2">
          <p className="lg:text-end text-start max-w-3xl  text-base  tracking-tight font-sans text-brand-text-muted z-10 leading-6 text-balance">
            Get the best furniture at the best price from the best store in the
            India, only at Wood Decor.
          </p>
          <div className="z-10 flex">
            <Link href="#featured-products">
              <Button
                className="z-10 mt-4 w-52 rounded-full"
                variant={"fullRounded"}
              >
                Shop Now <ArrowRight size={14} className="ml-2 " />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  ); 
}

export default Hero2;