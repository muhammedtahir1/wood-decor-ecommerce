'use client'

import * as React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from 'lucide-react'
import Heading from './h1-style'

// Define the structure of a testimonial
interface Testimonial {
  image: string
  description: string
  name: string
  reviews: number
}

// Sample data (replace with your actual data)
const testimonials: Testimonial[] = [
  {
    image: "/placeholder.svg?height=300&width=400",
    description: "Very Good quality furnitures customized according to your need and tastes. I got sofa from here and they delivered as best. I also liked their customer service and the way they do the complete work",
    name: "ADITI SAXENA - HYDRABAD",
    reviews: 5
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    description: "We ordered the custom-made sofa for our living room. The staff was very cooperative and well-knowledgeable to understand our every requirement. The service has been great and got the same sofa and prices as we always dreamt of. Thanks a lot!",
    name: "ANUPAMA SREEDAR - CHENNAI",
    reviews: 5
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    description: "Options for Bangalore are really great, I had always heard of custom sofas, I got my custom design Dinning table and chairs designed along with marble top. it was great experience working with these wonderful people. thanks The maple wood",
    name: "SIMRAN NEHA -BANGALORE",
    reviews: 5
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    description: "Options for Bangalore are really great, I had always heard of custom sofas, I got my custom design Dinning table and chairs designed along with marble top. it was great experience working with these wonderful people. thanks The maple wood",
    name: "SIMRAN NEHA -BANGALORE",
    reviews: 5
  },
]

export default function Testimonials2() {
  return (
    <section  className="py-10 md:py-20 px-8 md:px-16 my-10 md:my-20 " id="testimonils">
    <Heading text="Testimonials" />
    <Carousel className="w-full max-w-5xl mx-auto bg-brand-bg-DEFALUT border-none shadow-none mt-8 md:mt-12">
      <CarouselContent className="-ml-1">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 border-none">
            <div className="p-1">
              <Card className='border-none shadow-none'>
                <CardContent className="flex flex-col items-center p-6 bg-brand-bg-DEFALUT ">
                  <Image
                    src={testimonial.image}
                    alt={`Testimonial by ${testimonial.name}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <p className="text-sm text-center mb-4">{testimonial.description}</p>
                  <div className="flex mb-2">
                    {[...Array(testimonial.reviews)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                  <p className="font-semibold text-center">{testimonial.name}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  )
}