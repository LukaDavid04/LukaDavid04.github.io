type Project = {
  name: string;
  desc: string;
  tags: string[];
  details: string;
  href?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "This Portfolio",
    desc: "A fast, accessible React and Vite portfolio with reusable UI, intentional motion, and tidy routing.",
    href: "https://lukadavid04.github.io/",
    tags: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
    ],
    details: `
**Overview**
Designed and built this portfolio to be fast, accessible, and easy to extend. It follows a lean, component-driven architecture with consistent theming and subtle motion that supports the content rather than competing with it.
**Headlines**
⚡ Lightning-fast React + Vite foundation with lean TypeScript components
🎨 Cohesive theming with purposeful motion and dark-mode polish
🧭 Clear routing and navigation so every page is easy to explore

**At a Glance**
- 6 pages (Home, Experience, Projects, Journal, Journal Detail, Layout)
- TypeScript, React, Vite, Tailwind CSS, Framer Motion, React Router

**Highlights**
- Reusable UI primitives (cards, badges, modal) with consistent styling and dark-mode support
- Responsive layouts with utility-first CSS and accessible navigation components
- Lightweight Framer Motion animations and Vite-powered builds for quick loads and smooth transitions
- Performance-first bundling, prefetching, and semantic HTML for accessibility
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
];
