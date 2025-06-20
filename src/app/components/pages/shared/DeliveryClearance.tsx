import Image from "next/image";

export default function DeliveryClearance() {
  return (
    <section>
      <div className="container grid xl:grid-cols-2 gap-30px xl:gap-11 3xl:gap-16">
        <div>
          <Image
            src="/assets/images/img-delivery.jpg"
            alt="Image"
            width={1416}
            height={867}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="section-space">
          <h2>
            <span className="text-brand-red">Доставка</span> и <br /> растаможка
          </h2>

          {/* Items */}
          <div className="grid xs:grid-cols-2 xl:grid-cols-2 gap-5 3xl:gap-16">
            {/* Item 1 */}
            <div className="space-y-3.5 sm:space-y-[18px] xl:space-y-5 3xl:space-y-30px">
              <p className="text-brand-red font-unbounded text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                01
              </p>
              <p className="text-xs sm:text-13 xl:text-sm 3xl:text-lg leading-[15.6px] sm:leading-[17px] xl:leading-[18px] 3xl:leading-6">
                Для транспортировки мебели мы используем{" "}
                <a href="#" className="text-brand-red">
                  индивидуальные контейнеры
                </a>
                , чтобы защитить товар от повреждений: контейнер будет заполнен
                только вашим заказом и вскрыт уже в месте конечного назначения —
                у дверей вашего дома.
              </p>
            </div>
            {/* Item 2 */}
            <div className="space-y-3.5 sm:space-y-[18px] xl:space-y-5 3xl:space-y-30px">
              <p className="text-brand-red font-unbounded text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                02
              </p>
              <p className="text-xs sm:text-13 xl:text-sm 3xl:text-lg leading-[15.6px] sm:leading-[17px] xl:leading-[18px] 3xl:leading-6">
                <a href="#" className="text-brand-red">
                  экономия на доставке и таможенном оформлении
                </a>
                Также это , потому что мебель упакована и отправлена одним
                грузом, а не сборным для нескольких партий, где появляется
                высокая вероятность царапин и повреждений.
              </p>
            </div>
            {/* Item 1 */}
            <div className="space-y-3.5 sm:space-y-[18px] xl:space-y-5 3xl:space-y-30px">
              <p className="text-brand-red font-unbounded text-sm sm:text-15 xl:text-base 3xl:text-xl leading-[14px] sm:leading-[15px] xl:leading-4 3xl:leading-5">
                03
              </p>
              <p className="text-xs sm:text-13 xl:text-sm 3xl:text-lg leading-[15.6px] sm:leading-[17px] xl:leading-[18px] 3xl:leading-6">
                Мы
                <a href="#" className="text-brand-red">
                  предлагаем два вида контейнеров
                </a>
                — в 20 и 40 футов в зависимости от объема и габаритов заказа.
                Выбранный тип контейнера также влияет на конечную стоимость
                доставки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
