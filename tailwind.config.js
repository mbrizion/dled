import colors from './src/styles/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xl2: '1400px',
      },
      colors: colors,
      animation: {
        pulseSlow: 'pulseSlow 3s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        pulseReverse:
          'pulse-reverse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        rosarivo: ['Rosarivo'],
        aboreto: ['Aboreto'],
        league: ['"League Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
