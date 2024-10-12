"use client";
import Image from "next/image";
import { BsDashCircle } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { TCartProduct } from "@/types/cart";

export default function CartProduct({
  item,
  removeItemFromCart,
}: {
  item: TCartProduct;
  removeItemFromCart: any;
}) {
  const { image, title, price, id, color } = item;
  return (
    <div className="px-4 flex  gap-4 items-center mr-2 mt-6 md:mt-10 border py-4  rounded-xl h-32 text-black bg-white/50">
      <div className="max-size-[100px] border rounded-xl">
        <Image
          src={image}
          sizes=""
          alt="cart-image"
          width={100}
          height={100}
          className="rounded-xl object-cover size-[100px]"
          style={{ objectFit: "contain", minWidth: "100px" }}
        />
      </div>

      <div className="space-y-2 w-full">
        <div className="flex flex-col justify-between items-start w-full">
          <h1 className="text-base md:text-lg font-gt font-bold text-ellipsis overflow-hidden w-40 whitespace-nowrap text-left">
            {title}
          </h1>
          <p className="font-semibold text-lg md:text-xl opacity-70 text-end">
            ₹{price.price}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <section className="space-x-1">
            {price.variant && price.variant.toLowerCase() !== "default" && (
              <Badge>{price.variant}</Badge>
            )}
            {color && <Badge>{color}</Badge>}
          </section>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => removeItemFromCart(id)}
              variant={"secondary"}
              className="rounded-full"
              size={"icon"}
            >
              <MdDelete className="text-red-500" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
