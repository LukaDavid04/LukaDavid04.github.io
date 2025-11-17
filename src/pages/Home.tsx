import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import headshot from "@/assets/TennisHeadshot2.jpg";
import headshotDark from "@/assets/TennisHeadshotDark.png";
import { PROFILE } from "@/lib/data/profile";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Home() {
  const summaryLines = PROFILE.summary.split("\n");
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="overflow-hidden">
            <div className="relative">
              <div className="h-48 sm:h-58 bg-gradient-to-br from-blue-500/40 via-violet-500/30 to-emerald-400/40 animate-shimmer bg-[length:200%_100%]" />{" "}
              <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:bg-slate-950/70 dark:text-slate-100">
                <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>{PROFILE.location}</span>
              </div>
              <div className="absolute -bottom-10 left-6 h-40 w-40 sm:h-29 sm:w-29 rounded-3xl ring-2 ring-white/70 dark:ring-black/40 shadow-xl overflow-hidden flex items-center justify-center">
                {/* Swap headshots based on theme using Tailwind dark: classes */}
                <img
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  src={headshot}
                  alt="Luka"
                  className="h-full w-full object-cover block dark:hidden"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  src={headshotDark}
                  alt="Luka"
                  className="h-full w-full object-cover hidden dark:block"
                />
              </div>
            </div>
            <CardContent className="pt-14 sm:pt-16">
              <h1 className="text-3xl font-semibold tracking-tight">
                {PROFILE.name}
              </h1>
              <p className="mt-1 text-muted-foreground">{PROFILE.title}</p>
              <p className="mt-4 max-w-2xl leading-relaxed">
                {summaryLines[0]}
                {summaryLines.slice(1).map((line, i) => {
                  const silver = "🥈";
                  if (line.includes(silver)) {
                    const parts = line.split(silver);
                    const before = parts[0] ?? "";
                    const after = parts.slice(1).join(silver) ?? "";
                    return (
                      <span key={i} className="block mt-4">
                        {before}
                        <span
                          className="annotation-word no-underline"
                          tabIndex={0}
                          aria-label="2025 Men's Finalists"
                          title="2025 Men's Finalists"
                        >
                          <span className="medal-shimmer">{"🥈"}</span>
                          <span className="annotation-tooltip top home-accent">{"2025 Men's Finalists"}</span>
                        </span>
                        {after}
                      </span>
                    );
                  }
                  return (
                    <span key={i} className="block mt-4">
                      {line}
                    </span>
                  );
                })}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {PROFILE.keywords.map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-full">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-3">
            What I focus on
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {PROFILE.principles.map((b) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
              >
                <Card className="hover:shadow-[0_3px_12px_rgba(99,102,241,0.14)] transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {b.body}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Right column */}
      <div className="space-y-6">
        {/* Get in touch nicer */}
        <div className="rounded-2xl border bg-card shadow-sm transition-shadow duration-200 hover:shadow-md dark:shadow-sm dark:transition-shadow dark:hover:shadow-[0_10px_24px_-20px_rgba(255,255,255,0.12)] dark:hover:ring-1 dark:hover:ring-white/10">
          <div className="p-6 pb-2">
            <h3 className="text-lg font-semibold tracking-tight">
              Get in touch
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              I'm open to interesting problems, collaborative builds, and
              learning opportunities.
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-secondary/70"
              >
                Email
              </a>
              <a
                href={PROFILE.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-secondary/70"
              >
                GitHub
              </a>
              <a
                href={PROFILE.links[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-secondary/70"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* You can keep or customize your "Currently" card here if desired */}
      </div>
    </div>
  );
}
