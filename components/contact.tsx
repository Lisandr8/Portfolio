import { ArrowUpRight } from "lucide-react"

const links = [
  { label: "Email", value: "lisandroandujar@gmail.com", href: "mailto:lisandroandujar@gmail.com" },
  { label: "GitHub", value: "@lisandr8", href: "https://github.com/lisandr8" },
  { label: "LinkedIn", value: "Lisandro Andujar", href: "https://www.linkedin.com/in/lisandroandujar/" },
]

export function Contact() {
  return (
    <footer id="contact" className="border-t border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <p className="text-sm text-muted-foreground">Contact</p>
            <h2 className="mt-2 max-w-md font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
              Have a project in mind? Let&apos;s build something great.
            </h2>
            <a
              href="mailto:lisandroandujar@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-col justify-end">
            <ul className="divide-y divide-border border-y border-border">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between py-4 text-foreground"
                  >
                    <span className="text-sm text-muted-foreground">{link.label}</span>
                    <span className="flex items-center gap-1.5 text-sm transition-colors group-hover:text-accent">
                      {link.value}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lisandro Andujar. Crafted with care.
        </p>
      </div>
    </footer>
  )
}
