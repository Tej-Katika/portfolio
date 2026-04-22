"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "The Stack Is Collapsing Upward",
    body: "AI isn't a feature you add to a system — it's becoming the system. Models now handle logic that once required entire microservice layers. Vector databases are replacing query engines. Agents are replacing workflows. The engineer's value is shifting from writing code to designing the architecture that generates, validates, and orchestrates it. Understanding every layer of the stack is no longer optional — it's the moat.",
  },
  {
    number: "02",
    title: "Scalability Now Means Adaptability",
    body: "Traditional scalability handles load. The new scalability handles change — new models, drifting data distributions, swapped APIs, and user behaviours nobody predicted. Systems built for adaptability absorb these shifts without rearchitecting. That requires loose coupling, contract-first API design, and infrastructure capable of swapping AI providers the way you swap a database driver. Rigidity is the new single point of failure.",
  },
  {
    number: "03",
    title: "Orchestration Is the AI Frontier",
    body: "As AI workloads grow, so does pressure on multi-cloud, multi-cluster infrastructure. Running inference across regions, coordinating GPU fleets, managing training pipelines at scale — this is the orchestration problem of the next decade. It's precisely why I contribute to Karmada. The engineers who understand distributed orchestration today will be the ones architecting the AI clouds of tomorrow.",
  },
];

export function AiHorizon() {
  return (
    <section id="ai-horizon" className="relative py-32 overflow-hidden">
      {/* Dark atmospheric background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.04] to-background pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[11px] text-primary/50 tabular-nums">
              [05]
            </span>
            <span className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-muted-foreground">
              Perspective
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1] max-w-2xl">
              Intelligence is{" "}
              <br className="hidden md:block" />
              the new{" "}
              <span className="gradient-text">infrastructure.</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed md:text-right">
              Software engineering is undergoing its most profound shift since the cloud. Here&apos;s how I think about building for what comes next.
            </p>
          </div>
        </motion.div>

        {/* Spec readout strip */}
        <div className="flex items-center flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 py-4 border-y border-border/50 mb-16">
          <span className="text-primary/60">/thesis</span>
          <span className="text-border">·</span>
          <span>three principles</span>
          <span className="text-border">·</span>
          <span>derived from practice</span>
          <span className="text-border">·</span>
          <span className="text-foreground/60">updated 2026.04</span>
        </div>

        {/* Principles */}
        <div className="flex flex-col gap-0">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group grid md:grid-cols-[140px_1fr] gap-6 md:gap-12 py-12 border-b border-border/50 last:border-0 hover:border-primary/20 transition-colors duration-500"
            >
              {/* Number column */}
              <div className="flex md:flex-col md:items-start gap-3 md:sticky md:top-24 md:self-start">
                <span className="font-mono text-[11px] text-primary/60 tracking-[0.22em] uppercase">
                  principle {p.number}
                </span>
                <span className="font-mono text-6xl md:text-8xl font-black text-foreground/[0.08] leading-none group-hover:text-primary/20 transition-colors duration-500 select-none tabular-nums">
                  {p.number}
                </span>
              </div>

              {/* Content */}
              <div className="md:pt-1">
                <h3 className="text-xl md:text-3xl font-bold tracking-tight mb-5 leading-tight group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-2xl">
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 gradient-border rounded-2xl p-8 md:p-12 bg-card relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <p className="text-xs font-mono text-primary uppercase tracking-[0.18em] mb-6">
            Engineering Philosophy
          </p>
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/90 max-w-3xl">
            &ldquo;I build at the intersection of cloud infrastructure, intelligent systems, and the interfaces that make them usable — not because it&apos;s trendy, but because{" "}
            <span className="gradient-text font-bold">that&apos;s where the hardest problems live.</span>&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-muted-foreground font-mono">
            — Tejashwar Reddy Katika
          </p>
        </motion.div>

      </div>
    </section>
  );
}
