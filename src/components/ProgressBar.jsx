import React, { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const current = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (current / height) * 100;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[60]">
      <div
        className="h-1 bg-yellow-400 transition-all duration-150"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
}
