"use client"

import BuyNowBtn from "@/components/buy-now-btn"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react"

type PriceTypeProps = {
  variant: string
  price: number
}

type ColorType = {
  value: string
  class: string
}

const PriceLabel = ({ colors = [], prices }: { prices: PriceTypeProps[]; colors?: string[] }) => {
  const defaultColors: ColorType[] = [
    { value: "other", class: "bg-gray-300" },
    { value: "black", class: "bg-black" },
    { value: "white", class: "bg-white" },
    { value: "blue", class: "bg-[#002366]" },
    { value: "red", class: "bg-red-700" },
  ]

  const [finalPrice, setFinalPrice] = useState<PriceTypeProps | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  useEffect(() => {
    // Set the initial final price
    const defaultVariant = prices.find((price) => price.variant === "default")
    setFinalPrice(defaultVariant || prices[0] || null)
  }, [prices])

  const handleVariantClick = (priceObj: PriceTypeProps) => {
    setFinalPrice(priceObj)
  }

  const handleColorClick = (color: string) => {
    setSelectedColor(color)
  }

  const handleBuy = () => {
    const result = {
      color: selectedColor || "",
      price: finalPrice
        ? {
          variant: finalPrice.variant,
          price: finalPrice.price,
        }
        : null,
    }
    console.log(result)
    // You can perform additional actions here, like sending the data to a server
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        Final Price: ${finalPrice ? finalPrice.price.toFixed(2) : "N/A"}
      </h2>
      <div className="flex flex-wrap gap-2">
        {prices.map((priceObj, index) => (
          <button
            key={index}
            onClick={() => handleVariantClick(priceObj)}
            className={`px-3 py-1 text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${finalPrice?.variant === priceObj.variant
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-600 hover:bg-blue-200"
              }`}
          >
            {priceObj.variant}: ${priceObj.price.toFixed(2)}
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
                  className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${colorObj.class
                    } ${selectedColor === colorObj.value ? "ring-2 ring-blue-500" : ""}`}
                  aria-label={colorObj.value}
                />
              )
          )}
        </div>
      )}
      <Button onClick={handleBuy}>buy2</Button>

      {/* <div className="flex gap-x-4 mt-4">
        <BuyNowBtn
          product={{
            ...product,
            variant: form.getValues("variant"),
            color: form.getValues("color"),
          }}
        />
        <AddToCartBtn
          product={{
            ...product,
            variant: form.getValues("variant"),
            color: form.getValues("color"),
            // 👇👇👇
            price: product.discountedPrice || product.price,
          }}
        />
      </div> */}
    </div>
  )
}

export default PriceLabel

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


{/* {product.discountedPrice && product.discountedPrice > 0 ? (
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
      )} */}