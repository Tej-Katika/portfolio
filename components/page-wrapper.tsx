"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Intro } from "@/components/intro";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!ready && <Intro key="intro" onComplete={() => setReady(true)} />}
      </AnimatePresence>
      <div
        style={{
          opacity: ready ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: ready ? "auto" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}
