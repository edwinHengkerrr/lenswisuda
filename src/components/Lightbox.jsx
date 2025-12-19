import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ photos, index, onClose, onNext, onPrev }) {
  if (index === null) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full"
      >
        <X size={28} color="white" />
      </button>

      {/* Prev */}
      <button
        onClick={onPrev}
        className="absolute left-6 p-3 bg-white/10 hover:bg-white/20 rounded-full"
      >
        <ChevronLeft size={34} color="white" />
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full"
      >
        <ChevronRight size={34} color="white" />
      </button>

      {/* Image */}
      <img
        src={photos[index]}
        className="max-w-[90%] max-h-[80vh] rounded-lg shadow-2xl transition"
      />
    </div>
  );
}
