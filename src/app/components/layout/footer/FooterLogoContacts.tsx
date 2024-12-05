import Link from "next/link";
import Image from "next/image";

import Button from "../../shared/Button";
import LanguageDropdown from "../../shared/LanguageDropdown";

export default function FooterLogoContacts() {
  return (
    <div className="space-y-30px 3xl:space-y-16 border-b sm:border-r sm:border-b-0 border-white/10 pt-12 sm:pt-60px xl:pt-[70px] pb-30px 3xl:pt-24 3xl:pb-32 pr-12 3xl:pr-40 px-30px">
      {/* Logo & Lang */}
      <div className="flex sm:flex-col xl:flex-row items-center sm:items-start gap-5 3xl:gap-6 sm:gap-2.5 xl:gap-5">
        <Link
          href="/"
          className="uppercase font-medium font-unbounded text-lg 3xl:text-2xl"
        >
          Mebel.tours
        </Link>
        {/* Lang Dropdown */}
        <LanguageDropdown />
      </div>

      {/* Socials  */}
      <div className="space-y-30px">
        <div className="space-y-2 3xl:space-y-2.5">
          <div className="flex items-center gap-3 3xl:gap-4">
            {/* Vkontakt */}
            <a href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 3xl:size-auto shrink-0 fill-white hover:fill-white/60 transition-all duration-300"
              >
                <g clipPath="url(#clip0_1108_2136)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.5417 4.9565C19.68 4.5015 19.5417 4.1665 18.8792 4.1665H16.6917C16.135 4.1665 15.8783 4.45567 15.7392 4.77484C15.7392 4.77484 14.6267 7.43817 13.0508 9.16817C12.5408 9.66984 12.3092 9.829 12.0308 9.829C11.8917 9.829 11.6825 9.66984 11.6825 9.214V4.9565C11.6825 4.40984 11.5292 4.1665 11.0658 4.1665H7.62583C7.27833 4.1665 7.06917 4.41984 7.06917 4.66067C7.06917 5.17817 7.8575 5.29817 7.93833 6.75484V9.91984C7.93833 10.614 7.81083 10.7398 7.5325 10.7398C6.79083 10.7398 4.98667 8.064 3.91583 5.00234C3.70833 4.4065 3.49833 4.1665 2.93917 4.1665H0.75C0.125 4.1665 0 4.45567 0 4.77484C0 5.34317 0.741667 8.1665 3.45417 11.9007C5.2625 14.4507 7.80833 15.8332 10.1275 15.8332C11.5183 15.8332 11.69 15.5265 11.69 14.9973V13.0698C11.69 12.4557 11.8217 12.3332 12.2625 12.3332C12.5875 12.3332 13.1433 12.4932 14.4417 13.7223C15.925 15.1798 16.1692 15.8332 17.0042 15.8332H19.1917C19.8167 15.8332 20.13 15.5265 19.95 14.9198C19.7517 14.3165 19.0433 13.4407 18.1042 12.4015C17.5942 11.8098 16.8292 11.1723 16.5967 10.8532C16.2725 10.444 16.365 10.2615 16.5967 9.89734C16.5967 9.89734 19.2633 6.209 19.5408 4.9565"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1108_2136">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            {/* Whatsapp */}
            <a href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 3xl:size-auto shrink-0 fill-white hover:fill-white/60 transition-all duration-300"
              >
                <path d="M10.0008 1.6582C14.6033 1.6582 18.3342 5.38904 18.3342 9.99154C18.3342 14.594 14.6033 18.3249 10.0008 18.3249C8.52814 18.3272 7.08137 17.9375 5.80916 17.1957L1.67083 18.3249L2.79749 14.1849C2.05507 12.9123 1.66503 11.4649 1.66749 9.99154C1.66749 5.38904 5.39833 1.6582 10.0008 1.6582ZM7.16083 6.07487L6.99416 6.08154C6.88626 6.08811 6.78081 6.11645 6.68416 6.16487C6.59376 6.21606 6.51124 6.28006 6.43916 6.35487C6.33916 6.44904 6.28249 6.5307 6.22166 6.60987C5.91343 7.01062 5.74747 7.50263 5.74999 8.0082C5.75166 8.41654 5.85833 8.81404 6.02499 9.1857C6.36583 9.93737 6.92666 10.7332 7.66666 11.4707C7.84499 11.6482 8.01999 11.8265 8.20833 11.9924C9.12782 12.8019 10.2235 13.3857 11.4083 13.6974L11.8817 13.7699C12.0358 13.7782 12.19 13.7665 12.345 13.759C12.5877 13.7465 12.8247 13.6808 13.0392 13.5665C13.1483 13.5103 13.2548 13.4491 13.3583 13.3832C13.3583 13.3832 13.3942 13.3599 13.4625 13.3082C13.575 13.2249 13.6442 13.1657 13.7375 13.0682C13.8067 12.9965 13.8667 12.9124 13.9125 12.8165C13.9775 12.6807 14.0425 12.4215 14.0692 12.2057C14.0892 12.0407 14.0833 11.9507 14.0808 11.8949C14.0775 11.8057 14.0033 11.7132 13.9225 11.674L13.4375 11.4565C13.4375 11.4565 12.7125 11.1407 12.2692 10.939C12.2228 10.9188 12.1731 10.9072 12.1225 10.9049C12.0655 10.899 12.0079 10.9054 11.9535 10.9237C11.8992 10.9419 11.8494 10.9716 11.8075 11.0107C11.8033 11.009 11.7475 11.0565 11.145 11.7865C11.1104 11.833 11.0628 11.8681 11.0082 11.8874C10.9535 11.9067 10.8944 11.9093 10.8383 11.8949C10.784 11.8803 10.7309 11.8619 10.6792 11.8399C10.5758 11.7965 10.54 11.7799 10.4692 11.7499C9.99088 11.5412 9.54806 11.2592 9.15666 10.914C9.05166 10.8224 8.95416 10.7224 8.85416 10.6257C8.52631 10.3117 8.24059 9.95654 8.00416 9.56904L7.95499 9.48987C7.91968 9.43667 7.89113 9.37929 7.86999 9.31904C7.83833 9.19654 7.92083 9.0982 7.92083 9.0982C7.92083 9.0982 8.12333 8.87654 8.21749 8.75654C8.30916 8.63987 8.38666 8.52654 8.43666 8.4457C8.53499 8.28737 8.56583 8.12487 8.51416 7.99904C8.28083 7.42904 8.03916 6.86154 7.79083 6.2982C7.74166 6.18654 7.59583 6.10654 7.46333 6.0907C7.41833 6.0857 7.37332 6.0807 7.32832 6.07737C7.21641 6.07181 7.10427 6.07292 6.99249 6.0807L7.16083 6.07487Z" />
              </svg>
            </a>
            {/* Telegram */}
            <a href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 3xl:size-auto shrink-0 fill-white hover:fill-white/60 transition-all duration-300"
              >
                <g clipPath="url(#clip0_1108_2138)">
                  <path d="M18.3764 1.77434L0.657315 8.64254C-0.0557314 8.96238 -0.296903 9.60289 0.484972 9.95051L5.03067 11.4026L16.0216 4.57484C16.6217 4.14621 17.2361 4.26051 16.7074 4.73203L7.26771 13.3232L6.97118 16.959C7.24583 17.5204 7.74872 17.523 8.0695 17.244L10.6811 14.76L15.154 18.1267C16.1929 18.7449 16.7581 18.346 16.9817 17.2129L19.9154 3.24922C20.22 1.85449 19.7006 1.23996 18.3764 1.77434Z" />
                </g>
                <defs>
                  <clipPath id="clip0_1108_2138">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 3xl:size-auto shrink-0 fill-white hover:fill-white/60 transition-all duration-300"
              >
                <path d="M11.6668 11.2498H13.7502L14.5835 7.9165H11.6668V6.24984C11.6668 5.3915 11.6668 4.58317 13.3335 4.58317H14.5835V1.78317C14.3118 1.74734 13.286 1.6665 12.2027 1.6665C9.94016 1.6665 8.3335 3.04734 8.3335 5.58317V7.9165H5.8335V11.2498H8.3335V18.3332H11.6668V11.2498Z" />
              </svg>
            </a>
          </div>
          <a
            href="tel:"
            className="block font-bold text-13 xl:text-sm 3xl:text-lg text-white hover:text-white/60 transition-all duration-300"
          >
            +7 (999) 999-99-99
          </a>
          <a
            href="mailto:"
            className="block font-bold text-13 xl:text-sm 3xl:text-lg text-white hover:text-white/60 transition-all duration-300"
          >
            mail@foshan.furniture
          </a>
        </div>
        <Button
          variant="red"
          className="w-full xs:w-auto h-[52px] 3xl:h-[73px] flex items-center justify-center gap-4 px-5"
        >
          Оставить заявку
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

      {/* Trustpilot */}
      <div className="xl:hidden flex items-center gap-7 justify-center xs:justify-start">
        <Image
          src="/assets/images/img-trustpilot.png"
          alt="Trustpilot"
          width={90}
          height={45}
        />
        <Image
          src="/assets/images/img-2022.png"
          alt="Trustpilot"
          width={80}
          height={76}
        />
      </div>
    </div>
  );
}
