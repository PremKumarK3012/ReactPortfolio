/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        mb: "425px",
      },
      colors: {
        customColor:
          "bg-gradient-to-r from-blue-100 via-blue-300 via-blue-400 via-white via-blue-500 to-blue-600",
      },
    },
    fontFamily: {
      name: ["Great Vibes"],
      head: ["Poppins"],
    },
  },
  plugins: [],
};
