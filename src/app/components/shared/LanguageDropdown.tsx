"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useClickOutside } from "../../hooks/useClickOutside";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../contexts/LanguageContext";

export default function LanguageDropdown() {
  const { selectedLang, setSelectedLang } = useLanguage(); // Access context
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  useClickOutside(langRef, () => setIsLangOpen(false));

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const pathname = usePathname();

  return (
    <div ref={langRef} className="relative">
      <button
        onClick={() => setIsLangOpen((prev) => !prev)}
        className="group flex items-center gap-1.5 uppercase"
      >
        <span
          className={`${
            pathname === "/content"
              ? "text-brand-dark/50 hover:text-brand-dark"
              : "group-hover:text-white"
          } transition-all duration-300`}
        >
          {selectedLang}
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
          } transition-all duration-300 ${isLangOpen ? "rotate-180" : ""}`}
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
      {isLangOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
          className="absolute bg-white text-black border p-2"
        >
          <ul>
            {["RU", "EN", "FR"].map((lang) => (
              <li
                key={lang}
                className="hover:text-brand-red transition-all duration-300"
              >
                <button
                  onClick={() => {
                    setSelectedLang(lang); // Update shared state
                    setIsLangOpen(false); // Close dropdown
                  }}
                  className={selectedLang === lang ? "text-brand-red" : ""}
                >
                  {lang}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
