"use client";

import { useEffect, useState } from "react";
import { getSearchProducts } from "@/actions/general.action";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { ArrowLeft, CircleArrowLeft, CircleHelp } from "lucide-react";
import Link from "next/link";

const NUMBER_OF_PRODUCTS_TO_FETCH = 4;

const ClientComponent = ({ initialProducts, query }: { initialProducts: Product[], query: string }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [offset, setOffset] = useState(NUMBER_OF_PRODUCTS_TO_FETCH);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if more products are available


  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const apiProducts = await getSearchProducts({ query, take: NUMBER_OF_PRODUCTS_TO_FETCH, skip: 0 });
        setProducts(apiProducts);
        setOffset(NUMBER_OF_PRODUCTS_TO_FETCH); // Reset offset for new search
        setHasMore(apiProducts.length === NUMBER_OF_PRODUCTS_TO_FETCH); // Check if more are available
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      // Only fetch if query exists
      fetchProducts();
    }
  }, [query]); // Re-run effect on query change

  // Load more products
  const loadMoreProducts = async () => {
    if (!hasMore) return;

    // const a = usePathname()
    // console.log("----", a)



    setLoading(true);
    try {
      const apiProducts = await getSearchProducts({ query, take: NUMBER_OF_PRODUCTS_TO_FETCH, skip: offset });
      if (apiProducts.length < NUMBER_OF_PRODUCTS_TO_FETCH) {
        setHasMore(false); // No more products to load
      }
      setProducts((prevProducts) => [...prevProducts, ...apiProducts]);
      setOffset((prevOffset) => prevOffset + NUMBER_OF_PRODUCTS_TO_FETCH);
    } catch (error) {
      console.error("Failed to load products", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] pt-6 px-1 md:px-16 mt-20">
      <h2 className="px-6 text-xl md:text-3xl font-normal">
        Showing search results for <span className="font-bold capitalize">{query}</span>
      </h2>
      <div className="flex flex-wrap max-w-[1280px] gap-x-1 gap-y-8 md:gap-4 mt-10 md:mt-16 mb-10 md:mb-20 justify-center ">
        {products.map((product, i) => (
          <ProductCard data={product} key={i} />
        ))}
      </div>
      {loading && (
        <div className="flex justify-center items-center mt-4">
          <CircleArrowLeft className="animate-spin" size={24} />
        </div>
      )}
      {!loading && hasMore && (
        <Button onClick={loadMoreProducts} className="mb-10 md:mb-20">Load More...</Button>
      )}
      {!loading && !hasMore && products.length === 0 && (
        <div className="flex items-center justify-center gap-10 h-[90vh] flex-col">
          <h3 className="text-center font-normal">
            No products found <CircleHelp className="inline" />{" "}
            <span className="capitalize font-bold block">{`"${query}"`}</span>
          </h3>
          <Link href="/#featured-products">
            <Button className="z-10 mt-4 w-52 rounded-full" variant={"fullRounded"}>
              <ArrowLeft size={14} className="mr-2" />
              Go back to home
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ClientComponent;
