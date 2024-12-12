/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#93C5FD', // Azul claro
          DEFAULT: '#20618D', // Azul principal
          dark: '#1E3A8A', // Azul oscuro
        },
        secondary: {
          light: '#FDE68A', // Amarillo claro
          DEFAULT: '#FBBF24', // Amarillo principal
          dark: '#92400E', // Amarillo oscuro
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
