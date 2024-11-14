import prisma from "@/lib/db";
import React from "react";
import AdminProductsPagination from "@/components/admin/admin-products-pagination";
import { validateUrl } from "@/lib/utils";
import { ProductWithVariants } from "@/types/validations";
import AdminBreadCrumbComponent from "@/components/admin/admin-breadcrumb";
import { revalidatePath } from "next/cache";

const Page = async ({ searchParams: { page = "1" } }: { searchParams: { page: string } }) => {
  console.log(
    validateUrl(
      "https://utfs.io/f/2e1b285a-804f-443b-b1b9-bbea6deda5c5-r016zg.jpg"
    )
  );
  const products: ProductWithVariants[] = await prisma.product.findMany({
    include: {
      prices: true,
    },
  });

  console.log("🎈🎈🎈",page);
  const TABLE_PAGINATION_LIMIT = 10;

  let pageNumber : number;

  try {
    pageNumber = parseInt(page) || 1
    if(pageNumber < 1) pageNumber = 1
  } catch (error) {
    pageNumber=1
  }

  const paginationProducts : ProductWithVariants[]  = await prisma.product.findMany({
    skip: (pageNumber - 1) * TABLE_PAGINATION_LIMIT,
    take: TABLE_PAGINATION_LIMIT ,
    include : {
      prices: true
    }
    
  })
  revalidatePath(`/admin/products?page=${pageNumber}`)

  const totalProducts = await prisma.product.count();

  const canNextPage = totalProducts > TABLE_PAGINATION_LIMIT * pageNumber;
  const canPrevPage = pageNumber > 1;
  const totalPages = Math.ceil(totalProducts/TABLE_PAGINATION_LIMIT)



  return (
    <main>
      <section className="max-w-5xl mx-auto">
        <AdminBreadCrumbComponent slug="Products" />
        <h1 className="mt-2">All Products</h1>
        {/* <ProductVariantManager /> */}
        <AdminProductsPagination 
          initialProducts={paginationProducts} 
          canNextPage={canNextPage}
          canPrevPage={canPrevPage}
          totalPages={totalPages}
          pageNumber={pageNumber}
        />
      </section>
    </main>
  );
};

export default Page;
