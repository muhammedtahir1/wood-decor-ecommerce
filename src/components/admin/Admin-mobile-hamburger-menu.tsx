"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

type MenuItem = {
  id: string;
  label: string;
  children?: A[];
};

type A = MenuItem & {
  href?: string;
};

const menuItems: MenuItem[] = [
  {
    id: "1",
    label: "",
    children: [
      {
        id: "1-1",
        label: "Corner Sofa",
        href: "/search?q=corner sofa",
      },
      { id: "1-2", label: "Lounger Sofa", href: "/search?q=lounger sofa" },
      { id: "1-3", label: "Wooden Sofa", href: "/search?q=lounger sofa" },
      { id: "1-4", label: "3 + 2 Sofa", href: "/search?q=3+2 sofa" },
      { id: "1-5", label: "Wing Chairs", href: "/search?q=wing chairs" },
    ],
  },
  {
    id: "2",
    label: "INTERIORS",
    children: [
      {
        id: "2-1",
        label: "Modular kitchen",
        href: "/search?q=modular kitchen",
      },
      { id: "2-2", label: "Wardrobes", href: "/search?q=wardrobes" },
      { id: "2-3", label: "TV units", href: "/search?q=tv units" },
    ],
  },
  {
    id: "3",
    label: "BEDS",
    children: [
      { id: "3-1", label: "Wooden Beds", href: "/search?q=wooden beds" },
      {
        id: "3-2",
        label: "Upholstery Beds",
        href: "/search?q=upholstery beds",
      },
    ],
  },
  {
    id: "4",
    label: "DINING",
    children: [
      { id: "4-1", label: "Wooden Dinings", href: "/search?q=wooden dinings" },
      { id: "4-2", label: "PVD Dinings", href: "/search?q=pvd dinings" },
    ],
  },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const renderMenuItem = (item: MenuItem) => {
    const isExpanded = expandedItems.has(item.id);
    return (
      <div key={item.id} className="border-b border-gray-200">
        <button
          onClick={() => toggleItem(item.id)}
          className="flex items-center justify-between w-full py-2 px-4 text-left"
        >
          <span>{item.label}</span>
          {item.children &&
            (isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            ))}
        </button>
        {isExpanded && item.children && (
          <div className="pl-4">{item.children.map(renderMenuItem)}</div>
        )}
      </div>
    );
  };

  return (
    <div className="relative bg-brand-bg-DEFALUT border-none">
      <Button
        className="bg-brand-bg-DEFALUT border-none"
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu className="size-5 border-none bg-brand-bg-DEFALUT" />
      </Button>
      {isOpen && (
        <div className="absolute top-full right-0 w-80 mt-2 bg-brand-bg-DEFALUT ">
          {menuItems.map(renderMenuItem)}
        </div>
      )}
    </div>
  );
}
