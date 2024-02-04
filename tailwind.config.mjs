/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSamll: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColorDark: "#0A192F",
        bodyColorLight: "##F9FAFB",
        orange: "#ff843f",
        textLight: "#EAEDF7",
        textDark: "#525356",
        hoverColor: "rgba(100, 255, 218, 0.1)",
      },
    },
  },
  plugins: [],
};
