"use server";

import prisma from "@/lib/db";
import { VariantType } from "@/types/validations";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";

type TFormData = {
  title: string;
  // price: number;
  colors: string[];
  // variants?: Variants[];
  description?: string | undefined;
  // discountedPrice?: number | undefined;
  category?: string | undefined;
  image?: string | undefined;
  isFeatured?: boolean | undefined;
  rating?: number | undefined;
  label?: string | undefined;
};

const getProducts = async ({ take, skip }: { take: number; skip: number }) => {
  // Add try and catch
  const products = await prisma.product.findMany({
    take,
    skip,
    include: {
      prices: true,
    },
  });

  return products;
};

const getOrders = async ({ take, skip }: { take: number; skip: number }) => {
  const orders = await prisma.order.findMany({
    take,
    skip,
    include: {
      orderItems: true,
    },
  });

  // console.log("order---", orders);

  return orders;
};

const addProduct = async (
  formData: TFormData & { variants: VariantType[] }
) => {
  /*
  TODO: NEW approach
  newProduct = create the product
  use the newProduct.id to create variants
  */

  try {
    const newProduct = await prisma.product.create({
      data: {
        title: formData.title as string,
        description: formData.description as string,
        slug: (formData.title as string)
          .toLowerCase()
          .trim()
          .replace(/[^a-zA-Z0-9 ]/g, "")
          .replaceAll(" ", "-"),
        category: formData.category as string,
        image: formData.image as string,
        colors: formData.colors as string[],
        // TODO: work here.
        prices: {
          create: formData.variants.map((variant) => ({
            price: variant.price,
            variant: variant.variant,
            discountedPrice: variant.discountedPrice,
          })),
        },
        isFeatured: formData.isFeatured as boolean,
        rating: formData.rating as number,
        label: formData.label as string,
      },
    });
  } catch (error) {
    console.error(error);
    return {
      success: "Something went wrong",
      error: error,
    };
  }

  revalidatePath("/admin");
  return {
    success: true,
  };
};

const deleteProduct = async (id: Product["id"]) => {
  try {
    await prisma.$transaction(async (tx) => {
      // Delete related Variants
      await tx.variants.deleteMany({
        where: { productId: id },
      });

      // Delete related OrderItems
      await tx.orderItem.deleteMany({
        where: { productId: id },
      });

      // Finally, delete the Product
      await tx.product.delete({
        where: { id: id },
      });
    });
  } catch (error) {
    console.error(error);
    return { success: false };
  }

  revalidatePath("/admin");
  return { success: true };
};

const editProduct = async (
  id: Product["id"],
  formData: TFormData & { variants: VariantType[] }
) => {
  /*
  TODO: NEW approach
    1. handle different variations, refer gpt @warandrule

  */

  console.log("id, formData");
  console.log(id, formData);
  try {
    // Part 1 ✅
    await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        title: formData.title as string,
        description: formData.description as string,
        category: formData.category as string,
        image: formData.image as string,
        colors: formData.colors as string[],

        isFeatured: formData.isFeatured as boolean,
        rating: formData.rating as number,
        label: formData.label as string,
      },
    });
    //Part 2

    // Step 2: Handle variants (add, update, delete)
    const dbVariants = await prisma.variants.findMany({
      where: { productId: id },
    });
    const existingVariantIds = dbVariants.map((v) => v.id);

    for (const variant of formData.variants) {
      if (!variant.id) {
        // Case 1: New variant (no variantId present)
        await prisma.variants.create({
          data: {
            price: variant.price,
            productId: id, // associate with product
            variant: variant.variant,
            discountedPrice: variant.discountedPrice || 0,
          },
        });
      } else if (existingVariantIds.includes(variant.id)) {
        // Case 2: Update existing variant
        await prisma.variants.update({
          where: { id: variant.id },
          data: {
            price: variant.price,
            variant: variant.variant,
            discountedPrice: variant.discountedPrice || 0,
          },
        });
      }
    }
    // Step 3: Delete variants that were removed
    const variantIdsInForm = formData.variants
      .map((v) => v.id)
      .filter((id) => id); // only non-null variantIds

    const variantsToDelete = dbVariants.filter(
      (v) => !variantIdsInForm.includes(v.id)
    );

    await prisma.variants.deleteMany({
      where: {
        id: { in: variantsToDelete.map((v) => v.id) },
      },
    });
  } catch (error) {
    console.error(error);
    return {
      success: "Something went wrong",
      error: error,
    };
  }

  revalidatePath("/admin");
  return {
    success: true,
  };
};

export { addProduct, deleteProduct, editProduct, getProducts, getOrders };
