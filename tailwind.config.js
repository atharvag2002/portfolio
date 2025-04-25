/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Add tsx if using TypeScript
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D1D1D",        // grey
        background: "#581845",     // purple
        textLight: "#f1f5f9",      // light grey
        accent: "#facc15",         // yellow 
        offwhite: "#f1f3f5",       
        offftext: "#fdf6e3",       // light off-white
        navyellow: "#2C3539",      // navy grey
        offyellow: "#b2a89f",      // grey shade of button
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
