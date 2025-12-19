// ← tetap dipertahankan seperti punyamu
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { 
    extend: {} 
  },
  plugins: [],
};

// ← versi tambahan untuk memastikan Tailwind pakai darkMode
// (Tidak mengganti versi di atas, hanya menambahkan seperti permintaan)
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { 
    extend: {} 
  },
  plugins: [],
};
