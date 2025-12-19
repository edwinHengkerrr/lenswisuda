import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-[#0f1115] text-white px-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* TITLE */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Tentang Kami</h2>

        {/* TEKS UTAMA */}
        <h3 className="text-3xl font-extrabold text-yellow-400 mb-6">
          SETIAP KLIK PUNYA CERITA
        </h3>

        <p className="text-gray-300 text-lg mb-4">
          Selama lebih dari satu tahun, kami telah mengabadikan kenangan indah Anda.
          Sejak berdiri pada tahun 2023, kami telah menjadi pilihan utama bagi mereka
          yang ingin mengabadikan kenangan indah dalam bentuk foto berkualitas tinggi.
          Dengan pengalaman dan keahlian yang kami miliki, kami siap membantu Anda
          mengabadikan momen-momen spesial seperti wisuda, engagement, wedding,
          birthday party, family gathering, dan lain-lain.
        </p>

        {/* TEKS TAMBAHAN (TIDAK CAPS) */}
        <p className="text-yellow-400 font-semibold text-lg">
          ________________________________________________________________________
        </p>
      </div>

      {/* 🔥 FOUNDER CARDS */}
      <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        
        {/* CARD 1 */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer w-full max-w-sm mx-auto"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <img
            src="/img/F1.jpg"
            className="w-full h-[480px] object-cover brightness-90 group-hover:scale-110 transition duration-700"
            alt="Founder"
          />

          {/* Overlay Nama */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <h3 className="text-2xl font-bold text-yellow-400 drop-shadow-lg">
              Yusron — Founder
            </h3>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer w-full max-w-sm mx-auto"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <img
            src="/img/F2.jpg"
            className="w-full h-[480px] object-cover brightness-90 group-hover:scale-110 transition duration-700"
            alt="Founder"
          />

          {/* Overlay Nama */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <h3 className="text-2xl font-bold text-yellow-400 drop-shadow-lg">
              Partner — Co-Founder
            </h3>
          </div>
        </div>
      </div>

      {/* ⭐ INFO SECTION */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-12">

        {/* BOX 1 */}
        <div
          className="bg-[#1a1d24] p-8 rounded-2xl shadow-lg border border-white/10"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Mengapa Memilih Kami?
          </h3>
          <ul className="text-gray-300 space-y-3">
            <li>• Fotografer berpengalaman dengan kemampuan teknis tinggi</li>
            <li>• Paket fleksibel sesuai kebutuhan Anda</li>
            <li>• Harga kompetitif & transparan</li>
            <li>• Pose diarahkan oleh Fotografer Professional</li>
          </ul>
        </div>

        {/* BOX 2 */}
        <div
          className="bg-[#1a1d24] p-8 rounded-2xl shadow-lg border border-white/10"
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Layanan Kami
          </h3>
          <ul className="text-gray-300 space-y-3">
            <li>• Fotografi Wisuda</li>
            <li>• Fotografi Engagement</li>
            <li>• Fotografi Wedding</li>
            <li>• Fotografi Birthday</li>
            <li>• Fotografi Family Gathering</li>
            <li>• Dan lain-lain</li>
          </ul>
        </div>

        {/* BOX 3 */}
        <div
          className="bg-[#1a1d24] p-8 rounded-2xl shadow-lg border border-white/10"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Bagaimana Kami Bekerja
          </h3>
          <ol className="text-gray-300 space-y-3 list-decimal ml-5">
            <li>Konsultasi awal membahas kebutuhan & konsep foto</li>
            <li>Pemotretan sesuai jadwal</li>
            <li>Pengeditan foto untuk hasil sempurna</li>
            <li>Pengiriman foto digital / cetak sesuai permintaan</li>
          </ol>
        </div>

      </div>
    </section>
  );
}
