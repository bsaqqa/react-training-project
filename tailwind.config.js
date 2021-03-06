const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  // mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      opensans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      ...defaultTheme.colors,
      black: {
        DEFAULT: "#000",
        300: "#333",
      },
      white: {
        DEFAULT: defaultTheme.colors.white,
        100: "#ffffff1A",
        500: "#ffffff80",
        900: "#ffffffE6",
      },
      primary: {
        DEFAULT: "#093047",
        900: "#00546c",
        20:"#00546c05"
        
      },
      secondary: "#86C4EC",
      search: "#11546C",
      custom: "#86C4EC",
      h6color: "#6B6B6B",

    },
    // extend: {
    //   backgroundImage: (theme) => ({
    //     "hero-pattern": `url(${"process.env.PUBLIC_URL/images/research.jpg"})`,
    //   }),
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  extend: {
    inset: {
      "-16": "-4rem",
    },
  },
};
