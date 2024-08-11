import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

const page = async () => {
  const userDetails = await prisma.user.findFirst({
    where: {
      id: 2,
    },
    select: {
      current_progress: true,
      final_goal: true,
      password: false,
    },
  });
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 justify-center">
      <h1 className="text-4xl font-bold">Tahir</h1>
      <div className="space-x-2 py-4 flex">
        <form
          action={async () => {
            "use server";
            await prisma.user.update({
              where: {
                id: 2,
              },
              data: {
                current_progress: { increment: 1 },
              },
            });
            revalidatePath("/dashboard");
          }}
        >
          <Button className="rounded-full" variant={"outline"}>
            +
          </Button>
        </form>
        <form
          action={async () => {
            "use server";
            await prisma.user.update({
              where: {
                id: 2,
              },
              data: {
                current_progress: { decrement: 1 },
              },
            });
            revalidatePath("/dashboard");
          }}
        >
          <Button className="rounded-full" variant={"outline"}>
            -
          </Button>
        </form>
      </div>
      <div className="w-96 h-5">
        <Progress value={50} className="" />
        <div>
          <p className="text-sm opacity-70 mt-1 ml-2">
            {userDetails?.current_progress}/{userDetails?.final_goal}
          </p>
        </div>
      </div>
      <div className="mt-52">
        <Link href={"/team"} className="underline text-blue-400 ">
          Checkout teams progress{" "}
        </Link>
      </div>
    </main>
  );
};

export default page;
