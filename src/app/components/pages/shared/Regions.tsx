"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cities = [
  {
    id: 1,
    name: "Гуанчжоу",
    description: "занимается производством мягкой мебели",
    info: "Гуанчжоу — один из самых больших городов Китая после Пекина и Шанхая, его население составляет около 14 миллионов человек. Он также является одним из девяти Национальных урбанистических центров Китая.",
    coordinates: {
      default: { x: "55%", y: "15%" },
      sm: { x: "55%", y: "15%" },
      md: { x: "55%", y: "15%" },
    },
    icons: ["/assets/images/icon-plane.svg", "/assets/images/icon-train.svg"],
    img: "/assets/images/img-region-ping.jpg",
  },
  {
    id: 2,
    name: "Фошань",
    description: "занимается производством корпусной мебели",
    info: "Гуанчжоу — один из самых больших городов Китая после Пекина и Шанхая, его население составляет около 14 миллионов человек. Он также является одним из девяти Национальных урбанистических центров Китая.",
    coordinates: {
      default: { x: "50%", y: "25%" },
      sm: { x: "40%", y: "40%" },
      md: { x: "50%", y: "35%" },
    },
    icons: [],
    img: "/assets/images/img-region-ping.jpg",
  },
  {
    id: 3,
    name: "Чжуншань",
    description: "занимается производством мебели для кухни",
    info: "Гуанчжоу — один из самых больших городов Китая после Пекина и Шанхая, его население составляет около 14 миллионов человек. Он также является одним из девяти Национальных урбанистических центров Китая.",
    coordinates: {
      default: { x: "45%", y: "55%" },
      sm: { x: "40%", y: "65%" },
      md: { x: "50%", y: "75%" },
    },
    icons: [],
    img: "/assets/images/img-region-ping.jpg",
  },
  {
    id: 4,
    name: "Шэньчжэнь",
    description: "занимается производством техники",
    info: "Гуанчжоу — один из самых больших городов Китая после Пекина и Шанхая, его население составляет около 14 миллионов человек. Он также является одним из девяти Национальных урбанистических центров Китая.",
    coordinates: {
      default: { x: "65%", y: "40%" },
      sm: { x: "75%", y: "40%" },
      md: { x: "70%", y: "52%" },
    },
    icons: ["/assets/images/icon-plane.svg", "/assets/images/icon-train.svg"],
    img: "/assets/images/img-region-ping.jpg",
  },
  {
    id: 5,
    name: "Дунгуань",
    description: "занимается производством декора",
    info: "Гуанчжоу — один из самых больших городов Китая после Пекина и Шанхая, его население составляет около 14 миллионов человек. Он также является одним из девяти Национальных урбанистических центров Китая.",
    coordinates: {
      default: { x: "70%", y: "25%" },
      sm: { x: "75%", y: "25%" },
      md: { x: "70%", y: "30%" },
    },
    icons: [],
    img: "/assets/images/img-region-ping.jpg",
  },
  {
    id: 6,
    name: "Юнфу",
    description: "занимается производством декора",
    info: "Гуанчжоу — один из самых больших городов Китая после Пекина и Шанхая, его население составляет около 14 миллионов человек. Он также является одним из девяти Национальных урбанистических центров Китая.",
    coordinates: {
      default: { x: "25%", y: "35%" },
      sm: { x: "10%", y: "30%" },
      md: { x: "35%", y: "35%" },
    },
    icons: [],
    img: "/assets/images/img-region-ping.jpg",
  },
  {
    id: 7,
    name: "Гонконг",
    description: "занимается производством декора",
    info: "Гуанчжоу — один из самых больших городов Китая после Пекина и Шанхая, его население составляет около 14 миллионов человек. Он также является одним из девяти Национальных урбанистических центров Китая.",
    coordinates: {
      default: { x: "70%", y: "50%" },
      sm: { x: "75%", y: "55%" },
      md: { x: "75%", y: "65%" },
    },
    icons: ["/assets/images/icon-plane.svg", "/assets/images/icon-train.svg"],
    img: "/assets/images/img-region-ping.jpg",
  },
];

