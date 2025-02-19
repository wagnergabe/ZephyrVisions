/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        }
      },
      colors: {
        "logo-blue": "#07C0EA",
      },
      animation: {
        float: 'float 2s ease-in-out infinite', 
        slideDown: 'slideDown 0.5s ease-in-out'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'], // Example: Roboto
        'poppins': ['Poppins', 'sans-serif'], // Example: Poppins
        'space-mono': ['Space Mono', 'monospace'], // Example: Space Mono
      }
    },
    backgroundImage: {
      'parallax': 'url("../src/assets/frozen-red.jpg")'
    }
  },
  plugins: [require('tailwindcss-motion')],
}