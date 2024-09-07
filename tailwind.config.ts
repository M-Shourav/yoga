import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Prata", "serif"],
        headerFont: ["Lato", "sans-serif"],
      },
      colors: {
        bodyColor: "#F6F4F2",
        textColor: "#000000",
        hoverColor: "#CB9274",
      },
    },
  },
  plugins: [],
};
export default config;
