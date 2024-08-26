import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import React from "react";
import AddProductForm from "../admin-form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ClipboardPen, Delete, DeleteIcon, PenTool, Trash } from "lucide-react";
import { deleteProduct } from "@/actions/admin.action";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import DeleteProduct from "./delete-product";

const page = async () => {
  const products = await prisma.product.findMany();
  // console.log(products);
  return (
    <main>
      <section className="max-w-5xl mx-auto">
        {/* Write typography css file to maintain typo consistency */}
        <h1>All Products</h1>

        {/* <Card className="my-2">
          <CardHeader className="pb-2">
            <CardDescription>This Month</CardDescription>
            <CardTitle className="text-4xl">$5,329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +10% from last month
            </div>
          </CardContent>
          <CardFooter>
            <Progress value={12} aria-label="12% increase" />
          </CardFooter>
        </Card> */}
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
            {products.map((product, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium w-96">
                  {product.title}
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.slug}</TableCell>
                <TableCell className="text-right flex">
                  <DeleteProduct id={product.id} />

                  <AddProductForm actionType="edit" data={product}/>
                  
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
