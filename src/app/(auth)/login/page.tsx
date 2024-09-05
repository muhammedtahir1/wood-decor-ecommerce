import React from "react";
import { InputForm } from "./login-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Logo from "@/components/landingpage/logo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const page = async () => {
  const session = await auth();
  if (session) redirect("/admin");
  console.log(session);

  return (
    <main className="flex flex-col items-center justify-center min-h-[70dvh]">
      <Logo type="full" />
      <h1 className="text-5xl font-bold text-center font-roboto mb-10 mt-5">
        Admin Login
      </h1>
      <InputForm />
      <Link className="flex  gap-3 items-center mt-10 text-sm opacity-70" href={"/"}>
        <ArrowLeft size={14} /> Back to home
      </Link>
    </main>
  );
};

export default page;
