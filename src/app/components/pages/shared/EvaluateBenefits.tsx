"use client";

import { useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Button from "../../shared/Button";

const slides = [
  {
    img: "/assets/images/img-evaluate-1.png",
    name: "Кресло Lounge",
    costInChina: "456",
    costInEurope: "3 456",
  },
  {
    img: "/assets/images/img-evaluate-2.png",
    name: "Стул Vita",
    costInChina: "152",
    costInEurope: "2 099",
  },
  {
    img: "/assets/images/img-evaluate-3.png",
    name: "Зеркало Vintage",
    costInChina: "321",
    costInEurope: "1 956",
  },
  {
    img: "/assets/images/img-evaluate-4.png",
    name: "Лампа подвесная",
    costInChina: "345",
    costInEurope: "2 154",
  },
  {
    img: "/assets/images/img-evaluate-5.png",
    name: "Табурет Three",
    costInChina: "456",
    costInEurope: "3 456",
  },
  {
    img: "/assets/images/img-evaluate-6.png",
    name: "Светильник Line",
    costInChina: "152",
    costInEurope: "2 099",
  },
  {
    img: "/assets/images/img-evaluate-7.png",
    name: "Кресло Vintage",
    costInChina: "321",
    costInEurope: "1 956",
  },
  {
    img: "/assets/images/img-evaluate-1.png",
    name: "Лампа подвесная",
    costInChina: "345",
    costInEurope: "2 154",
  },
];

export default function EvaluateBenefits() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const totalSlides = slides.length;

  return (
    <section>
      <div className="container space-y-8 sm:space-y-10 xl:space-y-12 3xl:space-y-60px">
        <div className="flex flex-col sm:flex-row sm:items-end xl:items-center justify-between gap-5">
          <h2>
            Оцените
            <span className="text-brand-red">
              {" "}
              <br className="xl:hidden" />
              выгоду
            </span>
          </h2>
          <p className="text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-[19.5px] xl:leading-[20.8px] 3xl:leading-[26px]">
            Вы экономите в разы, приобретая <br /> качественную мебель в Китае
          </p>
        </div>

        {/* Slides */}
        <Swiper
          onSlideChange={(swiper) =>
            setCurrentSlide(Number(swiper.activeIndex))
          }
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
          onInit={(swiper) => {
            const slidesPerView = Number(swiper.params.slidesPerView);
            setSlidesPerView(isNaN(slidesPerView) ? 1 : slidesPerView);
          }}
          onBreakpoint={(swiper) => {
            const slidesPerView = Number(swiper.params.slidesPerView);
            setSlidesPerView(isNaN(slidesPerView) ? 1 : slidesPerView);
          }}
          className="mySwiper"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="group relative">
                {/* Overlay when user hovers */}
                <div className="fade-in absolute inset-0 z-20 w-full h-full hidden group-hover:grid place-content-center bg-brand-dark/10 backdrop-blur-3xl">
                  <div className="group space-y-5 3xl:space-y-9">
                    <h4 className="text-white text-center font-normal">
                      Больше товаров <br className="sm:block xl:hidden" /> в
                      нашем каталоге!
                    </h4>
                    <Button
                      variant="red"
                      className="h-[52px] 3xl:h-[73px] mx-auto flex items-center justify-center gap-4 px-5 3xl:px-10"
                    >
                      Запросить каталог
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 sm:w-auto fill-white group-hover:fill-white/50 transition-all duration-300"
                      >
                        <path d="M16.8492 1.07556C16.8492 0.523278 16.4015 0.0755626 15.8492 0.0755626L6.84924 0.0755626C6.29696 0.0755626 5.84924 0.523278 5.84924 1.07556C5.84924 1.62785 6.29696 2.07556 6.84924 2.07556H14.8492V10.0756C14.8492 10.6278 15.297 11.0756 15.8492 11.0756C16.4015 11.0756 16.8492 10.6278 16.8492 10.0756L16.8492 1.07556ZM1.70711 16.6319L16.5563 1.78267L15.1421 0.368456L0.292893 15.2177L1.70711 16.6319Z" />
                      </svg>
                    </Button>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <Image
                    src={slide.img}
                    alt={slide.name}
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2.5 sm:space-y-3 xl:space-y-3.5 3xl:space-y-5 bg-brand-gray p-[18px] 3xl:p-[30px]">
                  <h5 className="font-normal">{slide.name}</h5>
                  <div className="flex items-center gap-4 sm:gap-5 xl:gap-8 3xl:gap-10">
                    <div>
                      <p className="text-xs 3xl:text-sm leading-4 3xl:leading-[18px]">
                        В Китае
                      </p>
                      <b className="font-unbounded font-normal text-13 sm:text-15 xl:text-base 3xl:text-[22px] leading-[17px] sm:leading-5 3xl:leading-7">
                        ${slide.costInChina}
                      </b>
                    </div>
                    <div className="text-brand-dark/50">
                      <p className="text-xs 3xl:text-sm leading-4 3xl:leading-[18px]">
                        В Европе
                      </p>
                      <b className="font-unbounded font-normal text-13 sm:text-15 xl:text-base 3xl:text-[22px] leading-[17px] sm:leading-5 3xl:leading-7">
                        ${slide.costInEurope}
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons & Fraction */}
        <div className="flex items-center justify-between mt-5 sm:mt-8 xl:mt-10 3xl:mt-12">
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
