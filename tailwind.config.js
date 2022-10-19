/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  purge: {
    enabled: true,
    content: ["./src/**/*.tsx"],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      "glare-ef": "url('../public/glare.png')",
    },
    typography: (theme) => ({}),
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
          },
        },
      }),
    },
  },
  variants: {
    variants: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
