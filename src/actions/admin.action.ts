"use server";

import prisma from "@/lib/db";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";

const addProduct = async (formData: Omit<Product, "id">) => {
  console.log("Action running ✔✔✔✔");

  try {
    const newProduct = await prisma.product.create({
      data: {
        title: "L3 shape Classic Memory Foam Mattress",
        price: 30999,
        description: "product description",
        slug: "l3shape",
        category: "sofa",
        images: [
          "https://ik.imagekit.io/2xkwa8s1i/consumer-react/category-thumb/mattress-recommendation.jpg?tr=w-1349",
          "image2",
        ],
      },
    });

    console.log("🔥🔥🔥", newProduct);
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/admin");
};

export { addProduct };
