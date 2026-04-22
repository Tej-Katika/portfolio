"use client";

import { SectionWrapper, SectionLabel } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const bentoItems = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "Go", "SQL"],
    span: "md:col-span-2",
    accent: true,
    description: "Polyglot across the full stack",
  },
  {
    category: "AI / ML",
    skills: ["Scikit-Learn", "Pandas", "SageMaker", "Claude AI", "Forecasting"],
    span: "md:col-span-1",
    accent: false,
    description: "From data pipelines to inference",
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS"],
    span: "md:col-span-1",
    accent: false,
    description: "Interfaces that feel alive",
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Node.js", "REST APIs", "Serverless"],
    span: "md:col-span-1",
    accent: false,
    description: "APIs built for scale",
  },
  {
    category: "DevOps & Tools",
    skills: ["GitHub Actions", "Docker", "Kubernetes", "AWS CDK", "CI/CD"],
    span: "md:col-span-1",
    accent: false,
    description: "Ship fast, break nothing",
  },
  {
    category: "Cloud & AWS",
    skills: ["Lambda", "SageMaker", "S3", "API Gateway", "Glue", "Step Functions", "Amplify", "Vercel"],
    span: "md:col-span-2",
    accent: true,
    description: "AWS Certified Solutions Architect · Associate",
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel index="02">Skills</SectionLabel>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
        Tools of the trade
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bentoItems.map((item, i) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`relative gradient-border rounded-2xl p-6 bg-card overflow-hidden group hover:bg-accent/20 transition-colors duration-300 ${item.span}`}
          >
            {/* Decorative background label */}
            <span className="absolute -bottom-3 -right-2 text-7xl font-black text-foreground/[0.03] select-none pointer-events-none font-mono uppercase leading-none">
              {item.category.split(" ")[0]}
            </span>

            {/* Accent glow for featured cells */}
            {item.accent && (
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            )}

            <p className="text-xs font-mono font-medium text-primary uppercase tracking-[0.18em] mb-1">
              {item.category}
            </p>
            <p className="text-xs text-muted-foreground mb-4 font-mono">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs font-normal rounded-lg"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
