"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface SpotlightCircleProps {
  position: "absolute" | "fixed";
}

export default function SpotlightCircle({ position }: SpotlightCircleProps) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Log to console for debugging
    console.log("SpotlightCircle mounted, event listener added");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      console.log("SpotlightCircle unmounted, event listener removed");
    };
  }, []);

  if (!isClient) {
    return null; // or a loading placeholder
  }
  return (
    <div
      className={twMerge(
        "hidden md:block z-0 absolute w-36 h-36 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-90% to-10% from-secondary to-secondary/80 blur-3xl md:!cursor-none",
      )}
      style={{
        top: `${mouseY - 72}px`,
        left: `${mouseX - 72}px`,
      }}
    />
  );
}
