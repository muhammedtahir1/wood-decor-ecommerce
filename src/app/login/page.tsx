import React from "react";
import { InputForm } from "./login-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session) redirect("/");
 
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <InputForm />
    </main>
  );
};

export default page;
