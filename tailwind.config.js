/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "#efefff",
        primaryLightHover: "#e6e7ff",
        primaryLightActive: "#cccdff",
        primaryNormal: "#5a5dff",
        primaryNormalActive: "#484acc",
        primaryDark: "#4446bf",
        primaryDarkHover: "#363899",
        primaryDarkActive: "#282a73",
        primaryDarker: "#1f2159",
        secondLight: "#e7ebf3",
        secondLightHover: "#dbe1ed",
        secondLightActive: "#b5c1d9",
        secondNormal: "#103784",
        secondNormalHover: "#0e3277",
        secondNormalActive: "#0d2c6a",
        secondDark: "#0c2963",
        secondDarkHover: "#0a214f",
        secondDarkActive: "#07193b",
        secondDarker: "#06132e",
        netralLight: "#e9e9e9",
        netralLightHover: "#dddddd",
        netralLightActive: "#b9b9b9",
        netralNormal: "#1e1e1e",
        netralNormalHover: "#1b1b1b",
        netralNormalActive: "#181818",
        netralDark: "#171717",
        netralDarkHover: "#121212",
        netralDarkActive: "#0d0d0d",
        netralDarker: "#0b0b0b",
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
      padding: {
        normal: "20px"
      },
      margin: {
        normal: "25px"
      },
    },
  },
  plugins: [],
};