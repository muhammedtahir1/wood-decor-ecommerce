import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();
type newProduct = Omit<Product, "id">


const products: newProduct[] = [
  {
    title: "Isadora Lounge Sofa",
    slug: "isadora-lounge-sofa",
    description:
      "<h3>Isadora Lounge Sofa</h3><p></p><ul><li><p><strong>asdfasdf</strong></p><h3>asdfasdfasdf</h3><p>asdfasdfasdf</p><ul><li><p>asdfasdf</p></li><li><p>asldkfjasdf</p></li><li><p></p></li></ul></li></ul><p></p><p></p>",
    // prices: [
    //   {
    //     variant: "",
    //     price: 10
    //   }
    // ],
    category: "lounger sofa",
    image:
      "https://i.pinimg.com/564x/ec/ca/67/ecca673e7a5fd64099f30da4a88e2bb8.jpg",
    colors: ["red", "blue"],
    label: null,
    isFeatured: true,
    rating: 5,
  },
  {
    title: "Chair set Luxury",
    slug: "chair-set-luxury",
    description: "Chair set Luxury",
    // price: 12999,
    category: "wing chairs",
    image: "https://utfs.io/f/2e1b285a-804f-443b-b1b9-bbea6deda5c5-r016zg.jpg",
    // variants: ["6 chairs-14999", "8 chairs-18999"],
    colors: ["red", "blue", "black"],
    label: "🎉Best Seller",
    isFeatured: true,
    rating: 1.5,
  },
  {
    title: "3 seater living room sofa",
    slug: "3-seater-living-room-sofa",
    description:
      "home decor home design home aesthetic home nails home painting home wallpapers home organization home quotes home interior garden design garden tattoo garden drawing garden outdoor gardening landscaping kitchen design kitchen decor kitchen cabinets bathroom bathroom tile bathroom flooring living room sofa",
    // price: 28999,
    // discountedPrice: 2699,
    category: "3+2 sofa",
    image:
      "https://i.pinimg.com/736x/18/ec/22/18ec229e8b3b79b948d523b4962d03dd.jpg",
    // variants: [],
    colors: ["red", "black", "blue"],
    label: "New Collection",
    isFeatured: true,
    rating: 0,
  },
  {
    title: "Modern Faux Leather Upholstered 3-Seater Sofa",
    slug: "modern-faux-leather-upholstered-3seater-sofa",
    description:
      "Buying wood decor Furniture is a smart and easy decision. Shop quality furniture from sofa sets to faucets of all styles, delivered fast and shipping-free.",
    // price: 42888,
    // discountedPrice: 0,
    category: "wooden sofa",
    image:
      "https://i.pinimg.com/564x/25/c3/63/25c363c86193cb75b831aeef28b0995c.jpg",
    // variants: [],
    colors: ["red", "black"],
    label: null,
    isFeatured: false,
    rating: 0,
  },
  {
    title: "Queen Size 4 Storage Drawers Bed, Upholstered bed",
    slug: "queen-size-4-storage-drawers-bed-upholstered-bed",
    description:
      "Homfa Queen Storage Bed, Platform Bed Frame with 4 Storage Drawers, Tufted Upholstered Headboard, Beige - at wooddecor.in",
    // price: 45796,
    // discountedPrice: 0,
    category: "upholstery bed",
    image:
      "https://i.pinimg.com/564x/63/d0/d9/63d0d99654d048bf3c5c68ea8015694a.jpg",
    // variants: [],
    colors: ["black", "white", "other"],
    label: null,
    isFeatured: true,
    rating: 0,
  },
  {
    title: "Platform Wooden Bed Walnut Ash Wood Finished",
    slug: "platform-wooden-bed-walnut-ash-wood-finished",
    description:
      "Both architectural and comfy, this wooden bed in mid-century style is a dream from every angle. Aligned with the style of classic construction with sophistication texture, the combination of high-quality materials and symmetric inclining grain lines in the headboard make the design modern and fresh.",
    // price: 36000,
    // discountedPrice: 0,
    category: "wooden beds",
    image:
      "https://i.pinimg.com/564x/31/6d/7b/316d7ba3fa5b06b15b8d4064f3f1b78a.jpg",
    // variants: [],
    colors: ["blue", "other"],
    label: null,
    isFeatured: false,
    rating: 4.5,
  },
  {
    title: "Custom Made - Upholstered Twin Bed",
    slug: "custom-made-upholstered-twin-bed",
    description:
      "Wall panels for headboards of any size and design for king beds, queen beds, full and twin beds. We can make headboards of other sizes. ✔ DESIGN. Wall panels are the simple and fast way of changing design of your apartments and working places.",
    // price: 46999,
    // discountedPrice: 0,
    category: "upholstery bed",
    image:
      "https://i.pinimg.com/564x/b6/ae/2d/b6ae2d30687b590536c94e29be9cb8bc.jpg",
    // variants: [],
    colors: ["blue", "other"],
    label: null,
    isFeatured: false,
    rating: 0,
  },
  {
    title: "Leather Upholstered Bed Sunken Metal and Wood Bed Frame",
    slug: "leather-upholstered-bed-sunken-metal-and-wood-bed-frame",
    description:
      "Add sparkle to your bedroom with this modern and light luxury bed. Built with a solid wood frame, it features low-profile side rails and some bed slats with encrypted solid wood. The eye-catching headboard is designed in an upright style that adapts to the reclining position to relieve neck pressure.",
    // price: 58999,
    // discountedPrice: 0,
    category: "upholstery bed",
    image:
      "https://i.pinimg.com/736x/b7/bc/8c/b7bc8ccb864e7b7ec8394e33a107b457.jpg",
    // variants: [],
    colors: ["other"],
    label: null,
    isFeatured: false,
    rating: 0,
  },
  {
    title: "Sofa with Curved Design - Left Chaise Lounge",
    slug: "sofa-with-curved-design-left-chaise-lounge",
    description:
      "Product Details Transform your space with our beige Nordic-style sofa, showcasing a sophisticated curved design that enhances openness and flow. The contoured backrest and seat cushion are crafted with high-density foam filling, offering exceptional breathability and excellent rebound for ultimate comfort. Choose between the luxurious upholstery sofa",
    // price: 56899,
    // discountedPrice: 0,
    category: "lounger sofa",
    image:
      "https://i.pinimg.com/564x/a3/a0/b8/a3a0b83353c43f10eb89e0144abb6a57.jpg",
    // variants: [],
    colors: ["other", "white", "blue", "black"],
    label: null,
    isFeatured: false,
    rating: 0,
  },
  {
    title: "Pillow Top Arms Modular Sofa",
    slug: "pillow-top-arms-modular-sofa",
    description:
      "Sofa sofa with modern simple style design, smooth lines, bright colors, perfect integration in a variety of home environments. The fabric of the red filling area is made of high-quality Genuine Leather, which not only has a delicate touch, but also has a good sense of elasticity and design, making the sofa more elegant. The seat bag of the sofa was filled with Polyester cotton+Foam, while the backrest was filled with Down+Synthetic Fiber+Polyester cotton. This filler ensures the comfort and soft",
    // price: 21999,
    // discountedPrice: 0,
    category: "3+2 sofa",
    image: "",
    // variants: ["3 Seater", "3 + 2 Seater", "3+1+1 seater"],
    colors: ["other"],
    label: null,
    isFeatured: false,
    rating: 0,
  },
  {
    title: "Test sofa image url",
    slug: "test-sofa-image-url",
    description:
      "Image url not working, in console its showing image url as empty",
    // price: 10,
    // discountedPrice: 0,
    category: "3+2 sofa",
    image: "",
    // variants: [],
    colors: ["other"],
    label: null,
    isFeatured: false,
    rating: 0,
  },
  {
    title: "test upload thing",
    slug: "test-upload-thing",
    description: "test upload thing",
    // price: 19,
    // discountedPrice: 0,
    category: "3+2 sofa",
    image: "https://utfs.io/f/ea8dffc0-af40-454b-a8ec-6463e66a3f68-gd8bc1.jpg",
    // variants: [],
    colors: ["other"],
    label: null,
    isFeatured: false,
    rating: 0,
  },
  {
    title: "Scandinavian Wood Seats 4 Large Pillows Top Arm Sofa Chaise",
    slug: "scandinavian-wood-seats-4-large-pillows-top-arm-sofa-chaise",
    description:
      "<p><strong>Features</strong></p><p></p><p><strong>Number of Items</strong>:</p><p> Include 3 Pieces Set Seating Capacity Seat 4 Product Type Sofa Chaise Shape L-Shape Orientation Left, Right Design Stationary Back Style Cushion Back Nailhead Trim Without Nailhead Trim Slipcovered Without Slipcover Purposeful Distressing Type No Distressing Feature Chaise Designs Upholstery Material Tech Cloth Color Off-White, Lake Blue, Dark Gray/Orange, Light Gray.</p>",
    // price: 45000,
    // discountedPrice: 0,
    category: "lounger sofa",
    image:
      "https://i.pinimg.com/564x/6b/91/1f/6b911ffd3875fef3a61fef6bb8c4342d.jpg",
    // variants: ["3 + Lounge"],
    colors: ["other"],
    label: null,
    isFeatured: true,
    rating: 0,
  },
  {
    title: "Modern Faux Leather Upholstered 3-Seater Sofa",
    slug: "modern-faux-leather-upholstered-3seater-sofa",
    description: "Buying wood decor Furniture is a smart and easy decision. Shop quality furniture from sofa sets to faucets of all styles, delivered fast and shipping-free.",
    // price: 42888,
    // discountedPrice: 0,
    category: "wooden sofa",
    image: "https://i.pinimg.com/564x/25/c3/63/25c363c86193cb75b831aeef28b0995c.jpg",
    // variants: [],
    colors: ["red", "black"],
    label: null,
    isFeatured: false,
    rating: 0
  },
  {
    title: "Queen Size 4 Storage Drawers Bed, Upholstered bed",
    slug: "queen-size-4-storage-drawers-bed-upholstered-bed",
    description: "Homfa Queen Storage Bed, Platform Bed Frame with 4 Storage Drawers, Tufted Upholstered Headboard, Beige - at wooddecor.in",
    // price: 45796,
    // discountedPrice: 0,
    category: "upholstery bed",
    image: "https://i.pinimg.com/564x/63/d0/d9/63d0d99654d048bf3c5c68ea8015694a.jpg",
    // variants: [],
    colors: ["black", "white", "other"],
    label: null,
    isFeatured: true,
    rating: 0
  },
  {
    title: "Platform Wooden Bed Walnut Ash Wood Finished",
    slug: "platform-wooden-bed-walnut-ash-wood-finished",
    description: "Both architectural and comfy, this wooden bed in mid-century style is a dream from every angle. Aligned with the style of classic construction with sophistication texture, the combination of high-quality materials and symmetric inclining grain lines in the headboard make the design modern and fresh.",
    // price: 36000,
    // discountedPrice: 0,
    category: "wooden beds",
    image: "https://i.pinimg.com/564x/31/6d/7b/316d7ba3fa5b06b15b8d4064f3f1b78a.jpg",
    // variants: [],
    colors: ["blue", "other"],
    label: null,
    isFeatured: false,
    rating: 4.5
  },
  {
    title: "Custom Made - Upholstered Twin Bed",
    slug: "custom-made-upholstered-twin-bed",
    description: "Wall panels for headboards of any size and design for king beds, queen beds, full and twin beds. We can make headboards of other sizes. ✔ DESIGN. Wall panels are the simple and fast way of changing design of your apartments and working places.",
    // price: 46999,
    // discountedPrice: 0,
    category: "upholstery bed",
    image: "https://i.pinimg.com/564x/b6/ae/2d/b6ae2d30687b590536c94e29be9cb8bc.jpg",
    // variants: [],
    colors: ["blue", "other"],
    label: null,
    isFeatured: false,
    rating: 0
  },
  {
    title: "Leather Upholstered Bed Sunken Metal and Wood Bed Frame",
    slug: "leather-upholstered-bed-sunken-metal-and-wood-bed-frame",
    description: "Add sparkle to your bedroom with this modern and light luxury bed. Built with a solid wood frame, it features low-profile side rails and some bed slats with encrypted solid wood. The eye-catching headboard is designed in an upright style that adapts to the reclining position to relieve neck pressure.",
    // price: 58999,
    // discountedPrice: 0,
    category: "upholstery bed",
    image: "https://i.pinimg.com/736x/b7/bc/8c/b7bc8ccb864e7b7ec8394e33a107b457.jpg",
    // variants: [],
    colors: ["other"],
    label: null,
    isFeatured: false,
    rating: 0
  },
  {
    title: "Sofa with Curved Design - Left Chaise Lounge",
    slug: "sofa-with-curved-design-left-chaise-lounge",
    description: "Product Details Transform your space with our beige Nordic-style sofa, showcasing a sophisticated curved design that enhances openness and flow. The contoured backrest and seat cushion are crafted with high-density foam filling, offering exceptional breathability and excellent rebound for ultimate comfort. Choose between the luxurious upholstery sofa",
    // price: 56899,
    // discountedPrice: 0,
    category: "lounger sofa",
    image: "https://i.pinimg.com/564x/a3/a0/b8/a3a0b83353c43f10eb89e0144abb6a57.jpg",
    // variants: [],
    colors: ["other", "white", "blue", "black"],
    label: null,
    isFeatured: false,
    rating: 0
  },
  {
    title: "Pillow Top Arms Modular Sofa",
    slug: "pillow-top-arms-modular-sofa",
    description: "Sofa sofa with modern simple style design, smooth lines, bright colors, perfect integration in a variety of home environments. The fabric of the red filling area is made of high-quality Genuine Leather, which not only has a delicate touch, but also has a good sense of elasticity and design, making the sofa more elegant. The seat bag of the sofa was filled with Polyester cotton+Foam, while the backrest was filled with Down+Synthetic Fiber+Polyester cotton. This filler ensures the comfort and soft",
    // price: 21999,
    // discountedPrice: 0,
    category: "3+2 sofa",
    image: "",
    // variants: ["3 Seater", "3 + 2 Seater", "3+1+1 seater"],
    colors: ["other"],
    label: null,
    isFeatured: false,
    rating: 0
  },
  {
    title: "Test sofa image url",
    slug: "test-sofa-image-url",
    description: "Image url not working, in console its showing image url as empty",
    // price: 10,
    // discountedPrice: 0,
    category: "3+2 sofa",
    image: "",
    // variants: [],
    colors: ["other"],
    label: null,
    isFeatured: false,
    rating: 0
  },
  {
    title: "test upload thing",
    slug: "test-upload-thing",
    description: "test upload thing",
    // price: 19,
    // discountedPrice: 0,
    category: "3+2 sofa",
    image: "https://utfs.io/f/ea8dffc0-af40-454b-a8ec-6463e66a3f68-gd8bc1.jpg",
    // variants: [],
    colors: ["other"],
    label: null,
    isFeatured: false,
    rating: 0
  },
  {
    title: "Scandinavian Wood Seats 4 Large Pillows Top Arm Sofa Chaise",
    slug: "scandinavian-wood-seats-4-large-pillows-top-arm-sofa-chaise",
    description: "<p><strong>Features</strong></p><p></p><p><strong>Number of Items</strong>:</p><p> Include 3 Pieces Set Seating Capacity Seat 4 Product Type Sofa Chaise Shape L-Shape Orientation Left, Right Design Stationary Back Style Cushion Back Nailhead Trim Without Nailhead Trim Slipcovered Without Slipcover Purposeful Distressing Type No Distressing Feature Chaise Designs Upholstery Material Tech Cloth Color Off-White, Lake Blue, Dark Gray/Orange, Light Gray.</p>",
    // price: 45000,
    // discountedPrice: 0,
    category: "lounger sofa",
    image: "https://i.pinimg.com/564x/6b/91/1f/6b911ffd3875fef3a61fef6bb8c4342d.jpg",
    // variants: ["3 + Lounge"],
    colors: ["other"],
    label: null,
    isFeatured: true,
    rating: 0
  }
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
