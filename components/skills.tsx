"use client";

import { SectionWrapper, SectionLabel } from "@/components/section-wrapper";
import { motion } from "framer-motion";

type Row = {
  domain: string;
  stack: string[];
  years: number; // 1..5 fill level
  note: string;
};

const matrix: { group: string; rows: Row[] }[] = [
  {
    group: "Intelligence",
    rows: [
      {
        domain: "Agentic AI Systems",
        stack: ["Claude API", "tool-use", "agent loops", "ontology layers"],
        years: 2,
        note: "Artha's 15 typed tools, eval harness",
      },
      {
        domain: "LLM Integration",
        stack: ["RAG", "vector DBs", "prompt engineering", "chain-of-thought"],
        years: 2,
        note: "few-shot, structured output",
      },
      {
        domain: "ML Engineering",
        stack: ["SageMaker", "scikit-learn", "Pandas", "forecasting"],
        years: 3,
        note: "from pipeline to inference",
      },
    ],
  },
  {
    group: "Systems",
    rows: [
      {
        domain: "Distributed Orchestration",
        stack: ["Kubernetes", "Karmada", "Go"],
        years: 3,
        note: "multi-cloud control planes",
      },
      {
        domain: "Cloud Architecture",
        stack: ["AWS", "Lambda", "CDK", "Terraform"],
        years: 4,
        note: "AWS SAA · CCP · active",
      },
      {
        domain: "Backend Engineering",
        stack: ["Java 21", "Spring Boot", "Node.js", "REST", "GraphQL"],
        years: 4,
        note: "contract-first services",
      },
      {
        domain: "Data Platforms",
        stack: ["PostgreSQL", "Prisma", "Redis", "DynamoDB", "Glue"],
        years: 3,
        note: "relational · cache · NoSQL",
      },
    ],
  },
  {
    group: "Interface & Delivery",
    rows: [
      {
        domain: "Frontend",
        stack: ["React", "Next.js 16", "TypeScript", "Tailwind", "Motion"],
        years: 4,
        note: "app-router, a11y, motion",
      },
      {
        domain: "DevOps & Observability",
        stack: ["Docker", "GitHub Actions", "Prometheus", "Grafana"],
        years: 4,
        note: "ship fast, watch closely",
      },
    ],
  },
];

function ExperienceDots({ level }: { level: number }) {
  return (
    <span className="inline-flex gap-[3px] items-center" aria-label={`${level} of 5 experience`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i <= level ? "bg-primary" : "bg-border"
          }`}
        />
      ))}
    </span>
  );
}

export function Skills() {
  return (
    <SectionWrapper id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel index="02">Skill Matrix</SectionLabel>

      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1]">
          The <span className="font-serif-display italic text-primary/90">stack</span>, without the buzzwords.
        </h2>
        <p className="text-xs font-mono text-muted-foreground max-w-xs">
          Depth marked with dots · hover a row for context.
        </p>
      </div>

      {/* Matrix */}
      <div className="border-t border-border/70">
        {matrix.map((group, gi) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: gi * 0.08 }}
          >
            {/* Group header */}
            <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 py-5 border-b border-border/40">
              <span className="font-mono text-[10px] text-primary/60 uppercase tracking-[0.22em] tabular-nums w-16">
                0{gi + 1}
              </span>
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/90">
                {group.group}
              </h3>
            </div>

            {/* Rows */}
            {group.rows.map((row) => (
              <div
                key={row.domain}
                className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-8 py-5 border-b border-border/40 hover:bg-accent/20 transition-colors px-2 -mx-2 rounded-sm"
              >
                {/* Left: domain + stack */}
                <div className="min-w-0">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <h4 className="text-base md:text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {row.domain}
                    </h4>
                    <span className="font-mono text-[10px] text-muted-foreground/60 hidden md:inline">
                      — {row.note}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {row.stack.map((s, i) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] text-muted-foreground"
                      >
                        {s}
                        {i < row.stack.length - 1 && (
                          <span className="text-border/70 ml-3">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <p className="font-mono text-[10px] text-muted-foreground/60 mt-1.5 md:hidden">
                    — {row.note}
                  </p>
                </div>

                {/* Right: experience dots */}
                <div className="flex items-center gap-3 md:justify-end">
                  <ExperienceDots level={row.years} />
                  <span className="font-mono text-[10px] text-muted-foreground tabular-nums w-10 text-right">
                    {row.years === 5 ? "5+ yrs" : `${row.years}+ yrs`}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Footnote */}
      <p className="mt-8 font-mono text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em]">
        ★ AWS Solutions Architect · AWS Cloud Practitioner · active CNCF contributor
      </p>
    </SectionWrapper>
  );
}
