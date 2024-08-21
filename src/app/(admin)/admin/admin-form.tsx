"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addProduct } from "@/actions/admin.action";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxReactHookFormMultiple } from "./test-checkbox";

const colors_options = [
  {
    id: "red",
    label: "Red",
  },
  {
    id: "blue",
    label: "Blue",
  },

  {
    id: "black",
    label: "Black",
  },
  {
    id: "white",
    label: "White",
  },
  {
    id: "other",
    label: "Let us know on call",
  },
] as const;

const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  price: z.coerce.number().int().positive(),
  description: z
    .string()
    .min(10, { message: "description must be at least 10 characters." })
    .optional(),
  // how do we include 0 as a valid value?
  discountedPrice: z.coerce.number().int().min(0).optional(),
  isFeatured: z.boolean().optional(),
  colors: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  category: z.string().optional(),
  image: z.string().optional(),
});

export default function AddProductForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      discountedPrice: 0,
      isFeatured: false,
      colors: ["black"],
      category: "",
      image: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    await addProduct(values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Product</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center mb-2 text-2xl">
            Add new Product
          </DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="A luxury L shaped sofa"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Pinterest Img URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex w-full justify-between">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="discountedPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Discounted Price</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Type your description here."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="isFeatured"
                  render={({ field }) => (
                    <FormItem className="flex gap-2 items-center ">
                      <FormLabel className="mt-2">Is Feature</FormLabel>
                      <FormControl>
                        <Switch
                          id="airplane-mode"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="colors"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">Colors</FormLabel>
                        <FormDescription>
                          Select the colors you want to add to your product.
                        </FormDescription>
                      </div>
                      {colors_options.map((color) => (
                        <FormField
                          key={color.id}
                          control={form.control}
                          name="colors"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={color.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(color.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            color.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== color.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {color.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select the category of the product" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sofa">Sofa</SelectItem>
                          <SelectItem value="bedding">Bedding</SelectItem>
                          <SelectItem value="kitchen">Kitchen</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select the category of the product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Add Product
                </Button>
              </form>
            </Form>{" "}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
