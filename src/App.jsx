import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Loader from "./components/Loader";
import DarkModeToggle from "./components/DarkModeToggle";
import BackToTop from "./components/BackToTop";
import FloatingWA from "./components/FloatingWA";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Loader tampil dulu
  if (loading) return <Loader setLoading={setLoading} />;

  return (
    <div className="bg-[#0f1115] text-white dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />

      {/* TESTIMONI FOTO */}
      <Testimonials />

      <Pricing />
      <FAQ />
      <Contact />
      <Footer />

      {/* UI UTILITIES */}
      <DarkModeToggle />
      <BackToTop />
      <ProgressBar />
      <FloatingWA />
    </div>
  );
}
