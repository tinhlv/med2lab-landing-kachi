import React from 'react'
import Image from 'next/image'
import HeroImage from '../public/images/hero.png'

function Banner() {
  return (
    <div className="relative flex h-auto items-center justify-center p-8">
      <div className="md:ml-20 md:w-1/3">
        <h1
          className="mb-[60px] text-4xl font-bold text-primary md:text-5xl"
          data-aos="fade-up"
        >
          Unlocking Value in Chronic Disease Management
        </h1>
        <p
          className="mb-[60px] text-base text-[#10386b] md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          via Interactive and Engaging Online Training
        </p>
        <div
          className="mt-12 flex items-end justify-start gap-5 text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <button className="min-w-[204px] cursor-pointer rounded-lg bg-secondary p-5 font-medium text-white transition-colors hover:bg-primary hover:shadow-xl">
            Request A Demo
          </button>
        </div>
      </div>

      <div className="hidden md:block" data-aos="fade-in">
        <Image
          src={HeroImage}
          width={720}
          height={700}
          objectFit="contain"
          alt="hero img"
        />
      </div>
      <a href="#why-kachi-health" className="arrow-scroll">
        <span></span>
        <span></span>
      </a>
    </div>
  )
}

export default Banner