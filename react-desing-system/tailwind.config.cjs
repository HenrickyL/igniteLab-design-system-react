/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontSize:{
        xs:14,
        sm:16,
        md:18,
        lg:20,
        xl:24,
        '2xl':32
      },
      colors:{
        'gray-800': '#202024',
        'gray-400': '#7c7c8a',
        'gray-100': '#e1e1e6',
        'gray-900': '#121214',
        'gray-200': '#c4c4cc',
        'cyan-500': '#81d8f7',
        'cyan-300': '#98e1f8',
      },
      fontFamily: {
        sans: "Inter, sans-serif"
      }
    },
  },
  plugins: [],
}
