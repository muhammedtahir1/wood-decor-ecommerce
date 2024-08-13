import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col gap-5 items-center justify-center px-6 md:px-12">
      <Badge  variant={"secondary"}>Over 3 million ready-to-work creatives!</Badge>
      <h1 className="text-5xl font-bold text-center font-roboto">
        The world’s destination for progress tracker
      </h1>
      <p className=" text-center text-muted-foreground">
        Get inspired by the work of millions of top-rated designers & agencies
        around the world.
      </p>
      <Link href={"/login"} className="w-56 mt-10">
        <Button className="w-full" variant={"fullRounded"}>Get started</Button>
      </Link>
    </section>
  );
}
