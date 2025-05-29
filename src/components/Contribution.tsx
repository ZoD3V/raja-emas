"use client";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import Container from "./Container";
import { contributionData } from "@/data/contribution";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";

const Contribution: React.FC = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  return (
    <section id="contribution" className="pb-20 pt-12 bg-primary-50">
      <div className="h-full w-full z-10 mx-auto pb-20">
        <div className="h-full w-full">
          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5 max-w-6xl mx-auto">
            <p className="font-medium text-primary-600">
              {contributionData.badge}
            </p>
            <h2 className="text-2xl md:text-4xl md:leading-tight font-bold mb-4 text-primary my-2">
              {contributionData.heading}
            </h2>

            <p className="mx-auto md:px-5 text-secondary font-normal font-body text-sm md:text-base">
              {contributionData.subHeading}
            </p>
          </div>
        </div>
      </div>
      <Container className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          navigation={{
            nextEl: ".swiper-button-prev-custom",
            prevEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          onSwiper={setSwiperRef}
          className="contributions-swiper"
        >
          {contributionData.data.map((contribution, index) => (
            <SwiperSlide key={index} className="swiper-wrapper">
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${contribution.embedCode}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-1/2 left-5 lg:left-0 transform xl:-translate-x-1/2 -translate-y-1/2 z-10 flex justify-center gap-4 mt-8">
          <button
            onClick={() => swiperRef?.slidePrev()}
            className="swiper-button-next-custom w-12 h-12 rounded-lg border-2 border-white flex items-center justify-center bg-[#A494BE] text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute top-1/2 right-10 sm:right-5 lg:right-0 transform xl:translate-x-1/2 -translate-y-1/2 z-10 flex justify-center gap-4 mt-8">
          <button
            onClick={() => swiperRef?.slideNext()}
            className="swiper-button-prev-custom w-12 h-12 rounded-lg border-2 border-white flex items-center justify-center bg-[#A494BE] text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Contribution;
