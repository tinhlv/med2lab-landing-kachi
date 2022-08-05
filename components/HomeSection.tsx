import React from 'react'
import Image from 'next/image'
import HeroImage from '../public/images/hero.png'

function Banner() {
  return (
    <div className="flex h-auto items-center justify-center p-8" id="Home">
      <div className="md:ml-20 md:w-1/3">
        <h1 className="mb-[60px] text-4xl font-bold text-primary md:text-5xl">
          Unlocking Value in Chronic Disease Management
        </h1>
        <p className="mb-[60px] text-base text-[#10386b] md:text-2xl">
          via Interactive and Engaging Online Training
        </p>
        <div className="mt-12 flex items-end justify-start gap-5 text-center ">
          <button className="min-w-[204px] cursor-pointer rounded-lg bg-secondary p-5 font-medium text-white transition-colors hover:bg-primary hover:shadow-xl">
            Request A Demo
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <Image
          src={HeroImage}
          width={720}
          height={700}
          objectFit="contain"
          alt="hero img"
        />
      </div>
    </div>
  )
}

export default Banner
