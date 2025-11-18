"use client"

import { Button } from "@/components/ui/button"

const HighwayIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-foreground"
  >
    {/* Three horizontal lines representing highway lanes with middle highlighted */}
    <rect x="2" y="5" width="16" height="2" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="2" y="9" width="16" height="2" rx="1" fill="currentColor" />
    <rect x="2" y="13" width="16" height="2" rx="1" fill="currentColor" opacity="0.3" />
  </svg>
)

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-xl font-display font-semibold hover:opacity-80 transition-opacity tracking-tight"
          >
            <HighwayIcon />
            Highway
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("examples")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Examples
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
          </nav>

          {/* CTA */}
          <Button size="sm" className="hidden md:flex">
            Start building
          </Button>
        </div>
      </div>
    </header>
  )
}
