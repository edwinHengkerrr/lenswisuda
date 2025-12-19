// src/utils/useActiveSection.js
import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionIds[0];

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const top = element.getBoundingClientRect().top;

        if (top <= 150) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return active;
}
