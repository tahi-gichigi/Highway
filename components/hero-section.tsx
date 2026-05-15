"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, CheckCircle2, Clock, Edit3, FileText, TrendingUp } from 'lucide-react'
import { useEffect, useState } from "react"
import { WaitlistModal } from "./waitlist-modal"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "SEO content on autopilot"
  const [showWaitlist, setShowWaitlist] = useState(false)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const contentPipeline = [
    { title: "The Future of Sustainable Architecture", status: "published", progress: 100, date: "2h ago", icon: CheckCircle2 },
    { title: "AI-Powered Design Tools: A Comprehensive Guide", status: "approved", progress: 95, date: "4h ago", icon: CheckCircle2 },
    { title: "Minimalism in Modern Web Design", status: "editing", progress: 75, date: "6h ago", icon: Edit3 },
    { title: "Building Scalable Content Strategies", status: "drafting", progress: 45, date: "8h ago", icon: FileText },
  ]

  const statusColors = {
    published: "bg-green-500/10 text-green-600 border-green-500/20",
    approved: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    editing: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    drafting: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    researching: "bg-slate-500/10 text-slate-600 border-slate-500/20",
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-cream-lilac">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Self-Driving Content has arrived</span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-balance leading-tight text-foreground">
            {typedText}
            <span className="inline-block w-1 h-16 md:h-24 bg-accent ml-2 animate-pulse" />
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 md:px-0 text-pretty">
            Say goodbye to content planning, copy pasting, and manual publishing. Say hello to{' '}
            <span className="font-semibold text-foreground relative inline-block shimmer-text">
              Highway
            </span>
            .
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground group"
              onClick={() => setShowWaitlist(true)}
            >
              Join waitlist
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-card/80 backdrop-blur-sm"
              onClick={() => {
                document.getElementById('how-it-works')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
            >
              See how it works
            </Button>
          </div>

          {/* Microcopy */}
          <p className="text-sm text-muted-foreground pt-4">No credit card. No setup time.</p>

          <div className="pt-12 md:pt-16 max-w-6xl mx-auto relative">
            {/* Dashboard container with fade effect */}
            <div className="relative rounded-xl md:rounded-2xl border border-border bg-card/95 backdrop-blur-sm shadow-2xl overflow-hidden">
              {/* Dashboard header - more compact on mobile */}
              <div className="border-b border-border bg-background/50 px-4 md:px-6 py-3 md:py-4">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-base md:text-lg text-foreground">Content Pipeline</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Your blog is building itself</p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                    <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs md:text-sm font-medium text-green-600">Live</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs md:text-sm">24 posts this month</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content rows - optimized for mobile */}
              <div className="divide-y divide-border">
                {contentPipeline.map((item, index) => {
                  const StatusIcon = item.icon
                  return (
                    <div
                      key={index}
                      className="px-4 md:px-6 py-3 md:py-4 hover:bg-accent/5 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Mobile: vertical stack, Desktop: grid */}
                      <div className="flex items-center gap-3 md:grid md:grid-cols-12 md:gap-4">
                        {/* Status icon */}
                        <div className="md:col-span-1 flex items-center justify-center flex-shrink-0">
                          <StatusIcon className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                        </div>

                        {/* Content title - flexible on mobile, 5 cols on desktop */}
                        <div className="flex-1 md:col-span-5 min-w-0">
                          <h4 className="font-medium text-foreground text-sm md:text-base truncate">
                            {item.title}
                          </h4>
                        </div>

                        {/* Status badge and date - side by side on mobile */}
                        <div className="flex items-center gap-2 md:contents flex-shrink-0">
                          <span className={`inline-block text-xs px-2 py-0.5 rounded-full border capitalize ${statusColors[item.status as keyof typeof statusColors]} md:col-span-2`}>
                            {item.status}
                          </span>
                          <span className="text-xs text-muted-foreground md:col-span-2">{item.date}</span>
                        </div>

                        {/* Progress bar - hidden on mobile */}
                        <div className="hidden md:flex md:col-span-2 items-center gap-2">
                          <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent rounded-full transition-all duration-500"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground w-10 text-right">{item.progress}%</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
            </div>

            {/* Subtle glow effect */}
            <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>

      <WaitlistModal open={showWaitlist} onOpenChange={setShowWaitlist} />
    </section>
  )
}
