import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { X } from "lucide-react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import {
  ProductWithVariants,
  variantSchema,
  VariantType,
} from "@/types/validations";
import { Product, Variants } from "@prisma/client";

const PriceVariants = ({
  form,
  setVariants,
  variants,
  actionType,
  data,
}: {
  form: any;
  variants: VariantType[];
  setVariants: Dispatch<SetStateAction<VariantType[]>>;
  data: ProductWithVariants;
  actionType: "add" | "edit";
}) => {
  function remove(index: number) {
    console.log("removing index", index);
    setVariants((prev) => prev.filter((_, i) => index !== i));
    console.log("after removing", variants);
  }
  const [newVariant, setNewVariant] = useState({
    variant: "",
    price: "",
    discountedPrice: "",
  });
  useEffect(() => {
    if (actionType == "edit") setVariants(data.prices);
  }, [actionType]);

  const handleAddVariant = () => {
    if (newVariant.variant && newVariant.price) {
      const data: VariantType = {
        variant: newVariant.variant,
        price: parseInt(newVariant.price),
        discountedPrice: newVariant.discountedPrice
          ? parseInt(newVariant.discountedPrice)
          : 0,
      };
      setVariants((prev) => [...prev, data]);
      // console.log("appending", data);
      // console.log("fields", variants);

      setNewVariant({ variant: "", price: "", discountedPrice: "" });
    }
    console.log("fields", variants);
  };

  function onSubmit(data: any) {
    console.log("Form submitted with data:", data);
  }
  return (
    <section>
      <div className="space-y-4">
        <div className="flex space-x-4">
          <FormItem className="flex-grow">
            <FormLabel>Variant name</FormLabel>
            <FormControl>
              <Input
                placeholder="e.g., Default, L shaped"
                value={newVariant.variant}
                onChange={(e) =>
                  setNewVariant({ ...newVariant, variant: e.target.value })
                }
              />
            </FormControl>
          </FormItem>
          <FormItem>
            <FormLabel>Price</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="Price"
                min={1}
                value={newVariant.price}
                onChange={(e) =>
                  setNewVariant({ ...newVariant, price: e.target.value })
                }
              />
            </FormControl>
          </FormItem>
          <FormItem>
            <FormLabel>Discounted Price</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="Optional"
                value={newVariant.discountedPrice}
                onChange={(e) =>
                  setNewVariant({
                    ...newVariant,
                    discountedPrice: e.target.value,
                  })
                }
              />
            </FormControl>
          </FormItem>
          <Button type="button" onClick={handleAddVariant}>
            Add
          </Button>
        </div>
      </div>

      {variants.map((field, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 border p-2 rounded"
        >
          <span className="flex-1">{field.variant}👋</span>
          <span className="flex-1">{field.price}⚡</span>
          <span className="flex-1">{field.discountedPrice || "-"}</span>
          <Button
            type="button"
            onClick={() => remove(index)}
            variant="ghost"
            className="text-red-500"
          >
            <X size={16} />
          </Button>
        </div>
      ))}
    </section>
  );
};

export default PriceVariants;
