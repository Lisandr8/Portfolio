const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap", "AI Agents", "Figma", "WordPress"]

export function About() {
  return (
    <section id="about" className="border-t border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <div>
            <p className="text-sm text-muted-foreground">About</p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
              Blending design and technology to make a difference
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              I&apos;m a creative developer with around three years of experience, passionate about building visually
              appealing and functional websites. I focus on bringing ideas to life through clean, thoughtful code and
              carefully considered design.
            </p>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              When I&apos;m not coding, I enjoy playing video games and exploring gaming communities — immersing myself
              in that creative and energetic environment that keeps my work fresh.
            </p>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">Skills &amp; tools</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
