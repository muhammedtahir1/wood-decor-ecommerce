"use client";
import { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type FormProps = UseFormReturn<
  {
    title: string;
    prices: {
      
    }[];
    colors: string[];
    description?: string | undefined;
    discountedPrice?: number | undefined;
    isFeatured?: boolean | undefined;
    category?: string | undefined;
    image?: string | undefined;
    variants?: string[] | undefined;
    rating?: number | undefined;
  },
  any,
  undefined
>;

const VariantForm = ({ form }: { form: FormProps }) => {
  const [newVariant, setNewVariant] = useState({ name: "", price: "" });
  const [variantsCopy, setVariantsCopy] = useState<string[]>([]);
  return (
    <div>
      <FormField
        control={form.control}
        name="variants"
        render={({ field }) => {
          setVariantsCopy(field.value || []);
          return (
            <FormItem>
              <FormLabel>Variants</FormLabel>
              <FormControl>
                <div className="flex space-x-2 mb-4">
                  <Input
                    placeholder="Variant name"
                    value={newVariant.name}
                    onChange={(e) =>
                      setNewVariant({ ...newVariant, name: e.target.value })
                    }
                    className="flex-grow"
                  />
                  <Input
                    placeholder="Price"
                    type="number"
                    value={newVariant.price}
                    onChange={(e) =>
                      setNewVariant({ ...newVariant, price: e.target.value })
                    }
                    className="w-24"
                  />
                  <Button
                    type="button"
                    onClick={() => {
                      console.log("----------", newVariant);
                      if (newVariant.name == "" || newVariant.price == "")
                        return;
                      if (Array.isArray(field.value)) {
                        field.onChange([
                          ...field.value,
                          `${newVariant.name}-${newVariant.price}`,
                        ]);
                      }
                      setNewVariant({ name: "", price: "" });
                      console.log("field.value", field.value);
                    }}
                  >
                    <Plus />
                    Add variant
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />

      {variantsCopy && variantsCopy.length > 0 && (
        <div className="flex flex-wrap py-2 gap-3">
          {variantsCopy.map((variant, index) => {
            return (
              <Badge key={index} className="mr-2 relative">
                {variant.split("-")[0]} - {variant.split("-")[1]}
                <Button
                  className="absolute -right-6 -top-5 scale-50 rounded-full"
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => {
                    form.setValue(
                      "variants",
                      variantsCopy.filter((_, i) => i !== index)
                    );
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </Badge>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VariantForm;
