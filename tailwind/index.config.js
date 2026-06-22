/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1e3a3a',
        secondary: '#2c5282',
        light: '#f8f6f0',
        dark: '#1a1a2e',
        accent: '#3182ce',
        'gradient-start': '#667eea',
        'gradient-end': '#764ba2',
        'game-red': '#c0392b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(102, 126, 234, 0.5)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #1e3a3a 0%, #2c5282 100%)',
        'gradient-accent': 'linear-gradient(135deg, #3182ce 0%, #667eea 100%)',
      }
    }
  },
  plugins: [],
}
