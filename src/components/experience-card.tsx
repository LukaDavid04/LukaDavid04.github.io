import { useCallback, useMemo, useRef, useState } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Modal } from '@/components/modal'

type Exp = { company: string; role: string; period: string; location: string; highlights: string[]; stack: string[] }
export function ExperienceCard({ exp }: { exp: Exp }) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const subtitle = useMemo(() => `${exp.company} • ${exp.period}`, [exp.company, exp.period])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    triggerRef.current?.blur()
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        ref={triggerRef}
        className="group h-full w-full cursor-pointer text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`Read more about ${exp.role} at ${exp.company}`}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Card
          className="h-full transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:shadow-[0_3px_12px_rgba(99,102,241,0.14)] group-focus-visible:-translate-y-0.5 group-focus-visible:shadow-[0_3px_12px_rgba(99,102,241,0.14)]"
        >
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <CardTitle className="text-lg">{exp.role}</CardTitle>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <Badge variant="outline" className="rounded-full whitespace-nowrap">{exp.period}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-xs text-muted-foreground">{exp.location}</p>
            <ul className="space-y-2 text-sm list-disc pl-5">
              {exp.highlights.slice(0, 2).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.stack.slice(0, 4).map((s) => (
                <Badge key={s} variant="secondary" className="rounded-full">
                  {s}
                </Badge>
              ))}
              {exp.stack.length > 4 ? (
                <Badge variant="secondary" className="rounded-full">
                  +{exp.stack.length - 4} more
                </Badge>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </button>
      <Modal open={isOpen} onClose={handleClose} title={exp.role} description={subtitle}>
        <div className="space-y-4">
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Location:</span> {exp.location}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Highlights</h3>
            <ul className="mt-2 space-y-2 text-sm list-disc pl-5">
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Tech Stack</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.stack.map((s) => (
                <Badge key={s} variant="secondary" className="rounded-full">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
