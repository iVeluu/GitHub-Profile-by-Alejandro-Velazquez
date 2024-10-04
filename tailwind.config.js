/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/hero-image-github-profile.png')",
      },
      colors: {
        primary: "#20293A",
        colorTxt: "#CDD5E0",
      },
      flexBasis: {
        "1/10": "10%",
      },
      fontFamily: {
        vietnam: ['"Be Vietnam Pro"', "sans-serif"], 
      },
    },
  },
  plugins: [],
};

