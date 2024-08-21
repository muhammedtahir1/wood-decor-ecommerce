import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";
import AddProductForm from "./admin/admin-form";
import Link from "next/link";
import { HomeIcon, ShoppingBag, ShoppingBasket } from "lucide-react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className="flex justify-between border-b mb-5 py-5 px-10">
        <h1>Admin</h1>
        <AddProductForm />
      </header>
      <div className="flex">
        <aside className="w-32 border-r py-2 mr-2 flex flex-col px-4 md:min-h-[80vh]">
          <Link href={"/admin"} className="flex items-center gap-2">
            <HomeIcon size={20} />
            Dashboard
          </Link>
          <Link href={"/admin/products"} className="flex items-center gap-2">
            <ShoppingBag size={20} /> Products
          </Link>
          <Link href={"/admin/orders"} className="flex items-center gap-2">
            <ShoppingBasket size={20} />
            Order
          </Link>
        </aside>
        {children}
      </div>
    </div>
  );
};

export default layout;
