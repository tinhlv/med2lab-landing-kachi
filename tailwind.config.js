module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
    colors: {
      'primary': '#1dc7d1',
      'secondary': '#212121',
      'white': '#fff'
    },
  },
  plugins: [],
  variants: {
    fontFamily: ['roboto']
  }
}