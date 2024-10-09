import { Product, Variants } from "@prisma/client";

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

type ProductWithVariants = Product & { prices: Variants };
