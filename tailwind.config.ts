import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      rcb: ["radio-canada-big", "sans-serif"],
      ws: ["work-sans", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "white": '#EDF2F6',
      "black": '#040D15',
      "primary": '#99D8FF',
      "secondary": '#A1E8CC',
      "tertiary": '#DAFBFF',
      "accent": '#75D4A1',
      "secondl": '#DFF1EE',
      "priml": '#DDEDF9',
      "black2": '#5B687C'
    }
  },
  plugins: [
  ],
};
export default config;
