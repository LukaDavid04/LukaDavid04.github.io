import { useParams, Link } from "react-router-dom";
import { JOURNAL } from "@/lib/data/journal";
import { ArrowLeft } from "lucide-react";

export function JournalDetail() {
  const { slug } = useParams<{ slug: string }>();
  const entry = JOURNAL.find((j) => j.slug === slug);

  if (!entry) {
    return (
      <div>
        <p className="text-sm text-muted-foreground">Entry not found.</p>
        <Link to="/journal" className="underline text-sm">Back to Journal</Link>
      </div>
    );
  }

  const commentMap = new Map(
    (entry.comments ?? []).map((comment) => [
      `${comment.paragraph}-${comment.wordIndex}`,
      comment,
    ] as const),
  );

  const linkMap = new Map(
    (entry.links ?? []).map((link) => [
      `${link.paragraph}-${link.wordIndex}`,
      link,
    ] as const),
  );

  return (
    <article className="max-w-3xl">
      <Link to="/journal" className="inline-flex items-center gap-2 text-sm underline mb-4">
        <ArrowLeft className="h-4 w-4" /> Back to Journal
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight">{entry.title}</h1>
      <div className="text-xs text-muted-foreground mt-1">{new Date(entry.date).toLocaleDateString()}</div>

      <div className="prose prose-sm sm:prose-base dark:prose-invert mt-6">
        {entry.content.split("\n\n").map((paragraph, paragraphIndex) => {
          const tokens = paragraph.split(/(\s+)/);
          let wordCount = 0;

          return (
            <p key={paragraphIndex} className="leading-7 whitespace-pre-wrap">
              {tokens.map((token, tokenIndex) => {
                if (/^\s+$/.test(token) || token === "") {
                  return <span key={`${paragraphIndex}-space-${tokenIndex}`}>{token}</span>;
                }

                const comment = commentMap.get(`${paragraphIndex}-${wordCount}`);
                const link = linkMap.get(`${paragraphIndex}-${wordCount}`);
                const wordKey = `${paragraphIndex}-word-${tokenIndex}`;
                let wordElement = comment ? (
                  <span key={`${wordKey}-annotation`} className="annotation-word" tabIndex={0}>
                    {token}
                    <span className="annotation-tooltip">{comment.text}</span>
                  </span>
                ) : (
                  <span key={wordKey}>{token}</span>
                );

                if (link) {
                  wordElement = (
                    <a
                      key={`${wordKey}-link`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline decoration-2 underline-offset-4 text-primary hover:text-primary/80"
                    >
                      {wordElement}
                    </a>
                  );
                }

                wordCount += 1;
                return wordElement;
              })}
            </p>
          );
        })}
      </div>
    </article>
  );
}
