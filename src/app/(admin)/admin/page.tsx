import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import React from "react";
import AddProductForm from "./admin-form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Delete, DeleteIcon, PenTool } from "lucide-react";

const page = async () => {
  
  const products = await prisma.product.findMany();
  // console.log(products);
  return (
    <main>
      <header className="flex justify-between border-b mb-5 py-5 px-10">
        <h1>Admin</h1>
        <AddProductForm />
      </header>
      <section className="max-w-5xl mx-auto">
        {/* Write typography css file to maintain typo consistency */}
        <h1>All Products</h1>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow>
                <TableCell className="font-medium w-96">
                  {product.title}
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.slug}</TableCell>
                <TableCell className="text-right">
                  <Button variant={"destructive"} size={"icon"}>
                    <DeleteIcon />
                  </Button>
                  <Button variant={"secondary"} size={"icon"}>
                    <PenTool />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
};

export default page;
