import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { X } from "lucide-react";

const variantSchema = z.object({
  variant: z.string().min(1, "Variant name is required"),
  price: z.coerce.number().int().positive("Price must be a positive integer"),
  discountedPrice: z.coerce
    .number()
    .int()
    .positive("Discounted price must be a positive integer")
    .optional(),
});

const formSchema = z.object({
  prices: z
    .array(variantSchema)
    .min(1, { message: "At least one variant is required" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ProductVariantManager({
  initialVariants = [{ variant: "DEFAULT", price: 0 }],
}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prices: initialVariants,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "prices",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex space-x-2">
          <FormField
            control={form.control}
            name={`prices.${fields.length}.variant`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Variant name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`prices.${fields.length}.price`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="number" placeholder="Price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`prices.${fields.length}.discountedPrice`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Discounted Price"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="button"
            onClick={() => append({ variant: "", price: 0 })}
            className="bg-black text-white"
          >
            + Add
          </Button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center space-x-2">
            <FormField
              control={form.control}
              name={`prices.${index}.variant`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`prices.${index}.price`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`prices.${index}.discountedPrice`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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

        <Button type="submit">Save Variants</Button>
      </form>
    </Form>
  );
}
