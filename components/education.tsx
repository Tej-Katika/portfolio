"use client";

import { SectionWrapper, SectionLabel } from "@/components/section-wrapper";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <SectionWrapper id="education" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel>Education & Certifications</SectionLabel>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
        Academic background
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="gradient-border rounded-xl p-6 bg-card flex gap-4">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Master of Science — Computer Science
            </h3>
            <p className="text-sm text-primary font-medium mb-2">
              University of North Texas
            </p>
            <p className="text-xs font-mono text-muted-foreground">Oct 2022 — May 2024 · Denton, TX</p>
          </div>
        </div>

        <div className="gradient-border rounded-xl p-6 bg-card flex gap-4">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">
              AWS Certified Solutions Architect
            </h3>
            <p className="text-sm text-primary font-medium mb-2">Amazon Web Services</p>
            <p className="text-xs font-mono text-muted-foreground">Associate · Active</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
