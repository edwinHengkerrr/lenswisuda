import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const reveal = () => {
      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-10");
        }
      });
    };

    // initial state
    elements.forEach((el) => {
      el.classList.add(
        "opacity-0",
        "translate-y-10",
        "transition-all",
        "duration-700"
      );
    });

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);
}
