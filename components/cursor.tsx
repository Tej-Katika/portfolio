"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const dotX = useSpring(x, { stiffness: 800, damping: 40 });
  const dotY = useSpring(y, { stiffness: 800, damping: 40 });
  const ringX = useSpring(x, { stiffness: 180, damping: 22 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed z-[9999] pointer-events-none hidden md:block w-2 h-2 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"
        style={{ left: dotX, top: dotY }}
      />
      {/* Ring */}
      <motion.div
        className="fixed z-[9998] pointer-events-none hidden md:block w-9 h-9 rounded-full border border-primary/30 -translate-x-1/2 -translate-y-1/2"
        style={{ left: ringX, top: ringY }}
      />
    </>
  );
}
