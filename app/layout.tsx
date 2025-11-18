import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display, Space_Grotesk } from 'next/font/google'
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Highway - Self-Driving Content for Your Blog",
  description: "Introducing self-driving content. Your blog researches, writes, and publishes itself. No more content strategy, research, or manual publishing.",
  keywords: "self-driving content, automated content, AI blog writing, content automation, autonomous content creation",
  openGraph: {
    title: "Highway - Self-Driving Content for Your Blog",
    description: "Content that researches, writes, and publishes itself. Introducing the future of autonomous content creation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Highway - Self-Driving Content for Your Blog",
    description: "Introducing self-driving content. Your blog builds itself.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
