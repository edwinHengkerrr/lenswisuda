import React from "react";
import { Instagram, Phone, Mail, MapPin, MessageCircle, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">GaweMomen</h2>
          <p className="text-sm">
            Dokumentasi profesional — Wisuda, Wedding, Engagement, Event, dan lainnya.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">Tentang Kami</a></li>
            <li><a href="#portfolio" className="hover:text-yellow-400">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Kontak</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>

          {/* WA */}
          <a
            href="https://wa.me/6285182517587"
            target="_blank"
            className="flex items-center gap-3 mb-3 hover:text-yellow-400 transition"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            <span>0851 8251 7587</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/gawemomen"
            target="_blank"
            className="flex items-center gap-3 mb-3 hover:text-yellow-400 transition"
          >
            <Instagram className="w-5 h-5 text-pink-400" />
            <span>@gawemomen</span>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@gawemomen"
            target="_blank"
            className="flex items-center gap-3 mb-3 hover:text-yellow-400 transition"
          >
            <Music2 className="w-5 h-5 text-white" />
            <span>@gawemomen</span>
          </a>

          <p className="text-sm mt-4 flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Malang, Indonesia
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} GaweMomen — All Rights Reserved.
      </div>
    </footer>
  );
}
