/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts}"],
  theme: {
    extend: {
      width: {
        "img-sm": "150px",
        "img-md": "300px",
        "img-lg": "600px",
      },
      height: {
        "img-sm": "150px",
        "img-md": "300px",
        "img-lg": "600px",
      },
    },
  },
  plugins: [],
};
