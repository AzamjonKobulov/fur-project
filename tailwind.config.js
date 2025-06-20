/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1720px",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
      },
      colors: {
        brand: {
          red: "#AB292A",
          dark: "#242323",
          gray: "#F4F4F4",
        },
      },
      fontSize: {
        13: "13px",
        15: "15px",
      },
      spacing: {
        "30px": "30px",
        "60px": "60px",
      },
      backgroundImage: {
        "quality-control": "url('/assets/images/bg-quality-control.jpg')",
        "lets-go-tour": "url('/assets/images/bg-lets-go-on-tour.jpg')",
        "req-full-catalog": "url('/assets/images/bg-req-for-full-catalog.jpg')",
      },
    },
  },
  plugins: [],
};
