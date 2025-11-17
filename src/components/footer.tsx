export function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`border-t ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Luka David. All rights reserved.</span>
        <span>Built with React, Vite, Tailwind, and Framer Motion.</span>
      </div>
    </footer>
  );
}
