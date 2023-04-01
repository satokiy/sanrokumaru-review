/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        svelte: {
          DEFAULT: '#ff3e00',
          light: '#ff8800',
        }
      },
    },
  },
  purge: [
    './src/**/index.html',
    './src/**/*.{svelte,js,ts}',
  ],
  plugins: [],
}

