/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class", // enable dark mode with 'dark' class
  theme: {
    extend: {
      colors: {
        peach: {
          50: "#FFF5F0",
          100: "#FFE5D9",
          200: "#FFCAB0",
          300: "#FFAD80",
          400: "#FF8C61",
          500: "#FF6F40",
        },
        olive: {
          50: "#F3F9F0",
          100: "#E0F0D9",
          200: "#C0E3B0",
          300: "#9DD788",
          400: "#7BCB61",
          500: "#5AB03D",
        },
        lightgreen: {
          50: "#F0FFF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
        },
      },
    },
  },
  plugins: [],
};
