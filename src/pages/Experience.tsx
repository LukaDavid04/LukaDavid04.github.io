import { EXPERIENCE } from '@/lib/data/experience'
import { ExperienceCard } from '@/components/experience-card'
import { motion } from 'framer-motion'

export function Experience() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">Co-op Internships & Past Experience</h1>
      <p className="text-sm text-muted-foreground mb-6">Roles where I learned to ship reliably, automate the boring parts, and work well with others.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {EXPERIENCE.map((e, i) => (
          <motion.div key={e.company + e.period} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .35, delay: i * 0.04 }}>
            <ExperienceCard exp={e} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
