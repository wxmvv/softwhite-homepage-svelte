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
  plugins: [require('daisyui')],
}

