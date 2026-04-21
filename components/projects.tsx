"use client";

import { SectionWrapper, SectionLabel } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    title: "Karmada (Open Source)",
    description:
      "Active contributor to Karmada — the CNCF open-source multi-cloud, multi-cluster Kubernetes orchestration project. Working on features and improvements to the control plane that manages workload distribution across cloud boundaries.",
    tags: ["Go", "Kubernetes", "Multi-Cloud", "CNCF", "Open Source"],
    github: "https://github.com/karmada-io/karmada",
    metrics: ["CNCF Project", "Multi-cluster orchestration"],
    active: true,
  },
  {
    title: "Predictive Inventory System",
    description:
      "Cloud-native demand forecasting platform ingesting real-time sales data through AWS API Gateway and Lambda, transforming it via AWS Glue, and generating ML predictions with Amazon SageMaker. Visualized through a React + Amplify dashboard.",
    tags: ["Python", "AWS SageMaker", "AWS Lambda", "React", "Amplify", "CDK", "GitHub Actions"],
    github: "https://github.com/Tej-Katika/predictive-inventory-system",
    metrics: ["End-to-end ML pipeline", "CI/CD via GitHub Actions"],
    active: false,
  },
  {
    title: "XL-Forge",
    description:
      "Browser-based spreadsheet editor supporting .xlsx, .xls, and .csv files with in-cell editing, row/column management, full undo/redo, multi-sheet navigation, and AI-powered natural-language transformations via the Claude API. WCAG 2.1 AA compliant.",
    tags: ["React", "Vite", "Claude AI", "Node.js", "Vercel", "JavaScript"],
    github: "https://github.com/Tej-Katika/xl-forge",
    metrics: ["WCAG 2.1 AA", "Claude AI integration"],
    active: false,
  },
  {
    title: "JP Morgan Midas Core",
    description:
      "Completed the J.P. Morgan Advanced Software Engineering virtual experience — implemented core banking transaction processing logic, applied financial data handling patterns, and gained exposure to enterprise-grade Java architecture.",
    tags: ["Java", "Spring Boot", "Financial Systems"],
    github: "https://github.com/Tej-Katika/midas-core",
    metrics: ["JPMC Virtual Experience"],
    active: false,
  },
];

export function Projects() {
  return (
    <SectionWrapper id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel>Projects</SectionLabel>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
        Things I&apos;ve built
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`group gradient-border rounded-xl p-6 bg-card flex flex-col hover:bg-accent/30 transition-colors duration-300 ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2.5 pr-4">
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {project.title}
                </h3>
                {project.active && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5 shrink-0">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    Contributing
                  </span>
                )}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                aria-label={`GitHub: ${project.title}`}
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.metrics.map((m) => (
                <span
                  key={m}
                  className="text-xs font-mono text-primary/70 bg-primary/8 rounded px-2 py-0.5"
                >
                  {m}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs font-normal rounded-md"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-center"
      >
        <a
          href="https://github.com/Tej-Katika"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <GithubIcon className="h-4 w-4" />
          View more on GitHub
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
