"use client";
import { getOrders } from "@/actions/admin.action";
import { Order, OrderItem, Product } from "@prisma/client";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ImSpinner6 } from "react-icons/im";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CircleArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TOrdersProps } from "@/types/validations";

const NUMBER_OF_PRODUCTS_TO_FETCH = 8;
// Define a type for the extended OrderItem that includes the product
type ExtendedOrderItem = OrderItem & {
  product: Product;
};

// Define a type for the extended Order that includes the orderItems
type ExtendedOrder = Order & {
  orderItems: ExtendedOrderItem[];
};

const OrdersPagination = ({
  initialOrders,
}: {
  initialOrders: TOrdersProps[];
}) => {
  const [orders, setOrders] = useState<TOrdersProps[]>(initialOrders);
  const [offset, setOffset] = useState(NUMBER_OF_PRODUCTS_TO_FETCH);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // console.log("Initial orders:", initialOrders);
  // console.log("Current orders state:", orders);

  const loadMoreProducts = async () => {
    if (!hasMore) return;

    setLoading(true);
    try {
      const apiProducts = await getOrders({
        take: NUMBER_OF_PRODUCTS_TO_FETCH,
        skip: offset,
      });
      if (apiProducts.length < NUMBER_OF_PRODUCTS_TO_FETCH) {
        setHasMore(false);
      }
      setOrders((prevProducts) => [...prevProducts, ...apiProducts]);
      setOffset((prevOffset) => prevOffset + NUMBER_OF_PRODUCTS_TO_FETCH);
    } catch (error) {
      console.error("Failed to load more products", error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(orders);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order Id</TableHead>
            <TableHead className="">Name</TableHead>
            <TableHead>email </TableHead>
            <TableHead>phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Ordered At</TableHead>
            {/* <TableHead>Status</TableHead> */}
            <TableHead className="text-right">Products ordered</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium pr-10">{order.id}</TableCell>
              <TableCell className="">{order.name}</TableCell>
              <TableCell>{order.email}</TableCell>
              <TableCell>{order.phone}</TableCell>
              <TableCell>{order.address}</TableCell>
              <TableCell>{order.totalAmount}</TableCell>
              <TableCell>{new Date(order.createdAt).toDateString()}</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger className="bg-black text-white px-3 py-2 rounded-md">
                    Products
                  </PopoverTrigger>
                  <PopoverContent className="">
                    {order.orderItems &&
                      order.orderItems.length > 0 &&
                      order.orderItems.map((p) => (
                        <Link href={`/products/`} key={p.id}>
                          <div className="py-1 px-2 flex justify-between items-center gap-3">
                            {p.product?.image && (
                              <Link href={`/products/${p.product.slug}`} className="max-size-[100px] border rounded-xl">
                                <Image
                                  src={p.product?.image as string}
                                  alt="cart-image"
                                  quality={100}
                                  width={60}
                                  height={60}
                                  className="rounded-xl object-cover size-[100px]"
                                  style={{
                                    objectFit: "contain",
                                    minWidth: "100px",
                                  }}
                                />
                              </Link>
                            )}
                            <div className="flex flex-col justify-between items-start w-full">
                              {/* <p className="font-semibold text-lg md:text-xl opacity-70 text-end">
                                {p.id}
                              </p> */}
                              <h1 className="text-base md:text-lg font-gt font-bold text-ellipsis overflow-hidden max-w-52 whitespace-nowrap text-left">
                                {p.product?.title}
                              </h1>
                              <p className="font-semibold text-lg md:text-xl opacity-70 text-end">
                                ₹{p.price}
                              </p>
                              <div className="flex items-center gap-1 flex-wrap py-1">
                                {p.variant && <Badge>{p.variant}</Badge>}
                                {p.color && <Badge>{p.color}</Badge>}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {loading && (
        <div className="flex justify-center items-center mt-4">
          <ImSpinner6 className="animate-spin" size={24} />
        </div>
      )}
      {!loading && hasMore && (
        <div className="flex mx-auto">
          <Button
            onClick={loadMoreProducts}
            className="mb-10 mt-5 md:mb-20 mx-auto"
          >
            Load More...
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrdersPagination;
