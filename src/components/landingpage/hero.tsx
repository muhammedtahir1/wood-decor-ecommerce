import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import ImageSlider from "./imageSlider";
import { cn } from "@/lib/utils";

function Hero() {
  return (
    <main
      className={cn(
        `min-h-screen md:min-h-[100vh] flex flex-col items-center justify-center w-full px-10 relative md:px-24  gap-4 backdrop-blur-md text-center	bg-hero-bg3`
        // bg_imgs[i]
      )}
    >
      {/* <ImageSlider /> */}
      <div className="backdrop-blur-sm	absolute top-0 right-0 left-0 bottom-0 bg-black/50 text-center"></div>
      <h1 className="font-gt md:text-center text-start z-10 md:text-7xl text-6xl shadow-sm text-zinc-100 capitalize tracking-tight">
        All in one furniture needs
      </h1>
      <p className="md:text-center text-start max-w-3xl font-light shadow-sm text-base md:text-lg tracking-tight  text-zinc-100 z-10 leading-6">
        Get the best furniture at the best price from the best store in the
        India, only at Wood Decor, the best furniture store in the India.
      </p>
      <div className="z-10">
        <Button
          className="z-10 mt-4 w-80 md:w-96 rounded-full"
          variant={"fullRounded"}
        >
          Shop Now <ArrowRight size={14} className="ml-2 " />
        </Button>
      </div>
    </main>
  );
}

export default Hero;
