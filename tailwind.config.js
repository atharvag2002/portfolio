/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {

      
      colors: {
        primary: "#f97316",        // orange
        background: "#0a5c36",     // dark green
        textLight: "#f1f5f9",      // light grey
        accent: "#facc15",  
        offwhite: "#f1f3f5"      // yellow

        
      },
    },
  },
  plugins: [],
};
