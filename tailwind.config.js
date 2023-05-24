/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/routes/**/*.{svelte,js,ts}'],  
  theme: {
    colors: {
      // milk: '#F8F8F8',
      milk:'#f3f1ed',
      midnight: '#1F1F1F',
      main:'#7a736d'
    },

    extend: {},
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('@tailwindcss/aspect-ratio')],
  daisyui: {
      // themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    themes: ["light"],
    },
}

