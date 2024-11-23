"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface Review {
  name: string;
  rating: number;
  comment: string;
  product: string;
  image?: string;
}

const reviews: Review[] = [
  {
    name: "Rithesh S.",
    // location: "Bengaluru, Karnataka",
    rating: 5,
    comment:
      "This classic wooden sofa offers timeless elegance and durability. The warm wood tones add a touch of nature to your living space.",
    product: "Three-Seater Wooden Sofa",
    image: "https://images.loox.io/uploads/2024/3/28/uPeLc1aXM.jpg",
  },
  {
    name: "Priya K.",
    // location: "Bangalore, Karnataka",
    rating: 4,
    comment:
      "This wing chair provides exceptional comfort with its high back and padded armrests. Perfect for reading or enjoying a cup of tea.",
    product: "Wing Chair with Ottoman",
  },
  {
    name: "Akash M.",
    // location: "Mysuru, Karnataka",
    rating: 5,
    comment:
      "This comfortable 3+2 sofa set provides ample seating and a stylish look. Perfect for entertaining guests or relaxing with family.",
    product: "3+2 Sofa Set (3-Seater & 2 Single Chairs)",
    image:
      "https://www.nicemaple.com/cdn/shop/products/image_92f0ec80-0475-4fba-a42b-e3687dfe2caa_50x.webp?v=1655537267",
  },
  {
    name: "Aisha P.",
    // location: "Mangalore, Karnataka",
    rating: 4,
    comment:
      "Bookshelf bahut hi pasand aayi. Meri kitaabo ke collection ke liye bilkul perfect hai. (I love the bookshelf. It's absolutely perfect for my collection of books.)",
    product: "Modern Bookshelf",
  },
  {
    name: "Vijay J.",
    // location: "Hubli-Dharwad, Karnataka",
    rating: 5,
    comment:
      "Bed frame bahut hi mazboot hai aur assemble karna bhi aasaan hai. Value for money! (The bed frame is very sturdy and easy to assemble. Value for money!)",
    product: "Platform Bed Frame",
    image: "https://images.loox.io/uploads/2024/3/15/rjJj3Q4Ou.jpg",
  },
  {
    name: "Nitya R.",
    // location: "Belgaum, Karnataka",
    rating: 4,
    comment:
      "Sofa set bahut hi comfortable hai aur ghar ka decor bhi badhiya ho gaya hai. (The sofa set is very comfortable and has improved the home decor.)",
    product: "Modern Sofa Set",
  },
  {
    name: "Pradeep S.",
    // location: "Shimoga, Karnataka",
    rating: 5,
    comment:
      "Study table bahut hi acha hai. Padhai ke liye perfect hai. (The study table is very good. Perfect for studying.)",
    product: "Adjustable Study Table",
  },
  {
    name: "Jenny D'souza",
    // location: "Hassan, Karnataka",
    rating: 4.5,
    comment:
      "Quality looks great .if you are looking for furniture customisation .you must visit there website .they will also help you to get your required product.thank you team",
    product: "Lounger Sofa",
    image: "https://i.pinimg.com/736x/22/43/73/224373276a9448ff42b262d6291c7ee3.jpg"
  },
  {
    name: "Anjali M.",
    // location: "Davangere, Karnataka",
    rating: 5,
    comment:
      "Dining chair bahut hi stylish hai aur comfortable bhi. (The dining chair is very stylish and comfortable.)",
    product: "Modern Dining Chair",
  },
  {
    name: "Ramesh K.",
    // location: "Raichur, Karnataka",
    rating: 4.5,
    comment:
      "This spacious wardrobe offers ample storage space for your clothes and accessories. The sliding doors save space and make accessing your belongings easy.",
    product: "Sliding Door Wardrobe",
  },
  {
    name: "Meena G.",
    // location: "Hassan, Karnataka",
    rating: 4.5,
    comment:
      "Coffee table bahut hi stylish hai aur ghar ka decor bhi badhiya ho gaya hai. (The coffee table is very stylish and has improved the home decor.)",
    product: "Glass Coffee Table",
  },
  {
    name: "Rishi K.",
    // location: "Hassan, Karnataka",
    rating: 4.5,
    comment:
      "This couch is absulutely stunning ,highly recommed to buy furniture from the wood decor. Thanks Team",
    product: "Daze Chester Sofa",
    image: "https://i.pinimg.com/564x/41/26/50/412650fa7421f7bc2ac9995f22b71253.jpg"
  },
  {
    name: "Shreyas M.V",
    // location: "Hassan, Karnataka",
    rating: 5,
    comment:
    "good product .i can give 10/10 for quality... little delay in delivery.good team work",
    product: "Upholstered Bed ",
  },
  {
    name: "Amaira Ahmed",
    // location: "Hassan, Karnataka",
    rating: 5,
    comment:
    "After an extensive search, we found an online store that tailored a fantastic product to our needs, providing excellent quality. you can purchase here without risk",
    product: "Fabric Sofa",
  },
  {
    name: "Surya J",
    // location: "Hassan, Karnataka",
    rating: 5,
    comment: 
    "The product is exceptional. It looks even more stunning in person than in the images. Thank you, Wood Decor.",
    product: "Upholstered Bed with Storage",
  },
  {
    name: "Rohit S.",
    rating: 5,
    comment: "The recliner chair is super comfy and provides perfect back support. Great for watching TV or taking a quick nap.",
    product: "Recliner Chair",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlquyo3aICdeQSWC6R9KXJF7TCY4kHIOtoA&s"
  },
  {
    name: "Neha T.",
    rating: 4,
    comment: "The corner table is a great space-saver and adds a contemporary look to the living room. I'm happy with the purchase.",
    product: "Corner Table"
  },
  {
    name: "Deepak R.",
    rating: 5,
    comment: "I bought the dressing table and it's perfect for my bedroom. The storage space is just right, and it complements my decor beautifully.",
    product: "Dressing Table"
  },
  {
    name: "Karishma P.",
    rating: 5,
    comment: "Love this modern desk! It is sleek, stylish, and very sturdy. Perfect for both work and leisure.",
    product: "Modern Writing Desk",
    image: "https://5.imimg.com/data5/ANDROID/Default/2021/11/AO/GB/HG/136488533/product-jpeg.jpg"
  },
  {
    name: "Arjun M.",
    rating: 4,
    comment: "The sofa bed is quite practical and comfortable. Its the perfect solution for extra sleeping space when guests come over.",
    product: "Sofa Bed"
  },
  {
    name: "Sanya V.",
    rating: 5,
    comment: "The armchair is incredibly comfortable and adds a modern touch to my living room. Perfect for relaxing with a book!",
    product: "Armchair"
  },
  {
    name: "Vikram S.",
    rating: 5,
    comment: "This coffee table is stylish and functional. It’s the perfect size for my living room, and the quality is good too.",
    product: "Modern Coffee Table"
  },
  {
    name: "Tanvi G.",
    rating: 5,
    comment: "The shoe rack is a lifesaver! It helps organize my space and has a sleek design that blends well with my home decor.",
    product: "Shoe Rack"
  },
  {
    name: "Rajeev P.",
    rating: 5,
    comment: "Bought the dining set for our new home, and it's amazing! The table is sturdy, and the chairs are super comfortable.",
    product: "Wooden Dining Set"
  },
  {
    name: "Suman B.",
    rating: 5,
    comment: "This nightstand is both practical and stylish. It has just the right amount of storage and fits perfectly beside my bed.",
    product: "Nightstand"
  }
  
];

