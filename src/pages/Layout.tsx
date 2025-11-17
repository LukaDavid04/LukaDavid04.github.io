import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function Layout() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground rounded-md px-3 py-2"
      >
        Skip to content
      </a>
      <div className="min-h-svh flex flex-col">
        <Navbar />
        <main
          id="main-content"
          className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-enter"
        >
          <Outlet />
        </main>
        <Footer />
        
      </div>
    </>
  );
}
