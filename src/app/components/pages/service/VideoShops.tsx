"use client";

import { useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Navigation } from "swiper/modules";

const slides = [
  {
    img: "/assets/images/img-video-1.jpg",
    name: "Выбираем диван",
    time: "0:45",
  },
  {
    img: "/assets/images/img-video-2.jpg",
    name: "Разработка дизайна интерьера",
    time: "0:45",
  },
  {
    img: "/assets/images/img-video-3.jpg",
    name: "Как выбрать сантехнику?",
    time: "0:45",
  },
  {
    img: "/assets/images/img-video-4.jpg",
    name: "Минусы открытых систем хранения",
    time: "0:45",
  },
];

export default function VideoShops() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(1); // Ensure this is always a number
  const totalSlides = slides.length;

  const handleSlidesPerViewUpdate = (swiper: any) => {
    const slidesView = swiper.params.slidesPerView;
    // Ensure that slidesPerView is a number before updating state
    if (typeof slidesView === "number") {
      setSlidesPerView(slidesView);
    }
  };

  return (
    <section className="section-top-padding">
      <div className="container space-y-8 sm:space-y-10 xl:space-y-12 3xl:space-y-60px">
        <h2>
          <span className="text-brand-red mr-1">
            Видео<span className="sm:hidden">-</span>
            <br className="sm:hidden" />
            путешествия
          </span>
          <br />
          по магазинам <br className="sm:hidden" /> Китая
        </h2>

        {/* Slides */}
        <Swiper
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          pagination={{ type: "fraction" }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          onInit={handleSlidesPerViewUpdate}
          onBreakpoint={handleSlidesPerViewUpdate}
          className="mySwiper"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`group relative h-[402px] xl:h-[470px] 3xl:h-[736px] after:absolute after:inset-0 after:w-full after:h-full after:bg-black/50 after:z-20 ${
                  idx === 1 || idx === 3 ? "xl:mt-5 3xl:mt-10" : ""
                }`}
              >
                <Image
                  src={slide.img}
                  alt={slide.name}
                  width={500}
                  height={800}
                  className="absolute inset-0 z-10 w-full h-full object-cover"
                />

                <div className="relative z-30 w-full h-full grid place-content-center">
                  <p className="absolute top-5 right-5 3xl:top-30px 3xl:right-30px text-white/80 text-13 xl:text-sm 3xl:text-lg">
                    {slide.time}
                  </p>

                  <button className="size-16 xl:size-[75px] 3xl:size-[113px] shrink-0 grid place-content-center border border-white/50 rounded-full">
                    <svg
                      width="19"
                      height="23"
                      viewBox="0 0 19 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-3.5 xl:size-[15px] 3xl:size-auto"
                    >
                      <path
                        d="M19 11.5L0.249999 22.3253L0.25 0.674682L19 11.5Z"
                        fill="white"
                      />
                    </svg>
                  </button>

                  <h5 className="text-white absolute bottom-0 left-0 p-6 xl:p-30px 3xl:p-12">
                    {slide.name}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons & Fraction */}
        <div className="flex xl:hidden items-center justify-between mt-5 sm:mt-8 xl:mt-10 3xl:mt-12">
          {/* Prev */}
          <button className="prev size-10 sm:size-12 xl:size-[58px] 3xl:size-20 shrink-0 group grid place-content-center border border-brand-dark/20 rounded-full">
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 sm:size-3.5 3xl:w-auto group-hover:-translate-x-1.5 transition-all duration-300"
            >
              <path
                d="M0.293137 8.70711C-0.0973873 8.31658 -0.0973873 7.68342 0.293137 7.29289L6.6571 0.928932C7.04762 0.538408 7.68079 0.538408 8.07131 0.928932C8.46184 1.31946 8.46184 1.95262 8.07131 2.34315L2.41446 8L8.07131 13.6569C8.46184 14.0474 8.46184 14.6805 8.07131 15.0711C7.68079 15.4616 7.04762 15.4616 6.6571 15.0711L0.293137 8.70711ZM22.0002 9L1.00024 9V7L22.0002 7V9Z"
                fill="#242323"
              />
            </svg>
          </button>

          {/* Dynamic Fraction Display */}
          <div className="sm:text-xl xl:text-[22px] 3xl:text-3xl">
            {Math.floor(currentSlide + slidesPerView)}
            <span className="text-brand-dark/20"> / {totalSlides}</span>
          </div>

          {/* Next */}
          <button className="next size-10 sm:size-12 xl:size-[58px] 3xl:size-20 shrink-0 group grid place-content-center border border-brand-dark/20 rounded-full">
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 sm:size-3.5 3xl:w-auto rotate-180 group-hover:translate-x-1.5 transition-all duration-300"
            >
              <path
                d="M0.293137 8.70711C-0.0973873 8.31658 -0.0973873 7.68342 0.293137 7.29289L6.6571 0.928932C7.04762 0.538408 7.68079 0.538408 8.07131 0.928932C8.46184 1.31946 8.46184 1.95262 8.07131 2.34315L2.41446 8L8.07131 13.6569C8.46184 14.0474 8.46184 14.6805 8.07131 15.0711C7.68079 15.4616 7.04762 15.4616 6.6571 15.0711L0.293137 8.70711ZM22.0002 9L1.00024 9V7L22.0002 7V9Z"
                fill="#242323"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
