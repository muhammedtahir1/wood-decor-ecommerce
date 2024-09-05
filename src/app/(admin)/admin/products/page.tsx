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
import { ClipboardPen, Delete, DeleteIcon, Ellipsis, PenTool, Trash } from "lucide-react";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { AdminBreadCrumbComponent } from "../../layout";

const page = async () => {
  const products = await prisma.product.findMany();
  // console.log(products);
  return (
    <main>
      <section className="max-w-5xl mx-auto">
        <AdminBreadCrumbComponent slug="Products" />
        <h1 className="mt-2">All Products</h1>
        {/* Write typography css file to maintain typo consistency */}

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
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-x-scroll">
            {products.map((product, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium w-96">
                  {product.title}
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.slug}</TableCell>
                <TableCell className="text-right flex">
                  <Popover>
                    <PopoverTrigger><Ellipsis /></PopoverTrigger>
                    <PopoverContent className="w-36 bg-transparent space-y-2 border-none">
                      <DeleteProduct id={product.id} />

                      <AddProductForm actionType="edit" data={product} />
                    </PopoverContent>
                  </Popover>


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
