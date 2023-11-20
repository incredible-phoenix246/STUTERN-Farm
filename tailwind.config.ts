import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       animation: {
        shimmer: "shimmer 1.5s infinite",
        slideUp: "slideUp 1s 0.2s ease forwards",
        loadspin: "loadspin 1.2s linear infinite",
        pulsing: "pulsing 1.5s ease infinite",
      },
      keyframes: {
        pulsing: {
          "50%": {
            opacity: "0.2",
          },
        },
        loadspin: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        slideUp: {
          "70%": {
            opacity: "0.7",
            transform: "translateY(50)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeOut: {
          "50%": {
            opacity: "0.7",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      colors: {
        primary: "#052C42",
        "primary-light": "#2E577D",
        "primary-dark": "#031824",
        "color-600": "#161616",
        "color-normal": "#535353",
        "header": "#282828",
        "card": "#FBF9FA",
        'purple': "#A64AED",
        'green1': '#4AED9E',
        'peachtone': '#F3D9DA',
        'dark': '#0E0E2C',
        'sucess': '#31D0AA',
        'text': '#4A4A68',
        'text-sub': '#8C8CA1',
        'accent': '#ECF1F4',
        'light': '#FAFCFE',
        'green2': '#D6F9DA'

      },
      fontFamily: {
        Worksans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
