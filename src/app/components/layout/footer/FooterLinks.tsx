import Link from "next/link";
import Image from "next/image";

export default function FooterLinks() {
  return (
    <div className="flex-1 p-30px sm:pl-60px xl:pl-11 3xl:pl-20 sm:pt-60px xl:pt-[70px]">
      <div className="flex justify-between text-xs sm:text-13 xl:text-sm 3xl:text-lg">
        {/* Links */}
        <div className="space-y-6 sm:space-y-8 3xl:space-y-11">
          <div className="flex gap-5 sm:gap-10 xl:gap-12 3xl:gap-24">
            <div className="hidden xl:block space-y-2.5 3xl:space-y-3">
              <p className="font-bold">Главная</p>
            </div>
            <div className="space-y-2.5 3xl:space-y-3">
              <p className="font-bold">О компании</p>
              <ul className="space-y-2.5 3xl:space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-white transition-all duration-300"
                  >
                    Вакансии
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-white transition-all duration-300"
                  >
                    Предложения дизайнерам и архитекторам
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-white transition-all duration-300"
                  >
                    Контактная информация
                  </Link>
                </li>
                <li className="font-bold">
                  <Link
                    className="text-white hover:text-white/80 transition-all duration-300"
                    href="/"
                  >
                    Каталоги
                  </Link>
                </li>
                <li className="font-bold">
                  <Link
                    className="text-white hover:text-white/80 transition-all duration-300"
                    href="/"
                  >
                    Блог
                  </Link>
                </li>
                <li className="font-bold">
                  <Link
                    className="text-white hover:text-white/80 transition-all duration-300"
                    href="/"
                  >
                    Кейсы
                  </Link>
                </li>
                <li className="font-bold">
                  <Link
                    className="text-white hover:text-white/80 transition-all duration-300"
                    href="/"
                  >
                    Вопрос-ответ
                  </Link>
                </li>
              </ul>

              <a
                href="#"
                className="hidden xl:block text-white/80 hover:text-white transition-all duration-300 pt-8"
              >
                © 2024, Foshan.furniture CN. All rights reserved.
              </a>
            </div>
            <div className="space-y-2.5 3xl:space-y-3">
              <p className="font-bold">Услуги</p>
              <ul className="space-y-2.5 3xl:space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-white transition-all duration-300"
                  >
                    Мебельный тур в Китай
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-white transition-all duration-300"
                  >
                    Оптовые закупки мебели
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-white transition-all duration-300"
                  >
                    Комплектация объектов HoReCa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-white transition-all duration-300"
                  >
                    Онлайн покупка
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-white transition-all duration-300"
                  >
                    Логистика
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-white transition-all duration-300"
                  >
                    Контроль качества
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-white transition-all duration-300"
                  >
                    Дизайн интерьера
                  </Link>
                </li>
              </ul>
              <a
                href="#"
                className="hidden xl:block text-white/80 hover:text-white transition-all duration-300 pt-8"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>

          <div className="flex xl:hidden flex-col xl:flex-row xl:items-center justify-between xl:justify-center gap-2.5">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-all duration-300"
            >
              © 2024, Foshan.furniture CN. All rights reserved.
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-all duration-300"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>

        {/* Trustpilot */}
        <div className="hidden xl:block space-y-11">
          <Image
            src="/assets/images/img-trustpilot.png"
            alt="Trustpilot"
            width={120}
            height={62}
          />
          <Image
            src="/assets/images/img-2022.png"
            alt="Trustpilot"
            width={107}
            height={101}
          />
        </div>
      </div>
    </div>
  );
}
