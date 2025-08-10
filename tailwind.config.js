/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090a0f", // deeper charcoal/black
        ink2: "#0e1018", // card bg
        gold: "#e6b35c", // warmer gold accent
        stone: "#cfd2dc", // muted gray text
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        wideplus: "0.06em",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,.35)",
        glow: "0 0 0 1px rgba(230,179,92,.25), 0 10px 30px rgba(230,179,92,.08)",
      },
      maxWidth: {
        "7xl": "88rem",
      },
    },
  },
  plugins: [],
};
