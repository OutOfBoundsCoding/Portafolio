export function About() {
  return (
    <section id="about" className="bg-card px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold tracking-wider text-foreground md:text-3xl">
          About me
        </h2>
        <div className="mx-auto mt-4 h-0.5 w-16 bg-primary" />

        <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:items-start md:text-left">
          {/* Avatar */}
          <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-full bg-muted">
            <img
              src="/images/profilepicture.jpeg"
              alt="Eduardo Beckford portrait"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-bold text-primary">EDUARDO BECKFORD</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {"I’m a software engineer with broad experience designing, building, and maintaining production systems across modern and legacy technology stacks. Over the years, I’ve worked on web applications, APIs, and backend services, with a strong focus on reliability, clarity, and long-term maintainability.My background includes hands-on development with technologies such as .NET, JavaScript frameworks, and relational and non-relational databases, as well as integrating authentication, APIs, Cloud and third-party services. I’m comfortable stepping into existing codebases, understanding how and why they work, and improving them incrementally without breaking what already delivers value. That ability to bridge “old but critical” systems with newer approaches has been a recurring strength in my career."}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-bold text-foreground">Education:</span>{" "}
              {"Bachelor in Computer and Systems Engineering - Universidad Tecnologica de Panama"}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-bold text-foreground">Courses:</span>{" "}
              {"Android App Development, Developing Web Services, ASP.NET MVC 5, Querying Data with Transact SQL, React Native, Angular, ASP.NET Core"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
