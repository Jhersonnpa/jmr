/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bunker: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5dae2",
          300: "#b0b9c9",
          400: "#8593ab",
          500: "#667691",
          600: "#515f78",
          700: "#434d61",
          800: "#3a4252",
          900: "#343a46",
          950: "#13151a",
        },
      },
    },
  },
  plugins: [],
};
