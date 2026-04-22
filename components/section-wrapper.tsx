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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

interface SectionLabelProps {
  children: ReactNode;
  index: string;
}

export function SectionLabel({ children, index }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-[11px] text-primary/50 tabular-nums">
        [{index}]
      </span>
      <span className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-muted-foreground">
        {children}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
    </div>
  );
}
