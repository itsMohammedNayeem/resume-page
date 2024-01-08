/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "ui-monospace", "sans-serif"],
      },
      colors: {
        neutral: {
          100: "hsla(0, 0%, 100%, 1)",
        },
        primary: {
          800: "hsla(229, 47%, 17%, 1)",
          700: "hsla(229, 43%, 20%, 1)",
          400: "hsla(230, 50%, 58%, 0.3)",
          300: "hsla(229, 36%, 39%, 1)",
          200: "hsla(229, 21%, 53%, 1)",
        },
        accent: {
          400: "hsla(147, 93%, 43%, 1)",
        },
        secondary: {
          400: "hsla(229, 78%, 60%, 1)",
        },
      },
    },
  },
  plugins: [],
};
