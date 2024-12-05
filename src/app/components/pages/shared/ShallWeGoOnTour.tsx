import Image from "next/image";
import Button from "../../shared/Button";

export default function ShallWeGoOnTour() {
  return (
    <section className="bg-brand-red text-white relative xl:static overflow-hidden !pb-0 sm:!py-0">
      <div className="container xl:relative pt-[60px] md:py-20 lg:py-[120px] 3xl:py-40">
        <h2 className="text-white">
          Отправимся <br className="xl:hidden" /> в тур?
        </h2>
        <form
          action="#"
          className="md:max-w-[50%] lg:max-w-[520px] xl:max-w-[593px] 3xl:max-w-[1062px] grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-5 text-white/50 mt-8 sm:mt-10 xl:mt-12 3xl:mt-16"
        >
          <input
            type="text"
            placeholder="имя"
            className="w-full h-[53px] xl:h-14 3xl:h-[73px] bg-transparent text-white border border-white/30 focus:border-white hover:border-white outline-none transition-all duration-200 placeholder:text-white/30 text-13 xl:text-sm 3xl:text-lg px-4 3xl:px-5"
          />
          <input
            type="email"
            placeholder="почта"
            className="w-full h-[53px] xl:h-14 3xl:h-[73px] bg-transparent text-white border border-white/30 focus:border-white hover:border-white outline-none transition-all duration-200 placeholder:text-white/30 text-13 xl:text-sm 3xl:text-lg px-4 3xl:px-5"
          />
          <input
            type="text"
            placeholder="+7 (999) 999-99-99"
            className="w-full h-[53px] xl:h-14 3xl:h-[73px] bg-transparent text-white border border-white/30 focus:border-white hover:border-white outline-none transition-all duration-200 placeholder:text-white/30 text-13 xl:text-sm 3xl:text-lg px-4 3xl:px-5"
          />
          <Button
            variant="red"
            className="w-full h-[52px] 3xl:h-[73px] flex items-center justify-center bg-white !text-brand-red group border gap-4 hover:bg-brand-red hover:border-white hover:!text-white transition-all duration-300"
          >
            Оставить заявку
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 sm:w-auto fill-brand-red group-hover:fill-white transition-all duration-300"
            >
              <path d="M16.8492 1.07556C16.8492 0.523278 16.4015 0.0755626 15.8492 0.0755626L6.84924 0.0755626C6.29696 0.0755626 5.84924 0.523278 5.84924 1.07556C5.84924 1.62785 6.29696 2.07556 6.84924 2.07556H14.8492V10.0756C14.8492 10.6278 15.297 11.0756 15.8492 11.0756C16.4015 11.0756 16.8492 10.6278 16.8492 10.0756L16.8492 1.07556ZM1.70711 16.6319L16.5563 1.78267L15.1421 0.368456L0.292893 15.2177L1.70711 16.6319Z" />
            </svg>
          </Button>
          <p className="md:col-span-2 3xl:col-span-3 text-white/30 text-xs text-center sm:text-left 3xl:text-sm leading-[15.6px] 3xl:leading-[18px]">
            Нажимая на эту кнопку вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>

        {/* Image */}
        <Image
          src="/assets/images/img-shall-we-go-tour.png"
          alt="Tour"
          width={560}
          height={566}
          className="h-full w-full md:w-[360px] 3xl:w-[560px] md:absolute top-0 -right-10 xl:right-30px z-10 object-cover mt-10 md:mt-0"
        />
      </div>
    </section>
  );
}
