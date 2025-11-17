import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Briefcase,
  Rocket,
  NotebookPen,
  Github,
  Linkedin,
  Mail,
  FileDown,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/experience", label: "Experience", icon: Briefcase },
  { to: "/projects", label: "Passion Projects", icon: Rocket },
  { to: "/journal", label: "Journal", icon: NotebookPen },
];

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-2xl font-semibold leading-tight">
                Luka David
              </h1>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Software Engineer
                </span>{" "}
                <span>&nbsp;</span>
                AI, Cloud, Full-Stack
              </p>
            </div>
          </div>

          <nav className="mt-3 flex flex-wrap gap-2">
            {NAV.map((n) => {
              const Icon = n.icon;
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm border transition-all duration-150 ${
                    active
                      ? "bg-foreground text-background border-foreground"
                      : "bg-secondary/60 hover:bg-secondary/80 border-border/40"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            aria-label="Download Resume"
            href="https://drive.google.com/file/d/12F5aa1GIbZ0HgEQ0_Glnl1K1hlIQ5eWa/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 border rounded-md text-sm font-medium hover:bg-secondary/60 transition"
          >
            <FileDown className="h-4 w-4" />
            <span>Resume</span>
          </a>
          <a
            aria-label="GitHub"
            href="https://github.com/LukaDavid04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border rounded-md hover:bg-secondary/60 transition"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border rounded-md hover:bg-secondary/60 transition"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            aria-label="Email"
            href="mailto:LukaDavid307@gmail.com"
            className="p-2 border rounded-md hover:bg-secondary/60 transition"
          >
            <Mail className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
