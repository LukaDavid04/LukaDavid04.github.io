export const PROJECTS = [
  {
    name: "This Portfolio",
    desc: "A lean, fast React + Vite portfolio with reusable UI, animations, and clean routing.",
    tags: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
    ],
    details: `
Overview
Built this portfolio to be fast, accessible, and easy to extend. It uses a small, component-driven design with tasteful motion and a tidy route structure.

At-a-glance
- Lines of code: 1,610 (ts, tsx, css under src)
- Pages: 6 (Home, Experience, Projects, Journal, Journal Detail, Layout)
- Tech: TypeScript, React, Vite, Tailwind CSS, Framer Motion, React Router

Highlights
- Reusable UI primitives (cards, badges, modal) and consistent styling
- Responsive design with utility-first CSS and sensible defaults
- Lightweight animations with Framer Motion; quick initial load via Vite
`.trim(),
  },
  {
    name: "uOttawa Tennis — Web Dev Team",
    desc: "Lead a team building the team website and analytics tools; coordinate roadmap, code quality, and delivery.",
    tags: ["Leadership", "Project Management", "Web Dev", "Analytics"],
    details: `
Scope
I manage the university tennis web development team delivering the website and internal analytical tools.

Responsibilities
- Roadmap ownership: define goals, priorities, and milestones with stakeholders
- Team leadership: task breakdown, sprint planning, and unblock teammates
- Engineering quality: reviews, standards, docs, and CI hygiene
- Delivery: ship site features and analytics dashboards used by coaches/players

Impact
- Faster iteration cycles and clearer ownership
- Higher reliability of analytics used for match preparation and review
`.trim(),
  },
  {
    name: "Fitshare (Capstone)",
    desc: "Capstone project where I served as Scrum Master and Backend Lead.",
    tags: ["Scrum", "Backend", "API", "Capstone"],
    details: `
Overview
Fitshare is my capstone project; I led backend architecture while serving as Scrum Master.

Contributions
- Scrum: sprint planning, backlog grooming, velocity tracking, and retros
- Backend: service/API design, data modeling, auth, and testing strategy
- DevEx: CI setup, code review standards, and developer documentation

Notes
Add the repository link to this card to enable the Open Link button.
`.trim(),
  },
]
