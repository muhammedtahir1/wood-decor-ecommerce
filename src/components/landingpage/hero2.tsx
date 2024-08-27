"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import ImageSlider from "./imageSlider";
import { cn } from "@/lib/utils";
import ProductImageCarousel from "./product-image-carousel";

function Hero2() {
  // const bg_imgs = ["bg-hero-bg1", "bg-hero-bg2", "bg-hero-bg3"];
  // let i = 0;
  // setInterval(() => {
  //   i++;
  //   console.log(i);
  //   if (i === bg_imgs.length) i = 0;
  // }, 2000);
  return (
    <main
      className={cn(
        ` h-[90vh] md:h-[90vh] mt-10 md:mt-24 flex flex-col items-center justify-center w-full px-5 relative md:px-24  gap-4 backdrop-blur-md text-center	`
        // bg_imgs[i]
      )}
    >
      {/* <ImageSlider /> */}
      <ProductImageCarousel />
      <section className="flex flex-col md:flex-row items-center md:w-[1100px] md:py-8 justify-between">
        <h2 className="font-gt z-10 text-5xl font-normal shadow-sm text-brand-text-DEFALUT md:w-[50%] capitalize text-balance text-start">
          All in one furniture needs
        </h2>
        <div className="flex flex-col md:w-[50%]  md:items-end gap-1 md:gap-0 md:mt-0 mt-2">
          <p className="md:text-end text-start max-w-3xl shadow-sm text-base  tracking-tight font-sans text-brand-text-muted z-10 leading-6 text-balance">
            Get the best furniture at the best price from the best store in the
            India, only at Wood Decor.
          </p>
          <div className="z-10 flex">
            <Button
              className="z-10 mt-4 w-52 rounded-full"
              variant={"fullRounded"}
            >
              Shop Now <ArrowRight size={14} className="ml-2 " />
            </Button>
            {/* <Button
              className="z-10 mt-4 w-52 rounded-full"
              variant={"outline"}
            >
              Shop Now <ArrowRight size={14} className="ml-2 " />
            </Button> */}
          </div>
        </div>
      </section>
      {/* <div className="backdrop-blur-sm	absolute top-0 right-0 left-0 bottom-0 bg-black/50 text-center"></div>
      
       */}
    </main>
  );
}

export default Hero2;
/*
  title           ✅
  slug            ✅
  description     ✅
  category        ✅
  image           ✅
  label           ✅
  price           
  discountedPrice 
  features        
  colors          
  isFeatured        

*/
