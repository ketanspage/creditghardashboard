/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: ["class", '[data-theme="light"]'],
  themes: [
    {
      mytheme: {
        primary: "#365314",
        secondary: "#ce4448",

        accent: "#a674db",

        neutral: "#1a2229",

        "base-100": "#423d42",

        info: "#4777e6",

        success: "#1b8d58",

        warning: "#a35705",

        error: "#e74b7a",
      },
    },
  ],

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#1c64f2",
          "primary-focus": "#3b82f6",
        },
      },
      
      
    ],
  },
};
