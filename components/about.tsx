"use client";

import { SectionWrapper, SectionLabel } from "@/components/section-wrapper";
import { StatCounter } from "@/components/stat-counter";
import { Separator } from "@/components/ui/separator";

export function About() {
  return (
    <SectionWrapper id="about" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel>About</SectionLabel>

      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Building systems that{" "}
            <span className="gradient-text">think and scale.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I&apos;m Tejashwar — a full-stack software and AI engineer based in
            Dallas, TX. I specialize in designing cloud-native architectures and
            integrating machine learning into production systems that solve real
            problems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With a Master&apos;s in Computer Science from the University of North
            Texas and hands-on experience spanning Java, Python, React, and AWS,
            I bridge the gap between intelligent back-end systems and
            polished user experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Current Role", value: "Software Engineer", sub: "Automate IT Inc" },
            { label: "Education", value: "MS Computer Science", sub: "Univ. of North Texas" },
            { label: "Location", value: "Dallas, TX", sub: "Open to remote" },
            { label: "Certification", value: "AWS Solutions Architect", sub: "Associate · Active" },
          ].map((stat) => (
            <div key={stat.label} className="gradient-border rounded-xl p-5 bg-card">
              <p className="text-xs font-mono text-muted-foreground mb-1 uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="text-sm font-semibold text-foreground leading-snug">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mb-16 opacity-50" />

      {/* Animated stat counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatCounter value={2} suffix="+" label="Years of Experience" />
        <StatCounter value={4} suffix="+" label="Projects Shipped" />
        <StatCounter value={6} suffix="+" label="Cloud Services Used" />
        <StatCounter value={1} suffix="" label="Open Source Project" />
      </div>
    </SectionWrapper>
  );
}
