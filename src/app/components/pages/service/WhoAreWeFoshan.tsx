"use client";

import Image from "next/image";
import Button from "../../shared/Button";

const images = [
  "/assets/images/img-who-are-we-1.jpg",
  "/assets/images/img-who-are-we-2.jpg",
  "/assets/images/img-who-are-we-3.jpg",
  "/assets/images/img-who-are-we-4.jpg",
  "/assets/images/img-who-are-we-6.jpg",
];

export default function WhoAreWeFoshan() {
  return (
    <section>
      <div className="container space-y-30px">
        <div className="flex items-end justify-between">
          <h2>
            Кто мы? <span className="text-brand-red">Основатели</span>
            <br />
            Foshan.
            <br className="xs:hidden" />
            Furniture
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-30px sm:space-y-10 xl:space-y-12">
          <div className="grid xl:grid-cols-2">
            <div className="flex flex-col justify-end xl:max-w-[496px] 3xl:max-w-[700px] space-y-5 text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-5 xl:leading-[21px] 3xl:leading-[26px]">
              <p>
                Нами запущена программа{" "}
                <span className="text-brand-red">
                  «Verified by Foshan.Furniture»
                </span>
                . С ее помощью мы формируем каталог производств и магазинов,
                которые соответствуют высоким стандартам обслуживания. Такие
                владельцы бизнесов заботятся о своей репутации.
              </p>
              <p>
                В последнее время мы стали получать больше информации о
                недобросовестной работе посредников («мебельные туры в Китай»),
                поэтому мы запустили услугу комплектации интерьеров на
                дистанции, где собрали только проверенных партнеров.
              </p>
              <p>
                Проект <span className="text-brand-red">Foshan.Furniture</span>{" "}
                был создан в 2018 году с целью объединить интерьерный рынок
                региона Гуандун (Китай) и помочь в выборе поставщиков клиентам
                со всего мира. Основатели проекта работают в мебельной индустрии
                региона с 2008 года.
              </p>
              <p>
                Мы гордимся тем, что с помощью нашего ресурса люди имеют
                возможность находить проверенных партнеров на рынке Китая.
              </p>
            </div>

            <div className="h-[280px] sm:h-[350px] xl:h-[400px] 3xl:h-[450px] relative grid place-content-center mt-30px 3xl:mt-10 xl:mt-0">
              <Image
                src="/assets/images/img-who-are-we-foshan.jpg"
                alt="Image"
                width={1000}
                height={800}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <button className="size-16 xl:size-[75px] 3xl:size-[113px] relative z-10 shrink-0 grid place-content-center border border-white/50 rounded-full">
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
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-5">
            <Image
              src="/assets/images/img-brand-1.png"
              alt="Brand"
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              src="/assets/images/img-brand-2.png"
              alt="Brand"
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              src="/assets/images/img-brand-3.png"
              alt="Brand"
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              src="/assets/images/img-brand-1.png"
              alt="Brand"
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              src="/assets/images/img-brand-2.png"
              alt="Brand"
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              src="/assets/images/img-brand-3.png"
              alt="Brand"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
