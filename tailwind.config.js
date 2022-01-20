module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rale: ['Raleway'],
      },
      colors: {
        cream: {
          100: '#F3C5C5',
          200: '#C1A3A3',
          300: '#886F6F',
          400: '#694E4E',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
