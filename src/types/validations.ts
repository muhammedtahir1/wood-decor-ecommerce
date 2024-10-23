import { Product, Variants } from "@prisma/client";
import { z } from "zod";

export type TcreateOrderProps = {
  amount: string;
  currency?: string;
};

// type Price = {
//   variant: string;
//   price: number;
//   discountedPrice?: number;
// }[];

export type ProductCardProps = Product & {
  prices: Variants[];
};

export type ProductWithVariants = {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  image: string;
  colors: string[]; // Array of strings representing colors
  label: string | null; // Can be a string or null
  isFeatured: boolean;
  rating: number;
  prices: Variant[]; // Array of Variant objects
};

type Variant = {
  id: number;
  variant: string;
  price: number;
  discountedPrice: number | null; // Can be a number or null
  productId: number;
};

// const a: ProductWithVariants = ;

export type TOrdersProps = {
  orderItems: {
    id: number;
    orderId: number;
    productId: number;
    price: number;
    quantity: number;
    color: string | null;
    variant: string | null;
    product?: {
      image?: string;
      slug?: string;
      title: string;
    };
  }[];
} & {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  totalAmount: number;
  status: string;
  createdAt: Date;
};

export const variantSchema = z.object({
  variant: z.string().min(1, "Variant name is required").optional(),
  price: z.coerce
    .number()
    .int()
    .positive("Price must be a positive integer")
    .optional(),
  discountedPrice: z.coerce
    .number()
    .int()
    .positive("Discounted price must be a positive integer")
    .optional(),
});

/*

TODO: new approach 👋👋👋👋

1. make this component split up into leaf component for read ability
2. Handle price variants in normal state and
     when submitting take the state variable and then submit




*/

export const addProductFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "title must be at least 2 characters.",
    })
    .max(70, { message: "title max length 70 chars" }),
  description: z
    .string()
    .min(10, { message: "description must be at least 10 characters." })
    .max(2000, { message: "description max length 2000 characters" })
    .optional(),
  // how do we include 0 as a valid value?
  isFeatured: z.boolean().optional(),
  colors: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  category: z.string().optional(),
  image: z.string().optional(),
  rating: z.number().default(4.2),
  label: z.string().optional(),
  // prices: z
  //   .array(variantSchema)
  //   .min(1, "At least one variant is required")
  //   .refine(
  //     (variants) =>
  //       new Set(variants.map((v) => `${v.variant}-${v.price}`)).size ===
  //       variants.length,
  //     "Each variant must have a unique combination of name and price"
  //   ),
});

export type VariantType = {
  variant: string;
  price: number;
  discountedPrice: number | null; // Can be a number or null
  productId?: Product["id"];
  id?: Variants["id"];
};
