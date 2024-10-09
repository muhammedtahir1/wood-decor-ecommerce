import "server-only";
import prisma from "./db";

export const searchProductByKeyword = async (
  query: string,
  take: number,
  skip: number
) => {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
        // {
        //     description: {
        //         contains: query,
        //         mode: "insensitive",
        //     },
        // },
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
    include: {
      prices: true,
    },
  });
  return products;
};
