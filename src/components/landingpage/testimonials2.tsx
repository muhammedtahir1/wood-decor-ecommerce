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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlquyo3aICdeQSWC6R9KXJF7TCY4kHIOtoA&s",
    description: "Thanks to Wood Decor. You guys are amazing and really enjoying the sofa set it looks amazing in my living room. Thanks alot for making me happy.",
    name: "RAHUL GOWDA - BANGALORE",
    reviews: 5
  },
  {
    image: "https://5.imimg.com/data5/ANDROID/Default/2021/11/AO/GB/HG/136488533/product-jpeg.jpg",
    description: "Options for Bangalore are really great, I had always heard of custom sofas, I got my custom design Dinning table and chairs designed along with marble top. it was great experience working with these wonderful people. thanks The maple wood",
    name: "ANUPAMA SREEDAR - CHENNAI",
    reviews: 5
  },
  {
    image: "https://5.imimg.com/data5/SELLER/Default/2023/12/368008768/IK/AU/UT/160091302/l-shape-sofa-set.jpg",
    description: "Very Good quality furnitures customized according to your need and tastes. I got sofa from here and they delivered as best. I also liked their customer service and the way they do the complete work",
    name: "ADITI SAXENA - HYDRABAD",
    reviews: 5
  },
  {
    image: "https://i.pinimg.com/564x/96/55/e5/9655e5a5917115e82c1728adaa4bee25.jpg",
    description: "We ordered the custom-made sofa for our living room. The staff was very cooperative and well-knowledgeable to understand our every requirement. The service has been great and got the same sofa and prices as we always dreamt of. Thanks a lot!",
    name: "SIMRAN NEHA -BANGALORE",
    reviews: 5
  },
  {
    image: "https://5.imimg.com/data5/SELLER/Default/2024/3/398528406/RF/AJ/QD/215268086/wooden-brown-bed-500x500.jpg",
    description: "Overall a Delightful experience. Mr Azmath coordinated from the beginning and was helpful from visiting home for accurate measurements and definitely advisable for cost efficient and good looking furniture. Best way to shop for furniture",
    name: "SUHAS D - MUMBAI",
    reviews: 5
  },
]

export default function Testimonials2() {
  return (
    <section  className=" px-12 md:px-16 my-10 md:my-20 " id="testimonils">
    <Heading text="Testimonials" />
    <Carousel className="w-full max-w-5xl mx-auto bg-brand-bg-DEFALUT border-none shadow-none mt-8 md:mt-12">
      <CarouselContent className="-ml-1">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 border-none">
            <div className="p-1">
              <Card className='border-none shadow-none'>
                <CardContent className="flex flex-col items-center px-0 py-6 md:p-6 bg-brand-bg-DEFALUT ">
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