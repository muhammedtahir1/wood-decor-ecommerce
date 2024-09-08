import Header from "@/components/landingpage/header";
import Hero from "@/components/landingpage/hero";
import Category from "@/components/landingpage/category";
import Featured from "@/components/landingpage/featured-products";
import Footer from "@/components/landingpage/footer";
import OfferSection from "@/components/landingpage/offer-section";
import Hero2 from "@/components/landingpage/hero2";
import GridDesign from "@/components/landingpage/grid-design";
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
      <main>
        <Header />
        {/* <Hero /> */}
        <Hero2 />
        {/* <ZoomedOnHoverImage src="https://utfs.io/f/6159f064-3415-4f8c-8d8d-e9f8a3d8bdd4-q34aag.jpeg" alt="hi" /> */}
        <Category />
        <Featured />
        <GridDesign />
        {/* <OfferSection /> */}
        <Footer />
      </main>
    </>
  );
}
