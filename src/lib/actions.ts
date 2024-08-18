"use server";
// server actions file

import { signIn } from "@/auth";

const signInAction = async (data: any) => {
  try {
    const req = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    // console.log(" from action ✅", req);
    return {
      success: true,
      data: req,
    };
  } catch (error: any) {
    // console.log("⭕⭕⭕ ", typeof error)
    console.log("⭕⭕⭕ ", error.code);
    // console.log("⭕⭕ ", error.cause.err.code);
    return {
      success: false,
      error: `${error.code}`,
    };
  }
};

export { signInAction };
