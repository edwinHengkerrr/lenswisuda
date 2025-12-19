import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const [selected, setSelected] = useState(1);

  const packages = [
    {
      title: "Individual Journey",
      price: "250k",
      details: [
        "Unlimited foto sesuai paket",
        "Dapat semua file foto",
        "Resolusi Tinggi",
        "1 Wisudawan dengan pasangan, teman maupun keluarga",
      ],
    },
    {
      title: "Bestie Forever",
      price: "500k",
      details: [
        "2-5 Wisudawan",
        "Unlimited foto sesuai paket",
        "Dapat semua file foto",
        "Resolusi Tinggi",
      ],
    },
    {
      title: "Photo and Cinematic Video",
      price: "600k",
      details: [
        "Unlimited foto sesuai paket",
        "Dapat semua file foto",
        "Durasi Video sesuai paket",
        "1 Wisudawan dengan pasangan, teman maupun keluarga",
      ],
    },
    {
      title: "Cinematic Video",
      price: "350k",
      details: [
        "1 Wisudawan dengan pasangan, teman maupun keluarga",
        "Durasi video sesuai paket",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0f1115] text-white px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Paket Harga
        </h2>

        <div className="grid md:grid-cols-4 gap-8 relative">

          {/* Highlight Background */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute rounded-3xl border border-yellow-400 bg-yellow-400/10"
            style={{
              zIndex: 0,
              gridColumn: `${selected + 1} / span 1`,
            }}
          />

          {/* Pricing Cards */}
          {packages.map((p, index) => (
            <motion.div
              key={index}
              layout
              onClick={() => setSelected(index)}
              className={`relative p-8 bg-[#1b1e24] rounded-3xl cursor-pointer transition-all duration-300 ${
                selected === index
                  ? "shadow-[0_0_20px_rgba(255,221,0,0.4)]"
                  : "opacity-60 hover:opacity-100"
              }`}
              style={{ zIndex: 1 }}
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold text-center mb-2">
                {p.title}
              </h3>

              {/* Price */}
              <p className="text-yellow-400 text-3xl font-bold text-center mb-4">
                Start From {p.price}
              </p>

              {/* List */}
              <ul className="space-y-2 text-gray-300">
                {p.details.map((d, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-yellow-400">✔</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="mt-6 w-full py-3 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition">
                Pesan Sekarang
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
