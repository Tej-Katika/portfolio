"use client";

import { SectionWrapper, SectionLabel } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "Go", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Node.js", "REST APIs", "AWS Lambda", "Serverless"],
  },
  {
    category: "Cloud & Infra",
    skills: [
      "AWS (SageMaker, Glue, S3, CDK)",
      "Lambda",
      "API Gateway",
      "Step Functions",
      "EventBridge",
      "Amplify",
      "Vercel",
    ],
  },
  {
    category: "AI / ML",
    skills: [
      "Scikit-Learn",
      "Pandas",
      "Amazon SageMaker",
      "Claude AI",
      "Forecasting Models",
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Git",
      "CI/CD",
      "AWS CDK",
    ],
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel>Skills</SectionLabel>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
        Tools of the trade
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIdx * 0.07 }}
            className="gradient-border rounded-xl p-5 bg-card"
          >
            <p className="text-xs font-mono font-medium text-primary uppercase tracking-[0.15em] mb-4">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs font-normal rounded-md"
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
