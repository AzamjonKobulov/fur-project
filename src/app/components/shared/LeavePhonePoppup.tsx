import Button from "./Button";

import { motion } from "framer-motion";

export default function LeavePhonePoppup({ toggleForm }) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-30px">
      {/* Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        transition={{ duration: 0.3 }}
        className="pt-5 xl:pt-0"
      >
        {/* Close Button */}
        <button
          onClick={toggleForm}
          className="size-16 sm:size-[76px] 3xl:size-[90px] absolute right-30px sm:right-20 xl:right-40 3xl:right-80 top-[10%] xs:top-[15%] shrink-0 grid place-content-center border border-white/50 rounded-full"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5625 21.5625L8.4375 8.4375M21.5625 8.4375L8.4375 21.5625"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="xs:max-w-[411px] xl:max-w-[458px] 3xl:max-w-[669px] w-full bg-white p-5 sm:p-30px xl:p-10 3xl:p-12">
          <div className="space-y-5 mb-6 xl:mb-30px 3xl:mb-10">
            <h3 className="font-medium text-center">
              Оставьте свой номер телефона
            </h3>
            <p className="text-center text-xs sm:text-13 xl:text-sm 3xl:text-lg leading-[15.6px] sm:leading-[17px] xl:leading-[18px] 3xl:leading-6">
              Мы отправим вам полный каталог с актуальными ценами
            </p>
          </div>
          <form
            action="#"
            className="xs:max-w-[237px] xl:max-w-[286px] 3xl:max-w-[450px] mx-auto space-y-5"
          >
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
      </motion.div>
    </div>
  );
}
