import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {show && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 bg-yellow-400 p-3 rounded-full shadow-xl text-black hover:bg-yellow-300 transition z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
