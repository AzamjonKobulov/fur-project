import Button from "../../shared/Button";

export default function ReqFullCatalog() {
  return (
    <section className="section-space bg-req-full-catalog bg-cover bg-no-repeat relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/50 py-20 sm:py-[153px] xl:py-[171px] 3xl:py-[202px]">
      <div className="container section-space relative z-10 flex flex-col justify-center items-center">
        <h2 className="text-white text-center">Запрос полного каталога</h2>

        {/* Form */}
        <div className="flex items-center justify-end">
          <div className="sm:max-w-[658px] xl:max-w-[598px] 3xl:max-w-[832px] w-full">
            <form action="#" className=" grid sm:grid-cols-3 gap-5">
              <input
                type="text"
                placeholder="имя"
                className="w-full h-[53px] xl:h-14 3xl:h-[73px] bg-transparent text-white border border-white/30 focus:border-brand-white hover:border-white outline-none transition-all duration-200 placeholder:text-brand-white/50 text-13 xl:text-sm 3xl:text-lg px-4 3xl:px-5"
              />
              <input
                type="text"
                placeholder="+7 (999) 999-99-99"
                className="w-full h-[53px] xl:h-14 3xl:h-[73px] bg-transparent text-white border border-white/30 focus:border-brand-white hover:border-white outline-none transition-all duration-200 placeholder:text-brand-white/50 text-13 xl:text-sm 3xl:text-lg px-4 3xl:px-5"
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
              <div className="sm:col-span-3">
                <p className="text-brand-dark/30 text-center text-xs 3xl:text-sm text-white/50 leading-[15.6px] 3xl:leading-[18px] xl:-mt-2.5">
                  Нажимая на эту кнопку вы соглашаетесь с политикой
                  конфиденциальности
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
