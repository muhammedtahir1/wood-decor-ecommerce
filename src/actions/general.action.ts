"use server";

import prisma from "@/lib/db";

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
  const products = await prisma.product.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          category: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
    },
    take,
    skip,
  });

  return products;
};

export { getSearchProducts };
