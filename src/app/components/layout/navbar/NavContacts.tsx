import { usePathname } from "next/navigation";

export default function NavContacts() {
  const pathname = usePathname();

  return (
    <div className="flex items-start gap-9">
      <a
        href="tel:"
        className={`font-bold text-13 xl:text-sm 3xl:text-lg  ${
          pathname === "/content"
            ? "text-brand-dark hover:text-brand-dark/50"
            : "text-white hover:text-white/60"
        }  transition-all duration-30`}
      >
        +86 138 1014 0410
      </a>

      {/* Socials */}
      <div className="hidden sm:flex items-center gap-3 3xl:gap-4">
        {/* Vkontakt */}
        <a href="#">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`size-4 3xl:size-auto shrink-0   ${
              pathname === "/content"
                ? "fill-brand-red hover:fill-brand-dark"
                : "fill-white hover:fill-white/60"
            } transition-all duration-300`}
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
        {/* Telegram */}
        <a href="#">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`size-4 3xl:size-auto shrink-0 ${
              pathname === "/content"
                ? "fill-brand-red hover:fill-brand-dark"
                : "fill-white hover:fill-white/60"
            } transition-all duration-300`}
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
            className={`size-4 3xl:size-auto shrink-0   ${
              pathname === "/content"
                ? "fill-brand-red hover:fill-brand-dark"
                : "fill-white hover:fill-white/60"
            } transition-all duration-300`}
          >
            <path d="M11.6668 11.2498H13.7502L14.5835 7.9165H11.6668V6.24984C11.6668 5.3915 11.6668 4.58317 13.3335 4.58317H14.5835V1.78317C14.3118 1.74734 13.286 1.6665 12.2027 1.6665C9.94016 1.6665 8.3335 3.04734 8.3335 5.58317V7.9165H5.8335V11.2498H8.3335V18.3332H11.6668V11.2498Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
