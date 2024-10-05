"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  {
    src: "https://i.pinimg.com/564x/3b/a9/ac/3ba9ac399d39552c23be22b7632f324c.jpg",
    alt: "Wood decor sofa",
    title: "Sofa & Couches",
  },
  {
    src: "https://i.pinimg.com/564x/02/d0/7b/02d07b599baebabf6e79b966bfab36c5.jpg",
    alt: "Wood decor Beds",
    title: "Beds",
  },
  {
    src: "https://i.pinimg.com/564x/40/aa/1a/40aa1ab428fbca251f269b6a91d20352.jpg",
    alt: "Wood decor dining",
    title: "Dining Set",
  },
  {
    src: "https://i.pinimg.com/564x/ab/4c/af/ab4caf9ad4ffc3dbd25888ba89adc144.jpg",
    alt: "Wood decor dining",
    title: "Dining Set",
  },

  {
    src: "https://i.pinimg.com/564x/ca/f6/a1/caf6a1042c3788be027abfa8666d740a.jpg",
    alt: "Wood decor dining",
    title: "Dining Set",
  },
  {
    src: "https://i.pinimg.com/564x/71/86/a0/7186a07723093ad20b1c395d08bac032.jpg",
    alt: "Wood decor dining",
    title: "Dining Set",
  },
  {
    src: "https://i.pinimg.com/564x/3a/2e/f7/3a2ef7198e216027c4d0f754f15d6b9d.jpg",
    alt: "Wood decor dining",
    title: "Dining Set",
  },

  // {
  //   src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   alt: "Wood decor sofa",
  //   title: "Sofa & Couches"
  // },
  // {
  //   src: "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   alt: "Wood decor Beds",
  //   title: "Beds"
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1704040686487-a39bb894fc93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   alt: "Wood decor dining",
  //   title: "Dining Set"
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   alt: "Wood decor Interiors",
  //   title: "Interiors"
  // },
];

export default function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[700px] sm:h-[800px] md:h-[900px] lg:h-[1000px] overflow-hidden rounded-xl mt-16 md:mt-10">
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={980}
              className="object-contain object-center mx-auto"
              // layout="fill"
              // objectFit="cover"
              // objectPosition="center"
              priority={index === currentIndex}
            />
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-label="Previous image"
      >
        <FaChevronLeft className="text-gray-800 w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-label="Next image"
      >
        <FaChevronRight className="text-gray-800 w-6 h-6" />
      </button>
    </div>
  );
}
