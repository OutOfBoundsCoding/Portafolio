const categories = [
  {
    name: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "Python", "C#", "Java", "SQL", "HTML/CSS", "React", "Angular", ".NET", "React Native", "Node.js"],
  },
  {
    name: "Platforms & Tools",
    items: [ "Copilot", "Claude", "Azure", "AWS", "Linux", "Azure Devops", "Jira", "GitHub", "GitLab", "Figma", "Vercel"],
  },
  {
    name: "Technologies",
    items: ["Git", "Load Balancing", "Serverless", "Microservices", "CI/CD", "REST APIs", "SOAP", "Message Queues", "DevOps", "NoSQL", "UI/UX", "Agile", "Scrum", "SEO", "Accessibility"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-bold tracking-wider text-foreground md:text-3xl">
          Expertise and Skills
        </h2>
        <div className="mx-auto mt-4 h-0.5 w-16 bg-primary" />
        {/* <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Lorem ipsum dura sit amet cimentum uga munga dani al igre dla
          gibberish.
        </p> */}

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                {cat.name}
              </h3>
              <div className="mx-auto mt-3 h-0.5 w-10 bg-primary" />
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-bold tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
