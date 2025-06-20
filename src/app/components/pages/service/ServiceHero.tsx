import Image from "next/image";
import Button from "../../shared/Button";

export default function ServiceHero() {
  return (
    <section className="py-0">
      <div className="h-screen relative overflow-hidden">
        <div className="h-full">
          {/* Slide image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              alt="Image"
              src="/assets/images/bg-service-hero.jpg"
              className="w-full h-full object-cover"
              width={1200}
              height={900}
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 w-full h-full bg-black/50 z-10"></div>

          {/* Slide Content */}
          <div className="h-full container  relative z-10 grid place-content-center text-center text-white">
            <div className="sm:max-w-[510px] xl:max-w-[804px] 3xl:max-w-[1180px] flex flex-col items-center space-y-6 3xl:space-y-10">
              <h2 className="text-white">Привезем вам любую мебель из Китая</h2>
              <p className="text-sm sm:text-15 xl:text-base 3xl:text-[22px] leading-[18px] sm:leading-5 3xl:leading-7">
                Премиум-услуга по комплектации интерьера <br /> с
                коньерж-сервисом от компании Mebel.tours
              </p>

              <Button
                variant="red"
                className="w-full xs:w-auto h-[52px] 3xl:h-[73px] flex items-center justify-center gap-4 px-5 3xl:px-10"
              >
                Забронировать тур
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 sm:w-auto fill-white group-hover:fill-white/50 transition-all duration-300"
                >
                  <path d="M16.8492 1.07556C16.8492 0.523278 16.4015 0.0755626 15.8492 0.0755626L6.84924 0.0755626C6.29696 0.0755626 5.84924 0.523278 5.84924 1.07556C5.84924 1.62785 6.29696 2.07556 6.84924 2.07556H14.8492V10.0756C14.8492 10.6278 15.297 11.0756 15.8492 11.0756C16.4015 11.0756 16.8492 10.6278 16.8492 10.0756L16.8492 1.07556ZM1.70711 16.6319L16.5563 1.78267L15.1421 0.368456L0.292893 15.2177L1.70711 16.6319Z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
