type Project = {
  name: string;
  desc: string;
  tags: string[];
  details: string;
  href?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "URSA – Urban Reasoning & Spatial Analysis",
    desc: "A natural-language, map-based spatial analysis assistant that translates typed commands into deterministic, auditable map interactions over open urban data.",
    href: "https://github.com/LukaDavid04/ursa-spatial-analysis",
    tags: [
      "TypeScript",
      "React",
      "Vite",
      "FastAPI",
      "Docker",
      "OpenAI",
      "GeoJSON",
    ],
    details: `
**Overview**
URSA is a natural-language spatial analysis assistant built on open urban data. Users issue typed commands that are translated into deterministic, schema-validated map actions — keeping LLM output as a proposal, never a direct mutation of state.

**Headlines**
🗺️ Natural-language commands drive auditable, multi-step map interactions
🔒 Deterministic execution with schema validation and permission checks
📜 Immutable event log for full audit history and replay

**At a Glance**
- Stack: React + Vite frontend, FastAPI backend, LLM planning layer, Docker services
- Data: GeoJSON geometries, spatial indexes, overlay catalogs, immutable event logs
- UX: Ambiguity resolution, serialized multi-step actions, command history

**Highlights**
- LLM planner emits structured action plans validated against explicit schemas before execution
- Supports assets, overlays, and events with spatial indexing and bounding-box queries
- Async orchestration with streaming partial responses for low-latency feedback
- Designed for urban planners, operations teams, and analysts querying spatial data conversationally
`.trim(),
  },
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
    name: "uOttawa Tennis - Web Dev Team",
    desc: "Lead the varsity tennis web dev squad delivering the public site and analytics; own roadmap, quality, and delivery.",
    tags: ["Leadership", "Product Strategy", "Web Dev", "Analytics", "Ops"],
    details: `
**Overview**
I lead the uOttawa varsity tennis web dev squad delivering the public site and internal analytics for coaches and players.

**Headlines**
🧭 Roadmap ownership with coaches and execs; translate needs into releases
🛡️ Engineering quality guardrails: standards, reviews, docs, and CI hygiene
🚀 Delivery of site updates and analytics workflows that support match prep

**At a Glance**
- Scope: marketing site, roster/news updates, analytics dashboards, internal tools
- Team: small student dev group with clear roles, issues, and demo cadence
- Rhythm: sprint planning, standups, demos, and retros that keep shipping velocity high

**Highlights**
- Reworked the site layout and content structure for quicker publishing and better accessibility
- Built analytics dashboards to surface match stats and lineup notes for prep and review
- Introduced release checklists, templates, and automated lint/test gates to keep quality consistent
`.trim(),
  },
  {
    name: "Fitshare (Capstone)",
    desc: "Capstone project where I led backend architecture and kept the team unblocked as Scrum Master.",
    tags: ["Scrum", "Backend", "API", "DevEx", "Capstone"],
    details: `
**Overview**
Fitshare is my capstone project. I led backend architecture while keeping the team moving as Scrum Master.

**Headlines**
🤝 Scrum ownership: sprint planning, backlog hygiene, velocity tracking, retros
🛠️ Backend lead: service/API design, data modeling, auth, and testing strategy
⚙️ DevEx: CI setup, review standards, and developer docs to speed onboarding

**At a Glance**
- Scope: mobile + API, user auth, content sharing, and usage analytics
- Team: multi-role student team with paired work on critical paths
- Rhythm: two-week sprints with demos, retros, and actioned follow-ups

**Highlights**
- Shipped stable auth + core API with tests and monitoring hooks
- Built CI flows that lint, test, and gate PRs before merge
- Created developer docs and templates to shorten onboarding and handoffs
`.trim(),
  },
];
