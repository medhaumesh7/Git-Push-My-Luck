/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nayan-dark': '#0a0a0a',
        'nayan-highlight': '#00ff88',
        'nayan-warning': '#ff6b6b',
        'nayan-primary': '#4a90d9',
      },
      spacing: {
        'button-lg': '120px',
        'button-xl': '160px',
      },
      fontSize: {
        'display': '4rem',
      },
    },
  },
  plugins: [],
}
