"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type FormProps = UseFormReturn<
  {
    title: string;
    price: number;
    colors: string[];
    description?: string | undefined;
    discountedPrice?: number | undefined;
    isFeatured?: boolean | undefined;
    category?: string | undefined;
    image?: string | undefined;
    variants?: string[] | undefined;
  },
  any,
  undefined
>;

const VariantForm = ({ form }: { form: FormProps }) => {
  const [text, setText] = React.useState("");
  return (
    <div>
      <FormField
        control={form.control}
        name="variants"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Product Variants</FormLabel>
            <FormControl className="flex gap-1">
              <Input placeholder="Add a variant" onKeyDown={(e) => {}} />
            </FormControl>
            <Button
              type="button"
              onClick={() => {
                let d;
                if (Array.isArray(field.value)) {
                  d = [...field.value];
                  field.onChange([...d, text]);
                }
                setText("");
              }}
            >
              <Plus />
              Add variant
            </Button>
            <div>
              {field.value &&
                field.value?.map((varient) => <div>{varient}</div>)}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default VariantForm;
