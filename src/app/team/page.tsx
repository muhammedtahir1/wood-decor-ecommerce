export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

import React from "react";
import { Chart } from "./chart";
import prisma from "@/lib/db";
import { Chart2 } from "./chart2";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const page = async () => {
  const all = await prisma.user.findMany();
  // await prisma.user.create({
  //   data: {
  //     email: "tahir@unicornspace.com",
  //     password: "12345678",
  //     current_progress: 201,
  //   },
  // });
  console.log(all);
  return (
    <main className="flex flex-col items-center">
      {/* <Chart data={all}/> */}
      <div className="mx-auto mt-10">
        <Chart2 data={all} />
      </div>
      <Link href={"/dashboard"} className="underline mt-4 ">
        <Button variant={"fullRounded"}>Dashboard <ArrowRight/></Button>
      </Link>
    </main>
  );
};

export default page;
