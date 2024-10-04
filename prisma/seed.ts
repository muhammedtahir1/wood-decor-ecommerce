import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

const products: Omit<Product, "id">[] = [
  {
    title: "Isadora Lounge Sofa",
    category: "sofa",
    colors: ["#f0f0f0", "#f0f0f0", "#f0f0f0"],
    description: "",
    price: 10000,
    image: "",
    slug: "",
    discountedPrice: null,
    variants: [],
    label: null,
    rating: 0,
    isFeatured: false,
  },
  {
    title: "Chair set Luxury",
    category: "chair",
    colors: ["#f0f0f0", "#f0f0f0", "#f0f0f0"],
    description: "",
    price: 10000,
    image: "",
    slug: "",
    discountedPrice: null,
    variants: [],
    label: null,
    rating: 0,
    isFeatured: false,
  },
  {
    title: "3 seater living room bed",
    category: "bed",
    colors: ["#f0f0f0", "#f0f0f0", "#f0f0f0"],
    description: "",
    price: 10000,
    image: "",
    slug: "",
    discountedPrice: null,
    variants: [],
    label: null,
    rating: 0,
    isFeatured: false,
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const product of products) {
    const result = await prisma.product.create({
      data: product,
    });
    console.log(`Created pet with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
