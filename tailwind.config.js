
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'inherit': 'inherit',
      'transparent': 'transparent',
      'white': 'var(--white)',
      'black': 'var(--black)',
      'gray-opacity-1': 'var(--gray-opacity-1)',
      'gray-opacity-2': 'var(--gray-opacity-2)',
      'gray-opacity-3': 'var(--gray-opacity-3)',
      'gray-opacity-4': 'var(--gray-opacity-4)',
      'gray-opacity-5': 'var(--gray-opacity-5)',
      'primary': 'var(--primary)',
      'darkprimary': 'var(--darkprimary)',
      'blackprimary': 'var(--blackprimary)',
      'secondary': 'var(--secondary)',
      'complementary': 'var(--complementary)',
      'tertiary': 'var(--tertiary)',
      'blue': 'var(--blue)',
      'green': 'var(--green)',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
          DEFAULT: '1286px',
      },
    },
    fontSize: {
      xs:   ['9px'],
      sm:   ['12px', { lineHeight: '15px', }],
      base: ['15px', { lineHeight: '20px', }],
      lg:   ['20px', { lineHeight: '22px', }],
    },
    extend: {
      borderRadius: {
        'sm-plus': '0.1875rem'
      },
      boxShadow: {
        'md-plus': '0px -2px 10px var(--gray-opacity-2);',
      },
      lineHeight: {
        '6.5': '1.625rem'
      },
      spacing: {
        '1.25': '0.3125rem',
        '3.75': '0.9375rem',
        '7.5': '1.875rem',
        '26': '6.5rem'
      }
    },
  },
  plugins: [],
}
