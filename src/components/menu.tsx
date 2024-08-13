import React from "react";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Session } from "next-auth";
import { signOut } from "@/auth";
import { Button } from "./ui/button";

const Menu = ({ session }: { session: Session | null }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <HiOutlineMenuAlt1 size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="px-2">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/team"}>Team</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/dashboard"}>Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <form
              className="w-full"
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button className="w-full py-2" variant={"destructive"}>Logout</Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Menu;
