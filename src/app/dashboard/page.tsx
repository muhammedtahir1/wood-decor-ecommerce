import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  // console.log(session);

  const userDetails = await prisma.user.findFirst({
    where: {
      email: session?.user?.email as string,
    },
    select: {
      current_progress: true,
      final_goal: true,
      password: false,
    },
  });
  if (!userDetails) return <div />;

  const percentage = Math.floor(
    (userDetails?.current_progress / userDetails?.final_goal) * 100
  );

  return (
    <main className="flex min-h-screen flex-col items-center gap-2 justify-center">
      <h1 className="text-4xl font-bold">{session?.user?.email}</h1>
      <div className="space-x-2 py-4 flex">
        <form
          action={async () => {
            "use server";
            await prisma.user.update({
              where: {
                email: session?.user?.email as string,
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
                email: session?.user?.email as string,
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
        <Progress value={percentage} className="" />
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
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button variant={"destructive"}>Logout</Button>
        </form>
      </div>
    </main>
  );
};

export default page;
