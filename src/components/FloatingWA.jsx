import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWA() {
  const WA_NUMBER = "6285182517587"; // ganti nomor kamu

  // Pesan otomatis HARUS di-encode supaya muncul di WA
  const defaultMessage = encodeURIComponent(
    "Halo kak, saya mau tanya tentang paket foto wisuda."
  );

  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${defaultMessage}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-xl z-50 transition"
    >
      <MessageCircle size={28} />
    </a>
  );
}
