"use client";

import React from "react";
import Image from "next/image";
import Button from "../../shared/Button";

export default function HomeHero() {
  return (
    <section className="py-0">
      <div className="h-screen relative overflow-hidden pb-5">
        <div className="h-full">
          {/* Static Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              alt="Home"
              src="/assets/images/img-home-hero.png"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 w-full h-full bg-black/50 z-10"></div>

          {/* Content */}
          <div className="container mx-auto h-full relative z-20 flex flex-col xl:flex-row xl:items-end justify-end gap-8 pb-20 xl:pb-24 3xl:pb-20">
            {/* Title and Fraction */}
            <div className="space-y-5 3xl:space-y-9 text-white">
              <div className="xl:text-xl 3xl:text-3xl">
                01
                <span className="text-white/50">
                  <span className="ml-1">/</span> 01
                </span>
              </div>
              <h1 className="text-white">Мебельный тур в Китай</h1>
            </div>

            {/* Text & Button */}
            <div className="max-w-[550px] w-full space-y-7 3xl:space-y-10 text-white">
              <p className="text-sm sm:text-15 lg:text-base 3xl:text-xl">
                Премиум-услуга по комплектации интерьера с консьерж-сервисом от
                компании Mebel.tours
              </p>
              <div className="max-w-[400px] xl:max-w-none flex flex-col lg:flex-row items-center gap-2.5 3xl:gap-5 pb-5">
                <Button
                  variant="red"
                  className="w-full h-[52px] 3xl:h-[73px] flex items-center justify-center gap-4 px-5"
                >
                  Забронировать тур
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
                <Button
                  variant="whiteOutline"
                  className="w-full h-[52px] 3xl:h-[73px] flex items-center justify-center gap-4 px-5"
                >
                  Узнать подробнее
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
          </div>
        </div>
      </div>
    </section>
  );
}
