import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import DropdownItem from "./DropdownItem";
import { useMenu } from "../../contexts/MenuContext";

const Dropdownlinks = [
  {
    name: "Компания",
    options: [
      "Покупка онлайн",
      "Мебельный тур",
      "Отправить дизайнера",
      "Онлайн-консультация",
      "Дизайн интерьера",
    ],
  },
  {
    name: "Услуги",
    options: [
      "Покупка онлайн",
      "Мебельный тур",
      "Отправить дизайнера",
      "Онлайн-консультация",
      "Дизайн интерьера",
    ],
  },
  {
    name: "Каталоги мебели",
    options: [
      "Покупка онлайн",
      "Мебельный тур",
      "Отправить дизайнера",
      "Онлайн-консультация",
      "Дизайн интерьера",
    ],
  },
  {
    name: "Блог",
    options: [
      "Покупка онлайн",
      "Мебельный тур",
      "Отправить дизайнера",
      "Онлайн-консультация",
      "Дизайн интерьера",
    ],
  },
];

const links1 = [
  {
    label: "Что можно приобрести в Китае",
    href: "#",
  },
  {
    label: "О компании",
    href: "#",
  },
  {
    label: "Как проходит тур",
    href: "#",
  },
  {
    label: "Варианты работы с нами",
    href: "#",
  },
  {
    label: "Каталог товаров",
    href: "#",
  },
  {
    label: "Мебельный тур – это",
    href: "#",
  },
  {
    label: "Контроль качества",
    href: "#",
  },
];

const links2 = [
  {
    label: "Кто мы?",
    href: "#",
  },
  {
    label: "Доставка и растаможка",
    href: "#",
  },
  {
    label: "Наши статьи",
    href: "#",
  },
  {
    label: "Ответы на вопросы",
    href: "#",
  },
  {
    label: "Дизайн интерьера",
    href: "#",
  },
  {
    label: "Отзывы",
    href: "#",
  },
  {
    label: "СМИ о нас",
    href: "#",
  },
];

export default function Menu({ isScrolled }) {
  const { toggleMenu } = useMenu();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`absolute top-0 w-full h-screen bg-brand-red text-white ${
        isScrolled
          ? "pt-16 xl:pt-20 3xl:pt-24"
          : "pt-[107px] xl:pt-[110px] 3xl:pt-[148px]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between mt-5">
          <ul className="flex xl:hidden items-center gap-3 sm:gap-7 3xl:gap-12 text-sm 3xl:text-base">
            {Dropdownlinks.map(({ name, options }) => (
              <DropdownItem key={name} name={name} options={options} />
            ))}
          </ul>

          <ul className="hidden md:flex gap-6 xl:hidden text-13 text-white/50">
            <li>
              <Link
                onClick={toggleMenu}
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                База знаний
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Дизайнерам
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-screen flex flex-col xl:flex-row items-stretch xl:items-start xl:justify-between">
          {/* Menu Links */}
          <div className="max-h-min flex-1 grid sm:grid-cols-2 gap-5 sm:gap-16 xl:gap-7 3xl:gap-32 font-unbounded sm:text-xl xl:text-[22px] 3xl:text-3xl leading-4 sm:leading-5 xl:leading-[22px] 3xl:leading-[30px] py-30px">
            {/* Links 1 */}
            <ul className="space-y-[18px] sm:space-y-5 xl:space-y-[22px] 3xl:space-y-[30px]">
              {links1.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white/50 transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Links 2 */}
            <ul className="space-y-[18px] sm:space-y-5 xl:space-y-[22px] 3xl:space-y-[30px]">
              {links2.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white/50 transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-full w-full xl:max-w-[480px] 3xl:max-w-[560px] xl:h-screen">
            <Image
              src="/assets/images/img-menu-desktop.png"
              alt="Menu Image"
              width={1000}
              height={800}
              className="hidden 3xl:block w-full h-full object-cover"
            />
            <Image
              src="/assets/images/img-menu-desktop-sm.png"
              alt="Menu Image"
              width={1000}
              height={800}
              className="hidden xl:block 3xl:hidden w-full h-full object-cover"
            />
            <Image
              src="/assets/images/img-menu-tablet.png"
              alt="Menu Image"
              width={1000}
              height={800}
              className="hidden sm:block xl:hidden w-full h-full object-cover"
            />
            <Image
              src="/assets/images/img-menu-desktop-sm.png"
              alt="Menu Image"
              width={1000}
              height={800}
              className="sm:hidden w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
