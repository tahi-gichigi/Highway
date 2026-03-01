import { Client } from "@notionhq/client"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json()

    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      )
    }

    const notionApiKey = process.env.NOTION_API_KEY
    const databaseId = process.env.NOTION_DATABASE_ID

    if (!notionApiKey || !databaseId) {
      console.error("Missing NOTION_API_KEY or NOTION_DATABASE_ID environment variables")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    const notion = new Client({ auth: notionApiKey })

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [{ text: { content: name } }],
        },
        Email: {
          email: email,
        },
        ...(company
          ? {
              Company: {
                rich_text: [{ text: { content: company } }],
              },
            }
          : {}),
        ...(message
          ? {
              Message: {
                rich_text: [{ text: { content: message } }],
              },
            }
          : {}),
      },
    })

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    console.error("Waitlist submission error:", error)

    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "validation_error"
    ) {
      return NextResponse.json(
        { error: "This email may already be on the waitlist." },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
