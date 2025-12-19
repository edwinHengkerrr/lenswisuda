import React, { useState } from "react";

export default function Contact() {
  // Nomor WhatsApp (tanpa +)
  const WA_NUMBER = "6285182517587";

  const [name, setName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [message, setMessage] = useState("");

  function openWhatsapp(text) {
    const encodedText = encodeURIComponent(text);

    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const url = isMobile
      ? `https://wa.me/${WA_NUMBER}?text=${encodedText}`
      : `https://web.whatsapp.com/send?phone=${WA_NUMBER}&text=${encodedText}`;

    window.open(url, "_blank");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const text =
      `Halo, saya ${name || "-"}` + "\n\n" +
      `Saya ingin booking sesi foto wisuda.` + "\n\n" +
      `Tanggal acara: ${eventDate || "-"}` + "\n" +
      `Pesan: ${message || "-"}` + "\n\n" +
      `Mohon info paket dan ketersediaan.`;

    openWhatsapp(text);
  }

  return (
    <section
      id="contact"
      className="py-20 bg-[#0b0c0e] text-white px-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-4xl font-bold text-center mb-14">
        Kontak & Booking
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Hubungi Kami</h3>
          <p className="text-gray-300 mb-6">
            Mau booking sesi foto wisuda? Isi form di samping atau klik tombol WhatsApp di bawah.
          </p>

          <button
            onClick={() =>
              openWhatsapp("Halo kak, saya mau tanya tentang paket foto wisuda")
            }
            className="bg-green-500 hover:bg-green-400 px-6 py-3 rounded-lg font-semibold"
          >
            Chat via WhatsApp
          </button>

          <p className="text-gray-400 text-sm mt-6">
            <strong>Nomor WA:</strong> +{WA_NUMBER} <br />
            <strong>Jam Balasan:</strong> 09:00 – 22:00
          </p>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-gray-300">Nama</label>
              <input
                type="text"
                placeholder="Nama lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 p-3 rounded-lg bg-[#0f1115] border border-white/10"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Tanggal Acara</label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full mt-2 p-3 rounded-lg bg-[#0f1115] border border-white/10"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Pesan / Keterangan</label>
              <textarea
                placeholder="Contoh: lokasi, jam, paket foto, jumlah orang…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-2 p-3 rounded-lg bg-[#0f1115] border border-white/10 h-28 resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
              >
                Kirim via WhatsApp
              </button>

              <button
                type="button"
                onClick={() => {
                  setName("");
                  setEventDate("");
                  setMessage("");
                }}
                className="px-6 py-3 rounded-lg border border-white/10 text-gray-300"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
