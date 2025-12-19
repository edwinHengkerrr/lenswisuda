import React from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const testimonials = [
    {
      text: "Awalnya nggak pede foto, tapi Masnya bener-bener ngarahin dari awal sampai akhir. Pose nggak ribet, hasilnya kelihatan natural dan rapi. Nggak nyesel sama sekali pilih fotografer ini.",
      name: "Christina Unitri",
    },
    {
      text: "Saya bukan tipe yang bisa pose, tapi diarahkan pelan-pelan sampai jadi. Fotografernya sabar dan tahu angle terbaik. Hasil fotonya jauh di atas ekspektasi.",
      name: "Widy Universitas Brawijaya",
    },
    {
      text: "Pelayanannya profesional, komunikasinya enak, dan hasil fotonya konsisten bagus. Bukan cuma jepret, tapi benar-benar dipikirkan.",
      name: "Alfi UIN Malang",
    },
    {
      text: "Prosesnya santai tapi terarah. Fotografernya tahu harus ngapain, jadi kami tinggal ikuti. Hasilnya rapi dan kelihatan profesional.",
      name: "Elza Ma Chung",
    },
    {
      text: "Kalau mau foto wisuda tanpa ribet dan hasilnya tetap bagus, ini pilihan yang tepat. Fotografernya paham kebutuhan klien.",
      name: "Dita Polinema",
    },
    {
      text: "Hasil fotonya bagus dan bisa dipilih sesuai selera. Pelayanannya juga ramah dan gampang dipahami, jadi nggak mati gaya.",
      name: "Mia UM",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#0f1115] text-white px-5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Apa Kata Klien?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#1b1e24] p-6 rounded-2xl shadow-lg"
            >
              <p className="text-gray-300 italic leading-relaxed">
                "{item.text}"
              </p>

              <p className="mt-5 font-semibold text-yellow-400">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
