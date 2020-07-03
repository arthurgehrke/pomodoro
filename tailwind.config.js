const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [require('@tailwindcss/ui')({ layout: 'sidebar' })],
  purge: {
    content: ['./src/**/*.tsx', './src/**/*.jsx'],
    enabled: IS_PRODUCTION,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
