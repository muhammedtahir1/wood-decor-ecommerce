"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  {
    src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pistachio-Filled Kunafa Delight!",
    title: "Pistachio-Filled Kunafa Delight!"
  },
  {
    src: "https://images.unsplash.com/photo-1525896544042-354764aa27e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Chocolate Extravaganza",
    title: "Chocolate Extravaganza"
  },
  {
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Berry Bliss Cake",
    title: "Berry Bliss Cake"
  },
  {
    src: "https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Berry Bliss Cake",
    title: "Berry Bliss Cake"
  },
];

export default function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-[90vw] h-[60vh] md:max-w-6xl mx-auto overflow-x-hidden overflow-hidden rounded-xl">
      <div className="aspect-[3/1] relative overflow-hidden h-full mt-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 -left-56 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image.src}
              // srcSet={{
              //   '(min-width: 768px)': '/large-image.jpg',
              //   '(min-width: 480px)': '/medium-image.jpg',
              //   'default': '/small-image.jpg',
              // }}
              alt={image.alt}
              width={1000}
              height={900}
              quality={100}
              className="w-full h-full object-cover object-right"

            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-8">
              <div className="bg-white bg-opacity-75 p-4 max-w-md">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                  {image.title}
                </h2>
              </div>
            </div> */}
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