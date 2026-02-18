"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  // { label: "Blog", href: "#blog" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-1 text-foreground">
          <span className="text-sm font-bold uppercase tracking-wider">
            Eduardo{" "}
          </span>
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Beckford
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <li key={`${link.href}-${i}`}>
              <a
                href={link.href}
                className={`text-xs uppercase tracking-wider transition-colors hover:text-primary ${
                  link.label === "Contact"
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <li key={`mobile-${link.href}-${i}`}>
                <a
                  href={link.href}
                  className={`text-xs uppercase tracking-wider transition-colors hover:text-primary ${
                    link.label === "Contact"
                      ? "text-primary font-bold"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
