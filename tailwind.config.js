module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'c-text': 'var(--text)',
        'c-bg-primary': 'var(--backgroundPrimary)',
        'c-bg-secondary': 'var(--backgroundSecondary)',
        'c-bg-tertiary': 'var(--backgroundTertirary)',
        'c-primary': 'var(--primary)',
        'c-secondary': 'var(--secondary)',
        'c-success': 'var(--success)',
        'c-danger': 'var(--danger)',
        'c-warning': 'var(--warning)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
