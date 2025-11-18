import { Card } from "@/components/ui/card"
import { Database, FileCheck, ImageIcon, Link2, FileText, Quote, Sliders, Calendar, Palette, Users, Clock } from 'lucide-react'

const primaryFeatures = [
  {
    icon: Sliders,
    title: "Voice calibration",
    description: "Learns from your existing content. Writes like you, not like everyone.",
  },
  {
    icon: FileText,
    title: "Adaptive content length",
    description: "Short takes or long reads. Adjust the dial, not the workflow.",
  },
  {
    icon: Palette,
    title: "Visual enhancement",
    description: "Images, graphics, and media that match your aesthetic. Not stock. Yours.",
  },
  {
    icon: Users,
    title: "Byline flexibility",
    description: "Real authors, ghost writing, or editorial voice. You decide who gets credit.",
  },
  {
    icon: Calendar,
    title: "Publishing rhythm",
    description: "Daily, weekly, whenever. Set your cadence and let it maintain the beat.",
  },
  {
    icon: Clock,
    title: "Social amplification",
    description: "Auto-posts to your channels. Spreads the word while you focus on what's next.",
  },
]

const secondaryFeatures = [
  {
    icon: Database,
    title: "Deep research retrieval",
    description: "RAG-powered analysis of industry trends, competitors, and regulation.",
  },
  {
    icon: ImageIcon,
    title: "Branded media generation",
    description: "Custom charts, diagrams, and infographics inserted automatically.",
  },
  {
    icon: FileCheck,
    title: "Publishing control",
    description: "Manual review or auto-approve. Your eyes, your choice.",
  },
  {
    icon: Link2,
    title: "Smart internal linking",
    description: "Connects relevant posts automatically without manual crosslinking.",
  },
  {
    icon: Quote,
    title: "Flexible citation styles",
    description: "Academic, professional, or casual referencing that fits your voice.",
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 md:py-20 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {/* Section header */}
          <div className="text-center space-y-3">
            <h2 className="font-serif text-3xl md:text-5xl text-balance text-foreground">Knobs, not switches</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Fine-tune every aspect. No binary choices. Just smooth control over your content pipeline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {primaryFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="p-4 space-y-3 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-lg text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="pt-4 space-y-6">
            <div className="text-center">
              <h3 className="font-serif text-xl md:text-2xl text-foreground/80">Plus advanced capabilities</h3>
              <p className="text-xs text-muted-foreground mt-1">Additional features for deeper control</p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {secondaryFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="p-4 space-y-3 bg-card/50 border border-border/50 rounded-lg hover:bg-card/80 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-accent/70" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-foreground/90">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground/80 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
