/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-hide': {
            /* Hide scrollbar for Webkit browsers */
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            /* Hide scrollbar for IE, Edge, and Firefox */
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none'
          }
        },
        ['responsive', 'hover']
      )
    }
  ]
}
