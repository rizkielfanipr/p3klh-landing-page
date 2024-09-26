/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        // Anda bisa menambahkan lebih banyak font di sini jika perlu
      },
      borderRadius: {
        'custom-lg': '32px',  // Menambahkan ukuran border radius kustom
        'custom-xl': '80px',  // Menambahkan ukuran border radius kustom lainnya
      },
    },
  },
  plugins: [],
}
