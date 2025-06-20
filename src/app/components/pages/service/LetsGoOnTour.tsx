import Image from "next/image";

import Button from "../../shared/Button";

export default function LetsGoOnTour() {
  return (
    <section className="bg-lets-go-tour bg-no-repeat bg-cover bg-bottom py-20 sm:py-[112px] xl:py-24">
      <div className="container grid xl:grid-cols-2">
        <div></div>
        {/* Form */}
        <div className="flex items-center justify-end">
          <div className="xs:max-w-[297px] xl:max-w-[366px] 3xl:max-w-[560px] w-full bg-white p-30px xl:p-10 3xl:p-12">
            <h4 className="text-center mb-30px">
              Отправимся <br /> в тур?
            </h4>
            <form action="#" className="space-y-5">
              <input
                type="text"
                placeholder="имя"
                className="w-full h-[53px] xl:h-14 3xl:h-[73px] border border-brand-dark/30 focus:border-brand-dark hover:border-brand-dark outline-none transition-all duration-200 placeholder:text-brand-dark/50 text-13 xl:text-sm 3xl:text-lg px-4 3xl:px-5"
              />
              <input
                type="text"
                placeholder="+7 (999) 999-99-99"
                className="w-full h-[53px] xl:h-14 3xl:h-[73px] border border-brand-dark/30 focus:border-brand-dark hover:border-brand-dark outline-none transition-all duration-200 placeholder:text-brand-dark/50 text-13 xl:text-sm 3xl:text-lg px-4 3xl:px-5"
              />
              <Button
                variant="red"
                className="w-full h-[52px] 3xl:h-[73px] flex items-center justify-center gap-4 px-5"
              >
                Оставить заявку
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 sm:w-[15px] fill-white group-hover:fill-white/50 transition-all duration-300"
                >
                  <path d="M16.8492 1.07556C16.8492 0.523278 16.4015 0.0755626 15.8492 0.0755626L6.84924 0.0755626C6.29696 0.0755626 5.84924 0.523278 5.84924 1.07556C5.84924 1.62785 6.29696 2.07556 6.84924 2.07556H14.8492V10.0756C14.8492 10.6278 15.297 11.0756 15.8492 11.0756C16.4015 11.0756 16.8492 10.6278 16.8492 10.0756L16.8492 1.07556ZM1.70711 16.6319L16.5563 1.78267L15.1421 0.368456L0.292893 15.2177L1.70711 16.6319Z" />
                </svg>
              </Button>

              <p className="text-brand-dark/30 text-center text-xs 3xl:text-sm leading-[15.6px] 3xl:leading-[18px] xl:-mt-2.5">
                Нажимая на эту кнопку вы соглашаетесь с политикой
                конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
