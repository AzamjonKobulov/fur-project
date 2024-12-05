"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../../shared/Button";

const slides = [
  {
    title: "Кухня, 20 м²",
    price: "от 100 000 руб.",
    image: "/assets/images/img-desing-interior-1.jpg",
  },
  {
    title: "Гостиная",
    price: "от 80 000 руб.",
    image: "/assets/images/img-desing-interior-2.jpg",
  },
  {
    title: "Спальня",
    price: "от 70 000 руб.",
    image: "/assets/images/img-desing-interior-3.jpg",
  },
  {
    title: "Ванная",
    price: "от 60 000 руб.",
    image: "/assets/images/img-desing-interior-2.jpg",
  },
];

export default function InteriorDesign() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  // Get the last two previous images relative to the active index, excluding the active one
  const getThumbnails = () => {
    const previousIndex1 = (activeIndex - 1 + slides.length) % slides.length;
    const previousIndex2 = (activeIndex - 2 + slides.length) % slides.length;
    return [slides[previousIndex2], slides[previousIndex1]];
  };

  return (
    <section>
      <div className="container space-y-5 md:space-y-8 xl:space-y-10 3xl:space-y-12">
        {/* Slider */}
        <div className="  grid md:grid-cols-2 gap-30px md:gap-5">
          {/* Texts & Thumbnail Images of Slider */}
          <div className="flex flex-col justify-between gap-60px">
            {/* Top Texts */}
            <div className="space-y-6 sm:space-y-7 xl:space-y-30px 3xl:space-y-10">
              <div className="space-y-3.5 sm:space-y-4 xl:space-y-5 3xl:space-y-30px">
                <h2>Дизайн интерьера</h2>
                <p className="max-w-xl text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18.2px] sm:leading-5 3xl:leading-[26px] xl:pr-32">
                  У вас нет дизайна интерьера? Наши дизайнеры с радостью помогут
                  вам!
                </p>
              </div>

              <Button
                variant="red"
                className="w-full xs:w-fit h-[52px] 3xl:h-[73px] flex items-center justify-center gap-4 px-5 3xl:px-10"
              >
                Оставить заявку
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

            {/* Thumbnail Images */}
            <div className=" overflow-hidden hidden md:grid grid-cols-2 gap-5">
              {getThumbnails().map((slide, index) => (
                <Image
                  key={index}
                  src={slide.image}
                  alt="Thumbnail"
                  width={1000}
                  height={700}
                  onClick={() => handleThumbnailClick(slides.indexOf(slide))}
                  className={`cursor-pointer h-[150px] xl:h-[180px] 3xl:h-[260px] object-cover`}
                />
              ))}
            </div>
          </div>

          {/* Active Slide Image with Framer Motion */}
          <div className="relative">
            {/* Overlay */}
            <div className="absolute h-1/3 left-0 bottom-0 z-10 w-full bg-gradient-to-t from-brand-dark/60 to-brand-dark/0"></div>

            {/* Animated Image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={slides[activeIndex].image}
                alt="Main Image"
                width={1000}
                height={700}
                className="w-full h-[443px] xl:h-[504px] 3xl:h-[700px] object-cover"
              />
            </motion.div>

            {/* Title & Price */}
            <div className="absolute bottom-0 left-0 w-full flex flex-col xl:flex-row xl:justify-between gap-2.5 sm:gap-4 z-20 text-white p-5 sm:p-30px xl:p-10 3xl:p-12">
              <h4 className="font-normal text-white">
                {slides[activeIndex].title}
              </h4>
              <p className="text-13 sm:text-sm 3xl:text-[18px] leading-[13px] sm:leading-[14px] 3xl:leading-[18px]">
                {slides[activeIndex].price}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons & Fraction */}
        <div className="flex items-center justify-between">
          {/* Prev */}
          <button
            onClick={() =>
              setActiveIndex((activeIndex - 1 + slides.length) % slides.length)
            }
            className="slide-prev size-10 sm:size-12 xl:size-[58px] 3xl:size-20 shrink-0 group grid place-content-center border border-brand-dark/20 rounded-full"
          >
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 sm:w-3.5 3xl:w-auto group-hover:-translate-x-1.5 transition-all duration-300s"
            >
              <path
                d="M0.293137 8.70711C-0.0973873 8.31658 -0.0973873 7.68342 0.293137 7.29289L6.6571 0.928932C7.04762 0.538408 7.68079 0.538408 8.07131 0.928932C8.46184 1.31946 8.46184 1.95262 8.07131 2.34315L2.41446 8L8.07131 13.6569C8.46184 14.0474 8.46184 14.6805 8.07131 15.0711C7.68079 15.4616 7.04762 15.4616 6.6571 15.0711L0.293137 8.70711ZM22.0002 9L1.00024 9V7L22.0002 7V9Z"
                fill="#242323"
              />
            </svg>
          </button>

          {/* Dynamic Fraction Display */}
          <div className="sm:text-xl xl:text-[22px] 3xl:text-3xl">
            {String(activeIndex + 1).padStart(2)}
            <span className="text-brand-dark/20">
              {" "}
              / {String(slides.length).padStart(2)}
            </span>
          </div>

          {/* Next */}
          <button
            onClick={() => setActiveIndex((activeIndex + 1) % slides.length)}
            className="slide-next size-10 sm:size-12 xl:size-[58px] 3xl:size-20 shrink-0 group grid place-content-center border border-brand-dark/20 rounded-full"
          >
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 sm:w-3.5 3xl:w-auto rotate-180 group-hover:translate-x-1.5 transition-all duration-300s"
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
