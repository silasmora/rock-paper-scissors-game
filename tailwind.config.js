/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow Semi Condensed', 'sans-serif']
      },
      colors: {
        'dark': 'hsl(229, 25%, 31%)',
        'score': 'hsl(229, 64%, 46%)',
        'header': 'hsl(217, 16%, 45%)',
  
        /*Gradient colors*/
        scissorsPrimary: 'hsl(39, 89%, 49%)',
        scissorsSecondary: 'hsl(40, 84%, 53%)',

        paperPrimary: 'hsl(230, 89%, 62%)',
        paperSecondary: 'hsl(230, 89%, 65%)',

        rockPrimary: 'hsl(349, 71%, 52%)',
        rockSecondary: 'hsl(349, 70%, 56%)',

        radialPrimary: 'hsl(214, 47%, 23%)',
        radialSecondary: 'hsl(237, 49%, 15%)',

      }
    },
  },
  plugins: [],
}

