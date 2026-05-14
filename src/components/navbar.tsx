import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  Rocket,
  NotebookPen,
  Github,
  Linkedin,
  Mail,
  FileDown,
  Menu,
  X,
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
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold leading-tight">
                Luka David
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Software Engineer
                </span>{" "}
                <span>&nbsp;</span>
                AI, Cloud, Full-Stack
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="mt-3 hidden lg:flex flex-wrap gap-2">
            {NAV.map((n) => {
              const Icon = n.icon;
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative isolate flex items-center gap-2 overflow-hidden rounded-full border px-4 py-1.5 text-sm transition-all duration-200 ${
                    active
                      ? "text-background shadow-lg shadow-primary/10 border-transparent"
                      : "bg-secondary/60 hover:bg-secondary/80 border-border/40"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-black dark:bg-white"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <Icon className="h-4 w-4" />
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Desktop social/links */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
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

        {/* Mobile: hamburger menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex lg:hidden items-center justify-center shrink-0 p-2 border border-border rounded-md bg-secondary/40 hover:bg-secondary/80 transition"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t bg-background/95 backdrop-blur-xl"
          >
            <nav className="px-4 py-4 space-y-2">
              {NAV.map((n) => {
                const Icon = n.icon;
                const active = pathname === n.to;
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-foreground text-background"
                        : "hover:bg-secondary/80"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {n.label}
                  </Link>
                );
              })}
            </nav>

            <div className="px-4 pb-4 pt-2 border-t flex items-center gap-3 flex-wrap">
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
              <ThemeToggle inline />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
