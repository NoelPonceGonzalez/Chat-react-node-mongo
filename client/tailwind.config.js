/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#F5F5F5',
          text: '#1E2022',
          accent2: '#99AABB'
        },
        dark: {
          primary: '#1E2022', 
          text: '#F5F5F5',
          accent2: '#1E2022'
        },
      },
    },
  },
  plugins: [],
}