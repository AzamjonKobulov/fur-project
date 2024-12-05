import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownLinks from "../../shared/DropdownLinks";
import { useMenu } from "../../../contexts/MenuContext";

const links = [
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

export default function LogoAndNavLinks({ isScrolled }) {
  const { isMenuOpen, toggleMenu } = useMenu();

  const pathname = usePathname();

  return (
    <div className="flex items-center gap-10">
      {/* Menu Btn & Logo */}
      <div className="flex items-center gap-5 sm:gap-7">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`size-7 3xl:size-auto
                ${
                  isScrolled || pathname === "/content"
                    ? "stroke-brand-dark"
                    : "stroke-white"
                }
              -ml-1 3xl:-ml-2`}
            >
              <path
                d="M25.1562 25.1562L9.84375 9.84375M25.1562 9.84375L9.84375 25.1562"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="32"
              height="18"
              viewBox="0 0 32 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-4 3xl:w-auto 3xl:h-auto ${
                isScrolled || pathname === "/content"
                  ? "fill-brand-dark"
                  : "fill-white"
              }`}
            >
              <rect width="32" height="2" />
              <rect y="8" width="22" height="2" />
              <rect y="16" width="22" height="2" />
            </svg>
          )}
        </button>

        {/* Logo */}
        <Link
          href="/"
          className={`uppercase font-medium font-unbounded text-lg 3xl:text-2xl ${
            pathname === "/content" || isScrolled
              ? "text-brand-dark"
              : "text-white"
          }`}
        >
          Mebel.tours
        </Link>
      </div>

      {/* Links with Dropdowns */}
      <DropdownLinks
        links={links}
        pathname={pathname}
        isScrolled={isScrolled}
      />
    </div>
  );
}
