"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  return (
    <form
      action={(formData) => {
        router.push(`/search?q=${formData.get("search")}`);
      }}
      className="focus: flex w-full max-w-sm items-center space-x-1 rounded-full px-2 border"
    >
      <Input
        type="search"
        className="bg-transparent focus:border-none focus-visible:outline-none focus-visible:ring-0 border-none"
        placeholder="..."
        name="search"
        onSubmit={() => {
          console.log("searching");
        }}
      />
      <Button
        type="submit"
        className="bg-transparent border-none"
        variant={"outline"}
        size={"icon"}
      >
        <Search />
      </Button>
    </form>
  );
};

export default SearchBar;
