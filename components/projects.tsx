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
      "I led a strategic architectural overhaul of a legacy CMS environment, focusing on refactoring the backend to enhance system stability and long-term maintainability. This initiative involved developing a high-performance frontend using modern frameworks to meet strict technical requirements while ensuring seamless integration with existing data structures. Beyond the technical implementation, I facilitated specialized training for the development team to ensure a smooth transition to the new architecture and to establish high-standard coding practices for future scalability.",
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
      "I led the design and development of a mission-critical data management ecosystem for the 2020 Census of Panama. This multi-platform solution featured a high-performance mobile application for field data collection and a robust web-based suite for staff management and strategic analysis. To ensure data integrity at a national scale, I engineered a backend capable of real-time data processing and validation, allowing for immediate synchronization between field agents and central administrators. This architecture transformed raw demographic data into actionable insights through integrated analysis tools, ensuring the census met rigorous accuracy and performance standards.",
    image: "/images/censosAPP.png",
    stack: ["C#", "SQL server", "HangFire", "JavaScript", ".NET Core", "CSPro", "Java", "Android", "ReactJS", "Google Charts", "PowerBI", "PowerShell", "PWA" ],
  },
  {
    title: "Sistema de Control y Seguimiento de Auditorías Internas (SCAI)",
    subtitle: "Contraloria General de la republica de Panama",
    role: "Role - Tech Lead",
    description:
      "I led the redesign and development of a mission-critical internal audit system, focusing on a complete backend overhaul to prioritize maintainability and multi-platform compatibility. While working within the constraints of established legacy technologies, I successfully implemented significant performance optimizations and a modern UI/UX refresh to streamline the auditing workflow. To ensure the long-term success of the migration, I also spearheaded technical training sessions for the development team, bridging the gap between the original infrastructure and the newly implemented architectural standards.", 
    image: "/images/SCAI.png",
    stack: ["C#", "SQL server", "JavaScript", ".NET 8", "ASP.NET WebForms", "Bootstrap", "HTML/CSS"],
  },
  {
    title: "Vantage",
    subtitle: "Control Risks",
    role: "Role - Tech Lead",
    description:
      "As the Tech Lead for this evolving Risk Management platform, I worked on a scalable solution designed to centralize and analyze complex data streams into actionable intelligence. To meet the demands of a rapidly growing dataset, I orchestrated a strategic migration from SQL to NoSQL and integrated Graph Databases to uncover deep relational patterns that traditional databases couldn't surface. By leveraging serverless functions and webhooks, I modernized the backend into a reactive, event-driven system, significantly automating the generation of reports and interactive dashboards.", 
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
