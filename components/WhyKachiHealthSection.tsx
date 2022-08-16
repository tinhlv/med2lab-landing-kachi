import React from 'react'
import Image from 'next/image'
import Image01 from '../public/images/pic-image-section2-1.png'
import Image02 from '../public/images/pic-image-section2-2.png'
import Image03 from '../public/images/pic-image-section2-3.png'

function WhyKachiHealthSection() {
  return (
    <React.Fragment>
      <div
        className="blockItem section py-6 md:py-14"
        data-anchor="why-kachi-health"
      >
        <div className="container mx-auto flex flex-wrap py-16">
          <p
            className="mx-auto mb-12 text-center text-3xl"
          >
            <span data-aos="fade-up" data-aos-anchor-placement="bottom-center">Our interactive curriculum</span><br />
            <span data-aos-delay="500" data-aos="fade-up" data-aos-anchor-placement="bottom-center">empowers clinicians to{' '}
              <span className="text-primary">deliver the best care</span> for
              patients
              <br />
              with <span className="text-primary">confidence</span> and{' '}
              <span className="text-primary">efficiency</span>{' '}
            </span>
          </p>
          <div className="flex h-auto flex-wrap items-center justify-center p-4 md:p-8">
            <div
              className="md:block"
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-anchor-placement="bottom-center"
            >
              <Image
                src={Image01}
                width={557}
                height={372}
                objectFit="contain"
                alt="hero img"
              />
            </div>
            <div
              className="md:ml-20 md:w-1/3"
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-anchor-placement="bottom-center"
            >
              <h2 className="mb-5 text-4xl font-bold text-primary sm:mb-10 md:mb-[60px] md:text-5xl">
                Mastering the Clinical Guidelines
              </h2>
              <p className="text-base md:text-2xl">
                <span className="italic text-[#10386b]">
                  Memorable and effective, byte-sized
                </span>{' '}
                modules that help clinicians quickly get updated with new
                clinical guidelines and evidence-based findings.
              </p>
            </div>
          </div>
          <a className="absolute inset-x-0 bottom-0 left-1/2 transform -translate-x-1/2 h-32 w-32 text-center" href="#why-kachi-health-content-1">
            More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
      <div
        className="blockItem section py-6 md:py-14"
        data-anchor="why-kachi-health-content-1"
      >
        <div className="container mx-auto flex flex-wrap py-16">
          <div className="flex h-auto flex-wrap items-center justify-center p-4 md:p-8">
            <div
              className="order-2 md:order-1 md:w-1/3"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-center"
            >
              <h2 className="mb-5 text-4xl font-bold text-primary sm:mb-10 md:mb-[60px] md:text-5xl">
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
            <div
              className="order-1 md:order-2 md:ml-20 md:block"
              data-aos="fade-left"
              data-aos-anchor-placement="bottom-center"
            >
              <Image
                src={Image02}
                width={557}
                height={372}
                objectFit="contain"
                alt="hero img"
              />
            </div>
          </div>
          <a className="absolute inset-x-0 bottom-0 left-1/2 transform -translate-x-1/2 h-32 w-32 text-center" href="#why-kachi-health-content-2">
            More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
      <div
        className="blockItem section py-6 md:py-14"
        data-anchor="why-kachi-health-content-2"
      >
        <div className="container mx-auto flex flex-wrap py-16">
          <div className="flex h-auto flex-wrap items-center justify-center p-4 md:p-8">
            <div
              className="order-2 md:order-1 md:block"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-center"
            >
              <Image
                src={Image03}
                width={557}
                height={372}
                objectFit="contain"
                alt="hero img"
              />
            </div>
            <div
              className="order-1 md:order-2 md:ml-20 md:w-1/3"
              data-aos="fade-left"
              data-aos-anchor-placement="bottom-center"
            >
              <h2 className="mb-5 text-4xl font-bold text-primary sm:mb-10 md:mb-[60px] md:text-5xl">
                Gaining a Firm Grasp on Risk-Adjustment
              </h2>
              <p className="text-base md:text-2xl">
                AI-powered algorithms inside electronic medical records for
                quick adoption of{' '}
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
    </React.Fragment>
  )
}

export default WhyKachiHealthSection