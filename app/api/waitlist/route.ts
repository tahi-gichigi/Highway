import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Basic server-side validation
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    const sql = neon(process.env.DATABASE_URL!)

    await sql`
      INSERT INTO waitlist_entries (email)
      VALUES (${email.toLowerCase().trim()})
    `

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    // Handle unique constraint violation (duplicate email)
    if (
      err instanceof Error &&
      "code" in err &&
      (err as { code: string }).code === "23505"
    ) {
      return NextResponse.json(
        { error: "This email is already on the waitlist!" },
        { status: 409 }
      )
    }

    console.error("Waitlist signup error:", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
