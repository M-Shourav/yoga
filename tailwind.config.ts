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
        bodyFont: ["Lato", "sans-serif"],
        titleFont: ["Prata", "serif"],
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
