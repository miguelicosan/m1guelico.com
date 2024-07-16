/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1f2937', // Gris oscuro
        'secondary': '#0097B2', // Azul
        'accent': '#1c1c1e', // Negro
        'background': '#f5f5f5', // Gris claro
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      transitionProperty: {
        'max-height': 'max-height',
      }
    },
  },
  plugins: [],
}
