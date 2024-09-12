import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <Skeleton className="h-[400px] w-full rounded-lg" />
      </div>

      {/* Top Picks Section */}
      <h2 className="text-2xl font-bold mb-4">Top Picks For You</h2>
      <div className="grid grid-cols-4 gap-4 mb-12">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-24 w-24 rounded-full" />
        ))}
      </div>

      {/* Featured Products Section */}
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Button className="w-full" disabled>Add to Cart</Button>
          </div>
        ))}
      </div>

      {/* Product Categories */}
      {['Sofa', 'Beds'].map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Button className="w-full" disabled>Add to Cart</Button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Gallery Section */}
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-40 w-full rounded-lg" />
        ))}
      </div>

      {/* Testimonials Section */}
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <div className="space-y-4 mb-12">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
        </div>
      </footer>
    </div>
  )
}