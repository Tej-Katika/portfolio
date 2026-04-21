"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
}

export function SectionWrapper({
  id,
  className = "",
  children,
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-primary opacity-80">
        {children}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
