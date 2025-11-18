"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { useState } from "react"
import { WaitlistModal } from "./waitlist-modal"

export default function ClosingSection() {
  const [showWaitlist, setShowWaitlist] = useState(false)

  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Philosophical statement */}
            <div className="text-center space-y-6">
              <h2 className="font-serif text-4xl md:text-6xl text-balance text-foreground leading-tight">
                The future of content
                <br />
                is self-driving.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                You built something worth sharing. Now let self-driving content do the sharing. Consistently. 
                Thoughtfully. While you focus on what actually moves your business forward.
              </p>
            </div>

            {/* Final CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground group"
                onClick={() => setShowWaitlist(true)}
              >
                Join waitlist
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                Talk to us
              </Button>
            </div>

            {/* Footer */}
            <footer className="pt-16 border-t border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl text-foreground">The Automation Artist</span>
                </div>

                <nav className="flex items-center gap-6 text-sm text-muted-foreground">
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Docs
                  </a>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Support
                  </a>
                </nav>
              </div>

              <div className="mt-8 text-center text-sm text-muted-foreground">
                <p>Pioneering self-driving content for teams who value craft.</p>
              </div>
            </footer>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal open={showWaitlist} onOpenChange={setShowWaitlist} />
    </>
  )
}
