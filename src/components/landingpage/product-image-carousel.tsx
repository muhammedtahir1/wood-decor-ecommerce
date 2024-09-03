"use client";

const videoLink = "/7578552-uhd_2560_1440_30fps (1).mp4"
const bgs = [
  "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "https://images.unsplash.com/photo-1680503397671-caa25818d36f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683141443663-503f4140c667?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Badge } from "../ui/badge";
import { WiStars } from "react-icons/wi";

const ProductImageCarousel = () => {
  // const [api, setApi] = useState<CarouselApi>();
  // const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   if (!api) {
  //     return;
  //   }

  //   setCurrent(api.selectedScrollSnap());

  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap());
  //   });
  // }, [api]);
  return (
    <section className="mdasdf:max-w-[90vw] relative mt-10">
      {/*
       */}
       <video className="md:w-[1100px] hover:paused transition-all duration-300 h-64 object-cover rounded-xl border md:h-80 " src={videoLink}  loop muted autoPlay playsInline />
      {/* <Carousel className="hidden" setApi={setApi} opts={{ loop: false }}>
        <CarouselContent className="relative">
          <CarouselItem className="">
            <Image
              src={bgs[0]}
              className="mx-auto h-72 object-center rounded-xl w-full object-cover"
              width={850}
              height={400}
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="">
            <Image
              src={bgs[1]}
              className="mx-auto h-72 object-center rounded-xl w-full object-cover"
              width={850}
              height={400}
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="">
            <Image
              src={bgs[2]}
              className="mx-auto h-72 object-center rounded-xl w-full object-cover"
              width={850}
              height={400}
              alt=""
            />
          </CarouselItem>
        </CarouselContent>
        <h1 className="absolute top-28 text-white">All your furniture needs</h1>
        <div className="flex justify-between   top-[50%] right-0 left-0">
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => api?.scrollTo(current - 1)}
          >
            <ArrowLeftIcon />
          </Button>
  
          <Button
            onClick={() => api?.scrollTo(current + 1)}
            variant={"outline"}
            size={"icon"}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </Carousel> */}
    </section>
  );
};

export default ProductImageCarousel;
