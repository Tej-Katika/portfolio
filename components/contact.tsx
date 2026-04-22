"use client";

import { useState } from "react";
import { SectionWrapper, SectionLabel } from "@/components/section-wrapper";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const EMAIL = "tejashwar1029@gmail.com";

const socials = [
  {
    label: "GitHub",
    handle: "@Tej-Katika",
    href: "https://github.com/Tej-Katika",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    handle: "tejkatika1029",
    href: "https://linkedin.com/in/tejkatika1029",
    Icon: LinkedinIcon,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel index="07">Contact</SectionLabel>

      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Let&apos;s build something{" "}
          <span className="gradient-text">together.</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          I&apos;m open to new opportunities, collaborations, and interesting
          conversations. Whether you have a project in mind or just want to
          connect — reach out.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full gap-2 mb-12 inline-flex"
          )}
        >
          Say hello <ArrowUpRight className="h-4 w-4" />
        </a>

        {/* Email copy card */}
        <div className="gradient-border rounded-xl p-4 bg-card flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground truncate">{EMAIL}</p>
            </div>
          </div>
          <button
            onClick={copyEmail}
            className="shrink-0 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-muted"
            aria-label="Copy email"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-emerald-500">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy
              </>
            )}
          </button>
        </div>

        {/* Social cards */}
        <div className="flex flex-col sm:flex-row gap-4">
          {socials.map(({ label, handle, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group gradient-border rounded-xl p-4 bg-card flex items-center gap-3 flex-1 hover:bg-accent/30 transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm font-medium text-foreground truncate">{handle}</p>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
