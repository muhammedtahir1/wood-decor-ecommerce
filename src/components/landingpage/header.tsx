"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import useCartStore from "@/store/cart";
import { Phone, ShoppingBag, ShoppingCart } from "lucide-react";
import { NavBarlinksMenu } from "../navbar-link-menu";
import SearchBar from "../search-bar";
import Logo from "./logo";
import MobileHamburgerMenu from "../mobile-hamberger-menu";

const Header = () => {
  const { cartItems } = useCartStore();
  return (
    <>
      <header className="h-24 flex flex-col items-center w-full fixed left-0 right-0 top-0   z-50  border-b border-black/10 bg-[#FAFAF1]">
        <div className="bg-brand-text-DEFALUT text-brand-bg-DEFALUT h-8 text-xs text-center w-full flex items-center justify-center py-1 gap-2">
          offers available
          <Link
            href={"tel:+%20919341817975"}
            className="text-xs flex items-center gap-1"
          >
            <Phone size={12} />
            9323421423
          </Link>
        </div>
        <section className="flex justify-between py-4 md:px-10 px-3 w-full h-16 items-center">
          <Logo />

          <NavBarlinksMenu />

          <SearchBar />
          <Link href={"/cart"} className="hidden md:flex relative">
            <Button variant={"link"}>
              <ShoppingCart />
              {cartItems.length > 0 && (
                <span className="font-bold text-xs size-4 rounded-full flex flex-col items-center justify-center bg-black absolute top-0 right-0 text-white">
                  {cartItems.length}
                </span>
              )}
            </Button>
          </Link>

          <MobileHamburgerMenu />
        </section>
      </header>
    </>
  );
};

export default Header;
