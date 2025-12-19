import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      img: "/img/testimonibro/testimoni1.jpg",
      text: "Aaaaa bagus semuaaaa",
      name: "Clara UMM",
    },
    {
      img: "/img/testimonibro/testimoni2.jpg",
      text: "Bingung mau pilih yang mana, hasilnya sesuai ekspektasi semua",
      name: "Hani Stikes",
    },
    {
      img: "/img/testimonibro/testimoni3.jpg",
      text: "Aku pilihin dulu ya karena semua bagus",
      name: "Narulita UM",
    },
    {
      img: "/img/testimonibro/testimoni4.jpg",
      text: "Ihh lucu banget. Sukakkk",
      name: "Aisyah Unitri",
    },
  ];

  return (
    <section id="testimonial" className="py-20 bg-[#0f1115] px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Testimoni Klien
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1b1e24] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <p className="text-gray-300 text-sm italic">
                  "{item.text}"
                </p>
                <p className="mt-3 text-yellow-400 font-semibold text-sm">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
