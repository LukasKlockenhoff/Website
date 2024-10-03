"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface SpotlightCirlceProps {
  position: "absolute" | "fixed";
}

export function SpotlightCirlce({ position }: SpotlightCirlceProps) {
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

  if (position === "fixed") {
    return (
      <div
        className={twMerge(
          "fixed lg:hidden w-60 h-60 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-90% to-10% from-secondary to-secondary/80 blur-3xl top-32 left-0",
        )}
      />
    );
  }

  return (
    <div
      className={twMerge(
        "hidden lg:block z-0 absolute w-36 h-36 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-90% to-10% from-secondary to-secondary/80 blur-3xl lg:!cursor-none",
      )}
      style={{
        top: `${mouseY - 144 / 2}px`,
        left: `${mouseX - 144 / 2}px`,
      }}
    />
  );
}
