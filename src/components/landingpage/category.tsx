import Link from "next/link";
import Image from "next/image";
const raw = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1682582243325-d17d2b9383a6?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sofa sets",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1670076515907-2736a3492f23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Beds",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661963358222-b7b71946bb92?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Dining table",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1671247953201-2fdc17af6692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Study table",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1670076515907-2736a3492f23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Beds",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661963358222-b7b71946bb92?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Dining table",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1670076515907-2736a3492f23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Beds",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661963358222-b7b71946bb92?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Dining table",
  },
];
export default function Category() {
  return (
    <section className="flex flex-col items-center justify-center mt-10 md:mt-20 border-b-2">
      <div className="text-center capitalize">
        <h1>Top picks for you</h1>
        <p className="text-sm ">Impressive collection for your dream home</p>
      </div>
      <section className="flex flex-wrap gap-2 mx-auto">
        {raw.map((item, i) => (
          <CategoryCard key={i} category={item.category} image={item.image} />
        ))}
      </section>
    </section>
  );
}

function CategoryCard({
  image,
  key,
  category,
}: {
  image: string;
  category: string;
  key: string | number;
}) {
  return (
    <div className="flex flex-col items-center" key={key}>
      <Link href={"/category"}>
        <Image
          src={image}
          alt="sofa category"
          width={110}
          height={110}
          className="w-[110px] h-[110px] object-cover rounded-full"
        />
      </Link>
      <p>{category}</p>
    </div>
  );
}
