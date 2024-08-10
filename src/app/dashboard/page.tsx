import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 justify-center">
      <h1 className="text-4xl font-bold">Tahir</h1>
      <div className="space-x-2 py-4">
        <Button className="rounded-full" variant={"outline"}>
          +
        </Button>
        <Button className="rounded-full" variant={"outline"}>
          -
        </Button>
      </div>
      <div className="w-96 h-5">
        <Progress value={50} className="" />
        <div>
            <p className="text-sm opacity-70 mt-1 ml-2">201/399</p>
            
        </div>
      </div>
      <div className="mt-52">
        <Link href={"/team"} className="underline text-blue-400 ">Checkout teams progress  </Link>
      </div>
    </main>
  );
};

export default page;
