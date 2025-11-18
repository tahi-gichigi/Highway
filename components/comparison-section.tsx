import { Card } from "@/components/ui/card"
import { Check, X } from 'lucide-react'

const comparisons = [
  {
    feature: "Runs autonomously without prompts",
    highway: true,
    chatgpt: false,
  },
  {
    feature: "Identifies topics strategically",
    highway: true,
    chatgpt: false,
  },
  {
    feature: "Conducts deep research with RAG",
    highway: true,
    chatgpt: false,
  },
  {
    feature: "Maintains consistent brand voice",
    highway: true,
    chatgpt: false,
  },
  {
    feature: "Publishes directly to your blog",
    highway: true,
    chatgpt: false,
  },
  {
    feature: "Handles SEO & internal linking",
    highway: true,
    chatgpt: false,
  },
  {
    feature: "Creates branded visuals & charts",
    highway: true,
    chatgpt: false,
  },
  {
    feature: "Tracks performance & improves",
    highway: true,
    chatgpt: false,
  },
]

export default function ComparisonSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance mb-4">
            Highway vs. ChatGPT
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ChatGPT is a tool you use. Highway is a system that runs itself.
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 p-6 bg-muted/50 font-semibold text-sm">
            <div>Feature</div>
            <div className="text-center w-24">Highway</div>
            <div className="text-center w-24">ChatGPT</div>
          </div>

          {comparisons.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_auto_auto] gap-4 p-6 border-t items-center"
            >
              <div className="text-sm">{item.feature}</div>
              <div className="flex justify-center w-24">
                {item.highway ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <X className="w-5 h-5 text-red-400" />
                )}
              </div>
              <div className="flex justify-center w-24">
                {item.chatgpt ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <X className="w-5 h-5 text-red-400" />
                )}
              </div>
            </div>
          ))}
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          ChatGPT is brilliant for on-demand writing. Highway is for when you want content to happen without you.
        </p>
      </div>
    </section>
  )
}
