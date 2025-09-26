/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Add tsx if using TypeScript
  ],
  theme: {
    extend: {
      colors: {
  primary: "#1D1D1D",      // very dark gray / near black
  background: "#581845",   // deep purple / maroonish
  textLight: "#f1f5f9",    // very light gray / almost white
  accent: "#facc15",       // bright yellow
  offwhite: "#f1f3f5",     // soft off-white / light gray
  offftext: "#fdf6e3",     // warm off-white / cream
  navyellow: "#2C3539",    // dark slate gray / navy gray
  offyellow: "#b2a89f",    // muted yellowish-brown / warm gray
},
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        logo: ['"lobster"', 'rajdhani'],
        
      },
    },
  },
  plugins: [],

  
};
