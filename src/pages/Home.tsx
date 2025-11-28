import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import headshot from "@/assets/TennisHeadshot2.jpg";
import headshotDark from "@/assets/TennisHeadshotDark.png";
import { PROFILE } from "@/lib/data/profile";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Modal } from "@/components/modal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Home() {
  const aboutCards = useMemo(
    () => [
      {
        key: "project",
        title: "Current Project",
        subtitle: "This Portfolio",
        description: "Check out a recent project I've been working on!",
        cta: { label: "View projects", href: "/projects" },
      },
      {
        key: "position",
        title: "Current Position",
        subtitle: "AiAware SWE",
        description: "What I'm up to and where.",
        cta: { label: "See experience", href: "/experience" },
      },
      {
        key: "journal",
        title: "Journal Highlight",
        subtitle: "Achieving a dream goal",
        description: "Take a dive into my personal side",
        cta: { label: "Read the journal", href: "/journal/achieving-a-dream" },
      },
      {
        key: "quick-bites",
        title: "Quick bites",
        subtitle: "A small pop-up story",
        description:
          "Title: \"In-yun\" (인연)\nText : \"In-yun\" (인연) is a Korean concept that signifies a fated or destined connection between people, suggesting that relationships have roots in past lives. It is believed that even brief encounters, like two strangers' clothes brushing, have a deeper meaning and have been shaped by a connection that spans many lifetimes. For example, a marriage is said to result from 8,000 layers of in-yun accumulated over 8,000 lives.",
      },
    ],
    [],
  );

  const summaryLines = PROFILE.summary.split("\n");
  const [activeCardKey, setActiveCardKey] = useState<string | null>(null);
  const activeCard = aboutCards.find((card) => card.key === activeCardKey);

  const quickBite = aboutCards.find((card) => card.key === "quick-bites");
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
            About Me
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {aboutCards.map((card) => (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
              >
                <button
                  type="button"
                  onClick={() => setActiveCardKey(card.key)}
                  className="block w-full text-left"
                >
                  <Card className="h-full hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(99,102,241,0.16)] transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between gap-3">
                        <CardTitle className="text-base">{card.title}</CardTitle>
                        <span className="text-xs rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800 dark:bg-blue-500/10 dark:text-blue-100">
                          {card.subtitle}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-3">
                      <p>
                        {card.key === "quick-bites"
                          ? "Tap for a short story."
                          : "Opens a pop-up with details and a quick path to the page."}
                      </p>
                      {card.cta ? (
                        <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-300">
                          Go to page
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-300">
                          Quick bite
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                      )}
                    </CardContent>
                  </Card>
                </button>
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

      <Modal
        open={Boolean(activeCard)}
        onClose={() => setActiveCardKey(null)}
        title={activeCard?.title}
        description={activeCard?.subtitle}
      >
        {activeCard ? (
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            {activeCard.key === "quick-bites" && quickBite ? (
              <div className="space-y-2">
                <p className="font-semibold text-foreground">{quickBite.description.split("\n")[0]}</p>
                <p>{quickBite.description.split("\n").slice(1).join("\n")}</p>
              </div>
            ) : (
              <p>{activeCard.description}</p>
            )}

            {activeCard.cta ? (
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link to={activeCard.cta.href}>
                    {activeCard.cta.label}
                  </Link>
                </Button>
                <Button variant="ghost" onClick={() => setActiveCardKey(null)}>
                  Close
                </Button>
              </div>
            ) : (
              <div className="flex justify-end">
                <Button variant="secondary" onClick={() => setActiveCardKey(null)}>
                  Close
                </Button>
              </div>
            )}
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
