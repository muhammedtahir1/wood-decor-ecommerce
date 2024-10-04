import { Product } from "@prisma/client";
import React from "react";

const PriceLabel = ({ product }: { product: Product }) => {
  return (
    <div>
      {product.discountedPrice && product.discountedPrice > 0 ? (
        <div className="flex items-center gap-2">
          <h3 className="scale-75">
            <span className=" opacity-80 relative">
              ₹{product.price}
              <span className="absolute left-2 bottom-4 -rotate-12 w-[70px] h-[2px] bg-red-600" />
            </span>
          </h3>
          <h2 className="font-semibold flex gap-2 scale-105">
            ₹{product.discountedPrice}
          </h2>
        </div>
      ) : (
        <h2>₹{product.price}</h2>
      )}
    </div>
  );
};

export default PriceLabel;
