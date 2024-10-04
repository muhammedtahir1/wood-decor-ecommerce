// app/search/page.tsx
import { getSearchProducts } from "@/actions/general.action";
import ClientComponent from "./search-logic";
import ReviewPopup from "@/components/review-popup";

// Server Component
const Page = async ({ searchParams }: { searchParams: any }) => {
  const query = searchParams?.q;
  const productsResponse = await getSearchProducts({ query, take: 5 });

  return (
    <div>
      <ClientComponent initialProducts={productsResponse} query={query} />
      <ReviewPopup />
    </div>
  );
};

export default Page;
