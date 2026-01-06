import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import headshot320 from "@/assets/TennisHeadshot2-320.jpg";
import headshot640 from "@/assets/TennisHeadshot2-640.jpg";
import headshotDark320 from "@/assets/TennisHeadshotDark-320.png";
import headshotDark640 from "@/assets/TennisHeadshotDark-640.png";
import { PROFILE } from "@/lib/data/profile";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Modal } from "@/components/modal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type AboutCard =
  | {
      key: "quick-bites";
      kind: "modal";
      title: string;
      subtitle: string;
      description: string;
    }
  | {
      key: "project" | "position" | "journal";
      kind: "link";
      title: string;
      subtitle: string;
      description: string;
      cta: { label: string; href: string };
    };

export function Home() {
  const aboutCards: AboutCard[] = useMemo(
    () => [
      {
        key: "project",
        kind: "link",
        title: "Recent Project",
        subtitle: "This Portfolio",
        description: "Check out what's going on under the hood.",
        cta: {
          label: "View projects",
          href: "/projects?project=this-portfolio",
        },
      },
      {
        key: "position",
        kind: "link",
        title: "Current Position",
        subtitle: "AiAware SWE",
        description: "What my day-to-day looks like.",
        cta: { label: "See experience", href: "/experience" },
      },
      {
        key: "journal",
        kind: "link",
        title: "Journal Highlight",
        subtitle: "Achieving a dream goal",
        description: "Editorial selection of the week.",
        cta: {
          label: "Read the journal",
          href: "/journal/achieving-a-dream",
        },
      },
      {
        key: "quick-bites",
        kind: "modal",
        title: "Quick bites",
        subtitle: "Check back for more!",
        description:
          "In-yun (From Past Lives): \n In-yun (인연), is a Korean concept that signifies a fated or destined connection between people, suggesting that relationships have roots in past lives. It is believed that even brief encounters, like two strangers' clothes brushing, have a deeper meaning and have been shaped by a connection that spans many lifetimes. For example, a marriage is said to result from 8,000 layers of in-yun accumulated over 8,000 lives.",
      },
    ],
    []
  );

  const summaryLines = PROFILE.summary.split("\n");
  const [activeCardKey, setActiveCardKey] = useState<"quick-bites" | null>(
    null
  );

  const quickBite = aboutCards.find(
    (card): card is Extract<AboutCard, { key: "quick-bites" }> =>
      card.key === "quick-bites"
  );
  const quickBiteLines = useMemo(
    () => quickBite?.description.split("\n"),
    [quickBite?.description]
  );
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  src={headshot320}
                  srcSet={`${headshot320} 320w, ${headshot640} 640w`}
                  sizes="160px"
                  alt="Luka"
                  width={320}
                  height={320}
                  className="h-full w-full object-cover block dark:hidden [image-rendering:auto] [backface-visibility:hidden] [transform:translateZ(0)]"
                />
                <img
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  src={headshotDark320}
                  srcSet={`${headshotDark320} 320w, ${headshotDark640} 640w`}
                  sizes="160px"
                  alt="Luka"
                  width={320}
                  height={320}
                  className="h-full w-full object-cover hidden dark:block [image-rendering:auto] [backface-visibility:hidden] [transform:translateZ(0)]"
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
                          <span className="annotation-tooltip top home-accent">
                            {"2025 Men's Finalists"}
                          </span>
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
            Dive in and Explore
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
                {card.kind === "modal" ? (
                  <button
                    type="button"
                    onClick={() => setActiveCardKey("quick-bites")}
                    className="block w-full text-left"
                  >
                    <Card className="h-full hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(99,102,241,0.16)] transition-all duration-300">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between gap-3">
                          <CardTitle className="text-base">
                            {card.title}
                          </CardTitle>
                          <span className="text-xs rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800 dark:bg-blue-500/10 dark:text-blue-100">
                            {card.subtitle}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground space-y-3">
                        <p>Something that crossed my mind recently.</p>
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
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </span>
                      </CardContent>
                    </Card>
                  </button>
                ) : (
                  <Link to={card.cta.href} className="block w-full text-left">
                    <Card className="h-full hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(99,102,241,0.16)] transition-all duration-300">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between gap-3">
                          <CardTitle className="text-base">
                            {card.title}
                          </CardTitle>
                          <span className="text-xs rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800 dark:bg-blue-500/10 dark:text-blue-100">
                            {card.subtitle}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground space-y-3">
                        <p>{card.description}</p>
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
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                        ) : null}
                      </CardContent>
                    </Card>
                  </Link>
                )}
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
        {/* <div className="rounded-2xl border bg-card shadow-sm transition-shadow duration-200 hover:shadow-md dark:shadow-sm dark:transition-shadow dark:hover:shadow-[0_10px_24px_-20px_rgba(255,255,255,0.12)] dark:hover:ring-1 dark:hover:ring-white/10">
          <div className="p-6 pb-4">
            <h3 className="text-lg font-semibold tracking-tight">Education</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {PROFILE.education.school}
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">Program</p>
                  <p className="font-medium leading-tight">
                    {PROFILE.education.program}
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="rounded-full whitespace-nowrap"
                >
                  {PROFILE.education.distinction}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Graduated with academic distinction, balancing engineering,
                leadership, and athletics.
              </p>
            </div>
          </div>
        </div> */}
      </div>

      <Modal
        open={activeCardKey === "quick-bites" && Boolean(quickBite)}
        onClose={() => setActiveCardKey(null)}
        title={quickBite?.title}
        description={quickBite?.subtitle}
      >
        {quickBite && quickBiteLines ? (
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <div className="space-y-2">
              <p className="font-semibold text-foreground">
                {quickBiteLines[0]}
              </p>
              <p>{quickBiteLines.slice(1).join("\n")}</p>
            </div>

            <div className="flex justify-end">
              <Button
                variant="secondary"
                onClick={() => setActiveCardKey(null)}
              >
                Close
              </Button>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
