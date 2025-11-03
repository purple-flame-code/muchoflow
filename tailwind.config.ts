/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#0F172A',
        'burnt-gold': '#FBBF24', // amarillo cálido
        'zinc-50': '#FAFAFA',
        'zinc-100': '#F4F4F5',
        'yellow-400': '#FACC15',
        'yellow-500': '#FBBF24',
        'yellow-600': '#D97706',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
