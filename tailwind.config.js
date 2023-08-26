/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ForestGreen: {
          100: "#93A891",
          300: "#468442",
          500: "#286C23",
          700: "#164712",
          900: "#0C2B0A",
        },
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "sliding-left": "slideLeft 40s linear infinite",
        "sliding-right": "slideRight 40s linear infinite",
      },
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
      ...breakpoints(theme("screens")),
    }),
  },
  plugins: [],
};
