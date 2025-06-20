"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function AccordionItem({
  faq: { question, answer },
  isOpen,
  onClick,
}) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const accordionRef = useRef(null); // Reference for the accordion item

  // Dynamically set the max height based on the content
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  // Handle clicks outside the accordion
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        // Call onClick to close the accordion if it's open
        if (isOpen) {
          onClick();
        }
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClick]);

  return (
    <div
      ref={accordionRef}
      className="bg-brand-gray pb-[18px] xl:pb-5 3xl:pb-30px"
    >
      {/* Header */}
      <div
        onClick={onClick}
        className={`w-full flex items-center justify-between gap-7 transition-all duration-3000 px-[18px] sm:px-6 pt-[18px] xl:pt-5 xl:px-30px 3xl:pt-30px`}
      >
        <h5 className="font-normal text-left">{question}</h5>
        <button className="size-30px sm:size-9 xl:size-10 3xl:size-60px shrink-0 grid place-content-center border borderbrandak/20 rounded-full">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`size-2 sm:size-2.5 xl:size-3 3xl:size-auto ${
              isOpen ? "rotate-90" : ""
            } transition-all duration-300`}
          >
            <path
              d="M16.8492 1.15076C16.8492 0.598473 16.4015 0.150758 15.8492 0.150757L6.84924 0.150758C6.29696 0.150758 5.84924 0.598473 5.84924 1.15076C5.84924 1.70304 6.29696 2.15076 6.84924 2.15076L14.8492 2.15076L14.8492 10.1508C14.8492 10.703 15.297 11.1508 15.8492 11.1508C16.4015 11.1508 16.8492 10.703 16.8492 10.1508L16.8492 1.15076ZM1.70711 16.7071L16.5563 1.85786L15.1421 0.443651L0.292893 15.2929L1.70711 16.7071Z"
              fill="#AB292A"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          maxHeight: maxHeight,
          transition: "max-height 0.3s ease",
          overflow: "hidden",
        }}
      >
        <p className="max-w-2xl text-brand-dark/80 text-xs sm:text-13 3xl:text-lg leading-4 sm:leading-[17px] 3xl:leading-6 px-[18px] sm:px-6 xl:px-30px pt-3 3xl:px-10 xl:pt-4 3xl:pt-5">
          {answer}
        </p>
      </div>
    </div>
  );
}
