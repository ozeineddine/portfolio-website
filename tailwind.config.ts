import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#4169E1',
        'majorelle-blue': '#623cea',
        'brandeis-blue': '#0066ff',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      /* This is the custom class for every page's main component */
      flex: {
        'min-screen-center': 'min-h-screen flex flex-col items-center p-24'
      }
    },
  },
  plugins: [],
};
export default config;
