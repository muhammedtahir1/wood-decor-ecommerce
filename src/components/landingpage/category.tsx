import Link from "next/link";
import Image from "next/image";
const raw = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1682582243325-d17d2b9383a6?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sofa sets",
    slug: "sofa",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1670076515907-2736a3492f23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Beds",
    slug: "beds",
  },

  {
    image:
      "https://plus.unsplash.com/premium_photo-1661963358222-b7b71946bb92?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Dining table",
    slug: "dining-table",
  },
  {
    image:
      "https://i.pinimg.com/564x/fa/1e/4f/fa1e4fbed2db01aab94be25849b52850.jpg",
    category: "Elegant Chairs",
    slug: "chair",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1671247953201-2fdc17af6692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Other",
    slug: "other",
  },
];
export default function Category() {
  return (
    <section id="category"  className="flex flex-col items-center justify-center mt-10 md:mt-20 border-b-2">
      <div className="text-center capitalize">
        <h1 className="font-gt">Top picks for you</h1>
        <p className="text-base opacity-80">
          Impressive collection for your dream home
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
      className="flex flex-col items-center gap-3 hover:scale-105 transition active:scale-[-1.05] px-4"
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
