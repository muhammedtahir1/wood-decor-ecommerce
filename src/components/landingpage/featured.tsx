import { Product } from "@prisma/client";
import Card from "./card";

export const allProductData: Product = [
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
export default function Featured() {
  return (
    <section className="flex flex-col items-center justify-center mt-10 md:mt-20 border-b-2">
      <div className="text-center capitalize">
        <h1>Featured products</h1>
        <p className="text-sm ">Impressive collection for your dream home</p>
      </div>

      <div className="flex flex-wrap max-w-[1280px] gap-6 mx-auto mt-10 md:mt-16 mb-10 md:mb-20 ">
        {/* <section className="border rounded-xl mx-auto"> */}
        {allProductData.map((item) => (
          <Card item={item} />
        ))}
        {/* </section> */}
      </div>
    </section>
  );
}
