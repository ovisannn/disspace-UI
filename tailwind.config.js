module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      lightOrange : '#FFC5A1',
      orange : '#F8A978',
      lightTeal : '#BADFDB',
      lightYellow : '#FCF9EA',
      lightGray : '#F8F8F8',
      gray : '#EEEEEE',
      grayTxt : '#989898',
      white : '#FFFFFF',
      black : '#000000',
      green : '#A5E289',
      red : '#E28989',
    },
  },
  plugins: [],
}