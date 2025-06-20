import Image from "next/image";

export default function MediaAboutUs() {
  return (
    <section>
      <div className="container section-space">
        <h2>
          <span className="text-brand-red">СМИ</span> о нас
        </h2>

        {/* Media */}
        <div className="grid xl:grid-cols-3 gap-5">
          {/* Media 1 */}
          <a
            href="#"
            className="xl:h-80 3xl:h-[467px] group flex flex-col xl:justify-between space-y-12 sm:space-y-6 bg-brand-gray border border-transparent hover:bg-white hover:border-brand-red transition-all duration-300 p-5 sm:p-30 xl:p-10 3xl:p-12"
          >
            <div className="flex items-center justify-between">
              <Image
                src="/assets/images/img-media-1.png"
                alt="Newseek"
                width={150}
                height={24}
                className="w-[124px] h-5 sm:w-[140px] sm:h-[22px] xl:w-[150px] xl:h-6 3xl:w-auto 3xl:h-auto"
              />

              <button className="size-30px sm:size-9 xl:size-10 3xl:size-60px shrink-0 grid place-content-center border border-brand-dark/20 rounded-full group-hover:border-brand-red transition-all duration-300">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-2 sm:size-2.5 xl:size-3 3xl:size-auto transition-all duration-300"
                >
                  <path
                    d="M16.8492 1.15076C16.8492 0.598473 16.4015 0.150758 15.8492 0.150757L6.84924 0.150758C6.29696 0.150758 5.84924 0.598473 5.84924 1.15076C5.84924 1.70304 6.29696 2.15076 6.84924 2.15076L14.8492 2.15076L14.8492 10.1508C14.8492 10.703 15.297 11.1508 15.8492 11.1508C16.4015 11.1508 16.8492 10.703 16.8492 10.1508L16.8492 1.15076ZM1.70711 16.7071L16.5563 1.85786L15.1421 0.443651L0.292893 15.2929L1.70711 16.7071Z"
                    fill="#AB292A"
                  />
                </svg>
              </button>
            </div>

            <div className="flex gap-3">
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden sm:block xl:hidden"
              >
                <path
                  d="M15.9509 6.45965C16.7573 6.72164 17.4125 7.1883 17.9164 7.85965C18.4372 8.53099 18.6976 9.28421 18.6976 10.1193C18.6976 10.8234 18.5128 11.4784 18.1432 12.0842C17.7905 12.6737 17.2949 13.1404 16.6565 13.4842C16.0349 13.8281 15.3546 14 14.6154 14C13.8594 14 13.1706 13.8281 12.5491 13.4842C11.9275 13.124 11.4319 12.6409 11.0623 12.0351C10.7095 11.4129 10.5332 10.7251 10.5332 9.97193C10.5332 9.23509 10.6927 8.45731 11.0119 7.6386C11.3479 6.80351 11.9275 5.731 12.7507 4.42105L15.4721 0H19L15.9509 6.45965ZM0 9.97193C0 9.23509 0.159593 8.45731 0.47878 7.6386C0.814766 6.80351 1.39434 5.731 2.21751 4.42105L4.93899 0H8.46684L5.41777 6.45965C6.22414 6.72164 6.87931 7.1883 7.38329 7.85965C7.90407 8.53099 8.16446 9.28421 8.16446 10.1193C8.16446 10.8234 7.97966 11.4784 7.61008 12.0842C7.25729 12.6737 6.76171 13.1404 6.12334 13.4842C5.50177 13.8281 4.8214 14 4.08223 14C3.32626 14 2.63749 13.8281 2.01592 13.4842C1.39434 13.124 0.898762 12.6409 0.529177 12.0351C0.176392 11.4129 0 10.7251 0 9.97193Z"
                  fill="#AB292A"
                />
              </svg>

              <p className="text-brand-dark/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-[19.5px] xl:leading-[20.8px] 3xl:leading-[26px]">
                Эти туры предлагают уникальную возможность изучить различные
                стили, дизайны и тенденции в мире мебели.
              </p>
            </div>
          </a>
          {/* Media 2 */}
          <a
            href="#"
            className="xl:h-80 3xl:h-[467px] group flex flex-col xl:justify-between space-y-12 sm:space-y-6 bg-brand-gray border border-transparent hover:bg-white hover:border-brand-red transition-all duration-300 p-5 sm:p-30 xl:p-10 3xl:p-12"
          >
            <div className="flex items-center justify-between">
              <Image
                src="/assets/images/img-media-2.png"
                alt="Newseek"
                width={150}
                height={24}
                className="w-10 h-6 sm:w-[54px] sm:h-[34px] xl:w-[61px] xl:h-9 3xl:w-[95px] 3xl:h-[59px]"
              />

              <button className="size-30px sm:size-9 xl:size-10 3xl:size-60px shrink-0 grid place-content-center border border-brand-dark/20 rounded-full group-hover:border-brand-red transition-all duration-300">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-2 sm:size-2.5 xl:size-3 3xl:size-auto transition-all duration-300"
                >
                  <path
                    d="M16.8492 1.15076C16.8492 0.598473 16.4015 0.150758 15.8492 0.150757L6.84924 0.150758C6.29696 0.150758 5.84924 0.598473 5.84924 1.15076C5.84924 1.70304 6.29696 2.15076 6.84924 2.15076L14.8492 2.15076L14.8492 10.1508C14.8492 10.703 15.297 11.1508 15.8492 11.1508C16.4015 11.1508 16.8492 10.703 16.8492 10.1508L16.8492 1.15076ZM1.70711 16.7071L16.5563 1.85786L15.1421 0.443651L0.292893 15.2929L1.70711 16.7071Z"
                    fill="#AB292A"
                  />
                </svg>
              </button>
            </div>

            <div className="flex gap-3">
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden sm:block xl:hidden"
              >
                <path
                  d="M15.9509 6.45965C16.7573 6.72164 17.4125 7.1883 17.9164 7.85965C18.4372 8.53099 18.6976 9.28421 18.6976 10.1193C18.6976 10.8234 18.5128 11.4784 18.1432 12.0842C17.7905 12.6737 17.2949 13.1404 16.6565 13.4842C16.0349 13.8281 15.3546 14 14.6154 14C13.8594 14 13.1706 13.8281 12.5491 13.4842C11.9275 13.124 11.4319 12.6409 11.0623 12.0351C10.7095 11.4129 10.5332 10.7251 10.5332 9.97193C10.5332 9.23509 10.6927 8.45731 11.0119 7.6386C11.3479 6.80351 11.9275 5.731 12.7507 4.42105L15.4721 0H19L15.9509 6.45965ZM0 9.97193C0 9.23509 0.159593 8.45731 0.47878 7.6386C0.814766 6.80351 1.39434 5.731 2.21751 4.42105L4.93899 0H8.46684L5.41777 6.45965C6.22414 6.72164 6.87931 7.1883 7.38329 7.85965C7.90407 8.53099 8.16446 9.28421 8.16446 10.1193C8.16446 10.8234 7.97966 11.4784 7.61008 12.0842C7.25729 12.6737 6.76171 13.1404 6.12334 13.4842C5.50177 13.8281 4.8214 14 4.08223 14C3.32626 14 2.63749 13.8281 2.01592 13.4842C1.39434 13.124 0.898762 12.6409 0.529177 12.0351C0.176392 11.4129 0 10.7251 0 9.97193Z"
                  fill="#AB292A"
                />
              </svg>

              <p className="text-brand-dark/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-[19.5px] xl:leading-[20.8px] 3xl:leading-[26px]">
                Эти туры предлагают уникальную возможность изучить различные
                стили, дизайны и тенденции в мире мебели.
              </p>
            </div>
          </a>
          {/* Media 3 */}
          <a
            href="#"
            className="xl:h-80 3xl:h-[467px] group flex flex-col xl:justify-between space-y-12 sm:space-y-6 bg-brand-gray border border-transparent hover:bg-white hover:border-brand-red transition-all duration-300 p-5 sm:p-30 xl:p-10 3xl:p-12"
          >
            <div className="flex items-center justify-between">
              <Image
                src="/assets/images/img-media-3.png"
                alt="Newseek"
                width={150}
                height={24}
                className="w-[159px] h-[21px] sm:w-[169px] sm:h-[23px] xl:w-[183px] xl:h-6 3xl:w-auto 3xl:h-auto"
              />

              <button className="size-30px sm:size-9 xl:size-10 3xl:size-60px shrink-0 grid place-content-center border border-brand-dark/20 rounded-full group-hover:border-brand-red transition-all duration-300">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-2 sm:size-2.5 xl:size-3 3xl:size-auto transition-all duration-300"
                >
                  <path
                    d="M16.8492 1.15076C16.8492 0.598473 16.4015 0.150758 15.8492 0.150757L6.84924 0.150758C6.29696 0.150758 5.84924 0.598473 5.84924 1.15076C5.84924 1.70304 6.29696 2.15076 6.84924 2.15076L14.8492 2.15076L14.8492 10.1508C14.8492 10.703 15.297 11.1508 15.8492 11.1508C16.4015 11.1508 16.8492 10.703 16.8492 10.1508L16.8492 1.15076ZM1.70711 16.7071L16.5563 1.85786L15.1421 0.443651L0.292893 15.2929L1.70711 16.7071Z"
                    fill="#AB292A"
                  />
                </svg>
              </button>
            </div>

            <div className="flex gap-3">
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden sm:block xl:hidden"
              >
                <path
                  d="M15.9509 6.45965C16.7573 6.72164 17.4125 7.1883 17.9164 7.85965C18.4372 8.53099 18.6976 9.28421 18.6976 10.1193C18.6976 10.8234 18.5128 11.4784 18.1432 12.0842C17.7905 12.6737 17.2949 13.1404 16.6565 13.4842C16.0349 13.8281 15.3546 14 14.6154 14C13.8594 14 13.1706 13.8281 12.5491 13.4842C11.9275 13.124 11.4319 12.6409 11.0623 12.0351C10.7095 11.4129 10.5332 10.7251 10.5332 9.97193C10.5332 9.23509 10.6927 8.45731 11.0119 7.6386C11.3479 6.80351 11.9275 5.731 12.7507 4.42105L15.4721 0H19L15.9509 6.45965ZM0 9.97193C0 9.23509 0.159593 8.45731 0.47878 7.6386C0.814766 6.80351 1.39434 5.731 2.21751 4.42105L4.93899 0H8.46684L5.41777 6.45965C6.22414 6.72164 6.87931 7.1883 7.38329 7.85965C7.90407 8.53099 8.16446 9.28421 8.16446 10.1193C8.16446 10.8234 7.97966 11.4784 7.61008 12.0842C7.25729 12.6737 6.76171 13.1404 6.12334 13.4842C5.50177 13.8281 4.8214 14 4.08223 14C3.32626 14 2.63749 13.8281 2.01592 13.4842C1.39434 13.124 0.898762 12.6409 0.529177 12.0351C0.176392 11.4129 0 10.7251 0 9.97193Z"
                  fill="#AB292A"
                />
              </svg>

              <p className="text-brand-dark/80 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-[19.5px] xl:leading-[20.8px] 3xl:leading-[26px]">
                Эти туры предлагают уникальную возможность изучить различные
                стили, дизайны и тенденции в мире мебели.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
