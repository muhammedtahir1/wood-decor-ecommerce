// app/search/page.tsx
import { getSearchProducts } from "@/actions/general.action";
import ClientComponent from "./search-logic";

// Server Component
const Page = async ({ searchParams }: { searchParams: any }) => {
  const query = searchParams?.q;
  const productsResponse = await getSearchProducts({ query, take: 5 });

  return <ClientComponent initialProducts={productsResponse} query={query} />;
};

export default Page;
