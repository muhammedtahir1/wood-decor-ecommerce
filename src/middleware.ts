import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  // To redirect the user if not authenticated

  // console.log(req.url);
  // if (req.url === "/upholstery-beds") {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  if (!req.auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
});

export const config = {
  // routes to protect with auth
  matcher: ["/admin/:path*"],
};
