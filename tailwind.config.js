module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1580px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      primary: ["Exo", "sans-serif"],
      secondary: ["Lato", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('../images/hero2.jpg')",
        feature: "url('../images/feature.jpg')",
        testimony: "url('../images/squares.svg')",
      },
      colors: {
        orange: "#ff6d6d",
        "light-orange": "#ff8a8a",
        blue: "#323969",
        grey: "#f6f5f3",
        "play-btn": "#8185a3",
      },
      fontSize: {
        sm: "16px",
      },
      width: {
        18: "72px",
      },
    },
  },
  plugins: [],
};
