"use client"

import { Card } from "@/components/ui/card"
import { Globe, Lightbulb, BookOpen, PenTool } from 'lucide-react'

const stages = [
  {
    icon: Globe,
    title: "It crawls your site",
    description: "Reads your existing content. Understands your voice. Maps your territory.",
  },
  {
    icon: Lightbulb,
    title: "It finds themes",
    description: "Spots patterns. Identifies gaps. Suggests topics worth exploring.",
  },
  {
    icon: BookOpen,
    title: "It researches",
    description: "Deep dives into sources. Pulls insights. Builds context.",
  },
  {
    icon: PenTool,
    title: "It creates",
    description: "Drafts in your voice. Posts go live. Your blog breathes.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl md:text-6xl text-balance text-foreground">Introducing: Self-Driving Content</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Learns your voice. Finds your topics. Researches. Writes. Publishes. Repeats.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div
              className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border"
              style={{ width: "calc(100% - 6rem)", marginLeft: "3rem" }}
            />

            {stages.map((stage, index) => {
              const Icon = stage.icon
              return (
                <Card
                  key={stage.title}
                  className="relative p-6 space-y-4 bg-card hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Stage number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-foreground">{stage.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
