"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "home" },
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "ai-horizon", label: "perspective" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];

export function BottomStatusBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [pct, setPct] = useState(0);
  const [time, setTime] = useState("");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setPct(Math.round(v * 100));
  });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id, label }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(label);
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "America/Chicago",
      });
      setTime(`${now} CDT`);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed bottom-0 inset-x-0 z-40 hidden md:flex h-7 items-stretch font-mono text-[10px] tracking-wider uppercase bg-background/80 backdrop-blur-md border-t border-border/60"
    >
      {/* Live indicator */}
      <div className="flex items-center gap-1.5 px-3 border-r border-border/60">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
        </span>
        <span className="text-emerald-400/90">online</span>
      </div>

      {/* Active section */}
      <div className="flex items-center gap-2 px-3 border-r border-border/60">
        <span className="text-muted-foreground/70">§</span>
        <span className="text-foreground/90">{activeSection}</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Stack info */}
      <div className="hidden lg:flex items-center gap-2 px-3 border-l border-border/60 text-muted-foreground/70">
        <span>next.14</span>
        <span className="text-border">/</span>
        <span>ts.5</span>
        <span className="text-border">/</span>
        <span>tw.4</span>
      </div>

      {/* Location + time */}
      <div className="flex items-center gap-2 px-3 border-l border-border/60 text-muted-foreground/70">
        <span>dallas</span>
        <span className="text-border">·</span>
        <span className="tabular-nums text-foreground/80">{time || "--:--"}</span>
      </div>

      {/* Scroll pct with micro-bar */}
      <div className="flex items-center gap-2 px-3 border-l border-border/60">
        <div className="relative h-[3px] w-16 bg-border/50 overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-primary"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="tabular-nums text-foreground/80 w-8 text-right">
          {pct.toString().padStart(2, "0")}%
        </span>
      </div>
    </motion.div>
  );
}
