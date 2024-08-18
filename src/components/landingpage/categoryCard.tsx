import Image from "next/image";
import Link from "next/link";

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

export default function CategoryCard() {
  return (
    <section className=" max-w-[840px]  gap-6  flex flex-wrap mt-10 md:mt-16 mb-10 md:mb-20 ">
      {raw.map((item, i) => (
        <div className=" px-4 py-2 mx-auto text-center space-y-2" key={i}>
          <Link href={"/category"}>
            <Image
              src={item.image}
              alt="sofa category"
              width={120}
              height={120}
              className="h-[120px] w-[120px] rounded-full"
            />
          </Link>
          <h2 >{item.category}</h2>
        </div>
      ))}
    </section>
  );
}
