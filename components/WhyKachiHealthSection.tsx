import React from 'react'
import Image from 'next/image'
import Image01 from '../public/images/pic-image-section2-1.png'
import Image02 from '../public/images/pic-image-section2-2.png'
import Image03 from '../public/images/pic-image-section2-3.png'
import Slider from "react-slick";

// Slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function WhyKachiHealthSection() {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    fade: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: true,
    focusOnSelect: true,
    draggable: true,
  };
  return (
    <Slider className="section custom-slick" data-anchor="why-kachi-health" {...settings}>
      <div>
        <div
          className="blockItem py-6 md:py-14"
        >
          <div className="container mx-auto flex flex-wrap py-16">
            <p
              className="mx-auto mb-12 text-center text-3xl"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            >
              Our interactive curriculum empowers clinicians to{' '}
              <span className="text-primary">deliver the best care</span> for
              patients
              <br />
              with <span className="text-primary">confidence</span> and{' '}
              <span className="text-primary">efficiency</span>{' '}
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
          </div>
        </div>
      </div>
      <div>
        <div
          className="blockItem py-6 md:py-14"
        >
          <div className="container mx-auto flex flex-wrap py-16">
            <div className="flex h-auto flex-wrap items-center justify-center p-4 md:p-8">
              <div
                className="order-2 md:order-1 md:w-1/3"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-anchor-placement="center-center"
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
                data-aos-delay="500"
                data-aos-anchor-placement="center-center"
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
          </div>
        </div>
      </div>
      <div>
        <div
          className="blockItem py-6 md:py-14"
        >
          <div className="container mx-auto flex flex-wrap py-16">
            <div className="flex h-auto flex-wrap items-center justify-center p-4 md:p-8">
              <div
                className="order-2 md:order-1 md:block"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-anchor-placement="center-center"
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
                data-aos-delay="500"
                data-aos-anchor-placement="center-center"
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
      </div>
    </Slider>
  )
}

export default WhyKachiHealthSection;