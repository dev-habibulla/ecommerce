/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#A435F0',
        mainHover: '#ae4eed',
      },
    },
  },
  plugins: [],
}

