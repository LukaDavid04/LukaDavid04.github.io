# My Personal Portfolio ✨

![Vite + React badge](https://img.shields.io/badge/Vite-%235C2D91?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind badge](https://img.shields.io/badge/TailwindCSS-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white)

This repository now spotlights the project I showcase on my resume and demo calls: a bespoke portfolio site that mixes typed data, thematic journaling, and playful UI touches inspired by my tennis background. It lives under `Portfolio/` inside this monorepo, but it is the only project covered in this README so collaborators can dive straight into the experience I present publicly.

---

## 📌 Why I Built This Portfolio

- **Tell a cohesive story** – After hopping between assignments, games, and crypto puzzles, I needed one destination that clearly explains who I am, what I value, and why the odd mix of projects makes sense.
- **Blend engineering with journaling** – Writing reflections keeps me honest about growth. The site surfaces those notes next to case studies so hiring managers can see my process, not just polished screenshots.
- **Keep shipping in public** – By versioning the portfolio here, I can track every iteration (from typography tweaks to data modeling) and treat the site itself as an evolving product.

---

## 🧱 Architecture at a Glance

| Layer                  | Details                                                                                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**          | Vite + React + TypeScript with ESLint + SWC for rapid dev and type safety.                                                                                           |
| **Styling**            | Tailwind CSS with custom tokens plus a `ThemeToggle` component for light/dark parity.                                                                                |
| **Content Model**      | Typed data modules in `src/lib/data/` (`projects.ts`, `journal.ts`, `timeline.ts`) keep copy, metadata, and imagery decoupled from components.                       |
| **UI Building Blocks** | Reusable sections (`Hero`, `Highlights`, `Journal`, `Contact`) orchestrated through `src/components/` with `lucide-react` icons and motion-friendly utility classes. |
| **Routing & Deploy**   | Single-page experience optimized for Netlify/Vercel deploys via `npm run build` and static asset output under `dist/`.                                               |

---

## 🧭 Page Flow

1. **Hero + Snapshot** – Introduces me as a builder-athlete with CTA buttons for résumé and contact.
2. **Project Highlights** – Pulls from `PROJECTS` array to showcase a rotating mix of UX experiments, data tools, and games with badges describing stacks.
3. **Journal Timeline** – Chronological entries from `JOURNAL` emphasize lessons from tennis, leadership roles, and engineering deep dives.
4. **Experience Milestones** – A `TIMELINE` structure highlights internships, labs, and community work, reinforcing the narrative thread.
5. **Contact Footer** – One-click links to email, LinkedIn, GitHub, and the downloadable résumé artifact.
   Each section is data-driven, so shipping new stories or case studies is as simple as editing the corresponding TypeScript array.

---

## 🌟 Unique Touches & Easter Eggs

1. **Future-dated journal entries** – I log aspirational stories (e.g., `2025-10-11`) to remind myself—and readers—that the roadmap continues beyond the current role.
2. **Inline margin notes** – `journal.ts` supports `comments` pointing to exact paragraph indices so I can drop cheeky annotations like “literally” next to highlighted words.
3. **Glassmorphic navbar** – `src/components/navbar.tsx` uses layered gradients and blur filters, keeping the navigation legible over both hero photography and solid-color sections.
4. **Theme memory** – The `ThemeToggle` writes to `localStorage`, so returning visitors land on the lighting they chose last time.
5. **Tennis motifs** – Microcopy and accent colors nod to my athletic background (look for ball-yellow highlights and references to rallies inside CTA copy).

---

## 🚀 Getting Started

> **Prereqs:** Node.js ≥ 18.

```bash
cd Portfolio
npm install
npm run dev
```

Visit `http://localhost:5173` to explore the site. Build for production with:

```bash
npm run build
npm run preview
```

---

## 🛠️ Working with Data Modules

- **Journal** – `src/lib/data/journal.ts` exports the `JOURNAL` array. Add entries with `date`, `title`, `content`, optional `comments`, and tags for quick filtering.
- **Projects** – `src/lib/data/projects.ts` defines cards for the Highlights section. Fields like `tech`, `summary`, and `cta` drive badges and buttons.
- **Timeline** – `src/lib/data/timeline.ts` powers the Experience section. Each node combines `label`, `period`, and `details` list items.
  TypeScript types guard against missing properties, so the build fails fast if a new entry is misconfigured.

---

## 🧪 Testing & Quality

- `npm run lint` – ESLint + TypeScript checks for the `Portfolio/` code.
- Visual QA – I rely on Storybook-like preview routes (component-level pages) to verify responsive states before promoting to main.
- Content review – Because data is centralized, I proofread by opening `src/lib/data/*` and scanning diff outputs, keeping typos out of prod.

---

## 📬 Sharing & Deployment

1. Create a feature branch for a change (`git checkout -b feat/new-highlight`).
2. Update data or components inside `Portfolio/`.
3. `npm run build` to ensure Netlify/Vercel deploy previews succeed.
4. Push and open a PR summarizing what story or UI evolved.
   Production deploys are handled by hooking the repo to Netlify—every push to `main` triggers a rebuild of the portfolio site.

---

## 📝 License

## The broader repository is MIT-licensed; the portfolio inherits the same. See [LICENSE](LICENSE) for details.

Thanks for visiting my personal portfolio codebase! If something sparks your curiosity, feel free to open an issue or drop me a note through the site’s contact section.
