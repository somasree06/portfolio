"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("magnetic-btn")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cyber-blue rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: x - 6,
          y: y - 6,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-cyber-blue/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: x - 20,
          y: y - 20,
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
      {/* Glow trail */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-cyber-blue/20 rounded-full pointer-events-none z-[9998] blur-sm"
        animate={{
          x: x - 12,
          y: y - 12,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />
    </>
  );
}
