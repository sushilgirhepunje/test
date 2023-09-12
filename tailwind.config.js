/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     // Or if using `src` directory:
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner':'url(./src/components/banner.jpg)'
      }
    },
  },
  plugins: [],
}

