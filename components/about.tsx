"use client";

import { SectionWrapper, SectionLabel } from "@/components/section-wrapper";
import { StatCounter } from "@/components/stat-counter";
import { motion } from "framer-motion";

const stats = [
  { label: "Current Role", value: "Software Engineer", sub: "Automate IT Inc" },
  { label: "Education", value: "MS Computer Science", sub: "Univ. of North Texas" },
  { label: "Live Product", value: "Gr8Saver", sub: "gr8saver.com" },
  { label: "Research", value: "Artha — arXiv", sub: "agentic finance AI" },
];

export function About() {
  return (
    <SectionWrapper id="about" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel index="01">About</SectionLabel>

      {/* Editorial big statement */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-black tracking-tight leading-[1.02] mb-10 max-w-4xl"
      >
        I build systems that{" "}
        <span className="font-serif-display italic text-primary/90 font-normal">
          reason
        </span>
        ,{" "}
        <span className="gradient-text">scale,</span>
        {" "}and{" "}
        <span className="font-serif-display italic text-primary/90 font-normal">
          adapt
        </span>
        .
      </motion.h2>

      <div className="grid md:grid-cols-5 gap-12 items-start mb-16">
        <div className="md:col-span-3">
          <p className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
            I&apos;m Tejashwar — a software engineer working at the intersection of{" "}
            <span className="text-foreground/90">agentic AI</span>,{" "}
            <span className="text-foreground/90">cloud-native orchestration</span>, and
            the interfaces that make them usable.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-base">
            Right now I&apos;m researching <span className="text-foreground/90 font-medium">Artha</span> — a
            domain-ontology-driven agentic framework where a Claude agent reasons over
            typed financial objects instead of raw SQL rows. I&apos;m also shipping{" "}
            <span className="text-foreground/90 font-medium">Gr8Saver</span>, a live
            AI deal aggregator with nine scrapers, DeepSeek V3 authenticity scoring,
            and a natural-language search agent — deployed and serving real traffic.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base">
            In parallel, I contribute to <span className="text-foreground/90 font-medium">Karmada</span> —
            the CNCF multi-cloud Kubernetes orchestrator — because the
            infrastructure problem of the next decade is running AI workloads across
            cloud boundaries, and that&apos;s where I want to be useful.
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="gradient-border rounded-xl p-4 bg-card"
            >
              <p className="text-[10px] font-mono text-muted-foreground mb-1.5 uppercase tracking-widest">
                {stat.label}
              </p>
              <p className="text-sm font-semibold text-foreground leading-snug">
                {stat.value}
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stat counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border rounded-2xl overflow-hidden">
        {[
          { value: 5, suffix: "+", label: "Projects Shipped" },
          { value: 15, suffix: "", label: "Agent Tools · Artha" },
          { value: 60, suffix: "+", label: "Sources · Gr8Saver" },
          { value: 1, suffix: "", label: "CNCF Contributor" },
        ].map((s, i) => (
          <div
            key={s.label}
            className={`p-6 text-center ${i < 3 ? "border-r border-border" : ""} ${i >= 2 ? "border-t md:border-t-0 border-border" : ""}`}
          >
            <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
