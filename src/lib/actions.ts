"use server";
// server actions file

import { signIn } from "@/auth";

const signInAction = async (data: any) => {
  try {
    const req = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    return {
      success: true,
      data: req,
    };
  } catch (error: any) {
    console.log("⭕⭕⭕ ", error.code);

    return {
      success: false,
      error: `${error.code}`,
    };
  }
};

export { signInAction };
