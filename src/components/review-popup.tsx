"use client";

import { useState, useEffect } from "react";
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
    name: "Rahul S.",
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
    name: "Anjali M.",
    // location: "Davangere, Karnataka",
    rating: 4,
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
];

export default function ReviewPopup() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Delay the initial popup by 3 seconds
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
        setIsTransitioning(false);
      }, 500); // Half of the transition duration
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  const review = reviews[currentReview];

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
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <span className="text-sm font-semibold">{review.name}</span>
          </div>
          <p className="text-sm text-gray-600 mb-1">
            &quot;{review.comment}&quot;
          </p>
          <p className="text-xs text-gray-500">{review.product}</p>
        </div>
      </div>
    </div>
  );
}
