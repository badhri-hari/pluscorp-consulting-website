import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
import daisyui from "daisyui";
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(15px)",
      },
      backgroundColor: {
        glass: "rgba(255, 255, 255, 0.25)",
      },
      borderColor: {
        glass: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [addVariablesForColors, nextui(), daisyui],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
