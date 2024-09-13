import Header from "@/components/landingpage/header";
import Hero from "@/components/landingpage/hero";
import Category from "@/components/landingpage/category";
import Featured from "@/components/landingpage/featured-products";
import Footer from "@/components/landingpage/footer";
import OfferSection from "@/components/landingpage/offer-section";
import Hero2 from "@/components/landingpage/hero2";
import GridDesign from "@/components/landingpage/grid-design";
import Faq from "@/components/landingpage/faq";
import Testimonials from "@/components/landingpage/testimonials";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
// import ZoomedOnHoverImage from "@/components/zoom-on-hover-img";
// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(() => import("@/components/landingpage/header"));

export default async function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Your Website Name",
            "url": "https://yourdomain.com"
          })
        }}
      />
      <main className="relative">
        <Header />
        <Hero2 />

        {/* <Category /> */}

        <Featured seeMore={true} />
        <Featured title="Sofa" desc={"All the luxury sofa"} query="sofa" />
        <Featured title="Beds" desc={"All the luxury beds"} query="bed" />
        <Link href={"/search?q="} className="mx-5 rounded-2xl px-5  overflow-hidden">
          <Image
            src={"/Web-Banner.png"}
            alt="sofa banner"
            // sizes="(max-width: 488px) 50vw, (max-width: 1200px) 50vw, 33vw"
            width={950}
            height={300}
            className="rounded-xl mx-auto my-10  w-[370px]  sm:w-[600px] md:w-[1000px]"
          />
        </Link>
        <GridDesign />
        <Link href={"#testimonils"}>
          <Button className="-rotate-90 flex items-center gap-1 fixed top-1/2 -right-8">
            <Star size={14} className="fill-white" />
            Reviews
          </Button>
        </Link>

        <Testimonials />
        <OfferSection />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
