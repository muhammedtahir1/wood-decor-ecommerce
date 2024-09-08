"use server";

import prisma from "@/lib/db";
import { searchProductByKeyword } from "@/lib/server-utils";

const getSearchProducts = async ({
  query,
  take,
  skip = 0,
}: {
  query: string;
  take: number;
  skip?: number;
}) => {
  // query to get products which include the search query
  const products = searchProductByKeyword(query, take, skip)


  return products;
};

export { getSearchProducts };
