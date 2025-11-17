import * as React from "react";
import { Input } from "@/components/ui/input";
import { JOURNAL } from "@/lib/data/journal";
import { JournalEntry } from "@/components/journal-entry";
import TypewriterGif from "@/assets/typewriter.gif";
import AltTypewriterGif from "@/assets/alt_typewriter.gif";

export function Journal() {
  const [q, setQ] = React.useState("");
  const filtered = React.useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return JOURNAL;
    return JOURNAL.filter(
      (j) =>
        j.title.toLowerCase().includes(s) ||
        j.excerpt.toLowerCase().includes(s) ||
        j.tags.join(" ").toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <section>
      <div className="flex items-end justify-between gap-4 mb-4">
        <h1 className="text-3xl font-semibold tracking-tight">Journal</h1>
        <Input
          placeholder="Search…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-56"
        />
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Working notes and short essays.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((j) => (
          <JournalEntry key={j.title} entry={j} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-md text-center">
          <figure className="relative mx-auto w-full">
            <img
              src={TypewriterGif}
              alt="Animated typewriter typing"
              loading="lazy"
              className="w-full dark:hidden"
            />
            <img
              src={AltTypewriterGif}
              alt="Animated typewriter typing (dark mode)"
              loading="lazy"
              className="hidden dark:block w-4/5 mx-auto rounded-xl shadow-lg ring-1 ring-white/10"
            />
          </figure>
          <div className="mt-4 space-y-2">
            <p className="text-base font-medium text-foreground">
              Transcribing handwritten entries
            </p>
            <p className="text-sm text-muted-foreground">
              I'm still moving pages from my notebook into the digital journal.
              More stories will appear soon, thanks for checking back!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
