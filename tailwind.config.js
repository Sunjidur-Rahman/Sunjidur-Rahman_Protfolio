/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      keyframes: {
        gradientMoveFromLeft: {
          '0%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        gradientMoveFromRight: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-move-from-l': 'gradientMoveFromLeft 3s ease forwards',
        'gradient-move-from-r': 'gradientMoveFromRight 3s ease forwards',
      },
    },
  },
  plugins: [], 
};
