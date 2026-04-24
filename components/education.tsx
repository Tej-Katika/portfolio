"use client";

import { SectionWrapper, SectionLabel } from "@/components/section-wrapper";
import { GraduationCap, Award } from "lucide-react";

const credentials = [
  {
    type: "education",
    title: "Master of Science — Computer Science",
    institution: "University of North Texas",
    meta: "Aug 2022 — May 2024 · Denton, TX",
    Icon: GraduationCap,
  },
  {
    type: "cert",
    title: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    meta: "Associate · Dec 2024 — Dec 2027",
    Icon: Award,
  },
  {
    type: "cert",
    title: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services",
    meta: "Oct 2024 — Oct 2027",
    Icon: Award,
  },
];

export function Education() {
  return (
    <SectionWrapper id="education" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel index="06">Education & Certifications</SectionLabel>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
        Academic & credentialed background
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {credentials.map(({ title, institution, meta, Icon, type }) => (
          <div
            key={title}
            className="relative gradient-border rounded-xl p-6 bg-card flex gap-4 corner-marks"
          >
            <span /><span /><span /><span />
            <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-[0.2em] mb-2">
                {type === "education" ? "Degree" : "Certification"}
              </p>
              <h3 className="text-sm font-semibold text-foreground mb-1 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-primary font-medium mb-2">{institution}</p>
              <p className="text-xs font-mono text-muted-foreground">{meta}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
