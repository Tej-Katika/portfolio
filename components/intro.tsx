"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const LINES = [
  "$ initializing tejashwar.sys",
  "$ loading modules: cloud · ai · web · k8s",
  "$ all systems operational.",
];

export function Intro({ onComplete }: { onComplete: () => void }) {
  const [shown, setShown] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  const complete = useCallback(() => {
    setFinished(true);
    setTimeout(onComplete, 500);
  }, [onComplete]);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("sys-boot")) {
      onComplete();
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    LINES.forEach((line, i) => {
      const t = setTimeout(
        () => setShown((prev) => [...prev, line]),
        i * 650
      );
      timers.push(t);
    });

    const done = setTimeout(() => {
      sessionStorage.setItem("sys-boot", "1");
      complete();
    }, LINES.length * 650 + 600);
    timers.push(done);

    return () => timers.forEach(clearTimeout);
  }, [complete, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      onClick={complete}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative space-y-3 px-6 max-w-sm w-full">
        {/* System header */}
        <div className="font-mono text-[10px] text-muted-foreground mb-6 tracking-widest uppercase">
          TEJASHWAR.SYS v1.0 — 2025
        </div>

        {shown.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="font-mono text-sm text-primary/90"
          >
            {line}
            {i === shown.length - 1 && !finished && (
              <span className="ml-1 inline-block w-[7px] h-[14px] bg-primary animate-blink align-middle" />
            )}
          </motion.div>
        ))}

        {finished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-xs text-muted-foreground mt-4"
          >
            Ready.
          </motion.div>
        )}
      </div>

      <p className="absolute bottom-8 font-mono text-[10px] text-muted-foreground/40 tracking-widest">
        CLICK TO SKIP
      </p>
    </motion.div>
  );
}
