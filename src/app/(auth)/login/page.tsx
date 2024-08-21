import React from "react";
import { InputForm } from "./login-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session) redirect("/");
  console.log(session);

  return (
    <main className="flex flex-col items-center justify-center min-h-[70dvh]">
      <h1 className="text-5xl font-bold text-center font-roboto mb-10">
        Login
      </h1>
      <InputForm />
    </main>
  );
};

export default page;
