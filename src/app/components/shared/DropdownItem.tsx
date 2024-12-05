import Link from "next/link";
import { motion } from "framer-motion";
import { useDropdown } from "../../hooks/useDropdown";
import { useMenu } from "../../contexts/MenuContext";

export default function DropdownItem({ name, options, pathname, isScrolled }) {
  // Use the custom hook for each dropdown
  const { ref, isOpen, toggleDropdown, selectOption } = useDropdown();
  const { toggleMenu } = useMenu();

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <li key={name} className="relative" ref={ref}>
      <button
        onClick={toggleDropdown} // Toggle dropdown visibility
        className="flex items-center gap-1 3xl:gap-0.5 group"
      >
        <span
          className={`${
            isScrolled || pathname === "/content"
              ? "group-hover:text-brand-dark/50"
              : "group-hover:text-white/50"
          }`}
        >
          {name}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`size-2.5 md:size-auto ${
            pathname === "/content" || isScrolled
              ? "stroke-brand-dark group-hover:stroke-brand-dark/50"
              : "stroke-white group-hover:stroke-white/50"
          } transition-all duration-100 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M3.0625 5.03125L7 8.96875L10.9375 5.03125"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
        </svg>
      </button>

      {isOpen && (
        <motion.ul
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
          className={`w-max absolute z-10 bg-white text-brand-dark ${
            isScrolled || pathname === "/content" ? "border" : ""
          } ${name === "Блог" ? "right-0 sm:left-0" : ""} mt-3 p-5`}
        >
          {options.map((option) => (
            <li key={option}>
              <Link
                href="#"
                onClick={() => {
                  selectOption(option);
                  toggleMenu();
                }}
                className="block text-left w-full hover:text-brand-red duration-300 transition-all py-1"
              >
                {option}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </li>
  );
}
