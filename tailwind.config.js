/* -Below line was commented out by Tailwind Setup
@type {import('tailwindcss').Config} */
/**This Export ensures Tailwind scans all React component files in the Proj-Dir */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

