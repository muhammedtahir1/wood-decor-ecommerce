"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type MenuItem = {
  id: string
  label: string
  children?: A[]
}

type A = MenuItem & {
  href?: string
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    label: "LIVING ROOM",
    children: [
      {
        id: "1-1",
        label: "Corner Sofa",
        href: "/categories/corner sofa",
      },
      { id: "1-2", label: "Lounger Sofa", href: "/categories/lounger sofa" },
      { id: "1-3", label: "Wooden Sofa", href: "/categories/lounger sofa" },
      { id: "1-4", label: "3 + 2 Sofa", href: "/categories/3+2 sofa" },
      { id: "1-5", label: "Wing Chairs", href: "/categories/wing chairs" },
    ],
  },
  {
    id: "2",
    label: "INTERIORS",
    children: [
      {
        id: "2-1",
        label: "Modular kitchen",
        href: "/categories/modular kitchen",
      },
      { id: "2-2", label: "Wardrobes", href: "/categories/wardrobes" },
      { id: "2-3", label: "TV units", href: "/categories/tv units" },
    ],
  },
  {
    id: "3",
    label: "BEDROOM",
    children: [
      { id: "3-1", label: "Wooden Beds", href: "/categories/wooden beds" },
      {
        id: "3-2",
        label: "Upholstery Beds",
        href: "/categories/upholstery beds",
      },
    ],
  },
  {
    id: "4",
    label: "DINING AREA",
    children: [
      { id: "4-1", label: "Wooden Dinings", href: "/categories/wooden dining" },

      { id: "4-2", label: "PVD Dinings", href: "/categories/pvd dining" },
    ],
  },
]

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const renderMenuItem = (item: A) => {
    const isExpanded = expandedItems.has(item.id)
    return (
      <div key={item.id} className="border-b border-gray-200">
        {item.href ? (
          <Link
            href={item.href}
            className="flex items-center justify-between w-full py-2 px-4 text-left hover:bg-gray-100"
          >
            <span>{item.label}</span>
          </Link>
        ) : (
          <button
            onClick={() => toggleItem(item.id)}
            className="flex items-center justify-between w-full py-2 px-4 text-left hover:bg-gray-100"
          >
            <span>{item.label}</span>
            {item.children &&
              (isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              ))}
          </button>
        )}
        {isExpanded && item.children && (
          <div className="pl-4">{item.children.map(renderMenuItem)}</div>
        )}
      </div>
    )
  }

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
        <div className="absolute top-full right-0 w-80 mt-2 bg-brand-bg-DEFALUT">
          {menuItems.map(renderMenuItem)}
        </div>
      )}
    </div>
  )
}