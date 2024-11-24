import prisma from "@/lib/db";
import AdminProductsPagination from "@/components/admin/admin-products-pagination";
import { ProductWithVariants } from "@/types/validations";
import AdminBreadCrumbComponent from "@/components/admin/admin-breadcrumb";
import { revalidatePath } from "next/cache";
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
import DeleteProduct from "@/components/admin/delete-product";
import AddProductForm from "@/components/admin/admin-form";

const Page = async ({
  searchParams,
}: {
  searchParams: { page: string; title?: string };
}) => {
  // Getting the page number from the query params
  const { page, title } = searchParams;
  const TABLE_PAGINATION_LIMIT = 10;
  let pageNumber: number;

  try {
    pageNumber = parseInt(page) || 1;
    if (pageNumber < 1) pageNumber = 1;
  } catch (error) {
    pageNumber = 1;
  }

  // Fetching the products from the database
  const paginationProducts: ProductWithVariants[] =
    await prisma.product.findMany({
      where: {
        title: title
          ? {
              contains: title,
              mode: "insensitive",
            }
          : undefined,
      },
      skip: (pageNumber - 1) * TABLE_PAGINATION_LIMIT,
      take: TABLE_PAGINATION_LIMIT,
      include: {
        prices: true,
      },
    });
  // revalidatePath(`/admin/products?page=${pageNumber}?title=${title}`);

  // Getting the total number of products
  const totalProducts = await prisma.product.count({
    where: {
      title: title
        ? {
            contains: title,
            mode: "insensitive",
          }
        : undefined,
    },
  });

  // Checking if there are more products that can be fetched from the database
  const canNextPage = totalProducts > TABLE_PAGINATION_LIMIT * pageNumber;
  const canPrevPage = pageNumber > 1;
  const totalPages = Math.ceil(totalProducts / TABLE_PAGINATION_LIMIT);

  return (
    <main>
      <section className="max-w-5xl mx-auto">
        <AdminBreadCrumbComponent slug="Products" />
        <h1 className="mt-2">All Products</h1>
        {/* <ProductVariantManager /> */}
        <section>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="overflow-x-scroll">
              {paginationProducts.map((product, i) => (
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
          </Table>
        </section>
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
