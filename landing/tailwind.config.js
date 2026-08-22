/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#10b981',
          forest: '#047857',
          deepForest: '#064e3b',
          mint: '#34d399',
          mintLight: '#a7f3d0',
          darkBg: '#061e14',
          darkCard: '#11422e',
          darkBorder: '#1b5e43',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        stylized: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(16, 185, 129, 0.05)',
        'card-hover': '0 12px 30px rgba(16, 185, 129, 0.15)',
        'card-dark': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'card-dark-hover': '0 12px 30px rgba(52, 211, 153, 0.2)',
      }
    },
  },
  plugins: [],
}
