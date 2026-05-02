"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useCursor } from "./providers/CursorContext";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { mode } = useCursor();
  const isDragMode = mode === "drag";

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 200 };
  const dotConfig = { damping: 40, stiffness: 800 };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const dotXSpring = useSpring(cursorX, dotConfig);
  const dotYSpring = useSpring(cursorY, dotConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(
        !!target.closest("button") ||
          !!target.closest("a") ||
          target.getAttribute("role") === "button",
      );
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ translateX: cursorXSpring, translateY: cursorYSpring, left: -50, top: -50 }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r="18"
          fill="none"
          stroke="rgba(184, 151, 58, 0.5)"
          strokeWidth="1"
          animate={{
            r: isDragMode ? 38 : isHovered ? 35 : 18,
            opacity: isVisible ? 1 : 0,
            stroke: isDragMode
              ? "rgba(184, 151, 58, 0.7)"
              : isHovered
              ? "rgba(184, 151, 58, 1)"
              : "rgba(184, 151, 58, 0.5)",
            fill: isDragMode
              ? "rgba(184, 151, 58, 0.06)"
              : isHovered
              ? "rgba(184, 151, 58, 0.08)"
              : "rgba(184, 151, 58, 0)",
          }}
          transition={{
            r: { type: "spring", stiffness: 300, damping: 25 },
            opacity: { duration: 0.2 },
          }}
        />

        <AnimatePresence>
          {isDragMode && (
            <motion.text
              x="50"
              y="55"
              textAnchor="middle"
              fontSize="8"
              letterSpacing="2"
              fill="rgba(13, 27, 42, 0.65)"
              fontFamily="'Space Grotesk', sans-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              DRAG
            </motion.text>
          )}
        </AnimatePresence>
      </motion.svg>

      {/* Precision dot — hidden in drag mode */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-gold rounded-full pointer-events-none z-[9999]"
        style={{ translateX: dotXSpring, translateY: dotYSpring, left: -2, top: -2 }}
        animate={{
          scale: isDragMode || isHovered ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.2 }, opacity: { duration: 0.2 } }}
      />
    </>
  );
}
