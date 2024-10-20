"use client";

import Image from "next/image";
import CarouselComponent from "./carousel-component";

function Hero2() {
  return (
    <main
      className={`mt-[130px] md:mt-16 w-full flex flex-col items-center justify-center  relative  gap-4 backdrop-blur-md text-center	`}
    >
      <Image
        className="w-full min-h-[50vh]"
        src={
          "https://utfs.io/f/65BTcHbcs1gk0RUyzeQCkdWXROPxD7ZT4lEhJ6F0am9Lpybq"
        }
        alt={"Wood decor dining"}
        width={1480}
        height={820}
        // style={
        //   {
        //     height: "60vh"
        //   }
        // }
      />
      {/* <CarouselComponent /> */}
    </main>
  );
}

export default Hero2;
