/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'farm-peat': '#36634B',
        'farm-sprout': '#7AA65A',
        'farm-cream': '#FEF7E4',
        'farm-clay': '#C96E4B',
        'farm-stone': '#D9C5B3',
        'farm-charcoal': '#2E3F2F',
        'farm-moss': '#5F8B6B',
        'dark-bg': '#1F2A1E',
        'dark-card': '#2C3A2A',
        'dark-surface': '#364433',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'alt': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: [],
}
