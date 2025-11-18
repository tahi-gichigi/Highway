"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, TrendingUp, Eye, Heart, MessageCircle } from 'lucide-react'
import { useState, useEffect } from "react"

const samplePosts = [
  {
    title: "What is Self-Driving Content?",
    excerpt: "Self-driving content isn't about removing humans from the creative process—it's about removing them from the repetitive parts. Like self-driving cars handle navigation while you focus on the destination, self-driving content handles research, drafting, and publishing while you focus on strategy.",
    category: "Concept",
    readTime: "7 min",
    status: "Published 2h ago",
    author: "The Automation Artist",
    views: "3.2k",
    likes: 203,
    comments: 34,
    shares: 56,
    features: ["Deep Research", "Voice Calibration"]
  },
  {
    title: "From manual to self-driving: A content transformation",
    excerpt: "Most content teams are stuck in manual mode—brainstorming topics in spreadsheets, researching in browser tabs, drafting in Google Docs. Self-driving content collapses this into a single, continuous system. Here's what changes when your blog learns to drive itself.",
    category: "Case Study",
    readTime: "9 min",
    status: "Publishing now",
    author: "The Automation Artist",
    views: "1.1k",
    likes: 127,
    comments: 19,
    shares: 42,
    features: ["Professional Citations", "Internal Linking"]
  },
  {
    title: "Why self-driving content needs guardrails, not micromanagement",
    excerpt: "The best self-driving systems aren't fully autonomous—they're supervised autonomy. You set the destination, define the voice, approve the route. The system handles everything between. This framework shows exactly where human judgment matters and where it slows you down.",
    category: "Framework",
    readTime: "8 min",
    status: "Scheduled for 4pm",
    author: "The Automation Artist",
    views: "—",
    likes: 0,
    comments: 0,
    shares: 0,
    features: ["Branded Media", "Auto Approval"]
  },
  {
    title: "The economics of self-driving content",
    excerpt: "Traditional content costs scale linearly—more posts means more writers, more editors, more time. Self-driving content inverts this. Your first post takes effort to calibrate, but post 100 costs the same as post 1,000. Here's the math that changes everything about content ROI.",
    category: "Analysis",
    readTime: "6 min",
    status: "Draft ready",
    author: "The Automation Artist",
    views: "—",
    likes: 0,
    comments: 0,
    shares: 0,
    features: ["Voice Calibration", "Academic Citations"]
  },
]

export default function OutputGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % samplePosts.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="examples" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl md:text-6xl text-balance text-foreground">Watch it work</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real posts. Real results. This is what your blog looks like on autopilot.
            </p>
          </div>

          {/* Live indicator */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Live pipeline</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {samplePosts.map((post, index) => (
              <Card
                key={post.title}
                className={`p-4 space-y-3 transition-all duration-500 ${
                  index === activeIndex ? "ring-2 ring-accent shadow-xl" : "hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <span className="text-muted-foreground">{post.status}</span>
                </div>

                <h3 className="font-serif text-lg md:text-xl text-foreground leading-tight">{post.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>

                <div className="flex flex-wrap gap-1">
                  {post.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs font-normal bg-muted/50 py-0">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                  <span>By {post.author}</span>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{post.comments}</span>
                    </div>
                    {index === activeIndex && (
                      <TrendingUp className="w-3 h-3 text-accent animate-pulse" />
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
