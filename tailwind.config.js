/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // "body" for standard text (Inter)
        body: ['var(--font-inter)', 'sans-serif'],
        // "display" for aggressive headers (Oswald)
        display: ['var(--font-oswald)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};