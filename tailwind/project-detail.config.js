/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./project-detail.html'],
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
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #1e3a3a 0%, #2c5282 100%)',
        'gradient-accent': 'linear-gradient(135deg, #3182ce 0%, #667eea 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(102, 126, 234, 0.3)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    }
  },
  plugins: [],
}
