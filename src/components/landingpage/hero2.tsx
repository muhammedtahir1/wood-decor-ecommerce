"use client";

import Image from "next/image";
import CarouselComponent from "./carousel-component";

function Hero2() {
  return (
    <main
      className={`mt-16 md:mt-16 flex flex-col items-center justify-center  relative md:px-24  gap-4 backdrop-blur-md text-center	`}
    >
      <Image
        src={
          "https://utfs.io/f/65BTcHbcs1gk0RUyzeQCkdWXROPxD7ZT4lEhJ6F0am9Lpybq"
        }
        alt={"Wood decor dining"}
        width={1480}
        height={820}
      />
      {/* <CarouselComponent /> */}
    </main>
  );
}

export default Hero2;
