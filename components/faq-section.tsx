"use client"

import { Card } from "@/components/ui/card"
import { Plus, Minus } from 'lucide-react'
import { useState } from "react"

const faqs = [
  {
    question: "Will it sound like my brand?",
    answer: "Yes. Highway crawls your existing content to learn your voice, tone, and style. After the initial calibration, every post maintains your brand's unique personality. You can adjust the voice settings anytime if you want to evolve your style."
  },
  {
    question: "Can I review posts before they publish?",
    answer: "Absolutely. Choose manual approval mode and review every post before it goes live. Or trust the autopilot and let it publish automatically. Switch between modes anytime based on your comfort level."
  },
  {
    question: "How is this different from ChatGPT?",
    answer: "ChatGPT requires you to prompt it, copy-paste content, format it, and manually publish. Highway handles everything—from identifying topics to researching to writing to publishing—completely autonomously. It's the difference between using a word processor and having a full content team."
  },
  {
    question: "Does it integrate with my CMS?",
    answer: "Highway connects directly to WordPress, Webflow, and other major platforms. Posts publish with proper formatting, images, SEO metadata, and internal links—ready for readers."
  },
  {
    question: "Is the content original and SEO-safe?",
    answer: "Every post is original content created specifically for your blog. Highway researches from multiple sources and synthesizes unique perspectives. All content is plagiarism-checked and includes proper citations when referencing external sources."
  },
  {
    question: "What if I want to change my content strategy?",
    answer: "Update your settings anytime. Change topics, adjust tone, modify publishing frequency, or shift content length. Highway adapts instantly—no retraining or onboarding needed."
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance mb-4">
            Questions you probably have
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Because this is genuinely new territory.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="p-6 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  {openIndex === index && (
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <div className="text-primary mt-1">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
