/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        base: {
          color: "var(--base-color)",
          secondaryColor: "var(--base-secondary-color)",
        },
      },
      fontFamily: {
        menu: ["Inter", "sans-serif"],
      },
      fontSize: {
        title: "2.6rem",
        semiTitle: "2.2rem",
        semi: "1.8rem",
        mid: "1.4rem",
        paragraph: "1.2rem",
        sub: "1rem",
      },
      textColor: {
        base: {
          text: "var(--base-text)",
          textRev: "var(--base-text-rev)",
          textHover: "var(--base-text-hover)",
        },
      },
      borderColor: {
        base: {
          border: "var(--base-border)",
          borderColored: "var(--base-border-colored)",
        },
      },
      backgroundImage: {
        pattern: "url('/src/assets/bg1.png')",
      },
    },
  },
  plugins: [],
};
