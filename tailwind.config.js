module.exports = {
  content: ["./src/components/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        customBgColorHSL: "rgb(8 84 132)", 
        customBgColorHex: "#fcf2cc", 
        customBgColor: "#fffae6",
      },
    },
  },
  plugins: [],
};
