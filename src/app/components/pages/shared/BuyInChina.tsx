"use client";

import Image from "next/image";
import { useState } from "react";
import LeavePhonePoppup from "../../shared/LeavePhonePoppup";
import { AnimatePresence } from "framer-motion";

export default function BuyInChina() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleForm() {
    setIsOpen((open) => !open);
    document.body.classList.toggle("overflow-hidden");
  }

  return (
    <section className="section-top-padding">
      <AnimatePresence>
        {isOpen && <LeavePhonePoppup toggleForm={toggleForm} />}
      </AnimatePresence>

      <div className="container space-y-8 sm:space-y-10 xl:space-y-12 3xl:space-y-60px">
        <h2 className="text-brand-dark">
          Что можно <br /> приобрести
          <span className="text-brand-red">
            {" "}
            <br className="xs:hidden" /> в Китае
          </span>
        </h2>

        {/* Cards */}
        <div className="w-full grid sm:grid-cols-3 gap-5 text-white">
          {/* Card 1 */}
          <div className="space-y-5">
            <div
              className="block min-h-40 sm:min-h-80 3xl:min-h-[480px] group relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 overflow-hidden cursor-pointer"
              onClick={toggleForm}
            >
              {/* Icon on hover */}
              <div className="size-10 xl:size-[58px] 3xl:size-[90px] shrink-0 absolute top-7 right-7 xl:top-10 xl:right-10 3xl:top-60px 3xl:right-60px z-10 hidden sm:group-hover:grid place-content-center border border-white/50 rounded-full">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 xl:w-3.5 3xl:w-[21px]"
                >
                  <path
                    d="M16.8492 1.15076C16.8492 0.598473 16.4015 0.150758 15.8492 0.150757L6.84924 0.150758C6.29696 0.150758 5.84924 0.598473 5.84924 1.15076C5.84924 1.70304 6.29696 2.15076 6.84924 2.15076L14.8492 2.15076L14.8492 10.1508C14.8492 10.703 15.297 11.1508 15.8492 11.1508C16.4015 11.1508 16.8492 10.703 16.8492 10.1508L16.8492 1.15076ZM1.70711 16.7071L16.5563 1.85786L15.1421 0.443651L0.292893 15.2929L1.70711 16.7071Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/assets/images/img-buy-in-china-1.jpg"
                alt="Image"
                width={1000}
                height={800}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-all duration-300"
              />

              <div className="absolute bottom-0 left-0 z-10 space-y-2.5 sm:space-y-3 xl:space-y-4 3xl:space-y-5 p-5 sm:p-8 xl:p-10">
                <h4 className="font-normal text-white">Мебель</h4>
                <p className="text-white/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                  11 324 позиций
                </p>
              </div>
            </div>
            <div
              className="block min-h-40 sm:min-h-80 3xl:min-h-[480px] group relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 overflow-hidden cursor-pointer"
              onClick={toggleForm}
            >
              {/* Icon on hover */}
              <div className="size-10 xl:size-[58px] 3xl:size-[90px] shrink-0 absolute top-7 right-7 xl:top-10 xl:right-10 3xl:top-60px 3xl:right-60px z-10 hidden sm:group-hover:grid place-content-center border border-white/50 rounded-full">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 xl:w-3.5 3xl:w-[21px]"
                >
                  <path
                    d="M16.8492 1.15076C16.8492 0.598473 16.4015 0.150758 15.8492 0.150757L6.84924 0.150758C6.29696 0.150758 5.84924 0.598473 5.84924 1.15076C5.84924 1.70304 6.29696 2.15076 6.84924 2.15076L14.8492 2.15076L14.8492 10.1508C14.8492 10.703 15.297 11.1508 15.8492 11.1508C16.4015 11.1508 16.8492 10.703 16.8492 10.1508L16.8492 1.15076ZM1.70711 16.7071L16.5563 1.85786L15.1421 0.443651L0.292893 15.2929L1.70711 16.7071Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/assets/images/img-buy-in-china-4.jpg"
                alt="Image"
                width={1000}
                height={800}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-all duration-300"
              />

              <div className="absolute bottom-0 left-0 z-10 space-y-2.5 sm:space-y-3 xl:space-y-4 3xl:space-y-5 p-5 sm:p-8 xl:p-10">
                <h4 className="font-normal text-white">Текстиль</h4>
                <p className="text-white/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                  15 657 позиций
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="space-y-5 sm:pt-5 3xl:pt-10">
            <div
              className="block min-h-40 sm:min-h-80 3xl:min-h-[480px] group relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 overflow-hidden cursor-pointer"
              onClick={toggleForm}
            >
              {/* Icon on hover */}
              <div className="size-10 xl:size-[58px] 3xl:size-[90px] shrink-0 absolute top-7 right-7 xl:top-10 xl:right-10 3xl:top-60px 3xl:right-60px z-10 hidden sm:group-hover:grid place-content-center border border-white/50 rounded-full">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 xl:w-3.5 3xl:w-[21px]"
                >
                  <path
                    d="M16.8492 1.15076C16.8492 0.598473 16.4015 0.150758 15.8492 0.150757L6.84924 0.150758C6.29696 0.150758 5.84924 0.598473 5.84924 1.15076C5.84924 1.70304 6.29696 2.15076 6.84924 2.15076L14.8492 2.15076L14.8492 10.1508C14.8492 10.703 15.297 11.1508 15.8492 11.1508C16.4015 11.1508 16.8492 10.703 16.8492 10.1508L16.8492 1.15076ZM1.70711 16.7071L16.5563 1.85786L15.1421 0.443651L0.292893 15.2929L1.70711 16.7071Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/assets/images/img-buy-in-china-2.jpg"
                alt="Image"
                width={1000}
                height={800}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-all duration-300"
              />

              <div className="absolute bottom-0 left-0 z-10 space-y-2.5 sm:space-y-3 xl:space-y-4 3xl:space-y-5 p-5 sm:p-8 xl:p-10">
                <h4 className="font-normal text-white">Свет</h4>
                <p className="text-white/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                  21 125 позиций
                </p>
              </div>
            </div>
            <div
              className="block min-h-40 sm:min-h-80 3xl:min-h-[480px] group relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 overflow-hidden cursor-pointer"
              onClick={toggleForm}
            >
              {/* Icon on hover */}
              <div className="size-10 xl:size-[58px] 3xl:size-[90px] shrink-0 absolute top-7 right-7 xl:top-10 xl:right-10 3xl:top-60px 3xl:right-60px z-10 hidden sm:group-hover:grid place-content-center border border-white/50 rounded-full">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 xl:w-3.5 3xl:w-[21px]"
                >
                  <path
                    d="M16.8492 1.15076C16.8492 0.598473 16.4015 0.150758 15.8492 0.150757L6.84924 0.150758C6.29696 0.150758 5.84924 0.598473 5.84924 1.15076C5.84924 1.70304 6.29696 2.15076 6.84924 2.15076L14.8492 2.15076L14.8492 10.1508C14.8492 10.703 15.297 11.1508 15.8492 11.1508C16.4015 11.1508 16.8492 10.703 16.8492 10.1508L16.8492 1.15076ZM1.70711 16.7071L16.5563 1.85786L15.1421 0.443651L0.292893 15.2929L1.70711 16.7071Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/assets/images/img-buy-in-china-5.jpg"
                alt="Image"
                width={1000}
                height={800}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-all duration-300"
              />

              <div className="absolute bottom-0 left-0 z-10 space-y-2.5 sm:space-y-3 xl:space-y-4 3xl:space-y-5 p-5 sm:p-8 xl:p-10">
                <h4 className="font-normal text-white">Уличная мебель</h4>
                <p className="text-white/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                  5 212 позиций
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="space-y-5">
            <div
              className="block min-h-40 sm:min-h-80 3xl:min-h-[480px] group relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 overflow-hidden cursor-pointer"
              onClick={toggleForm}
            >
              {/* Icon on hover */}
              <div className="size-10 xl:size-[58px] 3xl:size-[90px] shrink-0 absolute top-7 right-7 xl:top-10 xl:right-10 3xl:top-60px 3xl:right-60px z-10 hidden sm:group-hover:grid place-content-center border border-white/50 rounded-full">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 xl:w-3.5 3xl:w-[21px]"
                >
                  <path
                    d="M16.8492 1.15076C16.8492 0.598473 16.4015 0.150758 15.8492 0.150757L6.84924 0.150758C6.29696 0.150758 5.84924 0.598473 5.84924 1.15076C5.84924 1.70304 6.29696 2.15076 6.84924 2.15076L14.8492 2.15076L14.8492 10.1508C14.8492 10.703 15.297 11.1508 15.8492 11.1508C16.4015 11.1508 16.8492 10.703 16.8492 10.1508L16.8492 1.15076ZM1.70711 16.7071L16.5563 1.85786L15.1421 0.443651L0.292893 15.2929L1.70711 16.7071Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/assets/images/img-buy-in-china-3.jpg"
                alt="Image"
                width={1000}
                height={800}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-all duration-300"
              />

              <div className="absolute bottom-0 left-0 z-10 space-y-2.5 sm:space-y-3 xl:space-y-4 3xl:space-y-5 p-5 sm:p-8 xl:p-10">
                <h4 className="font-normal text-white">Сантехника</h4>
                <p className="text-white/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                  9 356 позиций
                </p>
              </div>
            </div>
            <div
              className="block min-h-40 sm:min-h-80 3xl:min-h-[480px] group relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/40 overflow-hidden cursor-pointer"
              onClick={toggleForm}
            >
              {/* Icon on hover */}
              <div className="size-10 xl:size-[58px] 3xl:size-[90px] shrink-0 absolute top-7 right-7 xl:top-10 xl:right-10 3xl:top-60px 3xl:right-60px z-10 hidden sm:group-hover:grid place-content-center border border-white/50 rounded-full">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 xl:w-3.5 3xl:w-[21px]"
                >
                  <path
                    d="M16.8492 1.15076C16.8492 0.598473 16.4015 0.150758 15.8492 0.150757L6.84924 0.150758C6.29696 0.150758 5.84924 0.598473 5.84924 1.15076C5.84924 1.70304 6.29696 2.15076 6.84924 2.15076L14.8492 2.15076L14.8492 10.1508C14.8492 10.703 15.297 11.1508 15.8492 11.1508C16.4015 11.1508 16.8492 10.703 16.8492 10.1508L16.8492 1.15076ZM1.70711 16.7071L16.5563 1.85786L15.1421 0.443651L0.292893 15.2929L1.70711 16.7071Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/assets/images/img-buy-in-china-6.png"
                alt="Image"
                width={1000}
                height={800}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-125 transition-all duration-300"
              />

              <div className="absolute bottom-0 left-0 z-10 space-y-2.5 sm:space-y-3 xl:space-y-4 3xl:space-y-5 p-5 sm:p-8 xl:p-10">
                <h4 className="font-normal text-white">Отделочные материалы</h4>
                <p className="text-white/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                  1 121 позиций
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
