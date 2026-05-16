import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { PROJECTS } from '@/lib/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Projects() {
  const [expanded, setExpanded] = React.useState<number | null>(null)
  const sectionRefs = React.useRef<Array<HTMLElement | null>>([])
  const [searchParams] = useSearchParams()

  const shouldIgnoreCardActivation = (target: EventTarget | null) => {
    if (!(target instanceof HTMLElement)) return false
    return Boolean(target.closest('a,button'))
  }

  const toggle = (i: number) => {
    setExpanded((prev) => (prev === i ? null : i))
  }

  React.useEffect(() => {
    const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const projectSlug = searchParams.get('project')
    if (!projectSlug) return

    const targetIndex = PROJECTS.findIndex((project) => slugify(project.name) === projectSlug)
    if (targetIndex === -1) return

    setExpanded(targetIndex)
    queueMicrotask(() => {
      const el = sectionRefs.current[targetIndex]
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    })
  }, [searchParams])

  const handleCardClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    if (shouldIgnoreCardActivation(event.target)) return
    toggle(index)
  }

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLElement>, index: number) => {
    if (shouldIgnoreCardActivation(event.target)) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggle(index)
    }
  }

  return (
    <section>
      <header className="mb-10">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Passion Projects</p>
        <h1 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-tight">Passion Projects</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">Browse projects and expand any entry to read more. Use the link to visit the live site or repository.</p>
      </header>

      <div className="space-y-6">
        {PROJECTS.map((p, i) => {
          const isOpen = expanded === i
          const alt = i % 2 === 1
          return (
            <section
              key={p.name}
              ref={(el) => (sectionRefs.current[i] = el)}
              className={`relative rounded-2xl border p-6 sm:p-8 shadow-lg transition-shadow duration-200 hover:shadow-xl ring-1 ring-transparent hover:ring-transparent dark:hover:ring-violet-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary cursor-pointer ${
                alt ? 'bg-gradient-to-b from-background/65 to-background/35' : 'bg-gradient-to-b from-background to-background/60'
              }`}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={(event) => handleCardClick(event, i)}
              onKeyDown={(event) => handleCardKeyDown(event, i)}
            >
              {/* Hover teaser overlay */}
              {/* Neutral overlay on light; violet tint only in dark */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-[0.03] dark:opacity-0 dark:hover:opacity-[0.04]" style={{ background: 'radial-gradient(600px 200px at 80% -10%, transparent, transparent)' }} />
              <div className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-300 dark:block dark:hover:opacity-[0.05]" style={{ background: 'radial-gradient(600px 200px at 80% -10%, rgba(139,92,246,0.6), transparent)' }} />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{p.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{p.desc}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  {p.href && p.name !== "This Portfolio" ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors">
                      Open Link ↗
                    </a>
                  ) : null}
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="text-sm underline underline-offset-4 hover:opacity-80"
                  >
                    {isOpen ? 'Show less' : 'Read more →'}
                  </button>
                </div>
              </div>

              {/* Tag ribbon */}
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-full px-2 py-0.5 text-[10px]">
                    {t}
                  </Badge>
                ))}
              </div>

              {/* Expanded content */}
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="mt-5 space-y-3 text-sm leading-6 overflow-hidden"
                  >
                    {(p.details ?? '').split('\n').map((line, idx) => {
                      const boldMatch = line.match(/^\*\*(.+)\*\*$/)

                      if (boldMatch) {
                        return (
                          <p key={idx} className="font-semibold">
                            {boldMatch[1]}
                          </p>
                        )
                      }

                      return (
                        <p key={idx} className="whitespace-pre-wrap">
                          {line}
                        </p>
                      )
                    })}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </section>
          )
        })}
      </div>
    </section>
  )
}
