"use client";

import { motion } from "framer-motion";

const columns = [
  {
    heading: "Building",
    code: "01",
    items: [
      { primary: "Karmada control-plane contributions", meta: "CNCF · Go" },
      { primary: "Predictive Inventory System", meta: "AWS · SageMaker" },
      { primary: "This portfolio — every pixel", meta: "Next.js · Motion" },
    ],
  },
  {
    heading: "Learning",
    code: "02",
    items: [
      { primary: "Distributed scheduling internals", meta: "kube-scheduler, Karmada" },
      { primary: "Vector databases at scale", meta: "pgvector, Pinecone" },
      { primary: "Systems programming in Rust", meta: "ownership, lifetimes" },
    ],
  },
  {
    heading: "Thinking About",
    code: "03",
    items: [
      { primary: "Where agentic workflows replace microservices", meta: "architecture" },
      { primary: "How AI changes the shape of on-call", meta: "reliability" },
      { primary: "Why orchestration is the next frontier", meta: "infrastructure" },
    ],
  },
];

export function NowSection() {
  return (
    <section className="relative border-y border-border/60 bg-muted/10">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[10px] text-primary/70 tabular-nums">
            /now
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
            updated · 2026.04
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {columns.map((col, i) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-baseline gap-2 mb-5">
                <span className="font-mono text-[10px] text-primary/50 tabular-nums">
                  {col.code}
                </span>
                <h3 className="text-xs font-mono uppercase tracking-[0.22em] text-foreground/90">
                  {col.heading}
                </h3>
              </div>

              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item.primary} className="group">
                    <div className="flex items-start gap-2">
                      <span className="text-primary/40 text-sm leading-5 shrink-0 group-hover:text-primary transition-colors">
                        →
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm text-foreground/90 leading-snug">
                          {item.primary}
                        </p>
                        <p className="text-[10px] font-mono text-muted-foreground/70 mt-0.5 uppercase tracking-wider">
                          {item.meta}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
