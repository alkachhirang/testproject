/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Bgblur': "url('./assets/images/png/hero-blur-img.png')",
      },

      backgroundSize: {
        'bgsize': "100% 100%"
      },
    },
  },
  plugins: [],
}
