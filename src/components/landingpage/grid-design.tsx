import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const GridDesign = () => {
  return (
    <>
        <h1 className="text-center mt-10 md:mt-20">Gallery</h1>
        <p className="text-center text-sm md:text-base opacity-80 capitalize">Browse our inspiring collection of visuals</p>

      <section className="grid grid-cols-[200px_200px] md:grid-cols-[300px_300px_300px] grid-rows-[140px_140px] md:grid-rows-[180px_180px_180px] justify-center gap-4 md:my-10 h-[440px] mb-24 md:mb-48 md:h-[440px] md:w-[600px] mx-auto scale-75 md:scale-90 ">
        <div className="bg-zinc-200 col-start-1 col-end-2 row-start-1 row-end-2 rounded-xl overflow-hidden hover:backdrop-grayscale">
          <Link href={"/search?q=interiors"}>
            <Image
              quality={50}
              src={
                "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="mx-auto hover:scale-105 transition-all duration-500 h-72 object-center rounded-xl w-full object-cover hover:contrast-50"
              width={450}
              height={400}
              alt=""
            />
            {/* <div className="hover:bg-black/15 transition-colors duration-300 absolute w-full h-full top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center group:">
          </div> */}
          </Link>

        </div>
        <div className="bg-zinc-200 col-start-1 col-end-2 row-start-2 row-end-4 rounded-xl  overflow-hidden">
          <Link href={"/search?q=interiors"}>
            <Image
              quality={50}
              src={
                "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="mx-auto hover:scale-105 transition-all duration-500  object-center rounded-xl w-full object-cover hover:contrast-50"
              width={550}
              height={600}
              alt=""
            />
          </Link>
        </div>
        <div className="bg-zinc-200 col-start-2 col-end-3 row-start-1 row-end-3 rounded-xl   overflow-hidden">
          <Link href={"/search?q=interiors"}>
            <Image
              quality={50}
              src={
                "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="mx-auto hover:scale-105 transition-all duration-500  object-center rounded-xl w-full object-cover hover:contrast-50"
              width={550}
              height={600}
              alt=""
            />
          </Link>
        </div>
        <div className="bg-brand-text-muted/10 md:col-start-2 col-start-2 md:col-end-3 col-end-3 md:row-start- row-start- md:row-end-4 row-end-4 rounded-xl overflow-hidden ">
          <Link href={"/search?q=interiors"}>
            <Image
              quality={50}
              src={
                "https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="mx-auto hover:scale-105 transition-all duration-500  object-bottom mb-48 rounded-xl w-full object-cover hover:contrast-50"
              width={550}
              height={600}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden md:block bg-zinc-200 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 rounded-xl  overflow-hidden ">
          <Link href={"/search?q=interiors"}>
            <Image
              quality={50}
              src={
                "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="mx-auto hover:scale-105 transition-all duration-500  object-top rounded-xl w-full object-cover hover:contrast-50"
              width={550}
              height={600}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden md:block bg-zinc-200 md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-4 md:rounded-xl overflow-hidden">
          <Link href={"/search?q=interiors"}>
            <Image
              quality={50}
              src={
                "https://images.unsplash.com/photo-1527005980469-e172416c200b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="mx-auto hover:scale-105 transition-all duration-500  object-center rounded-xl w-full object-cover hover:contrast-50"
              width={550}
              height={600}
              alt=""
            />
          </Link>
        </div>

      </section>
    </>
  );
};

export default GridDesign;
