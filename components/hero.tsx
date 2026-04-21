"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Ambient gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">

          {/* Left — text content */}
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">

            {/* Status pills */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1.5">
                <MapPin className="h-3 w-3 text-primary" />
                Dallas, TX
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-4"
            >
              Tejashwar
              <br />
              <span className="gradient-text">Reddy Katika</span>
            </motion.h1>

            {/* Headline */}
            <motion.p
              variants={item}
              className="text-lg md:text-xl text-muted-foreground font-light mb-8 leading-relaxed"
            >
              Full-Stack Software & AI Engineer — building intelligent,
              cloud-native systems from zero to production.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-12">
              <a
                href="#projects"
                className={cn(buttonVariants({ size: "lg" }), "rounded-full gap-2 font-medium")}
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full font-medium")}
              >
                Get in touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-5">
              <a
                href="https://github.com/Tej-Katika"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 text-sm"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/tejkatika1029"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 text-sm"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="mailto:tejashwar1029@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 text-sm"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* Right — avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center md:justify-end shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-2xl scale-110" />
              {/* Border ring */}
              <div className="relative rounded-full p-[2px] bg-gradient-to-br from-primary/60 to-primary/10">
                <div className="rounded-full overflow-hidden w-52 h-52 md:w-64 md:h-64 bg-muted">
                  <Image
                    src="/avatar.jpeg"
                    alt="Tejashwar Reddy Katika"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
