"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductWithVariants } from "@/types/validations";
import { useRouter, useSearchParams } from "next/navigation";

type AdminProductsProps = {
  initialProducts: ProductWithVariants[];
  canNextPage: boolean;
  canPrevPage: boolean;
  totalPages: number;
  pageNumber: number;
};

const AdminProductsPagination = ({
  initialProducts,
  canNextPage,
  canPrevPage,
  pageNumber,
  totalPages,
}: AdminProductsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  return (
    <div className="min-h-[90vh] pt-2 px-1 mt-2 mb-4 md:mb-6">
      <div className="flex justify-between gap-0 items-center mt-4">
        <Button
          onClick={() => {
            router.push(`/admin/products?page=${Number(page) - 1}`);
          }}
          disabled={!canPrevPage}
        >
          Previous
        </Button>
        <Button
          onClick={() => {
            router.push(`/admin/products?page=${Number(page) + 1}`);
          }}
          disabled={!canNextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default AdminProductsPagination;
