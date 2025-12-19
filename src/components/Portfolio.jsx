import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";

export default function Portfolio() {
  // ===============================
  // DATA KATEGORI
  // ===============================
  const categories = [
    {
      title: "Personal",
      cover: "/img/personal/personal1.jpg",
      photos: [
        "/img/personal/personal1.jpg",
        "/img/personal/personal2.jpg",
        "/img/personal/personal3.jpg",
        "/img/personal/personal4.jpg",
        "/img/personal/personal5.jpg",
        "/img/personal/personal6.jpg",
        "/img/personal/personal7.jpg",
        "/img/personal/personal8.jpg",
        "/img/personal/personal9.jpg",
        "/img/personal/personal10.jpg",
      ],
    },
    {
      title: "Group",
      cover: "/img/group/group1.jpg",
      photos: [
        "/img/group/group1.jpg",
        "/img/group/group2.jpg",
        "/img/group/group3.jpg",
        "/img/group/group4.jpg",
        "/img/group/group5.jpg",
        "/img/group/group6.jpg",
        "/img/group/group7.jpg",
      ],
    },
    {
      title: "Couple",
      cover: "/img/couple/couple1.jpg",
      photos: [
        "/img/couple/couple1.jpg",
        "/img/couple/couple2.jpg",
        "/img/couple/couple3.jpg",
        "/img/couple/couple4.jpg",
        "/img/couple/couple5.jpg",
      ],
    },
    {
      title: "Bestie",
      cover: "/img/bestie/bestie1.jpg",
      photos: [
        "/img/bestie/bestie1.jpg",
        "/img/bestie/bestie2.jpg",
        "/img/bestie/bestie3.jpg",
      ],
    },
    {
      title: "Engagement",
      cover: "/img/engagement/engagement1.jpg",
      photos: [
        "/img/engagement/engagement1.jpg",
        "/img/engagement/engagement2.jpg",
        "/img/engagement/engagement3.jpg",
        "/img/engagement/engagement4.jpg",
        "/img/engagement/engagement5.jpg",
      ],
    },
    {
      title: "Birthday",
      cover: "/img/birthday/birthday1.jpg",
      photos: [
        "/img/birthday/birthday1.jpg",
        "/img/birthday/birthday2.jpg",
        "/img/birthday/birthday3.jpg",
        "/img/birthday/birthday4.jpg",
        "/img/birthday/birthday5.jpg",
      ],
    },
    {
      title: "Bride to Be",
      cover: "/img/bridetobe/bridetobe1.jpg",
      photos: [
        "/img/bridetobe/bridetobe1.jpg",
        "/img/bridetobe/bridetobe2.jpg",
        "/img/bridetobe/bridetobe3.jpg",
        "/img/bridetobe/bridetobe4.jpg",
        "/img/bridetobe/bridetobe5.jpg",
      ],
    },
    {
      title: "Family Session",
      cover: "/img/family/family1.jpg",
      photos: [
        "/img/family/family1.jpg",
        "/img/family/family2.jpg",
        "/img/family/family3.jpg",
        "/img/family/family4.jpg",
        "/img/family/family5.jpg",
      ],
    },

    // ===== TAMBAHAN BARU =====
    {
      title: "Maternity",
      cover: "/img/maternity/maternity1.jpg",
      photos: [
        "/img/maternity/maternity1.jpg",
        "/img/maternity/maternity2.jpg",
        "/img/maternity/maternity3.jpg",
        "/img/maternity/maternity4.jpg",
        "/img/maternity/maternity5.jpg",
      ],
    },
    {
      title: "Beauty",
      cover: "/img/beauty/beauty1.jpg",
      photos: [
        "/img/beauty/beauty1.jpg",
        "/img/beauty/beauty2.jpg",
        "/img/beauty/beauty3.jpg",
        "/img/beauty/beauty4.jpg",
        "/img/beauty/beauty5.jpg",
        "/img/beauty/beauty6.jpg",
        "/img/beauty/beauty7.jpg",
      ],
    },

    {
      title: "Wedding",
      cover: "/img/wedding/wedding1.jpg",
      photos: [
        "/img/wedding/wedding1.jpg",
        "/img/wedding/wedding2.jpg",
        "/img/wedding/wedding3.jpg",
        "/img/wedding/wedding4.jpg",
        "/img/wedding/wedding5.jpg",
        "/img/wedding/wedding6.jpg",
      ],
    },
  ];

  // ===============================
  // LIGHTBOX STATE
  // ===============================
  const [activePhotos, setActivePhotos] = useState(null);
  const [index, setIndex] = useState(0);

  const openCategory = (photos) => {
    setActivePhotos(photos);
    setIndex(0);
  };

  const closeLightbox = () => setActivePhotos(null);
  const next = () =>
    setIndex((prev) => (prev + 1) % activePhotos.length);
  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? activePhotos.length - 1 : prev - 1
    );

  // ===============================
  // HIGHLIGHT EFFECT
  // ===============================
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const [highlight, setHighlight] = useState({
    opacity: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const updateHighlightByIndex = (i) => {
    const card = cardsRef.current[i];
    if (!card || !containerRef.current) return;

    const rect = card.getBoundingClientRect();
    const parent = containerRef.current.getBoundingClientRect();

    setHighlight({
      opacity: 1,
      width: rect.width,
      height: rect.height,
      x: rect.left - parent.left,
      y: rect.top - parent.top,
    });
  };

  const moveHighlight = (e, i) => {
    setActiveIndex(i);
    updateHighlightByIndex(i);
  };

  // RESPONSIF & AMAN
  useEffect(() => {
    const handleResize = () => {
      if (activeIndex !== null) {
        updateHighlightByIndex(activeIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, [activeIndex]);

  return (
    <section
      id="portfolio"
      className="py-20 bg-[#0f1115] text-white px-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
        <p className="text-gray-400 mb-12">
          Pilih kategori untuk melihat hasil jepretan kami
        </p>

        {/* ================= GRID + HIGHLIGHT ================= */}
        <div ref={containerRef} className="relative">
          <span
            className="absolute bg-gradient-to-r from-yellow-400/20 to-yellow-400/40
            rounded-2xl transition-all duration-500
            ease-[cubic-bezier(.22,1,.36,1)]
            pointer-events-none"
            style={{
              opacity: highlight.opacity,
              width: highlight.width,
              height: highlight.height,
              transform: `translate(${highlight.x}px, ${highlight.y}px)`,
            }}
          />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((item, i) => (
              <motion.div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                onMouseEnter={(e) => moveHighlight(e, i)}
                onClick={(e) => {
                  moveHighlight(e, i);
                  openCategory(item.photos);
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden
                rounded-2xl bg-[#1a1c20]"
              >
                <img
                  src={item.cover}
                  className="w-full h-64 object-cover
                  transition-transform duration-700
                  group-hover:scale-110"
                  alt={item.title}
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= LIGHTBOX ================= */}
      {activePhotos && (
        <Lightbox
          photos={activePhotos}
          index={index}
          onClose={closeLightbox}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  );
}
