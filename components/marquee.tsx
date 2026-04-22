"use client";

const items = [
  "Karmada Contributor",
  "Multi-Cloud Orchestration",
  "AWS Solutions Architect",
  "AI Systems Design",
  "Open Source",
  "Full-Stack Engineering",
  "Kubernetes",
  "Scalable Architectures",
  "Cloud-Native",
  "Machine Learning Pipelines",
];

export function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div className="relative border-y border-border overflow-hidden py-4 bg-muted/20">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div className="flex w-max animate-marquee gap-0">
        {repeated.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-6 shrink-0"
          >
            <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-[0.18em] whitespace-nowrap">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
