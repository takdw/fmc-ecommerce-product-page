const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./components/**/*.{js,vue}", "./src/**/*.{js,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "theme-orange": "hsl(26, 100%, 55%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
