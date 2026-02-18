export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-16">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
        {/* Logo */}
        <div>
          <p className="text-lg font-bold uppercase tracking-wider text-foreground">
            Eduardo
          </p>
          <p className="text-lg font-bold uppercase tracking-wider text-primary">
            Beckford
          </p>
        </div>

        {/* Column 1 */}
        <div className="grid grid-cols-2 gap-y-3">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Home
            </p>
            <a
              href="#about"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              About me
            </a>
            <a
              href="#skills"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Skills
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Solution
            </p>
            <a
              href="#projects"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Events
            </a>
          </div>
        </div>

        {/* Column 2 - empty for spacing like the design */}
        <div />
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-12 max-w-5xl border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          {"Eduardo Beckford @ 2025."}
        </p>
      </div>
    </footer>
  )
}
