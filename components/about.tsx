"use client";

import { SectionWrapper, SectionLabel } from "@/components/section-wrapper";
import { StatCounter } from "@/components/stat-counter";
import { motion } from "framer-motion";

const stats = [
  { label: "Current Role", value: "Software Engineer", sub: "Automate IT Inc" },
  { label: "Education", value: "MS Computer Science", sub: "Univ. of North Texas" },
  { label: "Location", value: "Dallas, TX", sub: "Open to remote" },
  { label: "Certification", value: "AWS Solutions Architect", sub: "Associate · Active" },
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
        className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-10 max-w-4xl"
      >
        Building systems that{" "}
        <span className="gradient-text">think, scale,</span>
        <br className="hidden md:block" />
        {" "}and adapt.
      </motion.h2>

      <div className="grid md:grid-cols-5 gap-12 items-start mb-16">
        <div className="md:col-span-3">
          <p className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
            I&apos;m Tejashwar — a full-stack software and AI engineer based in
            Dallas, TX. I specialize in designing cloud-native architectures and
            integrating machine learning into production systems that solve real
            problems.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base">
            With a Master&apos;s in Computer Science from the University of North
            Texas and hands-on experience spanning Java, Python, React, and AWS,
            I bridge the gap between intelligent back-end systems and
            polished user experiences. Currently contributing to Karmada — a
            CNCF multi-cloud Kubernetes orchestration project.
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
          { value: 2, suffix: "+", label: "Years Experience" },
          { value: 4, suffix: "+", label: "Projects Shipped" },
          { value: 10, suffix: "+", label: "AWS Services Used" },
          { value: 1, suffix: "", label: "CNCF Contribution" },
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
