import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lavander: {
          50: "color(display-p3 0.973 0.973 0.988 / <alpha-value>)",
          100: "color(display-p3 0.945 0.941 0.976 / <alpha-value>)",
          200: "color(display-p3 0.894 0.886 0.953 / <alpha-value>)",
          300: "color(display-p3 0.839 0.827 0.929 / <alpha-value>)",
          400: "color(display-p3 0.784 0.773 0.91 / <alpha-value>)",
          500: "color(display-p3 0.733 0.718 0.886 / <alpha-value>)",
          600: "color(display-p3 0.518 0.486 0.792 / <alpha-value>)",
          700: "color(display-p3 0.318 0.275 0.686 / <alpha-value>)",
          800: "color(display-p3 0.212 0.184 0.455 / <alpha-value>)",
          900: "color(display-p3 0.106 0.09 0.227 / <alpha-value>)",
          950: "color(display-p3 0.051 0.047 0.114 / <alpha-value>)",
        },
        oak: {
          50: "#FBF7F3",
          100: "#F9F2EB",
          200: "#F2E2D4",
          300: "#ECD5C0",
          400: "#E5C6A9",
          500: "#DFB995",
          600: "#CD925A",
          700: "#AC6E34",
          800: "#724922",
          900: "#3B2612",
          950: "#1B1208",
        },
      },
      fontFamily: {
        sans: ["var(--font-source-sans)", "sans"],
        serif: ["var(--font-source-serif)", "serif"],
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1);",
      },
    },
  },
  plugins: [],
};
export default config;
