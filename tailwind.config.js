/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        textSecondary: "#2a2829",
        textPrimary: "#1b1e23",
        bgSecondary: "#49CDC0",
        bgPrimary: "#F4F2F3",
        button: "#49CDC0",
      },
      fontSize: {
        bg: ["14px"],
      },
    },
  },
  plugins: [],
};
