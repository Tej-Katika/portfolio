"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

// Character-by-character reveal for display name
const nameContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.35 } },
};

const charItem: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedWord({ word, className = "" }: { word: string; className?: string }) {
  return (
    <span className={`inline-block overflow-hidden align-bottom whitespace-nowrap ${className}`}>
      <motion.span
        variants={nameContainer}
        initial="hidden"
        animate="show"
        className="inline-block"
      >
        {Array.from(word).map((c, i) => (
          <motion.span key={i} variants={charItem} className="inline-block">
            {c === " " ? " " : c}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden texture-noise">

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Ambient gradients — radial only */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 70% -5%, oklch(0.67 0.23 272 / 0.12) 0%, transparent 70%), " +
            "radial-gradient(ellipse 500px 400px at 95% 65%, oklch(0.67 0.23 272 / 0.08) 0%, transparent 65%), " +
            "radial-gradient(ellipse 60% 40% at 50% 50%, transparent 40%, var(--background) 100%)",
        }}
      />

      {/* Schematic dimension markers — top-right corner of hero */}
      <div className="hidden lg:block absolute top-20 right-6 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/40 text-right leading-relaxed pointer-events-none">
        <div>rev · 2026.04</div>
        <div>build · stable</div>
        <div>layer · execution</div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-24 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          {/* ── Left: Text ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 min-w-0"
          >
            {/* Signals strip */}
            <motion.div variants={item} className="flex items-center gap-4 mb-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="text-emerald-400/90">available</span>
              </span>
              <span className="text-border">·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-primary/70" />
                <span>dallas, tx</span>
              </span>
              <span className="text-border">·</span>
              <span className="hidden sm:inline">focus <span className="text-foreground/80">ai · agents · orchestration</span></span>
            </motion.div>

            {/* Name — kinetic editorial treatment, stacked so no word breaks */}
            <motion.div variants={item} className="mb-6">
              <h1 className="font-black tracking-[-0.03em] leading-[0.9] uppercase">
                <span className="block text-[clamp(3rem,9vw,7rem)] text-foreground">
                  <AnimatedWord word="Tejashwar" />
                </span>
                <span className="block text-[clamp(3rem,9vw,7rem)] text-foreground">
                  <AnimatedWord word="Reddy" />
                </span>
                <span className="block text-[clamp(3rem,9vw,7rem)] gradient-text">
                  <AnimatedWord word="Katika" />
                </span>
              </h1>
            </motion.div>

            {/* Separator with schematic tick */}
            <motion.div
              variants={item}
              className="flex items-center gap-3 mb-7"
            >
              <div className="w-12 h-[2px] bg-primary rounded-full" />
              <span className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-[0.22em]">
                role · engineer
              </span>
            </motion.div>

            {/* Headline — updated framing with serif accent */}
            <motion.p
              variants={item}
              className="text-base md:text-lg text-muted-foreground font-light mb-8 max-w-lg leading-relaxed"
            >
              Building{" "}
              <span className="font-serif-display text-xl md:text-2xl text-foreground/90 normal-case">
                agentic
              </span>{" "}
              systems, cloud-native orchestration,
              and the{" "}
              <span className="font-serif-display text-xl md:text-2xl text-foreground/90 normal-case">
                interfaces
              </span>{" "}
              between them.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#projects"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full gap-2 font-medium"
                )}
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full font-medium"
                )}
              >
                Get in touch
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex items-center gap-6">
              {[
                { href: "https://github.com/Tej-Katika", icon: GithubIcon, label: "GitHub" },
                { href: "https://linkedin.com/in/tejkatika1029", icon: LinkedinIcon, label: "LinkedIn" },
                { href: "mailto:tejashwar1029@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex justify-center md:justify-end shrink-0"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute -inset-8 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 100% at 50% 50%, oklch(0.67 0.23 272 / 0.18) 0%, transparent 70%)",
                }}
              />
              {/* Decorative rings */}
              <div className="absolute -inset-3 rounded-full border border-primary/10 pointer-events-none" />
              <div className="absolute -inset-6 rounded-full border border-primary/5 pointer-events-none" />

              {/* Gradient border ring */}
              <div className="relative rounded-full p-[2px] bg-gradient-to-br from-primary/70 via-primary/30 to-transparent">
                <div className="rounded-full overflow-hidden w-52 h-52 md:w-60 md:h-60 bg-muted">
                  <Image
                    src="/avatar.png"
                    alt="Tejashwar Reddy Katika"
                    width={240}
                    height={240}
                    className="object-cover w-full h-full grayscale-[15%] contrast-[1.05]"
                    priority
                  />
                </div>
              </div>

              {/* Schematic annotation — avatar ID */}
              <div className="hidden md:block absolute -top-4 -right-2 font-mono text-[9px] text-muted-foreground/60 uppercase tracking-[0.2em] text-right leading-tight">
                <div>node · 01</div>
                <div className="text-emerald-400/80">status · live</div>
              </div>

              {/* Floating badge — currently building */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                className="absolute -bottom-4 -left-4 gradient-border bg-card rounded-xl px-3 py-2 shadow-lg"
              >
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-0.5">Currently</p>
                <p className="text-xs font-semibold text-foreground">Building Artha · Gr8Saver · Karmada</p>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-muted-foreground/50 tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
