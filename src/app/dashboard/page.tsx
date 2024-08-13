import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth, signOut } from "@/auth";
import { ArrowRight, Minus, Plus } from "lucide-react";

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
    <main className="flex min-h-screen flex-col items-center gap-2 justify-center p-12">
      {/* <h1 className="text-4xl font-bold capitalize">{session?.user?.email?.split("@")[0]}</h1> */}
      <h1 className="font-bold text-4xl text-center font-roboto">
        Experience the future of tracking team progress
      </h1>
      <section className="flex-col gap-4 items-center justify-center">
        <div className="space-x-2 py-4 flex justify-center">
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
            <Button
              className="rounded-full"
              variant={"secondary"}
              size={"icon"}
            >
              <Plus />
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
            <Button
              className=" rounded-full "
              variant={"secondary"}
              size={"icon"}
            >
              <Minus />
            </Button>
          </form>
        </div>
        <div className="max-w-96 min-w-80 h-5">
          <Progress value={percentage} />
          <div>
            <p className="text-sm opacity-70 mt-1 ml-2">
              {userDetails?.current_progress}/{userDetails?.final_goal}
            </p>
          </div>
        </div>
      </section>

      <div className="mt-32 flex flex-col items-center">
        <section className="flex gap-2">
          {/* TODO: Add shadcn card */}
          <div className="p-3 bg-muted-foreground/15 rounded-md size-36 flex flex-col items-center justify-center">
            <h3 className="font-bold text-5xl font-roboto">{percentage}<span className="text-2xl">%</span></h3>
            <p className="text-muted-foreground text-lg">Completed</p>
          </div>
          <div className="p-3 bg-muted-foreground/10 rounded-md size-36 flex flex-col items-center justify-center">
            <h3 className="font-bold text-5xl font-roboto">{userDetails.final_goal - userDetails.current_progress}</h3>
            <p className="text-muted-foreground text-lg">Videos left</p>
          </div>
        </section>
        <Link href={"/team"} className="underline text-blue-400 text-center flex mt-3">
          Checkout teams progress <ArrowRight/>
        </Link>
      </div>
    </main>
  );
};

export default page;
