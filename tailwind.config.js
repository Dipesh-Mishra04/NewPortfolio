/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        classyBlue: '#1e293b', // dark slate blue
        classyPurple: '#7c3aed', // violet
        classyPink: '#ec4899', // rose pink
        classyGrayLight: '#f3f4f6', // light gray
        classyGrayDark: '#374151', // dark gray
      },
      backgroundImage: {
        'classy-gradient': 'linear-gradient(135deg, #1e293b 0%, #7c3aed 100%)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease forwards',
        fadeInLeft: 'fadeInLeft 0.8s ease forwards',
        fadeInRight: 'fadeInRight 0.8s ease forwards',
      },
    },
  },
  plugins: [],
}
