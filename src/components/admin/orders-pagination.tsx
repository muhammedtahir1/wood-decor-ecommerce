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

const NUMBER_OF_PRODUCTS_TO_FETCH = 8;
// Define a type for the extended OrderItem that includes the product
type ExtendedOrderItem = OrderItem & {
  product: Product;
};

// Define a type for the extended Order that includes the orderItems
type ExtendedOrder = Order & {
  orderItems: ExtendedOrderItem[];
};

type Tprops = {
  orderItems: {
    id: number;
    orderId: number;
    productId: number;
    quantity: number;
    color: string | null;
    variant: string | null;
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

const OrdersPagination = ({ initialOrders }: { initialOrders: Tprops[] }) => {
  const [orders, setOrders] = useState<Tprops[]>(initialOrders);
  const [offset, setOffset] = useState(NUMBER_OF_PRODUCTS_TO_FETCH);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const apiProducts = await getOrders({
          take: NUMBER_OF_PRODUCTS_TO_FETCH,
          skip: 0,
        });
        console.log("Fetched products:", apiProducts);
        setOrders(apiProducts);
        setOffset(NUMBER_OF_PRODUCTS_TO_FETCH);
        setHasMore(apiProducts.length === NUMBER_OF_PRODUCTS_TO_FETCH);
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []); // Remove offset from the dependency array
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

  console.log(orders);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
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
              <TableCell className="font-medium pr-10">{order.name}</TableCell>
              <TableCell>{order.email}</TableCell>
              <TableCell>{order.phone}</TableCell>
              <TableCell>{order.address}</TableCell>
              <TableCell>{order.totalAmount}</TableCell>
              <TableCell>{order.createdAt.toDateString()}</TableCell>
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
                            {/* <div className="max-size-[100px] border rounded-xl">
                              <Image
                                src={p.}
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
                            </div> */}
                            <div className="flex flex-col justify-between items-start w-full">
                              {/* <p className="font-semibold text-lg md:text-xl opacity-70 text-end">
                                {p.id}
                              </p> */}
                              {/* <h1 className="text-base md:text-lg font-gt font-bold text-ellipsis overflow-hidden max-w-52 whitespace-nowrap text-left">
                                {p.}
                              </h1> */}
                              {/* <p className="font-semibold text-lg md:text-xl opacity-70 text-end">
                                ₹{p}
                              </p> */}
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
