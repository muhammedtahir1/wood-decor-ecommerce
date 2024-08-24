"use server";

import prisma from "@/lib/db";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";

const addProduct = async (formData: {
  title: string;
  price: number;
  colors: string[];
  description?: string | undefined;
  discountedPrice?: number | undefined;
  category?: string | undefined;
  image?: string | undefined;
  isFeatured?: boolean | undefined;
}) => {
  // console.log("Action running ✔✔✔✔");

  try {
    const newProduct = await prisma.product.create({
      data: {
        title: formData.title as string,
        price: formData.price,
        description: formData.description as string,
        slug: (formData.title as string)
          .toLowerCase()
          .trim()
          .replace(/[^a-zA-Z0-9 ]/g, "")
          .replaceAll(" ", "-"),
        category: formData.category as string,
        discountedPrice: formData.discountedPrice,
        image: formData.image as string,
        colors: formData.colors as string[],
      },
    });

    console.log("🔥🔥🔥", newProduct);
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/admin");
};

const deleteProduct = async (id: Product["id"]) => {
  try {
    await prisma.product.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/admin");
};

export { addProduct, deleteProduct };
