import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import type { JournalEntryType } from "@/lib/data/journal";

export function JournalEntry({ entry }: { entry: JournalEntryType }) {
  return (
    <Link to={`/journal/${entry.slug}`} className="block group">
      <Card className="group-hover:border-foreground/50 transition-colors">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{entry.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {entry.image ? (
            <div className="mb-3 overflow-hidden rounded-md border bg-muted/30">
              <img
                src={entry.image.src}
                alt={entry.image.alt}
                className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          ) : null}
          <div className="text-xs text-muted-foreground">
            {new Date(entry.date).toLocaleDateString()}
          </div>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
            {entry.excerpt}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {entry.tags.map((t) => (
              <Badge key={t} variant="secondary" className="rounded-full">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
