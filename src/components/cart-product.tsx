import Image from "next/image";
import { BsDashCircle } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { Product } from "@prisma/client";

export default function CartProduct({ item }: { item: Product }) {
  const { image, title, price } = item;
  return (
    <section className="px-4  flex  justify-between gap-4 items-center mt-10 border py-4  rounded-xl h-32   text-black bg-white/70">
      <div className="">
        <Image
          src={image}
          alt="cart-image"
          width={160}
          height={160}
          className="rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center gap-6 ">
          <h1 className="text-base md:text-lg font-bold">{title}</h1>
          <p className="font-semibold text-base md:text-lg">${price}</p>
        </div>
        {/* <p className="text-sm opacity-55">New in Bangalore</p> */}
        {/* <p className="text-sm opacity-55">Color : Cream</p> */}
        <div className="flex items-center gap-24">
          <div className="flex items-center gap-2">
            <BsDashCircle size={16} />
            <p className="text-sm">2</p>
            <IoIosAddCircleOutline size={18} />
          </div>
          <div className="flex items-center gap-2">
            <MdDelete />
            <FiHeart />
          </div>
        </div>
      </div>
    </section>
  );
}
