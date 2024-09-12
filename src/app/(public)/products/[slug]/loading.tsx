import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <Skeleton className="aspect-square w-full rounded-lg" />

        {/* Product Details */}
        <div className="space-y-4">
          <Skeleton className="h-6 w-24 rounded-full" /> {/* Category tag */}
          <Skeleton className="h-10 w-3/4" /> {/* Product name */}
          <Skeleton className="h-8 w-1/4" /> {/* Price */}
          <Skeleton className="h-4 w-full" /> {/* Description */}
          <Skeleton className="h-4 w-3/4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" /> {/* Color label */}
            <div className="flex space-x-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
          <div className="flex space-x-4">
            <Button className="w-full" disabled>Buy Now</Button>
            <Button className="w-full" variant="outline" disabled>Add to cart</Button>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Similar products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="aspect-square w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" disabled>See more ...</Button>
        </div>
      </div>
    </div>
  )
}