"use client";

import AddToCartBtn from "@/components/add-to-cart-btn";
import BuyNowBtn from "@/components/buy-now-btn";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import React, { useEffect, useState } from "react";

type PriceTypeProps = {
  variant: string;
  price: number;
  discountedPrice: number | null;
};

type ColorType = {
  value: string;
  class: string;
};

type ResultType = {
  color: string;
  price: {
    variant: string;
    price: number;
  } | null;
};

const PriceLabel = ({
  colors = [],
  prices,
  product,
}: {
  prices: PriceTypeProps[];
  colors?: string[];
  product: Product;
}) => {
  const defaultColors: ColorType[] = [
    { value: "other", class: "bg-gray-300" },
    { value: "black", class: "bg-black" },
    { value: "white", class: "bg-white" },
    { value: "blue", class: "bg-[#002366]" },
    { value: "red", class: "bg-red-700" },
  ];

  const [finalPrice, setFinalPrice] = useState<PriceTypeProps | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [result, setResult] = useState<ResultType>({
    color: "",
    price: null,
  });

  useEffect(() => {
    const defaultVariant =
      prices.find((price) => price.variant === "default") || prices[0] || null;
    setFinalPrice(defaultVariant);
    updateResult(defaultVariant, null);
  }, [prices]);

  const handleVariantClick = (priceObj: PriceTypeProps) => {
    setFinalPrice(priceObj);
    updateResult(priceObj, selectedColor);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    updateResult(finalPrice, color);
  };

  const updateResult = (price: PriceTypeProps | null, color: string | null) => {
    setResult({
      color: color || "",
      price: price
        ? {
            variant: price.variant,
            price:
              price.discountedPrice !== null
                ? price.discountedPrice
                : price.price,
          }
        : null,
    });
  };

  return (
    <div className="space-y-4">
      <div className="">
        {finalPrice?.discountedPrice && finalPrice.discountedPrice > 0 ? (
          <h2 className="flex items-center gap-2 text-lg md:text-2xl">
            <span className="text-lg font-light line-through opacity-80 relative">
              ₹{finalPrice.price}
            </span>
            <span className="font-semibold">₹{finalPrice.discountedPrice}</span>
          </h2>
        ) : (
          <h2 className=" text-lg md:text-2xl">₹{finalPrice?.price}</h2>
        )}
      </div>
      {/* <h2 className="text-2xl font-bold">
        ₹{finalPrice ? finalPrice.price : "N/A"}
      </h2> */}
      <div className="flex flex-wrap gap-2">
        {prices.map((priceObj, index) => (
          <button
            key={index}
            onClick={() => handleVariantClick(priceObj)}
            className={`px-3 py-1 text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
              finalPrice?.variant === priceObj.variant
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-600 hover:bg-blue-200"
            }`}
          >
            {priceObj.variant}
          </button>
        ))}
      </div>
      {colors.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {defaultColors.map(
            (colorObj, index) =>
              colors.includes(colorObj.value) && (
                <button
                  key={index}
                  onClick={() => handleColorClick(colorObj.value)}
                  className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                    colorObj.class
                  } ${
                    selectedColor === colorObj.value
                      ? "ring-2 ring-blue-500"
                      : ""
                  }`}
                  aria-label={colorObj.value}
                />
              )
          )}
        </div>
      )}

      <div className="flex md:gap-x-2 mt-4">
        <BuyNowBtn
          product={{
            ...product,
            price: {
              price: result.price?.price || 0,
              variant: result.price?.variant || "",
            },
            color: result.color,
          }}
        />
        <AddToCartBtn
          product={{
            ...product,
            price: {
              price: result.price?.price || 0,
              variant: result.price?.variant || "",
            },
            color: result.color,
          }}
        />
      </div>
    </div>
  );
};

export default PriceLabel;

// {
//   id: "",✅
//   title: "", ✅
//   image: "",✅
//   color: "",
//   price: { ✅
//     variant: ""
//     price: 0
//   }
// }

{
  /* {product.discountedPrice && product.discountedPrice > 0 ? (
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
      )} */
}
