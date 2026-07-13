import { ArrowUpRight } from "lucide-react"

type Project = {
  title: string
  category: string
  description: string
  image: string
  url: string
  year: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: "Nimbra Law",
    category: "Law Firm",
    description:
      "A strategic legal consultancy platform with real-time court case lookup integrated with the Dominican judiciary API. Editorial, premium design built around trust and authority.",
    image: "/projects/nimbra-law.png",
    url: "https://nimbralaw.com/",
    year: "2026",
    tags: ["React", "TailwindCSS", "Claudflare", "HubSpot", "AI Agents", "API Integration"],
  },
  {
    title: "Beyond Behavioral Solutions",
    category: "ABA Therapy Clinic",
    description:
      "A warm, welcoming website for a pediatric ABA therapy provider. Designed to empower families with clear service journeys, insurance guidance, and an easy path to getting started.",
    image: "/projects/beyond-behavioral.png",
    url: "https://staging.beyondbehavioralsolutions.com/",
    year: "2026",
    tags: ["WordPress", "Elementor", "Astra", "Yoast SEO"],
  },
]

export function Projects() {
  return (
    <section id="work" className="border-t border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Selected work</p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
              Real projects, real results
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-12 md:gap-16">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-6 md:grid-cols-2 md:items-center md:gap-10"
            >
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${project.image || "/placeholder.svg"}`}
                  alt={`Screenshot of the ${project.title} website`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div>
                <p className="text-sm text-accent">{project.category}</p>
                <h3 className="mt-2 flex items-center gap-2 font-serif text-2xl text-foreground md:text-3xl">
                  {project.title}
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
