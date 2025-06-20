import Image from "next/image";

export default function QualityControl() {
  return (
    <section className="bg-quality-control bg-no-repeat bg-cover bg-center section-top-padding">
      <div className="container">
        <div className="max-w-[416px] xl:max-w-[512px] 3xl:max-w-2xl space-y-5 sm:space-y-6 bg-white p-5 sm:p-30px xl:p-10 3xl:p-12">
          <div className="space-y-3.5 xl:space-y-5">
            <h2>
              Контроль
              <span className="text-brand-red">
                <br />
                качества
              </span>
            </h2>
            <p className="text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[18px] sm:leading-5 xl:leading-[21px] 3xl:leading-[26px]">
              Мы проверяем каждую единицу товара в заказе клиента и
              предоставляем детальный отчет. Все проверки фиксируются на фото и
              видео. Специалисты проводят инспекции товаров в соответствии c
              внутренними высокими стандартами качества и четкими чек-листами,
              что исключает возможность ошибки.
            </p>
          </div>

          <div className="h-[180px] xl:h-48 3xl:h-64 overflow-hidden">
            <Image
              src="/assets/images/img-quality-control.png"
              alt="Quality control"
              width={500}
              height={800}
              className="w-full h-full object-cover hover:scale-125 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
