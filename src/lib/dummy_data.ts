type P = {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  price: number;
  discountedPrice: number | null;
  category: string | null;
  image: string;
  features: string[];
  colors: string[];
  label: string | null;
  isFeatured: boolean;
  orderId: number | null;
};

type C = Pick<P, "id" | "title" | "price" | "image">;

export const backgroundImages = [
  {
    src: "https://images.unsplash.com/photo-1680503397671-caa25818d36f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pistachio-Filled Kunafa Delight!",
    title: "Pistachio-Filled Kunafa Delight!"
  },
  {
    src: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Chocolate Extravaganza",
    title: "Chocolate Extravaganza"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1683141443663-503f4140c667?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Berry Bliss Cake",
    title: "Berry Bliss Cake"
  }
];

export const allProductData = [
  {
    images: [
      "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-grey__0868926_pe781434_s5.jpg?f=xl",
    ],
    title: "3-seat sofa",
    price: 20990,
    category: "",
    colors: [],
    description: "",
    discountedPrice: 0,
    features: "",
    id: 7,
    label: "",
    slug: "",
  },
  {
    images: [
      "https://www.ikea.com/in/en/images/products/ektorp-3-seat-sofa-with-chaise-longue-kilanda-dark-blue__1194861_pe902093_s5.jpg?f=xl",
    ],
    title: "3-seat sofa",
    price: 20990,
    category: "",
    colors: [],
    description: "",
    discountedPrice: 0,
    features: "",
    id: 7,
    label: "",
    slug: "",
  },
  {
    images: [
      "https://www.ikea.com/in/en/images/products/jaettebo-u-shaped-sofa-7-seat-with-chaise-longue-right-with-headrests-tonerud-grey__1179836_pe896109_s5.jpg?f=xl",
    ],
    title: "L-shaped sofa",
    price: 20990,
    category: "",
    colors: [],
    description: "",
    discountedPrice: 0,
    features: "",
    id: 7,
    label: "",
    slug: "",
  },
  {
    images: [
      "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-grey__0868926_pe781434_s5.jpg?f=xl",
    ],
    title: "3-seat sofa",
    price: 20990,
    category: "",
    colors: [],
    description: "",
    discountedPrice: 0,
    features: "",
    id: 7,
    label: "",
    slug: "",
  },
  {
    images: [
      "https://www.ikea.com/in/en/images/products/jaettebo-u-shaped-sofa-7-seat-with-chaise-longue-right-with-headrests-tonerud-grey__1179836_pe896109_s5.jpg?f=xl",
    ],
    title: "L-shaped sofa",
    price: 20990,
    category: "",
    colors: [],
    description: "",
    discountedPrice: 0,
    features: "",
    id: 7,
    label: "",
    slug: "",
  },
  {
    images: [
      "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-grey__0868926_pe781434_s5.jpg?f=xl",
    ],
    title: "3-seat sofa",
    price: 20990,
    category: "",
    colors: [],
    description: "",
    discountedPrice: 0,
    features: "",
    id: 7,
    label: "",
    slug: "",
  },
  {
    images: [
      "https://www.ikea.com/in/en/images/products/jaettebo-u-shaped-sofa-7-seat-with-chaise-longue-right-with-headrests-tonerud-grey__1179836_pe896109_s5.jpg?f=xl",
    ],
    title: "L-shaped sofa",
    price: 20990,
    category: "",
    colors: [],
    description: "",
    discountedPrice: 0,
    features: "",
    id: 7,
    label: "",
    slug: "",
  },
  {
    images: [
      "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-grey__0868926_pe781434_s5.jpg?f=xl",
    ],
    title: "3-seat sofa",
    price: 20990,
    category: "",
    colors: [],
    description: "",
    discountedPrice: 0,
    features: "",
    id: 7,
    label: "",
    slug: "",
  },
  {
    images: [
      "https://www.ikea.com/in/en/images/products/jaettebo-u-shaped-sofa-7-seat-with-chaise-longue-right-with-headrests-tonerud-grey__1179836_pe896109_s5.jpg?f=xl",
    ],
    title: "L-shaped sofa",
    price: 20990,
    category: "",
    colors: [],
    description: "",
    discountedPrice: 0,
    features: "",
    id: 7,
    label: "",
    slug: "",
  },
  {
    images: [
      "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-grey__0868926_pe781434_s5.jpg?f=xl",
    ],
    title: "3-seat sofa",
    price: 20990,
    category: "",
    colors: [],
    description: "",
    discountedPrice: 0,
    features: "",
    id: 7,
    label: "",
    slug: "",
  },
  {
    images: [
      "https://www.ikea.com/in/en/images/products/jaettebo-u-shaped-sofa-7-seat-with-chaise-longue-right-with-headrests-tonerud-grey__1179836_pe896109_s5.jpg?f=xl",
    ],
    title: "L-shaped sofa",
    price: 20990,
    category: "",
    colors: [],
    description: "",
    discountedPrice: 0,
    features: "",
    id: 7,
    label: "",
    slug: "",
  },
  {
    images: [
      "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-grey__0868926_pe781434_s5.jpg?f=xl",
    ],
    title: "3-seat sofa",
    price: 20990,
    category: "",
    colors: [],
    description: "",
    discountedPrice: 0,
    features: "",
    id: 7,
    label: "",
    slug: "",
  },
];
