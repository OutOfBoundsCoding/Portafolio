export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center"
    >
      {/* Crossed diagonal lines with radial fade to center */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 39px,
              rgba(91, 91, 247, 0.35) 39px,
              rgba(91, 91, 247, 0.35) 40px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 39px,
              rgba(91, 91, 247, 0.35) 39px,
              rgba(91, 91, 247, 0.35) 40px
            )
          `,
          maskImage:
            "radial-gradient(ellipse 77% 55% at 50% 42%, transparent 0%, transparent 22%, rgba(0,0,0,0.25) 48%, rgba(0,0,0,1) 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 77% 55% at 50% 42%, transparent 0%, transparent 22%, rgba(0,0,0,0.25) 48%, rgba(0,0,0,1) 100%)",
        }}
      />

      <h1 className="relative max-w-3xl font-heading text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
        AI Engineering and Software Architecture for modern IT Solutions
      </h1>
      <a
        href="#contact"
        className="relative mt-10 inline-block rounded bg-primary px-8 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/80"
      >
        Get in Touch
      </a>
    </section>
  )
}
