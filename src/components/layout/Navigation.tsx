// src/components/layout/Navigation.tsx
import React from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export function Navigation() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-[linear-gradient(90deg,#071028_0%,#0b1628_100%)] shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-4">
            <a href="#hero" className="flex items-center gap-3">
              <span className="text-white text-xl font-semibold">Abhishek Mohandas</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white text-sm hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md text-white hover:bg-white/5"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden border-t border-white/6 bg-[transparent]">
            <div className="px-6 py-4 flex flex-col gap-2">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white text-base py-2"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navigation;
