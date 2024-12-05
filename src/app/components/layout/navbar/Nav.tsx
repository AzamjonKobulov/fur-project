"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

import NavLangAndLocation from "./NavLangAndLocation";
import Contacts from "./NavContacts";
import LogoAndNavLinks from "./LogoAndNavLinks";
import Button from "../../shared/Button";
import { usePathname } from "next/navigation";
import Menu from "../../shared/Menu";
import { AnimatePresence } from "framer-motion";
import { useMenu } from "../../../contexts/MenuContext";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false); // Tracks if user has scrolled
  const [topHeight, setTopHeight] = useState(0); // Height of the Top section
  const topRef = useRef(null); // Ref for the Top section

  const { isMenuOpen } = useMenu();

  const pathname = usePathname();

  // Update the height of the Top section dynamically
  const updateTopHeight = () => {
    if (topRef.current) {
      setTopHeight(topRef.current.offsetHeight);
    }
  };

  // Toggle scrolling state based on scroll position
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateTopHeight);

    // Initial height calculation
    updateTopHeight();

    return () => {
      // Clean up event listeners
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateTopHeight);
    };
  }, []);

  return (
    <header className="fixed z-50 left-0 w-full top-0">
      <nav className="relative z-10">
        {/* Top Section */}
        <div
          ref={topRef}
          className={`${
            isScrolled ? "-translate-y-full" : "translate-y-0"
          } transition-transform duration-300 border-b border-white/10 py-3 3xl:py-4`}
        >
          <div className="container flex items-center justify-between">
            {/* Language, Location, and Links */}
            <div className="flex items-center gap-[120px] 3xl:gap-40">
              <NavLangAndLocation />
              <ul
                className={`hidden xl:flex items-center gap-11 text-13 xl:text-base ${
                  pathname === "/content"
                    ? "text-brand-dark/60"
                    : "text-white/60"
                }`}
              >
                <li>
                  <Link
                    href="#"
                    className={`${
                      pathname === "/content"
                        ? "hover:text-brand-dark"
                        : "hover:text-white"
                    }
                     transition-all duration-300`}
                  >
                    База знаний
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`${
                      pathname === "/content"
                        ? "hover:text-brand-dark"
                        : "hover:text-white"
                    }
                     transition-all duration-300`}
                  >
                    Дизайнерам
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacts Section */}
            <Contacts />
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`border-b border-white/10 ${
            isScrolled || pathname === "/content"
              ? "bg-white text-brand-dark shadow"
              : "text-white"
          } transition-all duration-300 py-3 sm:py-4 3xl:py-6`}
          style={{ marginTop: isScrolled ? `-${topHeight}px` : "0px" }}
        >
          <div className="container flex items-center justify-between">
            <LogoAndNavLinks isScrolled={isScrolled} />

            {/* Buttons */}
            <div className="flex items-center gap-3.5">
              <Button
                variant={
                  isScrolled
                    ? "red"
                    : pathname === "/content"
                    ? "redOutline"
                    : "whitishOutline"
                }
                className="hidden sm:block sm:h-[34px] 3xl:h-11 px-2.5 3xl:px-5"
              >
                Забронировать тур
              </Button>
              <Button
                variant={
                  isScrolled
                    ? "navScroll"
                    : pathname === "/content"
                    ? "redOutlineOpacity"
                    : "whitishOutline"
                }
                aria-label="Login"
                className="h-10 sm:h-[34px] 3xl:h-11 flex items-center gap-1.5 px-2.5 3xl:px-5"
              >
                <span className="hidden sm:block">Вход</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-4 3xl:size-6 ${
                    isScrolled
                      ? "stoke-brand-dark/80 group-hover:stoke-brand-dark/50"
                      : pathname === "/content"
                      ? "stoke-brand-red/50 group-hover:stoke-brand-red"
                      : "stoke-white/50 group-hover:stoke-white"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu */}
      <AnimatePresence>
        {isMenuOpen && <Menu isScrolled={isScrolled} />}
      </AnimatePresence>
    </header>
  );
}
