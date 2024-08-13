import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  // To redirect the user if not authenticated
  if (!req.auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
});

export const config = {
  // routes to protect with auth
  matcher: ["/dashboard", "/team"],
};
