/** @type {import('postcss-load-config').Config} */

const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: { preset: 'cssnano-preset-advanced', discardComments: false } } : {})
  },
};

export default config;
