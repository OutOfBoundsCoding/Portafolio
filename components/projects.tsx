interface Project {
  title: string
  subtitle: string
  role: string
  description: string
  image: string
  stack: string[]
}

const projects: Project[] = [
  {
    title: "Censos 2020 Panama - Official Website",
    subtitle: "INEC - Panama",
    role: "Role - Full Stack Developer",
    description:
      "Refactoring the backend around the legacy CMS and building a new frontend with Required technologies around mantainability and performance, a training for the team was also provided.",
    image: "/images/censos.png",
    stack: ["SQL server", "JavaScript", ".NET core", "C#", ".NET 4.5","Bootstrap", "HTML/CSS"],
  },
  // {
  //   title: "Adeleth Nurse - Official Website",
  //   subtitle: "",
  //   role: "Role - Full Stack Developer",
  //   description:
  //     "Development of a website for a registered nutritionist, focusing on  online presence, SEO and accessibility.", 
  //   image: "/images/project-3.jpg",
  //   stack: ["Astro", "TypeScript", "PostgreSQL", "Strapi", "Node.JS", "ReactJS", "Tailwind CSS", "HTML/CSS", "UI/UX"],
  // },
  {
    title: "Integrated System for survey collection - Censos 2020 Panama",
    subtitle: "INEC - Panama",
    role: "Role - Tech Lead",
    description:
      "Design and Development of a system to manage surveys during the Census of Panama 2020. The system included realtime data processing and validation, data collection from a mobile app and a web app for staff management and data analysis.",
    image: "/images/censosAPP.png",
    stack: ["C#", "SQL server", "HangFire", "JavaScript", ".NET Core", "CSPro", "Java", "Android", "ReactJS", "Google Charts", "PowerBI", "PowerShell", "PWA" ],
  },
  {
    title: "Sistema de Control y Seguimiento de Auditorías Internas (SCAI)",
    subtitle: "Contraloria General de la republica de Panama",
    role: "Role - Tech Lead",
    description:
      "Design and Develop a system to manage internal audits. The system required performance improvements from the previoous version, a new backend design focused on mantainability and multiplatform support and a new UI/UX re-design while keeping the known legacy technologies. A technical training was also provided to the team.", 
    image: "/images/SCAI.png",
    stack: ["C#", "SQL server", "JavaScript", ".NET 8", "ASP.NET WebForms", "Bootstrap", "HTML/CSS"],
  },
  {
    title: "Vantage",
    subtitle: "Control Risks",
    role: "Role - Tech Lead",
    description:
      "Design, Develop and maintain a Platform for Risk Management Investigations that allowed to manage and analyze risk data from different sources and generate reports and dashboards.", 
    image: "/images/Vantage1.png",
    stack: ["C#", "TypeScript", "SQL server", "Cosmos DB", ".NET 8", "ReactJS", "Material UI", "HTML/CSS", "Azure Functions", "Azure", "PowerShell", "SOAP", "REST APIs"],
  }
]

function ProjectCard({ title, subtitle, role, description, image, stack }: Project) {
  return (
    <article className="rounded-lg border border-border bg-card p-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted md:w-1/2">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex w-full flex-col md:w-1/2">
          <header className="flex flex-col gap-2">
            <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              {role}
            </p>
          </header>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-bold tracking-wider text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="bg-surface px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  )
}
