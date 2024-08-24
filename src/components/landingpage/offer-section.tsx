import Image from "next/image";
import { Button } from "../ui/button";

export default function OfferSection() {
  return (
    <div id="offer" className="px-6 w-80  mx-auto md:w-auto md:px-32 flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-10 md:mt-20 ">
      <div className=" md:w-[60%] overflow-hidden rounded-lg">
        <Image
          src={
            "https://images.unsplash.com/photo-1531303435785-3853ba035cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="offer-image"
          width={600}
          height={400}
          className="rounded-md w-full"
        />
      </div>
      <div className="md:w-[30%] flex flex-col gap-4">
        <h1 className="text-xl md:text-4xl font-semibold tracking-tight">
          Find your Perfect Furniture at Wood Decor New on Tokyo
        </h1>
        <p className="text-sm opacity-55 w-80 leading-4">
          Welcome to the newest Wood Decor outlet in Bammanahalli, Bangalore.
          Step into our stylish and trendy store and discover the latest in
          fashion and apparel. Come and experience the unique and vibrant
          atmosphere.
        </p>
        <h3 className="text-xl font-semibold tracking-tight ">
          Come and Enjoy Sale!
        </h3>
        <h2 className="text-5xl font-semibold">50%</h2>
        <Button className="rounded-full">See On Maps</Button>
      </div>
    </div>
  );
}
