import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const images = [
  "/assets/images/img-who-are-we-1.jpg",
  "/assets/images/img-who-are-we-2.jpg",
  "/assets/images/img-who-are-we-3.jpg",
  "/assets/images/img-who-are-we-4.jpg",
  "/assets/images/img-who-are-we-6.jpg",
];

export default function TeamImages() {
  const pathname = usePathname();
  const [visibleImages, setVisibleImages] = useState(images);

  useEffect(() => {
    const updateVisibleImages = () => {
      const screenWidth = window.innerWidth;

      // Determine visible images for the /service page
      if (pathname === "/service") {
        setVisibleImages(screenWidth > 1280 ? images : images.slice(0, 3));
        return;
      }

      // Default logic for other pages
      setVisibleImages(
        screenWidth > 640 && screenWidth < 1280 ? images.slice(0, 3) : images
      );
    };

    updateVisibleImages(); // Run on mount
    window.addEventListener("resize", updateVisibleImages); // Run on resize

    return () => window.removeEventListener("resize", updateVisibleImages); // Cleanup listener
  }, [pathname]); // Depend on pathname

  return (
    <div
      className={`relative ${
        pathname === "/service" ? "flex" : "hidden md:flex"
      } items-center`}
    >
      <div className="flex items-center pr-12">
        {visibleImages.map((img, idx) => (
          <div
            key={idx}
            className="size-16 xl:size-[72px] 3xl:size-[110px] shrink-0 bg-white rounded-full overflow-hidden -mr-30px p-1"
          >
            <Image
              src={img}
              alt="Avatar"
              width={800}
              height={800}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ))}
      </div>

      <button className="size-[22px] xl:size-6 3xl:size-10 shrink-0 absolute right-0 grid place-content-center bg-brand-red text-white text-sm xl:text-13 3xl:text-xl leading-[14px] xl:leading-4 3xl:leading-[26px] rounded-full">
        +11
      </button>
    </div>
  );
}
