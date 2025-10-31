import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#F6F6F6",
        accent: "#60A5FA",
        nav: {
          900: "#071028",
          800: "#0b1628"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
