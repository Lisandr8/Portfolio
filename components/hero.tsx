import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <p className="text-sm text-muted-foreground">Available for new projects</p>
      </div>

      <h1 className="mt-8 max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight text-foreground text-balance md:text-6xl">
        I&apos;m Lisandro Andujar, a creative developer designing and building{" "}
        <span className="text-accent">beautiful, functional</span> digital experiences.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
        With around three years of experience, I blend thoughtful design with clean code to bring ideas to life
        from strategic law firms to family-focused healthcare brands.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View my work
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
