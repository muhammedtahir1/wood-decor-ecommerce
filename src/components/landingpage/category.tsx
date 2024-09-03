import Link from "next/link";
import Image from "next/image";
const raw = [
  {
    image:
      "https://i.pinimg.com/564x/93/8e/f0/938ef0b195ab918171776e66a3661e79.jpg",
    category: "Sofa & Couches",
    slug: "sofa",
  },
  
  {
    image:
    "https://i.pinimg.com/736x/d6/0d/47/d60d479e7ec45bc41f4fcaeee7055b54.jpg",
    category: "Dining",
    slug: "dinings",
  },
  {
    image:
      "https://i.pinimg.com/564x/63/d0/d9/63d0d99654d048bf3c5c68ea8015694a.jpg",
    category: "Beds",
    slug: "beds",
  },
  {
    image:
    "https://i.pinimg.com/564x/71/75/b0/7175b045ab46fd99cd001a10c438ad9a.jpg",
    category: "Interiors",
    slug: "interiors",
  },
  // {
  //   image:
  //     "https://plus.unsplash.com/premium_photo-1671247953201-2fdc17af6692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   category: "Other",
  //   slug: "other",
  // },
];
export default function Category() {
  return (
    <section id="category"  className="flex flex-col items-center justify-center mt-10 md:mt-20 border-b-2">
      <div className="text-center capitalize">
        <h1 className="font-gt">Top picks for you</h1>
        <p className=" text-sm md:text-base opacity-80">
          Explore our top categories for every style
        </p>
      </div>
      <section className="flex flex-wrap gap-2 md:gap-6 justify-center mt-10 md:mt-16 mb-10 md:mb-20 ">
        {raw.map((item, i) => (
          <CategoryCard
            key={i}
            category={item.category}
            slug={item.slug}
            image={item.image}
          />
        ))}
      </section>
    </section>
  );
}

function CategoryCard({
  image,
  key,
  category,
  slug,
}: {
  image: string;
  category: string;
  slug: string;
  key: string | number;
}) {
  return (
    <Link
      href={`/categories/${slug}`}
      className="flex flex-col items-center gap-3 hover:scale-105 transition active:scale-[1.05] px-4"
      key={key}
    >
      <Image
        src={image}
        alt="sofa category"
        width={140}
        height={140}
        className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] object-cover rounded-full"
      />
      <p className="text-base font-semibold text-center capitalize opacity-75">
        {category}
      </p>
    </Link>
  );
}
