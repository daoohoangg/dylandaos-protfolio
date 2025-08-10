/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // quét toàn bộ file Vue/JS/TS
  ],
  theme: {
    extend: {
      screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1100px',
      '2xl': '1200px', // đổi breakpoint 2xl
      '3xl': '2420px', // breakpoint mới
      },
    },
  },
  plugins: [],
}
