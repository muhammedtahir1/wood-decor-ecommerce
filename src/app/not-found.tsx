import Footer from '@/components/landingpage/footer'
import Header from '@/components/landingpage/header'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
      <Header />
      <main className='min-h-[80vh] flex flex-col gap-5 items-center justify-center'>
        <h1 className='font-bold my-5 text-3xl'>No found </h1>
        <Link href={"/"}>
          <Button className='flex items-center'><ArrowLeft className='mr-1' /> Go back to home</Button>
        </Link>
      </main>
      <Footer />
    </div>
  )
}

export default notFound