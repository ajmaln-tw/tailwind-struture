/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Path to your files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007bff", // Custom primary color
        secondary: "#EFECEC" // Custom secondary color
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Custom sans font
        serif: ["Merriweather", "serif"] // Custom serif font
      },
      brightness: ["hover"],
      cursor: ["hover"],
      screens: {
        sm: "550px",
        md: "800px",
        lg: "1200px",
        xl: "1440px"
      },
      spacing: {
        5: "3.5rem"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
  ],
  darkMode: "class" // Enable dark mode (class-based)
};
