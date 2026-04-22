import { GithubIcon, LinkedinIcon } from "@/components/icons";

const colophon = [
  {
    label: "Built with",
    value: "Next.js · TypeScript · Tailwind · Motion",
  },
  {
    label: "Hosted on",
    value: "Vercel · edge network",
  },
  {
    label: "Typeset in",
    value: "Geist Sans · Geist Mono",
  },
  {
    label: "Source",
    value: "github.com/Tej-Katika/portfolio",
    href: "https://github.com/Tej-Katika/portfolio",
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/70 mt-12 md:mb-7">
      {/* Top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* Header line */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[10px] text-primary/60 uppercase tracking-[0.22em]">
            /colophon
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.22em]">
            v2026.04
          </span>
        </div>

        {/* Giant signature + colophon grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
              signed —
            </p>
            <h3 className="font-black tracking-[-0.02em] leading-[0.9] text-[clamp(2.5rem,7vw,5rem)] uppercase text-foreground">
              Tejashwar<br />
              <span className="gradient-text">Reddy Katika</span>
            </h3>
          </div>

          <dl className="flex flex-col gap-3 font-mono text-[11px] md:text-right">
            {colophon.map((row) => (
              <div key={row.label} className="flex md:justify-end items-baseline gap-3">
                <dt className="text-muted-foreground/60 uppercase tracking-wider text-[10px]">
                  {row.label}
                </dt>
                <dd className="text-foreground/80">
                  {row.href ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors underline-offset-4 hover:underline"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/60 mt-12 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
          <span>
            © {year} · crafted in dallas · no tracking, no cookies, no dark patterns
          </span>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Tej-Katika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <GithubIcon className="h-3 w-3" /> github
            </a>
            <a
              href="https://linkedin.com/in/tejkatika1029"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="h-3 w-3" /> linkedin
            </a>
            <a
              href="mailto:tejashwar1029@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
