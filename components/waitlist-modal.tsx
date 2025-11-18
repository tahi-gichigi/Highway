"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase/client"
import { Check, Loader2 } from 'lucide-react'

interface WaitlistModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const { error: insertError } = await supabase
        .from("waitlist_entries")
        .insert({ email })

      if (insertError) {
        if (insertError.code === "23505") {
          // Unique constraint violation
          setError("This email is already on the waitlist!")
        } else {
          throw insertError
        }
        return
      }

      setIsSuccess(true)
      setEmail("")

      // Close modal after 2 seconds
      setTimeout(() => {
        onOpenChange(false)
        setTimeout(() => {
          setIsSuccess(false)
        }, 300)
      }, 2000)
    } catch (err) {
      console.error("[v0] Waitlist signup error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
              <Check className="h-6 w-6 text-accent" />
            </div>
            <DialogTitle className="mb-2">You're on the list!</DialogTitle>
            <DialogDescription>
              We'll notify you when Highway is ready for a test drive.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Join the waitlist</DialogTitle>
              <DialogDescription>
                Be the first to experience self-driving content. We'll send you early access when we launch.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join waitlist"
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
