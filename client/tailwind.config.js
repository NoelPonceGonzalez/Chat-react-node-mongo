/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#3498db',
          text: '#1E2022', 
        },
        dark: {
          primary: '#1E2022', 
          text: '#F5F5F5', 
        },
      },
    },
  },
  plugins: [],
}