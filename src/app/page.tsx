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
import CarouselComponent from "@/components/landingpage/carousel-component";
// import ZoomedOnHoverImage from "@/components/zoom-on-hover-img";
// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(() => import("@/components/landingpage/header"));

export default async function Home() {
  return (
    <main>
      <Header />
      <Hero2 />
      {/* <CarouselComponent /> */}

      <Category />
      <Featured seeMore={true} />
      <Featured title="Sofa" desc={"All the luxury sofa"} query="sofa" />
      <Featured title="Beds" desc={"All the luxury beds"} query="bed" />
      <Featured title="Beds" desc={"All the luxury beds"} query="dining" />
      <GridDesign />
      <Testimonials />
      <OfferSection />
      <Faq />
      <Footer />
    </main>
  );
}
