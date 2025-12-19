import React, { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4); // semakin kecil = semakin halus
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-5 overflow-hidden"
      data-aos="fade-down"
      data-aos-duration="1200"
    >
      {/* BACKGROUND PARALLAX */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('/img/bckg2.jpg')",
          transform: `translateY(${offset}px) scale(1.05)`,
          transition: "transform 0.1s linear",
        }}
      />

      {/* OVERLAY GELAP */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 px-6 max-w-3xl">
  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
    Spesial Foto 
    <span className="block text-yellow-400">
      Wisuda Outdoor
    </span>
  </h1>

  {/* INFO UTAMA */}
<div className="my-3 text-center">
  <p className="text-xl md:text-2xl font-extrabold tracking-wide uppercase text-white">
    Sudah Hadir di
  </p>

  <div className="flex justify-center gap-6 mt-2">
    <span className="text-yellow-400 text-2xl md:text-3xl font-extrabold">
      +9 Kota
    </span>
    <span className="text-yellow-400 text-2xl md:text-3xl font-extrabold">
      +98 Universitas
    </span>
  </div>

  {/* BADGE DP */}
  <div className="mt-2 flex justify-center">
    <span
      className="
        px-5 py-1.5
        text-xl md:text-2xl
        font-extrabold uppercase
        text-black
        bg-yellow-400
        rounded-xl
        shadow-md
      "
    >
      DP Cuman 50K
    </span>
  </div>
</div>




  <p className="text-gray-300 text-lg md:text-xl mb-6">
    Mengabadikan momen terbaik wisuda Anda dengan kualitas foto premium,
    pencahayaan rapi, dan hasil siap posting.
  </p>

  <a
    href="#portfolio"
    className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-all duration-300"
  >
    Lihat Portfolio
  </a>
</div>

    </section>
  );
}
