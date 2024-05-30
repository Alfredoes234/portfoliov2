/** @type {import('postcss-load-config').Config} */
import cssnanoPlugin from 'cssnano';

const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnanoPlugin: {
      preset: 'advanced'
    }
  },
};

export default config;
