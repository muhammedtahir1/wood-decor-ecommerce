import CategoryCard from "./categoryCard";

export default function Category() {
  return (
    <section className="flex flex-col items-center justify-center mt-10 md:mt-20 border-b-2">
      <div className="text-center capitalize">
        <h1>Top picks for you</h1>
        <p className="text-sm ">Impressive collection for your dream home</p>
      </div>

      <CategoryCard />
    </section>
  );
}
