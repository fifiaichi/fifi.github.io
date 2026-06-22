/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./animation-list.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1e3a3a',
        light: '#f8f6f0',
        dark: '#1a1a2e',
        'gradient-start': '#667eea',
        'gradient-end': '#764ba2',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: [],
}
