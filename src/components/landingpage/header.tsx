"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import useCartStore from "@/store/cart";
import { Phone, Search, ShoppingBag, ShoppingCart } from "lucide-react";
import { NavBarlinksMenu } from "../navbar-link-menu";
import SearchBar from "../search-bar";
import Logo from "./logo";
import HamburgerMenu from "./HamburgerMenu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const { cartItems } = useCartStore();
  return (
    <>
      <header className="h-32 md:h-24 flex flex-col items-center w-full fixed left-0 right-0 top-0  z-50  border-b border-black/10 bg-[#FAFAF1]">
        <div className="font-semibold flex-col md:flex-row md:justify-evenly bg-indigo-600 text-brand-bg-DEFALUT h-14 md:h-24 text-xs text-center w-full flex items-center justify-center py-1 gap-1 md:gap-2">
          <div>
            <Link
              href={"tel:+%20919341817975"}
              className="text-xs flex items-center gap-1 "
            >
              CUSTOMER CARE
              {/* <Phone size={12} /> */}
              {" "}
              
              📞 9341817975
            </Link>
          </div>
          <div className="uppercase">✨Up to 60% off on upholstery beds</div>
        </div>
        <section className="flex justify-between py-4 md:px-10 px-3 w-full h-16 items-center">
          <Logo type="full" />
          <div className="hidden md:block">
            <NavBarlinksMenu />
          </div>

          <div className="flex items-center gap-3">
            {/* <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger >        
              <Search />
            </DialogTrigger>
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle>Search</DialogTitle>
                <DialogDescription className="mx-auto">
                  <SearchBar setDialogOpen={setOpen} />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog> */}

            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setIsOpen(true)}
              >
                <Search className="h-6 w-6" />
                <span className="sr-only">Open search</span>
              </Button>

              {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                  <div
                    ref={searchBarRef}
                    className="w-full bg-white shadow-lg animate-slide-down"
                  >
                    <SearchBar setDialogOpen={setIsOpen} />
                  </div>
                  <div
                    className="h-full"
                    onClick={() => setIsOpen(false)}
                  ></div>
                </div>
              )}
            </div>

            <Link href={"/cart"} className="md:flex relative">
              <Button size={"icon"} variant={"link"}>
                <ShoppingCart />
                {cartItems.length > 0 && (
                  <span className="font-bold text-xs size-4 rounded-full flex flex-col items-center justify-center bg-black absolute top-0 right-0 text-white">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </Link>

            <div className="md:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
