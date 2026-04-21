"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const steps = 40;
    const increment = value / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1 font-mono">{label}</div>
    </div>
  );
}
