import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontSize: {
      //   base: '1.25rem',
      //   sm: '1.5rem',
      //   lg: '1.75rem',
      //   '4xl': '4rem',
      //   '2xl': '2.875rem',
      // },
      colors: {
        primary: {
          DEFAULT: '#1f3d5c',
          50: '#2D313A',
          100: '#6f7d93',
          200: '#697485',
          300: '#FAFAFA',
          350: '#181A2E',

          400: '#344054',
          500: '#303864',
          600: '#1f3d5c',
          650: '#F2F4F7',
          700: '#336699',
          750: '#172E45',
        },

        // body: {
        //   DEFAULT: '#314564',
        // },
        // tint: {
        //   DEFAULT: 'rgba(0, 0, 0, 0.1)',
        //   50: '#EFF7FF',
        //   100: '#D0D5DD',
        //   200: '#EAECF0',
        //   300: '#667085',
        //   400: '#344054',
        // },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',

          sm: '0rem',
          lg: '0rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '840px',
          md: '968px',
          lg: '1050px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
};

export default config;
