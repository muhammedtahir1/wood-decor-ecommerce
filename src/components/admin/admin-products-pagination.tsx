"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { ImSpinner6 } from "react-icons/im";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ellipsis } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DeleteProduct from "./delete-product";
import AddProductForm from "./admin-form";
import { getProducts } from "@/actions/admin.action";
import { ProductWithVariants } from "@/types/validations";
import { columns, DataTable } from "./data-table";

// const NUMBER_OF_PRODUCTS_TO_FETCH = 8;

type AdminProductsProps = {
  initialProducts: ProductWithVariants[];
  canNextPage: boolean;
  canPrevPage: boolean;
  totalPages : number;
  pageNumber: number
}

const AdminProductsPagination = ({
  initialProducts,
  canNextPage,
  canPrevPage,
  pageNumber,
  totalPages
}: AdminProductsProps) => {
  const [products, setProducts] =
    useState<ProductWithVariants[]>(initialProducts);
  // const [offset, setOffset] = useState(NUMBER_OF_PRODUCTS_TO_FETCH);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const apiProducts = await getProducts({
  //         take: NUMBER_OF_PRODUCTS_TO_FETCH,
  //         skip: 0,
  //       });
  //       console.log("Fetched products:", apiProducts);
  //       setProducts(apiProducts);
  //       setOffset(NUMBER_OF_PRODUCTS_TO_FETCH);
  //       setHasMore(apiProducts.length === NUMBER_OF_PRODUCTS_TO_FETCH);
  //     } catch (error) {
  //       console.error("Failed to load products", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchProducts();
  // }, []); // Remove offset from the dependency array

  // const loadMoreProducts = async () => {
  //   if (!hasMore) return;

  //   setLoading(true);
  //   try {
  //     const apiProducts = await getProducts({
  //       take: NUMBER_OF_PRODUCTS_TO_FETCH,
  //       skip: offset,
  //     });
  //     if (apiProducts.length < NUMBER_OF_PRODUCTS_TO_FETCH) {
  //       setHasMore(false);
  //     }
  //     setProducts((prevProducts) => [...prevProducts, ...apiProducts]);
  //     setOffset((prevOffset) => prevOffset + NUMBER_OF_PRODUCTS_TO_FETCH);
  //   } catch (error) {
  //     console.error("Failed to load more products", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  return (
    <div className="min-h-[90vh] pt-2 px-1 mt-2 mb-4 md:mb-6">
      {/* <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Name</TableHead>
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
              <TableCell>{product.slug}</TableCell>
              <TableCell className="text-right flex">
                <Popover>
                  <PopoverTrigger>
                    <Ellipsis />
                  </PopoverTrigger>
                  <PopoverContent className="w-36 bg-transparent space-y-2 border-none">
                    <DeleteProduct id={product.id} />
                    <AddProductForm actionType="edit" data={product} />
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}

      <DataTable columns={columns} data={products} canNextPage={canNextPage} canPrevPage={canPrevPage} pageNumber={pageNumber} totalPages={totalPages}/>

      {/* {loading && (
        <div className="flex justify-center items-center mt-4">
          <ImSpinner6 className="animate-spin" size={24} />
        </div>
      )}

      {!loading && hasMore && (
        <Button onClick={loadMoreProducts} className="mb-10 md:mb-20">
          Load More...
        </Button>
      )} */}
    </div>
  );
};

export default AdminProductsPagination;
