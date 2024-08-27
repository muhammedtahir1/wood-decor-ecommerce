import Header from "@/components/landingpage/header";
import Hero from "@/components/landingpage/hero";
import Category from "@/components/landingpage/category";
import Featured from "@/components/landingpage/featured-products";
import Footer from "@/components/landingpage/footer";
import OfferSection from "@/components/landingpage/offer-section";
import Hero2 from "@/components/landingpage/hero2";
import GridDesign from "@/components/landingpage/grid-design";
// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(() => import("@/components/landingpage/header"));

export default async function Home() {
  return (
    <main>
      <Header />
      {/* <Hero /> */}
      <Hero2/>
      <Category />
      <Featured />
      <GridDesign/>
      {/* <OfferSection /> */}
      <Footer />
    </main>
  );
}
