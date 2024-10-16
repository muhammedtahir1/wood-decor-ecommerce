"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import BuyNowBtn from "@/components/buy-now-btn";
import AddToCartBtn from "@/components/add-to-cart-btn";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  color: z.string().optional(),
  variant: z.string().optional(),
});

type PriceTypeProps = {
  variant: string,
  price: number,
  discountedPrice?: number
}

type FormSelectorProps = {
  colors: string[];
  prices: PriceTypeProps[];
  product: Product;
  form: any
};

export default function FormSelector({
  colors,
  prices,
  product,
  // mainForm
}: FormSelectorProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: "",
      variant: "",
    },
  });

  const defaultColors = [
    { value: "other", class: "bg-gray-300" },
    { value: "black", class: "bg-black" },
    { value: "white", class: "bg-white" },
    { value: "blue", class: "bg-[#002366]" },
    { value: "red", class: "bg-red-700" },
  ];
  const router = useRouter();

  // Filter default colors based on provided colors
  const finalColors = defaultColors.filter((color) =>
    colors.includes(color.value)
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [finalPrice, setFinalPrice] = React.useState<number>()

  return (
    <Form {...form}>
      {/* <Button onClick={() => {
        console.log("Changing")
      }}>Change</Button> */}

      RS{finalPrice}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {colors.length > 0 && (
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel className="text-base font-medium">Color</FormLabel> */}
                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="flex min-h-12 space-x-2 items-center "
                  >
                    {finalColors.map((color) => (
                      <FormItem
                        key={color.value}
                        className="flex flex-col items-center "
                      >
                        <FormControl>
                          <RadioGroupItem
                            value={color.value}
                            id={color.value}
                            className="sr-only"
                          />
                        </FormControl>
                        <FormLabel htmlFor={color.value}>
                          <div
                            className={cn(
                              `h-8 border w-8 rounded-full ${color.class} cursor-pointer transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-black relative`,
                              {
                                "size-9 ring-2 ring-black":
                                  field.value === color.value,
                              }
                            )}
                          >
                            {field.value === color.value && (
                              <Check
                                size={12}
                                className="absolute left-1/3 top-1/3 text-white"
                              />
                            )}
                          </div>
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
        )}
        {/* Variant Selection */}
        {prices.length > 0 && (
          <FormField
            control={form.control}
            name="variant"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">
                  prices
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={() => {
                      // router.replace(
                      //   `/products/${product.slug}?variant=${field.value}`
                      // );
                      return field.onChange();
                    }}
                    className="flex min-h-10 space-x-2 items-center"
                  >
                    {prices.map((variant) => (
                      <FormItem
                        key={variant.price}
                        className="flex flex-col items-center"
                      >
                        <FormControl>
                          <RadioGroupItem
                            value={variant.variant}
                            id={variant.variant}
                            className="sr-only"
                          />
                        </FormControl>
                        <FormLabel htmlFor={variant.variant}>
                          <div
                            className={cn(
                              `px-2 py-3 cursor-pointer transition-all duration-200 ease-in-out border hover:ring-2 hover:ring-offset-2 hover:ring-black relative`,
                              {
                                "ring-2 ring-black": field.value === variant.variant,
                              }
                            )}
                          >
                            {field.value === variant.variant && (
                              <Check
                                size={12}
                                className="absolute left-1/3 top-1/3 text-white"
                              />
                            )}
                            {variant.variant}
                          </div>
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
        )}
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
      </form>
    </Form>
  );
}
