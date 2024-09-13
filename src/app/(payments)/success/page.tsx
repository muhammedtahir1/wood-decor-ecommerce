import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/landingpage/header";
import Image from "next/image";

export default function PaymentCompletePage() {
  return (
    <section className="min-h-[90vh] flex flex-col gap-6 h-14 mx-5 sm:mx-10 2xl:mx-auto 2xl:w-[1400px] items-center pt-40 ">
      <Header />
      {/* <CheckCircle2 size={80} className="text-green-400 animate-pulse " /> */}
      <Image
        src={"/order-confirmed.gif"}
        alt="sofa banner"
        width={180}
        height={180}
        className="rounded-xl"
      />
      <p className="text-2xl sm:text-4xl text-center leading-6">
        Your order has been placed successfully
      </p>
      <p className="text-sm -mt-5 sm:text-xl text-center opacity-75">
        Thank You for Purchasing our product
      </p>
      <Button
        asChild
        variant={"outline"}
        className="border-green-400 hover:bg-green-50 border-2 w-40"
      >
        <Link href={"/"}>Go to Home</Link>
      </Button>
    </section>
  );
}
