/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgOne: "#f0f0f0", // Light gray
        bgTwo: "#e0e0e0", // Slightly darker gray
        bgThree: "#b3b3b3", // Medium gray
        bgFour: "#333333", // Dark gray
        bgFive: "#000000", // Pure black (navbar)
      },
      textColor: {
        textOne: "#1c1c1c", // Dark gray text
        textTwo: "#4f4f4f", // Medium gray text
      },
      animation: {
        "scale-pulse": "scalePulse 2s infinite ease-in-out",
      },
      keyframes: {
        scalePulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
