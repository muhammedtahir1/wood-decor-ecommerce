"use client";
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
// import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { ArrowLeftIcon } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { WiStars } from "react-icons/wi";

const ImageSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <section className="w-full md:max-w-full pb-10 md:pb-20 border-b-2 z-10">
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent className="relative">
          <CarouselItem className="">
            <Image
              className="mx-auto rounded-lg object-cover"
              src={"https://images.unsplash.com/photo-1680503397671-caa25818d36f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              width={850}
              height={800}
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="">
            <Image
              className="mx-auto rounded-lg"
              src={"https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              width={850}
              height={400}
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="">
            <Image
              className="mx-auto my-auto rounded-lg"
              src={"https://plus.unsplash.com/premium_photo-1683141443663-503f4140c667?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              width={850}
              height={400}
              alt=""
            />
          </CarouselItem>
        </CarouselContent>
        <div className="mt-6 md:mt-2 flex justify-between items-center top-[50%] right-0 left-0">
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => api?.scrollTo(current - 1)}
          >
            <ArrowLeftIcon />
          </Button>
          <div>
            <Badge variant={"outline"} className="text-md md:text-4xl font-bold">
              Turning <span className="text-indigo-400 px-1">dream</span> homes into reality
            </Badge>
          </div>
          <Button
            onClick={() => api?.scrollTo(current + 1)}
            variant={"outline"}
            size={"icon"}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </Carousel>
      {/* <div className=" absolute top-0 right-0 flex bg-brand-secondary px-1 py-1 -rotate-3 text-xs">
        <p className="relative">
          Best seller
          <WiStars className="text-white absolute size-6 -top-2 -right-3 animate-pulse" />
        </p>
      </div> */}
    </section>
  );
};

export default ImageSlider;