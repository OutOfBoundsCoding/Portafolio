import { Linkedin, Github, Instagram, Mail } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-card px-6 py-24 text-center"
    >
      <h2 className="max-w-md text-2xl font-bold leading-tight text-foreground md:text-3xl text-balance">
        One click away from making your project a reality
      </h2>

      {/* Social Icons */}
      <div className="mt-10 flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/eduardo-beckford-661a6514a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-primary"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/OutOfBoundsCoding"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-primary"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        {/* <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-primary"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a> */}
      </div>

      {/* Email */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-xs">@OutOfBoundsCoding</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Mail size={16} />
          <a
          href="mailto:eduardo.beckford93@gmail.com"
          className="text-xs text-primary transition-colors hover:text-primary/80"
        >
          eduardo.beckford93@gmail.com
        </a>
        </div>
      </div>
    </section>
  )
}
