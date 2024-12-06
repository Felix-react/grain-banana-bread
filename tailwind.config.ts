/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        Poppins:["var(--font-Poppins)"],
      },
    },
  },
  darkMode: "",
  plugins: [],
}
