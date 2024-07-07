/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Brown-100": "#F8F4E1",
        "Brown-300": "#AF8F6F",
        "Brown-500": "#74512D",
        "Brown-800": "#543310"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
