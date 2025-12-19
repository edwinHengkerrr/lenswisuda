import React, { useRef, useState } from "react";

export default function HighlightGrid({ children }) {
  const containerRef = useRef(null);
  const [style, setStyle] = useState({
    opacity: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const moveHighlight = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const parent = containerRef.current.getBoundingClientRect();

    setStyle({
      opacity: 1,
      width: rect.width,
      height: rect.height,
      x: rect.left - parent.left,
      y: rect.top - parent.top,
    });
  };

  return (
    <div ref={containerRef} className="relative">
      {/* HIGHLIGHT */}
      <span
        className="absolute bg-gradient-to-r from-yellow-400/20 to-yellow-400/40 rounded-2xl transition-all duration-500 ease-out pointer-events-none"
        style={{
          opacity: style.opacity,
          width: style.width,
          height: style.height,
          transform: `translate(${style.x}px, ${style.y}px)`,
        }}
      />

      {/* ITEMS */}
      <div className="relative z-10 grid gap-6">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            onMouseEnter: moveHighlight,
            onClick: moveHighlight,
          })
        )}
      </div>
    </div>
  );
}
