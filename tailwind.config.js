/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      backgroundColor:{
        skin:{
          'base': 'var(--main-background)',
          'screen': 'var(--calc-screen-background)',
          'keys-and-toggle': 'var(--key-and-toggle-background)',
          'function-key':'var(--function-key-background)',
          'function-key-hover':'var(--function-key-hover)',
          'equal-key': 'var(--equal-key-and-background-toggle)',
          'equal-key-hover': 'var( --equal-key-hover)',
          'key': 'var(--key-background)',
          'key-hover': 'var(--key-hover)', 
        }
      },
      textColor:{
        skin:{
          'base': 'var(--base-text)',
          'key-base':'var(--key-color-text)',
          'equal-key': 'var( --equal-key-text)',

        }
      }
    },
  },
  plugins: [],
}

