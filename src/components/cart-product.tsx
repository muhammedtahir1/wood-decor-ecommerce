import Image from "next/image";
import { BsDashCircle } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { TCartProduct } from "@/store/cart";

export default function CartProduct({ item }: { item: TCartProduct }) {
  const { image, title, price } = item;
  return (
    <div className="px-4  flex  gap-4 items-center mt-10 border py-4  rounded-xl h-32   text-black bg-white/70">
      <div className="max-size-[100px] border rounded-xl">
        <Image
          src={image}
          alt="cart-image"
          width={100}
          height={100}
          className="rounded-xl object-cover size-[100px]"
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center gap-4 ">
          <h1 className="text-base md:text-lg font-bold text-ellipsis overflow-hidden max-w-52 whitespace-nowrap text-left">
            {title}
          </h1>
          <p className="font-semibold text-base md:text-lg text-end">
            ₹{price}
          </p>
        </div>

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
    </div>
  );
}
