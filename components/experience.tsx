"use client";

import { SectionWrapper, SectionLabel } from "@/components/section-wrapper";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Automate IT Inc",
    period: "Sep 2024 — Present",
    location: "Dallas, TX",
    bullets: [
      "Design and deploy cloud-native solutions leveraging AWS services including Lambda, API Gateway, S3, and SageMaker.",
      "Build and maintain full-stack applications using Java, Spring Boot, React, and TypeScript.",
      "Drive CI/CD pipeline automation with GitHub Actions and AWS CDK for reliable, repeatable deployments.",
      "Collaborate cross-functionally to deliver scalable, production-grade software aligned with business requirements.",
    ],
  },
  {
    role: "Assistant Engineer",
    company: "University of North Texas",
    period: "Oct 2022 — May 2024",
    location: "Denton, TX",
    bullets: [
      "Supported engineering operations and technical infrastructure across campus systems.",
      "Diagnosed and resolved hardware and software issues, maintaining high availability across facilities.",
      "Collaborated with engineering teams to implement and test technology solutions for the university.",
    ],
  },
];

export function Experience() {
  return (
    <SectionWrapper id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel index="03">Experience</SectionLabel>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
        Where I&apos;ve worked
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden md:block" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="md:pl-10 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary ring-4 ring-background hidden md:block -translate-x-[3.5px]" />

              <div className="gradient-border rounded-xl p-6 bg-card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono text-muted-foreground">
                      {exp.period}
                    </p>
                    <p className="text-xs text-muted-foreground">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                    >
                      <span className="text-primary mt-1 shrink-0">–</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
