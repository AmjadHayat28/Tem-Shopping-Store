/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#de2c4d",
        secondary:"#fb923c",
      },
      fontFamily:{
     poppins:["poppins","sans-serif"],
     averia:["Averia Serif Libre","serif"],
      },

     container:{
      center:true,
      padding:{
        default:"1rem",
        sm:"2rem",
        md:"4rem",
        lg:"5rem",
        "2xl":"6rem",
      }
     }

    },
  },
  plugins: [],
}

