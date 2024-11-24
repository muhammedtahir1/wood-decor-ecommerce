import Header from "@/components/landingpage/header";
import Featured from "@/components/landingpage/featured-products";
import Footer from "@/components/landingpage/footer";
import OfferSection from "@/components/landingpage/offer-section";
import Hero2 from "@/components/landingpage/hero2";
import GridDesign from "@/components/landingpage/grid-design";
import Faq from "@/components/landingpage/faq";
import Testimonials from "@/components/landingpage/testimonials";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import ReviewPopup from "@/components/review-popup";
import DesignConsultationForm from "@/components/design-consultation-form";
import { BsWhatsapp } from "react-icons/bs";
import OurStory from "@/components/landingpage/our-story";
import Heading from "@/components/landingpage/h1-style";
import Testimonials2 from "@/components/landingpage/testimonials2";
// import ZoomedOnHoverImage from "@/components/zoom-on-hover-img";
// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(() => import("@/components/landingpage/header"));

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Your Website Name",
            url: "https://yourdomain.com",
          }),
        }}
      />
      <main className="relative">
        <Header />
        <Hero2 />

        {/* <Category /> */}

        <Featured seeMore={true} />

        <div className="text-center capitalize">
          {/* <h1 className="text-3xl md:text-4xl uppercase">Interiors</h1> */}
          <Heading text="Interiors" />
          <p className="text-sm md:text-base opacity-80">
            Book A Free Design Consultation
          </p>
        </div>
        <DesignConsultationForm />

        <Featured
          title="Living room"
          desc={"Snuggle Up in Style with a Sectional Sofa's"}
          viewAll="3+2 sofa"
          query="3+2 sofa"
        />

        <Featured
          title="upholstery BEDS"
          desc={"Add Luxury to your Bed Room"}
          query="upholstery"
          viewAll=""
        />
        <Featured
          title="Dining Area"
          desc={"Feast with loved ones at the grand dining table"}
          query="dining"
        />
        <Featured
          title="Wooden Beds"
          desc={"Add Luxury to your Bed Room"}
          query="bed"
        />
        {/* <Link
          href={"/search?q="}
          className="mx-5 rounded-2xl px-5  overflow-hidden"
        >
          <Image
            src={"/Web-Banner.png"}
            alt="sofa banner"
            // sizes="(max-width: 488px) 50vw, (max-width: 1200px) 50vw, 33vw"
            width={950}
            height={300}
            className="rounded-xl mx-auto my-10  w-[370px]  sm:w-[600px] md:w-[1000px]"
          />
        </Link> */}

        {/* <GridDesign /> */}
        <Link href={"#testimonils"}>
          <Button className="-rotate-90 flex items-center gap-1 fixed top-1/2 -right-8 z-30">
            <Star size={14} className="fill-white" />
            Reviews
          </Button>
        </Link>

        {/* <Testimonials /> */}
        <Testimonials2 />

        <OurStory />

        <OfferSection />
        <Faq />
        <Footer />
        <ReviewPopup />
        {/* <div className="hidden md:fixed md:bottom-5 md:right-5 rounded-full ">
          <Link href={""}>
            <Button variant={"secondary"} size={"icon"} className="">
              <BsWhatsapp size={28} className="text-green-800" />
            </Button>
          </Link>
        </div> */}
      </main>
    </div>
  );
}
