import { EXPERIENCE } from "@/lib/data/experience";
import { ExperienceCard } from "@/components/experience-card";
import { motion } from "framer-motion";

export function Experience() {
  const currentExperience = EXPERIENCE.find((e) => e.company === "AiAware");
  const previousExperience = EXPERIENCE.filter((e) => e.company !== "AiAware");

  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">
        Current Position
      </h1>
      <p className="text-sm text-muted-foreground mb-6">
        Roles where I learned to ship reliably, automate the boring parts, and
        work well with others.
      </p>
      {currentExperience && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <ExperienceCard exp={currentExperience} />
        </motion.div>
      )}

      <h2 className="text-[1.66rem] font-semibold tracking-tight mt-8 mb-4">
        Past Roles
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {previousExperience.map((e, i) => (
          <motion.div
            key={e.company + e.period}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
          >
            <ExperienceCard exp={e} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
