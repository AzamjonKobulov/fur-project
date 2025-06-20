import Image from "next/image";

const stages = [
  {
    num: "01",
    img: "/assets/images/img-stages-1.jpg",
    title: "Бесплатная оценка проекта",
    text: "На первом этапе мы предварительно оцениваем бюджет вашего проекта по готовому дизайну или пока только общим визуальным идеям вашего будущего интерьера.",
  },
  {
    num: "02",
    img: "/assets/images/img-stages-2.jpg",
    title: "Изготовление и проверка качества",
    text: "Оплатите 50% стоимости заказа, и фабрика приступит к производству. Видео и фото отчеты: каждый этап производства вашего заказа будет сразу же отражен в личном кабинете.",
  },
  {
    num: "03",
    img: "/assets/images/img-stages-3.jpg",
    title: "Подписание контракта",
    text: "Качественная и красивая мебель для дома вашей мечты! Готовы? Минимальный бюджет комплектации интерьера онлайн — $30,000, а мебельного тура — $50,000.",
  },
  {
    num: "04",
    img: "/assets/images/img-stages-4.jpg",
    title: "Отправка контейнера и таможенное оформление",
    text: "Страхование груза и все таможенные формальности мы берем на себя. Надежная упаковка и размещение — то, чему мы уделяем особое внимание.",
  },
  {
    num: "05",
    img: "/assets/images/img-stages-5.jpg",
    title: "Проработка заказа",
    text: "На этом этапе начинается проработка вашего заказа и подбор лучших вариантов по каждой позиции. Ваш персональный менеджер всегда на связи и поможет с любым вопросом. ",
  },
  {
    num: "06",
    img: "/assets/images/img-stages-6.jpg",
    title: "Доставка контейнера до вашего дома",
    text: "Оптимальная стоимость доставки и быстрые сроки — отличительная черта нашей компании. Транспортировка до ближайшего к вам морского порта, а после — прямиком до дверей вашего дома!",
  },
];

export default function StagesOfWorkingWithUs() {
  return (
    <section className="mt-minus">
      <div className="container section-space">
        <h2 className="text-center">
          <span className="text-brand-red">Этапы работы</span> <br /> с нами
        </h2>

        {/* Steages */}
        <div className="grid xl:grid-cols-2 gap-5">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="flex flex-col sm:flex-row sm:items-center gap-5 xl:gap-3.5 3xl:gap-6 bg-brand-gray p-[18px] sm:p-5 xl:py-5 3xl:p-7"
            >
              <div className="size-[100px] xl:w-[108px] xl:h-[115px] 3xl:w-[140px] 3xl:h-[149px] shrink-0">
                <Image
                  src={stage.img}
                  alt={stage.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2.5 sm:space-y-3.5 3xl:space-y-5">
                <h4 className="flex justify-between    gap-2.5">
                  {stage.title}{" "}
                  <span className="font-normal text-xs sm:text-13 xl:text-sm 3xl:text-lg text-brand-red font-unbounded">
                    {stage.num}
                  </span>
                </h4>

                <p className="text-xs sm:text-13 xl:text-sm 3xl:text-lg text-brand-dark/80 leading-4 3xl:leading-6">
                  {stage.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
