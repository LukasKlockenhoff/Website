"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function SpotlightCirlce() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  useEffect(() => {
    return () => {
      document.addEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={twMerge(
        "hidden lg:block absolute w-10 h-10 rounded-full bg-secondary drop-shadow-orangeGlow",
      )}
      style={{
        top: `${mouseY - 40 / 2}px`,
        left: `${mouseX - 40 / 2}px`,
      }}
    />
  );
}