export default function ReviewPopup() {
  const [currentReview, setCurrentReview] = useState<Review | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const getRandomReview = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * reviews.length)
    return reviews[randomIndex]
  }, [])

  useEffect(() => {
    // Delay the initial popup by 3 seconds
    const initialDelay = setTimeout(() => {
      setCurrentReview(getRandomReview())
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(initialDelay)
  }, [getRandomReview])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentReview(getRandomReview())
        setIsTransitioning(false)
      }, 500) // Half of the transition duration
    }, 5000) // Change review every 5 seconds

    return () => clearInterval(interval)
  }, [isVisible, getRandomReview])

  if (!isVisible || !currentReview) return null

  return (
    <div
      className={`fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 max-w-xs
                  transition-all duration-1000 ease-in-out
                  ${
                    isTransitioning
                      ? "opacity-0 translate-y-full"
                      : "opacity-100 translate-y-0"
                  }`}
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X size={16} />
      </button>
      <div className="flex items-start mb-2">
        {currentReview.image && (
          <div className="mr-3 flex-shrink-0">
            <Image
              src={currentReview.image}
              alt={currentReview.product}
              width={80}
              height={80}
              className="rounded-md"
            />
          </div>
        )}
        <div>
          <div className="flex items-center mb-1">
            <div className="text-yellow-400 mr-1">
              {"★".repeat(currentReview.rating)}
              {"☆".repeat(5 - currentReview.rating)}
            </div>
            <span className="text-sm font-semibold">{currentReview.name}</span>
          </div>
          <p className="text-sm text-gray-600 mb-1">
            &quot;{currentReview.comment}&quot;
          </p>
          <p className="text-xs text-gray-500">{currentReview.product}</p>
        </div>
      </div>
    </div>
  )
}