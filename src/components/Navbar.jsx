import React, { useState } from "react";
import useActiveSection from "../utils/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // daftar ID section
  const active = useActiveSection([
    "home",
    "about",
    "portfolio",
    "testimonial",
    "pricing",
    "contact",
    "faq"
  ]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f1115]/70 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
      
      {/* LOGO + TEXT */}
      <h1 className="text-2 xl font-bold flex items-center gap-2">
        <img 
          src="/logo.png"
          alt="logo"
          className="w-24 h-24  object-contain"
        />
         {/* tempat nulis tulisan kalau mau ada */}
      </h1>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex gap-8 text-lg">
        <a
          href="#home"
          className={`hover:text-yellow-400 duration-200 ${
            active === "home" ? "text-yellow-400 font-semibold" : ""
          }`}
        >
          Home
        </a>

        <a
          href="#about"
          className={`hover:text-yellow-400 duration-200 ${
            active === "about" ? "text-yellow-400 font-semibold" : ""
          }`}
        >
          About
        </a>

        <a
          href="#portfolio"
          className={`hover:text-yellow-400 duration-200 ${
            active === "portfolio" ? "text-yellow-400 font-semibold" : ""
          }`}
        >
          Portfolio
        </a>

        <a
          href="#testimonial"
          className={`hover:text-yellow-400 duration-200 ${
            active === "testimonial" ? "text-yellow-400 font-semibold" : ""
          }`}
        >
          Testimonial
        </a>

        <a
          href="#pricing"
          className={`hover:text-yellow-400 duration-200 ${
            active === "pricing" ? "text-yellow-400 font-semibold" : ""
          }`}
        >
          Pricing
        </a>

        <a
          href="#contact"
          className={`hover:text-yellow-400 duration-200 ${
            active === "contact" ? "text-yellow-400 font-semibold" : ""
          }`}
        >
          Contact
        </a>

        <a
          href="#faq"
          className={`hover:text-yellow-400 duration-200 ${
            active === "faq" ? "text-yellow-400 font-semibold" : ""
          }`}
        >
          FAQ
        </a>
      </div>

      {/* MOBILE BUTTON */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* MENU MOBILE */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#0f1115] p-6 flex flex-col gap-4 text-lg md:hidden">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className={active === "home" ? "text-yellow-400 font-semibold" : ""}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className={active === "about" ? "text-yellow-400 font-semibold" : ""}
          >
            About
          </a>

          <a
            href="#portfolio"
            onClick={() => setOpen(false)}
            className={
              active === "portfolio" ? "text-yellow-400 font-semibold" : ""
            }
          >
            Portfolio
          </a>

          <a
            href="#testimonial"
            onClick={() => setOpen(false)}
            className={
              active === "testimonial" ? "text-yellow-400 font-semibold" : ""
            }
          >
            Testimonial
          </a>

          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className={
              active === "pricing" ? "text-yellow-400 font-semibold" : ""
            }
          >
            Pricing
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={
              active === "contact" ? "text-yellow-400 font-semibold" : ""
            }
          >
            Contact
          </a>

          <a
            href="#faq"
            onClick={() => setOpen(false)}
            className={active === "faq" ? "text-yellow-400 font-semibold" : ""}
          >
            FAQ
          </a>
        </div>
      )}
    </nav>
  );
}
