"use client";

import Image from "next/image";
import TeamImages from "../../shared/TeamImages";

export default function WhoAreWe() {
  return (
    <section className="section-top-padding">
      <div className="container section-space">
        <div className="flex items-end justify-between">
          <h2>
            Кто мы? <br /> <span className="text-brand-red">Основатели</span>
            <br />
            Foshan.
            <br className="xs:hidden" />
            Furniture
          </h2>

          {/* Team Images */}
          <TeamImages />
        </div>

        {/* Content */}
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
              поэтому мы запустили услугу комплектации интерьеров на дистанции,
              где собрали только проверенных партнеров.
            </p>
            <p>
              Проект <span className="text-brand-red">Foshan.Furniture</span>{" "}
              был создан в 2018 году с целью объединить интерьерный рынок
              региона Гуандун (Китай) и помочь в выборе поставщиков клиентам со
              всего мира. Основатели проекта работают в мебельной индустрии
              региона с 2008 года.
            </p>
            <p>
              Мы гордимся тем, что с помощью нашего ресурса люди имеют
              возможность находить проверенных партнеров на рынке Китая.
            </p>
          </div>

          <div className="max-h-[460px] mt-30px 3xl:mt-10 xl:mt-0">
            <Image
              src="/assets/images/img-who-are-we-main.png"
              alt="Image"
              width={1000}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
