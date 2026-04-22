"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Animated dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Radial vignette overlay */}
      <div className="absolute inset-0 bg-radial-[ellipse_80%_60%_at_50%_50%] from-transparent to-background/80 pointer-events-none" />

      {/* Large ambient glow orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute top-1/2 -right-20 w-[350px] h-[350px] rounded-full bg-primary/6 blur-[80px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          {/* ── Left: Text ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 min-w-0"
          >
            {/* Status row */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground border border-border rounded-full px-3 py-1.5">
                <MapPin className="h-3 w-3 text-primary" />
                Dallas, TX
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name — massive editorial typography */}
            <motion.div variants={item} className="mb-6">
              <h1 className="font-black tracking-[-0.03em] leading-[0.92] uppercase">
                <span className="block text-[clamp(3.5rem,10vw,7.5rem)] text-foreground">
                  Tejashwar
                </span>
                <span className="block text-[clamp(3rem,8.5vw,6.5rem)] gradient-text">
                  Reddy Katika
                </span>
              </h1>
            </motion.div>

            {/* Separator line */}
            <motion.div
              variants={item}
              className="w-12 h-[2px] bg-primary mb-6 rounded-full"
            />

            {/* Headline */}
            <motion.p
              variants={item}
              className="text-base md:text-lg text-muted-foreground font-light mb-8 max-w-md leading-relaxed"
            >
              Full-Stack Software & AI Engineer —{" "}
              building intelligent, cloud-native systems
              from zero to production.
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
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-3xl scale-125 pointer-events-none" />
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-primary/10 pointer-events-none" />
              <div className="absolute -inset-6 rounded-full border border-primary/5 pointer-events-none" />
              {/* Gradient border ring */}
              <div className="relative rounded-full p-[2px] bg-gradient-to-br from-primary/70 via-primary/30 to-transparent">
                <div className="rounded-full overflow-hidden w-52 h-52 md:w-60 md:h-60 bg-muted">
                  <Image
                    src="/avatar.jpeg"
                    alt="Tejashwar Reddy Katika"
                    width={240}
                    height={240}
                    className="object-cover w-full h-full grayscale-[15%] contrast-[1.05]"
                    priority
                  />
                </div>
              </div>

              {/* Floating badge — currently building */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute -bottom-4 -left-4 gradient-border bg-card rounded-xl px-3 py-2 shadow-lg"
              >
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-0.5">Currently</p>
                <p className="text-xs font-semibold text-foreground">Contributing to Karmada</p>
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
