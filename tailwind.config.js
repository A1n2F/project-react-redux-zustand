/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './src/**/*.tsx',
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require("tailwind-scrollbar")
    ],
  }
  