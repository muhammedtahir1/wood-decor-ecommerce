"use server";

import prisma from "@/lib/db";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";

const addProduct = async (formData) => {
  console.log("Action running ✔✔✔✔");

  try {
    const newProduct = await prisma.product.create({
      data: {
        title: formData.title as string,
        price: Number(formData.price as string),
        description: formData.description as string,
        slug: (formData.title as string)
          .toLowerCase()
          .trim()
          .replace(/[^a-zA-Z0-9 ]/g, "")
          .replaceAll(" ", "-"),
        category: formData.category as string,
        discountedPrice: Number(formData.discountedPrice as string),
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
