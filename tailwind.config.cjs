/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      mantra: ["Mantra", "system-ui"],
    },
    screens: {
      md: "950px",
      lg: "1800px"
    },
    extend: {},
  },
  plugins: [],
};
