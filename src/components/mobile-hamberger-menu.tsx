import React from "react";
import { GrMenu } from "react-icons/gr";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavBarlinksMenu } from "./navbar-link-menu";
import Image from "next/image";

const MobileHamburgerMenu = () => {
  return (
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
              <NavBarlinksMenu />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileHamburgerMenu;
