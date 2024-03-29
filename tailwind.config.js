const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        coiny: ['Coiny', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-purple': 'var(--clr-purple)',
        'brand-pink': 'var(--clr-pink)',
        'brand-yellow': 'var(--clr-yellow)',
        'brand-blue': 'var(--clr-blue)',
        'brand-green': 'var(--clr-green)',
        'brand-light': 'var(--clr-light)',
        'brand-background': 'var(--clr-background)',
        popupsbg: colors.white,
        neutral: colors.slate,
        primary: colors.indigo,
        primarytxt: colors.white,
        warning: colors.yellow,
        warningtxt: colors.black,
        error: colors.red,
        errortxt: colors.white,
      },
      animation: {
        'pulse-slow': 'pulse 10s linear infinite'
      }
    }
  },
  plugins: []
}
