import Button from "../../shared/Button";

const options = [
  {
    title: "Покупка онлайн",
    options: [
      "Минимальный заказ $30 000",
      "Помощь менеджера онлайн",
      "Поиск товаров по фото",
      "Командная работа над проектом",
      "Работа с проверенными поставщиками",
      "Документы и сертификаты от фабрик",
      "Гарантия и контроль качества на всех этапах",
      "Таможенное оформление и доставка",
    ],
  },
  {
    title: "Мебельный тур",
    options: [
      "Минимальный заказ $50 000",
      "Сопровождение менеджером-переводчиком",
      "Личное посещение шоурумов и фабрик",
      "Передвижение на автомобиле премиум-класса",
      "Работа с проверенными поставщиками",
      "Документы и сертификаты от фабрик",
      "Гарантия и контроль качества на всех этапах",
      "Таможенное оформление и доставка",
    ],
  },
  {
    title: "Отправить дизайнера",
    options: [
      "Минимальный заказ $30 000",
      "Помощь менеджера онлайн",
      "Поиск товаров по фото",
      "Командная работа над проектом",
      "Работа с проверенными поставщиками",
      "Документы и сертификаты от фабрик",
      "Гарантия и контроль качества на всех этапах",
      "Таможенное оформление и доставка",
    ],
  },
];

export default function WorkingOptions() {
  return (
    <section>
      <div className="container space-y-8 sm:space-y-14 xl:space-y-16 3xl:space-y-24">
        <h2>
          <span className="text-brand-red">Варианты</span> <br /> работы с нами
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-5">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className={`w-full flex flex-col justify-between bg-brand-gray ${
                idx === 1 ? "border border-brand-red md:-mt-5 3xl:-mt-10" : ""
              } p-5 xl:p-8 3xl:p-60px`}
            >
              <div className="space-y-3.5 3xl:space-y-8">
                <h4>{opt.title}</h4>
                <ul className="space-y-1.5 xl:space-y-2 3xl:space-y-3.5 text-xs sm:text-13 xl:text-sm 3xl:text-lg">
                  {opt.options.map((option, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-1.5 3xl:gap-4"
                    >
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-2.5 3xl:size-4 shrink-0"
                      >
                        <g clipPath="url(#clip0_1108_1941)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z"
                            fill="#E1BC85"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.8687 5.80293C12.0624 5.99668 12.0624 6.31543 11.8687 6.50918L7.18115 11.1967C7.08428 11.2936 6.95615 11.3436 6.82803 11.3436C6.6999 11.3436 6.57178 11.2936 6.4749 11.1967L4.13115 8.85293C3.9374 8.65918 3.9374 8.34043 4.13115 8.14668C4.3249 7.95293 4.64365 7.95293 4.8374 8.14668L6.82803 10.1373L11.1624 5.80293C11.3562 5.60605 11.6749 5.60605 11.8687 5.80293Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1108_1941">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="red"
                className={`w-full h-[52px] 3xl:h-[73px] flex items-center justify-center gap-4 mt-5 sm:mt-30px ${
                  idx === 1
                    ? "xl:mt-9"
                    : idx === 0
                    ? "xl:mt-[70px]"
                    : "xl:mt-12"
                } 3xl:mt-[140px] px-5`}
              >
                Забронировать тур
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 3xl:w-auto fill-white group-hover:fill-white/50 transition-all duration-300"
                >
                  <path d="M16.8492 1.07556C16.8492 0.523278 16.4015 0.0755626 15.8492 0.0755626L6.84924 0.0755626C6.29696 0.0755626 5.84924 0.523278 5.84924 1.07556C5.84924 1.62785 6.29696 2.07556 6.84924 2.07556H14.8492V10.0756C14.8492 10.6278 15.297 11.0756 15.8492 11.0756C16.4015 11.0756 16.8492 10.6278 16.8492 10.0756L16.8492 1.07556ZM1.70711 16.6319L16.5563 1.78267L15.1421 0.368456L0.292893 15.2177L1.70711 16.6319Z" />
                </svg>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