export default function Regions() {
  const [hoveredCity, setHoveredCity] = useState(null);
  const [currentBreakpoint, setCurrentBreakpoint] = useState("default");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCurrentBreakpoint("sm");
      } else if (width >= 640 && width < 1280) {
        setCurrentBreakpoint("md");
      } else {
        setCurrentBreakpoint("default");
      }
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  return (
    <section className="bg-brand-gray section-top-padding">
      <div className="container section-space !px-0 sm:!px-30px">
        <h2 className="px-30px sm:px-0">
          Район <span className="text-brand-red">Гуандун</span>
        </h2>

        <div className="flex flex-col-reverse xl:flex-row gap-6 xl:gap-24 3xl:gap-40">
          {/* Map Side */}
          <div className="relative -mt-10 sm:mt-auto 3xl:mt-32 sm:px-0">
            <Image
              src="/assets/images/img-map.svg"
              alt="Map"
              width={1500}
              height={1200}
              className="w-[531px] sm:w-full shrink-0 3xl:shrink-0 3xl:w-auto 3xl:max-w-[851px] hidden sm:block object-cover"
            />

            {/* Mobile Image */}
            <Image
              src="/assets/images/img-map-mobile.svg"
              alt="Map"
              width={1500}
              height={1200}
              className="w-[531px] xs:w-full shrink-0 3xl:shrink-0 3xl:w-auto 3xl:max-w-[851px] sm:hidden object-cover"
            />
            {cities.map((city) => (
              <div
                key={city.id}
                className={`absolute ${hoveredCity === city.id ? "z-10" : ""} ${
                  hoveredCity === city.id ? "text-brand-red" : "text-black"
                }`}
                style={{
                  top: city.coordinates[currentBreakpoint].y,
                  left: city.coordinates[currentBreakpoint].x,
                }}
                onMouseEnter={() => setHoveredCity(city.id)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                <div className="relative w-full h-full flex flex-col items-center gap-1.5">
                  {/* Map icon */}
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-30px shrink-0 3xl:size-auto relative"
                  >
                    <path
                      d="M20.5 2.5C13.5992 2.5 8 7.53984 8 13.75C8 23.75 20.5 37.5 20.5 37.5C20.5 37.5 33 23.75 33 13.75C33 7.53984 27.4008 2.5 20.5 2.5ZM20.5 20C19.5111 20 18.5444 19.7068 17.7221 19.1573C16.8999 18.6079 16.259 17.827 15.8806 16.9134C15.5022 15.9998 15.4031 14.9945 15.5961 14.0245C15.789 13.0546 16.2652 12.1637 16.9645 11.4645C17.6637 10.7652 18.5546 10.289 19.5245 10.0961C20.4945 9.90315 21.4998 10.0022 22.4134 10.3806C23.327 10.759 24.1079 11.3999 24.6573 12.2221C25.2068 13.0444 25.5 14.0111 25.5 15C25.4986 16.3256 24.9713 17.5966 24.0339 18.5339C23.0966 19.4713 21.8256 19.9986 20.5 20Z"
                      fill="#242323"
                    />
                  </svg>

                  {/* Map text on hover */}
                  {hoveredCity === city.id && (
                    <div
                      className={`w-[264px] 3xl:w-[425px] absolute ${
                        city.id === 4 || city.id === 5 || city.id === 7
                          ? "-left-20"
                          : city.id === 6
                          ? "left-32"
                          : "left-7"
                      } sm:left-1/2 -bottom-[250%] -translate-x-1/2 3xl:translate-x-0 sm:-bottom-40 md:bottom-0 md:left-56 3xl:left-32 bg-white mt-2 p-3.5 sm:p-[18px] xl:p-5 3xl:p-6`}
                    >
                      <p className="text-brand-dark text-xs sm:text-13 xl:text-sm 3xl:text-lg leading-[15.6px] sm:leading-[17px] xl:leading-[18px] 3xl:leading-6">
                        {city.info}
                      </p>
                    </div>
                  )}

                  {/* Map Image on hover */}
                  {hoveredCity === city.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.1 }}
                      className="absolute size-[90px] sm:size-20 xl:size-[90px] 3xl:size-[120px] shrink-0 z-10 rounded-full overflow-hidden bottom-5"
                    >
                      <div className="w-full h-full relative grid place-content-center">
                        <Image
                          src={city.img}
                          alt={city.name}
                          width={500}
                          height={350}
                          className="absolute w-full h-full"
                        />

                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-30px shrink-0 3xl:size-auto relative z-10"
                        >
                          <path
                            d="M20 2.5C13.0992 2.5 7.5 7.53984 7.5 13.75C7.5 23.75 20 37.5 20 37.5C20 37.5 32.5 23.75 32.5 13.75C32.5 7.53984 26.9008 2.5 20 2.5ZM20 20C19.0111 20 18.0444 19.7068 17.2221 19.1573C16.3999 18.6079 15.759 17.827 15.3806 16.9134C15.0022 15.9998 14.9031 14.9945 15.0961 14.0245C15.289 13.0546 15.7652 12.1637 16.4645 11.4645C17.1637 10.7652 18.0546 10.289 19.0245 10.0961C19.9945 9.90315 20.9998 10.0022 21.9134 10.3806C22.827 10.759 23.6079 11.3999 24.1573 12.2221C24.7068 13.0444 25 14.0111 25 15C24.9986 16.3256 24.4713 17.5966 23.5339 18.5339C22.5966 19.4713 21.3256 19.9986 20 20Z"
                            fill="#AB292A"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                  <p className="text-brand-dark text-xs 3xl:text-sm leading-[15.6px] 3xl:leading-[18px]">
                    {city.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* List Side */}
          <div className="3xl:min-w-[524px] grid sm:grid-cols-2 xl:grid-cols-1 gap-3.5 sm:gap-[18px] xl:gap-6 3xl:gap-10 overflow-y-auto bg-gray-100 px-30px sm:px-0">
            {cities.map((city) => (
              <div
                key={city.id}
                className="flex items-center gap-4 3xl:gap-30px cursor-pointer"
                onMouseEnter={() => setHoveredCity(city.id)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                <button
                  className={`size-8 sm:size-14 xl:size-60px 3xl:size-20 shrink-0 sm:text-xl 3xl:text-3xl ${
                    hoveredCity === city.id
                      ? "bg-brand-red text-white border-brand-red"
                      : ""
                  } border border-brand-dark/20 rounded-full`}
                >
                  0{city.id}
                </button>
                <div className="space-y-2 sm:space-y-2.5 xl:space-y-3 3xl:space-y-3.5">
                  <h5 className="flex gap-2 3xl:gap-4 font-normal">
                    <span>{city.name}</span>
                    <div className="flex gap-2 3xl:gap-2.5">
                      {city.icons?.[0] && (
                        <Image
                          src={city.icons[0]}
                          alt="Icon 1"
                          width={22}
                          height={22}
                          className="size-3 sm:size-4 3xl:size-auto"
                        />
                      )}
                      {city.icons?.[1] && (
                        <Image
                          src={city.icons[1]}
                          alt="Icon 2"
                          width={22}
                          height={22}
                          className="size-3 sm:size-4 3xl:size-auto"
                        />
                      )}
                    </div>
                  </h5>
                  <p className="text-xs sm:text-13 xl:text-sm 3xl:text-lg leading-[15.6px] sm:leading-[17px] xl:leading-[18px] 3xl:leading-6">
                    {city.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
