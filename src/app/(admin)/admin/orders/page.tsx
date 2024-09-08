import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AdminBreadCrumbComponent } from "../../layout";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const page = async () => {
  const orders = await prisma.order.findMany({
    include: {
      orderItems: {
        include: {
          product: {
            select: {
              id: true,
              image: true, // Ensure this field exists in your Product model
              title: true, // Ensure this field exists in your Product model
              slug: true,   // Ensure this field exists in your Product model
              price: true
            }
          }
        }
      }
    }
  });
  // console.log(orders[1].orderItems)
  return (
    <div >
      <AdminBreadCrumbComponent slug="orders" />

      <h1>Orders</h1>
      <Table >
        {/* <TableCaption className="mt-auto">A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>email </TableHead>
            <TableHead>phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Ordered At</TableHead>
            {/* <TableHead>Status</TableHead> */}
            <TableHead className="text-right">
              Products ordered
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium pr-10">
                {order.name}
              </TableCell>
              <TableCell>
                {order.email}
              </TableCell>
              <TableCell>{order.phone}</TableCell>
              <TableCell>{order.address}</TableCell>
              <TableCell>{order.totalAmount}</TableCell>
              <TableCell>{order.createdAt.toDateString()}</TableCell>
              {/* <TableCell className="text-right">
                <Select>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Order Process" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="apple">Pending</SelectItem>
                      <SelectItem value="banana">Delivered</SelectItem>
                      <SelectItem value="blueberry">Processing</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell> */}
              <TableCell>
                <Popover>
                  <PopoverTrigger className="bg-black text-white px-3 py-2 rounded-md">
                    Products
                  </PopoverTrigger>
                  <PopoverContent className="">
                    {order.orderItems.length > 0 && order.orderItems.map(p => (
                      <Link href={`/products/${p.product.slug}`} key={p.product.id}>
                        <div className="py-1 px-2 flex justify-between items-center gap-3" >
                          <div className="max-size-[100px] border rounded-xl">
                            <Image
                              src={p.product.image}
                              alt="cart-image"
                              quality={100}
                              width={60}
                              height={60}
                              className="rounded-xl object-cover size-[100px]"
                              style={{ objectFit: 'contain', minWidth: "100px" }}
                            />
                          </div>
                          <div className="flex flex-col justify-between items-start w-full">
                            {/* <p className="font-semibold text-lg md:text-xl opacity-70 text-end">
                            {p.id}
                          </p> */}
                            <h1 className="text-base md:text-lg font-gt font-bold text-ellipsis overflow-hidden max-w-52 whitespace-nowrap text-left">
                              {p.product.title}
                            </h1>
                            <p className="font-semibold text-lg md:text-xl opacity-70 text-end">
                              ₹
                              {p.product.price}
                            </p>
                            <div className="flex items-center gap-1 flex-wrap py-1">
                              {p.variant && <Badge>
                                {p.variant}
                              </Badge>}
                              {p.color && <Badge>
                                {p.color}
                              </Badge>}
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
    </div>
  );
};

export default page;
