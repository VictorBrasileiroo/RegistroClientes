/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        bgPrimaryLight : '#F2F2F6',
        bgPrimaryDark : '#2B2B2B',
        grayPrimary : "#DEDEE3",
        grayText : "#7D7D83",
        bgGreen : "#34A853"
      },
      fontFamily : {
        golos : "Golos Text",
        inter : "Inter"
      }
    },
  },
  plugins: [],
}

