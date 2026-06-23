/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 1. Definisikan pergerakan (keyframes) di sini
      keyframes: {
        putarOrbSatu: {
          '0%, 100%': { transform: 'translate(-20px, -20px) scale(1)' },
          '50%': { transform: 'translate(20px, 20px) scale(1.2)' },
        },
        putarOrbDua: {
          '0%, 100%': { transform: 'translate(15px, -15px) scale(1.1)' },
          '50%': { transform: 'translate(-15px, 15px) scale(0.9)' },
        },
      },
      // 2. Buat nama class utility-nya di sini
      animation: {
        'orb-satu': 'putarOrbSatu 8s ease-in-out infinite',
        'orb-dua': 'putarOrbDua 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}