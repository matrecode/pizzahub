/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",  
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px",
       
      },

      maxWidth:{
        container:"1440px",
        contentContainer:"1220px",
        containerSmall:"1024px",
        containerXs:"768px",
      },
      fontFamily : {
        bodyFont: ['Montserrat', "sans-serif"],
        titleFont:['Inter', "sans-serif"]
      },
      colors:{
        bodyColor:"#D7D7D7",
        textYellow:"#FFC529",
        textLight:"#495057",
        textDark:"#272D2F",
        hoverColor:"#FE724C",
        textWhite:"#FFFFFF"
      }
    },
  },
  plugins: [],
}
