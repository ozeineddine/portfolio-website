import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#F7F4EF",
        ink: "#231F1B",
        accent: "#C84620",
        muted: "#7A7068",
      },
      fontFamily: {
        barlow: ['"Barlow Condensed"', "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
