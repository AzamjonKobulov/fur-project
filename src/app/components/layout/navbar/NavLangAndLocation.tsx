import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useClickOutside } from "../../../hooks/useClickOutside";
import LanguageDropdown from "../../shared/LanguageDropdown";

export default function NavLangAndLocation() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Москва");

  const locationRef = useRef(null);

  // Use the custom hook for location dropdown
  useClickOutside(locationRef, () => setIsLocationOpen(false));

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const pathname = usePathname();

  return (
    <div className="flex items-center gap-5 text-white/60">
      {/* Language Dropdown */}
      <LanguageDropdown />

      {/* Location Dropdown */}
      <div ref={locationRef} className="relative">
        <button
          onClick={() => setIsLocationOpen((prev) => !prev)}
          className="group flex items-center gap-1.5"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              pathname === "/content"
                ? "fill-brand-red"
                : "fill-white/60 group-hover:fill-white"
            } transition-all duration-300`}
          >
            <path
              d="M8 1C5.23969 1 3 3.01594 3 5.5C3 9.5 8 15 8 15C8 15 13 9.5 13 5.5C13 3.01594 10.7603 1 8 1ZM8 8C7.60444 8 7.21776 7.8827 6.88886 7.66294C6.55996 7.44318 6.30362 7.13082 6.15224 6.76537C6.00087 6.39991 5.96126 5.99778 6.03843 5.60982C6.1156 5.22186 6.30608 4.86549 6.58579 4.58579C6.86549 4.30608 7.22186 4.1156 7.60982 4.03843C7.99778 3.96126 8.39991 4.00087 8.76537 4.15224C9.13082 4.30362 9.44318 4.55996 9.66294 4.88886C9.8827 5.21776 10 5.60444 10 6C9.99942 6.53026 9.78852 7.03863 9.41357 7.41357C9.03863 7.78852 8.53026 7.99942 8 8Z"
              fillOpacity="0.6"
            />
          </svg>
          <span
            className={
              pathname === "/content" ? "text-brand-dark/60" : "text-white/60"
            }
          >
            {selectedLocation}
          </span>
          <motion.svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              pathname === "/content"
                ? "stroke-brand-dark/50 group-hover:stroke-brand-dark"
                : "stroke-white/60 group-hover:stroke-white"
            } transition-all duration-300 ${
              isLocationOpen ? "rotate-180" : ""
            }`}
          >
            <path
              d="M3.0625 5.03125L7 8.96875L10.9375 5.03125"
              strokeOpacity="0.6"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </motion.svg>
        </button>
        {isLocationOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            className="w-[177px] absolute bg-white text-black border p-2.5"
          >
            <div className="relative">
              <input
                type="text"
                className="w-full h-10 border border-brand-dark/30 rounded outline-none hover:border-brand-dark text-13 transition-all duration-300 mb-2 pl-2.5 pr-10"
                placeholder="Введите город"
              />
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-3 right-2.5"
              >
                <path
                  d="M7.7727 2.25C6.68041 2.25 5.61266 2.5739 4.70445 3.18074C3.79625 3.78758 3.08839 4.65011 2.67039 5.65925C2.25239 6.66839 2.14303 7.77882 2.35612 8.85012C2.56921 9.92142 3.0952 10.9055 3.86756 11.6778C4.63993 12.4502 5.62398 12.9762 6.69527 13.1893C7.76657 13.4024 8.87699 13.2931 9.88614 12.8751C10.8953 12.4571 11.7578 11.7493 12.3646 10.8411C12.9714 9.93286 13.2953 8.86511 13.2953 7.77282C13.2947 6.34613 12.7381 4.97825 11.7537 3.99383C10.7693 3.00941 9.40144 2.45277 7.9747 2.4521L7.7727 2.25ZM7.7727 11.7728C6.77463 11.7728 5.81888 11.3695 5.13897 10.6896C4.45905 10.0097 4.05573 9.05392 4.05573 8.05584C4.05573 7.05776 4.45905 6.10198 5.13897 5.42206C5.81888 4.74214 6.77463 4.33883 7.7727 4.33883C8.77078 4.33883 9.72657 4.74214 10.4065 5.42206C11.0864 6.10198 11.4897 7.05776 11.4897 8.05584C11.4897 9.05392 11.0864 10.0097 10.4065 10.6896C9.72657 11.3695 8.77078 11.7728 7.7727 11.7728ZM16.2953 15.2954L12.3646 11.3647"
                  stroke="#333333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <ul>
              {["Москва", "Санкт-Петербург", "Екатеринбург"].map((location) => (
                <li key={location}>
                  <button
                    onClick={() => {
                      setSelectedLocation(location);
                      setIsLocationOpen(false);
                    }}
                    className="block w-full text-left text-black/90 p-2.5 hover:bg-brand-light/10 hover:text-brand-dark/60 transition-all duration-300 rounded-md"
                  >
                    {location}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}
