import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/modal";

type Project = {
  name: string;
  desc: string;
  tags: string[];
  href?: string;
  details?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Card className="flex flex-col">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{project.name}</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground flex-1">
          <p>{project.desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t} variant="secondary" className="rounded-full">
                {t}
              </Badge>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <button onClick={() => setOpen(true)} className="px-3 py-1.5 rounded-md border text-foreground hover:bg-secondary/70 transition">
              View
            </button>
            {project.href && (
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md border hover:bg-secondary/70 transition">
                Open Link
              </a>
            )}
          </div>
        </CardContent>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)} title={project.name}>
        <div className="space-y-3 text-sm leading-6">
          {project.details ? (
            project.details.split("\n").map((line, i) => (
              <p key={i} className="whitespace-pre-wrap">
                {line}
              </p>
            ))
          ) : (
            <p>No additional details provided.</p>
          )}
          {project.href && (
            <p className="pt-2">
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="underline">
                Visit project
              </a>
            </p>
          )}
        </div>
      </Modal>
    </>
  );
}
