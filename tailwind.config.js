/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "425px",
        md: "768px",
        "960px": "960px",
        lg: "1200px",
        xl: "1440px",
        "4k": "2560px",
      },
    },
  },
  plugins: [],
};
