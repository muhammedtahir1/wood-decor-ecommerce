"use client"

import { useRouter } from "next/navigation"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const SearchBar = ({ setDialogOpen }: { setDialogOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const router = useRouter()

  return (
    <div className="w-full px-4 py-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">What are you looking for?</h2>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setDialogOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <form
          action={(formData) => {
            const searchQuery = formData.get("search")
            if (searchQuery) {
              router.push(`/search?q=${searchQuery}`)
              setDialogOpen(false)
            }
          }}
          className="relative"
        >
          <Input
            type="search"
            className="w-full pr-10 focus:ring-2 focus:ring-blue-500 border-0 border-b-2 border-gray-200 rounded-none"
            placeholder="Search for products, brands and more"
            name="search"
          />
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            className="absolute right-0 top-0 h-full"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar