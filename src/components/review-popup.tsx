'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'

interface Review {
  name: string
  rating: number
  comment: string
  product: string
  image?: string
}

const reviews: Review[] = [
  {
    name: "Samrat D.",
    rating: 5,
    comment: "Excellent Sofa for the design. Good fit an...",
    product: "Galaxy Premium Modern Sofa",
    image: "https://images.loox.io/uploads/2024/3/28/uPeLc1aXM.jpg"
  },
  {
    name: "Emily R.",
    rating: 4,
    comment: "Comfortable chair, great for my home office!",
    product: "Ergonomic Office Chair"
  },
  {
    name: "Michael T.",
    rating: 5,
    comment: "The dining table is beautiful and sturdy.",
    product: "Rustic Wooden Dining Table",
    image: "https://www.nicemaple.com/cdn/shop/products/image_92f0ec80-0475-4fba-a42b-e3687dfe2caa_50x.webp?v=1655537267"
  },
  {
    name: "Sarah L.",
    rating: 4,
    comment: "Love the bookshelf, perfect for my collection.",
    product: "Modern Bookshelf"
  },
  {
    name: "David K.",
    rating: 5,
    comment: "The bed frame is solid and easy to assemble.",
    product: "Platform Bed Frame",
    image: "https://images.loox.io/uploads/2024/3/15/rjJj3Q4Ou.jpg"
  },
]

export default function ReviewPopup() {
  const [currentReview, setCurrentReview] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Delay the initial popup by 3 seconds
    const initialDelay = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(initialDelay)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length)
        setIsTransitioning(false)
      }, 500) // Half of the transition duration
    }, 5000) // Change review every 5 seconds

    return () => clearInterval(interval)
  }, [isVisible])

  if (!isVisible) return null

  const review = reviews[currentReview]

  return (
    <div
      className={`fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 max-w-xs
                  transition-all duration-1000 ease-in-out
                  ${isTransitioning ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'}`}
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X size={16} />
      </button>
      <div className="flex items-start mb-2">
        {review.image && (
          <div className="mr-3 flex-shrink-0">
            <Image
              src={review.image}
              alt={review.product}
              width={80}
              height={80}
              className="rounded-md"
            />
          </div>
        )}
        <div>
          <div className="flex items-center mb-1">
            <div className="text-yellow-400 mr-1">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
            <span className="text-sm font-semibold">{review.name}</span>
          </div>
          <p className="text-sm text-gray-600 mb-1">&quot;{review.comment}&quot;</p>
          <p className="text-xs text-gray-500">{review.product}</p>
        </div>
      </div>
    </div>
  )
}