import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Component() {
	return (
		<div className="relative w-full h-[80vh] ">
			<Image
				src="https://github.com/user-attachments/assets/5927dfe0-233d-4dab-bd36-fcb87ac551dc"
				alt="Luxurious living room"
				layout="fill"
				objectFit="cover"
				quality={100}
				className='blur-sm'
			/>
			<div className="absolute inset-0 bg-black bg-opacity-50" />
			<div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">OUR STORY</h1>
				<p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg mb-8">
					We believe that every piece of furniture should tell a story. That's why we handcraft each item with
					precision and care, using only the finest materials and attention to detail. From classic designs
					that stand the test of time to innovative creations that inspire and elevate your decor, our
					collection offers a diverse range of options to suit every taste and preference.
				</p>
				<Link href={"tel:+%20919341817975"}>

					<Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors">
						CONTACT US
					</Button>
				</Link>
			</div>
		</div>
	)
}