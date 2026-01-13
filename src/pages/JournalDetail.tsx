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

      {entry.image ? (
        <figure className="mt-6">
          <img
            src={entry.image.src}
            alt={entry.image.alt}
            className="w-full rounded-lg border bg-muted/30"
            loading="lazy"
          />
          {entry.image.caption ? (
            <figcaption className="mt-2 text-xs text-muted-foreground">
              {entry.image.caption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      <div className="prose prose-sm sm:prose-base dark:prose-invert mt-6">
        {entry.content.split("\n\n").map((paragraph, paragraphIndex) => {
          const tokens = paragraph.split(/(\s+)/);
          const wordTokenIndices: number[] = [];
          const wordTokens: string[] = [];
          tokens.forEach((token, tokenIndex) => {
            if (!/^\s+$/.test(token) && token !== "") {
              wordTokenIndices.push(tokenIndex);
              wordTokens.push(token);
            }
          });

          const commentRanges = (entry.comments ?? [])
            .filter((comment) => comment.paragraph === paragraphIndex)
            .map((comment) => {
              const phraseWords = comment.target.trim().split(/\s+/).filter(Boolean);
              if (phraseWords.length === 0) {
                return null;
              }
              let remaining = comment.occurrence ?? 0;
              for (let i = 0; i <= wordTokens.length - phraseWords.length; i += 1) {
                const matches = phraseWords.every(
                  (word, offset) => wordTokens[i + offset] === word,
                );
                if (!matches) {
                  continue;
                }
                if (remaining > 0) {
                  remaining -= 1;
                  continue;
                }
                return {
                  comment,
                  startWordIndex: i,
                  endWordIndex: i + phraseWords.length - 1,
                };
              }
              return null;
            })
            .filter((range): range is NonNullable<typeof range> => range !== null);

          const rangeByStart = new Map(
            commentRanges.map((range) => [range.startWordIndex, range]),
          );
          let wordCount = 0;

          return (
            <p key={paragraphIndex} className="leading-7 whitespace-pre-wrap">
              {(() => {
                const rendered: JSX.Element[] = [];
                let tokenIndex = 0;
                while (tokenIndex < tokens.length) {
                  const token = tokens[tokenIndex];
                  if (/^\s+$/.test(token) || token === "") {
                    rendered.push(
                      <span key={`${paragraphIndex}-space-${tokenIndex}`}>{token}</span>,
                    );
                    tokenIndex += 1;
                    continue;
                  }

                  const range = rangeByStart.get(wordCount);
                  if (range) {
                    const endTokenIndex = wordTokenIndices[range.endWordIndex];
                    const phraseTokens = tokens.slice(tokenIndex, endTokenIndex + 1);
                    rendered.push(
                      <span
                        key={`${paragraphIndex}-annotation-${tokenIndex}`}
                        className="annotation-word"
                        tabIndex={0}
                      >
                        {phraseTokens.map((phraseToken, phraseIndex) => (
                          <span key={`${paragraphIndex}-phrase-${tokenIndex}-${phraseIndex}`}>
                            {phraseToken}
                          </span>
                        ))}
                        <span className="annotation-tooltip">{range.comment.text}</span>
                      </span>,
                    );

                    for (let i = wordCount; i <= range.endWordIndex; i += 1) {
                      const link = linkMap.get(`${paragraphIndex}-${i}`);
                      if (link) {
                        rendered[rendered.length - 1] = (
                          <a
                            key={`${paragraphIndex}-annotation-link-${tokenIndex}`}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="underline decoration-2 underline-offset-4 text-primary hover:text-primary/80"
                          >
                            {rendered[rendered.length - 1]}
                          </a>
                        );
                        break;
                      }
                    }

                    wordCount = range.endWordIndex + 1;
                    tokenIndex = endTokenIndex + 1;
                    continue;
                  }

                  const link = linkMap.get(`${paragraphIndex}-${wordCount}`);
                  const wordKey = `${paragraphIndex}-word-${tokenIndex}`;
                  let wordElement: JSX.Element = <span key={wordKey}>{token}</span>;

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

                  rendered.push(wordElement);
                  wordCount += 1;
                  tokenIndex += 1;
                }
                return rendered;
              })()}
            </p>
          );
        })}
      </div>
    </article>
  );
}
