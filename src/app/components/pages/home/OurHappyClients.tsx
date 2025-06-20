import Link from "next/link";
import Image from "next/image";

import Button from "../../shared/Button";

export default function OurHappyClients() {
  return (
    <section className="section-top-padding">
      <div className="container section-space">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-30px">
          <h2 className="sm:whitespace-nowrap">
            Наши <span className="text-brand-red">довольные</span> <br />{" "}
            клиенты
          </h2>
          <Button
            variant="darkOutline"
            className="w-full sm:w-auto h-[52px] 3xl:h-[73px] flex items-center justify-center gap-4 px-6"
          >
            Все отзывы
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 sm:w-auto fill-brand-dark group-hover:fill-brand-dark/50 transition-all duration-300"
            >
              <path d="M16.8492 1.07556C16.8492 0.523278 16.4015 0.0755626 15.8492 0.0755626L6.84924 0.0755626C6.29696 0.0755626 5.84924 0.523278 5.84924 1.07556C5.84924 1.62785 6.29696 2.07556 6.84924 2.07556H14.8492V10.0756C14.8492 10.6278 15.297 11.0756 15.8492 11.0756C16.4015 11.0756 16.8492 10.6278 16.8492 10.0756L16.8492 1.07556ZM1.70711 16.6319L16.5563 1.78267L15.1421 0.368456L0.292893 15.2177L1.70711 16.6319Z" />
            </svg>
          </Button>
        </div>

        {/* Clients */}
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Client 1 */}
          <div className="relative after:absolute after:inset-0 after:bg-brand-dark/50 after:w-full after:h-full">
            {/* Image */}
            <Image
              src="/assets/images/bg-happy-client-1.jpg"
              alt="BG"
              width={1000}
              height={800}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="flex flex-col space-y-24 sm:space-y-14 xl:space-y-16 3xl:space-y-[144px] p-5 sm:p-30px xl:p-10 3xl:p-12">
              {/* Play Button */}
              <button className="size-[70px] xl:size-20 3xl:size-[120px] shrink-0 relative z-10 grid place-content-center rounded-full overflow-hidden">
                <Image
                  src="/assets/images/img-happy-client-1.jpg"
                  alt="Client"
                  width={500}
                  height={500}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Play Icon */}
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3.5 3xl:size-auto relative z-20"
                >
                  <path
                    d="M15 9L-8.15666e-07 17.6603L-5.85622e-08 0.339746L15 9Z"
                    fill="white"
                  />
                </svg>
              </button>

              {/* Review */}
              <div className="max-w-xl space-y-5 xl:space-y-30px 3xl:space-y-10 relative z-10">
                {/* Quote Icon */}
                <svg
                  width="28"
                  height="21"
                  viewBox="0 0 28 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-4 3xl:w-auto 3xl:h-auto absolute top-0 left-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.1754 9.80226C22.4942 9.90604 22.7946 10.0347 23.0766 10.1882C23.714 10.5352 24.2578 11.0091 24.7079 11.61C25.3789 12.4769 25.7144 13.4495 25.7144 14.5279C25.7144 15.437 25.4763 16.2828 25.0001 17.0651C24.5456 17.8263 23.907 18.4289 23.0845 18.8729C22.2837 19.3169 21.407 19.5389 20.4547 19.5389C19.4806 19.5389 18.5932 19.3169 17.7923 18.8729C16.9915 18.4077 16.3529 17.784 15.8767 17.0017C15.4222 16.1982 15.1949 15.3102 15.1949 14.3376C15.1949 13.3861 15.4006 12.3818 15.8118 11.3246C16.2447 10.2463 16.9915 8.86137 18.0521 7.16987L21.5585 1.46108H26.104L22.1754 9.80226ZM17.2106 6.67175C16.1392 8.38089 15.3591 9.81972 14.8959 10.9737L14.8921 10.9832C14.4462 12.1293 14.2111 13.2497 14.2111 14.3376C14.2111 15.4628 14.4758 16.5123 15.0156 17.4665L15.0231 17.4798L15.0311 17.4929C15.5912 18.413 16.3475 19.1519 17.2895 19.699L17.298 19.7039L17.3067 19.7087C18.2642 20.2396 19.3206 20.5 20.4547 20.5C21.5693 20.5 22.6124 20.2386 23.5652 19.7115C24.5327 19.1882 25.3011 18.4671 25.8478 17.5529C26.413 16.6231 26.6983 15.6088 26.6983 14.5279C26.6983 13.2411 26.2933 12.0674 25.4973 11.0364C24.9486 10.3056 24.2764 9.72895 23.4889 9.31296L27.6396 0.5H21.0015L17.2106 6.67175ZM1.32444 10.9737C1.78774 9.8197 2.56777 8.38085 3.63928 6.67167L7.43009 0.5H14.0682L9.91747 9.31296C10.705 9.72896 11.3772 10.3056 11.926 11.0365C12.7219 12.0674 13.1268 13.2411 13.1268 14.5279C13.1268 15.6088 12.8416 16.623 12.2765 17.5528C11.7297 18.467 10.9614 19.1881 9.99379 19.7115C9.04101 20.2386 7.99786 20.5 6.88324 20.5C5.74916 20.5 4.69281 20.2396 3.73527 19.7087L3.72663 19.7039L3.71808 19.699C2.77613 19.1519 2.01974 18.413 1.45966 17.4929L1.45172 17.4798L1.44421 17.4665C0.904341 16.5123 0.639648 15.4628 0.639648 14.3376C0.639648 13.2497 0.874837 12.1293 1.32069 10.9832L1.32444 10.9737ZM9.51311 18.8729C10.3356 18.4289 10.9741 17.8263 11.4287 17.0651C11.9049 16.2828 12.143 15.437 12.143 14.5279C12.143 13.4495 11.8075 12.4769 11.1365 11.61C10.6863 11.0091 10.1426 10.5352 9.50523 10.1882C9.22316 10.0347 8.92276 9.90604 8.60402 9.80226L12.5326 1.46108H7.98714L4.48065 7.16987C3.42005 8.86137 2.67329 10.2463 2.24039 11.3246C1.82914 12.3818 1.62351 13.3861 1.62351 14.3376C1.62351 15.3102 1.85078 16.1982 2.30533 17.0017C2.78152 17.784 3.42005 18.4077 4.22091 18.8729C5.02178 19.3169 5.90922 19.5389 6.88324 19.5389C7.83562 19.5389 8.71225 19.3169 9.51311 18.8729Z"
                    fill="white"
                  />
                </svg>

                <p className="text-white text-xs sm:text-13 xl:text-sm 3xl:text-lg leading-[15.6px] sm:leading-[17px] xl:leading-[18px] 3xl:leading-6">
                  Мой мебельный тур в Китай стал незабываемым опытом,
                  превзошедшим все мои ожидания. Это не только позволило мне
                  приобрести уникальную и качественную мебель для всего моего
                  дома, но и подарило мне богатый культурный опыт. Я искренне
                  рекомендую этот тур всем, кто хочет преобразить свой дом.
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-5 3xl:gap-30px">
                  <h5 className="text-white font-normal">Елена</h5>
                  <p className="text-white/50 text-xs sm:text-13 xl:text-sm 3xl:text-lg leading-[15.6px] sm:leading-[17px] xl:leading-[18px] 3xl:leading-6">
                    /Сочи, Россия/
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Client 2 */}
          <div className="relative after:absolute after:inset-0 after:bg-brand-dark/50 after:w-full after:h-full">
            {/* Image */}
            <Image
              src="/assets/images/bg-happy-client-2.jpg"
              alt="BG"
              width={1000}
              height={800}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="flex flex-col space-y-24 sm:space-y-14 xl:space-y-16 3xl:space-y-[144px] p-5 sm:p-30px xl:p-10 3xl:p-12">
              {/* Play Button */}
              <button className="size-[70px] xl:size-20 3xl:size-[120px] shrink-0 relative z-10 grid place-content-center rounded-full overflow-hidden">
                <Image
                  src="/assets/images/img-happy-client-2.jpg"
                  alt="Client"
                  width={500}
                  height={500}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Play Icon */}
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3.5 3xl:size-auto relative z-20"
                >
                  <path
                    d="M15 9L-8.15666e-07 17.6603L-5.85622e-08 0.339746L15 9Z"
                    fill="white"
                  />
                </svg>
              </button>

              {/* Review */}
              <div className="max-w-xl space-y-5 xl:space-y-30px 3xl:space-y-10 relative z-10">
                {/* Quote Icon */}
                <svg
                  width="28"
                  height="21"
                  viewBox="0 0 28 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-4 3xl:w-auto 3xl:h-auto absolute top-0 left-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.1754 9.80226C22.4942 9.90604 22.7946 10.0347 23.0766 10.1882C23.714 10.5352 24.2578 11.0091 24.7079 11.61C25.3789 12.4769 25.7144 13.4495 25.7144 14.5279C25.7144 15.437 25.4763 16.2828 25.0001 17.0651C24.5456 17.8263 23.907 18.4289 23.0845 18.8729C22.2837 19.3169 21.407 19.5389 20.4547 19.5389C19.4806 19.5389 18.5932 19.3169 17.7923 18.8729C16.9915 18.4077 16.3529 17.784 15.8767 17.0017C15.4222 16.1982 15.1949 15.3102 15.1949 14.3376C15.1949 13.3861 15.4006 12.3818 15.8118 11.3246C16.2447 10.2463 16.9915 8.86137 18.0521 7.16987L21.5585 1.46108H26.104L22.1754 9.80226ZM17.2106 6.67175C16.1392 8.38089 15.3591 9.81972 14.8959 10.9737L14.8921 10.9832C14.4462 12.1293 14.2111 13.2497 14.2111 14.3376C14.2111 15.4628 14.4758 16.5123 15.0156 17.4665L15.0231 17.4798L15.0311 17.4929C15.5912 18.413 16.3475 19.1519 17.2895 19.699L17.298 19.7039L17.3067 19.7087C18.2642 20.2396 19.3206 20.5 20.4547 20.5C21.5693 20.5 22.6124 20.2386 23.5652 19.7115C24.5327 19.1882 25.3011 18.4671 25.8478 17.5529C26.413 16.6231 26.6983 15.6088 26.6983 14.5279C26.6983 13.2411 26.2933 12.0674 25.4973 11.0364C24.9486 10.3056 24.2764 9.72895 23.4889 9.31296L27.6396 0.5H21.0015L17.2106 6.67175ZM1.32444 10.9737C1.78774 9.8197 2.56777 8.38085 3.63928 6.67167L7.43009 0.5H14.0682L9.91747 9.31296C10.705 9.72896 11.3772 10.3056 11.926 11.0365C12.7219 12.0674 13.1268 13.2411 13.1268 14.5279C13.1268 15.6088 12.8416 16.623 12.2765 17.5528C11.7297 18.467 10.9614 19.1881 9.99379 19.7115C9.04101 20.2386 7.99786 20.5 6.88324 20.5C5.74916 20.5 4.69281 20.2396 3.73527 19.7087L3.72663 19.7039L3.71808 19.699C2.77613 19.1519 2.01974 18.413 1.45966 17.4929L1.45172 17.4798L1.44421 17.4665C0.904341 16.5123 0.639648 15.4628 0.639648 14.3376C0.639648 13.2497 0.874837 12.1293 1.32069 10.9832L1.32444 10.9737ZM9.51311 18.8729C10.3356 18.4289 10.9741 17.8263 11.4287 17.0651C11.9049 16.2828 12.143 15.437 12.143 14.5279C12.143 13.4495 11.8075 12.4769 11.1365 11.61C10.6863 11.0091 10.1426 10.5352 9.50523 10.1882C9.22316 10.0347 8.92276 9.90604 8.60402 9.80226L12.5326 1.46108H7.98714L4.48065 7.16987C3.42005 8.86137 2.67329 10.2463 2.24039 11.3246C1.82914 12.3818 1.62351 13.3861 1.62351 14.3376C1.62351 15.3102 1.85078 16.1982 2.30533 17.0017C2.78152 17.784 3.42005 18.4077 4.22091 18.8729C5.02178 19.3169 5.90922 19.5389 6.88324 19.5389C7.83562 19.5389 8.71225 19.3169 9.51311 18.8729Z"
                    fill="white"
                  />
                </svg>

                <p className="text-white text-xs sm:text-13 xl:text-sm 3xl:text-lg leading-[15.6px] sm:leading-[17px] xl:leading-[18px] 3xl:leading-6">
                  Организация тура была безупречной, с бесперебойной
                  транспортировкой и хорошо спланированными маршрутами. Во время
                  нашей поездки мы посетили многочисленные мастерские и
                  выставочные залы, каждый из которых демонстрирует уникальный
                  ассортимент дизайнов и стилей..
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-5 3xl:gap-30px">
                  <h5 className="text-white font-normal">Марк</h5>
                  <p className="text-white/50 text-xs sm:text-13 xl:text-sm 3xl:text-lg leading-[15.6px] sm:leading-[17px] xl:leading-[18px] 3xl:leading-6">
                    /Москва, Россия/
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
