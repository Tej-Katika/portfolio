"use client";

import { useRef, useState } from "react";
import { SectionWrapper, SectionLabel } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons";
import { ArrowRight, ExternalLink } from "lucide-react";

type Status = "active" | "deployed" | "open-source" | "archived";

const STATUS_META: Record<Status, { label: string; dot: string; text: string; bg: string; border: string }> = {
  active: {
    label: "active",
    dot: "bg-emerald-500",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  deployed: {
    label: "deployed",
    dot: "bg-primary",
    text: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  "open-source": {
    label: "open source",
    dot: "bg-violet-400",
    text: "text-violet-300",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  archived: {
    label: "archived",
    dot: "bg-muted-foreground",
    text: "text-muted-foreground",
    bg: "bg-muted/40",
    border: "border-border",
  },
};

const projects: {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  link?: { href: string; label: string };
  status: Status[];
  accent: string;
  accentBorder: string;
}[] = [
  {
    id: "01",
    title: "Artha",
    subtitle: "Agentic AI · Research",
    description:
      "A domain-ontology-driven agentic framework for LLM-based personal finance reasoning. Enriches raw bank transactions into typed ontology objects — merchants, recurring bills, anomalies, goals — then exposes them to a Claude agent through 15 typed tools. Java 21 + Spring Boot backend, Python eval harness benchmarking response accuracy across synthetic user profiles.",
    tags: ["Java 21", "Spring Boot", "Claude API", "RAG", "PostgreSQL"],
    github: "https://github.com/Tej-Katika/artha",
    status: ["active", "open-source"],
    accent: "from-primary/20 to-primary/5",
    accentBorder: "border-primary/20",
  },
  {
    id: "02",
    title: "Karmada",
    subtitle: "Open Source · CNCF",
    description:
      "Active contributor to Karmada — the CNCF multi-cloud, multi-cluster Kubernetes orchestration project. Working on control-plane features that manage workload distribution across cloud boundaries at scale.",
    tags: ["Go", "Kubernetes", "Multi-Cloud", "CNCF"],
    github: "https://github.com/karmada-io/karmada",
    status: ["active", "open-source"],
    accent: "from-emerald-500/20 to-emerald-500/5",
    accentBorder: "border-emerald-500/20",
  },
  {
    id: "03",
    title: "Gr8Saver",
    subtitle: "AI · Full-Stack · Live Product",
    description:
      "AI-powered deal aggregator and community. Nine scrapers across 60+ sources, DeepSeek V3 authenticity scoring to filter sponsored content, verified Amazon price-drop integration, Google Trends matching, and a natural-language agent for queries like \"best laptop under $800 with a coupon.\" Next.js 16 + Express + Postgres, real-time via SSE, auto-deployed to Railway.",
    tags: ["Next.js 16", "TypeScript", "DeepSeek V3", "Prisma", "Railway"],
    link: { href: "https://www.gr8saver.com", label: "gr8saver.com" },
    status: ["deployed", "active"],
    accent: "from-violet-500/20 to-violet-500/5",
    accentBorder: "border-violet-500/20",
  },
  {
    id: "04",
    title: "Predictive Inventory System",
    subtitle: "Cloud · ML · Full-Stack",
    description:
      "Cloud-native demand forecasting platform with real-time sales ingestion via AWS API Gateway + Lambda, ETL through Glue, ML predictions via SageMaker, and a React + Amplify dashboard.",
    tags: ["Python", "AWS SageMaker", "Lambda", "React", "CDK"],
    github: "https://github.com/Tej-Katika/predictive-inventory-system",
    status: ["deployed"],
    accent: "from-sky-500/15 to-sky-500/5",
    accentBorder: "border-sky-500/15",
  },
  {
    id: "05",
    title: "JP Morgan Midas Core",
    subtitle: "FinTech · Java",
    description:
      "J.P. Morgan Advanced Software Engineering virtual experience — implemented core banking transaction logic, applied financial data handling patterns, and enterprise-grade Java architecture.",
    tags: ["Java", "Spring Boot", "Financial Systems"],
    github: "https://github.com/Tej-Katika/midas-core",
    status: ["archived"],
    accent: "from-amber-500/15 to-amber-500/5",
    accentBorder: "border-amber-500/15",
  },
];

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX) * 1.4;
  };
  const onMouseUp = () => setIsDragging(false);

  return (
    <SectionWrapper id="projects" className="py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <SectionLabel index="04">Projects</SectionLabel>
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Things I&apos;ve built
          </h2>
          <span className="hidden md:flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <ArrowRight className="h-3 w-3" /> drag to explore
          </span>
        </div>
      </div>

      {/* Horizontal drag-scroll container */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className={`flex gap-5 overflow-x-auto scrollbar-none px-6 md:px-[calc((100vw-80rem)/2+1.5rem)] pb-4 snap-x snap-mandatory select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`snap-center shrink-0 w-[320px] md:w-[400px] gradient-border rounded-2xl bg-card flex flex-col p-6 relative overflow-hidden corner-marks texture-noise`}
          >
            {/* Crosshair corner marks */}
            <span /><span /><span /><span />

            {/* Card accent gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.accent} pointer-events-none`}
            />

            <div className="relative flex flex-col h-full">
              {/* Top meta row — project ID + status badges */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-muted-foreground/60 tabular-nums tracking-wider">
                  PROJ · {project.id}
                </span>
                <div className="flex items-center gap-1.5">
                  {project.status.map((s) => {
                    const meta = STATUS_META[s];
                    const isActive = s === "active";
                    return (
                      <span
                        key={s}
                        className={`inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider rounded-full px-2 py-0.5 border ${meta.bg} ${meta.border} ${meta.text}`}
                      >
                        {isActive ? (
                          <span className="relative flex h-1 w-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className={`relative inline-flex rounded-full h-1 w-1 ${meta.dot}`} />
                          </span>
                        ) : (
                          <span className={`h-1 w-1 rounded-full ${meta.dot}`} />
                        )}
                        {meta.label}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-foreground leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mt-1">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`Visit ${project.title}`}
                      onClick={(e) => isDragging && e.preventDefault()}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`GitHub: ${project.title}`}
                      onClick={(e) => isDragging && e.preventDefault()}
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px bg-gradient-to-r from-border to-transparent mb-4 ${project.accentBorder}`} />

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-[11px] font-normal rounded-md"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* GitHub CTA card */}
        <div className="snap-center shrink-0 w-[200px] md:w-[220px] gradient-border rounded-2xl bg-card/50 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <GithubIcon className="h-8 w-8 text-muted-foreground/50" />
          <p className="text-xs font-mono text-muted-foreground leading-relaxed">
            More on GitHub
          </p>
          <a
            href="https://github.com/Tej-Katika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-primary hover:underline"
          >
            @Tej-Katika →
          </a>
        </div>
      </div>

      {/* Scroll dots indicator */}
      <div className="flex justify-center gap-1.5 mt-6">
        {projects.map((p) => (
          <div key={p.title} className="w-1 h-1 rounded-full bg-border" />
        ))}
      </div>
    </SectionWrapper>
  );
}
