import React from 'react'
import Image from 'next/image'
import Image01 from '../public/images/pic-image-section2-1.png'
import Image02 from '../public/images/pic-image-section2-2.png'
import Image03 from '../public/images/pic-image-section2-3.png'

function WhyKachiHealthSection() {
  return (
    <div className="container mx-auto flex flex-wrap py-16">
      <div className="blockItem py-0 md:py-14">
        <p className="mx-auto mb-12 text-center text-2xl" data-aos="fade-down" data-aos-anchor-placement="center-center"
>
          Our interactive curriculum empowers clinicians to{' '}
          <span className="text-primary">deliver the best care</span> for
          patients
          <br />
          with <span className="text-primary">confidence</span> and{' '}
          <span className="text-primary">efficiency</span>{' '}
        </p>
        <div className="flex flex-wrap h-auto items-center justify-center p-4 md:p-8">
          <div className="md:block" data-aos="fade-right" data-aos-anchor-placement="center-center">
            <Image
              src={Image01}
              width={557}
              height={372}
              objectFit="contain"
              alt="hero img"
            />
          </div>
          <div className="md:ml-20 md:w-1/3" data-aos="fade-left" data-aos-anchor-placement="center-center">
            <h2 className="mb-5 sm:mb-10 md:mb-[60px] text-4xl font-bold text-primary md:text-5xl">
              Mastering the Clinical Guidelines
            </h2>
            <p className="text-base md:text-2xl">
              <span className="italic text-[#10386b]">
                Memorable and effective, byte-sized
              </span>{' '}
              modules that help clinicians quickly get updated with new clinical
              guidelines and evidence-based findings.
            </p>
          </div>
        </div>
      </div>
      <div className="blockItem py-0 md:py-14">
        <div className="flex flex-wrap h-auto items-center justify-center p-4 md:p-8">
          <div className="md:w-1/3 order-2 md:order-1" data-aos="fade-right" data-aos-anchor-placement="center-center">
            <h2 className="mb-5 sm:mb-10 md:mb-[60px] text-4xl font-bold text-primary md:text-5xl">
              Improving Documentation
            </h2>
            <p className="text-base md:text-2xl">
              <span className="italic text-[#10386b]">Gamified</span>{' '}
              documentation modules with{' '}
              <span className="italic text-[#10386b]">
                AI-powered real-time feedback
              </span>
              that efficiently coach clinicians on clear and compliant
              documentation—saving clinicians valuable time and energy.
            </p>
          </div>
          <div className="md:ml-20 md:block order-1 md:order-2" data-aos="fade-left" data-aos-anchor-placement="center-center">
            <Image
              src={Image02}
              width={557}
              height={372}
              objectFit="contain"
              alt="hero img"
            />
          </div>
        </div>
      </div>
      <div className="blockItem py-0 md:py-14">
        <div className="flex flex-wrap h-auto items-center justify-center p-4 md:p-8">
          <div className="md:block order-2 md:order-1" data-aos="fade-right" data-aos-anchor-placement="center-center">
            <Image
              src={Image03}
              width={557}
              height={372}
              objectFit="contain"
              alt="hero img"
            />
          </div>
          <div className="md:ml-20 md:w-1/3 order-1 md:order-2" data-aos="fade-left" data-aos-anchor-placement="center-center">
            <h2 className="mb-5 sm:mb-10 md:mb-[60px] text-4xl font-bold text-primary md:text-5xl">
              Gaining a Firm Grasp on Risk-Adjustment
            </h2>
            <p className="text-base md:text-2xl">
              AI-powered algorithms inside electronic medical records for quick
              adoption of{' '}
              <span className="italic text-[#10386b]">
                optimal documentation details
              </span>{' '}
              that are{' '}
              <span className="italic text-[#10386b]">
                risk-adjustment-compliant, in real time.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyKachiHealthSection
