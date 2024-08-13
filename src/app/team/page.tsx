export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

import React from "react";
import { Chart } from "./chart";
import prisma from "@/lib/db";
import { Chart2 } from "./chart2";
import Link from "next/link";

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
    <div>
      {/* <Chart data={all}/> */}
      <Chart2 data={all} />
      <Link href={"/dashboard"} className="underline text-blue-400 ">
        Dashboard
      </Link>
    </div>
  );
};

export default page;
