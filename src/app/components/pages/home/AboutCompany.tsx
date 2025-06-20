"use client";

import Image from "next/image";

import { usePathname } from "next/navigation";

export default function AboutCompany() {
  const route = usePathname();

  return (
    <section className={route !== "/" ? "section-top-padding" : ""}>
      <div className="container grid xl:grid-cols-2 gap-8 sm:gap-10 xl:gap-12 3xl:gap-16">
        {/* Image */}
        <div className="relative order-2 xl:order-1">
          <Image
            src="/assets/images/img-about.jpg"
            alt="About"
            width={1350}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texts */}
        <div className="order-1 xl:order-2">
          <div className="flex xl:flex-col gap-7 lg:gap-16 xl:gap-11 3xl:gap-10">
            <div className="flex flex-col gap-7 3xl:gap-16">
              <h2>О компании</h2>
              <ul className="space-y-3.5 xl:space-y-5 3xl:space-y-8 text-sm sm:text-15 3xl:text-xl 3xl:pr-40">
                <li>
                  Проект{" "}
                  <a href="#" className="text-brand-red">
                    Foshan.Furniture
                  </a>{" "}
                  был создан в 2018 году с целью объединить интерьерный рынок
                  региона Гуандун (Китай) и помочь в выборе поставщиков клиентам
                  со всего мира. Основатели проекта работают в мебельной
                  индустрии региона с 2008 года.
                </li>
                <li>
                  Мы гордимся тем, что с помощью нашего ресурса люди имеют
                  возможность находить проверенных партнеров на рынке Китая.
                </li>
                <li>
                  Нами запущена программа{" "}
                  <a href="#" className="text-brand-red">
                    «Verified by Foshan.Furniture»
                  </a>
                  . С ее помощью мы формируем каталог производств и магазинов,
                  которые соответствуют высоким стандартам обслуживания. Такие
                  владельцы бизнесов заботятся о своей репутации.
                </li>
              </ul>
            </div>

            <Image
              src="/assets/images/img-about-2.jpg"
              alt="About"
              width={1350}
              height={900}
              className="w-80 h-[173px] hidden lg:block object-cover ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
