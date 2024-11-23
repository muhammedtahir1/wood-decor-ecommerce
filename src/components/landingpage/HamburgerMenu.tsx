"use client"

import { useState, useEffect, useRef } from "react"
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
      { id: "1-1", label: "Corner Sofa", href: "/categories/corner sofa" },
      { id: "1-2", label: "Lounger Sofa", href: "/categories/lounger sofa" },
      { id: "1-3", label: "Wooden Sofa", href: "/categories/wooden sofa" },
      { id: "1-4", label: "3 + 2 Sofa", href: "/categories/3+2 sofa" },
      { id: "1-5", label: "Wing Chairs", href: "/categories/wing chairs" },
      { id: "1-6", label: "Recliners", href: "/categories/recliners" },
      { id: "1-6", label: "Sofa Cum beds", href: "/categories/sofa cum beds" },
    ],
  },
  // {
  //   id: "2",
  //   label: "INTERIORS",
  //   children: [
  //     { id: "2-1", label: "Modular Kitchen", href: "/categories/modular-kitchen" },
  //     { id: "2-3", label: "TV Units", href: "/categories/tv units" },
  //   ],
  // },
  {
    id: "3",
    label: "BEDROOM",
    children: [
      { id: "3-1", label: "Wooden Beds", href: "/categories/wooden beds" },
      { id: "3-2", label: "Upholstery Beds", href: "/categories/upholstery bed" },
      { id: "3-3", label: "Wardrobes", href: "/categories/wardrobes" },
      { id: "3-4", label: "Mattress", href: "/categories/mattress" },
    ],
  },
  {
    id: "4",
    label: "DINING AREA",
    children: [
      { id: "4-1", label: "Wooden Dinings", href: "/categories/wooden dining" },
      { id: "4-2", label: "PVD Dinings", href: "/categories/pvd-dining" },
    ],
  },
]

export default function EnhancedProfessionalHamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id)
  }

  const renderMenuItem = (item: A, isSubcategory = false) => {
    const isExpanded = expandedItem === item.id
    return (
      <div key={item.id} className={`border-b border-gray-200 ${isSubcategory ? 'pl-4' : ''}`}>
        {item.href ? (
          <Link
            href={item.href}
            className={`flex items-center justify-between w-full py-2 px-4 text-left hover:bg-gray-100 ${
              isSubcategory ? 'text-sm text-gray-600' : 'font-medium'
            }`}
          >
            <span>{item.label}</span>
          </Link>
        ) : (
          <button
            onClick={() => toggleItem(item.id)}
            className={`flex items-center justify-between w-full py-2 px-4 text-left hover:bg-gray-100 ${
              isSubcategory ? 'text-sm text-gray-600' : 'font-medium'
            }`}
          >
            <span>{item.label}</span>
            {item.children && (
              isExpanded ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )
            )}
          </button>
        )}
        {isExpanded && item.children && (
          <div className="bg-gray-50">
            {item.children.map((child) => renderMenuItem(child, true))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative bg-white border-none" ref={menuRef}>
      <Button
        className="bg-brand-bg-DEFALUT border-none hover:bg-gray-100"
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6 text-gray-700" />
      </Button>
      {isOpen && (
        <div className="absolute top-full right-0 w-64 mt-2 bg-white rounded-md shadow-lg max-h-[calc(100vh-100px)] overflow-y-auto">
          {menuItems.map((item) => renderMenuItem(item))}
        </div>
      )}
    </div>
  )
}