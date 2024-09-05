"use client"
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  {
    src: "https://images.unsplash.com/photo-1680503397671-caa25818d36f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pistachio-Filled Kunafa Delight!",
    title: "Pistachio-Filled Kunafa Delight!"
  },
  {
    src: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Chocolate Extravaganza",
    title: "Chocolate Extravaganza"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1683141443663-503f4140c667?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Berry Bliss Cake",
    title: "Berry Bliss Cake"
  }
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
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
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