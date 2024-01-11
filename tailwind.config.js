/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Sono, monospace",
      logo: "Nunito, sans-serif",
    },

    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        " white": "#ffffff",
        yellow: {
          50: "#fffae8",
          100: "#fff1b9",
          200: "#ffe88b",
          300: "#ffdf5d",
          400: "#ffd62e",
          500: "#ffcd00",
          600: "#d1a800",
          700: "#a28200",
          800: "#745d00",
          900: "#463800",
          950: "#171300",
        },
        grad: {
          0: "#f9ce34",
          50: "#ee2a7b",
          100: "#6228d7",
        },
      },
    },
  },
  plugins: [],
};
