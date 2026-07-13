"use client"

const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-serif text-lg tracking-tight text-foreground">Lisandro Andujar</span>
          <span className="text-xs text-muted-foreground">Creative Developer &amp; Designer</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
