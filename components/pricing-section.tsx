"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from 'lucide-react'
import { useState } from "react"
import { WaitlistModal } from "./waitlist-modal"

const tiers = [
  {
    name: "Copilot",
    price: "$49",
    period: "/month",
    description: "Perfect for solo creators finding their rhythm",
    features: [
      "10 posts per month",
      "Core research capabilities",
      "Single blog connection",
      "Email support",
      "Voice calibration",
    ],
    cta: "Start with Copilot",
    highlighted: false,
  },
  {
    name: "Autopilot",
    price: "$149",
    period: "/month",
    description: "Built for consistent, quality output",
    features: [
      "50 posts per month",
      "Deep research mode",
      "3 blog connections",
      "Priority support",
      "Advanced voice training",
      "Custom schedules",
      "Social amplification",
    ],
    cta: "Switch to Autopilot",
    highlighted: true,
  },
  {
    name: "Autonomous",
    price: "$399",
    period: "/month",
    description: "For teams building at scale",
    features: [
      "Unlimited posts",
      "Maximum research depth",
      "Unlimited connections",
      "Dedicated support",
      "Multi-voice training",
      "Team collaboration",
      "Advanced analytics",
      "API access",
    ],
    cta: "Go Autonomous",
    highlighted: false,
  },
]

export default function PricingSection() {
  const [showWaitlist, setShowWaitlist] = useState(false)

  return (
    <>
      <section id="pricing" className="py-24 md:py-32 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Section header */}
            <div className="text-center space-y-4">
              <h2 className="font-serif text-4xl md:text-6xl text-balance text-foreground">Pick your cadence</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Same self-driving system. Different velocity.
              </p>
            </div>

            {/* Pricing cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={`p-8 space-y-6 relative ${
                    tier.highlighted
                      ? "ring-2 ring-accent shadow-2xl scale-105 bg-card"
                      : "bg-card hover:shadow-lg transition-shadow"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                      Most popular
                    </div>
                  )}

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-foreground">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-5xl text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }`}
                    size="lg"
                    onClick={() => setShowWaitlist(true)}
                  >
                    {tier.cta}
                  </Button>
                </Card>
              ))}
            </div>

            {/* Bottom note */}
            <p className="text-center text-sm text-muted-foreground">
              All plans include a 14-day free trial. Cancel anytime, no questions asked.
            </p>
          </div>
        </div>
      </section>

      <WaitlistModal open={showWaitlist} onOpenChange={setShowWaitlist} />
    </>
  )
}
