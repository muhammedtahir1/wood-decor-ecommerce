"use client";
import Image from "next/image";
import React from "react";
import { GrMenu } from "react-icons/gr";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import useCartStore from "@/store/cart";
import { ShoppingBag } from "lucide-react";
import { NavBarlinksMenu } from "../navbar-link-menu";
import SearchBar from "../search-bar";


const Header = () => {
  const { cartItems } = useCartStore();
  return (
    <header className="h-14 md:h-20 flex justify-between items-center w-full fixed left-0 right-0 top-0 px-3 py-4 md:px-10 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/20 border-b border-black/10">
      <Link href={"/"} className="">
        <Image
          width={30}
          height={30}
          quality={100}
          src="/wood-decor-logo.jpg"
          alt=""
        />
      </Link>
      {/* <nav className="font-bold hidden md:flex gap-4 ">
        <Link href={"#category"}>
          <Button variant={"link"}>Shop</Button>
        </Link>
        <Link href={"#collection"}>
          <Button variant={"link"}>Collections</Button>
        </Link>
        <Link href={"#offer"}>
          <Button variant={"link"}>Explore</Button>
        </Link>
      </nav> */}
      <SearchBar/>
      <NavBarlinksMenu/>
      <Link href={"/cart"} className="hidden md:flex relative">
        <Button variant={"link"}>
          <ShoppingBag />
          Cart{" "}
          {cartItems.length > 0 && (
            <span className="font-bold text-xs size-4 rounded-full flex flex-col items-center justify-center bg-black absolute top-0 right-0 text-white">
              {cartItems.length}
            </span>
          )}
        </Button>
      </Link>

      <nav className="flex items-center gap-1 md:hidden">
        <Sheet>
          <SheetTrigger>
            <GrMenu className="bg-blend-difference" size={20} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <h3 className="gradient-brand font-semibold ">
                  <Image
                    width={40}
                    height={40}
                    className="mx-auto"
                    src="/wood-decor-logo.jpg"
                    alt="logo"
                  />
                  Home Decor Furnitures
                </h3>
              </SheetTitle>
              <SheetDescription className="py-10 flex flex-col justify-between h-[90vh]">
                <div className="flex flex-col items-start">
                  <Link href={"#category"}>
                    <Button variant={"ghost"}>- Shop</Button>
                  </Link>
                  <Link href={"#collection"}>
                    <Button variant={"ghost"}>- Collections</Button>
                  </Link>
                  <Link href={"#offer"}>
                    <Button variant={"ghost"}>- Explore</Button>
                  </Link>
                  <Link href={"/cart"}>
                    <Button variant={"ghost"}>- Cart</Button>
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
