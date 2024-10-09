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
