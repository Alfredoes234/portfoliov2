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
      "white": '#F9FBFF',
      "black": '#142135',
      "primary": '#98BCF3',
      "secondary": '#A6F6FF',
      "tertiary": '#BEFFF7',
      "accent": '#9EDDFF',
      "secondl": '#D8F7FB',
      "priml": '#CCDCF4',
      "bl2": '#5B687C'
    }
  },
  plugins: [
  ],
};
export default config;
