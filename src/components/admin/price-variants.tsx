import React, { useState } from "react";
import { useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { X } from "lucide-react";

const PriceVariants = ({ form }: { form: any }) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "prices",
  });
  const [newVariant, setNewVariant] = useState({
    variant: "",
    price: "",
    discountedPrice: "",
  });

  const handleAddVariant = () => {
    if (newVariant.variant && newVariant.price) {
      append({
        variant: newVariant.variant,
        price: parseInt(newVariant.price),
        discountedPrice: newVariant.discountedPrice
          ? parseInt(newVariant.discountedPrice)
          : null,
      });
      setNewVariant({ variant: "", price: "", discountedPrice: "" });
    }
  };
  return (
    <section>
      <div className="flex space-x-2">
        <Input
          placeholder="Variant name"
          value={newVariant.variant}
          onChange={(e) =>
            setNewVariant({ ...newVariant, variant: e.target.value })
          }
        />
        <Input
          type="number"
          placeholder="Price"
          value={newVariant.price}
          onChange={(e) =>
            setNewVariant({ ...newVariant, price: e.target.value })
          }
        />
        <Input
          type="number"
          placeholder="Discounted Price"
          value={newVariant.discountedPrice}
          onChange={(e) =>
            setNewVariant({ ...newVariant, discountedPrice: e.target.value })
          }
        />
        <Button
          type="button"
          onClick={handleAddVariant}
          className="bg-black text-white"
        >
          + Add
        </Button>
      </div>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="flex items-center space-x-2 border p-2 rounded"
        >
          <span className="flex-1">{field.variant}</span>
          <span className="flex-1">{field.price}</span>
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
