/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      // Change these to restyle the whole site.
      colors: {
        navy: {
          DEFAULT: "#0A192F",
          light: "#112240",
          lighter: "#1C355A",
        },
        slate: {
          muted: "#495670",
          DEFAULT: "#8892B0",
          light: "#A8B2D1",
          lightest: "#CCD6F6",
        },
        accent: "#64FFDA",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
