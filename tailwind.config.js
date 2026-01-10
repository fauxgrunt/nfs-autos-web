/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // "sans" will now use Jakarta (Clean Body Text)
        sans: ['var(--font-jakarta)', 'sans-serif'],
        // "header" will now use Outfit (Sleek Headings)
        header: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};