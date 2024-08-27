import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import React from "react";
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

const page = async () => {
  const orders = await prisma.order.findMany();
  return (
    <div>
      <h1>Orders</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">createdAt</TableHead>
            <TableHead>totalAmount</TableHead>
            <TableHead>status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium w-96">
                {order.createdAt.toDateString()}
              </TableCell>
              <TableCell>{order.totalAmount}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell className="text-right">
                <Select>
                  <SelectTrigger className="w-[180px]">
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
